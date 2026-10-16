import { Header, Footer } from '../components';
import { publishedBlogPosts } from '../publication-manifest';
import styles from '../editorial/editorial.module.css';

const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export function BlogListing({ page = 1 }: { page?: number }) {
  if (page !== 1) return null;
  return (
    <>
      <Header />
      <main className={styles.indexPage} id="main-content">
        <section className={styles.indexHero}>
          <div><p className={styles.topic}>Reviewed field guides</p><h1>Practical guides for Philippines-based staffing</h1><p>Use these editor-reviewed guides to define a role, test real work, limit access, and build a first-month review plan. The library is intentionally concise, with one strong guide for each distinct operating context.</p></div>
          <img src="/featured/executive-assistant-philippines-hiring-guide.png" alt="Philippines-based assistant role planning guide" width="1200" height="675" />
        </section>
        <section className={styles.indexIntro} aria-labelledby="choose-guide"><h2 id="choose-guide">Choose by the work and the decisions that stay with you</h2><p>Start with the guide closest to the recurring queue, not a broad job title. Each article covers task scope, a safe work sample, access boundaries, review evidence, and provider questions. Keep financial, legal, clinical, employment, and customer-policy decisions with an accountable owner.</p></section>
        <section className={styles.indexCards} aria-label="Published guides">
          {publishedBlogPosts.map((post) => <article key={post.slug}><a href={`/blog/${post.slug}`}><img src={post.heroImage} alt={post.heroAlt} width="1200" height="675" loading="lazy" /><div><p>{post.topic}</p><h2>{post.title}</h2><span>Published <time dateTime={post.published}>{formatDate(post.published)}</time> · {post.readingMinutes} minute read</span><p>{post.description}</p></div></a></article>)}
        </section>
        <section className={styles.indexGuide}><div><h2>Use the same evidence for every option</h2><p>Write one role brief and one scorecard before speaking with providers. Compare the work sample, named reviewer, access model, complete cost, replacement terms, and offboarding process without relying on directory position or broad claims.</p><a href="/blog/top-50-virtual-assistant-providers">Open the unranked provider directory</a></div><div><h2>Ready to define the first task lane?</h2><p>Share the recurring outputs, tools, hours, access limits, and decisions that require your approval.</p><a href="/contact-us">Plan a Philippines-based role</a></div></section>
      </main>
      <Footer />
    </>
  );
}
export const PAGE_SIZE = 20;
