import { Header, Footer, JsonLd } from '../components';
import { blogPosts, site } from '../data';
export const metadata = { title: 'Virtual assistant hiring blog', description: 'Plain guides for virtual assistant pricing, first tasks, provider questions, and onboarding.' };
export default function Blog(){
 const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Virtual assistant hiring blog', url: `${site.url}/blog`, mainEntity: { '@type': 'ItemList', itemListElement: blogPosts.map((post, index)=>({ '@type': 'ListItem', position: index + 1, name: post.title, url: `${site.url}/blog/${post.slug}` })) } };
 return <><Header/><main className="section"><JsonLd data={schema} /><div className="container"><p className="eyebrow">Blog</p><h1>Plain guides for hiring assistant help</h1><p className="lead">Use these guides to compare costs, tasks, providers, and onboarding steps before you hire.</p><div className="cards">{blogPosts.map((p)=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h3>{p.title}</h3><p>{p.excerpt}</p><span className="pill">{p.minutes} min read</span></a>)}</div></div></main><Footer/></>;
}
