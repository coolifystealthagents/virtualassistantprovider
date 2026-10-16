import type { Metadata } from 'next';
import { CTA, Footer, Header } from '../components';

export const metadata: Metadata = {
  title: 'About Virtual Assistant Provider',
  description: 'Learn how Virtual Assistant Provider helps teams define, match, launch, and manage accountable virtual assistant work.',
  alternates: { canonical: '/about' },
};

const responsibilities = [
  ['Your team owns', 'Business priorities, approved procedures, access decisions, regulated work, final review, and authority to act.'],
  ['The assistant owns', 'The assigned queue, status updates, documentation, routine checks, and timely escalation within the approved scope.'],
  ['The managed service supports', 'Role discovery, candidate matching, operating context, launch planning, and a channel for ongoing service concerns.'],
];

export default function AboutPage() {
  return <><Header /><main className="about-page">
    <section className="about-hero"><div className="about-shell about-hero-grid"><div><p className="eyebrow">About Virtual Assistant Provider</p><h1>Better delegation starts with a role people can actually operate.</h1><p className="about-lead">We help leaders turn a loose list of tasks into a support lane with an owner, inputs, permissions, review points, and a clear definition of done.</p><a className="btn primary" href="/contact-us">Discuss your support lane</a></div><figure><img src="/featured/virtual-assistant-work-instructions-philippines.png" width="1672" height="941" alt="Illustrated team reviewing clear virtual assistant work instructions" /><figcaption>Clear inputs and review points make remote support easier to manage.</figcaption></figure></div></section>

    <section className="about-section"><div className="about-shell about-reading-grid"><div><p className="eyebrow">Business model</p><h2>Guidance first, managed staffing when the role is ready</h2></div><div className="about-copy"><p>Virtual Assistant Provider is an educational and conversion layer for businesses considering Philippines-based support. We explain service options, help visitors frame recurring work, and route qualified staffing conversations to the team that can operate the engagement.</p><p>StealthAgents is the parent operating partner. Its team supports matching and managed service delivery. This relationship is stated plainly because buyers should know who provides operational support before sharing a role brief.</p><p>We do not imply that delegation removes management. A useful engagement still needs an accountable client owner, current procedures, safe access, and regular review.</p></div></div></section>

    <section className="about-section about-ink" aria-labelledby="accountability-title"><div className="about-shell"><p className="eyebrow">Accountability</p><h2 id="accountability-title">Each responsibility has a visible owner</h2><div className="about-responsibility-list">{responsibilities.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="about-section"><div className="about-shell about-process-grid"><figure><img src="/featured/operations-assistant-daily-workflow.png" width="1672" height="941" alt="Operations assistant workflow showing an organized daily handoff" /></figure><div><p className="eyebrow">How the engagement works</p><h2>From recurring work to a stable operating rhythm</h2><dl><div><dt>Start with the work</dt><dd>Describe the queue, current owner, source systems, volume, deadlines, and examples of acceptable output.</dd></div><div><dt>Set the boundaries</dt><dd>Identify the permissions an assistant may use, the actions that require approval, and the events that must be escalated.</dd></div><div><dt>Match for the context</dt><dd>Role requirements, schedule, communication style, tools, and relevant experience shape the staffing discussion.</dd></div><div><dt>Launch with review points</dt><dd>Begin with observable work, inspect output at an agreed cadence, and update the procedure when reality changes.</dd></div></dl></div></div></section>

    <section className="about-section about-soft"><div className="about-shell about-boundaries"><div><p className="eyebrow">Operating boundaries</p><h2>Support extends execution. It does not transfer executive accountability.</h2></div><div><h3>Good work to delegate</h3><p>Repeatable coordination, records maintenance, approved communications, scheduling, research collection, routine reporting, and queue monitoring can become strong support lanes when examples and escalation rules exist.</p><h3>Work to retain</h3><p>Strategy, licensed advice, policy interpretation, clinical judgment, money movement, security administration, employment decisions, and final approval remain with authorized people in your organization.</p></div></div></section>

    <section className="about-section"><div className="about-shell about-team"><div><img src="/brand/stealth-agents-logo-black.png" width="149" height="50" alt="StealthAgents official logo" /><h2>The people behind managed delivery</h2><p>The official StealthAgents team in Bacolod provides operational context behind the staffing journey. The goal is not anonymous task fulfillment. It is a support relationship with named expectations and a route for questions.</p></div><figure><img src="/brand/stealth-agents-team-bacolod.png" width="600" height="197" alt="StealthAgents managed service team at the Bacolod office" /><figcaption>Official team, Bacolod</figcaption></figure></div></section>
    <div className="about-shell"><CTA /></div>
  </main><Footer /></>;
}
