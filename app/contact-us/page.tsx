import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import { site } from '../data';
import { TestimonialsRail } from '../booking-components';
import StandardContactForm from './StandardContactForm';

const canonical = 'https://virtualassistantprovider.com/contact-us';

export const metadata: Metadata = {
  title: { absolute: 'Contact Virtual Assistant Provider | Scope Your Role' },
  description: 'Describe the recurring work, tools, schedule, and approval boundaries your Philippines-based virtual assistant should support.',
  alternates: { canonical: '/contact-us' },
  robots: { index: true, follow: true },
  openGraph: { title: 'Contact Virtual Assistant Provider | Scope Your Role', description: 'Turn recurring work into a clear, accountable virtual assistant role.', url: canonical, type: 'website', images: ['/brand/stealth-agents-team-bacolod.png'] },
};

const faqs = [
  { q: 'What can a virtual assistant handle?', a: 'A properly scoped assistant can support inbox and calendar workflows, CRM hygiene, customer service routing, research, reporting, documentation, follow-up queues, and administrative coordination. The exact scope depends on your systems, permissions, and review requirements.' },
  { q: 'How do you match an assistant to our business?', a: 'The consultation covers the work, schedule, communication style, tools, experience, access level, and service standard you need. Those details guide candidate selection and the launch plan.' },
  { q: 'What work should remain with our team?', a: 'Licensed or regulated services, legal and compliance interpretation, financial authorization, employment decisions, security administration, strategy, and final executive approvals remain with qualified or authorized personnel.' },
];

export default function ContactUsPage() {
  const schemas = [
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Contact Us', item: canonical }] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ];
  return <><Header /><main className="contact-page contact-release-page">
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <section className="contact-first-fold" aria-labelledby="contact-title">
      <div className="contact-release-shell contact-first-grid">
        <div className="contact-first-copy">
          <p className="contact-kicker">A useful first conversation</p>
          <h1 id="contact-title">Shape the role before you hire.</h1>
          <p className="contact-release-lead">Tell us what repeats, where work lives, and who approves it. We will use that context to discuss a practical support lane.</p>
          <ul className="contact-scope-labels" aria-label="Consultation scope"><li>Role clarity</li><li>Access boundaries</li><li>Review cadence</li></ul>
          <TestimonialsRail contact />
        </div>
        <StandardContactForm endpoint="/api/contact" encoding="form" />
      </div>
    </section>
    <section className="contact-parent-proof" aria-labelledby="team-title">
      <div className="contact-release-shell contact-parent-grid">
        <figure className="contact-parent-photo"><img src="/brand/stealth-agents-team-bacolod.png" width="600" height="197" alt="StealthAgents operations team together at the Bacolod office" /></figure>
        <div className="contact-parent-copy">
          <p className="contact-kicker dark">The operating team</p>
          <h2 id="team-title">Managed support backed by real people</h2>
          <p>Virtual Assistant Provider helps you understand the role. StealthAgents supports delivery through candidate matching, managed operations, and an ongoing point of contact. Your team remains responsible for approvals, system permissions, policy, and regulated decisions.</p>
          <div className="contact-parent-plate"><img src="/brand/stealth-agents-logo-black.png" width="149" height="50" alt="StealthAgents official logo" /><strong>Official team, Bacolod</strong></div>
          <p className="contact-parent-legacy">Powered by Stealth Agents. Official team, Bacolod.</p>
        </div>
      </div>
    </section>
    <section className="contact-release-section contact-release-muted" aria-labelledby="boundaries-title"><div className="contact-release-shell contact-boundary-grid"><div><p className="contact-kicker dark">Clear responsibility</p><h2 id="boundaries-title">Delegate repeatable support and retain accountable decisions</h2></div><article><h3>Suitable support</h3><p>Assistants may coordinate approved inbox, calendar, CRM, customer support, research, reporting, documentation, follow-up, and administrative workflows using your procedures.</p></article><article><h3>Decisions your team retains</h3><p>Licensed services, legal interpretation, financial authorization, clinical decisions, security administration, employment decisions, strategy, and final executive approvals stay with qualified or authorized personnel.</p></article></div></section>
    <section className="contact-release-section" aria-labelledby="faq-title"><div className="contact-release-shell contact-faq-wrap"><h2 id="faq-title">Questions before you send the brief</h2>{faqs.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
  </main><Footer /></>;
}
