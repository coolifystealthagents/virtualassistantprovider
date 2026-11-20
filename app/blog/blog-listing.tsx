import type { CSSProperties } from 'react';
import Image from 'next/image';
import { Header, Footer, PageHero } from '../components';
import { publishedBlogPosts } from '../publication-manifest';

const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export function BlogListing({ page = 1 }: { page?: number }) {
  if (page !== 1) return null;
  const featured = publishedBlogPosts.find((post) => post.slug === 'executive-assistant-philippines-hiring-guide') ?? publishedBlogPosts[0];
  const rest = publishedBlogPosts.filter((post) => post.slug !== featured.slug);

  return (
    <>
      <Header />
      <main className="va-page" id="main-content">
        <PageHero
          eyebrow="Reviewed field guides"
          title={<>Practical guides for Philippines-based staffing.</>}
          lead="Define a role, test real work, limit access, and build a first-month review plan. One strong guide for each operating context."
          crumbs={<><a href="/">Home</a><span>/</span><span>Blog</span></>}
          actions={<a className="va-btn va-btn--ghost" href="/research">Browse the evidence library ↗</a>}
          media={
            <div className="va-guide-panel">
              <div className="va-guide-panel-top"><span>Latest guides</span><span>{publishedBlogPosts.length} in the library</span></div>
              <h2>{featured.title}</h2>
              <p>{featured.description}</p>
              <div className="va-guide-rows">
                {publishedBlogPosts.slice(1, 4).map((post) => (
                  <div className="va-guide-row" key={post.slug}><span>{post.readingMinutes} min</span><strong>{post.title}</strong><span>↗</span></div>
                ))}
              </div>
            </div>
          }
        />

        <section className="va-section">
          <div className="va-container">
            <div className="va-index-toolbar">
              <span>One reviewed guide for each distinct operating context</span>
              <span>{publishedBlogPosts.length} guides</span>
            </div>

            {featured ? (
              <a className="va-feature" href={`/blog/${featured.slug}`} data-reveal>
                <div className="va-feature-media"><Image src={featured.thumbnail ?? featured.heroImage} alt={featured.heroAlt} width={1200} height={675} sizes="(max-width: 760px) 100vw, 55vw" unoptimized={String(featured.thumbnail ?? featured.heroImage).endsWith('.svg')} /></div>
                <div className="va-feature-copy">
                  <span className="va-post-meta">{featured.topic} · {featured.readingMinutes} min read</span>
                  <h2>{featured.title}</h2>
                  <p>{featured.description}</p>
                  <span className="va-post-meta">Published {formatDate(featured.published)}</span>
                  <span className="va-link" style={{ marginTop: 16 }}>Read the guide ↗</span>
                </div>
              </a>
            ) : null}

            <div className="va-posts">
              {rest.map((post, index) => (
                <a className="va-post-card" href={`/blog/${post.slug}`} key={post.slug} data-reveal style={{ '--va-delay': `${(index % 3) * 50}ms` } as CSSProperties}>
                  <div className="va-post-media">
                    <Image src={post.thumbnail ?? post.heroImage} alt={post.heroAlt} width={1200} height={675} sizes="(max-width: 760px) 100vw, 33vw" loading="lazy" unoptimized={String(post.thumbnail ?? post.heroImage).endsWith('.svg')} />
                    <span>{post.topic}</span>
                  </div>
                  <div className="va-post-body">
                    <span className="va-post-meta">{post.readingMinutes} min read · {formatDate(post.published)}</span>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <span className="va-link">Read the guide ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
