import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import { researchPosts } from '../fleet-content';

const baseUrl = 'https://virtualassistantprovider.com';

export const metadata: Metadata = {
  title: 'Philippines virtual assistant research',
  description: 'Source-led reports for planning Philippines-based virtual assistant roles, hiring checks, access, and launch decisions.',
  alternates: { canonical: `${baseUrl}/research` },
  openGraph: {
    title: 'Philippines virtual assistant research',
    description: 'Source-led reports for planning Philippines-based virtual assistant roles and hiring decisions.',
    url: `${baseUrl}/research`,
    type: 'website',
  },
};

export default function Research() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Philippines virtual assistant research',
    description: metadata.description,
    url: `${baseUrl}/research`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: researchPosts.length,
      itemListElement: researchPosts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: post.title,
        url: `${baseUrl}/research/${post.slug}`,
      })),
    },
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Research', item: `${baseUrl}/research` },
    ],
  };

  return (
    <>
      <Header />
      <main className="fleet-main">
        <section className="fleet-hero research-index-hero">
          <div className="container">
            <p className="eyebrow">Research library</p>
            <h1>Research for planning Philippines-based teams</h1>
            <p className="lead">Read source-led reports about role design, hiring checks, access controls, and staffing decisions. Each report separates country evidence from the candidate-level proof a buyer still needs.</p>
          </div>
        </section>
        <section className="section">
          <div className="container fleet-card-grid">
            {researchPosts.map((post) => (
              <a className="fleet-card research-index-card" href={`/research/${post.slug}`} key={post.slug}>
                <span>Published {post.published} · {post.sources.length} sources</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <b>Read the evidence guide →</b>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
