import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(new URL('../app/blog/blog-listing.tsx', import.meta.url), 'utf8');

test('legacy comparison renders only after the final accepted blog page', () => {
  assert.match(source, /page\s*===\s*total\s*\?\s*<FeaturedComparison\s*\/>\s*:\s*null/);
});
