import * as data from './data';
import { Header, Footer, JsonLd } from './components';
const d=data as any;
const site=d.site||{};
const services=(d.services||d.roles||d.industries||[]).slice(0,4);
const posts=(d.blogPosts||[]).slice(0,3);
const stats=(d.stats||[]).slice(0,3);
const offer=d.staffingOffer||{};
const providers=(d.providerCards||[]).slice(0,3);
const pretty=(v:any)=>String(v||'virtual assistant support').replace(/\b\w/g,(m)=>m.toUpperCase());
const title=(x:any)=>typeof x==='string'?x:(x.title||x.name||x.label||x.question||'Assistant role');
const text=(x:any)=>typeof x==='string'?x:(x.desc||x.excerpt||x.note||x.body||(x.bestFor?`Best for ${x.bestFor.join(', ')}`:'Clear tasks, safe access, and review rules.'));
const slug=(x:any)=>(x.slug||title(x).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''));
const primary=site.primary||site.brand||'virtual assistant support';
const rolePhrase=String(primary).toLowerCase()
  .replace(/^best\s+/,'')
  .replace(/(company|companies|services|service|provider|providers)/g,'')
  .replace(/(outsource|outsourced|outsourcing|offshore|overseas)/g,'')
  .replace(/\s+/g,' ')
  .trim() || 'business support';
const roleLabel=pretty(rolePhrase.includes('assistant')?rolePhrase:`${rolePhrase} support`).replace(/\bVa\b/g,'VA');
const domain=site.domain||site.brand||'Staffing Guide';
const heroImage=site.heroImage||site.serviceImage||'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80';
export default function Home(){const schema={'@context':'https://schema.org','@type':'WebSite',name:site.brand,url:`https://${domain}`};return <><Header/><main className="belay"><JsonLd data={schema}/>
<section className="hero"><div className="container hero-grid"><div className="copy"><p className="eyebrow">Managed virtual assistants</p><h1>Hire a virtual assistant with help on screening and setup.</h1><p className="lead">Tell us what work you need done. We will help shape the role, match the right skills, and plan the handoff.</p><div className="actions"><a className="btn primary" href="/contact">Request staffing plan</a><a className="btn secondary" href="#tasks">Browse task ideas</a></div><p className="risk">Rates depend on the role, hours, and skills. Share the work first to get a useful scope.</p></div><div className="match-card"><div className="portrait-wrap"><img src={heroImage} alt={site.alt||`${site.brand||roleLabel} managed staffing visual`}/><span className="badge">Role match</span></div><div className="task-note note-a"><b>Daily handoff</b><span>an owner sets priorities</span></div><div className="task-note note-b"><b>Work review</b><span>check output each week</span></div><div className="task-note note-c"><b>First few weeks</b><span>scope, shadow, then live work</span></div></div></div><div className="container proof-bar"><span>Plan the role before filling it</span>{stats.length?stats.map((s:any,i:number)=><b key={i}>{s.label}: {s.value}</b>):['Scope first','7-21 days','5-10 tasks'].map((x,i)=><b key={i}>{x}</b>)}</div></section>
<section className="container section" id="tasks"><div className="split-head"><div><p className="eyebrow">Task ideas</p><h2>Start with work that repeats every week.</h2></div><p>A narrow first task list is easier to teach and review. Add more work after the assistant handles the basics well.</p></div><div className="task-grid">{services.map((s:any,i:number)=><a key={i} href={`/services/${slug(s)}`}><span>{String(i+1).padStart(2,'0')}</span><h3>{title(s)}</h3><p>{text(s)}</p><b>View tasks and limits</b></a>)}</div></section>
<section className="provider-compare" id="compare"><div className="container"><div className="compare-intro"><div><p className="eyebrow">Compare hiring paths</p><h2>Pick the support model that fits the work.</h2><p>A provider can help with screening and backup. A specialist team may know your tools. A freelancer gives you a direct working relationship, but you handle the hiring checks.</p><div className="compare-actions"><a className="btn primary" href="/contact">Get a role plan</a><a className="text-link" href="/blog/virtual-assistant-vs-employee">Compare a VA with an employee</a></div></div><figure className="compare-image"><img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=82" alt="Business owners comparing virtual assistant hiring options at a meeting"/><figcaption>Compare ownership, backup, and quality checks before comparing rates.</figcaption></figure></div><div className="provider-grid">{providers.map((provider:any,i:number)=><article className="provider-card" key={provider.name}><div className="provider-number">0{i+1}</div><p className="provider-fit">{provider.rating}</p><h3>{provider.name}</h3><p>{provider.note}</p><ul><li>Who screens the assistant?</li><li>Who checks the work?</li><li>What happens if the fit fails?</li></ul></article>)}</div></div></section>
<section className="relationship"><div className="container rel-grid"><div><p className="eyebrow">Help after the match</p><h2>Ask who handles onboarding, missed shifts, and work that needs fixing.</h2></div><div className="rel-list">{(offer.included||['role planning call','candidate matching','onboarding guidance','managed support']).slice(0,4).map((x:string,i:number)=><article key={i}><span>✓</span><p>{x}</p></article>)}</div></div></section>
<section className="container section guide-row"><div><p className="eyebrow">Before you hire</p><h2>Read the short buyer guides.</h2></div>{posts.map((p:any,i:number)=><a href={`/blog/${p.slug}`} key={i}><span>{p.minutes||7} min</span><strong>{title(p)}</strong><p>{text(p)}</p></a>)}</section>
<section className="container final"><h2>Know what the assistant will own before the interviews start.</h2><a className="btn primary" href="/contact">Request staffing plan</a></section>
</main><Footer/></>}
