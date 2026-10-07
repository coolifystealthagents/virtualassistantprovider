const ts = require('typescript');
const fs = require('fs');
require.extensions['.ts'] = function(module, filename) {
  const source = fs.readFileSync(filename, 'utf8');
  const out = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    fileName: filename,
  }).outputText;
  module._compile(out, filename);
};
const { blogPosts } = require('../app/data.ts');
const { researchPosts } = require('../app/fleet-content.ts');
const generic = new Set([
  '/featured/publishing-contingency-routine.png',
  '/featured/daily-research-brief-routine.png',
  '/featured/operations-assistant-daily-workflow.png',
  '/featured/virtual-assistant-appointment-setting-philippines.png',
]);
const rows = [
  ...blogPosts.map((x) => ({kind:'blog',slug:x.slug,title:x.title,featuredImage:x.featuredImage})),
  ...researchPosts.map((x) => ({kind:'research',slug:x.slug,title:x.title,featuredImage:x.featuredImage})),
];
const selected = rows.filter((x) => generic.has(x.featuredImage));
process.stdout.write(JSON.stringify({total:rows.length,generic:selected.length,rows:selected}, null, 2));
