import { fleetServices } from '../fleet-content';
import { publishedBlogPosts, publishedResearchPosts } from '../publication-manifest';

const baseUrl = 'https://virtualassistantprovider.com';
const staticPaths = [
  '',
  '/about',
  '/services',
  '/pricing',
  '/blog',
  '/research',
  '/contact-us',
  '/privacy',
  '/terms',
  '/cancellation-policy',
];

const escapeXml = (value: string) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;');

export async function GET() {
  const servicePaths = fleetServices.map((service) => `/services/${service.slug}`);
  const editorialPaths = [
    ...publishedBlogPosts.map((post) => `/blog/${post.slug}`),
    ...publishedResearchPosts.map((post) => `/research/${post.slug}`),
  ];
  const paths = Array.from(new Set([...staticPaths, ...servicePaths, ...editorialPaths]));
  const urls = paths.map((path) => `<url><loc>${escapeXml(`${baseUrl}${path}`)}</loc></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
