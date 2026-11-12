import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
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
    <section className={`${styles.hero} ${styles.detailHero}`}><div className={`${styles.wrap} ${styles.heroGrid}`}><div className={styles.heroCopy}><a className={styles.backLink} href="/services">All services</a><h1>{service.title}</h1><p className={styles.lead}>{service.summary}</p><div className={styles.actions}><a className={styles.primary} href="/contact-us">Plan this role</a><a className={styles.secondary} href="#capabilities">Review capabilities</a></div></div><figure className={styles.heroFigure}><Image src={service.heroImage} alt={service.heroImageAlt} width={1600} height={900} sizes="(max-width: 800px) calc(100vw - 28px), 48vw" priority/><figcaption>Role-specific work needs explicit inputs, review, and escalation.</figcaption></figure></div></section>

    <section className={styles.outcomeBand}><div className={`${styles.wrap} ${styles.outcomeGrid}`}><h2>Make one recurring lane easier to own.</h2><div>{detail.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>

    <section className={styles.detailSection}><div className={`${styles.wrap} ${styles.audienceGrid}`}><div><h2>Who this role is for</h2><p>{detail.whoFor}</p></div><div className={styles.approachList}><h3>How the work should be organized</h3>{detail.approach.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></section>

    <section className={`${styles.detailSection} ${styles.detailTint}`} id="capabilities"><div className={styles.wrap}><div className={styles.sectionHeading}><h2>Capabilities tied to a finish line.</h2><p>Each lane has a source, a reviewable output, and a clear point where owner judgment resumes.</p></div><div className={styles.capabilityGrid}>{detail.tasks.map((task, index) => <article className={index === 0 ? styles.capabilityLead : undefined} key={task.title}><h3>{task.title}</h3><p>{task.body}</p></article>)}</div></div></section>

    <section className={styles.detailSection}><div className={`${styles.wrap} ${styles.foundationGrid}`}><div><h2>Inputs before access</h2><p>Assemble current sources and identify the person who can resolve an exception.</p><ul>{detail.inputs.map((item) => <li key={item}>{item}</li>)}</ul></div><div className={styles.boundaryPanel}><h2>Decisions your team retains</h2><ul>{detail.boundaries.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>

    <section className={styles.proofSection}><div className={`${styles.wrap} ${styles.proofGrid}`}><div><h2>Evidence a manager can review.</h2><p>Useful proof shows the current state, source, owner, and exception without reconstructing the assistant’s activity.</p><ul>{detail.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Quality controls</h3><ul>{detail.controls.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>

    <section className={styles.detailSection}><div className={styles.wrap}><div className={styles.sectionHeading}><h2>Launch one controlled queue.</h2><p>Keep early scope narrow enough that a reviewer can inspect material results before adding volume or access.</p></div><ol className={styles.launchGrid}>{detail.launch.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.body}</p></li>)}</ol></div></section>

    <section className={`${styles.detailSection} ${styles.detailTint}`}><div className={`${styles.wrap} ${styles.scenarioGrid}`}><div><h2>A realistic operating example.</h2><h3>{detail.scenario.title}</h3></div><div className={styles.scenarioSteps}><p><strong>Context</strong>{detail.scenario.context}</p><p><strong>Assistant response</strong>{detail.scenario.response}</p><p><strong>Manager review</strong>{detail.scenario.review}</p></div></div></section>

    <section className={styles.detailSection}><div className={`${styles.wrap} ${styles.bottomGrid}`}><div className={styles.faq}><h2>Frequently asked questions</h2>{detail.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div><aside><h2>Related services</h2><div className={styles.related}>{related.map((item) => item ? <a href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.summary}</p><strong>Read the service guide</strong></a> : null)}</div></aside></div></section>

    <section className={styles.final}><div className={styles.wrap}><h2>Build the role around work that can be explained and reviewed.</h2><p>Share the queue, systems, hours, examples, and decision boundaries for a practical Philippines-based staffing plan.</p><a className={styles.primary} href="/contact-us">Plan this role</a></div></section>
  </main><Footer/></>;
}
