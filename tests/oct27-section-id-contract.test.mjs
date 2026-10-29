import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const batches = [
  ['app/oct27-blog-publications.ts', 204],
  ['app/oct27-research-publications.ts', 150],
];

test('October 27 publications give every rendered section a stable fragment id', () => {
  for (const [relativePath, expectedCount] of batches) {
    const source = readFileSync(join(root, relativePath), 'utf8');
    const pairs = [...source.matchAll(/"id": "section-(\d+)",\s+"heading":/g)];
    assert.equal(pairs.length, expectedCount, `${relativePath} must pair every section heading with an id`);
    assert.equal((source.match(/"heading":/g) ?? []).length, expectedCount, `${relativePath} must not leave an unpaired section heading`);
  }
});
