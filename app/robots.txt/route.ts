export function GET() { return new Response(`User-agent: *
Allow: /
Sitemap: https://virtualassistantprovider.com/sitemap.xml
`, { headers: { 'content-type': 'text/plain' } }); }