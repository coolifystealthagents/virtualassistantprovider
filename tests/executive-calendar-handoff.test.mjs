import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(new URL('../app/fleet-content.ts', import.meta.url), 'utf8');
const renderer = await readFile(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf("slug: 'executive-assistant-calendar-coordination-evidence'");
const end = source.indexOf("\n  { slug:", start + 1);
const record = source.slice(start, end);

test('calendar research keeps its Philippines executive-staffing handoff and owner boundary', () => {
  assert.ok(start >= 0 && end > start, 'calendar research record boundaries must be present and ordered');
  assert.match(record, /serviceHref: '\/services\/executive-assistant-staffing'/);
  assert.match(record, /serviceLinkTitle: 'Plan executive assistant staffing'/);
  assert.match(record, /The executive keeps travel, spending, and final commitment decisions\./);
  assert.match(record, /updated: '2026-09-02'/);
  assert.match(source, /config\.serviceHref && config\.serviceLinkTitle && config\.serviceLinkDescription/);
  assert.match(renderer, /post\.related\.map/);
});