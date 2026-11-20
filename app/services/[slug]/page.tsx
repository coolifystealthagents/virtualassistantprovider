import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Footer, Header, JsonLd, CTA } from '../../components';
import { fleetServices } from '../../fleet-content';
import { serviceDetails } from '../../service-details';

const baseUrl = 'https://virtualassistantprovider.com';

export function generateStaticParams() {
  return fleetServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) return {};
  const canonical = `${baseUrl}/services/${service.slug}`;
  return {
    title: { absolute: `${service.title} | Virtual Assistant Provider` },
    description: service.summary,
    alternates: { canonical },
    openGraph: { title: service.title, description: service.summary, url: canonical, type: 'website', images: [{ url: `${baseUrl}${service.heroImage}`, alt: service.heroImageAlt }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = fleetServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const detail = serviceDetails[service.slug];
  if (!detail) notFound();
  const related = detail.related.map((relatedSlug) => fleetServices.find((item) => item.slug === relatedSlug)).filter(Boolean);
  const canonical = `${baseUrl}/services/${service.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: service.title, description: service.summary, url: canonical, areaServed: 'Worldwide', provider: { '@type': 'Organization', name: 'Virtual Assistant Provider', url: baseUrl } },
      { '@type': 'FAQPage', mainEntity: detail.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl }, { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` }, { '@type': 'ListItem', position: 3, name: service.title, item: canonical }] },
    ],
  };

  return (
    <>
      <Header />
      <main className="va-page">
        <JsonLd data={schema} />

        <section className="va-detail-hero">
          <div className="va-container va-detail-grid">
            <div className="va-detail-copy">
              <div className="va-crumbs"><a href="/">Home</a><span>/</span><a href="/services">Services</a><span>/</span><span>{service.title}</span></div>
              <p className="va-eyebrow">Philippines-based assistant support</p>
              <h1>{service.title}</h1>
              <p className="va-hero-lead">{service.summary}</p>
              <div className="va-actions">
                <a className="va-btn" href="/contact-us">Plan this role <span aria-hidden="true">↗</span></a>
                <a className="va-btn va-btn--ghost" href="/services">Compare all services</a>
              </div>
            </div>
            <figure className="va-detail-media" data-tilt data-tilt-strength="3">
              <Image src={service.heroImage} alt={service.heroImageAlt} width={1600} height={900} sizes="(max-width: 980px) 100vw, 46vw" priority />
              <figcaption>{service.heroImageAlt}</figcaption>
            </figure>
          </div>
        </section>

        <div className="va-container">
          <div className="va-snapshot">
            <article><span>Best fit</span><strong>{detail.whoFor.split('.')[0]}.</strong></article>
            <article><span>First input</span><strong>{detail.inputs[0]}</strong></article>
            <article><span>Core work</span><strong>{detail.tasks[0]?.title}</strong></article>
            <article><span>Owner boundary</span><strong>{detail.boundaries[0]}</strong></article>
          </div>
        </div>

        <div className="va-detail-body">
          <div className="va-container">
            <section className="va-detail-intro">
              <div data-reveal>
                <p className="va-eyebrow">Make one lane easier to own</p>
                <h2>A clear role, with a review path your team can keep.</h2>
              </div>
              <div data-reveal>
                {detail.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>

            <section style={{ paddingBottom: 54 }}>
              <div className="va-detail-intro" style={{ paddingBottom: 0 }}>
                <div><p className="va-eyebrow">Who this role is for</p><h2>Teams with a recurring coordination load.</h2></div>
                <div>
                  {detail.approach.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="va-capability-section">
          <div className="va-container">
            <div className="va-head" data-reveal>
              <div><p className="va-eyebrow">Capabilities</p><h2>Work tied to a finish line.</h2></div>
              <p>Each task has a source, a reviewable output, and a clear point where owner judgment resumes.</p>
            </div>
            <div className="va-capability-grid">
              {detail.tasks.map((task, index) => (
                <article className="va-capability-card" key={task.title} data-reveal style={{ '--va-delay': `${(index % 3) * 40}ms` } as CSSProperties}>
                  <span>Support task</span>
                  <h3>{task.title}</h3>
                  <p>{task.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="va-container">
            <div className="va-detail-split">
              <article className="va-detail-panel" data-reveal>
                <p className="va-eyebrow">Inputs before access</p>
                <h2>What your team needs to assemble.</h2>
                <ul>{detail.inputs.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article className="va-detail-panel va-detail-panel--ink" data-reveal>
                <p className="va-eyebrow va-eyebrow--light">Owner boundaries</p>
                <h2>What stays with your team.</h2>
                <ul>{detail.boundaries.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            </div>
          </div>
        </section>

        <section className="va-section va-section--paper" style={{ paddingTop: 0 }}>
          <div className="va-container">
            <div className="va-head" data-reveal>
              <div><p className="va-eyebrow">Evidence a manager can review</p><h2>Proof that does not require reconstructing the day.</h2></div>
              <p>Useful evidence shows the current state, source, owner, and exception without asking a manager to watch every minute.</p>
            </div>
            <div className="va-pillars va-pillars--four" style={{ marginTop: 0 }}>
              {detail.deliverables.map((item, index) => (
                <article className="va-pillar" key={item} data-reveal style={{ '--va-delay': `${index * 40}ms` } as CSSProperties}>
                  <span>Deliverable</span><strong>{item.split(',')[0]}</strong><p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="va-launch-detail">
          <div className="va-container">
            <div className="va-head" data-reveal>
              <div><p className="va-eyebrow">Launch one controlled queue</p><h2>Keep the first month narrow enough to inspect.</h2></div>
              <p>Add volume, tools, or task ownership only when the earlier stage is accurate and easy to review.</p>
            </div>
            <div className="va-launch-detail-grid">
              {detail.launch.map((step, index) => (
                <article key={step.title} data-reveal style={{ '--va-delay': `${(index % 2) * 50}ms` } as CSSProperties}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div><h3>{step.title}</h3><p>{step.body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="va-container">
          <section className="va-scenario" data-reveal>
            <div><p className="va-eyebrow">A realistic example</p><h2>{detail.scenario.title}</h2><h3>{detail.scenario.context}</h3></div>
            <div>
              <p><strong>Assistant response</strong>{detail.scenario.response}</p>
              <p><strong>Manager review</strong>{detail.scenario.review}</p>
            </div>
          </section>

          <section className="va-faq-detail">
            <div data-reveal>
              <p className="va-eyebrow">Questions buyers ask</p>
              <h2>Before you commit to the role.</h2>
              <p>Bring a representative queue and the reviewer's name. That is enough for a useful first conversation.</p>
              <a className="va-link" href="/contact-us">Talk through the role ↗</a>
            </div>
            <div>
              {detail.faq.map((item) => (
                <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>
              ))}
            </div>
          </section>

          <section className="va-related">
            <div className="va-head" data-reveal>
              <div><p className="va-eyebrow">Adjacent capacity</p><h2>Related services.</h2></div>
              <p>Keep the first lane stable before adding a neighboring role.</p>
            </div>
            <div className="va-related-grid">
              {related.map((item) => item && (
                <a className="va-related-card" href={`/services/${item.slug}`} key={item.slug} data-reveal>
                  <Image src={item.heroImage} alt={item.heroImageAlt} width={800} height={450} sizes="104px" loading="lazy" />
                  <div><h3>{item.title}</h3><p>{item.summary}</p></div>
                </a>
              ))}
            </div>
          </section>
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
