import { AcrClient } from './acr-client';
import Script from 'next/script';
import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL('https://virtualassistantprovider.com'),
  title: { default: 'Virtual Assistant Provider | Compare VA hiring options', template: '%s | Virtual Assistant Provider' },
  description: 'Compare virtual assistant roles, providers, first tasks, onboarding steps, and questions to ask before you hire.',
  openGraph: { title: 'Virtual Assistant Provider', description: 'Guides for choosing a VA provider and planning the first handoff.', url: 'https://virtualassistantprovider.com', siteName: 'Virtual Assistant Provider', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}<AcrClient/><Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'virtual-assistant-provider',endpoint:'/ingest/track',debug:false,funnelSteps:[{path:'/contact-us',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/contact',step:1,label:'Form Page',event:'funnel_form_page'},{path:'/thank-you',step:2,label:'Form Submitted',event:'funnel_form_submitted'},{path:'/thanks-whats-next',step:3,label:'Booking Confirmed',event:'funnel_booking_confirmed'}]};`}</Script><Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive"/></body></html>;
}
