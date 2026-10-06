import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import nextConfig from '../next.config.mjs';
import { parseBlogPage } from '../app/blog/page-number.ts';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(join(root, path), 'utf8');

function sourceFiles(dir) {
  return readdirSync(join(root, dir), { withFileTypes: true }).flatMap((entry) => {
    const relative = join(dir, entry.name);
    return entry.isDirectory() ? sourceFiles(relative) : /\.(?:ts|tsx|mjs)$/.test(entry.name) ? [relative] : [];
  });
}

test('current internal content uses the live Philippines hiring guide and preserves a legacy redirect', async () => {
  const appSource = sourceFiles('app').map((path) => read(path)).join('\n');
  assert.doesNotMatch(appSource, /\/blog\/virtual-assistant-hiring-guide-philippines/);
  assert.match(appSource, /\/research\/hire-virtual-assistant-philippines-evidence-guide/);

  const redirects = await nextConfig.redirects();
  assert.deepEqual(redirects.find(({ source }) => source === '/blog/virtual-assistant-hiring-guide-philippines'), {
    source: '/blog/virtual-assistant-hiring-guide-philippines',
    destination: '/research/hire-virtual-assistant-philippines-evidence-guide',
    permanent: true,
  });
});

test('every literal local featured image resolves to a public asset', () => {
  const missing = [];
  let checked = 0;
  for (const path of sourceFiles('app')) {
    const source = read(path);
    for (const match of source.matchAll(/(?:['"]?featuredImage['"]?)\s*:\s*['"](\/[^'"]+)['"]/g)) {
      checked += 1;
      if (!existsSync(join(root, 'public', match[1]))) missing.push(`${path}: ${match[1]}`);
    }
  }
  assert.ok(checked >= 199, `expected to check at least 199 featured images, checked ${checked}`);
  assert.deepEqual(missing, []);
});

test('sitemap includes every indexable core destination', () => {
  const sitemap = read('app/sitemap.xml/route.ts');
  for (const path of ["'/pricing'", "'/contact'", "'/services'", "'/blog'", "'/research'"]) {
    assert.match(sitemap, new RegExp(path.replace('/', '\\/')));
  }
});

test('audited core pages declare their intended canonical destination', () => {
  const expected = new Map([
    ['app/page.tsx', '/'],
    ['app/services/page.tsx', '/services'],
    ['app/blog/page.tsx', '/blog'],
    ['app/pricing/page.tsx', '/pricing'],
    ['app/contact/page.tsx', '/contact'],
    ['app/privacy/page.tsx', '/privacy'],
    ['app/terms/page.tsx', '/terms'],
    ['app/cancellation-policy/page.tsx', '/cancellation-policy'],
  ]);

  for (const [file, canonical] of expected) {
    const source = read(file);
    assert.match(source, /alternates\s*:\s*\{\s*canonical\s*:/, `${file} lacks canonical metadata`);
    assert.ok(source.includes(`canonical:'${canonical}'`) || source.includes(`canonical: '${canonical}'`), `${file} must canonicalize to ${canonical}`);
  }

  const cancellation = read('app/cancellation/page.tsx');
  assert.match(cancellation, /canonical\s*:\s*['"]\/cancellation-policy['"]/);
});

test('numbered blog pages publish self-referencing canonical metadata', () => {
  const source = read('app/blog/page/[page]/page.tsx');
  assert.match(source, /generateMetadata/);
  assert.match(source, /page\/\$\{number\}/);
  assert.match(source, /alternates\s*:\s*\{\s*canonical/);
  assert.equal(parseBlogPage('1', 19), 1);
  assert.equal(parseBlogPage('19', 19), 19);
  for (const invalid of ['0', '-1', '01', '1.5', 'foo', '20', '999999999999999999999']) {
    assert.equal(parseBlogPage(invalid, 19), null, `${invalid} must be rejected`);
  }
});

test('service pages use role-specific copy and role-specific illustrations', () => {
  const data = read('app/fleet-content.ts');
  const page = read('app/services/[slug]/page.tsx');

  assert.doesNotMatch(data, /delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules/);
  assert.doesNotMatch(data, /source-record checks and updates/);
  assert.equal((data.match(/"heroImage"\s*:/g) || []).length, 10);
  assert.equal((data.match(/"heroImageAlt"\s*:/g) || []).length, 10);
  const missingHeroes = [...data.matchAll(/"heroImage"\s*:\s*"(\/[^"\n]+)"/g)]
    .map((match) => match[1])
    .filter((path) => !existsSync(join(root, 'public', path)));
  assert.deepEqual(missingHeroes, []);
  assert.match(page, /src=\{s\.heroImage\}/);
  assert.match(page, /alt=\{s\.heroImageAlt\}/);
});
