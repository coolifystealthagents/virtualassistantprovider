import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Footer, Header, JsonLd } from '../../components';
import { fleetServices } from '../../fleet-content';
import { serviceDetails } from '../../service-details';
import styles from '../../v3-pages.module.css';

const baseUrl = 'https://virtualassistantprovider.com';
export function generateStaticParams() { return fleetServices.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) return {};
  const canonical = `${baseUrl}/services/${service.slug}`;
  return { title: `${service.title} | Philippines staffing`, description: service.summary, alternates: { canonical }, openGraph: { title: service.title, description: service.summary, url: canonical, type: 'website', images: [{ url: `${baseUrl}${service.heroImage}`, alt: service.heroImageAlt }] } };
}

export default async function ServicePage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const detail = serviceDetails[service.slug];
  if (!detail) notFound();
  const related = detail.related.map((relatedSlug) => fleetServices.find((item) => item.slug === relatedSlug)).filter(Boolean);
  const canonical = `${baseUrl}/services/${service.slug}`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', name: service.title, description: service.summary, url: canonical, areaServed: 'Worldwide', provider: { '@type': 'Organization', name: 'Virtual Assistant Provider', url: baseUrl } },
    { '@type': 'FAQPage', mainEntity: detail.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl }, { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` }, { '@type': 'ListItem', position: 3, name: service.title, item: canonical }] },
  ] };

  return <><Header/><main className={styles.page}><JsonLd data={schema}/>
    <section className={`${styles.hero} ${styles.detailHero}`}><div className={`${styles.wrap} ${styles.heroGrid}`}><div><h1>{service.title}</h1><p className={styles.lead}>{service.summary}</p><div className={styles.actions}><a className={styles.primary} href="/contact-us">Plan this role</a><a className={styles.secondary} href="#scope">Read the operating guide</a></div><p className={styles.cue}>Philippines based staffing with a defined queue, named reviewer, and explicit decision limits.</p></div><figure className={styles.heroFigure}><img src={service.heroImage} alt={service.heroImageAlt} width="1200" height="675"/><figcaption>Role specific work needs role specific inputs, evidence, controls, and escalation.</figcaption></figure></div></section>

    <section className={styles.section} id="scope"><div className={`${styles.wrap} ${styles.detailBody}`}><article className={styles.reading}>
      <section><h2>The operating problem</h2>{detail.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
      <section><h2>Who this role is for</h2><p>{detail.whoFor}</p><h3>How the work should be organized</h3>{detail.approach.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
      <section><h2>Inputs required before access</h2><p>An assistant cannot produce reliable work from missing context. Assemble these inputs, remove obsolete versions, and identify the owner who can clarify each source.</p><ul>{detail.inputs.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>Work included</h2><div className={styles.taskStack}>{detail.tasks.map((task) => <article key={task.title}><h3>{task.title}</h3><p>{task.body}</p></article>)}</div></section>
      <section><h2>Concrete deliverables</h2><p>Deliverables should be reviewable without a manager reconstructing the assistant’s activity. Each item needs a current state, source, owner, and visible exception where applicable.</p><ul>{detail.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>Quality controls</h2><p>Quality review should inspect evidence and decisions, not screen presence or raw activity counts. Use a consistent sample, discuss corrections, and update the operating guide when a missing rule causes repeat errors.</p><ul>{detail.controls.map((item) => <li key={item}>{item}</li>)}</ul><h3>Human decision boundaries</h3><ul>{detail.boundaries.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section><h2>A realistic example</h2><div className={styles.example}><h3>{detail.scenario.title}</h3><p><strong>Context:</strong> {detail.scenario.context}</p><p><strong>Assistant response:</strong> {detail.scenario.response}</p><p><strong>Manager review:</strong> {detail.scenario.review}</p></div></section>
      <section><h2>Launch this role</h2><p>Launch is a controlled transfer of one queue, not a single account handoff. Keep early scope small enough that a reviewer can see every material result and correct the system before volume grows.</p><div className={styles.taskStack}>{detail.launch.map((step) => <article key={step.title}><h3>{step.title}</h3><p>{step.body}</p></article>)}</div></section>
      <section className={styles.faq}><h2>Frequently asked questions</h2>{detail.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</section>
      <section><h2>Related service options</h2><div className={styles.related}>{related.map((item) => item ? <a href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.summary}</p><strong>Read the related service guide</strong></a> : null)}</div></section>
    </article>
    <aside className={styles.sticky}><h2>Role review</h2><p>Before matching, be ready to name:</p><ul><li>The recurring output</li><li>The authoritative source</li><li>The working schedule</li><li>The person checking quality</li><li>The exception owner</li><li>The permissions required</li></ul><a className={styles.primary} href="/contact-us">Discuss this role</a></aside>
    </div></section>
    <section className={styles.final}><div className={styles.wrap}><h2>Build the role around work that can be explained and reviewed.</h2><p>Share your queue, systems, hours, examples, and decision boundaries. We will use them to discuss a Philippines based staffing plan.</p><a className={styles.primary} href="/contact-us">Request a role planning call</a></div></section>
  </main><Footer/></>;
}
