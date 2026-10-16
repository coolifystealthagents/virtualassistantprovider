/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://static.cloudflareinsights.com; connect-src 'self' https://acrtracking.stealthagents.us https://cloudflareinsights.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; font-src 'self' data:; frame-src 'self' https://*.oncehub.com https://*.scheduleonce.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests" },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), geolocation=(), microphone=(), payment=(), usb=()' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
];

const nextConfig = {
  async rewrites(){return [{source:'/favicon.ico',destination:'/icon.svg'}]},
  async redirects(){return [
    {source:'/contact',destination:'/contact-us',permanent:true},
    {source:'/blog/virtual-assistant-hiring-guide-philippines',destination:'/research/hire-virtual-assistant-philippines-evidence-guide',permanent:true},
  ]},
  async headers(){return [{source:'/(.*)',headers:securityHeaders}]},
};
export default nextConfig;
