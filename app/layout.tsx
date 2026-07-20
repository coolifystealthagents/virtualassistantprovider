import './globals.css';
import type { Metadata } from 'next';
import { site } from './data';

export const metadata: Metadata = {
  metadataBase: new URL('https://virtualassistantprovider.com'),
  title: { default: 'Virtual Assistant Provider | Simple virtual assistant hiring guides', template: '%s | Virtual Assistant Provider' },
  description: 'Simple, practical guides for hiring, onboarding, managing, and scaling virtual assistant provider support.',
  openGraph: { title: 'Virtual Assistant Provider', description: 'Practical virtual assistant hiring guides for busy teams.', url: 'https://virtualassistantprovider.com', siteName: 'Virtual Assistant Provider', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
