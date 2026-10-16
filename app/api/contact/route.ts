import { NextRequest, NextResponse } from 'next/server';
import { sendLeadFallbackToMattermost } from '../../lib/lead-fallback-mattermost';
import { getTrustedRequestOrigin } from './request-origin';

const MAX_BODY_BYTES = 64_000;
const MAX_FIELD_LENGTH = 4_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PERSONAL_DOMAINS = new Set(['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'aol.com', 'proton.me', 'protonmail.com']);
const WINDOW_MS = 15 * 60_000;
const attempts = new Map<string, number[]>();
const PRODUCTION_ORIGINS = new Set(['https://virtualassistantprovider.com', 'https://www.virtualassistantprovider.com']);

function text(form: FormData, key: string, max = MAX_FIELD_LENGTH) {
  const value = form.get(key);
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function errorPage(status: number) {
  return new Response('<!doctype html><html lang="en"><meta charset="utf-8"><title>Submission problem</title><main><h1>We could not send your request.</h1><p>Please go back and try again.</p><a href="/contact-us">Return to the contact form</a></main>', { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
}

function ip(request: NextRequest) {
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
}

function limited(key: string, max: number) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  if (attempts.size > 5_000) for (const [storedKey, values] of attempts) if (!values.some((time) => now - time < WINDOW_MS)) attempts.delete(storedKey);
  return recent.length > max;
}

function sameOrigin(request: NextRequest, origin: string | null) {
  if (!origin) return true;
  try {
    const supplied = new URL(origin).origin;
    return PRODUCTION_ORIGINS.has(supplied) || supplied === getTrustedRequestOrigin(request);
  } catch {
    return false;
  }
}

async function readBoundedBody(request: NextRequest) {
  if (!request.body) return new Uint8Array();
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error('body-too-large');
    }
    chunks.push(value);
  }
  const body = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return body;
}

async function parseForm(body: Uint8Array, contentType: string) {
  const copy = body.buffer.slice(body.byteOffset, body.byteOffset + body.byteLength) as ArrayBuffer;
  const clone = new Request('http://contact.local', { method: 'POST', headers: { 'content-type': contentType }, body: copy });
  return clone.formData();
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') || '';
  const declaredLength = Number(request.headers.get('content-length') || 0);
  const acceptedType = contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data');
  if (!sameOrigin(request, request.headers.get('origin')) || !Number.isFinite(declaredLength) || declaredLength > MAX_BODY_BYTES || !acceptedType) return errorPage(400);
  if (limited(`ip:${ip(request)}`, 10)) return errorPage(429);

  let form: FormData;
  try {
    form = await parseForm(await readBoundedBody(request), contentType);
  } catch {
    return errorPage(400);
  }
  if (text(form, 'websiteConfirm') || text(form, 'website_confirm') || text(form, 'website_url') || text(form, 'company_homepage')) return errorPage(400);

  const first = text(form, 'firstName', 100);
  const last = text(form, 'lastName', 100);
  const name = `${first} ${last}`.trim() || text(form, 'name', 200);
  const email = text(form, 'email', 320).toLowerCase();
  if (!name || !email || !EMAIL_RE.test(email) || PERSONAL_DOMAINS.has(email.split('@')[1] || '')) return errorPage(422);
  if (limited(`email:${email}`, 3)) return errorPage(429);

  const pageUrl = request.headers.get('referer') || new URL('/contact-us', getTrustedRequestOrigin(request)).toString();
  const phone = text(form, 'phone', 100) || [text(form,'countryCode', 12), text(form, 'phoneLocal', 100)].filter(Boolean).join(' ');
  const business = text(form, 'companyName', 300) || text(form, 'company', 300);
  const companySize = text(form, 'companySize', 100);
  const positions = text(form, 'positions') || text(form, 'role');
  const referral = text(form, 'referral', 300) || text(form, 'referral_source', 300) || text(form, 'howTheyHeard', 300) || text(form, 'source', 300);
  const message = [text(form, 'message'), text(form, 'needs'), text(form, 'details'), positions, text(form, 'tier'), companySize, text(form, 'website'), text(form, 'privacy') ? 'Privacy consent: accepted' : ''].filter(Boolean).join('\n');
  const payload = { full_name: name, email, phone, company_name: business, message, how_they_heard: referral || 'Website contact form', client_event_id: crypto.randomUUID(), attribution: { source_page: pageUrl, landing_page: pageUrl, referrer: request.headers.get('referer') || '', page_journey: ['Contact form'] } };
  const token = process.env.LEAD_AUTH_TOKEN;
  const endpoint = process.env.LEAD_INGEST_URL || 'https://leads.stealthagents.com/api/leads';
  if (!token) return errorPage(503);
  try {
    const upstream = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json', 'x-lead-token': token }, body: JSON.stringify(payload), cache: 'no-store', signal: AbortSignal.timeout(12_000) });
    const result = await upstream.json().catch(() => null) as { ok?: boolean } | null;
    if (!upstream.ok || result?.ok !== true) return errorPage(502);
  } catch {
    return errorPage(502);
  }
  void sendLeadFallbackToMattermost({ name, email, phone, business, message, companySize, positions, referral, pageUrl, userAgent: request.headers.get('user-agent') || '' });
  return NextResponse.redirect(new URL('/thank-you?lead=accepted', getTrustedRequestOrigin(request)), 303);
}
