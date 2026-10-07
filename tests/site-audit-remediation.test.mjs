import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import nextConfig from '../next.config.mjs';
import { parseBlogPage } from '../app/blog/page-number.ts';
import { articleImageAlt, resolveArticleImage } from '../app/article-image.ts';
import { articleImageManifest } from '../app/article-image-manifest.mjs';

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

const genericFallbacks = new Set([
  '/featured/publishing-contingency-routine.png',
  '/featured/daily-research-brief-routine.png',
  '/featured/operations-assistant-daily-workflow.png',
  '/featured/virtual-assistant-appointment-setting-philippines.png',
]);

test('the explicit manifest covers the complete live generic-image corpus and every selected asset', () => {
  const exported = JSON.parse(execFileSync(process.execPath, [join(root, 'scripts/export-generic-corpus.cjs')], { encoding: 'utf8' }));
  const genericArticles = exported.rows;
  const genericSlugs = [...new Set(genericArticles.map((post) => post.slug))].sort();
  const manifestSlugs = Object.keys(articleImageManifest).sort();

  assert.equal(exported.total, 607);
  assert.equal(exported.generic, 416);
  assert.equal(genericArticles.length, 416);
  assert.equal(genericSlugs.length, 413);
  assert.deepEqual(manifestSlugs, genericSlugs);
  for (const post of genericArticles) {
    const choice = articleImageManifest[post.slug];
    assert.ok(choice, `missing manifest choice for ${post.slug}`);
    assert.ok(existsSync(join(root, 'public', choice.src)), `${choice.src} must exist`);
    assert.ok(choice.alt.length >= 35, `${post.slug} needs a curated alt description`);
    assert.doesNotMatch(choice.alt, /\bphilippines\b/i);
    assert.equal(resolveArticleImage(post), choice.src);
    assert.equal(articleImageAlt(choice.src), choice.alt);
    assert.ok(!genericFallbacks.has(choice.src), `${post.slug} retained a generic fallback`);
  }

  const resolverSource = read('app/article-image.ts');
  assert.doesNotMatch(resolverSource, /hash|defaultPool|phrases|matchAll/);
  assert.throws(
    () => resolveArticleImage({ title: 'Future generic article', slug: 'future-unreviewed-article', featuredImage: '/featured/publishing-contingency-routine.png' }),
    /Missing reviewed article image mapping/,
  );
  assert.equal(
    resolveArticleImage({ title: 'Authored article', slug: 'authored', featuredImage: '/featured/virtual-assistant-file-naming-philippines.png' }),
    '/featured/virtual-assistant-file-naming-philippines.png',
  );
});

test('reviewer-reported semantic collisions have exact curated outcomes', () => {
  const expected = new Map([
    ['virtual-assistant-website-content-inventory-philippines', '/featured/marketing-assistant-content-calendar.png'],
    ['virtual-assistant-construction-submittal-receipt-log', '/aug19-heroes/assistant-service-intake-source-register.webp'],
    ['virtual-assistant-travel-research-philippines', '/aug20-heroes/executive-travel-virtual-assistant-coordination.jpeg'],
    ['virtual-assistant-customer-refund-evidence-packet', '/featured/customer-support-qa-workflow.png'],
    ['virtual-assistant-august-23-refund-evidence-packet', '/featured/customer-support-qa-workflow.png'],
    ['virtual-assistant-manager-capacity-before-hiring', '/illustrations/getillustrations/grain-teamwork/role-planning-workflow.svg'],
    ['calculate-virtual-assistant-handoff-cost', '/illustrations/getillustrations/grain-teamwork/role-planning-workflow.svg'],
    ['bookkeeping-assistant-document-access-plan', '/featured/bookkeeping-assistant-control-checklist.png'],
    ['ecommerce-assistant-return-evidence-pack', '/featured/ecommerce-order-exception-workflow.png'],
    ['ecommerce-return-receipt-reconciliation-study', '/featured/ecommerce-order-exception-workflow.png'],
    ['recruiting-assistant-candidate-data-retention-tracker', '/featured/recruiting-assistant-sourcing-workflow.png'],
    ['recruiting-automated-screening-change-log-study', '/aug19-heroes/assistant-service-change-control-record.webp'],
    ['virtual-assistant-august-23-vendor-renewal-brief', '/aug19-heroes/assistant-service-work-queue-ownership.webp'],
    ['virtual-assistant-workload-review-philippines', '/illustrations/getillustrations/grain-teamwork/role-planning-workflow.svg'],
    ['virtual-assistant-escalation-response-time-matrix', '/featured/healthcare-admin-assistant-scheduling.png'],
    ['virtual-assistant-provider-tool-costs-comparison', '/featured/marketing-assistant-content-calendar.png'],
    ['virtual-assistant-communication-cadence-first-month', '/illustrations/getillustrations/grain-teamwork/role-planning-workflow.svg'],
    ['virtual-assistant-marketplace-listing-change-log', '/featured/ecommerce-order-exception-workflow.png'],
    ['virtual-assistant-property-maintenance-work-order-log', '/featured/real-estate-assistant-lead-follow-up.png'],
    ['virtual-assistant-film-release-form-register', '/aug19-heroes/assistant-service-intake-source-register.webp'],
    ['virtual-assistant-film-release-form-register-september-11-review', '/aug19-heroes/assistant-service-intake-source-register.webp'],
    ['virtual-assistant-film-release-form-register-september-14-review', '/aug19-heroes/assistant-service-intake-source-register.webp'],
    ['virtual-assistant-restaurant-allergen-content-calendar', '/featured/marketing-assistant-content-calendar.png'],
    ['virtual-assistant-social-content-approval-calendar', '/featured/marketing-assistant-content-calendar.png'],
    ['virtual-assistant-recruiter-calendar-philippines', '/featured/recruiting-assistant-sourcing-workflow.png'],
    ['virtual-assistant-password-manager-onboarding-checklist', '/aug19-heroes/assistant-service-access-recertification-review.webp'],
    ['virtual-assistant-construction-submittal-register', '/aug19-heroes/assistant-service-intake-source-register.webp'],
    ['virtual-assistant-vendor-renewal-fact-pack', '/aug19-heroes/assistant-service-work-queue-ownership.webp'],
  ]);
  for (const [slug, src] of expected) assert.equal(articleImageManifest[slug]?.src, src, slug);
});

test('editorial article images expose useful alternative text', () => {
  const renderers = [
    'app/blog/[slug]/page.tsx',
    'app/research/[slug]/page.tsx',
    'app/research/page.tsx',
    'app/blog/[slug]/bookkeeping-philippines-article.tsx',
    'app/blog/[slug]/customer-service-philippines-article.tsx',
    'app/blog/[slug]/ecommerce-philippines-article.tsx',
    'app/blog/[slug]/executive-assistant-philippines-article.tsx',
    'app/blog/[slug]/healthcare-philippines-article.tsx',
    'app/blog/[slug]/real-estate-philippines-article.tsx',
    'app/blog/[slug]/recruiting-philippines-article.tsx',
  ];
  for (const renderer of renderers) {
    assert.doesNotMatch(read(renderer), /<img[^>]*alt=""/, `${renderer} must not emit an empty editorial alt`);
  }
  for (const choice of Object.values(articleImageManifest)) {
    assert.ok(choice.alt.length >= 24, `${choice.src}: alt text is too short`);
    assert.doesNotMatch(choice.alt, /Editorial image|illustration for the article|\bpng\b|\bwebp\b/i, `${choice.src}: generic or filename-derived alt`);
    assert.equal(articleImageAlt(choice.src), choice.alt);
  }
  const authored = '/featured/virtual-assistant-call-handling-philippines.png';
  assert.throws(() => articleImageAlt(authored), /Missing article title/);
  assert.equal(
    articleImageAlt(authored, 'Virtual Assistant Call Handling Philippines'),
    'Featured illustration for “Virtual Assistant Call Handling Philippines”',
  );
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
