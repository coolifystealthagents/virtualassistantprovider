import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, '.paperclip/aug10-2026/research.json'), 'utf8'));
const source = fs.readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
if (manifest.entries.length !== 10 || new Set(manifest.entries.map((e) => e.slug)).size !== 10) throw new Error('manifest must contain exactly 10 unique entries');
for (const entry of manifest.entries) {
  if (!entry.route.startsWith('/research/') || entry.sourcePath !== 'app/fleet-content.ts' || entry.sourceDate !== '2026-08-10' || entry.renderedDate !== '2026-08-10') throw new Error(`manifest contract failed: ${entry.slug}`);
  const record = source.indexOf(`slug: '${entry.slug}'`);
  if (record < 0 || source.indexOf("published: '2026-08-10'", record) < 0) throw new Error(`source date missing: ${entry.slug}`);
  const htmlPath = path.join(root, '.next/server/app/research', `${entry.slug}.html`);
  if (!fs.existsSync(htmlPath)) throw new Error(`built route missing: ${entry.slug}`);
  const html = fs.readFileSync(htmlPath, 'utf8');
  if (!html.includes('2026-08-10') || !html.includes('datePublished') || !html.includes(`https://virtualassistantprovider.com/research/${entry.slug}`)) throw new Error(`rendered route failed: ${entry.slug}`);
}
if (!source.includes('.sort((a, b) => b.published.localeCompare(a.published))')) throw new Error('research index is not newest-first');
console.log('August 10 research source/render/index regression: PASS');
