import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";
import { site } from "../data";
import { fleetServices } from "../fleet-content";
import StandardContactForm from "./StandardContactForm";

const canonical = "https://virtualassistantprovider.com/contact-us";
const bookingUrl = "https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1";

export const metadata: Metadata = {
  title: "Contact Virtual Assistant Provider | Free Consultation",
  description: "Book a consultation to scope a dedicated virtual assistant role around your workflows, tools, schedule, approval boundaries, and service standards.",
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: { title: "Contact Virtual Assistant Provider | Free Consultation", description: "Turn recurring work into a clear, accountable virtual assistant role.", url: canonical, type: "website", images: ["/featured/virtual-assistant-client-onboarding-philippines.png"] },
};

const expectations = ["A focused discovery call about your team, workload, and operating context", "Role recommendations shaped around volume, coverage, tools, and review", "A written scope for ownership, access, approvals, and escalation", "No commitment required - start with a practical conversation"];
const process = [
  ["01", "Workflow discovery", "We map recurring work, volume, systems, handoffs, review steps, time-zone coverage, and escalation paths."],
  ["02", "Role design", "Tasks, permissions, service standards, decision boundaries, and reporting become a clear written scope."],
  ["03", "Candidate matching", "You meet assistants selected for role fit, communication style, systems familiarity, schedule, and operating context."],
  ["04", "Controlled launch", "Your chosen assistant begins with approved access, documented procedures, supervised handoffs, and review checkpoints."],
];
const preparation = [
  ["Recurring work", "Which inbox, scheduling, CRM, customer support, research, reporting, or coordination tasks recur each day or week?"],
  ["Current ownership", "Who performs and reviews the work today, and where do delays, missed follow-ups, or unclear handoffs appear?"],
  ["Systems and access", "Which tools, accounts, documents, and communication channels are involved, and what access is appropriate?"],
  ["Service standard", "What response times, quality checks, reporting, approval steps, and escalation rules should define success?"],
];
const faqs = [
  { q: "What can a virtual assistant handle?", a: "A properly scoped assistant can support inbox and calendar workflows, CRM hygiene, customer-service routing, research, reporting, documentation, follow-up queues, and administrative coordination. The exact scope depends on your systems, permissions, and review requirements." },
  { q: "How do you match an assistant to our business?", a: "The consultation covers the work, schedule, communication style, tools, experience, access level, and service standard you need. Those details guide candidate selection and the launch plan." },
  { q: "Can an assistant work in our existing tools?", a: "Yes, when you approve the system, permission level, procedure, and oversight. Access should be role-based, limited to what the work requires, and reviewed as responsibilities change." },
  { q: "What work should remain with our team?", a: "Licensed or regulated services, legal and compliance interpretation, financial authorization, hiring or termination decisions, security administration, strategy, and final executive approvals remain with qualified or authorized personnel." },
  { q: "What should we bring to the consultation?", a: "Bring examples of recurring work, current ownership, weekly volume, coverage hours, tools, desired outcomes, and approval rules. Do not share passwords or sensitive client records on the initial call." },
];

export default function ContactUsPage() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: site.url }, { "@type": "ListItem", position: 2, name: "Contact Us", item: canonical }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];
  return <><Header /><main className="contact-page">
    {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
    <section className="contact-hero contact-visual-hero" aria-labelledby="contact-title"><img className="contact-hero-image" src="/featured/virtual-assistant-client-onboarding-philippines.png" alt="Virtual assistant and manager reviewing a structured onboarding workflow" width="1200" height="800" /><div className="contact-hero-shade" /><div className="contact-shell contact-hero-content"><p className="contact-kicker">Contact Us</p><h1 id="contact-title">Get In Touch</h1><p className="contact-lead">Build dependable remote support around the work your team repeats, while keeping licensed, regulated, financial, security, and executive decisions with the right people.</p></div></section>
    <section className="contact-section contact-pale" aria-labelledby="consultation-title"><div className="contact-shell contact-consultation"><div><p className="contact-kicker dark">Staffing consultation</p><h2 id="consultation-title">Book a Staffing Consultation</h2><p className="contact-section-lead">Tell us where workload is affecting responsiveness or capacity. We will help turn the work into a clearly bounded role that fits your team, systems, and oversight.</p><h3>What to Expect</h3><ul className="contact-expectations">{expectations.map((item) => <li key={item}>{item}</li>)}</ul><p className="contact-email">Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a></p></div><StandardContactForm endpoint="/api/contact" encoding="form" /></div></section>
    <section className="contact-section" aria-labelledby="credibility-title"><div className="contact-shell contact-two"><figure><img src="/featured/hire-virtual-assistant-philippines-evidence-guide.png" width="1200" height="800" alt="Remote support team planning accountable virtual assistant workflows" /></figure><div><p className="contact-kicker dark">Powered by Stealth Agents</p><h2 id="credibility-title">Virtual assistant staffing expertise. Stealth Agents support.</h2><p className="contact-section-lead">Stealth Agents recruits and matches virtual assistants around the role, communication style, schedule, systems, and boundaries you define. The consultation turns recurring work into a support plan you can review before moving forward.</p><p className="contact-subsidiary">Virtual Assistant Provider is a subsidiary of Stealth Agents.</p><a className="contact-btn" href="#contact-form">Book your consultation</a></div></div></section>
    <section className="contact-calendar" aria-labelledby="calendar-title"><div className="contact-shell contact-narrow"><h2 id="calendar-title">Or Skip the Wait: Book a Call Now</h2><p>Choose a time to discuss your workflows, support boundaries, desired coverage, tools, and candidate fit.</p><div className="contact-calendar-frame"><iframe src={bookingUrl} id="SOI_StealthAgentsTeam" name="ScheduleOnceIframe" title="Book a virtual assistant staffing consultation" scrolling="yes" frameBorder="0" height="850" width="100%" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div></div></section>
    <section className="contact-section contact-pale" aria-labelledby="process-title"><div className="contact-shell"><p className="contact-kicker dark">A controlled path to delegation</p><h2 id="process-title">After you reach out</h2><div className="contact-cards">{process.map(([step, title, body]) => <article key={title}><span>{step}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="contact-section" aria-labelledby="prepare-title"><div className="contact-shell"><h2 id="prepare-title">Prepare for a useful call</h2><p className="contact-section-lead">A few operational details help us shape a concrete recommendation without exposing sensitive business or client information.</p><div className="contact-prepare">{preparation.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="contact-boundaries" aria-labelledby="boundaries-title"><div className="contact-shell contact-narrow"><p className="contact-kicker">Responsibility and boundaries</p><h2 id="boundaries-title">Delegate repeatable support while accountable decisions stay in-house</h2><div className="contact-boundary-grid"><article><h3>Delegated support</h3><p>Assistants may coordinate approved inbox, calendar, CRM, customer support, research, reporting, documentation, follow-up, and administrative workflows using your procedures.</p></article><article><h3>Retained by qualified personnel</h3><p>Licensed or regulated services, legal or compliance interpretation, financial authorization, clinical decisions, security administration, employment decisions, strategy, and final executive approvals remain with qualified or authorized personnel.</p></article></div></div></section>
    <section className="contact-section contact-pale" aria-labelledby="services-title"><div className="contact-shell"><h2 id="services-title">Common starting points</h2><p className="contact-section-lead">Explore practical workflows that can become part of a carefully scoped virtual assistant role.</p><div className="contact-services">{fleetServices.slice(0, 6).map((service) => <Link key={service.slug} href={`/services/${service.slug}`}>{service.title}<span>→</span></Link>)}</div><Link className="contact-all-services" href="/services">View the full services collection →</Link></div></section>
    <section className="contact-section" aria-labelledby="faq-title"><div className="contact-shell contact-narrow"><h2 id="faq-title">Frequently asked questions</h2><div className="contact-faqs">{faqs.map(({ q, a }) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
  </main><Footer /></>;
}
