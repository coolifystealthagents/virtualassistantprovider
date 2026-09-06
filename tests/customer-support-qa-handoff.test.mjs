import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(new URL('../app/data.ts', import.meta.url), 'utf8');
const renderer = await readFile(new URL('../app/blog/[slug]/page.tsx', import.meta.url), 'utf8');

test('customer-support QA guide retains a data-owned Philippines staffing handoff', () => {
  const marker = "slug === 'virtual-assistant-customer-support-qa-philippines'";
  const start = source.indexOf(marker);
  const end = source.indexOf('\n  } : {}),', start);
  const record = source.slice(start, end);

  assert.ok(start >= 0 && end > start, 'customer-support handoff record boundaries must be present and ordered');
  assert.match(record, /published: '2026-08-07'/);
  assert.match(record, /updated: '2026-09-06'/);
  assert.match(record, /href: '\/services\/customer-support-assistants'/);
  assert.match(record, /Plan customer support assistant staffing/);
  assert.match(record, /The manager keeps refunds, unusual requests, and customer promises\./);
  assert.match(renderer, /post\.nextAction/);
  assert.match(renderer, /data-route-next-action/);
});