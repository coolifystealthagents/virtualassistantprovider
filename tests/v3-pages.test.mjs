import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

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
