import { permanentRedirect } from 'next/navigation';

export function generateStaticParams() { return []; }
export async function generateMetadata() { return { title: { absolute: 'Guides | Virtual Assistant Provider' }, robots: { index: false, follow: true } }; }
export default function NumberedBlogPage() { permanentRedirect('/blog'); }
