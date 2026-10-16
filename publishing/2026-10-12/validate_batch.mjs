import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root=path.resolve(import.meta.dirname,'../..');
const errors=[];
const ok=(value,message)=>{if(!value) errors.push(message)};
const read=file=>fs.readFileSync(path.join(root,file),'utf8');
const parseExport=(file,name)=>{
 const source=read(file), marker=source.indexOf(`export const ${name}`), start=source.indexOf('[',source.indexOf('=',marker)), end=source.lastIndexOf(']');
 return JSON.parse(source.slice(start,end+1));
};
const blogs=parseExport('app/article-blog-oct12-2026.ts','october12BlogPosts');
const research=parseExport('app/article-research-oct12-2026.ts','october12ResearchPosts');
const all=[...blogs,...research];
const manifest=JSON.parse(read('publishing/2026-10-12/manifest.json'));
const unique=values=>new Set(values).size===values.length;

ok(blogs.length===12,`expected 12 Blog items, found ${blogs.length}`);
ok(research.length===5,`expected 5 Research items, found ${research.length}`);
ok(manifest.date==='2026-10-12','manifest date is not 2026-10-12');
ok(manifest.blog.length===12 && manifest.research.length===5,'manifest counts are incorrect');
ok(unique(all.map(x=>x.slug)),'new slugs must be unique');
ok(unique(all.map(x=>x.title)),'new titles must be unique');
ok(unique(all.map(x=>x.featuredImage)),'thumbnail paths must be unique');
ok(all.every(x=>x.published==='2026-10-12' && x.updated==='2026-10-12'),'every article must use 2026-10-12');
ok(all.every(x=>!/(^|\s)(2026|oct(?:ober)?\s+12|10[-/]12)(\s|$|:)/i.test(x.title)),'article titles must be date-free');

for(const p of blogs){
 ok(p.sections?.length>=7,`${p.slug}: Blog needs at least 7 sections`);
 ok(p.takeaways?.length>=4,`${p.slug}: Blog needs at least 4 takeaways`);
 ok(p.sources?.length>=4 && p.sources.every(s=>/^https:\/\//.test(s.url)),`${p.slug}: Blog needs 4 HTTPS sources`);
 ok(p.articleLinks?.some(x=>x.href==='/blog'),`${p.slug}: missing Blog related link`);
 ok(p.articleLinks?.some(x=>x.href==='/research'),`${p.slug}: missing Research related link`);
 ok(p.nextAction?.href==='/contact-us',`${p.slug}: missing next action`);
}
for(const p of research){
 ok(p.sections?.length>=8,`${p.slug}: Research needs at least 8 sections`);
 ok(p.sources?.length>=8 && p.sources.every(s=>/^https:\/\//.test(s.url)),`${p.slug}: Research needs 8 authoritative HTTPS sources`);
 ok(p.headlineStats?.length===6,`${p.slug}: Research needs 6 headline statistics`);
 ok(p.evidenceTable?.length>=5,`${p.slug}: Research evidence table is incomplete`);
 ok(p.methodology?.length>=3,`${p.slug}: Research methodology is incomplete`);
 ok(p.faq?.length===5,`${p.slug}: Research needs 5 buyer questions`);
 ok(p.related?.some(x=>x.href==='/research') && p.related.some(x=>x.href==='/blog'),`${p.slug}: cross-system related links missing`);
 const ids=new Set(p.sources.map(x=>x.id));
 const cited=[...p.headlineStats.flatMap(x=>x.sourceIds),...p.evidenceTable.flatMap(x=>x.sourceIds)];
 ok(cited.every(id=>ids.has(id)),`${p.slug}: source ID reference is unresolved`);
}

const blogRegistry=read('app/data.ts'), researchRegistry=read('app/fleet-content.ts');
ok(blogRegistry.includes("import { october12BlogPosts } from './article-blog-oct12-2026';"),'Blog import missing');
ok(blogRegistry.includes('...october12BlogPosts'),'Blog registry inclusion missing');
ok((blogRegistry.match(/\.\.\.october12BlogPosts/g)||[]).length===1,'Blog batch must be included exactly once');
ok((blogRegistry.match(/\.\.\.october8BlogPosts/g)||[]).length===1 && (blogRegistry.match(/\.\.\.october9BlogPosts/g)||[]).length===1,'prior October Blog batches must each remain included once');
ok(researchRegistry.includes("import { october12ResearchPosts } from './article-research-oct12-2026';"),'Research import missing');
ok((researchRegistry.match(/\.concat\(october12ResearchPosts\)/g)||[]).length===1,'Research batch must be included exactly once');
ok(fs.existsSync(path.join(root,'app/blog/[slug]/page.tsx')) && fs.existsSync(path.join(root,'app/blog/page.tsx')),'Blog route/index missing');
ok(fs.existsSync(path.join(root,'app/research/[slug]/page.tsx')) && fs.existsSync(path.join(root,'app/research/page.tsx')),'Research route/index missing');
ok(read('app/blog/[slug]/page.tsx').includes('<time dateTime={post.published}>'),'Blog visible publication date missing');
ok(read('app/research/[slug]/page.tsx').includes('<time dateTime={post.published}>'),'Research visible publication date missing');
ok(read('app/sitemap.xml/route.ts').includes('blogPosts.map') && read('app/sitemap.xml/route.ts').includes('researchPosts.map'),'sitemap lacks Blog or Research routes');

const hashes=[];
for(const p of all){
 const file=path.join(root,'public',p.featuredImage.replace(/^\//,''));
 ok(fs.existsSync(file),`${p.slug}: thumbnail missing`);
 if(!fs.existsSync(file)) continue;
 const buffer=fs.readFileSync(file);
 ok(buffer.toString('ascii',1,4)==='PNG',`${p.slug}: thumbnail is not PNG`);
 ok(buffer.readUInt32BE(16)===1200 && buffer.readUInt32BE(20)===675,`${p.slug}: thumbnail is not 1200x675`);
 hashes.push(crypto.createHash('sha256').update(buffer).digest('hex'));
}
ok(hashes.length===17 && unique(hashes),'17 thumbnails must have unique file content');

const prose=[];
for(const p of blogs) prose.push(...p.sections.map(x=>x.body));
for(const p of research) prose.push(...p.sections.flatMap(x=>x.paragraphs),...p.methodology,...p.implications.map(x=>x.body));
const norm=s=>s.toLowerCase().replace(/\[[0-9]+\]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
const substantive=prose.filter(x=>norm(x).split(' ').length>=25);
const seen=new Set();
for(const text of substantive){const key=norm(text); if(seen.has(key)) errors.push(`duplicate substantive paragraph: ${text.slice(0,80)}...`); seen.add(key)}
const oldFiles=fs.readdirSync(path.join(root,'app')).filter(x=>/\.(ts|tsx)$/.test(x)&&!['article-blog-oct12-2026.ts','article-research-oct12-2026.ts'].includes(x));
const oldText=oldFiles.map(x=>read(`app/${x}`)).join('\n');
for(const text of substantive) ok(!oldText.includes(text),`new paragraph exactly duplicates existing app prose: ${text.slice(0,80)}...`);
const appText=fs.readdirSync(path.join(root,'app')).filter(x=>/\.(ts|tsx)$/.test(x)).map(x=>read(`app/${x}`)).join('\n');
for(const p of all){const count=(appText.match(new RegExp(`["']${p.slug}["']`,'g'))||[]).length;ok(count===1,`${p.slug}: exact slug declaration count is ${count}`)}

if(errors.length){console.error(`FAIL (${errors.length})`); errors.forEach(x=>console.error(`- ${x}`));process.exit(1)}
console.log('PASS: 12 Blog + 5 Research; date-free titles, visible dates, separate systems/routes, source depth, unique prose, and 17 exact-title thumbnails verified.');
