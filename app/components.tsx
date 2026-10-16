import * as data from './data';
import { MobileNavigation } from './mobile-navigation';

const site = (data as any).site || {};
const domain = site.domain || 'VirtualAssistantProvider.com';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="Virtual Assistant Provider woven V logo" width="48" height="48" /><span className="logo-name">{site.brand || 'Virtual Assistant Provider'}</span></span>;
}

function ParentAttribution({ footer = false }: { footer?: boolean }) {
  return <a className={`parent-attribution${footer ? ' parent-attribution-footer' : ''}`} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer" aria-label="Powered by StealthAgents, visit StealthAgents">
    <span>Powered by StealthAgents</span>
    <img src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" width="149" height="50" />
  </a>;
}

export function Header() {
  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header className="nav fleet-nav sticky-site-header">
      <div className="nav-inner">
        <a className="logo" href="/" aria-label="Virtual Assistant Provider home"><LogoMark /></a>
        <nav className="links fleet-links" aria-label="Main navigation"><a href="/">Home</a><a href="/services">Services</a><a href="/contact-us">Contact Us</a></nav>
        <ParentAttribution />
        <MobileNavigation />
      </div>
    </header>
    <span id="main-content" className="main-content-anchor" tabIndex={-1} />
  </>;
}

export function Footer() {
  return <footer className="footer legit-footer">
    <div className="footer-grid">
      <div className="footer-brand"><a className="footer-logo" href="/" aria-label="Virtual Assistant Provider home"><LogoMark /></a><p>{site.brand || 'Virtual Assistant Provider'} helps businesses scope Philippines-based support with explicit ownership, access, review, and escalation paths.</p><ParentAttribution footer /></div>
      <div><h2>Explore</h2><div className="footer-links"><a href="/services">Services</a><a href="/pricing">Pricing</a><a href="/blog">Blog</a><a href="/research">Research</a></div></div>
      <div><h2>Company</h2><div className="footer-links"><a href="/about">About</a><a href="/contact-us">Contact Us</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Conditions</a><a href="/cancellation-policy">Cancellation Policy</a></div></div>
    </div>
    <div className="footer-bottom"><span>© {year} {site.brand || 'Virtual Assistant Provider'}. All rights reserved.</span><span>{domain}</span></div>
  </footer>;
}

export function CTA() {
  return <section className="final-cta"><p className="eyebrow">Plan the handoff</p><h2>Build a clearer work lane.</h2><p>Share the role, tools, schedule, and approval needs. We will use those details to shape a practical Philippines staffing request.</p><a className="btn primary" href="/contact-us">Contact Us</a></section>;
}
