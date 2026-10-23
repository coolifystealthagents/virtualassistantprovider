export type EditorialSection = {
  id: string;
  heading: string;
  paragraphs: readonly string[];
  subheadings?: readonly { id: string; heading: string; body: string }[];
};

export type Publication = {
  publicationStatus: 'reviewed';
  kind: 'blog' | 'research';
  slug: string;
  title: string;
  description: string;
  published: string;
  updated?: string;
  readingMinutes: number;
  heroImage: string;
  heroAlt: string;
  topic: string;
  relatedService: { href: string; label: string };
  relatedResource: { href: string; label: string };
  sources: readonly { label: string; href: string }[];
  sections: readonly EditorialSection[];
};

const roleSections = (role: string, work: string, ownerDecisions: string): readonly EditorialSection[] => [
  {
    id: 'scope-the-role',
    heading: `Scope the ${role} role before recruiting`,
    paragraphs: [
      `Start with the recurring ${work}. Name the input, expected output, due time, approved tool, and reviewer for each task. A narrow scope makes the work sample more useful and gives a Philippines-based assistant a clear finish line.`,
      `Keep ${ownerDecisions} with a named owner. Write those boundaries into the role brief so an assistant knows when to stop and who can make the decision.`,
    ],
    subheadings: [{ id: 'definition-of-done', heading: 'Write a definition of done', body: 'Attach one strong example, one common mistake, and the evidence a reviewer should inspect. State what must be true before the task can be marked complete.' }],
  },
  {
    id: 'test-real-work',
    heading: 'Test representative work with safe records',
    paragraphs: [
      `Build a paid sample from realistic ${work}, but replace customer, employee, patient, financial, or account data with invented records. Score the same output for every candidate.`,
      'Assess accuracy, source use, communication, and escalation judgment. A candidate who identifies an unclear instruction can be safer than one who completes the sample quickly by guessing.',
    ],
    subheadings: [{ id: 'score-the-sample', heading: 'Use one review scorecard', body: 'Record accuracy, completeness, tone, tool handling, questions asked, and whether every exception reached the correct owner.' }],
  },
  {
    id: 'control-access',
    heading: 'Open access in measured steps',
    paragraphs: [
      'Use a named account, multi-factor authentication, and the smallest permission set needed for the first task. Keep administrative, billing, export, and recovery rights with a limited owner group.',
      'Move from a safe sample to reviewed drafts, then low-risk live work. Add access only after the earlier stage is accurate and remove access when a task or relationship ends.',
    ],
  },
  {
    id: 'review-first-month',
    heading: 'Review the first month without losing context',
    paragraphs: [
      'Review every early output against its source and save corrections beside the instructions. Group repeated errors by cause so the manager can repair the source, example, access, or training rather than only fixing the latest record.',
      'After the first lane is stable, sample work on a documented cadence. Add one related duty at a time and keep attendance, coaching, backup, and replacement questions with the staffing manager.',
    ],
    subheadings: [{ id: 'weekly-review', heading: 'Run a useful weekly review', body: 'Discuss completed work, exceptions, corrections, access changes, and one improvement to the written process. Keep the meeting tied to evidence from the actual queue.' }],
  },
  {
    id: 'provider-questions',
    heading: 'Ask providers for role-specific proof',
    paragraphs: [
      `Ask how candidates are tested on ${work}, who reviews the first live outputs, and what happens when quality or attendance slips. Request current terms for management, backup, replacement, access, and offboarding.`,
      'Compare every provider against the same role brief and sample. A public claim or directory position does not replace direct verification of current services, contracts, staffing location, and support ownership.',
    ],
  },
];

import { oct22BlogPosts, oct22ResearchPosts } from './oct22-publications';

export const publishedBlogPosts: readonly Publication[] = [
  ...oct22BlogPosts,
  {
    publicationStatus: 'reviewed', kind: 'blog', slug: 'executive-assistant-philippines-hiring-guide',
    title: 'Executive assistant Philippines: a safe hiring guide',
    description: 'Build an executive support role around calendar, inbox, travel, and follow-through with explicit privacy and decision boundaries.',
    published: '2026-07-25', updated: '2026-10-16', readingMinutes: 12,
    heroImage: '/featured/executive-assistant-philippines-hiring-guide.png', heroAlt: 'Executive assistant preparing calendar and meeting priorities', topic: 'Executive support',
    relatedService: { href: '/services/executive-assistant-staffing', label: 'Executive assistant staffing' }, relatedResource: { href: '/research/hire-virtual-assistant-philippines-evidence-guide', label: 'Philippines hiring evidence guide' },
    sources: [{ label: 'NIST access control guidance', href: 'https://csrc.nist.gov/projects/access-control' }, { label: 'CISA account security guidance', href: 'https://www.cisa.gov/secure-our-world/use-strong-passwords' }],
    sections: roleSections('executive assistant', 'calendar coordination, inbox triage, travel research, and meeting follow-through', 'commitments, spending, private correspondence, legal matters, and sensitive personnel choices'),
  }
];

const researchSections = (question: string, limits: string): readonly EditorialSection[] => [
  { id: 'research-question', heading: 'Define the decision before collecting evidence', paragraphs: [`This report asks ${question}. The review favors official statistics, laws, standards bodies, and clearly identified first-party material.`, 'Country and sector evidence can frame a buyer question, but it cannot prove the skill, reliability, setup, or outcome of one candidate or provider.'], subheadings: [{ id: 'evidence-boundary', heading: 'Keep the evidence boundary visible', body: limits }] },
  { id: 'buyer-use', heading: 'Turn broad evidence into candidate checks', paragraphs: ['Translate each useful signal into a direct request for proof. Use a role-specific paid sample, current references where appropriate, a schedule and recovery test, and written supervision and replacement terms.', 'Apply the same brief and scorecard to every candidate or provider. Record what was observed, what remains self-reported, and who owns the next decision.'] },
  { id: 'access-and-controls', heading: 'Match access to the first verified task', paragraphs: ['Use named accounts, strong authentication, minimum permissions, and a clear offboarding owner. Sensitive or regulated work needs review by the organization responsible for the data and applicable duties.', 'Do not treat a national internet, education, employment, or industry measure as evidence that an individual setup is secure or resilient. Test the actual device, connection, backup, and recovery path needed by the role.'] },
  { id: 'methodology', heading: 'Method and limitations', paragraphs: ['Sources are selected for direct relevance and publisher authority. Values, definitions, coverage periods, and update dates should be checked on the linked source before a buyer relies on them.', limits] },
  { id: 'decision-checklist', heading: 'Use a final decision checklist', paragraphs: ['Confirm the task scope, work sample, reviewer, schedule, access plan, management model, complete price, replacement terms, and offboarding steps in writing.', 'A defensible decision combines source context with individual proof. Where legal, tax, privacy, employment, or professional duties matter, obtain advice for the actual relationship and jurisdiction.'] },
];

export const publishedResearchPosts: readonly Publication[] = [
  ...oct22ResearchPosts,
  {
    publicationStatus: 'reviewed', kind: 'research', slug: 'hire-virtual-assistant-philippines-evidence-guide', title: 'Hire virtual assistant Philippines: an evidence guide for 2026', description: 'Use country data, a paid work sample, and clear access rules to plan a Philippines-based virtual assistant hire without turning national signals into candidate claims.', published: '2026-07-22', updated: '2026-10-16', readingMinutes: 13,
    heroImage: '/featured/hire-virtual-assistant-philippines-evidence-guide.png', heroAlt: 'Evidence checklist for hiring a Philippines-based virtual assistant', topic: 'Hiring evidence', relatedService: { href: '/services', label: 'Explore staffing services' }, relatedResource: { href: '/blog/executive-assistant-philippines-hiring-guide', label: 'Executive assistant hiring guide' },
    sources: [{ label: 'IT and Business Process Association of the Philippines', href: 'https://ibpap.org/' }, { label: 'World Bank Philippines data', href: 'https://data.worldbank.org/country/philippines' }, { label: 'NIST access control project', href: 'https://csrc.nist.gov/projects/access-control' }], sections: researchSections('which evidence helps a buyer plan a Philippines-based hire', 'National figures describe a labor and infrastructure setting. They do not measure one applicant, home office, provider, or business outcome.'),
  }
];

export const publishedEditorialPosts = [...publishedBlogPosts, ...publishedResearchPosts] as const;
export const retainedArticleCount = publishedEditorialPosts.length;
export const originalGeneratedArticleCount = 669;
export const retiredArticleCount = originalGeneratedArticleCount - publishedEditorialPosts.length;
export const retiredBlogCount = originalGeneratedArticleCount - 1;
export const retiredResearchCount = originalGeneratedArticleCount - 1;

export function getPublishedPost(kind: Publication['kind'], slug: string) {
  return (kind === 'blog' ? publishedBlogPosts : publishedResearchPosts).find((post) => post.slug === slug);
}
