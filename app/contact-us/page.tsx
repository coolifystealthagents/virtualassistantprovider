import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import { Footer, Header, CTA } from '../components';
import { site } from '../data';
import { TestimonialsRail } from '../booking-components';
import StandardContactForm from './StandardContactForm';

const canonical = 'https://virtualassistantprovider.com/contact-us';

export const metadata: Metadata = {
  title: { absolute: 'Contact Virtual Assistant Provider | Scope Your Role' },
  description: 'Describe the recurring work, tools, schedule, and approval boundaries your Philippines-based virtual assistant should support.',
  alternates: { canonical: '/contact-us' },
  robots: { index: true, follow: true },
  openGraph: { title: 'Contact Virtual Assistant Provider | Scope Your Role', description: 'Turn recurring work into a clear, accountable virtual assistant role.', url: canonical, type: 'website', images: ['/brand/stealth-agents-logo-black.png'] },
};

const prep = [
  { title: 'The recurring queue', text: 'Five to ten tasks with a clear input, finished output, and due time.' },
  { title: 'The systems', text: 'The tools, records, and source of truth used for each task.' },
  { title: 'The review owner', text: 'The person who inspects output and resolves exceptions.' },
  { title: 'The boundary', text: 'Money, policy, clinical, legal, security, and final approval decisions.' },
];

const faqs = [
  ['What can a virtual assistant handle?', 'A properly scoped assistant can support inbox and calendar workflows, CRM hygiene, customer service routing, research, reporting, documentation, follow-up queues, and administrative coordination. The exact scope depends on your systems, permissions, and review requirements.'],
  ['How do you match an assistant to our business?', 'The consultation covers the work, schedule, communication style, tools, experience, access level, and service standard you need. Those details guide candidate selection and the launch plan.'],
  ['What work should remain with our team?', 'Licensed or regulated services, legal and compliance interpretation, financial authorization, employment decisions, security administration, strategy, and final executive approvals remain with qualified or authorized personnel.'],
] as const;

export default function ContactUsPage() {
  const schemas = [
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Contact Us', item: canonical }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ];

  return (
    <>
      <Header />
      <main className="va-page va-contact">
        {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}

        <section className="va-contact-hero">
          <div className="va-container va-contact-grid">
            <div className="va-contact-copy">
              <p className="va-eyebrow">A useful first conversation</p>
              <h1>Plan the right support for your business.</h1>
              <p className="va-hero-lead">Tell us what repeats, where the work lives, and who approves it. We will use that context to discuss a practical support lane.</p>
              <ul className="va-contact-scope" aria-label="Consultation scope"><li>Role clarity</li><li>Access boundaries</li><li>Review cadence</li></ul>
              <div className="va-contact-brief">
                <span className="va-contact-brief-kicker">What the first call covers</span>
                <div className="va-contact-brief-row"><strong>One queue</strong><span>Choose work with a reviewable finish.</span></div>
                <div className="va-contact-brief-row"><strong>One owner</strong><span>Name the person who approves exceptions.</span></div>
                <div className="va-contact-brief-row"><strong>One rhythm</strong><span>Agree the daily handoff and weekly review.</span></div>
              </div>
            </div>
            <StandardContactForm endpoint="/api/contact" encoding="form" />
          </div>
        </section>

        <section className="va-official">
          <div className="va-container va-official-grid">
            <figure className="va-official-media">
              <img src="/brand/stealth-agents-team-bacolod.jpg" alt="Official StealthAgents team outside the Bacolod City Government Center" width="953" height="540" />
              <figcaption>Official StealthAgents team · Bacolod City, Philippines</figcaption>
            </figure>
            <div className="va-official-copy">
              <p className="va-eyebrow">Official team, Bacolod</p>
              <img className="va-official-logo" src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" width="149" height="50" />
              <h2>A real team behind the assistant.</h2>
              <p>
                Virtual Assistant Provider is powered by StealthAgents. The team recruits, employs,
                and supports the Philippines-based professionals who deliver this work.
              </p>
              <p>
                Your team keeps priorities, approvals, sensitive access, and final decisions. The
                assistant owns the agreed queue and escalates when a rule is unclear.
              </p>
              <a className="va-link" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Meet StealthAgents ↗</a>
            </div>
          </div>
        </section>

        <section className="va-prep">
          <div className="va-container">
            <div className="va-head">
              <div><p className="va-eyebrow">What to bring</p><h2>A better brief makes a better match.</h2></div>
              <p>You do not need a finished job description. A few concrete details make the conversation more useful.</p>
            </div>
            <div className="va-prep-grid">
              {prep.map((card) => (
                <article className="va-prep-card" key={card.title}><span>Brief</span><h3>{card.title}</h3><p>{card.text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="va-reviews" aria-label="Client reviews">
          <div className="va-container"><TestimonialsRail contact /></div>
        </section>

        <section className="va-section va-section--paper">
          <div className="va-container">
            <div className="va-faq-detail">
              <div>
                <p className="va-eyebrow">Before you send the brief</p>
                <h2>Questions buyers ask.</h2>
                <p>Bring one representative queue and the reviewer's name. That is enough to begin.</p>
              </div>
              <div>
                {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
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
