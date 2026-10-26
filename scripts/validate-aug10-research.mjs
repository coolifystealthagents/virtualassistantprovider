import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/research.json'), 'utf8'));
const legacySource = fs.readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
const publicationManifest = fs.readFileSync(path.join(root, 'app/publication-manifest.ts'), 'utf8');
const researchRoute = fs.readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
if (manifest.entries.length !== 10 || new Set(manifest.entries.map((entry) => entry.slug)).size !== 10) throw new Error('manifest must contain exactly 10 unique entries');
for (const entry of manifest.entries) {
  if (!entry.route.startsWith('/research/') || entry.sourcePath !== 'app/fleet-content.ts' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') throw new Error(`manifest contract failed: ${entry.slug}`);
  const record = legacySource.indexOf(`slug: '${entry.slug}'`);
  if (record < 0 || legacySource.indexOf("published: '2026-08-10'", record) < 0) throw new Error(`historical source date missing: ${entry.slug}`);
  if (publicationManifest.includes(`slug: '${entry.slug}'`)) throw new Error(`retired research remains published: ${entry.slug}`);
  const htmlPath = path.join(root, '.next/server/app/research', `${entry.slug}.html`);
  if (fs.existsSync(htmlPath)) throw new Error(`retired research unexpectedly generated: ${entry.slug}`);
}
if (!researchRoute.includes("generateStaticParams() { return publishedResearchPosts.map((post) => ({ slug: post.slug })); }") || !researchRoute.includes("if (!post) permanentRedirect('/research');")) throw new Error('retired research route must stay outside static output and redirect to the reviewed research index');
console.log('August 10 research retirement and redirect regression: PASS');
