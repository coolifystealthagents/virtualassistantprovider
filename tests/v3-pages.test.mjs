import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const pageFiles = ['app/page.tsx', 'app/services/page.tsx', 'app/services/[slug]/page.tsx', 'app/pricing/page.tsx', 'app/service-details.ts'];
const axes = ['heroComposition', 'typeCharacter', 'paletteFamily', 'shapeGrammar', 'imageTreatment', 'sectionRhythm', 'navigationTreatment', 'motionSignature', 'density', 'signatureElement'];

test('V3 design governance records the complete fingerprint and scored comparison', () => {
  const registry = JSON.parse(read('design-registry.json'));
  assert.ok(Array.isArray(registry.sites) && registry.sites.length);
  for (const entry of registry.sites) {
    for (const field of ['site', 'industry', 'audience', ...axes]) assert.ok(entry[field], `${field} is required`);
    assert.ok(Array.isArray(entry.comparisons) && entry.comparisons.length, 'comparison is required');
    for (const comparison of entry.comparisons) {
      const scores = axes.map((axis) => comparison.scores[axis]);
      assert.ok(scores.every((score) => Number.isInteger(score) && score >= 1 && score <= 10));
      assert.ok(scores.filter((score) => score >= 8).length < 4, 'too similar to prior entry');
    }
  }
});

test('design read declares the mandated V3 settings and decisions', () => {
  const design = read('docs/design-read.md');
  assert.match(design, /Reading this as: /);
  assert.match(design, /DESIGN_VARIANCE:\s*8/);
  assert.match(design, /MOTION_INTENSITY:\s*3/);
  assert.match(design, /VISUAL_DENSITY:\s*6/);
  assert.match(design, /Redesign mode:\s*overhaul/i);
  for (const decision of ['theme', 'accent', 'shape', 'typography', 'image', 'motion']) assert.match(design, new RegExp(`${decision}.*:`, 'i'));
});

test('homepage, service index, detail, and pricing use their page owned V3 system', () => {
  for (const file of pageFiles.slice(0, 4)) assert.match(read(file), /v3-pages\.module\.css/);
  const home = read('app/page.tsx');
  assert.match(home, /Hire a Philippines based assistant for a defined workflow/);
  assert.doesNotMatch(home, /<p className=.*eyebrow[^>]*>[^<]*<\/p><h1/);
  assert.match(home, /priority/);
  const index = read('app/services/page.tsx');
  assert.match(index, /serviceIndexHero/);
  assert.match(index, /role selector/i);
  assert.match(index, /boundaries/i);
  assert.match(index, /frequently asked/i);
  const pricing = read('app/pricing/page.tsx');
  assert.match(pricing, /pricingHero/);
  assert.match(pricing, /What the rate includes/i);
  assert.match(pricing, /Pricing questions/i);
});

test('homepage hero uses approved responsive portrait media and aligned identity metadata', () => {
  const home = read('app/page.tsx');
  const css = read('app/v3-pages.module.css');
  const layout = read('app/layout.tsx');

  assert.match(home, /<picture className=\{styles\.heroPortrait\}>/);
  assert.match(home, /srcSet="\/brand\/stealth-agents-filipina-assistant-384\.webp 384w, \/brand\/stealth-agents-filipina-assistant\.webp 640w"/);
  assert.match(home, /sizes="\(max-width: 800px\) calc\(100vw - 56px\), 452px"/);
  assert.match(home, /src="\/brand\/stealth-agents-filipina-assistant\.webp"/);
  assert.match(home, /width="640" height="720"/);
  assert.match(home, /fetchPriority="high"/);
  assert.match(home, /decoding="async"/);
  assert.match(home, /alt="Filipina assistant holding a tablet in a professional workspace"/);
  assert.match(home, /Virtual Assistant Provider is powered by StealthAgents/);
  assert.doesNotMatch(home, /virtual-assistant-work-sample-philippines\.png/);

  assert.match(css, /\.heroPortrait img\{[^}]*width:100%[^}]*height:auto[^}]*aspect-ratio:8\/9[^}]*object-fit:cover/);
  assert.match(layout, /\/brand\/virtual-assistant-provider-og\.png/);
  assert.match(layout, /\/brand\/virtual-assistant-provider-apple-touch-icon\.png/);
  assert.match(layout, /twitter:\s*\{[^}]*card:\s*'summary_large_image'/);
  assert.match(layout, /applicationName:\s*'Virtual Assistant Provider'/);
  assert.match(layout, /width:\s*1200,\s*height:\s*630/);
  assert.match(layout, /sizes:\s*'180x180',\s*type:\s*'image\/png'/);

  for (const asset of [
    'public/brand/stealth-agents-filipina-assistant.webp',
    'public/brand/stealth-agents-filipina-assistant-384.webp',
    'public/brand/virtual-assistant-provider-og.png',
    'public/brand/virtual-assistant-provider-apple-touch-icon.png',
  ]) assert.ok(fs.existsSync(path.join(root, asset)), `${asset} must exist`);

  const provenance = JSON.parse(read('app/home-hero-provenance.json'));
  assert.equal(provenance.source, 'https://stealthagents.com/');
  assert.equal(provenance.assets.length, 2);
  for (const asset of provenance.assets) {
    assert.match(asset.sourceUrl, /^https:\/\/stealthagents\.com\/hero-agents-home/);
    assert.match(asset.sha256, /^[a-f0-9]{64}$/);
    const bytes = fs.readFileSync(path.join(root, 'public', asset.path));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), asset.sha256);
    assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
    assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
    assert.equal(bytes.toString('ascii', 12, 16), 'VP8 ');
    assert.deepEqual(
      [bytes.readUInt16LE(26) & 0x3fff, bytes.readUInt16LE(28) & 0x3fff],
      [asset.width, asset.height],
    );
  }

  const pngSize = (asset) => {
    const bytes = fs.readFileSync(path.join(root, asset));
    assert.equal(bytes.toString('hex', 0, 8), '89504e470d0a1a0a');
    return [bytes.readUInt32BE(16), bytes.readUInt32BE(20)];
  };
  assert.deepEqual(pngSize('public/brand/virtual-assistant-provider-og.png'), [1200, 630]);
  assert.deepEqual(pngSize('public/brand/virtual-assistant-provider-apple-touch-icon.png'), [180, 180]);
});

test('all ten service records provide service specific long form depth', () => {
  const source = read('app/service-details.ts');
  const slugs = [...source.matchAll(/^\s{2}'([^']+)':\s*createDetail\(/gm)].map((match) => match[1]);
  assert.equal(slugs.length, 10);
  for (const field of ['problem', 'approach', 'inputs', 'tasks', 'deliverables', 'controls', 'boundaries', 'launch', 'scenario', 'faq', 'related']) {
    assert.match(source, new RegExp(`${field}:`), `${field} is absent`);
  }
  assert.ok(source.split(/\s+/).length > 6500, 'service detail corpus is not deep enough');
  const detailPage = read('app/services/[slug]/page.tsx');
  for (const section of ['The operating problem', 'Work included', 'Quality controls', 'A realistic example', 'Launch this role', 'Related service']) assert.match(detailPage, new RegExp(section));
});

test('owned commercial pages contain no forbidden punctuation or decorative labels', () => {
  const source = pageFiles.map(read).join('\n');
  assert.doesNotMatch(source, /[–—]/);
  assert.doesNotMatch(source, /--/);
  assert.doesNotMatch(source, />0[1-9]</);
  assert.doesNotMatch(source, />[A-D]</);
});
