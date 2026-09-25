import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(new URL('../app/fleet-content.ts', import.meta.url), 'utf8');
const start = source.indexOf("slug: 'operations-assistant-daily-workflow'");
const end = source.indexOf("\n  { slug:", start + 1);
const record = source.slice(start, end);

test('operations workflow research keeps its Philippines operations-staffing handoff and owner boundary', () => {
  assert.ok(start >= 0 && end > start, 'operations research record boundaries must be present and ordered');
  assert.match(record, /serviceHref: '\/services\/operations-assistant-staffing'/);
  assert.match(record, /serviceLinkTitle: 'Plan operations assistant staffing'/);
  assert.match(record, /The operations owner keeps process changes, spending, access, and exception decisions\./);
  assert.match(record, /updated: '2026-09-25'/);
  assert.match(source, /config\.serviceHref && config\.serviceLinkTitle && config\.serviceLinkDescription/);
});
