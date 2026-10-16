import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import nextConfig from '../next.config.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(join(root, path), 'utf8');

const reviews = [
  ['Chad Sublet', 'Lindsay has been incredible. She handles the tactical work, which has freed me up to focus on bigger-picture initiatives.'],
  ['Erika Giron', 'We went from 300 hours a month to over 2,500 hours with Stealth Agents.'],
  ['Alex Behrens', 'They have made a real difference in our day-to-day operations and truly feel like part of our internal team.'],
  ['Aisha Wonderfull', 'Gained time for sales and closed 3 clients within two days. Exceptional service.'],
  ['Owen Hone', 'Outstanding service. Less than 24-hour VA placement. Fast, high-quality. I have hired multiple times.'],
  ['Sarah Jacoby', 'Great communication, efficient and proactive assistant, visible business growth.'],
  ['Martine Cadet', 'The team learned my brand and goals and transformed my business. My dream team.'],
  ['Rich Cochran', 'We especially appreciate how diligent and pleasant Evy is. True pros.'],
  ['George Assi', 'Agents tackled diverse tasks seamlessly and manager Charm consistently provides excellent talent matches.'],
  ['Lee Maasen', 'Stealth Agents provided me with a fantastic virtual assistant who has been an absolute asset.'],
  ['Kevin Carabajal', 'VA George eliminated late-night documentation work, restoring my sleep and enabling proper business planning.'],
  ['Lynda Sunshine West', 'Paolo is exceptional. Communicative, fast turnaround, quality work every time.'],
];

test('shared shell keeps the subsidiary and parent attribution visible', () => {
  const shell = read('app/components.tsx');
  assert.equal((shell.match(/Powered by StealthAgents/g) || []).length, 2);
  assert.match(shell, /\/brand\/stealth-agents-logo-black\.png/);
  assert.equal((shell.match(/<a[^>]+href="\/"[^>]*>Home<\/a>/g) || []).length, 1);
  assert.match(shell, /<a[^>]+href="\/services"[^>]*>Services<\/a>/);
  assert.match(shell, /<a[^>]+href="\/contact-us"[^>]*>Contact Us<\/a>/);
  assert.match(shell, /href="#main-content"/);
  assert.match(shell, /<main id="main-content"|id="main-content"/);
  assert.equal(read('public/logo.svg'), read('public/icon.svg'));
});

test('mobile menu supplies the complete keyboard dialog contract', () => {
  const mobile = read('app/mobile-navigation.tsx');
  for (const contract of [/aria-expanded=\{open\}/, /aria-controls="mobile-navigation-panel"/, /event\.key === 'Escape'/, /event\.key !== 'Tab'/, /buttonRef\.current\?\.focus\(\)/]) assert.match(mobile, contract);
});

test('contact has twelve exact first-party reviews in a control-free horizontal marquee', () => {
  const booking = read('app/booking-components.tsx');
  const contact = read('app/contact-us/page.tsx');
  const css = read('app/globals.css') + read('app/v3-shell.css');
  for (const [name, quote] of reviews) {
    assert.match(booking, new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.ok(booking.includes(quote), `${name} quote must be exact`);
  }
  assert.match(booking, /StealthAgents reviews/);
  assert.match(booking, /https:\/\/stealthagents\.com\//);
  assert.doesNotMatch(booking, /<button|play|pause|previous|next|pagination/i);
  assert.match(booking, /aria-hidden=\{index >= reviews\.length/);
  assert.match(css, /@keyframes v3-review-marquee/);
  assert.match(css, /prefers-reduced-motion:reduce[\s\S]*\.v3-review-track[\s\S]*animation:none/);
  assert.match(contact, /contact-first-fold[\s\S]*TestimonialsRail[\s\S]*StandardContactForm/);
});

test('contact parent section immediately follows first fold and constrains official imagery', () => {
  const contact = read('app/contact-us/page.tsx');
  const css = read('app/globals.css') + read('app/v3-shell.css');
  assert.match(contact, /<\/section>\s*<section className="contact-parent-proof"/);
  assert.match(contact, /\/brand\/stealth-agents-team-bacolod\.png/);
  assert.match(contact, /\/brand\/stealth-agents-logo-black\.png/);
  assert.match(contact, />Official team, Bacolod</);
  assert.match(css, /\.contact-parent-photo[^}]*max-width:400px/);
  assert.doesNotMatch(contact, /oncehub|scheduleonce/i);
});

test('about is substantive and conversion pages preserve the approved journey', () => {
  assert.ok(existsSync(join(root, 'app/about/page.tsx')));
  const about = read('app/about/page.tsx');
  for (const phrase of ['Business model', 'Accountability', 'How the engagement works', 'Operating boundaries', '/contact-us']) assert.match(about, new RegExp(phrase, 'i'));
  assert.match(about, /<img[^>]+alt="[^"]{15,}"/);
  const thankYou = read('app/thank-you/page.tsx');
  const final = read('app/thanks-whats-next/page.tsx');
  assert.equal((thankYou.match(/https:\/\/go\.oncehub\.com\/StealthAgentsTeam/g) || []).length, 1);
  assert.match(final, /Your consultation is booked/);
  assert.doesNotMatch(contactAndOtherSchedulerSources(), /go\.oncehub\.com\/StealthAgentsTeam/);
});

function contactAndOtherSchedulerSources() {
  return [read('app/contact-us/page.tsx'), read('app/thanks-whats-next/page.tsx'), read('app/booking-components.tsx')].join('\n');
}

test('contact API performs a bounded read and validates forwarded origin safely', () => {
  const route = read('app/api/contact/route.ts');
  assert.match(route, /readBoundedBody/);
  assert.match(route, /getTrustedRequestOrigin/);
  assert.match(route, /429/);
  assert.doesNotMatch(route, /process\.env\.[A-Z_]+[^\n]*Response|console\.(?:log|error)\([^\n]*process\.env/);
});

test('canonical redirects cover protocol, hostname, and legacy contact', async () => {
  const redirects = await nextConfig.redirects();
  assert.ok(redirects.some((rule) => rule.source === '/contact' && rule.destination === '/contact-us' && rule.permanent));
  assert.ok(redirects.some((rule) => rule.has?.some((item) => item.type === 'host' && item.value === 'www.virtualassistantprovider.com')));
  assert.ok(redirects.some((rule) => rule.has?.some((item) => item.type === 'header' && item.key === 'x-forwarded-proto' && item.value === 'http')));
});
