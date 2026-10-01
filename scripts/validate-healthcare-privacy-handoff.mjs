import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const slug = 'healthcare-administrative-support-privacy-evidence';
const serviceHref = '/services/healthcare-admin-assistants';
const marker = 'Plan healthcare admin assistant staffing';
const boundary = 'The healthcare owner keeps patient, clinical, access, and incident decisions.';
const canonical = `https://virtualassistantprovider.com/research/${slug}`;
const source = fs.readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
const recordStart = source.indexOf(`slug: '${slug}'`);
const recordEnd = source.indexOf("  { slug: 'real-estate-administration-fair-housing-evidence'", recordStart);
if (recordStart < 0 || recordEnd < 0) throw new Error('healthcare privacy record boundary is missing');
const record = source.slice(recordStart, recordEnd);
for (const expected of [
  `serviceHref: '${serviceHref}'`,
  `serviceLinkTitle: '${marker}'`,
  `serviceLinkDescription: 'Use this privacy review to define a Philippines-based healthcare admin role before access is granted. ${boundary}'`,
  "published: '2026-08-12'",
  "updated: '2026-10-01'",
]) {
  if (!record.includes(expected)) throw new Error(`healthcare privacy source contract missing: ${expected}`);
}
if (record.includes("updated: '2026-08-12'")) throw new Error('healthcare privacy record retained the retired modified date');

const htmlPath = path.join(root, '.next/server/app/research', `${slug}.html`);
if (!fs.existsSync(htmlPath)) throw new Error(`built route missing: ${htmlPath}`);
const html = fs.readFileSync(htmlPath, 'utf8');
const mainMatch = html.match(/<main\b[^>]*>[\s\S]*?<\/main>/);
if (!mainMatch) throw new Error('built healthcare route has no route-local main');
const main = mainMatch[0];
for (const expected of [marker, boundary, `href="${serviceHref}"`, 'dateTime="2026-10-01"']) {
  if (!main.includes(expected)) throw new Error(`built healthcare route missing: ${expected}`);
}
if ((main.match(new RegExp(`href="${serviceHref}"`, 'g')) || []).length !== 1) throw new Error('built healthcare route must have one route-local service handoff');
if (!html.includes(`rel="canonical" href="${canonical}"`) && !html.includes(`href="${canonical}" rel="canonical"`)) throw new Error('built healthcare route canonical is missing');
if (!html.includes('article:modified_time') || !html.includes('2026-10-01')) throw new Error('built healthcare route modified metadata is missing');

const sitemapPath = path.join(root, '.next/server/app/sitemap.xml.body');
if (!fs.existsSync(sitemapPath)) throw new Error(`built sitemap missing: ${sitemapPath}`);
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
if (!sitemap.includes(`<loc>${canonical}</loc>`)) throw new Error('healthcare route is missing from generated sitemap');
console.log('Healthcare privacy research handoff source and artifact regression: PASS');
