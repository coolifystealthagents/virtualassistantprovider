import type { CSSProperties, ReactNode } from 'react';
import * as data from './data';
import { fleetServices } from './fleet-content';

const site = (data as any).site || {};
const domain = site.domain || 'VirtualAssistantProvider.com';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function LogoMark() {
  return (
    <span className="logo-mark-wrap">
      <img className="logo-img" src="/logo.svg" alt="Virtual Assistant Provider woven V logo" width="48" height="48" />
      <span className="logo-text">
        <span className="logo-name">{site.brand || 'Virtual Assistant Provider'}</span>
        <span className="logo-sub">Powered by StealthAgents</span>
      </span>
    </span>
  );
}

export function Header() {
  return (
    <header className="va-header">
      <div className="va-nav-inner">
        <a className="va-brand" href="/" aria-label="Virtual Assistant Provider home"><LogoMark /></a>
        <nav className="va-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/contact-us">Contact Us</a>
        </nav>
        <a className="va-nav-cta" href="/contact-us">Plan a role <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="va-footer">
      <div className="va-container va-footer-inner">
        <div className="va-footer-top">
          <div className="va-footer-brand">
            <a className="va-brand" href="/" aria-label="Virtual Assistant Provider home"><LogoMark /></a>
            <p>
              Philippines-based virtual assistant staffing built around explicit ownership,
              access, review, and escalation paths.
            </p>
          </div>
          <div>
            <h3>Services</h3>
            <div className="va-footer-links">
              {fleetServices.slice(0, 7).map((service) => (
                <a href={`/services/${service.slug}`} key={service.slug}>{service.title}</a>
              ))}
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="va-footer-links">
              <a href="/services">All services</a>
              <a href="/about">About</a>
              <a href="/blog">Blog</a>
              <a href="/research">Research</a>
              <a href="/contact-us">Contact Us</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms &amp; Conditions</a>
              <a href="/cancellation-policy">Cancellation Policy</a>
            </div>
          </div>
        </div>

        <div className="va-footer-parent">
          <a className="va-parent-logo" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="StealthAgents parent company">
            <img src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" width="149" height="50" />
          </a>
          <div>
            <h3>Parent company</h3>
            <p>
              StealthAgents recruits, employs, and supports the Philippines-based professionals
              who deliver this work. Virtual Assistant Provider is a StealthAgents subsidiary.
            </p>
            <a className="va-parent-link" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents ↗</a>
          </div>
        </div>

        <div className="va-footer-bottom">
          <span>© {year} {site.brand || 'Virtual Assistant Provider'}. All rights reserved.</span>
          <span>{domain}</span>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  media,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  actions?: ReactNode;
  media?: ReactNode;
  crumbs?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="va-pagehero">
      <div className="va-pagehero-bg" aria-hidden="true" />
      <div className="va-container va-pagehero-grid">
        <div className="va-pagehero-copy">
          {crumbs ? <div className="va-crumbs">{crumbs}</div> : null}
          <p className="va-eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="va-hero-lead">{lead}</p>
          {actions ? <div className="va-actions">{actions}</div> : null}
          {children}
        </div>
        {media || null}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className={`va-head${light ? ' va-head--light' : ''}`} data-reveal>
      <div>
        <p className={`va-eyebrow${light ? ' va-eyebrow--light' : ''}`}>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

export function Ticker({ items }: { items: readonly string[] }) {
  return (
    <div className="va-ticker" aria-hidden="true">
      <div className="va-ticker-track">
        {[0, 1].map((group) => (
          <div className="va-ticker-group" key={group}>
            {items.map((item, index) => <span key={`${group}-${index}`}>{item}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CTA() {
  return (
    <section className="va-cta">
      <div className="va-cta-orb" aria-hidden="true" />
      <div className="va-container va-cta-inner">
        <div data-reveal>
          <p className="va-eyebrow va-eyebrow--light">A clearer first handoff</p>
          <h2>Define the work before you compare candidates.</h2>
          <p>Share the queue, tools, schedule, examples, and decision limits. We will turn them into a practical Philippines-based staffing plan.</p>
        </div>
        <div className="va-cta-actions" data-reveal style={{ '--va-delay': '100ms' } as CSSProperties}>
          <a className="va-btn va-btn--light" href="/contact-us">Request a role plan ↗</a>
          <a className="va-link va-link--light" href="/services">Browse all ten services</a>
        </div>
      </div>
    </section>
  );
}
