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
