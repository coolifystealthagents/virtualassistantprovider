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
  return <html lang="en"><body>{children}</body></html>;
}
