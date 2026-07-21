import { Header, Footer, JsonLd } from '../components';
import { blogPosts, site } from '../data';
export const metadata = { title: 'Virtual assistant hiring guides', description: 'Guides to VA budgets, first tasks, provider questions, and onboarding.' };
export default function Blog(){
 const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Virtual assistant hiring guides', url: `${site.url}/blog`, mainEntity: { '@type': 'ItemList', itemListElement: blogPosts.map((post, index)=>({ '@type': 'ListItem', position: index + 1, name: post.title, url: `${site.url}/blog/${post.slug}` })) } };
 return <><Header/><main className="section"><JsonLd data={schema} /><div className="container"><p className="eyebrow">Hiring guides</p><h1>Plan the role before you hire a VA</h1><p className="lead">Start with the budget, task list, provider questions, and first week on the job.</p><div className="cards">{blogPosts.map((p)=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h3>{p.title}</h3><p>{p.excerpt}</p><span className="pill">{p.minutes} min read</span></a>)}</div></div></main><Footer/></>;
}
