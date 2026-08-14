import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const chrome = readFileSync(new URL('../app/components.tsx', import.meta.url), 'utf8');

test('homepage images have useful alt text and one H1', () => {
  assert.equal((page.match(/<h1\b/g) || []).length, 1);
  assert.doesNotMatch(page, /alt=["']\s*["']/);
  assert.doesNotMatch(chrome, /alt=["']\s*["']/);
});
