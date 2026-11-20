import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Footer, Header, PageHero } from '../components';
import { publishedResearchPosts } from '../publication-manifest';

const baseUrl = 'https://virtualassistantprovider.com';
const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export const metadata: Metadata = {
  title: { absolute: 'Philippines virtual assistant research | Virtual Assistant Provider' },
  description: 'A reviewed, source-led report for evaluating Philippines-based virtual assistant hiring with clear evidence limits and candidate checks.',
  alternates: { canonical: `${baseUrl}/research` },
  openGraph: { title: 'Philippines virtual assistant research', description: 'A concise source-led library for safer staffing decisions.', url: `${baseUrl}/research`, type: 'website', images: ['/featured/hire-virtual-assistant-philippines-evidence-guide.png'] },
};

export default function Research() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Philippines virtual assistant research',
    description: metadata.description,
    url: `${baseUrl}/research`,
    mainEntity: { '@type': 'ItemList', numberOfItems: publishedResearchPosts.length, itemListElement: publishedResearchPosts.map((post, index) => ({ '@type': 'ListItem', position: index + 1, url: `${baseUrl}/research/${post.slug}`, name: post.title })) },
  };
  const [featured, ...rest] = publishedResearchPosts;

  return (
    <>
      <Header />
      <main className="va-page" id="main-content">
        <PageHero
          eyebrow="Reviewed evidence library"
          title={<>Research for planning Philippines-based teams.</>}
          lead="Source-led reports help buyers frame hiring questions without turning country statistics into promises about an individual."
          crumbs={<><a href="/">Home</a><span>/</span><span>Research</span></>}
          actions={<a className="va-btn va-btn--ghost" href="/blog">Read the practical guides ↗</a>}
          media={
            <div className="va-guide-panel">
              <div className="va-guide-panel-top"><span>Latest report</span><span>{publishedResearchPosts.length} reports</span></div>
              <h2>{featured.title}</h2>
              <p>{featured.description}</p>
              <div className="va-guide-rows">
                {publishedResearchPosts.slice(1, 4).map((post) => (
                  <div className="va-guide-row" key={post.slug}><span>{post.readingMinutes} min</span><strong>{post.title}</strong><span>↗</span></div>
                ))}
              </div>
            </div>
          }
        />

        <section className="va-section">
          <div className="va-container">
            <div className="va-index-toolbar">
              <span>Each report shows how evidence should shape a bounded role</span>
              <span>{publishedResearchPosts.length} reports</span>
            </div>

            {featured ? (
              <a className="va-feature" href={`/research/${featured.slug}`} data-reveal>
                <div className="va-feature-media"><Image src={featured.thumbnail ?? featured.heroImage} alt={featured.heroAlt} width={1200} height={675} sizes="(max-width: 760px) 100vw, 55vw" /></div>
                <div className="va-feature-copy">
                  <span className="va-post-meta">{featured.topic} · {featured.readingMinutes} min read</span>
                  <h2>{featured.title}</h2>
                  <p>{featured.description}</p>
                  <span className="va-post-meta">Published {formatDate(featured.published)}</span>
                  <span className="va-link" style={{ marginTop: 16 }}>Read the report ↗</span>
                </div>
              </a>
            ) : null}

            <div className="va-posts">
              {rest.map((post, index) => (
                <a className="va-post-card" href={`/research/${post.slug}`} key={post.slug} data-reveal style={{ '--va-delay': `${(index % 3) * 50}ms` } as CSSProperties}>
                  <div className="va-post-media">
                    <Image src={post.thumbnail ?? post.heroImage} alt={post.heroAlt} width={1200} height={675} sizes="(max-width: 760px) 100vw, 33vw" loading="lazy" />
                    <span>{post.topic}</span>
                  </div>
                  <div className="va-post-body">
                    <span className="va-post-meta">{post.readingMinutes} min read · {formatDate(post.published)}</span>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <span className="va-link">Read the report ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
      <Footer />
    </>
  );
}
