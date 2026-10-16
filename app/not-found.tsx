import type { Metadata } from 'next';
import { Header, Footer } from './components';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The requested page could not be found. Continue to Virtual Assistant Provider services or contact the team.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <><Header/><main className="not-found-page"><div className="container not-found-card"><p className="eyebrow">Page not found</p><h1>That page is not available.</h1><p>The link may be outdated or the address may have been entered incorrectly. You can compare support roles or tell us what work you need covered.</p><div className="actions"><a className="btn primary" href="/services">Explore services</a><a className="btn secondary" href="/contact-us">Contact Us</a></div></div></main><Footer/></>;
}
