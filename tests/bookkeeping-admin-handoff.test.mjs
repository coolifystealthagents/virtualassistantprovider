import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(new URL('../app/data.ts', import.meta.url), 'utf8');
const renderer = await readFile(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf("slug === 'virtual-assistant-bookkeeping-admin-philippines'");
const end = source.indexOf('\n  } : {}),', start);
const record = source.slice(start, end);

test('bookkeeping administration guide retains its Philippines staffing handoff and approval boundary', () => {
  assert.ok(start >= 0 && end > start, 'bookkeeping handoff record boundaries must be present and ordered');
  assert.match(record, /href: '\/services\/bookkeeping-assistants'/);
  assert.match(record, /label: 'Plan bookkeeping assistant staffing'/);
  assert.match(record, /The accountable owner keeps payment approval, tax choices, bank movement, and final close sign-off\./);
  assert.match(record, /updated: '2026-09-13'/);
  assert.match(renderer, /post\.nextAction &&/);
  assert.match(renderer, /data-route-next-action/);
});
