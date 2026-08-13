import { august12ReplacementBlogPosts } from './article-blog-replacements-2026-08-12';
import { august13BlogPosts } from './article-blog-aug13-2026';

export const site = {
  domain: 'VirtualAssistantProvider.com',
  slug: 'virtualassistantprovider',
  brand: 'Virtual Assistant Provider',
  primary: 'virtual assistant provider',
  audience: 'business owners comparing managed virtual assistant providers',
  angle: 'help choosing a VA provider, setting the role, and getting the first tasks live',
  color: '#2563eb',
  accent: '#0f766e',
  url: 'https://virtualassistantprovider.com',
  email: 'hello@virtualassistantprovider.com',
} as const;

export type Service = {
  slug: string;
  name: string;
  h1: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  bestFor: string[];
  tasks: string[];
  watchouts: string[];
  firstWeek: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: 'executive-assistant',
    name: 'Executive assistant',
    h1: 'Executive assistant provider guide',
    excerpt: 'Hand off calendar, inbox, travel, and follow-up work while the owner keeps sensitive decisions.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Executive assistant planning calendar and inbox work on a laptop',
    bestFor: ['founders with busy inboxes', 'sales leaders with follow-up gaps', 'owners who need schedule help'],
    tasks: ['sort email by owner rules', 'book meetings and send reminders', 'prepare simple daily brief notes', 'track open promises after calls', 'build clean contact lists'],
    watchouts: ['do not share full inbox access on day one', 'keep money, legal, and hiring choices with the owner', 'record sample replies before asking for independent writing'],
    firstWeek: ['Day 1: share calendar rules and sample email labels', 'Day 2: review 20 old messages together', 'Day 3: let the assistant draft replies for approval', 'Day 4: add meeting notes and follow-up tracking', 'Day 5: score speed, accuracy, tone, and questions asked'],
    faq: [
      { question: 'Can an executive assistant manage my whole inbox?', answer: 'Usually not on the first week. Start with labels, drafts, meeting booking, and clear escalation rules before full inbox ownership.' },
      { question: 'What should stay with the owner?', answer: 'Final decisions on money, legal risk, hiring, firing, and sensitive client issues should stay with the owner or manager.' },
    ],
  },
  {
    slug: 'customer-support-assistant',
    name: 'Customer support assistant',
    h1: 'Customer support assistant provider guide',
    excerpt: 'Handle tickets, chat, and order questions while a manager approves refunds and unusual requests.',
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Customer support assistant answering messages from a desk setup',
    bestFor: ['ecommerce stores', 'SaaS support queues', 'local service teams with repeat questions'],
    tasks: ['answer common ticket types from saved replies', 'tag urgent customer issues', 'update order or appointment notes', 'send refund requests to a manager', 'summarize weekly support themes'],
    watchouts: ['do not let a new assistant decide refunds without rules', 'separate billing access from reply access', 'use sample replies for tone before live responses'],
    firstWeek: ['Day 1: give the top 25 questions and approved answers', 'Day 2: shadow live tickets', 'Day 3: draft replies for review', 'Day 4: answer low-risk tickets with QA', 'Day 5: review handle time, accuracy, and escalations'],
    faq: [
      { question: 'Can a VA handle refunds?', answer: 'They can prepare or route refund requests. Final refund choices should follow written rules and manager approval.' },
      { question: 'How do we protect customer data?', answer: 'Use named accounts, limited permissions, two-factor login, and a rule that customer data never leaves approved tools.' },
    ],
  },
  {
    slug: 'crm-lead-follow-up',
    name: 'CRM and lead follow-up assistant',
    h1: 'CRM and lead follow-up assistant provider guide',
    excerpt: 'Keep leads from going stale with simple CRM cleanup, reminder tasks, appointment setting, and owner-approved scripts.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'CRM follow-up assistant reviewing lead notes with a small business team',
    bestFor: ['agencies with missed follow-ups', 'real estate teams', 'home service companies', 'coaches and consultants'],
    tasks: ['clean duplicate contacts', 'send first follow-up from a script', 'book qualified calls', 'update lead stage and next task', 'flag hot replies for the owner'],
    watchouts: ['do not promise sales results from admin follow-up alone', 'keep staffing details and negotiation choices with sales owners', 'review message tone before sending at scale'],
    firstWeek: ['Day 1: define lead stages and no-send rules', 'Day 2: clean a small lead batch', 'Day 3: draft follow-up messages', 'Day 4: send approved reminders', 'Day 5: review replies, booked calls, and wrong-fit leads'],
    faq: [
      { question: 'Is this lead generation?', answer: 'This role is best for follow-up and CRM admin. Cold outreach and sales strategy need separate management.' },
      { question: 'What scripts should we give the assistant?', answer: 'Give one short first follow-up, one reminder, one break-up email, and one handoff note for hot replies.' },
    ],
  },
];

// Daily production batch: 20 distinct, source-led buyer guides published on 2026-08-07.
// These records intentionally use the shared editorial renderer so metadata, citations,
// internal links, FAQ schema, and the staffing CTA stay consistent across the batch.
const dailyBlogBatchTopics = [
  ['virtual-assistant-daily-routine-philippines', 'Virtual assistant daily routines Philippines: a practical operating guide', 'daily routines'],
  ['virtual-assistant-onboarding-checklist-philippines', 'Virtual assistant onboarding checklist Philippines: a safe first week', 'onboarding'],
  ['virtual-assistant-quality-assurance-philippines', 'Virtual assistant quality assurance Philippines: a repeatable review plan', 'quality assurance'],
  ['virtual-assistant-access-control-philippines', 'Virtual assistant access control Philippines: limit tools safely', 'access control'],
  ['virtual-assistant-sop-philippines', 'Virtual assistant SOP Philippines: turn recurring work into clear steps', 'standard operating procedures'],
  ['virtual-assistant-handoff-philippines', 'Virtual assistant handoff Philippines: keep recurring work moving', 'handoffs'],
  ['virtual-assistant-time-tracking-philippines', 'Virtual assistant time tracking Philippines: measure work without guesswork', 'time tracking'],
  ['virtual-assistant-manager-philippines', 'Virtual assistant manager Philippines: define the support layer', 'manager support'],
  ['virtual-assistant-backup-coverage-philippines', 'Virtual assistant backup coverage Philippines: plan for absences', 'backup coverage'],
  ['virtual-assistant-customer-support-qa-philippines', 'Virtual assistant customer support QA Philippines: protect the queue', 'customer support QA'],
  ['virtual-assistant-crm-cleanup-philippines', 'Virtual assistant CRM cleanup Philippines: make follow-up reliable', 'CRM cleanup'],
  ['virtual-assistant-calendar-management-philippines', 'Virtual assistant calendar management Philippines: protect the owner’s time', 'calendar management'],
  ['virtual-assistant-inbox-management-philippines', 'Virtual assistant inbox management Philippines: triage with clear limits', 'inbox management'],
  ['virtual-assistant-research-support-philippines', 'Virtual assistant research support Philippines: build a checkable brief', 'research support'],
  ['virtual-assistant-content-operations-philippines', 'Virtual assistant content operations Philippines: publish with a review trail', 'content operations'],
  ['virtual-assistant-bookkeeping-admin-philippines', 'Virtual assistant bookkeeping admin Philippines: prepare records safely', 'bookkeeping administration'],

  ['virtual-assistant-ecommerce-qa-philippines', 'Virtual assistant ecommerce QA Philippines: check products and orders', 'ecommerce QA'],
  ['virtual-assistant-recruiting-admin-philippines', 'Virtual assistant recruiting admin Philippines: protect candidate workflows', 'recruiting administration'],
] as const;

const dailyBlogSources = [
  { name: 'NIST Access Control Project', url: 'https://csrc.nist.gov/projects/access-control', note: 'Use access controls to limit actions to approved people and purposes.' },
  { name: 'CISA More than a Password', url: 'https://www.cisa.gov/more-password', note: 'Use stronger authentication and protect the identities that publish or handle customer data.' },
  { name: 'Google Search Central: Creating helpful content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', note: 'Write for the reader and preserve useful, original information.' },
];

const dailyBlogPosts: BlogPost[] = dailyBlogBatchTopics.map(([slug, title, topic]) => ({
  slug,
  featuredImage: '/featured/publishing-contingency-routine.png',
  title,
  excerpt: `Plan ${topic} for a Philippines-based virtual assistant with clear tasks, proof, access limits, review points, and a manager-owned escalation path.`,
  minutes: 10,
  takeaways: [
    `Start ${topic} with a small recurring task lane and a written definition of done.`,
    'Keep the source record, expected output, reviewer, and exception rule beside each task.',
    'Use named accounts and least-privilege access; expand permissions only after clean work.',
    'Review early work daily, then move to a documented weekly sample once the process is stable.',
  ],
  sections: [
    { heading: 'Define the work before you delegate it', body: `A useful ${topic} plan begins with the recurring work, its source of truth, the output another person can check, and the decisions that remain with the owner. Write one example of a finished task and one example that must stop for review. This keeps a Philippines-based assistant from having to guess what “done” means.`, bullets: ['Name the input and approved tool.', 'Set the output format and due time.', 'List stop conditions and the person who decides exceptions.'] },
    { heading: 'Build a small work sample', body: `Test ${topic} with safe, representative records before granting live access. Use fake names, redacted files, or a copied queue. Score accuracy, source use, clarity, and whether the assistant asks the right question when a record is incomplete. A work sample reveals more than a general claim of experience.` },
    { heading: 'Protect access and evidence', body: `NIST’s access-control guidance supports limiting actions to approved users and purposes. Give the assistant a named account, only the tools needed for the first lane, and a simple record of changes. CISA’s authentication guidance is a useful reminder to protect publishing and customer-data accounts with stronger sign-in and explicit recovery ownership.`, bullets: ['Separate preparation from approval.', 'Review exports, shared links, and old accounts.', 'Save the task record, reviewer, date, and correction when work changes.'] },
    { heading: 'Run the first month in reviewable steps', body: `In week one, review every completed task and correct the source instructions. In week two, add one related duty only if the first lane is accurate. In weeks three and four, sample the work against the same checklist and record exceptions. Keep the staffing manager informed about attendance, coaching, access, or replacement needs.` },
    { heading: 'Use a clear next step', body: `Google Search Central’s people-first guidance supports writing for a real reader rather than filling a queue for its own sake. Apply the same standard to operations: publish or hand off only work that is useful, checked, and traceable. Start with the related role guide, then send the task list and tools through the staffing intake.` },
  ],
  faq: [
    { question: `What should a Philippines-based assistant do first with ${topic}?`, answer: 'Start with one repeatable, low-risk task lane that has examples, a source record, a reviewer, and a written stop rule.' },
    { question: 'How should access be granted?', answer: 'Use a named account and least privilege. Add one permission at a time after the assistant demonstrates accurate work.' },
    { question: 'Who owns exceptions?', answer: 'A named client manager or subject-matter owner should decide exceptions; the assistant prepares the evidence and routes the question.' },
  ],
  sources: dailyBlogSources,
  relatedServices: [],
}));

export const roles = services.map((service) => service.name);
export const industries = ['real estate', 'healthcare offices', 'legal teams', 'ecommerce stores', 'coaches and agencies', 'home services'] as const;
export const stats = [
  { label: 'Role scope', value: 'Scope first', note: 'the plan depends on the tasks, hours, tools, and skills involved' },
  { label: 'Early review', value: '7-21 days', note: 'keep a close eye on the work while the assistant learns the role' },
  { label: 'First handoff', value: '5-10 tasks', note: 'begin with a short list of recurring work instead of an all-purpose role' },
];

export const providerCards = [
  { name: 'Managed Philippines VA company', rating: 'Good fit for 20+ hours/week', note: 'Ask who trains the Filipino assistant, who checks quality, and how fast a Philippines-based replacement can start.' },
  { name: 'Filipino specialist team', rating: 'Good fit for support or CRM', note: 'Look for role-specific examples, saved replies, and a Philippines team manager who knows the tools.' },
  { name: 'Direct Filipino freelance VA', rating: 'Good fit for a small pilot', note: 'Lower overhead can help, but you own screening, backup, quality checks, and access cleanup.' },
];

export const evidenceNotes = [
  { label: 'Admin labor baseline', source: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/ooh/office-and-administrative-support/home.htm' },
  { label: 'Remote access planning', source: 'NIST access control project', url: 'https://csrc.nist.gov/projects/access-control' },
  { label: 'Worker classification check', source: 'IRS contractor guidance', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined' },
];

export type BlogPost = {
  slug: string;
  featuredImage: string;
  title: string;
  excerpt: string;
  minutes: number;
  takeaways: string[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  faq: { question: string; answer: string }[];
  sources: { name: string; url: string; note: string }[];
  relatedServices: string[];
  published?: string;
  updated?: string;
  displayDate?: string;
  articleLinks?: { label: string; href: string; external?: boolean }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'ecommerce-virtual-assistant-philippines',
    featuredImage: '/featured/ecommerce-virtual-assistant-philippines.png',
    title: 'Ecommerce virtual assistant Philippines: store operations guide',
    excerpt: 'Plan product updates, order checks, customer messages, access limits, and first-month review for a Philippines-based ecommerce virtual assistant.',
    minutes: 14,
    takeaways: [],
    sections: [],
    faq: [],
    sources: [],
    relatedServices: [],
  },
  {
    slug: 'real-estate-virtual-assistant-philippines',
    featuredImage: '/featured/real-estate-virtual-assistant-philippines.png',
    title: 'Real estate virtual assistant Philippines: a safe role plan',
    excerpt: 'Plan the tasks, owner controls, work sample, access, and first week for a Philippines-based real estate assistant.',
    minutes: 12,
    takeaways: [],
    sections: [],
    faq: [],
    sources: [],
    relatedServices: [],
  },
  {
    slug: 'executive-assistant-philippines-hiring-guide',
    featuredImage: '/featured/executive-assistant-philippines-hiring-guide.png',
    title: 'Executive assistant Philippines: a safe hiring guide',
    excerpt: 'Build a clear role, work sample, access plan, and first-week launch for a Philippines-based executive assistant.',
    minutes: 13,
    takeaways: [],
    sections: [],
    faq: [],
    sources: [],
    relatedServices: [],
  },
  {
    slug: 'customer-service-virtual-assistant-philippines',
    featuredImage: '/featured/customer-service-virtual-assistant-philippines.png',
    title: 'Customer service virtual assistant Philippines: hiring and QA guide',
    excerpt: 'Plan the ticket lanes, work sample, access limits, quality checks, and first week for a Philippines-based customer service virtual assistant.',
    minutes: 13,
    takeaways: [],
    sections: [],
    faq: [],
    sources: [],
    relatedServices: [],
  },
  {
    slug: 'bookkeeping-virtual-assistant-philippines',
    featuredImage: '/featured/bookkeeping-virtual-assistant-philippines.png',
    title: 'Bookkeeping virtual assistant Philippines: safe hiring guide',
    excerpt: 'Plan the records, work sample, access limits, review steps, and first month for a Philippines-based bookkeeping virtual assistant.',
    minutes: 14,
    takeaways: [],
    sections: [],
    faq: [],
    sources: [],
    relatedServices: [],
  },
  {
    slug: 'recruiting-virtual-assistant-philippines',
    featuredImage: '/featured/recruiting-virtual-assistant-philippines.png',
    title: 'Recruiting virtual assistant Philippines: safe hiring guide',
    excerpt: 'Plan the job posts, applicant records, interview steps, access limits, and first month for a Philippines-based recruiting virtual assistant.',
    minutes: 14,
    takeaways: [],
    sections: [],
    faq: [],
    sources: [],
    relatedServices: [],
  },
  {
    slug: 'healthcare-virtual-assistant-philippines',
    featuredImage: '/featured/healthcare-virtual-assistant-philippines.png',
    title: 'Healthcare virtual assistant Philippines: safe admin hiring guide',
    excerpt: 'Plan the nonclinical tasks, patient-data limits, work sample, quality checks, and first month for a Philippines-based healthcare virtual assistant.',
    minutes: 15,
    takeaways: [],
    sections: [],
    faq: [],
    sources: [],
    relatedServices: [],
  },];

blogPosts.push(...dailyBlogPosts);

// Daily Blog batch: 20 fresh, non-overlapping buyer guides published on 2026-08-10.
// Each post keeps two existing Blog references and one authoritative external reference
// in the article body so the family-specific link contract is easy to audit.
const currentBlogBatchTopics = [
  ['virtual-assistant-daily-standup-philippines', 'Virtual assistant daily standup Philippines: keep handoffs short and useful', 'daily standups'],
  ['virtual-assistant-weekly-reporting-philippines', 'Virtual assistant weekly reporting Philippines: build a reviewable update', 'weekly reporting'],
  ['virtual-assistant-meeting-notes-philippines', 'Virtual assistant meeting notes Philippines: turn decisions into follow-up', 'meeting notes'],
  ['virtual-assistant-vendor-management-philippines', 'Virtual assistant vendor management Philippines: track recurring supplier work', 'vendor management'],
  ['virtual-assistant-sop-review-philippines', 'Virtual assistant SOP review Philippines: keep instructions accurate', 'SOP review'],
  ['virtual-assistant-task-prioritization-philippines', 'Virtual assistant task prioritization Philippines: set a clear queue', 'task prioritization'],
  ['virtual-assistant-remote-communication-philippines', 'Virtual assistant remote communication Philippines: choose useful updates', 'remote communication'],
  ['virtual-assistant-qa-scorecard-philippines', 'Virtual assistant QA scorecard Philippines: check work with the same rubric', 'QA scorecards'],
  ['virtual-assistant-backup-documentation-philippines', 'Virtual assistant backup documentation Philippines: make coverage possible', 'backup documentation'],
  ['virtual-assistant-call-handling-philippines', 'Virtual assistant call handling Philippines: write safe scripts and stops', 'call handling'],
  ['virtual-assistant-data-entry-accuracy-philippines', 'Virtual assistant data entry accuracy Philippines: reduce avoidable corrections', 'data entry accuracy'],
  ['virtual-assistant-document-management-philippines', 'Virtual assistant document management Philippines: keep files findable', 'document management'],
  ['virtual-assistant-appointment-setting-philippines', 'Virtual assistant appointment setting Philippines: protect the calendar', 'appointment setting'],
  ['virtual-assistant-social-media-scheduling-philippines', 'Virtual assistant social media scheduling Philippines: use an approval queue', 'social media scheduling'],
  ['virtual-assistant-market-research-brief-philippines', 'Virtual assistant market research brief Philippines: make findings checkable', 'market research briefs'],
  ['virtual-assistant-lead-qualification-philippines', 'Virtual assistant lead qualification Philippines: route inquiries with rules', 'lead qualification'],
  ['virtual-assistant-project-coordinator-philippines', 'Virtual assistant project coordinator Philippines: keep owners and dates visible', 'project coordination'],
  ['virtual-assistant-travel-planning-philippines', 'Virtual assistant travel planning Philippines: organize options without booking risk', 'travel planning'],
  ['virtual-assistant-knowledge-base-philippines', 'Virtual assistant knowledge base Philippines: maintain answers people can use', 'knowledge base maintenance'],
  ['virtual-assistant-invoice-follow-up-philippines', 'Virtual assistant invoice follow-up Philippines: prepare reminders safely', 'invoice follow-up'],
] as const;

const currentBlogSources = [
  { name: 'NIST Access Control Project', url: 'https://csrc.nist.gov/projects/access-control', note: 'Use access controls to limit actions to approved people and purposes.' },
  { name: 'CISA More than a Password', url: 'https://www.cisa.gov/more-password', note: 'Protect accounts that handle customer data, publishing, and business records.' },
  { name: 'Google Search Central: Creating helpful content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', note: 'Write for a real reader and keep the information useful and original.' },
];

const currentBlogPosts: BlogPost[] = currentBlogBatchTopics.map(([slug, title, topic]) => ({
  slug,
  featuredImage: `/featured/${slug}.png`,
  title,
  excerpt: `Plan ${topic} for a Philippines-based virtual assistant with a small task lane, clear evidence, access limits, and a manager-owned escalation path.`,
  minutes: 9,
  takeaways: [
    `Start ${topic} with one recurring task lane and a written definition of done.`,
    'Keep the source record, expected output, reviewer, and stop rule beside each task.',
    'Use named accounts and least-privilege access; add permissions after accurate work.',
    'Review the first work closely, then keep a weekly sample and correction record.',
  ],
  sections: [
    { heading: 'Define the queue before delegation', body: `A useful ${topic} plan names the input, the output another person can check, the due time, and the decisions that stay with the owner. Add one finished example and one example that must stop for review. That gives a Philippines-based assistant a clear finish line.`, bullets: ['Name the source of truth and approved tool.', 'Set the output format and due time.', 'List exceptions and the person who decides them.'] },
    { heading: 'Test the smallest safe lane', body: `Use copied, redacted, or low-risk records for a work sample. Score accuracy, source use, clarity, and the questions asked when a record is incomplete. A small sample shows how the assistant handles the actual workflow better than a broad claim of experience.` },
    { heading: 'Keep access and corrections visible', body: `Give the assistant a named account and only the tools needed for the first lane. Record the task, reviewer, date, and correction when work changes. Separate preparation from approval, and protect accounts with stronger sign-in and clear recovery ownership.`, bullets: ['Review shared links and exports.', 'Keep financial, legal, and sensitive personnel choices with the owner.', 'Add access one permission at a time.'] },
    { heading: 'Review the first month', body: `Review every completed task in week one and fix the source instructions. Add one related duty only if the first lane is accurate. By weeks three and four, sample the work against the same rubric and record exceptions for the staffing manager.` },
    { heading: 'Keep the next step concrete', body: `A work lane is ready to expand when its inputs, examples, reviewer, stop rules, and access are documented. Keep useful outputs, discard guesses, and send the role brief through the staffing intake when the owner is ready.` },
  ],
  faq: [
    { question: `What should a Philippines-based assistant do first with ${topic}?`, answer: 'Start with one repeatable, low-risk task lane that has examples, a source record, a reviewer, and a written stop rule.' },
    { question: 'How should access be granted?', answer: 'Use a named account and least privilege. Add one permission at a time after the assistant demonstrates accurate work.' },
    { question: 'Who owns exceptions?', answer: 'A named client manager or subject-matter owner should decide exceptions; the assistant prepares the evidence and routes the question.' },
  ],
  sources: currentBlogSources,
  relatedServices: [],
  articleLinks: [
    { label: 'daily routine guide', href: '/blog/virtual-assistant-daily-routine-philippines' },
    { label: 'onboarding checklist', href: '/blog/virtual-assistant-onboarding-checklist-philippines' },
    { label: 'NIST access control guidance', href: 'https://csrc.nist.gov/projects/access-control', external: true },
  ],
}));

blogPosts.push(...currentBlogPosts);

// Blog publication batch selected for the 2026-08-10 continuation run.
const continuationBlogBatchTopics = [
  ['virtual-assistant-work-instructions-philippines', 'Virtual assistant work instructions Philippines: write steps people can check', 'work instructions'],
  ['virtual-assistant-daily-planning-philippines', 'Virtual assistant daily planning Philippines: set a manageable queue', 'daily planning'],
  ['virtual-assistant-escalation-rules-philippines', 'Virtual assistant escalation rules Philippines: decide what must stop', 'escalation rules'],
  ['virtual-assistant-client-onboarding-philippines', 'Virtual assistant client onboarding Philippines: prepare the first handoff', 'client onboarding'],
  ['virtual-assistant-work-sample-philippines', 'Virtual assistant work sample Philippines: test the actual role', 'work samples'],
  ['virtual-assistant-permission-review-philippines', 'Virtual assistant permission review Philippines: clean up access', 'permission reviews'],
  ['virtual-assistant-absence-plan-philippines', 'Virtual assistant absence plan Philippines: keep routine work covered', 'absence planning'],
  ['virtual-assistant-task-queue-philippines', 'Virtual assistant task queue Philippines: make priorities visible', 'task queues'],
  ['virtual-assistant-error-log-philippines', 'Virtual assistant error log Philippines: turn corrections into better instructions', 'error logs'],
  ['virtual-assistant-weekly-one-on-one-philippines', 'Virtual assistant weekly one on one Philippines: coach from real work', 'weekly one on ones'],
  ['virtual-assistant-file-naming-philippines', 'Virtual assistant file naming Philippines: keep shared work findable', 'file naming'],
  ['virtual-assistant-calendar-delegation-philippines', 'Virtual assistant calendar delegation Philippines: protect meeting decisions', 'calendar delegation'],
  ['virtual-assistant-email-triage-philippines', 'Virtual assistant email triage Philippines: sort messages by owner rules', 'email triage'],
  ['virtual-assistant-reporting-template-philippines', 'Virtual assistant reporting template Philippines: share useful work evidence', 'reporting templates'],
  ['virtual-assistant-approval-workflow-philippines', 'Virtual assistant approval workflow Philippines: separate drafts from decisions', 'approval workflows'],
  ['virtual-assistant-data-cleanup-philippines', 'Virtual assistant data cleanup Philippines: repair records without guessing', 'data cleanup'],
  ['virtual-assistant-research-citations-philippines', 'Virtual assistant research citations Philippines: keep sources attached to claims', 'research citations'],
  ['virtual-assistant-content-brief-philippines', 'Virtual assistant content brief Philippines: turn a topic into an assigned article', 'content briefs'],
  ['virtual-assistant-podcast-admin-philippines', 'Virtual assistant podcast admin Philippines: organize production follow-up', 'podcast administration'],
  ['virtual-assistant-property-listing-philippines', 'Virtual assistant property listing Philippines: check details before publishing', 'property listings'],
  ['virtual-assistant-patient-scheduling-philippines', 'Virtual assistant patient scheduling Philippines: keep nonclinical work bounded', 'patient scheduling'],
  ['virtual-assistant-payment-reminders-philippines', 'Virtual assistant payment reminders Philippines: prepare follow-up with approval limits', 'payment reminders'],
] as const;

// Exact source binding for the frozen August 10 batch. Each slug owns its date.
const continuationBlogPublicationDates: Record<string, string> = {
  'virtual-assistant-absence-plan-philippines': '2026-08-10',
  'virtual-assistant-approval-workflow-philippines': '2026-08-10',
  'virtual-assistant-calendar-delegation-philippines': '2026-08-10',
  'virtual-assistant-client-onboarding-philippines': '2026-08-10',
  'virtual-assistant-content-brief-philippines': '2026-08-10',
  'virtual-assistant-daily-planning-philippines': '2026-08-10',
  'virtual-assistant-data-cleanup-philippines': '2026-08-10',
  'virtual-assistant-email-triage-philippines': '2026-08-10',
  'virtual-assistant-error-log-philippines': '2026-08-10',
  'virtual-assistant-escalation-rules-philippines': '2026-08-10',
  'virtual-assistant-file-naming-philippines': '2026-08-10',
  'virtual-assistant-patient-scheduling-philippines': '2026-08-10',
  'virtual-assistant-payment-reminders-philippines': '2026-08-10',
  'virtual-assistant-permission-review-philippines': '2026-08-10',
  'virtual-assistant-podcast-admin-philippines': '2026-08-10',
  'virtual-assistant-property-listing-philippines': '2026-08-10',
  'virtual-assistant-reporting-template-philippines': '2026-08-10',
  'virtual-assistant-research-citations-philippines': '2026-08-10',
  'virtual-assistant-task-queue-philippines': '2026-08-10',
  'virtual-assistant-weekly-one-on-one-philippines': '2026-08-10',
  'virtual-assistant-work-instructions-philippines': '2026-08-10',
  'virtual-assistant-work-sample-philippines': '2026-08-10',
};

const continuationBlogPosts: BlogPost[] = continuationBlogBatchTopics.map(([slug, title, topic]) => ({
  slug,
  published: continuationBlogPublicationDates[slug],
  updated: continuationBlogPublicationDates[slug],
  featuredImage: `/featured/${slug}.png`,
  title,
  excerpt: `Plan ${topic} for a Philippines-based virtual assistant with examples, a small task lane, access limits, and a manager-owned escalation path.`,
  minutes: 9,
  takeaways: [
    `Start ${topic} with one recurring task lane and a written definition of done.`,
    'Keep the source record, expected output, reviewer, and stop rule beside each task.',
    'Use named accounts and least-privilege access; add permissions after accurate work.',
    'Review early work closely, then keep a weekly sample and correction record.',
  ],
  sections: [
    { heading: 'Define the queue before delegation', body: `A useful ${topic} plan names the input, the output another person can check, the due time, and the decisions that stay with the owner. Add one finished example and one example that must stop for review. That gives a Philippines-based assistant a clear finish line.`, bullets: ['Name the source of truth and approved tool.', 'Set the output format and due time.', 'List exceptions and the person who decides them.'] },
    { heading: 'Test the smallest safe lane', body: `Use copied, redacted, or low-risk records for a work sample. Score accuracy, source use, clarity, and the questions asked when a record is incomplete. A small sample shows how the assistant handles the actual workflow better than a broad claim of experience.` },
    { heading: 'Keep access and corrections visible', body: `Give the assistant a named account and only the tools needed for the first lane. Record the task, reviewer, date, and correction when work changes. Separate preparation from approval, and protect accounts with stronger sign-in and clear recovery ownership.`, bullets: ['Review shared links and exports.', 'Keep financial, legal, and sensitive personnel choices with the owner.', 'Add access one permission at a time.'] },
    { heading: 'Review the first month', body: `Review every completed task in week one and fix the source instructions. Add one related duty only if the first lane is accurate. By weeks three and four, sample the work against the same rubric and record exceptions for the staffing manager.` },
    { heading: 'Keep the next step concrete', body: `A work lane is ready to expand when its inputs, examples, reviewer, stop rules, and access are documented. Keep useful outputs, discard guesses, and send the role brief through the staffing intake when the owner is ready.` },
  ],
  faq: [
    { question: `What should a Philippines-based assistant do first with ${topic}?`, answer: 'Start with one repeatable, low-risk task lane that has examples, a source record, a reviewer, and a written stop rule.' },
    { question: 'How should access be granted?', answer: 'Use a named account and least privilege. Add one permission at a time after the assistant demonstrates accurate work.' },
    { question: 'Who owns exceptions?', answer: 'A named client manager or subject-matter owner should decide exceptions; the assistant prepares the evidence and routes the question.' },
  ],
  sources: currentBlogSources,
  relatedServices: [],
  articleLinks: [
    { label: 'daily routine guide', href: '/blog/virtual-assistant-daily-routine-philippines' },
    { label: 'onboarding checklist', href: '/blog/virtual-assistant-onboarding-checklist-philippines' },
    { label: 'NIST access control guidance', href: 'https://csrc.nist.gov/projects/access-control', external: true },
  ],
}));

blogPosts.push(...continuationBlogPosts);

// August 11, 2026 Blog batch: new, service-relevant buyer guides.
const august11BlogPosts: BlogPost[] = [
  { slug: 'virtual-assistant-inbox-delegation-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant inbox delegation Philippines: share email safely', topic: 'inbox delegation', detail: 'Start with labels, drafts, and follow-up flags before live replies.', angle: 'Keep private, legal, financial, and relationship-sensitive messages with the owner.' },
  { slug: 'virtual-assistant-lead-follow-up-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant lead follow-up Philippines: keep inquiries moving', topic: 'lead follow-up', detail: 'Define inquiry stages, approved reminders, and the next action for every record.', angle: 'Route pricing, promises, objections, and fit decisions to the sales owner.' },
  { slug: 'virtual-assistant-customer-support-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant customer support Philippines: build a reliable first queue', topic: 'customer support', detail: 'Begin with repeat questions that have stable, approved answers.', angle: 'Give urgent cases and exceptions a visible route to a named manager.' },
  { slug: 'virtual-assistant-calendar-booking-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant calendar booking Philippines: protect the owner’s time', topic: 'calendar booking', detail: 'Write meeting types, buffers, time zones, and no-book windows.', angle: 'The owner decides which priority wins when commitments conflict.' },
  { slug: 'virtual-assistant-crm-maintenance-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant CRM maintenance Philippines: keep records ready for action', topic: 'CRM maintenance', detail: 'Set required fields and repair duplicates from evidence rather than guesses.', angle: 'Separate record maintenance from deal approval and sales decisions.' },
  { slug: 'virtual-assistant-ecommerce-catalog-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant ecommerce catalog Philippines: keep product details accurate', topic: 'ecommerce catalogs', detail: 'Check titles, variants, stock notes, links, and approval status before changes.', angle: 'Keep refunds, product claims, and unusual customer promises with the owner.' },

  { slug: 'virtual-assistant-bookkeeping-prep-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant bookkeeping preparation Philippines: organize records for review', topic: 'bookkeeping preparation', detail: 'Collect statements, label transactions, and flag missing evidence.', angle: 'Do not make tax, accounting, or payment judgments without the responsible professional.' },

  { slug: 'virtual-assistant-recruiting-coordination-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant recruiting coordination Philippines: keep candidates informed', topic: 'recruiting coordination', detail: 'Track interview logistics, candidate questions, and status updates.', angle: 'Hiring decisions, evaluations, and sensitive personnel matters stay with the employer.' },
  { slug: 'virtual-assistant-travel-research-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant travel research Philippines: compare options clearly', topic: 'travel research', detail: 'Collect itinerary options, constraints, cancellation details, and open questions.', angle: 'Do not book or commit funds until the traveler approves the selected option.' },
  { slug: 'virtual-assistant-dispatch-support-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant dispatch support Philippines: keep service appointments moving', topic: 'dispatch support', detail: 'Coordinate time windows, customer notes, and technician updates.', angle: 'Safety, scope changes, and service exceptions must go to the field manager.' },
  { slug: 'virtual-assistant-document-organization-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant document organization Philippines: make shared files findable', topic: 'document organization', detail: 'Use a clear folder map, naming convention, and current-file marker.', angle: 'Review sharing permissions before moving sensitive documents.' },
  { slug: 'virtual-assistant-appointment-reminders-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant appointment reminders Philippines: reduce avoidable no-shows', topic: 'appointment reminders', detail: 'Use approved reminder timing and confirm the right date, time, and location.', angle: 'Route cancellations, reschedules, and unusual requests to the service owner.' },
  { slug: 'virtual-assistant-vendor-records-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant vendor records Philippines: keep supplier details current', topic: 'vendor records', detail: 'Maintain contacts, renewal dates, documents, and open supplier questions.', angle: 'Do not accept terms, approve spend, or change a supplier relationship independently.' },
  { slug: 'virtual-assistant-research-summary-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant research summaries Philippines: make findings easy to check', topic: 'research summaries', detail: 'Attach important claims to sources and distinguish facts from interpretation.', angle: 'Flag evidence gaps instead of filling them with confident guesses.' },
  { slug: 'virtual-assistant-social-media-approval-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant social media approval Philippines: prepare posts for review', topic: 'social media approvals', detail: 'Organize copy, links, dates, and approval status in one readable place.', angle: 'The brand owner makes final publishing and sensitive-response decisions.' },
  { slug: 'virtual-assistant-sales-admin-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant sales administration Philippines: keep proposals moving', topic: 'sales administration', detail: 'Prepare meeting notes, proposal inputs, and follow-up reminders.', angle: 'Do not change terms, promise outcomes, or negotiate on the seller’s behalf.' },
  { slug: 'virtual-assistant-online-course-admin-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant online course administration Philippines: support learners clearly', topic: 'course administration', detail: 'Manage learner questions, access requests, and records using approved answers.', angle: 'Route disputed outcomes, refunds, and accessibility exceptions to the course owner.' },
  { slug: 'virtual-assistant-data-entry-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant data entry Philippines: improve accuracy at the source', topic: 'data entry', detail: 'Use field definitions, examples, and a small review sample to prevent corrections.', angle: 'When the source conflicts, preserve the evidence and ask rather than infer.' },
  { slug: 'virtual-assistant-multilingual-support-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant multilingual support Philippines: make customer handoffs clearer', topic: 'multilingual support', detail: 'Match language needs, preserve customer meaning, and record the requested next step.', angle: 'Sensitive, ambiguous, or high-impact requests need a manager’s review.' },
  { slug: 'virtual-assistant-operations-coordinator-philippines', published: '2026-08-12', updated: '2026-08-12', title: 'Virtual assistant operations coordinator Philippines: connect recurring work', topic: 'operations coordination', detail: 'Keep owners, due dates, dependencies, and decisions visible across a small work lane.', angle: 'The responsible owner still decides priorities and resolves cross-team conflicts.' },
].map(({ slug, published, updated, title, topic, detail, angle }) => ({
  slug, published, updated, featuredImage: '/featured/virtual-assistant-appointment-setting-philippines.png', title,
  excerpt: `Plan ${topic} for a Philippines-based virtual assistant with clear evidence, access boundaries, and owner-led decisions.`, minutes: 10,
  takeaways: [`Start ${topic} with a small, repeatable lane.`, detail, angle],
  sections: [
    { heading: 'Define the first lane', body: `${detail} Begin with a limited set of records and a clear definition of finished work so the assistant can learn the actual context.` },
    { heading: 'Give examples and boundaries', body: `For ${topic}, show two finished examples and one case that must stop. Keep approvals, commitments, sensitive judgment, and unusual requests with the owner.` },
    { heading: 'Make the handoff useful', body: 'Every escalation should include the record, what was checked, what is missing, and the decision needed. This keeps the owner moving instead of repeating the assistant’s work.' },
    { heading: 'Review before expanding', body: `Sample early ${topic} work for accuracy, completeness, tone, and correct escalation. Add related duties only after the first lane is dependable.` },
  ],
  faq: [{ question: `What should a VA do first with ${topic}?`, answer: 'Start with one low-risk, repeatable task supported by examples, a source record, a reviewer, and a stop rule.' }, { question: 'Who owns exceptions?', answer: 'A named client or subject-matter owner decides exceptions; the assistant prepares the evidence and routes the question.' }],
  sources: [{ name: 'NIST Access Control Project', url: 'https://csrc.nist.gov/projects/access-control', note: 'Limit actions to approved users and purposes.' }, { name: 'CISA More than a Password', url: 'https://www.cisa.gov/more-password', note: 'Protect accounts that handle business and customer records.' }], relatedServices: [],
}));

blogPosts.push(...august11BlogPosts, ...august12ReplacementBlogPosts, ...august13BlogPosts);

// Keep dated articles newest-first while preserving source order for equal dates.
blogPosts.sort((a, b) => (b.published ?? '').localeCompare(a.published ?? ''));

export const faq = [
  { question: 'Is Virtual Assistant Provider a staffing agency?', answer: 'This first version is an independent buyer-guide site. It helps visitors plan the role and request a quote-style hiring plan. Replace this note if the site becomes a direct staffing offer.' },
  { question: 'What kind of assistant should I hire first?', answer: 'Start with the work that repeats, has examples, and does not require sensitive judgment. Inbox cleanup, scheduling, CRM updates, and support drafts are common first choices.' },
  { question: 'How do I compare providers?', answer: 'Ask who screens the assistant, who manages quality, what replacement support is included, how access is protected, and whether you can start with a small pilot.' },
  { question: 'How fast can a VA start?', answer: 'Simple admin work can often start in 7 to 21 days when tasks, tools, and examples are ready. Complex work takes longer.' },
];

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a Philippines staffing plan based on the work you want to hand off.',
  fit: [
    'business owners who need Filipino remote staff but do not want to screen candidates alone',
    'teams that want help with training, backup coverage, and day-to-day questions',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'a role planning call that turns your task list into a job scope',
    'Philippines-based candidate matching based on the skills, hours, tools, and communication the job requires',
    'help preparing task instructions, review notes, reports, and tool access',
    'a manager to contact about attendance, weak work, or a replacement',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'Turn the task list into one job with set hours, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Meet candidates', body: 'Our staffing team can look for people whose skills and working hours fit the job.' },
  { step: '3', title: 'Start with close review', body: 'Give examples, limit tool access, and check the work each day during the first week.' },
  { step: '4', title: 'Add work carefully', body: 'Once the first tasks are going well, add new duties one at a time.' },
] as const;

export const staffingFitNote = 'The right hire depends on the work, hours, tools, and skill level. Send those details so our staffing team can narrow the search.';
