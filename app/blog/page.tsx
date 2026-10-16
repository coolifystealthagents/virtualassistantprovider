import { BlogListing } from './blog-listing';
export const metadata = {
  title: { absolute: 'Philippines staffing guides | Virtual Assistant Provider' },
  description: 'Seven reviewed role guides for scoping Philippines-based assistant work, testing candidates, controlling access, and reviewing the first month.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Philippines staffing guides', description: 'Reviewed role guides for safer scope, work samples, access, and launch decisions.', url: '/blog', images: ['/featured/executive-assistant-philippines-hiring-guide.png'] },
};
export default function Blog() { return <BlogListing />; }
