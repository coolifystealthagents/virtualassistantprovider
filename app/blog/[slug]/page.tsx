import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site, services } from '../../data';
import { fleetServices } from '../../fleet-content';
import { RealEstatePhilippinesArticle, realEstateArticleSlug } from './real-estate-philippines-article';
import { ExecutiveAssistantPhilippinesArticle, executiveAssistantArticleSlug } from './executive-assistant-philippines-article';
import { CustomerServicePhilippinesArticle, customerServiceArticleSlug } from './customer-service-philippines-article';
import { BookkeepingPhilippinesArticle, bookkeepingArticleSlug } from './bookkeeping-philippines-article';
import { RecruitingPhilippinesArticle, recruitingArticleSlug } from './recruiting-philippines-article';
import { HealthcarePhilippinesArticle, healthcareArticleSlug } from './healthcare-philippines-article';
import { EcommercePhilippinesArticle, ecommerceArticleSlug } from './ecommerce-philippines-article';
import { october2ServiceRelationships } from '../../october2-service-relationships';
import { articleImageAlt, resolveArticleImage } from '../../article-image';

const inlineLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/(?:services|contact|blog|research)(?:\/[^\s)]*)?)\)/g;

function renderOctober2Body(body: string, serviceSlug: string) {
  const parts = [];
  let cursor = 0;
  for (const match of body.matchAll(inlineLinkPattern)) {
    const index = match.index ?? 0;
    parts.push(body.slice(cursor, index));
    const href = match[2].startsWith('/services/') ? `/services/${serviceSlug}` : match[2];
    parts.push(<a href={href} key={`${index}-${href}`}>{match[1]}</a>);
    cursor = index + match[0].length;
  }
  parts.push(body.slice(cursor));
  return parts;
}

export function generateStaticParams() { return blogPosts.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const featuredImage = post ? resolveArticleImage(post) : undefined;
  if (slug === realEstateArticleSlug) {
    const url = `${site.url}/blog/${slug}`;
    return {
      title: post?.title,
      description: post?.excerpt,
      alternates: { canonical: url },
      openGraph: { title: post?.title, description: post?.excerpt, url, type: 'article', images: [{ url: `${site.url}${featuredImage}`, alt: featuredImage ? articleImageAlt(featuredImage, post?.title) : undefined }] },
      twitter: { card: 'summary_large_image', images: [`${site.url}${featuredImage}`] },
    };
  }
  if (slug === executiveAssistantArticleSlug) {
    const url = `${site.url}/blog/${slug}`;
    return {
      title: post?.title,
      description: post?.excerpt,
      alternates: { canonical: url },
      openGraph: { title: post?.title, description: post?.excerpt, url, type: 'article', images: [{ url: `${site.url}${featuredImage}`, alt: featuredImage ? articleImageAlt(featuredImage, post?.title) : undefined }] },
      twitter: { card: 'summary_large_image', images: [`${site.url}${featuredImage}`] },
    };
  }
  if (slug === customerServiceArticleSlug) {
    const url = `${site.url}/blog/${slug}`;
    return {
      title: post?.title,
      description: post?.excerpt,
      alternates: { canonical: url },
      openGraph: { title: post?.title, description: post?.excerpt, url, type: 'article', images: [{ url: `${site.url}${featuredImage}`, alt: featuredImage ? articleImageAlt(featuredImage, post?.title) : undefined }] },
      twitter: { card: 'summary_large_image', images: [`${site.url}${featuredImage}`] },
    };
  }
  if (slug === bookkeepingArticleSlug) {
    const url = `${site.url}/blog/${slug}`;
    return {
      title: post?.title,
      description: post?.excerpt,
      alternates: { canonical: url },
      openGraph: { title: post?.title, description: post?.excerpt, url, type: 'article', images: [{ url: `${site.url}${featuredImage}`, alt: featuredImage ? articleImageAlt(featuredImage, post?.title) : undefined }] },
      twitter: { card: 'summary_large_image', images: [`${site.url}${featuredImage}`] },
    };
  }
  if (slug === recruitingArticleSlug) {
    const url = `${site.url}/blog/${slug}`;
    return {
      title: post?.title,
      description: post?.excerpt,
      alternates: { canonical: url },
      openGraph: { title: post?.title, description: post?.excerpt, url, type: 'article', images: [{ url: `${site.url}${featuredImage}`, alt: featuredImage ? articleImageAlt(featuredImage, post?.title) : undefined }] },
      twitter: { card: 'summary_large_image', images: [`${site.url}${featuredImage}`] },
    };
  }
  if (slug === healthcareArticleSlug) {
    const url = `${site.url}/blog/${slug}`;
    return {
      title: post?.title,
      description: post?.excerpt,
      alternates: { canonical: url },
      openGraph: { title: post?.title, description: post?.excerpt, url, type: 'article', images: [{ url: `${site.url}${featuredImage}`, alt: featuredImage ? articleImageAlt(featuredImage, post?.title) : undefined }] },
      twitter: { card: 'summary_large_image', images: [`${site.url}${featuredImage}`] },
    };
  }
  if (slug === ecommerceArticleSlug) {
    const url = `${site.url}/blog/${slug}`;
    return {
      title: post?.title,
      description: post?.excerpt,
      alternates: { canonical: url },
      openGraph: { title: post?.title, description: post?.excerpt, url, type: 'article', images: [{ url: `${site.url}${featuredImage}`, alt: featuredImage ? articleImageAlt(featuredImage, post?.title) : undefined }] },
      twitter: { card: 'summary_large_image', images: [`${site.url}${featuredImage}`] },
    };
  }
  return { title: post?.title || 'Guide', description: post?.excerpt, alternates: post ? { canonical: site.url + "/blog/" + post.slug } : undefined, openGraph: post?.published && featuredImage ? { type: 'article', url: site.url + "/blog/" + post.slug, publishedTime: post.published, modifiedTime: post.updated ?? post.published, images: [{ url: site.url + featuredImage, alt: articleImageAlt(featuredImage, post?.title) }] } : undefined };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === realEstateArticleSlug) return <RealEstatePhilippinesArticle />;
  if (slug === executiveAssistantArticleSlug) return <ExecutiveAssistantPhilippinesArticle />;
  if (slug === customerServiceArticleSlug) return <CustomerServicePhilippinesArticle />;
  if (slug === bookkeepingArticleSlug) return <BookkeepingPhilippinesArticle />;
  if (slug === recruitingArticleSlug) return <RecruitingPhilippinesArticle />;
  if (slug === healthcareArticleSlug) return <HealthcarePhilippinesArticle />;
  if (slug === ecommerceArticleSlug) return <EcommercePhilippinesArticle />;

  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const featuredImage = resolveArticleImage(post);
  const october2ServiceSlug = october2ServiceRelationships[post.slug];
  const relatedServices = october2ServiceSlug
    ? fleetServices
        .filter((service) => service.slug === october2ServiceSlug)
        .map((service) => ({ slug: service.slug, name: service.title }))
    : services
        .filter((service) => post.relatedServices.includes(service.slug))
        .map((service) => ({ slug: service.slug, name: service.name }));
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Article', headline: post.title, description: post.excerpt, datePublished: post.published, dateModified: post.updated ?? post.published, author: { '@type': 'Organization', name: site.brand }, publisher: { '@type': 'Organization', name: site.brand, url: site.url }, mainEntityOfPage: site.url + "/blog/" + post.slug, image: site.url + featuredImage, citation: post.sources.map((source) => source.url), hasPart: post.sections.map((section, index) => ({ '@type': 'WebPageElement', position: index + 1, name: section.heading })) },
      { '@type': 'FAQPage', mainEntity: post.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` }, { '@type': 'ListItem', position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` }] },
    ],
  };
  return <><Header /><main className="section"><JsonLd data={schema} /><article className="container" style={{ maxWidth: 900 }}><p className="eyebrow">{site.brand} guide</p><h1>{post.title}</h1>{post.published && <time dateTime={post.published}>Published: {post.displayDate ?? new Date(`${post.published}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time>}<img src={featuredImage} alt={articleImageAlt(featuredImage, post?.title)} width="1200" height="675" style={{ width: '100%', height: 'auto', borderRadius: 18, marginTop: 18 }} /><p className="lead">{post.excerpt}</p><div className="card"><h2>Key takeaways</h2><ul className="list">{post.takeaways.map((item) => <li key={item}>{item}</li>)}</ul></div>{post.sections.map((section) => <section key={section.heading} className="card" style={{ marginTop: 18 }}><h2>{section.heading}</h2><p>{october2ServiceSlug ? renderOctober2Body(section.body, october2ServiceSlug) : section.body}</p>{section.bullets && <ul className="list">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}{post.articleLinks && <section className="card" style={{ marginTop: 18 }}><h2>Further reading</h2><p>{post.articleLinks.map((link, index) => <span key={link.href}>{index > 0 && ' ' }<a href={link.href}>{link.label}</a>{index < post.articleLinks!.length - 1 && ','}</span>)}</p></section>}{post.nextAction && <section className="card" style={{ marginTop: 18 }} data-route-next-action><h2>{post.nextAction.heading}</h2><p>{post.nextAction.description}</p><p><a href={post.nextAction.href}>{post.nextAction.label}</a></p></section>}<section className="card" style={{ marginTop: 18 }}><h2>Provider questions to copy</h2><p className="quote">&quot;Can you show how this role is screened, trained, checked each week, and replaced if fit is poor?&quot;</p><p className="quote">&quot;Can we start with a small task list before we expand the role?&quot;</p></section><section className="card" style={{ marginTop: 18 }}><h2>FAQ</h2>{post.faq.map((item) => <div key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></div>)}</section><section className="card" style={{ marginTop: 18 }}><h2>Sources and notes</h2><p>These sources are included as planning references. They do not replace legal, tax, security, or HR advice.</p><ul className="list">{post.sources.map((source) => <li key={source.url}><a href={source.url}>{source.name}</a>: {source.note}</li>)}</ul></section>{relatedServices.length > 0 && <section className="card" style={{ marginTop: 18 }}><h2>Related role guides</h2>{relatedServices.map((service) => <p key={service.slug}><a href={`/services/${service.slug === 'executive-assistant' ? 'executive-assistant-staffing' : service.slug === 'customer-support-assistant' ? 'customer-support-assistants' : service.slug === 'operations-assistant' ? 'operations-assistant-staffing' : service.slug}`}>{service.name}</a></p>)}</section>}</article><CTA /></main><Footer /></>;
}
