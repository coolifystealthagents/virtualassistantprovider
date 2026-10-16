import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import { fleetServices } from '../fleet-content';

export const metadata: Metadata = {
  title: 'Virtual Assistant Services',
  description: 'Compare Philippines-based virtual assistant roles by tasks, access boundaries, launch checks, and ownership.',
  alternates: { canonical: '/services' },
};

const launchSteps = [
  ['Define the result', 'List the recurring output, source material, due time, and person who accepts the work.'],
  ['Set access boundaries', 'Give each assistant a named account and the smallest permission set needed for the first task.'],
  ['Run a paid sample', 'Test a representative task with safe data and the same review standard you will use after launch.'],
  ['Review the first month', 'Check quality, turnaround, questions, and exceptions before expanding the role.'],
];

const faqs = [
  ['Which service should I choose first?', 'Choose the lane with the clearest recurring queue and a named reviewer. Start with one outcome instead of combining unrelated work into a vague assistant role.'],
  ['Can one assistant cover several service areas?', 'Sometimes. Related work can fit one role when the tools, schedule, and review owner are compatible. Separate regulated, financial, clinical, security, and final approval duties.'],
  ['What should stay with our internal team?', 'Keep licensed advice, legal or compliance interpretation, financial authorization, employment decisions, security administration, strategy, and final executive approval with qualified or authorized personnel.'],
];

export default function ServicesPage() {
  return <><Header/><main className="fleet-main fleet-virtualassistantprovider services-index-page">
    <section className="fleet-hero services-index-hero"><div className="container service-hero-grid"><div><p className="eyebrow">Philippines-based support lanes</p><h1>Choose a virtual assistant service by the work it needs to own.</h1><p className="lead">Compare role-specific tasks, tools, access boundaries, and launch checks. Each guide helps you define a practical first scope before you interview or share a live account.</p><div className="actions"><a className="btn primary" href="#service-options">Compare service options</a><a className="btn secondary" href="/contact-us">Build a role brief</a></div></div><aside className="service-index-note"><h2>A useful service brief names four things</h2><ul><li>The recurring output</li><li>The source material and tools</li><li>The reviewer and approval boundary</li><li>The schedule and escalation path</li></ul></aside></div></section>

    <section className="section" id="service-options"><div className="container"><div className="service-section-heading"><h2>Explore every service guide</h2><p>Open a guide for concrete tasks, work samples, access limits, launch plans, and questions to ask a candidate or provider.</p></div><div className="fleet-card-grid three">{fleetServices.map((service)=><a className="fleet-card service-index-card" key={service.slug} href={`/services/${service.slug}`}><h3>{service.title}</h3><p>{service.summary}</p><strong>Review tasks and controls</strong></a>)}</div></div></section>

    <section className="section service-soft"><div className="container service-reading-grid"><div><h2>Match the role to one operating lane</h2><p className="service-long-copy">A strong assistant role has a stable queue, a clear finish line, and someone who can review the work. Calendar and inbox coordination may fit together because they share priorities and executive context. Bookkeeping preparation and payment approval should remain separate because the risk and authority are different.</p><p className="service-long-copy">Use the service guides to identify repeatable preparation, coordination, documentation, and follow-up work. Keep judgment, regulated decisions, account recovery, money movement, and final approvals with the qualified owner.</p></div><aside className="service-boundary"><h2>Before adding a task</h2><ul><li>Show one finished example.</li><li>Name the system of record.</li><li>Define what stops for review.</li><li>Record who can approve the result.</li></ul></aside></div></section>

    <section className="section"><div className="container"><div className="service-section-heading"><h2>Use a controlled launch instead of a broad handoff</h2><p>The sequence is intentionally small. Expand only after the first work is accurate, traceable, and easy to review.</p></div><ol className="service-launch-list">{launchSteps.map(([title, body])=><li key={title}><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></div></section>

    <section className="section service-ink"><div className="container service-two-column"><article><h2>Choose one assistant when</h2><ul><li>The work shares a schedule, tools, and reviewer.</li><li>The queue is predictable enough to prioritize.</li><li>The assistant can stop safely when information is missing.</li></ul></article><article><h2>Split the work when</h2><ul><li>One lane requires licensed or regulated judgment.</li><li>The same person would prepare and approve a money event.</li><li>Security, clinical, employment, or legal authority would become unclear.</li></ul></article></div></section>

    <section className="section"><div className="container service-faq"><h2>Questions about choosing a service</h2>{faqs.map(([question, answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>

    <section className="final-cta"><h2>Turn recurring work into a role you can evaluate.</h2><p>Share the tasks, tools, hours, and approval rules. The consultation will use those details to shape a Philippines-based staffing plan.</p><a className="btn primary" href="/contact-us">Request a staffing conversation</a></section>
  </main><Footer/></>;
}
