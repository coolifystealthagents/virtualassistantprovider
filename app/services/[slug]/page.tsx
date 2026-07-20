import { Header, Footer, CTA, JsonLd } from '../../components';
import { services, site, blogPosts } from '../../data';

export function generateStaticParams() { return services.map((service)=>({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item)=>item.slug===slug);
  return { title: service?.h1 || 'Virtual assistant service guide', description: service?.excerpt };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item)=>item.slug===slug) || services[0];
  const relatedPosts = blogPosts.filter((post)=>post.relatedServices.includes(service.slug)).slice(0, 3);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', '@id': `${site.url}/services/${service.slug}#service`, name: service.name, provider: { '@type': 'Organization', name: site.brand, url: site.url }, serviceType: service.name, areaServed: 'United States', description: service.excerpt },
      { '@type': 'WebPage', '@id': `${site.url}/services/${service.slug}#webpage`, url: `${site.url}/services/${service.slug}`, name: service.h1, mainEntity: { '@id': `${site.url}/services/${service.slug}#service` } },
      { '@type': 'FAQPage', mainEntity: service.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: service.name, item: `${site.url}/services/${service.slug}` }] },
    ],
  };

  return <><Header/><main>
    <JsonLd data={schema} />
    <section className="hero service-hero"><div className="container two"><div><p className="eyebrow">Service guide</p><h1>{service.h1}</h1><p className="lead">{service.excerpt}</p><p>This page helps you scope the role before you talk to a provider, freelancer, or recruiter.</p><a className="btn" href="/contact">Get my role plan</a></div><div className="service-visual"><img src={service.image} alt={service.imageAlt} /><div className="card"><h3>Best for</h3>{service.bestFor.map((item)=><span className="pill" key={item}>{item}</span>)}</div></div></div></section>
    <section className="section"><div className="container two"><div><p className="eyebrow">Task scope</p><h2>Good work to hand off first</h2><ul className="list">{service.tasks.map((task)=><li key={task}>{task}</li>)}</ul></div><div className="card"><h3>Keep these guardrails</h3><ul className="list">{service.watchouts.map((item)=><li key={item}>{item}</li>)}</ul></div></div></section>
    <section className="section"><div className="container"><p className="eyebrow">First week</p><h2>A simple ramp plan</h2><div className="cards">{service.firstWeek.map((step)=><div className="card" key={step}><p>{step}</p></div>)}</div></div></section>
    <section className="section"><div className="container two"><div><p className="eyebrow">Provider script</p><h2>Copy this into your first call.</h2><div className="card"><p className="quote">&quot;We want to start with a small pilot for {service.name.toLowerCase()} work. The first tasks are listed and repeat each week. Can you explain who screens the assistant, who checks quality, how replacement works, and how tool access is removed if we stop?&quot;</p></div></div><div><p className="eyebrow">FAQ</p>{service.faq.map((item)=><div className="card" style={{marginBottom:12}} key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</div></div></section>
    {relatedPosts.length > 0 && <section className="section"><div className="container"><p className="eyebrow">Related guides</p><h2>Read next</h2><div className="cards">{relatedPosts.map((post)=><a className="card" href={`/blog/${post.slug}`} key={post.slug}><h3>{post.title}</h3><p>{post.excerpt}</p></a>)}</div></div></section>}
    <CTA />
  </main><Footer/></>;
}
