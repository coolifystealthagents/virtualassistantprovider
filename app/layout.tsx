import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import './v3-shell.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL('https://virtualassistantprovider.com'),
  applicationName: 'Virtual Assistant Provider',
  title: { default: 'Virtual Assistant Provider | Compare VA hiring options', template: '%s | Virtual Assistant Provider' },
  description: 'Plan a clear virtual assistant role, compare support options, and define the ownership and review boundaries needed for a reliable handoff.',
  openGraph: { title: 'Virtual Assistant Provider', description: 'Guides for choosing a VA provider and planning the first handoff.', url: 'https://virtualassistantprovider.com', siteName: 'Virtual Assistant Provider', type: 'website', images: [{ url: '/brand/virtual-assistant-provider-og.png', width: 1200, height: 630, alt: 'Virtual Assistant Provider, Philippines staffing built around real work' }] },
  twitter: { card: 'summary_large_image', title: 'Virtual Assistant Provider', description: 'Guides for choosing a VA provider and planning the first handoff.', images: ['/brand/virtual-assistant-provider-og.png'] },
  icons: { icon: [{ url: '/icon.svg', type: 'image/svg+xml' }], shortcut: '/icon.svg', apple: [{ url: '/brand/virtual-assistant-provider-apple-touch-icon.png', sizes: '180x180', type: 'image/png' }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'virtual-assistant-provider',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Next Steps Viewed',event:'funnel_booking_next_steps_view'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>;
}
