export const site = {
  domain: 'VirtualAssistantProvider.com',
  slug: 'virtualassistantprovider',
  brand: 'Virtual Assistant Provider',
  primary: 'virtual assistant provider',
  audience: 'business owners comparing managed virtual assistant providers',
  angle: 'a practical buyer guide for choosing a dependable VA provider with clear screening, task handoff, management support, and launch steps',
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
    excerpt: 'Plan calendar, inbox, travel, follow-up, and simple admin support without handing over sensitive decisions too fast.',
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
    excerpt: 'Build a safe support role for tickets, chat, order questions, refunds that need approval, and clear escalation paths.',
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
  { label: 'Role clarity', value: 'Scope first', note: 'the right plan depends on tasks, schedule, skill, tools, and management needs' },
  { label: 'Common ramp time', value: '7-21 days', note: 'when SOPs, tool access, examples, and QA checks are ready' },
  { label: 'Best first handoff', value: '5-10 tasks', note: 'small recurring work beats a vague all-in assistant role' },
];

export const providerCards = [
  { name: 'Managed VA company', rating: 'Good fit for 20+ hours/week', note: 'Ask who trains the assistant, who checks quality, and how fast a replacement can start.' },
  { name: 'Specialist assistant team', rating: 'Good fit for support or CRM', note: 'Look for role-specific examples, saved replies, and a manager who knows the tools.' },
  { name: 'Direct freelance VA', rating: 'Good fit for a small pilot', note: 'Lower overhead can help, but you own screening, backup, QA, and access cleanup.' },
];

export const evidenceNotes = [
  { label: 'Admin labor baseline', source: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/ooh/office-and-administrative-support/home.htm' },
  { label: 'Remote access planning', source: 'NIST access control project', url: 'https://csrc.nist.gov/projects/access-control' },
  { label: 'Worker classification check', source: 'IRS contractor guidance', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined' },
];

export type BlogPost = {
  slug: string;
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
    slug: 'virtual-assistant-planning',
    title: 'How much does a virtual assistant plan?',
    excerpt: 'A plain guide to role scope, staffing models, and launch planning.',
    minutes: 7,
    takeaways: ['Budget by role, not by a generic VA label.', 'A managed provider often needs more support than a direct freelancer because screening, backup, and account help are included.', 'Start with a 20-hour pilot before moving to a larger monthly plan.'],
    sections: [
      { heading: 'Use a simple planning range', body: 'Many overseas assistant roles are planned around custom role planfor the role. Skilled work, night coverage, strong English writing, and provider management can raise the plan. Local employee support usually needs more support after payroll, benefits, tools, and management time.' },
      { heading: 'Compare the full plan', body: 'Do not compare only the published rate. Compare recruiting time, training time, backup coverage, manager time, software seats, security setup, and the plan of slow or incorrect work.' },
      { heading: 'Start with a small paid pilot', body: 'A two-week pilot protects both sides. Give the assistant a clear task list, examples, and a weekly scorecard. If the work is clean, add more hours. If the fit is weak, fix the scope before adding more work.', bullets: ['Pick 5 to 10 repeat tasks.', 'Give examples of good and bad output.', 'Review daily for the first week.', 'Move to weekly review after quality is stable.'] },
    ],
    faq: [
      { question: 'Is the lowest published rate the best deal?', answer: 'Not always. A lower rate can create more work if the work needs heavy review, missed shifts, or replacement help.' },
      { question: 'Should I buy a full-time plan first?', answer: 'Usually no. Start part-time or with a pilot unless you already have a trained role, SOPs, and enough recurring work.' },
    ],
    sources: [
      { name: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/ooh/office-and-administrative-support/home.htm', note: 'Useful baseline for local office and admin labor categories.' },
      { name: 'NIST access control guidance', url: 'https://csrc.nist.gov/projects/access-control', note: 'Use least-privilege access when sharing tools with remote staff.' },
    ],
    relatedServices: ['executive-assistant', 'crm-lead-follow-up'],
  },
  {
    slug: 'tasks-to-delegate-first',
    title: 'What tasks should you delegate first?',
    excerpt: 'Start with repeatable admin, follow-up, inbox, CRM, and scheduling work.',
    minutes: 6,
    takeaways: ['Pick tasks that repeat every day or week.', 'Keep judgment-heavy work with the owner at first.', 'Give examples before you expect speed.'],
    sections: [
      { heading: 'Good first tasks are boring and repeatable', body: 'The safest first tasks have clear inputs, clear steps, and clear examples. Inbox labels, appointment reminders, CRM notes, basic research, and customer reply drafts are easier to train than open-ended strategy work.' },
      { heading: 'Use a one-page task brief', body: 'For each task, write the goal, steps, tool, deadline, example, and what to do when stuck. This stops the assistant from guessing and gives you a fair way to review the work.' },
      { heading: 'Hold risky tasks until trust is earned', body: 'Do not hand off bank moves, legal advice, plan negotiation, or angry customer decisions on week one. Let the assistant prepare information while the owner keeps final approval.' },
    ],
    faq: [
      { question: 'How many tasks should I start with?', answer: 'Five to ten recurring tasks is enough for a first pilot. More than that often creates confusion.' },
      { question: 'What if I do not have SOPs?', answer: 'Record yourself doing the task once. A rough screen recording is better than a blank handoff.' },
    ],
    sources: [
      { name: 'SBA hiring guidance', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'Helpful reminder to define roles and expectations before hiring help.' },
      { name: 'NIST access control guidance', url: 'https://csrc.nist.gov/projects/access-control', note: 'Supports limited tool access for new remote staff.' },
    ],
    relatedServices: ['executive-assistant', 'customer-support-assistant'],
  },
  {
    slug: 'virtual-assistant-vs-employee',
    title: 'Virtual assistant vs employee: which is better?',
    excerpt: 'When to hire in-house and when a managed assistant is the safer first step.',
    minutes: 8,
    takeaways: ['Use employees for deep company judgment or in-person work.', 'Use VA support for repeatable remote work with clear rules.', 'Managed providers help when you need screening and replacement support.'],
    sections: [
      { heading: 'Choose based on control and risk', body: 'An employee may be better when the work needs daily in-person judgment, private business decisions, or tight cross-team work. A virtual assistant can fit when the work is remote, repeatable, and easy to check.' },
      { heading: 'A provider can reduce hiring friction', body: 'A managed VA provider may help with screening, attendance, backup, and replacement. Ask what is included. Some services only introduce a worker. Others actively manage quality.' },
      { heading: 'Use the same scorecard either way', body: 'Track accuracy, speed, communication, attendance, and owner time saved. If those numbers improve, the role is working. If they do not, the scope or hire needs repair.' },
    ],
    faq: [
      { question: 'Is a VA a replacement for a manager?', answer: 'No. A VA can take work off a manager. The manager still owns priorities, quality rules, and final decisions.' },
      { question: 'When should I hire locally?', answer: 'Hire locally when the work needs in-person coverage, local licensing, sensitive judgment, or close team supervision.' },
    ],
    sources: [
      { name: 'IRS worker classification guidance', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-defined', note: 'Classification rules matter when comparing contractors, providers, and employees.' },
      { name: 'U.S. Bureau of Labor Statistics', url: 'https://www.bls.gov/ooh/office-and-administrative-support/home.htm', note: 'Local labor data can help compare in-house admin planning.' },
    ],
    relatedServices: ['executive-assistant', 'customer-support-assistant'],
  },
  {
    slug: 'assistant-onboarding-checklist',
    title: 'Assistant onboarding checklist',
    excerpt: 'A simple first-week checklist for logins, SOPs, calls, QA, and scorecards.',
    minutes: 9,
    takeaways: ['Prepare access before day one.', 'Train with real examples, not only written rules.', 'Review daily in week one, then weekly once quality is stable.'],
    sections: [
      { heading: 'Before day one', body: 'Create named accounts, limit permissions, gather sample work, record one task video, and write the top escalation rules. This makes the first day practical instead of chaotic.' },
      { heading: 'First-week plan', body: 'Start with shadowing, then drafts, then low-risk live work. Review the work each day. Keep notes on unclear steps so the SOP improves while the assistant learns.', bullets: ['Day 1: tools, rules, sample work.', 'Day 2: shadow and ask questions.', 'Day 3: draft work for approval.', 'Day 4: do low-risk work live.', 'Day 5: review the scorecard and next tasks.'] },
      { heading: 'Weekly scorecard', body: 'Use a short scorecard with accuracy, speed, communication, attendance, and owner review time. Plain numbers make the provider conversation easier if you need coaching or replacement.' },
    ],
    faq: [
      { question: 'How long does onboarding take?', answer: 'Simple admin roles can start in a week. More complex roles often need two to three weeks of close review.' },
      { question: 'What should the first scorecard include?', answer: 'Track accuracy, time to finish, questions asked, missed rules, and work the owner had to redo.' },
    ],
    sources: [
      { name: 'NIST digital identity guidance', url: 'https://pages.nist.gov/800-63-3/', note: 'Supports named account and authentication planning.' },
      { name: 'SBA hire and manage employees', url: 'https://www.sba.gov/business-guide/manage-your-business/hire-manage-employees', note: 'Useful baseline for role setup and expectations.' },
    ],
    relatedServices: ['executive-assistant', 'crm-lead-follow-up', 'customer-support-assistant'],
  },
];

export const faq = [
  { question: 'Is Virtual Assistant Provider a staffing agency?', answer: 'This first version is an independent buyer-guide site. It helps visitors plan the role and request a quote-style hiring plan. Replace this note if the site becomes a direct staffing offer.' },
  { question: 'What kind of assistant should I hire first?', answer: 'Start with the work that repeats, has examples, and does not require sensitive judgment. Inbox cleanup, scheduling, CRM updates, and support drafts are common first choices.' },
  { question: 'How do I compare providers?', answer: 'Ask who screens the assistant, who manages quality, what replacement support is included, how access is protected, and whether you can start with a small pilot.' },
  { question: 'How fast can a VA start?', answer: 'Simple admin work can often start in 7 to 21 days when tasks, tools, and examples are ready. Complex work takes longer.' },
];

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
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
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
