import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

test('retired comparison and numbered pagination redirect to the reviewed guide index', () => {
  assert.match(readFileSync(join(root, 'app/blog/top-50-virtual-assistant-providers/page.tsx'), 'utf8'), /permanentRedirect\('\/blog'\)/);
  assert.match(readFileSync(join(root, 'app/blog/page/[page]/page.tsx'), 'utf8'), /permanentRedirect\('\/blog'\)/);
  const manifest = readFileSync(join(root, 'app/publication-manifest.ts'), 'utf8');
  assert.match(manifest, /publicationStatus: 'reviewed'/);
});
