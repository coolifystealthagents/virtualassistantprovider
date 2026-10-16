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
import {
  ACR_PENDING_LEAD_KEY,
  flushPendingAcrLead,
  trackOrQueueAcrLead,
} from '../app/acr-lead-queue.ts';

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

  assert.equal(exported.total, 675);
  assert.equal(exported.generic, 426);
  assert.equal(genericArticles.length, 426);
  assert.equal(genericSlugs.length, 418);
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

test('sitemap includes the canonical contact route and excludes funnel confirmation pages', () => {
  const sitemap = read('app/sitemap.xml/route.ts');
  for (const path of ["'/pricing'", "'/contact-us'", "'/services'", "'/blog'", "'/research'"]) {
    assert.match(sitemap, new RegExp(path.replace('/', '\\/')));
  }
  assert.doesNotMatch(sitemap, /['"]\/contact['"]/);
  assert.doesNotMatch(sitemap, /['"]\/thank-you['"]/);
  assert.doesNotMatch(sitemap, /['"]\/thanks-whats-next['"]/);
});

test('contact journey has one canonical entry and all three required steps', async () => {
  const redirects = await nextConfig.redirects();
  assert.deepEqual(redirects.find(({ source }) => source === '/contact'), {
    source: '/contact',
    destination: '/contact-us',
    permanent: true,
  });

  const contact = read('app/contact-us/page.tsx');
  assert.match(contact, /contact-first-fold/);
  assert.match(contact, /<StandardContactForm endpoint="\/api\/contact" encoding="form"/);
  assert.match(contact, /TestimonialsRail contact/);
  assert.match(contact, /\/brand\/stealth-agents-logo-black\.png/);
  assert.match(contact, /\/brand\/stealth-agents-team-bacolod\.png/);
  assert.match(contact, />Official team, Bacolod</);
  assert.doesNotMatch(contact, /oncehub|scheduleonce/i);
  assert.doesNotMatch(contact, /\["0[1-9]"/);

  const thankYou = read('app/thank-you/page.tsx');
  assert.match(thankYou, /go\.oncehub\.com\/StealthAgentsTeam/);
  assert.match(thankYou, /href=\{bookingUrl\}/);
  assert.doesNotMatch(thankYou, /href=["']\/thanks-whats-next["']/);
  assert.doesNotMatch(thankYou, /Booked successfully\?/);
  assert.doesNotMatch(thankYou, /Your request was received/i);
  assert.ok(existsSync(join(root, 'app/thanks-whats-next/page.tsx')));
  const finalStep = read('app/thanks-whats-next/page.tsx');
  assert.match(finalStep, /Thanks.*what.*next|What happens next/is);
  assert.match(finalStep, /If you completed the booking/);
  assert.doesNotMatch(finalStep, />Meeting scheduled</);
});

test('global navigation uses exact labels and a keyboard-operable sticky mobile menu', () => {
  const components = read('app/components.tsx');
  const mobile = read('app/mobile-navigation.tsx');
  assert.match(components, /className="nav fleet-nav sticky-site-header"/);
  assert.match(components, /aria-label="Main navigation"/);
  assert.match(components, /Skip to main content/);
  assert.match(mobile, /aria-label="Mobile navigation"/);
  assert.match(mobile, /aria-expanded=\{open\}/);
  assert.match(mobile, /aria-controls="mobile-navigation-panel"/);
  assert.match(mobile, /event\.key === 'Escape'/);
  assert.match(mobile, /document\.body\.style\.overflow = 'hidden'/);
  assert.match(mobile, /matchMedia\(['"]\(min-width:\s*801px\)['"]\)/);
  assert.match(mobile, /addEventListener\(['"]change["'],\s*closeAtDesktop/);
  for (const item of ['Home', 'Services', 'Contact Us']) assert.match(components + mobile, new RegExp(`(?:label: '|>)${item}(?:'|<)`));
  assert.doesNotMatch(components + mobile, /href="\/contact"/);
  assert.match(components + mobile, /href: '\/contact-us'|href="\/contact-us"/);
});

test('contact form owns submission and global analytics does not intercept it', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  assert.match(form, /phone: phone/);
  assert.match(form, /trackOrQueueAcrLead\(payload\)/);
  const queue = read('app/acr-lead-queue.ts');
  assert.match(queue, /sessionStorage\.setItem\(ACR_PENDING_LEAD_KEY/);
  assert.match(queue, /sessionStorage\.removeItem\(ACR_PENDING_LEAD_KEY\)/);
  assert.match(form, /source:\s*["']contact-form["']/);
  assert.match(form, /window\.location\.assign\("\/thank-you"\)/);
  assert.match(form, /role="alert"/);
  assert.match(form, /Submit and Choose a Meeting Time/);
  assert.doesNotMatch(form, /Book a Free Consultation/);

  const analytics = read('app/acr-client.tsx');
  assert.match(analytics, /flushPendingAcrLead\(\)/);
  assert.doesNotMatch(analytics, /addEventListener\(['"]submit/);
  assert.doesNotMatch(analytics, /alert\s*\(/);

  const layout = read('app/layout.tsx');
  assert.doesNotMatch(layout, /funnel_booking_confirmed/);
  assert.match(layout, /funnel_booking_next_steps_view/);
});

test('ACR lead queue preserves order and invokes each queued event at most once', () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
  };
  const attempted = [];
  const previousWindow = globalThis.window;
  try {
    globalThis.window = { sessionStorage: storage };
    assert.equal(trackOrQueueAcrLead({ id: 'first' }), 'queued');
    assert.equal(trackOrQueueAcrLead({ id: 'second' }), 'queued');
    assert.deepEqual(JSON.parse(values.get(ACR_PENDING_LEAD_KEY)), [{ id: 'first' }, { id: 'second' }]);

    globalThis.window.acrTracker = {
      trackLead(payload) {
        attempted.push(payload.id);
        if (payload.id === 'first') throw new Error('ambiguous tracker failure');
      },
    };
    assert.equal(flushPendingAcrLead(), 'sent');
    assert.deepEqual(attempted, ['first', 'second']);
    assert.equal(values.has(ACR_PENDING_LEAD_KEY), false);
    assert.equal(flushPendingAcrLead(), 'empty');
    assert.deepEqual(attempted, ['first', 'second']);
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});

test('ACR lead queue contains malformed or unavailable storage failures', () => {
  const previousWindow = globalThis.window;
  try {
    const values = new Map([[ACR_PENDING_LEAD_KEY, '{not-json']]);
    globalThis.window = {
      sessionStorage: {
        getItem: (key) => values.get(key) ?? null,
        setItem: (key, value) => values.set(key, value),
        removeItem: (key) => values.delete(key),
      },
    };
    assert.equal(flushPendingAcrLead(), 'empty');
    assert.equal(values.has(ACR_PENDING_LEAD_KEY), false);

    let attempts = 0;
    globalThis.window = {
      sessionStorage: {
        getItem() { throw new Error('storage denied'); },
        setItem() { throw new Error('storage denied'); },
        removeItem() { throw new Error('storage denied'); },
      },
      acrTracker: { trackLead() { attempts += 1; throw new Error('tracker failed after invocation'); } },
    };
    assert.equal(trackOrQueueAcrLead({ id: 'privacy-mode' }), 'attempted');
    assert.equal(attempts, 1);
    assert.equal(flushPendingAcrLead(), 'waiting');
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});

test('ACR lead queue retains work across intermittent read and drain failures', () => {
  const previousWindow = globalThis.window;
  try {
    const values = new Map();
    let reads = 0;
    let failNextWrite = false;
    const storage = {
      getItem(key) {
        reads += 1;
        if (reads === 2) throw new Error('transient read failure');
        return values.get(key) ?? null;
      },
      setItem(key, value) {
        if (failNextWrite) {
          failNextWrite = false;
          throw new Error('transient write failure');
        }
        values.set(key, value);
      },
      removeItem: (key) => values.delete(key),
    };
    const attempted = [];
    globalThis.window = { sessionStorage: storage };

    assert.equal(trackOrQueueAcrLead({ id: 'retained' }), 'queued');
    assert.deepEqual(JSON.parse(values.get(ACR_PENDING_LEAD_KEY)), [{ id: 'retained' }]);

    values.set(ACR_PENDING_LEAD_KEY, JSON.stringify([{ id: 'retained' }, { id: 'second' }]));
    globalThis.window.acrTracker = { trackLead: (payload) => attempted.push(payload.id) };
    failNextWrite = true;
    assert.equal(flushPendingAcrLead(), 'waiting');
    assert.deepEqual(attempted, []);
    assert.deepEqual(JSON.parse(values.get(ACR_PENDING_LEAD_KEY)), [{ id: 'retained' }, { id: 'second' }]);

    assert.equal(flushPendingAcrLead(), 'sent');
    assert.deepEqual(attempted, ['retained', 'second']);
    assert.equal(values.has(ACR_PENDING_LEAD_KEY), false);
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});

test('public route configuration links directly to canonical contact-us', () => {
  const banners = JSON.parse(read('app/blog-banner-profile.json'));
  for (const [position, profiles] of Object.entries(banners.positions)) {
    for (const profile of profiles) assert.equal(profile.href, '/contact-us', `${position}:${profile.id} must avoid the legacy contact redirect`);
  }
  for (const file of [
    'publishing/2026-10-12/generate-content.mjs',
    'publishing/2026-10-12/validate_batch.mjs',
    'publishing/2026-10-13/generate_batch.py',
    'publishing/2026-10-13/validate_batch.mjs',
    'scripts/generate_sep28_blog.js',
  ]) assert.doesNotMatch(read(file), /\/contact(?:[/?#"'`]|$)/, `${file} must not regenerate legacy contact links`);
  for (const file of sourceFiles('app')) {
    assert.doesNotMatch(read(file), /(?:href|url|ctaLink|link):?\s*[=]?\s*["']\/contact["']|href=["']\/contact["']|\]\(\/contact\)/, `${file} must link directly to /contact-us`);
  }
});

test('punctuation and numbering normalization preserve readable content', () => {
  const appSource = sourceFiles('app').map((path) => read(path)).join('\n');
  assert.doesNotMatch(appSource, /[\u2013\u2014]| {2}- {2}/);
  assert.doesNotMatch(appSource, /Alternative explanations-including|unavailability-must|can-and cannot-establish|verification-do not ship|digital-to/);
  assert.doesNotMatch(appSource, /\b[A-Za-z]+\.(?:s|t|re|ve|ll|d|m)\b/, 'contractions and possessives must retain apostrophes');
  for (const file of ['app/page.tsx', 'app/services/page.tsx']) {
    const source = read(file);
    assert.doesNotMatch(source, /padStart\(2|number:'0[1-9]'|>0\{i\+1\}/, `${file} must not render decorative zero-padded labels`);
  }
});

test('October 13 manifest validator checks source hashes and word counts', () => {
  const validator = read('publishing/2026-10-13/validate_batch.mjs');
  assert.match(validator, /manifest source hash/);
  assert.match(validator, /manifest word count/);
  assert.match(validator, /sourceHash/);
  assert.match(validator, /postWordCount/);
});

test('release headers protect every route', async () => {
  const rules = await nextConfig.headers();
  const all = rules.find(({ source }) => source === '/(.*)');
  assert.ok(all);
  const headers = new Map(all.headers.map(({ key, value }) => [key.toLowerCase(), value]));
  for (const name of ['content-security-policy', 'strict-transport-security', 'x-content-type-options', 'referrer-policy', 'permissions-policy']) {
    assert.ok(headers.has(name), `${name} is required`);
  }
});

test('audited core pages declare their intended canonical destination', () => {
  const expected = new Map([
    ['app/page.tsx', '/'],
    ['app/services/page.tsx', '/services'],
    ['app/blog/page.tsx', '/blog'],
    ['app/pricing/page.tsx', '/pricing'],
    ['app/contact-us/page.tsx', '/contact-us'],
    ['app/privacy/page.tsx', '/privacy'],
    ['app/terms/page.tsx', '/terms'],
    ['app/cancellation-policy/page.tsx', '/cancellation-policy'],
  ]);

  for (const [file, canonical] of expected) {
    const source = read(file);
    assert.match(source, /alternates\s*:\s*\{\s*canonical\s*:/, `${file} lacks canonical metadata`);
    assert.ok(source.includes(`canonical:'${canonical}'`) || source.includes(`canonical: '${canonical}'`) || source.includes(`canonical: "${canonical}"`), `${file} must canonicalize to ${canonical}`);
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

test('error state, favicon, article cards, and first-fold contact structure are explicit', () => {
  const layout = read('app/layout.tsx');
  const notFound = read('app/not-found.tsx');
  const blog = read('app/blog/blog-listing.tsx');
  const contact = read('app/contact-us/page.tsx');
  const form = read('app/contact-us/StandardContactForm.tsx');
  const css = read('app/globals.css');
  assert.match(layout, /icons:\s*\{/);
  assert.match(notFound, /robots:\s*\{\s*index:\s*false/);
  assert.match(notFound, /Explore services/);
  assert.match(notFound, /Contact Us/);
  assert.match(blog, /blog-card-image/);
  assert.match(blog, /resolveArticleImage/);
  assert.match(contact, /contact-first-fold/);
  for (const field of ['firstName', 'lastName', 'email', 'phoneLocal', 'companyName', 'website', 'companySize', 'positions', 'referral', 'message']) assert.match(form, new RegExp(`name=["']${field}["']`));
  assert.match(css, /@keyframes sa-testimonial-slide/);
  assert.match(css, /translateX/);
  assert.match(css, /min-height:calc\(100svh - 76px\)/);
});

test('independent review corrections remain explicit', () => {
  const form = read('app/contact-us/StandardContactForm.tsx');
  const contact = read('app/contact-us/page.tsx');
  const services = read('app/services/page.tsx');
  const directory = read('app/blog/top-50-virtual-assistant-providers/page.tsx');
  const booking = read('app/thank-you/page.tsx');
  const contactRoute = read('app/api/contact/route.ts');
  const css = read('app/globals.css');
  const registry = read('design-registry.json');

  for (const field of ['tier', 'privacy', 'source']) assert.match(form, new RegExp(`name=["']${field}["']`));
  assert.match(form, /trackOrQueueAcrLead/);
  assert.match(contact, /Powered by Stealth Agents\. Official team, Bacolod\./);
  assert.match(services, /Explore every service guide/);
  assert.match(services, /fleetServices\.map/);
  assert.match(directory, /unranked-provider-directory/);
  assert.match(directory, /alphabetical directory/i);
  assert.doesNotMatch(directory, /stealth-agents-ranked-first|#1 Stealth Agents|best-hire-or-money-back/);
  assert.doesNotMatch(booking, /href="\/thanks-whats-next"/);
  assert.match(contactRoute, /text\(form,'countryCode'/);
  assert.match(contactRoute, /Privacy consent: accepted/);
  assert.match(contactRoute, /PRODUCTION_ORIGINS/);
  assert.match(contactRoute, /https:\/\/virtualassistantprovider\.com/);
  assert.doesNotMatch(contactRoute, /x-forwarded-host/);
  const nextConfig = read('next.config.mjs');
  assert.match(nextConfig, /type:'host',value:'www\.virtualassistantprovider\.com'/);
  assert.match(nextConfig, /key:'x-forwarded-proto',value:'http'/);
  assert.match(css, /\.article-only-nav\{position:sticky/);
  assert.match(css, /\.links,\.fleet-links\{display:none!important\}/);
  assert.match(registry, /editorial staffing field guide/);
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
  assert.match(page, /src=\{service\.heroImage\}/);
  assert.match(page, /alt=\{service\.heroImageAlt\}/);
  const details = read('app/service-details.ts');
  for (const section of ['whoFor', 'inputs', 'deliverables', 'scenario', 'faq', 'related']) assert.match(details, new RegExp(`${section}:`));
  assert.match(page, /Quality controls/);
  assert.match(page, /Launch workflow/);
  assert.match(page, /Related services/);
});
