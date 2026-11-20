import type { CSSProperties } from 'react';
import Image from 'next/image';
import { Footer, Header, JsonLd, SectionHead, Ticker, CTA } from './components';
import { fleetServices } from './fleet-content';
import { publishedBlogPosts } from './publication-manifest';
import { TestimonialsRail } from './booking-components';

export const metadata = {
  title: { absolute: 'Virtual Assistant Provider | Philippines staffing built around real work' },
  description: 'Define a role, compare Philippines based assistant services, and launch with clear access and review boundaries.',
  alternates: { canonical: '/' },
};

const decisions = [
  ['Assistant owned', 'Repeatable preparation, coordination, documentation, and approved follow-up with a clear finish line.'],
  ['Reviewer checked', 'Customer-facing work, material record changes, exceptions, and early live output until quality is stable.'],
  ['Owner retained', 'Money movement, policy exceptions, regulated judgment, strategy, hiring choices, and final approval.'],
] as const;

const launch = [
  ['Define', 'Write the finish line', 'Name the source, finished output, due time, reviewer, and the conditions that require a stop.'],
  ['Test', 'Use representative work', 'Run a safe sample with a normal item and one deliberate exception so escalation behavior is visible.'],
  ['Open', 'Grant minimum access', 'Create a named account and grant only the systems and records needed for the first queue.'],
  ['Review', 'Expand from evidence', 'Sample early output, correct the written process, and add scope only when the lane is stable.'],
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

const ticker = ['Executive support', 'Customer care', 'Operations', 'Bookkeeping', 'Ecommerce', 'Sales support', 'Recruiting', 'Marketing', 'Healthcare admin', 'Real estate'];

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Virtual Assistant Provider',
    url: 'https://virtualassistantprovider.com',
  };
  const roles = fleetServices.slice(0, 8);
  const posts = publishedBlogPosts.slice(0, 3);

  return (
    <>
      <Header />
      <main className="va-home">
        <JsonLd data={schema} />

        <section className="va-hero">
          <div className="va-container va-hero-inner">
            <div className="va-hero-copy">
              <p className="va-eyebrow">Philippines-based assistant support</p>
              <h1>Hire a Philippines based assistant for a <span className="va-accent">defined workflow.</span></h1>
              <p className="va-hero-lead">
                Turn recurring work into a focused role with clear access, review, and escalation
                rules. Start with one queue and a result your team can inspect.
              </p>
              <div className="va-actions">
                <a className="va-btn" href="/contact-us" id="cta-page-action-1">Request a role plan <span aria-hidden="true">↗</span></a>
                <a className="va-btn va-btn--ghost" href="#roles" id="cta-page-action-2">Explore the services</a>
              </div>
              <ul className="va-trust">
                <li>Philippines-based talent</li>
                <li>One named reviewer</li>
                <li>Documented access and handoff</li>
              </ul>
            </div>

            <div className="va-orbit-scene" aria-label="A daily assistant plan with orbiting work areas">
              <div className="va-orbit-halo" aria-hidden="true" />
              <div className="va-orbit-ring va-ring-a" aria-hidden="true" />
              <div className="va-orbit-ring va-ring-b" aria-hidden="true" />

              <div className="va-plan-card" data-tilt data-tilt-strength="4">
                <div className="va-plan-head">
                  <span>Today</span>
                  <strong>Your support lane</strong>
                </div>
                <div className="va-plan-row is-done">
                  <time>8:30</time><span className="va-plan-check">✓</span>
                  <span><strong>Inbox triage</strong><small>12 messages sorted, 3 drafts ready</small></span>
                </div>
                <div className="va-plan-row is-now">
                  <time>10:00</time><span className="va-plan-check" />
                  <span><strong>Calendar check</strong><small>Two conflicts need an owner decision</small></span>
                </div>
                <div className="va-plan-row">
                  <time>13:30</time><span className="va-plan-check" />
                  <span><strong>CRM notes</strong><small>Update the follow-up queue</small></span>
                </div>
                <div className="va-plan-row">
                  <time>15:00</time><span className="va-plan-check" />
                  <span><strong>Weekly brief</strong><small>Prepare exceptions and next actions</small></span>
                </div>
                <div className="va-plan-foot">
                  <span>2 of 4 complete</span>
                  <span className="va-progress-track"><i /></span>
                </div>
              </div>

              <div className="va-orbit-pill va-pill-inbox" data-depth="14"><i>✉</i> Inbox <b>12</b></div>
              <div className="va-orbit-pill va-pill-calendar" data-depth="18"><i>◷</i> Calendar</div>
              <div className="va-orbit-pill va-pill-crm" data-depth="12"><i>◎</i> CRM notes</div>
              <div className="va-orbit-pill va-pill-reports" data-depth="20"><i>▤</i> Weekly brief</div>

              <figure className="va-mini-photo" data-depth="8">
                <img src="/images/professional-services/home-executive-assistant-27086215.jpg" alt="Executive assistant organizing work at a laptop" />
                <figcaption>One role · clear ownership</figcaption>
              </figure>
            </div>
          </div>
          <Ticker items={ticker} />
        </section>

        <section className="va-section va-section--paper" style={{ paddingTop: 30 }}>
          <div className="va-container">
            <div className="va-proof" data-reveal>
              <article><b>One queue</b><span>Start with repeatable work and a finished example.</span></article>
              <article><b>Named reviewer</b><span>Your manager keeps approvals, exceptions, and final decisions.</span></article>
              <article><b>Documented handoff</b><span>Access, evidence, and escalation live in one brief.</span></article>
            </div>
          </div>
        </section>

        <section className="va-section">
          <div className="va-container">
            <div className="va-statement">
              <h2 data-reveal>Start with the queue that <em>keeps returning.</em></h2>
              <div className="va-statement-copy" data-reveal style={{ '--va-delay': '80ms' } as CSSProperties}>
                <p>
                  Choose related work with compatible tools, one priority owner, and a clear point
                  where judgment returns to your team.
                </p>
                <p>
                  A defined lane gives the assistant a finish line and gives your reviewer something
                  concrete to inspect. Broad task lists hide the decisions that should stay with you.
                </p>
                <div className="va-pillars">
                  <article className="va-pillar"><span>Review</span><strong>Inspectable output</strong><p>Examples, status, source links, and exceptions.</p></article>
                  <article className="va-pillar"><span>Control</span><strong>Your approval boundary</strong><p>Money, policy, clinical, legal, and final calls stay inside.</p></article>
                  <article className="va-pillar"><span>Rhythm</span><strong>A weekly cadence</strong><p>Short handoffs, a named manager, and documented fixes.</p></article>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="va-section va-section--paper" id="roles">
          <div className="va-container">
            <SectionHead
              eyebrow="Assistant services"
              title={<>Choose the work your team needs help with.</>}
              copy="Each role has a defined queue, access boundary, review owner, and first-week outcome. Start with the bottleneck."
            />
            <div className="va-roles">
              {roles.map((service, index) => (
                <a
                  className="va-role-card"
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  data-tilt
                  data-tilt-strength="3"
                  data-reveal
                  style={{ '--va-delay': `${(index % 2) * 50}ms` } as CSSProperties}
                >
                  <div className="va-role-media">
                    <Image src={service.heroImage} alt={service.heroImageAlt} width={1600} height={900} sizes="(max-width: 760px) 100vw, 50vw" loading="lazy" />
                    <span className="va-role-tag">{roleTags[service.slug] || 'Support'}</span>
                  </div>
                  <div className="va-role-copy">
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <div className="va-role-foot"><span>Open the role guide</span><span className="va-role-arrow" aria-hidden="true">↗</span></div>
                  </div>
                </a>
              ))}
            </div>
            <div className="va-role-tools">
              <span>10 roles · one recruiting and employment team</span>
              <a href="/services">Compare all ten services ↗</a>
            </div>
          </div>
        </section>

        <section className="va-boundary">
          <div className="va-container va-boundary-grid">
            <div className="va-boundary-copy" data-reveal>
              <p className="va-eyebrow va-eyebrow--light">A real handoff boundary</p>
              <h2>A handoff needs a boundary, not just a checklist.</h2>
              <p>
                Before an account opens, decide what the assistant may complete, what a reviewer
                must inspect, and what only an authorized owner can decide.
              </p>
            </div>
            <div className="va-boundary-list" data-reveal>
              {decisions.map(([title, body]) => (
                <article className="va-boundary-row" key={title}><h3>{title}</h3><p>{body}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="va-reviews" aria-label="Client reviews">
          <div className="va-container"><TestimonialsRail /></div>
        </section>

        <section className="va-section va-section--paper">
          <div className="va-container">
            <SectionHead
              eyebrow="Controlled launch"
              title={<>From role brief to live work.</>}
              copy="A narrow first month shows whether the role works before you add volume, systems, or decision authority."
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

        <section className="va-section va-section--dark">
          <div className="va-container va-team">
            <figure className="va-team-media" data-tilt data-tilt-strength="2">
              <img src="/brand/stealth-agents-team-bacolod.jpg" alt="Official StealthAgents team outside the Bacolod City Government Center" />
              <figcaption>Official StealthAgents team · Bacolod City, Philippines</figcaption>
            </figure>
            <div className="va-team-copy" data-reveal>
              <p className="va-eyebrow va-eyebrow--light">People behind the role</p>
              <h2>Managed support, with a real team behind it.</h2>
              <p>
                StealthAgents recruits, employs, and supports the Philippines-based professionals who
                deliver this work. Virtual Assistant Provider helps you define the lane and keep the
                review boundary.
              </p>
              <p>
                Your team keeps priorities, approvals, sensitive access, regulated decisions, and
                final judgment. The assistant owns the agreed queue and escalates when a rule is unclear.
              </p>
              <a className="va-link va-link--light" href="/contact-us">Talk through the role ↗</a>
            </div>
          </div>
        </section>

        <section className="va-section">
          <div className="va-container">
            <SectionHead
              eyebrow="Field notes"
              title={<>Read before you write the brief.</>}
              copy="Practical guides for scoping the queue, testing real work, and reviewing the first month."
            />
            <div className="va-posts">
              {posts.map((post, index) => (
                <a
                  className="va-post-card"
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  data-reveal
                  style={{ '--va-delay': `${index * 60}ms` } as CSSProperties}
                >
                  <div className="va-post-media">
                    <Image src={post.thumbnail ?? post.heroImage} alt={post.heroAlt} width={1200} height={675} sizes="(max-width: 760px) 100vw, 33vw" loading="lazy" />
                    <span>{post.topic}</span>
                  </div>
                  <div className="va-post-body">
                    <span className="va-post-meta">{post.readingMinutes} min read</span>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <span className="va-link">Read the guide ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
