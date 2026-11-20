import { Footer, Header, JsonLd } from '../components';
import Image from 'next/image';
import type { Publication } from '../publication-manifest';
import { ArticleToc, type TocItem } from './ArticleToc';

const baseUrl = 'https://virtualassistantprovider.com';
const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export function EditorialArticle({ post, children }: { post: Publication; children?: React.ReactNode; sectionContent?: Readonly<Record<string, React.ReactNode>> }) {
  const path = `/${post.kind}/${post.slug}`;
  const toc: TocItem[] = post.sections.flatMap((section) => [
    { id: section.id, label: section.heading, level: 2 as const },
    ...(section.subheadings?.map((subheading) => ({ id: subheading.id, label: subheading.heading, level: 3 as const })) ?? []),
  ]);
  toc.push(
    { id: 'article-sources', label: 'Sources', level: 2 },
    { id: 'article-next-step', label: 'Turn the reading into a role brief', level: 2 },
  );
  const schema = {
    '@context': 'https://schema.org',
    '@type': post.kind === 'research' ? 'Report' : 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    mainEntityOfPage: `${baseUrl}${path}`,
    image: `${baseUrl}${post.heroImage}`,
    author: { '@type': 'Organization', name: 'Virtual Assistant Provider' },
    publisher: { '@type': 'Organization', name: 'Virtual Assistant Provider', url: baseUrl },
    citation: post.sources.map((source) => source.href),
    hasPart: toc.map((item, index) => ({ '@type': 'WebPageElement', position: index + 1, name: item.label, url: `${baseUrl}${path}#${item.id}` })),
  };

  return (
    <>
      <Header />
      <main className="va-page va-art" id="main-content">
        <JsonLd data={schema} />

        <header className="va-art-hero">
          <div className="va-art-hero-bg" aria-hidden="true" />
          <div className="va-container va-art-hero-grid">
            <div className="va-art-hero-copy">
              <div className="va-crumbs"><a href="/">Home</a><span>/</span><a href={`/${post.kind}`}>{post.kind === 'blog' ? 'Blog' : 'Research'}</a><span>/</span><span>{post.topic}</span></div>
              <p className="va-eyebrow">{post.topic}</p>
              <h1>{post.title}</h1>
              <p className="va-art-deck">{post.description}</p>
              <div className="va-art-byline">
                <span>Published <time dateTime={post.published}>{formatDate(post.published)}</time></span>
                {post.updated ? <span>Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time></span> : null}
                <span>{post.readingMinutes} minute read</span>
              </div>
            </div>
            <figure className="va-art-hero-media">
              <Image src={post.heroImage} alt={post.heroAlt} width={1200} height={675} sizes="(max-width: 980px) 100vw, 44vw" priority />
            </figure>
          </div>
        </header>

        <div className="va-container va-art-mobile"><ArticleToc items={toc} /></div>

        <div className="va-container va-art-layout">
          <article className="va-art-prose">
            {post.sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id}>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.subheadings?.map((subheading) => (
                  <div key={subheading.id}>
                    <h3 id={subheading.id}>{subheading.heading}</h3>
                    <p>{subheading.body}</p>
                  </div>
                ))}
              </section>
            ))}

            {children}

            <section className="va-art-sources" aria-labelledby="article-sources">
              <h2 id="article-sources">Sources</h2>
              <p>Open the original publisher and confirm the current version, definition, and scope before using a source for a business decision.</p>
              <ol>{post.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ol>
            </section>

            <section className="va-art-next" aria-labelledby="article-next-step">
              <p className="va-eyebrow">The next useful step</p>
              <h2 id="article-next-step">Turn the reading into a role brief.</h2>
              <p>Bring the recurring tasks, tools, schedule, access limits, and owner-only decisions. Start with one work sample and one clear review path.</p>
              <a className="va-btn" href="/contact-us">Plan a Philippines-based role ↗</a>
            </section>
          </article>

          <aside className="va-art-sidebar" aria-label="Article navigation and resources">
            <div className="va-art-sticky">
              <ArticleToc items={toc} />
              <section className="va-art-module">
                <h2>Article details</h2>
                <dl>
                  <div><dt>Publisher</dt><dd>Virtual Assistant Provider</dd></div>
                  <div><dt>Topic</dt><dd>{post.topic}</dd></div>
                  <div><dt>Reviewed</dt><dd>{formatDate(post.updated ?? post.published)}</dd></div>
                </dl>
              </section>
              <section className="va-art-module">
                <h2>Related service</h2>
                <a href={post.relatedService.href}>{post.relatedService.label} ↗</a>
              </section>
              <section className="va-art-module">
                <h2>Related resource</h2>
                <a href={post.relatedResource.href}>{post.relatedResource.label} ↗</a>
              </section>
              <a className="va-art-side-cta" href="/contact-us">Discuss your role plan <span aria-hidden="true">↗</span></a>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
