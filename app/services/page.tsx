import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Footer, Header, CTA, PageHero, SectionHead } from '../components';
import { fleetServices } from '../fleet-content';

export const metadata: Metadata = {
  title: 'Virtual Assistant Services',
  description: 'Compare ten Philippines based virtual assistant roles by workflow, inputs, deliverables, controls, and launch requirements.',
  alternates: { canonical: '/services' },
};

const faqs = [
  ['Which role should I start with?', 'Choose the recurring queue with the clearest output, source system, reviewer, and exception path. A narrow role that can be evaluated is safer than a broad list of unrelated duties.'],
  ['Can one assistant cover several areas?', 'Related work can fit one role when it shares tools, timing, training, and a reviewer. Split work when financial, clinical, legal, employment, security, or licensed decisions could become unclear.'],
  ['What stays with our team?', 'Your qualified owners retain strategy, regulated judgment, money movement, policy exceptions, sensitive decisions, account administration, and final approvals.'],
  ['How do we evaluate a candidate?', 'Use a short paid sample that resembles the real work but contains safe data. Score accuracy, completeness, communication, judgment, and whether the candidate escalates an intentional exception.'],
] as const;

const boundary = [
  ['Safe to prepare', 'Research, drafts, records, checklists, schedules, and routine updates made from approved sources.'],
  ['Requires review', 'Public messages, customer commitments, material system changes, sensitive records, and early live work.'],
  ['Not delegated', 'Professional advice, strategy, payment release, hiring decisions, clinical judgment, security administration, and policy exceptions.'],
] as const;

const launch = [
  ['Write', 'Define the finish line', 'Name the source, finished output, due time, reviewer, and conditions that require a stop.'],
  ['Test', 'Use representative work', 'Use safe data and include one ambiguity so escalation behavior is visible as well as accuracy.'],
  ['Open', 'Grant minimum access', 'Create a named identity, enable authentication, and grant only what the first queue requires.'],
  ['Review', 'Expand from evidence', 'Sample work, discuss exceptions, correct documentation, and add scope only after reliable evidence.'],
] as const;

const roleTags: Record<string, string> = {
  'executive-assistant-staffing': 'Executive',
  'operations-assistant-staffing': 'Operations',
  'customer-support-assistants': 'Customer',
  'sales-support-assistants': 'Revenue',
  'bookkeeping-assistants': 'Finance',
  'ecommerce-assistants': 'Commerce',
  'real-estate-assistants': 'Property',
  'healthcare-admin-assistants': 'Healthcare',
  'marketing-assistants': 'Marketing',
  'recruiting-assistants': 'People',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="va-page">
        <PageHero
          eyebrow="Assistant services"
          title={<>Ten assistant services built around real operating lanes.</>}
          lead="Compare daily work, required inputs, access boundaries, review controls, and a safe launch path. Start with the queue that needs an owner."
          crumbs={<><a href="/">Home</a><span>/</span><span>Services</span></>}
          actions={<><a className="va-btn" href="#service-list">Explore the roles ↘</a><a className="va-btn va-btn--ghost" href="/contact-us">Build a custom role brief</a></>}
          media={<figure className="va-pagehero-media" data-tilt data-tilt-strength="3"><Image src="/images/professional-services/services-team-coordination-8872202.jpg" alt="Professional operations team coordinating client work around a laptop and shared notes" width={1800} height={1125} sizes="(max-width: 980px) calc(100vw - 32px), 38vw" priority /><figcaption>A defined queue makes interviews, access, coaching, and quality review more useful.</figcaption></figure>}
        />

        <section className="va-section va-section--paper" id="service-list">
          <div className="va-container">
            <SectionHead
              eyebrow="Choose by operating need"
              title={<>Start with the recurring work.</>}
              copy="Each guide covers tasks, inputs, controls, launch advice, and the decisions that remain with your team."
            />
            <div className="va-service-list">
              {fleetServices.map((service, index) => (
                <a
                  className="va-service-row"
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  data-reveal
                  style={{ '--va-delay': `${(index % 2) * 50}ms` } as CSSProperties}
                >
                  <div className="va-service-photo">
                    <Image src={service.heroImage} alt={service.heroImageAlt} width={1600} height={900} sizes="(max-width: 760px) 100vw, 26vw" loading="lazy" />
                  </div>
                  <div className="va-service-copy">
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <span>{roleTags[service.slug] || 'Support'} · Read the full guide ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="va-section">
          <div className="va-container">
            <div className="va-boundary-summary" data-reveal>
              <div>
                <p className="va-eyebrow">Set boundaries before permissions</p>
                <h2>A task list is not an operating role.</h2>
              </div>
              <p>
                A boundary says when work stops, which evidence supports an update, who can approve
                an exception, and which permissions are actually required. Write it before the first
                account is opened.
              </p>
            </div>
            <div className="va-service-note" data-reveal>
              <div><p className="va-eyebrow va-eyebrow--light">Responsibility map</p><h3>Three levels, one named owner each.</h3></div>
              <div>
                {boundary.map(([title, body]) => (
                  <p key={title} style={{ marginBottom: 10 }}><strong style={{ color: '#ffb9a8' }}>{title}. </strong>{body}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="va-section va-section--paper">
          <div className="va-container">
            <SectionHead
              eyebrow="The first month"
              title={<>A controlled workflow, not a cliff jump.</>}
              copy="The sequence is deliberately narrow. A manager can see whether the role works before adding volume, systems, or decision authority."
            />
            <div className="va-launch">
              {launch.map(([label, title, body], index) => (
                <article className="va-launch-step" key={label} data-reveal style={{ '--va-delay': `${index * 60}ms` } as CSSProperties}>
                  <span className="va-launch-dot" aria-hidden="true">{label}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="va-section">
          <div className="va-container">
            <SectionHead eyebrow="Before you choose" title={<>Questions buyers ask.</>} copy="The right role follows the queue, the access boundary, and the reviewer you already have." />
            <div className="va-faq-detail">
              <div>
                <h2>Start with the work, not the title.</h2>
                <p>Bring a representative task and the person who will review it. That is enough to have a useful first conversation.</p>
                <a className="va-link" href="/contact-us">Talk through the role ↗</a>
              </div>
              <div>
                {faqs.map(([question, answer]) => (
                  <details key={question}><summary>{question}</summary><p>{answer}</p></details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
