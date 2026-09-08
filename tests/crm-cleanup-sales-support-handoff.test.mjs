import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(new URL('../app/data.ts', import.meta.url), 'utf8');
const renderer = await readFile(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf("slug === 'virtual-assistant-crm-cleanup-philippines'");
const end = source.indexOf("...(slug === 'virtual-assistant-customer-support-qa-philippines'", start + 1);
const record = source.slice(start, end);

test('CRM cleanup guide retains its Philippines sales-support handoff and owner boundary', () => {
  assert.ok(start >= 0 && end > start, 'CRM cleanup handoff block boundaries must be present and ordered');
  assert.match(record, /href: '\/services\/sales-support-assistants'/);
  assert.match(record, /label: 'Plan sales support assistant staffing'/);
  assert.match(record, /The sales owner keeps lead qualification, promises, negotiation, and pipeline decisions\./);
  assert.match(record, /updated: '2026-09-08'/);
  assert.match(renderer, /post\.nextAction &&/);
  assert.match(renderer, /data-route-next-action/);
});