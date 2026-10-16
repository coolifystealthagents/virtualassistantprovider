import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import { publishedResearchPosts } from '../publication-manifest';
import styles from '../editorial/editorial.module.css';

const baseUrl = 'https://virtualassistantprovider.com';
const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export const metadata: Metadata = {
  title: { absolute: 'Philippines virtual assistant research | Virtual Assistant Provider' },
  description: 'Six reviewed, source-led reports for evaluating Philippines-based virtual assistant hiring, privacy, performance, communication, compliance, and complete cost.',
  alternates: { canonical: `${baseUrl}/research` },
  openGraph: { title: 'Philippines virtual assistant research', description: 'A concise source-led library for safer staffing decisions.', url: `${baseUrl}/research`, type: 'website', images: ['/featured/hire-virtual-assistant-philippines-evidence-guide.png'] },
};

export default function Research() {
  const schema = { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Philippines virtual assistant research', description: metadata.description, url: `${baseUrl}/research`, mainEntity: { '@type': 'ItemList', numberOfItems: publishedResearchPosts.length, itemListElement: publishedResearchPosts.map((post, index) => ({ '@type': 'ListItem', position: index + 1, name: post.title, url: `${baseUrl}/research/${post.slug}` })) } };
  return (
    <>
      <Header />
      <main className={styles.indexPage} id="main-content">
        <section className={styles.indexHero}>
          <div><p className={styles.topic}>Reviewed evidence library</p><h1>Research for planning Philippines-based teams</h1><p>These source-led reports help buyers frame hiring questions without turning broad statistics into promises about an individual. Each report shows how evidence should shape a work sample, access plan, contract question, or review decision.</p></div>
          <img src="/featured/hire-virtual-assistant-philippines-evidence-guide.png" alt="Evidence guide for Philippines-based virtual assistant hiring" width="1200" height="675" />
        </section>
        <section className={styles.indexIntro} aria-labelledby="read-research"><h2 id="read-research">Read for a decision, then verify the individual</h2><p>Country data and standards can clarify context, definitions, and risk controls. They cannot demonstrate one candidate's skill, home setup, reliability, or fit. Use each report to form better questions, then request direct evidence through a paid sample, references, a schedule test, and written operating terms.</p></section>
        <section className={styles.indexCards} aria-label="Published research reports">
          {publishedResearchPosts.map((post) => <article key={post.slug}><a href={`/research/${post.slug}`}><img src={post.heroImage} alt={post.heroAlt} width="1200" height="675" loading="lazy" /><div><p>{post.topic}</p><h2>{post.title}</h2><span>Published <time dateTime={post.published}>{formatDate(post.published)}</time> · {post.sources.length} direct sources</span><p>{post.description}</p></div></a></article>)}
        </section>
        <section className={styles.indexGuide}><div><h2>How to use the evidence responsibly</h2><p>Open the linked source, check its publisher, date, definition, period, and population, then state the limit beside the finding. If the evidence does not measure a candidate or provider, do not present it as candidate or provider proof.</p><a href="/research/hire-virtual-assistant-philippines-evidence-guide">Start with the hiring evidence guide</a></div><div><h2>Connect evidence to a scoped role</h2><p>Use the findings to define a sample, access control, review cadence, and owner boundary for the actual work.</p><a href="/contact-us">Request a role planning call</a></div></section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
