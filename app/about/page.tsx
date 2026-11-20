import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { CTA, Footer, Header, PageHero, SectionHead } from '../components';

export const metadata: Metadata = {
  title: { absolute: 'About Virtual Assistant Provider' },
  description: 'Learn how Virtual Assistant Provider helps teams define, match, launch, and manage accountable virtual assistant work.',
  alternates: { canonical: '/about' },
};

const responsibilities = [
  ['Your team owns', 'Business priorities, approved procedures, access decisions, regulated work, final review, and authority to act.'],
  ['The assistant owns', 'The assigned queue, status updates, documentation, routine checks, and timely escalation within the approved scope.'],
  ['The managed service supports', 'Role discovery, candidate matching, operating context, launch planning, and a channel for ongoing service concerns.'],
] as const;

const boundaries = [
  ['Good work to delegate', 'Repeatable coordination, approved inbox and calendar routines, CRM updates, research, reporting, documentation, and follow-up.'],
  ['Decisions to keep', 'Money movement, policy exceptions, clinical or legal judgment, security administration, employment decisions, strategy, and final approval.'],
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="va-page about-page">
        <PageHero
          eyebrow="About Virtual Assistant Provider"
          title={<>Better delegation starts with a role people can actually operate.</>}
          lead="We help leaders turn a loose list of tasks into a support lane with an owner, inputs, permissions, review points, and a clear definition of done."
          crumbs={<><a href="/">Home</a><span>/</span><span>About</span></>}
          actions={<a className="va-btn" href="/contact-us">Discuss your support lane ↗</a>}
          media={<figure className="va-pagehero-media"><Image src="/images/professional-services/home-review-handoff-5862283.jpg" alt="Two colleagues reviewing a work handoff and next actions" width={1600} height={1000} sizes="(max-width: 980px) calc(100vw - 32px), 38vw" priority /><figcaption>A useful role starts with work that can be explained and reviewed.</figcaption></figure>}
        />

        <section className="va-section">
          <div className="va-container va-statement">
            <h2 data-reveal>Guidance first. Managed staffing <em>when the role is ready.</em></h2>
            <div className="va-statement-copy" data-reveal>
              <p>
                Virtual Assistant Provider is an educational and conversion layer for teams comparing
                Philippines-based support. We help define the work, identify the review boundary, and
                prepare a brief that can be used in a real staffing conversation.
              </p>
              <p>
                When the role is ready, StealthAgents provides the recruiting and managed-service
                operation behind candidate matching, onboarding coordination, and ongoing support.
              </p>
            </div>
          </div>
        </section>

        <section className="va-boundary">
          <div className="va-container">
            <div className="va-head va-head--light" data-reveal>
              <div><p className="va-eyebrow va-eyebrow--light">Accountability</p><h2>Each responsibility has a visible owner.</h2></div>
              <p>Support extends execution. It does not transfer executive accountability.</p>
            </div>
            <div className="va-pillars" style={{ marginTop: 0 }}>
              {responsibilities.map(([title, body], index) => (
                <article className="va-pillar" key={title} data-reveal style={{ '--va-delay': `${index * 50}ms` } as CSSProperties}>
                  <span>Owner</span><strong>{title}</strong><p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="va-section va-section--paper">
          <div className="va-container">
            <div className="va-detail-intro">
              <div data-reveal>
                <p className="va-eyebrow">How the process works</p>
                <h2>Start with one queue, then build a repeatable operating rhythm.</h2>
              </div>
              <div data-reveal>
                <p>
                  A useful staffing conversation begins with the work: what system is changing, which
                  result matters first, who will review it, and which access is actually required.
                </p>
                <p>
                  Those answers shape the role, the work sample, and the first week. They also make it
                  easier to see when the role is ready to expand and when a decision should stay with you.
                </p>
              </div>
            </div>
            <figure style={{ margin: 0, overflow: 'hidden', borderRadius: 18, border: '1px solid var(--va-line)' }}>
              <Image src="/featured/operations-assistant-daily-workflow.png" alt="Operations assistant workflow showing an organized daily handoff" width={1672} height={941} sizes="(max-width: 760px) 100vw, 1200px" />
            </figure>
          </div>
        </section>

        <section className="va-section">
          <div className="va-container">
            <SectionHead eyebrow="Operating boundaries" title={<>Delegate execution. Keep accountable decisions.</>} copy="The boundary is part of the role, not an afterthought." />
            <div className="va-detail-split" style={{ padding: 0 }}>
              {boundaries.map(([title, body], index) => (
                <article className={`va-detail-panel${index === 1 ? ' va-detail-panel--ink' : ''}`} key={title} data-reveal>
                  <h2>{title}</h2><p style={{ margin: 0, color: index === 1 ? '#c6b6c8' : '#5b4c5e', fontSize: 12, lineHeight: 1.7 }}>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="va-section va-section--paper">
          <div className="va-container va-official-grid">
            <div className="va-official-copy">
              <p className="va-eyebrow">The people behind managed delivery</p>
              <img className="va-official-logo" src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" width="149" height="50" />
              <h2>The official StealthAgents team in Bacolod.</h2>
              <p>
                The team provides operational context, candidate matching, onboarding coordination,
                and a channel for ongoing service concerns. Your team keeps the priorities and final decisions.
              </p>
              <a className="va-link" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Meet StealthAgents ↗</a>
            </div>
            <figure className="va-official-media">
              <img src="/brand/stealth-agents-team-bacolod.jpg" alt="Official StealthAgents team outside the Bacolod City Government Center" width="953" height="540" />
              <figcaption>Official team · Bacolod City, Philippines</figcaption>
            </figure>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
