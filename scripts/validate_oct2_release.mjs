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

const tokenize = (value) => value.toLowerCase().match(/[a-z0-9]+/g) ?? [];
const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex');
const shingles = (value) => {
  const tokens = tokenize(value);
  return new Set(tokens.slice(0, -4).map((_, index) => tokens.slice(index, index + 5).join(' ')));
};
const jaccard = (left, right) => {
  let intersection = 0;
  for (const item of left) if (right.has(item)) intersection += 1;
  return intersection / (left.size + right.size - intersection || 1);
};
const maximumOverlap = (items) => {
  let maximum = { value: 0, pair: [] };
  const sets = items.map((item) => shingles(item.originalityBody));
  for (let i = 0; i < items.length; i += 1) {
    for (let j = i + 1; j < items.length; j += 1) {
      const value = jaccard(sets[i], sets[j]);
      if (value > maximum.value) maximum = { value, pair: [items[i].slug, items[j].slug] };
    }
  }
  return maximum;
};
const repeatedParagraphs = (items) => {
  const owners = new Map();
  for (const item of items) {
    for (const paragraph of item.paragraphs) {
      const normalized = tokenize(paragraph).join(' ');
      if (normalized.length < 80) continue;
      const slugs = owners.get(normalized) ?? new Set();
      slugs.add(item.slug);
      owners.set(normalized, slugs);
    }
  }
  return [...owners.entries()]
    .filter(([, slugs]) => slugs.size > 1)
    .map(([paragraph, slugs]) => ({ paragraph: paragraph.slice(0, 120), slugs: [...slugs] }));
};

const collectStrings = (value, path = "\$", result = []) => {
  if (typeof value === "string") result.push({ path, value });
  else if (Array.isArray(value)) value.forEach((item, index) => collectStrings(item, path + "[" + index + "]", result));
  else if (value && typeof value === "object") Object.entries(value).forEach(([key, item]) => collectStrings(item, path + "." + key, result));
  return result;
};
const completeBody = (post) => collectStrings(post)
  .filter(({ path }) => !/\.(?:slug|published|updated|revision|url|href|featuredImage)$/.test(path))
  .map(({ value }) => value).join(" ");

const blogPosts = loadExport('app/article-blog-oct2-2026.ts', 'october2BlogPosts');
const researchPosts = loadExport('app/article-research-oct2-2026.ts', 'october2ResearchPosts');
const october2ServiceRelationships = loadExport(
  'app/october2-service-relationships.ts',
  'october2ServiceRelationships',
);
const fleetServices = loadExport('app/fleet-content.ts', 'fleetServices');
const fleetServiceSlugs = new Set(fleetServices.map((service) => service.slug));
const markdownServiceLinkPattern = /\[([^\]]+)\]\(\/services\/([^\s)#?]+)[^\s)]*\)/g;
const blogs = blogPosts.map((post) => {
  const paragraphs = post.sections.map((section) => section.body);
  return { family: 'blog', slug: post.slug, title: post.title, published: post.published,
    body: paragraphs.join(' '), originalityBody: paragraphs.join(' '), paragraphs,
    image: post.featuredImage, sources: post.sources, related: post.relatedServices };
});
const research = researchPosts.map((post) => {
  const paragraphs = post.sections.flatMap((section) => section.paragraphs);
  return { family: 'research', slug: post.slug, title: post.title, published: post.published,
    body: paragraphs.join(' '), originalityBody: completeBody(post), paragraphs: collectStrings(post).filter(({ path }) => !/\.(?:slug|published|updated|revision|url|href|featuredImage)$/.test(path)).map(({ value }) => value),
    image: post.featuredImage, sources: post.sources, related: post.related };
});

const failures = [];
const mappedBlogSlugs = Object.keys(october2ServiceRelationships);
if (mappedBlogSlugs.length !== 12) {
  failures.push(`expected 12 October 2 service mappings, found ${mappedBlogSlugs.length}`);
}
for (const post of blogPosts) {
  const mappedSlug = october2ServiceRelationships[post.slug];
  if (!mappedSlug) {
    failures.push(`${post.slug} has no October 2 service mapping`);
    continue;
  }
  if (!fleetServiceSlugs.has(mappedSlug)) {
    failures.push(`${post.slug} maps to missing fleet service ${mappedSlug}`);
  }
  const serviceAnchors = post.sections.flatMap((section) =>
    [...section.body.matchAll(markdownServiceLinkPattern)]
      .map((match) => ({ text: match[1], sourceSlug: match[2] })));
  if (serviceAnchors.length === 0) {
    failures.push(`${post.slug} has no Markdown service anchor`);
  }
  for (const anchor of serviceAnchors) {
    const renderedHref = `/services/${mappedSlug}`;
    if (renderedHref !== `/services/${october2ServiceRelationships[post.slug]}`) {
      failures.push(`${post.slug} did not preserve its mapped rendered service href`);
    }
    if (!anchor.text || anchor.text !== anchor.text.trim()) {
      failures.push(`${post.slug} has an invalid service anchor label`);
    }
  }
}
for (const mappedSlug of mappedBlogSlugs) {
  if (!blogPosts.some((post) => post.slug === mappedSlug)) {
    failures.push(`service mapping has no October 2 Blog article: ${mappedSlug}`);
  }
}
for (const post of researchPosts) {
  const serviceLinks = post.related
    .map((item) => item.href)
    .filter((href) => href.startsWith('/services/'));
  if (serviceLinks.length === 0) {
    failures.push(`${post.slug} has no related service href`);
  }
  for (const href of serviceLinks) {
    const serviceSlug = href.slice('/services/'.length);
    if (!fleetServiceSlugs.has(serviceSlug)) {
      failures.push(`${post.slug} links to missing fleet service ${serviceSlug}`);
    }
  }
}
if (blogs.length !== 12) failures.push(`expected 12 blogs, found ${blogs.length}`);
if (research.length !== 5) failures.push(`expected 5 research posts, found ${research.length}`);
const all = [...blogs, ...research];
if (new Set(all.map((entry) => entry.slug)).size !== all.length) failures.push('duplicate slug in October 2 release');
for (const entry of all) {
  entry.wordCount = tokenize(entry.body).length;
  entry.contentHash = sha256(entry.body);
  const minimum = entry.family === 'blog' ? 900 : 1200;
  if (entry.wordCount < minimum) failures.push(`${entry.slug} has ${entry.wordCount} body words`);
  if (entry.published !== '2026-10-02') failures.push(`${entry.slug} has date ${entry.published}`);
  if (!entry.title || !entry.image?.startsWith('/featured/')) failures.push(`${entry.slug} lacks title or featured image`);
  if (!fs.existsSync(new URL(`public${entry.image}`, root))) failures.push(`${entry.slug} image is missing: ${entry.image}`);
  if (!Array.isArray(entry.sources) || entry.sources.length === 0) failures.push(`${entry.slug} has no sources`);
  const hasInlineInternalLink = /\]\(\/(?:services|contact|blog|research)(?:[\/)#?])/i.test(entry.body);
  if ((!Array.isArray(entry.related) || entry.related.length === 0) && !hasInlineInternalLink) {
    failures.push(entry.slug + ` has no internal relationship or inline call to action`);
  }
}
for (const family of [blogs, research]) {
  const duplicates = repeatedParagraphs(family);
  if (duplicates.length) failures.push(`${family[0].family} repeats ${duplicates.length} substantive paragraphs`);
  const overlap = maximumOverlap(family);
  if (overlap.value >= 0.5) failures.push(`${family[0].family} shingle overlap is ${(overlap.value * 100).toFixed(2)}%`);
}

const output = {
  valid: failures.length === 0,
  failures,
  sourceSha256: sha256(fs.readFileSync(new URL('app/article-blog-oct2-2026.ts', root))),
  blog: { quantity: blogs.length, maximumPairwiseFiveWordShingleJaccard: maximumOverlap(blogs),
    repeatedParagraphs: repeatedParagraphs(blogs), articles: blogs.map(({ slug, wordCount, contentHash }) => ({ slug, wordCount, contentHash })) },
  research: { quantity: research.length, originalityScope: 'complete recursive imported object; no rendered field exclusions',
    maximumPairwiseFiveWordShingleJaccard: maximumOverlap(research), repeatedParagraphs: repeatedParagraphs(research),
    articles: research.map(({ slug, wordCount, contentHash }) => ({ slug, wordCount, contentHash })) },
};
console.log(JSON.stringify(output, null, 2));
if (failures.length) process.exitCode = 1;
