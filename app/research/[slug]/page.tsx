import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../../components';
import { researchPosts, type ResearchPost } from '../../fleet-content';

const baseUrl = 'https://virtualassistantprovider.com';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return researchPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = researchPosts.find((entry) => entry.slug === slug);
  if (!post) return {};

  const canonical = `${baseUrl}/research/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      title: post.metaTitle,
      description: post.excerpt,
      url: canonical,
      type: 'article',
      publishedTime: post.published,
      modifiedTime: post.updated,
      siteName: 'Virtual Assistant Provider',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.excerpt,
    },
  };
}

function SourceLinks({ ids, post }: { ids: readonly number[]; post: ResearchPost }) {
  return (
    <sup className="research-citations" aria-label={`Sources ${ids.join(', ')}`}>
      {ids.map((id) => {
        const source = post.sources.find((entry) => entry.id === id);
        return source ? <a key={id} href={source.url} target="_blank" rel="noreferrer">[{id}]</a> : null;
      })}
    </sup>
  );
}

function ParagraphWithCitations({ text, post }: { text: string; post: ResearchPost }) {
  const parts = text.split(/(\[\d+\])/g);
  return (
    <p>
      {parts.map((part, index) => {
        const match = part.match(/^\[(\d+)\]$/);
        return match ? <SourceLinks key={`${part}-${index}`} ids={[Number(match[1])]} post={post} /> : part;
      })}
    </p>
  );
}

export default async function ResearchArticle({ params }: PageProps) {
  const { slug } = await params;
  const post = researchPosts.find((entry) => entry.slug === slug);
  if (!post) notFound();

  const canonical = `${baseUrl}/research/${post.slug}`;
  const reportSchema = {
    '@context': 'https://schema.org',
    '@type': 'Report',
    '@id': `${canonical}#report`,
    headline: post.title,
    description: post.excerpt,
    url: canonical,
    datePublished: post.published,
    dateModified: post.updated,
    inLanguage: 'en-US',
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    author: { '@type': 'Organization', name: 'Virtual Assistant Provider', url: baseUrl },
    publisher: { '@type': 'Organization', name: 'Virtual Assistant Provider', url: baseUrl },
    about: [
      { '@type': 'Thing', name: 'Philippines-based virtual assistant hiring' },
      { '@type': 'Country', name: 'Philippines' },
    ],
    citation: post.sources.map((source) => source.url),
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${canonical}#faq`,
    mainEntity: post.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Research', item: `${baseUrl}/research` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
    ],
  };

  return (
    <>
      <Header />
      <main className="fleet-main research-report" data-article-revision={post.revision}>
        <article>
          <header className="research-hero">
            <div className="research-wrap">
              <p className="eyebrow">Philippines staffing research</p>
              <h1>{post.title}</h1>
              <p className="lead">{post.excerpt}</p>
              <div className="research-meta" aria-label="Article details">
                <span>Published <time dateTime={post.published}>July 22, 2026</time></span>
                <span>Updated <time dateTime={post.updated}>July 22, 2026</time></span>
                <span>{post.readingMinutes} minute read</span>
                <span>{post.sources.length} direct sources</span>
              </div>
              <div className="research-hero-actions">
                <a className="btn primary" href="/contact">Plan a Philippines-based role</a>
                <a className="research-text-link" href="#methodology">Read the method and limits</a>
              </div>
            </div>
          </header>

          <div className="research-wrap research-body">
            <aside className="research-takeaways" aria-labelledby="takeaways-heading">
              <p className="eyebrow">Key takeaways</p>
              <h2 id="takeaways-heading">What a buyer should carry into the hiring process</h2>
              <ul>{post.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
            </aside>

            <section aria-labelledby="headline-statistics">
              <div className="research-section-heading">
                <p className="eyebrow">Philippines evidence</p>
                <h2 id="headline-statistics">Six headline statistics, with limits</h2>
                <p>These figures describe the national or industry setting around Philippines-based remote work. They are screening context, not a promise about any applicant, provider, connection, or result.</p>
              </div>
              <div className="research-stats">
                {post.headlineStats.map((stat) => (
                  <article className="research-stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <h3>{stat.label}</h3>
                    <div>{stat.context} <SourceLinks ids={stat.sourceIds} post={post} /></div>
                  </article>
                ))}
              </div>
            </section>

            {post.sections.slice(0, 3).map((section) => (
              <section className="research-copy-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <ParagraphWithCitations key={paragraph} text={paragraph} post={post} />)}
              </section>
            ))}

            <section className="research-table-section" aria-labelledby="evidence-table-heading">
              <div className="research-section-heading">
                <p className="eyebrow">Decision table</p>
                <h2 id="evidence-table-heading">How to use the evidence without overclaiming it</h2>
                <p>Each signal can improve a buyer’s questions, but none replaces candidate-level proof. Read the final column before turning a national number into a hiring assumption.</p>
              </div>
              <div className="research-table-scroll" role="region" aria-label="Philippines virtual assistant hiring evidence table" tabIndex={0}>
                <table>
                  <caption>Philippines evidence, buyer use, and limits</caption>
                  <thead><tr><th scope="col">Signal</th><th scope="col">Finding</th><th scope="col">Buyer use</th><th scope="col">Limit</th></tr></thead>
                  <tbody>
                    {post.evidenceTable.map((row) => (
                      <tr key={row.signal}>
                        <th scope="row">{row.signal}</th>
                        <td>{row.finding} <SourceLinks ids={row.sourceIds} post={post} /></td>
                        <td>{row.buyerUse}</td>
                        <td>{row.limit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {post.sections.slice(3).map((section) => (
              <section className="research-copy-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <ParagraphWithCitations key={paragraph} text={paragraph} post={post} />)}
              </section>
            ))}

            <section className="research-implications" aria-labelledby="role-tests-heading">
              <div className="research-section-heading">
                <p className="eyebrow">Practical implications</p>
                <h2 id="role-tests-heading">Match the work sample to the role</h2>
                <p>A useful test looks like the first small task the person will do after hiring. Keep all sample data invented or redacted, then score the same qualities for every candidate.</p>
              </div>
              <div className="research-implication-grid">
                {post.implications.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}
              </div>
            </section>

            <section id="methodology" className="research-method" aria-labelledby="method-heading">
              <p className="eyebrow">Methodology and limitations</p>
              <h2 id="method-heading">How this report was built</h2>
              {post.methodology.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>

            <section className="research-faq" aria-labelledby="faq-heading">
              <p className="eyebrow">Five buyer questions</p>
              <h2 id="faq-heading">Frequently asked questions</h2>
              {post.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
            </section>

            <section className="research-sources" aria-labelledby="sources-heading">
              <p className="eyebrow">Numbered sources</p>
              <h2 id="sources-heading">Direct evidence used in this report</h2>
              <ol>
                {post.sources.map((source) => (
                  <li id={`source-${source.id}`} key={source.id}>
                    <a href={source.url} target="_blank" rel="noreferrer">{source.name}</a>
                    <span>{source.organization}{source.published ? ` · ${source.published}` : ''} · accessed {source.accessed}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="research-related" aria-labelledby="related-heading">
              <p className="eyebrow">Related research and planning</p>
              <h2 id="related-heading">Continue with the role, budget, and launch</h2>
              <div className="fleet-card-grid">
                {post.related.map((item) => <a className="fleet-card" href={item.href} key={item.href}><h3>{item.title}</h3><p>{item.description}</p></a>)}
              </div>
            </section>

            <aside className="research-cta" aria-label="Contact Virtual Assistant Provider">
              <div>
                <p className="eyebrow">Philippines-based talent only</p>
                <h2>Turn the evidence into one clear role plan</h2>
                <p>Send the tasks, hours, tools, and owner-only decisions you already know. We will help shape a Philippines-based staffing plan and a safe first-week review.</p>
              </div>
              <a className="btn primary" href="/contact">Request a role planning call</a>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
