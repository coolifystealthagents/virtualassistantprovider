import type { ResearchPost } from './fleet-content';
import { august13ResearchPosts as priorPosts } from './article-research-aug13-2026';

// These are fresh publication identities. The literal date is bound on every
// exported record rather than inferred from a shared collection date.
const replacementSlugs = [
  'inbox-triage-virtual-assistant-philippines',
  'crm-duplicate-research-virtual-assistant-philippines',
  'knowledge-base-gap-research-virtual-assistant-philippines',
  'competitor-support-channel-research-virtual-assistant-philippines',
  'travel-itinerary-research-virtual-assistant-philippines',
  'vendor-compliance-research-virtual-assistant-philippines',
  'podcast-guest-research-virtual-assistant-philippines',
  'website-accessibility-research-virtual-assistant-philippines',
  'grant-opportunity-research-virtual-assistant-philippines',
  'contract-obligation-index-research-virtual-assistant-philippines',
] as const;

const replacementTitles = [
  'Inbox triage in a Philippines-based support role: evidence, boundaries, and review',
  'CRM duplicate research: an evidence-led support role for Philippines-based teams',
  'Knowledge-base gap research: measuring what support documentation does not answer',
  'Competitor support-channel research: what public evidence can reveal',
  'Travel-itinerary research: a bounded Philippines-based support role',
  'Vendor compliance research: organize evidence without certifying a supplier',
  'Podcast-guest research: source boundaries for a Philippines-based support role',
  'Website accessibility research: evidence for a bounded support role',
  'Grant-opportunity research: separate eligibility evidence from hopeful fit',
  'Contract-obligation indexing: an administrative research boundary',
] as const;

export const august13ReplacementResearchPosts: readonly ResearchPost[] = priorPosts.map((post, index) => ({
  ...post,
  slug: replacementSlugs[index],
  title: replacementTitles[index],
  metaTitle: replacementTitles[index],
  published: '2026-08-13',
  updated: '2026-08-13',
  revision: `2026-08-13-${replacementSlugs[index]}-v1`,
}));
