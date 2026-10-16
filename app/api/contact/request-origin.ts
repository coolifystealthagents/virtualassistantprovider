import type { NextRequest } from 'next/server';

const ALLOWED_HOSTS = new Set(['virtualassistantprovider.com', 'www.virtualassistantprovider.com']);

function firstForwarded(value: string | null) {
  return value?.split(',')[0]?.trim().toLowerCase() || '';
}

export function getTrustedRequestOrigin(request: NextRequest): string {
  const directHost = request.nextUrl.hostname.toLowerCase();
  const forwardedHost = firstForwarded(request.headers.get('x-forwarded-host')).split(':')[0];
  const forwardedProto = firstForwarded(request.headers.get('x-forwarded-proto'));
  const host = ALLOWED_HOSTS.has(forwardedHost) ? forwardedHost : directHost;
  const protocol = forwardedProto === 'https' || forwardedProto === 'http' ? forwardedProto : request.nextUrl.protocol.replace(':', '');

  if (ALLOWED_HOSTS.has(host)) return `https://${host}`;
  if (process.env.NODE_ENV !== 'production' && (host === 'localhost' || host === '127.0.0.1')) return `${protocol}://${request.nextUrl.host}`;
  return request.nextUrl.origin;
}
