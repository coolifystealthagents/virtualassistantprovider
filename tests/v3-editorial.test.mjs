import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

test('reviewed publication manifest is the only editorial publication source', () => {
  const manifest = read('app/publication-manifest.ts');
  assert.match(manifest, /publicationStatus:\s*'reviewed'/);
  assert.match(manifest, /export const publishedBlogPosts/);
  assert.match(manifest, /export const publishedResearchPosts/);
  assert.match(manifest, /retiredBlogCount/);
  assert.match(manifest, /retiredResearchCount/);
  assert.doesNotMatch(manifest, /\.filter\([^)]*published/);
});

test('blog and research routes use curated sets and permanent retirement redirects', () => {
  for (const path of ['app/blog/[slug]/page.tsx', 'app/research/[slug]/page.tsx']) {
    const source = read(path);
    assert.match(source, /permanentRedirect/);
    assert.match(source, /published(?:Blog|Research)Posts/);
    assert.match(source, /generateStaticParams/);
    assert.doesNotMatch(source, /notFound\(/);
  }
  assert.match(read('app/blog/blog-listing.tsx'), /publishedBlogPosts/);
  assert.match(read('app/research/page.tsx'), /publishedResearchPosts/);
});

test('shared article frame provides complete sticky and mobile navigation', () => {
  const frame = read('app/editorial/EditorialArticle.tsx');
  const toc = read('app/editorial/ArticleToc.tsx');
  const css = read('app/editorial/editorial.module.css');
  assert.match(frame, /<Header \/>/);
  assert.match(frame, /<Footer \/>/);
  assert.match(frame, /ArticleToc/);
  assert.match(frame, /<time/);
  assert.match(frame, /Related service/);
  assert.match(frame, /Sources/);
  assert.match(toc, /IntersectionObserver/);
  assert.match(toc, /aria-current/);
  assert.match(css, /position:\s*sticky/);
  assert.match(css, /scroll-margin-top/);
  assert.match(css, /overflow-y:\s*auto/);
  assert.match(css, /@media\s*\(max-width:/);
  assert.match(toc, /<details/);
});

test('curated articles have distinct 1200 by 675 heroes, dates, descriptions and headings', () => {
  const manifest = read('app/publication-manifest.ts');
  const images = [...manifest.matchAll(/heroImage:\s*'([^']+)'/g)].map((m) => m[1]);
  assert.equal(images.length, 2);
  assert.equal(new Set(images).size, images.length);
  for (const image of images) assert.ok(existsSync(join(root, 'public', image.replace(/^\//, ''))), image);
  assert.doesNotMatch(manifest, /[–—]/);
  assert.doesNotMatch(manifest, /--/);
  assert.match(manifest, /published:\s*'\d{4}-\d{2}-\d{2}'/);
  assert.match(manifest, /sections:\s*(?:roleSections|researchSections)\(/);
});

test('sitemap contains only canonical reviewed editorial routes and about', () => {
  const sitemap = read('app/sitemap.xml/route.ts');
  assert.match(sitemap, /publishedBlogPosts/);
  assert.match(sitemap, /publishedResearchPosts/);
  assert.match(sitemap, /'\/about'/);
  assert.doesNotMatch(sitemap, /aug19Meta/);
  assert.doesNotMatch(sitemap, /blogPosts\.map/);
  assert.doesNotMatch(sitemap, /researchPosts\.map/);
});

test('unreviewed comparison directory is permanently retired', () => {
  const comparison = read('app/blog/top-50-virtual-assistant-providers/page.tsx');
  assert.match(comparison, /permanentRedirect\('\/blog'\)/);
  assert.doesNotMatch(read('app/sitemap.xml/route.ts'), /top-50-virtual-assistant-providers/);
});
