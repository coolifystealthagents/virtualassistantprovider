import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site, services } from '../../data';

export function generateStaticParams() { return blogPosts.map((p)=>({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const post = blogPosts.find((p)=>p.slug===slug);
 return { title: post?.title || 'Guide', description: post?.excerpt };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const post = blogPosts.find((p)=>p.slug===slug) || blogPosts[0];
 const relatedServices = services.filter((service)=>post.relatedServices.includes(service.slug));
 const schema = {
  '@context': 'https://schema.org',
  '@graph': [
   { '@type': 'Article', headline: post.title, description: post.excerpt, author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand, url: site.url }, mainEntityOfPage: `${site.url}/blog/${post.slug}`, citation: post.sources.map((source)=>source.url), hasPart: post.sections.map((section, index)=>({ '@type': 'WebPageElement', position: index + 1, name: section.heading })) },
   { '@type': 'FAQPage', mainEntity: post.faq.map((item)=>({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
   { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` }, { '@type': 'ListItem', position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` }] },
  ],
 };
 return <><Header/><main className="section"><JsonLd data={schema} /><article className="container" style={{maxWidth:900}}><p className="eyebrow">{site.brand} guide</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><div className="card"><h2>Key takeaways</h2><ul className="list">{post.takeaways.map((item)=><li key={item}>{item}</li>)}</ul></div>{post.sections.map((section)=><section key={section.heading} className="card" style={{marginTop:18}}><h2>{section.heading}</h2><p>{section.body}</p>{section.bullets && <ul className="list">{section.bullets.map((bullet)=><li key={bullet}>{bullet}</li>)}</ul>}</section>)}<section className="card" style={{marginTop:18}}><h2>Provider questions to copy</h2><p className="quote">&quot;Can you show how this role is screened, trained, checked each week, and replaced if fit is poor?&quot;</p><p className="quote">&quot;Can we start with a small task list before we buy a larger monthly plan?&quot;</p></section><section className="card" style={{marginTop:18}}><h2>FAQ</h2>{post.faq.map((item)=><div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</section><section className="card" style={{marginTop:18}}><h2>Sources and notes</h2><p>These sources are included as planning references. They do not replace legal, tax, security, or HR advice.</p><ul className="list">{post.sources.map((source)=><li key={source.url}><a href={source.url}>{source.name}</a>: {source.note}</li>)}</ul></section>{relatedServices.length > 0 && <section className="card" style={{marginTop:18}}><h2>Related role guides</h2>{relatedServices.map((service)=><a className="pill" href={`/services/${service.slug}`} key={service.slug}>{service.name}</a>)}</section>}</article><CTA/></main><Footer/></>;
}
