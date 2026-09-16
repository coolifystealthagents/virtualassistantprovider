import type { Metadata } from "next";
import { Footer, Header } from "../components";
import StandardContactForm from "./StandardContactForm";

export const metadata: Metadata = {
  title: "Contact a Virtual Assistant Provider",
  description: "Describe your workflows, hours, and support goals for a focused virtual assistant staffing consultation.",
  alternates: { canonical: "/contact-us" }, robots: { index: true, follow: true },
  openGraph: { title: "Contact Virtual Assistant Provider", description: "Plan a dedicated Philippines-based virtual assistant role around real workflows and clear ownership.", url: "/contact-us" },
};

const cards = [
  ["01", "Define the outcome", "Start with the weekly result your assistant should own, not a disconnected task list."],
  ["02", "Map the workflow", "List the tools, inputs, handoffs, and approvals that keep work moving safely."],
  ["03", "Choose coverage", "Share your time zone, overlap needs, response windows, and recurring schedule."],
  ["04", "Plan the handoff", "Bring examples and identify the decisions that must remain with your team."],
];

export default function ContactUsPage() { return <><Header/><main className="contact-page">
  <section className="contact-hero" id="top"><div className="contact-shell contact-hero-grid">
    <div className="contact-copy"><p className="contact-kicker">Dedicated virtual assistant staffing</p><h1>Find the right virtual assistant provider for the work behind your growth.</h1><p className="contact-lead">Tell us what your team needs covered, which systems are involved, and what success looks like. We’ll help turn that context into a practical dedicated-assistant brief.</p><ul className="contact-proof"><li>Role-first consultation</li><li>Philippines-based dedicated talent</li><li>Clear next steps without pressure</li></ul><div className="contact-actions"><a className="contact-btn" href="#contact-form">Start your request</a><a className="contact-btn ghost" href="/contact">Book a call</a></div><p className="contact-powered">Powered by <a href="https://stealthagents.com/">Stealth Agents</a></p></div>
    <StandardContactForm endpoint="/api/contact" encoding="form" />
  </div></section>
  <section className="contact-section contact-pale"><div className="contact-shell"><p className="contact-kicker dark">Prepare a useful conversation</p><h2>Four details that make provider matching clearer</h2><div className="contact-cards">{cards.map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>
  <section className="contact-section"><div className="contact-shell"><p className="contact-kicker dark">Trusted by teams that need dependable support</p><h2>Practical help, built around accountable handoffs</h2><div className="contact-testimonials"><blockquote><p>“The strongest start was getting our recurring work documented before we discussed candidates.”</p><footer>Operations leader · Professional services</footer></blockquote><blockquote><p>“We finally had one clear owner for follow-up, reporting, and the daily details that kept slipping.”</p><footer>Founder · Growing online business</footer></blockquote><blockquote><p>“The consultation helped us separate delegable work from decisions that needed to stay in-house.”</p><footer>Managing partner · Client services</footer></blockquote></div></div></section>
  <section className="contact-section contact-pale"><div className="contact-shell contact-two"><div><p className="contact-kicker dark">Capabilities to discuss</p><h2>Build a role around repeatable, measurable work</h2><p>Bring examples, current bottlenecks, and the quality standard your team expects.</p></div><ul className="contact-checks"><li>Inbox and calendar coordination</li><li>CRM updates and follow-up queues</li><li>Customer support routing</li><li>Research and organized source notes</li><li>Reporting and process documentation</li><li>Vendor and client coordination</li><li>Content operations support</li><li>Administrative project tracking</li></ul></div></section>
  <section className="contact-section contact-about"><div className="contact-shell contact-two"><figure><img src="/featured/hire-virtual-assistant-philippines-evidence-guide.png" width="1200" height="800" alt="Virtual assistant provider team planning a structured client workflow"/><figcaption>Dedicated support works best when scope, ownership, and review standards are clear.</figcaption></figure><div><p className="contact-kicker">Experienced staffing support</p><h2>About Stealth Agents</h2><p className="contact-trust">Stealth Agents works with over 35+ different industries. We're featured on Forbes as the top rated virtual assistant company.</p><p>Virtual Assistant Provider helps business owners compare support options and prepare a clear role. Qualified requests can be routed to the Stealth Agents staffing team for a focused consultation.</p><p>Bring your schedule, systems, work examples, and approval boundaries so the conversation starts with the details that matter.</p><a className="contact-link" href="https://stealthagents.com/">Learn about Stealth Agents →</a></div></div></section>
  <section className="contact-cta"><div className="contact-shell"><div><p className="contact-kicker">Ready to scope the role?</p><h2>Turn scattered support needs into a clear assistant brief.</h2></div><a className="contact-btn" href="#contact-form">Book My Free Consultation</a></div></section>
  <section className="contact-close"><div className="contact-shell"><p>Virtual assistant provider consultation</p><h2>Ready to give your team reliable support?</h2><p>Share the work today, or choose a conversation time when it suits you.</p><div className="contact-actions"><a className="contact-btn" href="#contact-form">Start your request</a><a className="contact-btn ghost" href="/contact">Book a call</a></div></div></section>
  </main><Footer/></>; }
