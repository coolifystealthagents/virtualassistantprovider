import fs from 'node:fs';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';

const BASE='712310df946a193ac0f00bf410d9a3cd0d116603';
const DATE='2026-10-13';
const errors=[];
const ok=(value,message)=>{if(!value)errors.push(message)};
const parse=(file,name)=>{const s=fs.readFileSync(file,'utf8'),m=s.indexOf(`export const ${name}`),a=s.indexOf('[',s.indexOf('=',m)),b=s.lastIndexOf(']');return JSON.parse(s.slice(a,b+1))};
const normalize=value=>value.toLowerCase().replace(/\[[0-9]+\]/g,'').replace(/\s+/g,' ').replace(/[^a-z0-9]+/g,' ').trim();
const blog=parse('app/article-blog-oct13-2026.ts','october13BlogPosts');
const research=parse('app/article-research-oct13-2026.ts','october13ResearchPosts');
const all=[...blog,...research];
const manifest=JSON.parse(fs.readFileSync('publishing/2026-10-13/manifest.json','utf8'));
ok(blog.length===12,`Blog count ${blog.length}`);ok(research.length===5,`Research count ${research.length}`);ok(manifest.articles.length===17,`manifest count ${manifest.articles.length}`);ok(manifest.baseSha===BASE,'immutable base mismatch');
ok(new Set(all.map(p=>p.slug)).size===17,'duplicate slugs');ok(new Set(all.map(p=>p.title)).size===17,'duplicate titles');

const prose=new Map();
const add=(slug,text)=>{const n=normalize(text);if(n.split(' ').length<25)return;ok(!prose.has(n),`duplicate substantive paragraph ${slug}/${prose.get(n)}`);prose.set(n,slug)};
for(const post of blog){
 ok(post.published===DATE&&post.updated===DATE&&post.displayDate==='October 13, 2026',`Blog date ${post.slug}`);
 ok(!/(oct(?:ober)?\s*13|2026-10-13)/i.test(post.title),`dated Blog title ${post.slug}`);
 ok(post.sections.length>=7&&post.takeaways.length>=4&&post.sources.length>=4,`Blog structure ${post.slug}`);
 ok(post.sources.every(source=>source.url.startsWith('https://')),`Blog sources ${post.slug}`);
 ok(post.articleLinks.some(link=>link.href==='/blog')&&post.articleLinks.some(link=>link.href==='/research')&&post.nextAction.href==='/contact-us',`Blog related/action ${post.slug}`);
 const text=post.sections.map(s=>s.body);ok(text.join(' ').split(/\s+/).length>=1300,`thin Blog ${post.slug}`);text.forEach(t=>add(post.slug,t));
 ok(post.featuredImage===`/featured/oct13-${post.slug}.png`,`Blog thumbnail mapping ${post.slug}`);
}
for(const post of research){
 ok(post.published===DATE&&post.updated===DATE,`Research date ${post.slug}`);ok(!/(oct(?:ober)?\s*13|2026-10-13)/i.test(post.title),`dated Research title ${post.slug}`);
 ok(post.sections.length>=8&&post.headlineStats.length===6&&post.evidenceTable.length>=5&&post.methodology.length>=3&&post.faq.length===5,`Research structure ${post.slug}`);
 ok(post.sources.length===10&&post.sources.every(source=>source.url.startsWith('https://')),`Research source depth ${post.slug}`);
 const ids=new Set(post.sources.map(s=>s.id)),cited=[...post.headlineStats.flatMap(s=>s.sourceIds),...post.evidenceTable.flatMap(r=>r.sourceIds)];ok(cited.every(id=>ids.has(id)),`Research citation IDs ${post.slug}`);
 ok(post.related.some(x=>x.href==='/research')&&post.related.some(x=>x.href==='/blog'),`Research related ${post.slug}`);
 const text=post.sections.flatMap(s=>s.paragraphs);ok(text.join(' ').split(/\s+/).length>=1800,`thin Research ${post.slug}`);text.forEach(t=>add(post.slug,t));post.methodology.forEach(t=>add(post.slug,t));post.implications.forEach(x=>add(post.slug,x.body));
 ok(post.featuredImage===`/featured/oct13-${post.slug}.png`,`Research thumbnail mapping ${post.slug}`);
}

const hashes=new Set(),paths=new Set();
const sourceHash=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const postWordCount=(post,section)=>{
 const body=section==='Blog'?post.sections.map(s=>s.body).join(' '):post.sections.flatMap(s=>s.paragraphs).join(' ');
 return body.split(/\s+/).filter(Boolean).length;
};
for(const article of manifest.articles){
 const post=all.find(p=>p.slug===article.slug);ok(Boolean(post)&&post.title===article.title,`manifest title ${article.slug}`);ok(article.publicationDate===DATE,`manifest date ${article.slug}`);
 const expectedSource=article.section==='Blog'?'app/article-blog-oct13-2026.ts':'app/article-research-oct13-2026.ts';
 ok(article.sourcePath===expectedSource,`manifest source path ${article.slug}`);
 if(post){ok(article.wordCount===postWordCount(post,article.section),`manifest word count ${article.slug}`)}
 if(fs.existsSync(article.sourcePath)){ok(article.sha256===sourceHash(article.sourcePath),`manifest source hash ${article.slug}`)}else{ok(false,`missing source ${article.slug}`)}
 ok(article.thumbnailPath===`public/featured/oct13-${article.slug}.png`,`manifest thumbnail path ${article.slug}`);
 ok(!paths.has(article.thumbnailPath),`duplicate thumbnail path ${article.slug}`);paths.add(article.thumbnailPath);ok(fs.existsSync(article.thumbnailPath),`missing thumbnail ${article.slug}`);
 if(fs.existsSync(article.thumbnailPath)){const b=fs.readFileSync(article.thumbnailPath),h=crypto.createHash('sha256').update(b).digest('hex');ok(b.toString('ascii',1,4)==='PNG',`format ${article.slug}`);ok(b.readUInt32BE(16)===1200&&b.readUInt32BE(20)===675,`dimensions ${article.slug}`);ok(b.includes(Buffer.from(article.title)),`exact title metadata ${article.slug}`);ok(!hashes.has(h),`duplicate image bytes ${article.slug}`);hashes.add(h)}
 const absent=spawnSync('git',['cat-file','-e',`${BASE}:${article.thumbnailPath}`]);ok(absent.status!==0,`pre-existing thumbnail ${article.slug}`);
}
ok(hashes.size===17,`unique thumbnail hashes ${hashes.size}`);
for(const file of ['app/article-blog-oct13-2026.ts','app/article-research-oct13-2026.ts','publishing/2026-10-13/manifest.json','publishing/2026-10-13/validate_batch.mjs'])ok(spawnSync('git',['cat-file','-e',`${BASE}:${file}`]).status!==0,`pre-existing path ${file}`);

const data=fs.readFileSync('app/data.ts','utf8'),fleet=fs.readFileSync('app/fleet-content.ts','utf8');
ok(data.includes("import { october13BlogPosts } from './article-blog-oct13-2026';")&&(data.match(/\.\.\.october13BlogPosts/g)||[]).length===1,'Blog registry');
ok(fleet.includes("import { october13ResearchPosts } from './article-research-oct13-2026';")&&(fleet.match(/\.concat\(october13ResearchPosts\)/g)||[]).length===1,'Research registry');
const show=file=>spawnSync('git',['show',`${BASE}:${file}`],{encoding:'utf8',maxBuffer:64*1024*1024}).stdout;
const blogRoute=show('app/blog/[slug]/page.tsx'),researchRoute=show('app/research/[slug]/page.tsx');
ok(blogRoute.includes('<time dateTime={post.published}>')&&blogRoute.includes('Related role guides'),'Blog route/date/sidebar');
ok(researchRoute.includes('<time dateTime={post.published}>')&&researchRoute.includes('Related research'),'Research route/date/sidebar');
ok(fs.readFileSync('app/blog/blog-listing.tsx','utf8').includes('blogPosts')&&fs.readFileSync('app/research/page.tsx','utf8').includes('researchPosts'),'separate indexes');

const baseFiles=['app/data.ts','app/fleet-content.ts','app/article-blog-oct12-2026.ts','app/article-research-oct12-2026.ts'];
const baseText=baseFiles.map(show).join('\n'),normalizedBase=normalize(baseText);
for(const [paragraph,slug] of prose)ok(!normalizedBase.includes(paragraph),`new/existing duplicate ${slug}`);
for(const post of all){ok(!baseText.includes(`"${post.slug}"`)&&!baseText.includes(`'${post.slug}'`),`pre-existing slug ${post.slug}`);ok(!baseText.includes(post.title),`pre-existing title ${post.title}`)}

if(errors.length){console.error(`FAIL (${errors.length})\n- ${errors.join('\n- ')}`);process.exit(1)}
console.log('PASS: 12 Blog + 5 Research; visible October 13 dates, date-free titles, 10 authoritative HTTPS sources per Research, 17 unique exact-title 1200x675 PNGs, distinct Blog/Research registries/routes/indexes/sidebars/related content, immutable-base collision protection, and zero within/cross-corpus duplicate substantive paragraphs.');
