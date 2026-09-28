import crypto from 'node:crypto';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const root = new URL('../', import.meta.url);
const loadExport = (relativePath, exportName) => {
  const source = fs.readFileSync(new URL(relativePath, root), 'utf8');
  const js = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const context = { exports: {}, module: { exports: {} }, require: () => ({}) };
  vm.runInNewContext(`${js}\nglobalThis.__result = exports.${exportName};`, context);
  return JSON.parse(JSON.stringify(context.__result));
};

const words = (value) => value.trim().split(/\s+/).filter(Boolean);
const normalizedWords = (value) => value.toLowerCase().match(/[a-z0-9]+/g) ?? [];
const shingles = (value) => {
  const tokens = normalizedWords(value);
  return new Set(tokens.slice(0, -4).map((_, index) => tokens.slice(index, index + 5).join(' ')));
};
const jaccard = (left, right) => {
  let intersection = 0;
  for (const item of left) if (right.has(item)) intersection += 1;
  return intersection / (left.size + right.size - intersection || 1);
};
const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');
const maximumOverlap = (items) => {
  let maximum = { value: 0, pair: [] };
  const sets = items.map((item) => shingles(item.body));
  for (let i = 0; i < items.length; i += 1) {
    for (let j = i + 1; j < items.length; j += 1) {
      const value = jaccard(sets[i], sets[j]);
      if (value > maximum.value) maximum = { value, pair: [items[i].slug, items[j].slug] };
    }
  }
  return maximum;
};

const blogPosts = loadExport('app/article-blog-sep28-2026.ts', 'september28BlogPosts');
const researchPosts = loadExport('app/article-research-sep28-2026.ts', 'september28ResearchPosts');
const blogs = blogPosts.map((post) => ({
  family: 'blog', slug: post.slug, published: post.published,
  body: post.sections.map((section) => section.body).join(' '),
  image: post.featuredImage, links: post.articleLinks,
}));
const research = researchPosts.map((post) => ({
  family: 'research', slug: post.slug, published: post.published,
  body: post.sections.flatMap((section) => section.paragraphs).join(' '),
  image: post.featuredImage, links: post.related,
}));
const families = { blog: blogs, research };
const failures = [];

if (blogs.length !== 12) failures.push(`expected 12 blogs, found ${blogs.length}`);
if (research.length !== 5) failures.push(`expected 5 research posts, found ${research.length}`);
for (const [family, entries] of Object.entries(families)) {
  const minimum = family === 'blog' ? 900 : 1200;
  const duplicateBodies = entries.length - new Set(entries.map((entry) => sha256(entry.body))).size;
  if (duplicateBodies) failures.push(`${family} contains ${duplicateBodies} duplicate bodies`);
  for (const entry of entries) {
    entry.wordCount = words(entry.body).length;
    entry.contentHash = sha256(entry.body);
    if (entry.wordCount < minimum) failures.push(`${entry.slug} has ${entry.wordCount} body words`);
    if (entry.published !== '2026-09-28') failures.push(`${entry.slug} has date ${entry.published}`);
    if (!entry.image?.startsWith('/featured/')) failures.push(`${entry.slug} has invalid featured image`);
    if (!Array.isArray(entry.links) || entry.links.length === 0) failures.push(`${entry.slug} has no internal links`);
  }
}

const blogManifest = JSON.parse(fs.readFileSync(new URL('.paperclip/daily-content/2026-09-28-blog-draft.json', root)));
const researchManifest = JSON.parse(fs.readFileSync(new URL('.paperclip/daily-content/2026-09-28/research.json', root)));
const manifestSlugs = (manifest, key) => (manifest[key] ?? manifest.articles).map((entry) => entry.slug);
for (const [family, entries, manifest, key] of [
  ['blog', blogs, blogManifest, 'blogs'], ['research', research, researchManifest, 'articles'],
]) {
  const expected = entries.map((entry) => entry.slug).sort();
  const actual = manifestSlugs(manifest, key).sort();
  if (JSON.stringify(expected) !== JSON.stringify(actual)) failures.push(`${family} manifest slug inventory differs`);
}

const output = {
  valid: failures.length === 0,
  failures,
  blog: {
    quantity: blogs.length,
    wordCounts: Object.fromEntries(blogs.map((entry) => [entry.slug, entry.wordCount])),
    contentHashes: Object.fromEntries(blogs.map((entry) => [entry.slug, entry.contentHash])),
    maximumPairwiseFiveWordShingleJaccard: maximumOverlap(blogs),
  },
  research: {
    quantity: research.length,
    wordCounts: Object.fromEntries(research.map((entry) => [entry.slug, entry.wordCount])),
    contentHashes: Object.fromEntries(research.map((entry) => [entry.slug, entry.contentHash])),
    maximumPairwiseFiveWordShingleJaccard: maximumOverlap(research),
  },
};
console.log(JSON.stringify(output, null, 2));
if (failures.length) process.exitCode = 1;
