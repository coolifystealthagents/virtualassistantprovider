export const fleetServices = [
  {
    "slug": "executive-assistant-staffing",
    "title": "Executive Assistant Staffing",
    "summary": "Executive Assistant Staffing delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "executive assistant staffing queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "operations-assistant-staffing",
    "title": "Operations Assistant Staffing",
    "summary": "Operations Assistant Staffing delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "operations assistant staffing queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "customer-support-assistants",
    "title": "Customer Support Assistants",
    "summary": "Customer Support Assistants delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "customer support assistants queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "sales-support-assistants",
    "title": "Sales Support Assistants",
    "summary": "Sales Support Assistants delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "sales support assistants queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "bookkeeping-assistants",
    "title": "Bookkeeping Assistants",
    "summary": "Bookkeeping Assistants delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "bookkeeping assistants queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "ecommerce-assistants",
    "title": "Ecommerce Assistants",
    "summary": "Ecommerce Assistants delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "ecommerce assistants queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "real-estate-assistants",
    "title": "Real Estate Assistants",
    "summary": "Real Estate Assistants delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "real estate assistants queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "healthcare-admin-assistants",
    "title": "Healthcare Admin Assistants",
    "summary": "Healthcare Admin Assistants delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "healthcare admin assistants queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "marketing-assistants",
    "title": "Marketing Assistants",
    "summary": "Marketing Assistants delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "marketing assistants queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  },
  {
    "slug": "recruiting-assistants",
    "title": "Recruiting Assistants",
    "summary": "Recruiting Assistants delivered by Philippines-based specialists with a documented scope, review path, and owner approval rules.",
    "tasks": [
      "recruiting assistants queue preparation",
      "source-record checks and updates",
      "exception logging for manager review",
      "daily handoff notes and follow-up"
    ],
    "controls": [
      "Named owner for approvals and exceptions",
      "Role-based access to required tools",
      "Sample review before the work lane expands"
    ],
    "launch": [
      "Share current examples and source records",
      "Document the finish line and escalation rule",
      "Review the first work batch together"
    ]
  }
] as const;
export type ResearchSource = {
  id: number;
  name: string;
  organization: string;
  url: string;
  published?: string;
  accessed: string;
};

export type ResearchPost = {
  slug: string;
  primaryKeyword: string;
  title: string;
  metaTitle: string;
  excerpt: string;
  published: string;
  updated: string;
  readingMinutes: number;
  revision: string;
  takeaways: readonly string[];
  headlineStats: readonly { value: string; label: string; context: string; sourceIds: readonly number[] }[];
  sections: readonly { heading: string; paragraphs: readonly string[] }[];
  evidenceTable: readonly { signal: string; finding: string; buyerUse: string; limit: string; sourceIds: readonly number[] }[];
  implications: readonly { title: string; body: string }[];
  methodology: readonly string[];
  faq: readonly { question: string; answer: string }[];
  sources: readonly ResearchSource[];
  related: readonly { title: string; href: string; description: string }[];
};

export const researchPosts: readonly ResearchPost[] = [
  {
    slug: 'hire-virtual-assistant-philippines-evidence-guide',
    primaryKeyword: 'hire virtual assistant philippines',
    title: 'Hire virtual assistant Philippines: an evidence guide for 2026',
    metaTitle: 'Hire virtual assistant Philippines: 2026 evidence guide',
    excerpt: 'Use country data, a paid work sample, and clear access rules to plan a Philippines-based virtual assistant hire. This report separates useful national signals from the proof you still need from each candidate and provider.',
    published: '2026-07-22',
    updated: '2026-07-22',
    readingMinutes: 13,
    revision: '2026-07-22-hire-va-ph-evidence-v1',
    takeaways: [
      'The Philippines has a large service economy and a mature IT-BPM sector, but national numbers do not prove that one applicant fits your role.',
      'Write the task list, hours, tools, decision limits, and quality check before comparing candidates or provider plans.',
      'Use a paid work sample with real-looking but safe data. Score accuracy, judgment, communication, and questions asked.',
      'Give named accounts and only the access needed for the first task. Add permissions after clean work, not before it.',
      'Compare the whole support model, including screening, coaching, backup, replacement, and account management, rather than the hourly rate alone.'
    ],
    headlineStats: [
      { value: '1.9M', label: 'IT-BPM talent workforce', context: 'Current industry figure shown by the IT and Business Process Association of the Philippines.', sourceIds: [1] },
      { value: '$40B', label: 'IT-BPM revenue generated', context: 'Current industry figure shown by the same first-party association.', sourceIds: [1] },
      { value: '67.3%', label: 'People using the internet', context: 'World Bank series for the Philippines, 2024. National access does not measure a candidate’s home setup.', sourceIds: [2] },
      { value: '59.3%', label: 'Employment in services', context: 'World Bank modeled estimate for the Philippines, 2024.', sourceIds: [3] },
      { value: '47.4%', label: 'Gross tertiary enrollment', context: 'World Bank education series for the Philippines, 2024. Enrollment is not the same as completion.', sourceIds: [4] },
      { value: '98.5%', label: 'Adult literacy rate', context: 'Latest value in the linked World Bank series is from 2020, so it is background rather than a live hiring score.', sourceIds: [5] }
    ],
    sections: [
      {
        heading: 'Start with what the evidence can show',
        paragraphs: [
          'To hire a virtual assistant in the Philippines, treat country evidence as a planning baseline, not proof that any one applicant can do the job. The strongest choice comes from a clear role, a paid work sample, reference checks, and a provider that can explain supervision and replacement.',
          'The IT and Business Process Association of the Philippines reports a 1.9 million IT-BPM talent workforce and $40 billion in generated revenue.[1] Those figures show a large business-services base, but they do not tell you whether a candidate can manage your inbox, CRM, books, or customer queue.',
          'Global datasets add context rather than a hiring promise. World Bank series show 59.3% of employment in services in 2024, 47.4% gross tertiary enrollment in 2024, and a 98.5% adult literacy rate in the latest listed year of 2020.[3][4][5]'
        ]
      },
      {
        heading: 'Write the job before you shop for talent',
        paragraphs: [
          'Begin with five to ten recurring tasks that have a clear finish line. For each task, name the input, tool, due time, good example, common mistake, and the person who decides when the work falls outside the rule.',
          'A broad request for “a virtual assistant” forces candidates to guess what matters. A better scope says whether the person will sort an inbox, update a CRM, draft customer replies, prepare bookkeeping records, schedule calls, or manage a daily operations list.',
          'Separate support work from owner-only decisions before interviews start. A Philippines-based assistant can prepare information and complete approved steps, while money movement, legal judgment, hiring choices, refunds outside policy, and sensitive client decisions stay with the named owner.'
        ]
      },
      {
        heading: 'Use a paid evidence ladder',
        paragraphs: [
          'A resume and interview show how a person describes past work, not how they will handle your exact task. Use a short paid work sample with invented customer names, redacted records, and no live passwords so the candidate can show the work without touching production data.',
          'Score the sample on accuracy, completeness, tone, judgment, and questions asked. A careful candidate who flags an unclear rule may be safer than a fast candidate who silently makes a risky choice.',
          'Move through four steps: sample, supervised draft, low-risk live work, then a wider task lane. Record the score at each step so a weak handoff is repaired before it becomes a larger quality or access problem.'
        ]
      },
      {
        heading: 'Plan hours and reliability from the Philippines',
        paragraphs: [
          'The Philippines uses one national time zone, so the first schedule choice is whether you need local daytime work, an overlap block, or a full US shift. Put the expected start time, meeting window, response target, and holiday rule in writing rather than relying on the word “flexible.”',
          'World Bank data says 67.3% of people in the Philippines used the internet in 2024.[2] That national measure cannot confirm a candidate’s connection, so ask for the actual primary provider, backup connection, device, power plan, and a live recovery test before launch.',
          'Reliability proof should be practical and respectful. Ask the candidate or provider to reconnect after a planned connection switch, explain how work is saved during an outage, and show where the manager receives a delay notice.'
        ]
      },
      {
        heading: 'Protect accounts, files, and customer data',
        paragraphs: [
          'The Philippine Data Privacy Act sets rules for processing personal information, while the Telecommuting Act recognizes remote work arrangements for private-sector employees.[6][7] Your exact legal duties still depend on the relationship, data, customer location, and contract, so get qualified advice for regulated or sensitive work.',
          'For day-to-day access, follow a simple least-privilege rule: one named account per person, multi-factor authentication, only the folders and tools needed for the task, and logs that a manager can review. NIST control guidance supports account management, access enforcement, authentication, and audit controls as part of a managed security program.[8][9]',
          'Do not send a master password in chat or share one owner login across the team. Use a password manager or delegated access, keep billing and admin rights with the owner, and remove access on the last working day or as soon as the relationship ends.'
        ]
      },
      {
        heading: 'Compare providers by the support around the assistant',
        paragraphs: [
          'A provider quote should explain who screens the candidate, who checks attendance, who coaches weak work, what backup means, and how a replacement starts. If the answers are vague, the buyer may be paying a managed-service price for a simple introduction.',
          'Compare total role cost rather than one hourly number. Include the public plan, software seats, training time, manager review, paid trial work, schedule coverage, and the cost of redoing mistakes before deciding which option is lower cost.',
          'Virtual Assistant Provider currently lists Philippines-based tiers at $10 per hour for executive assistants, $15 per hour for senior assistants, and $18 per hour for C-suite or operations support. Use the pricing page to confirm the current public scope, then request a role plan that names tasks, hours, tools, limits, and the first review date.'
        ]
      }
    ],
    evidenceTable: [
      { signal: 'Industry depth', finding: 'IBPAP shows 1.9 million workers and $40 billion in revenue for the IT-BPM sector.', buyerUse: 'Expect an established business-services market and ask providers which role pools they recruit from.', limit: 'Sector size does not prove a candidate has your software, writing, or judgment skills.', sourceIds: [1] },
      { signal: 'Service-economy base', finding: 'Services accounted for 59.3% of employment in the 2024 World Bank series.', buyerUse: 'Treat service experience as a useful screening signal for support and operations roles.', limit: 'The modeled national estimate is much broader than virtual assistant work.', sourceIds: [3] },
      { signal: 'Education pipeline', finding: 'Gross tertiary enrollment was 47.4% in 2024.', buyerUse: 'Verify degree, course, and role-specific learning only when they matter to the work.', limit: 'Enrollment can exceed 100% in some countries and does not measure graduation or job skill.', sourceIds: [4] },
      { signal: 'Digital access', finding: 'Internet use was 67.3% of the population in 2024.', buyerUse: 'Test the individual setup, backup, and recovery process before live work.', limit: 'A national percentage hides large differences by household and location.', sourceIds: [2] },
      { signal: 'Remote-work rules', finding: 'Philippine law covers personal data and recognizes telecommuting arrangements.', buyerUse: 'Put data duties, work hours, equipment, records, and offboarding in the agreement.', limit: 'The correct obligations depend on the worker model and the data being handled.', sourceIds: [6, 7] }
    ],
    implications: [
      { title: 'For executive support', body: 'Test calendar conflicts, inbox labels, a travel-change note, and an owner escalation. Do not grant full mailbox or payment access for the sample.' },
      { title: 'For customer support', body: 'Use five common tickets, one angry message, and one refund request outside policy. Score whether the candidate follows the saved reply and sends the exception to a manager.' },
      { title: 'For sales support', body: 'Test CRM cleanup, a follow-up draft, and a meeting handoff. Keep offer, qualification, discount, and promise decisions with the sales owner.' },
      { title: 'For bookkeeping support', body: 'Use redacted documents and test coding, matching, and exception notes. Keep bank moves, approvals, tax judgment, and final reconciliation sign-off with qualified owners.' }
    ],
    methodology: [
      'This report uses first-party Philippines industry figures, Philippine laws, standards guidance, and World Bank indicator pages accessed on July 22, 2026. Values are reported with their source year, and rounded percentages use one decimal place.',
      'National and sector figures describe the environment around a Philippines-based hire; they do not measure one applicant, provider, home office, or job outcome. World Bank series can combine national reporting with international methods, and the latest year differs by indicator.',
      'This article does not rank providers or promise savings, output, retention, or security. Buyers should verify current pricing, worker status, contracts, taxes, privacy duties, and role-specific licensing with qualified advisers.'
    ],
    faq: [
      { question: 'Where should I hire a virtual assistant in the Philippines?', answer: 'Choose a managed Philippines staffing provider when you want help with screening, coaching, attendance, and replacement, or use a direct hire when you can own those steps. In either case, use the same written scope, paid sample, reference check, and access plan.' },
      { question: 'How do I check a Filipino virtual assistant’s skills?', answer: 'Give a short paid work sample that matches the real job and uses safe, invented data. Score accuracy, completion, tone, judgment, and the quality of questions before opening live accounts.' },
      { question: 'What should I ask a Philippines VA provider?', answer: 'Ask who employs or contracts the worker, who supervises quality, what the fee includes, how backup works, and what starts a replacement. Also ask for the exact tool, schedule, holiday, data, and offboarding rules in writing.' },
      { question: 'How much does a Philippines-based virtual assistant cost here?', answer: 'The site currently lists $10 per hour for executive assistants, $15 per hour for senior assistants, and $18 per hour for C-suite or operations support. Confirm the current plan and ask what screening, management, backup, software, and replacement support are included.' },
      { question: 'What should stay with the business owner?', answer: 'Keep money movement, legal advice, regulated judgment, hiring and firing choices, sensitive client decisions, and policy exceptions with a named owner or qualified manager. The assistant can prepare records, draft replies, and route exceptions under written rules.' }
    ],
    sources: [
      { id: 1, name: 'IBPAP industry homepage', organization: 'IT and Business Process Association of the Philippines', url: 'https://ibpap.org/', accessed: '2026-07-22' },
      { id: 2, name: 'Individuals using the Internet (% of population) — Philippines', organization: 'World Bank', url: 'https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH', published: '2024 data', accessed: '2026-07-22' },
      { id: 3, name: 'Employment in services (% of total employment) — Philippines', organization: 'World Bank', url: 'https://data.worldbank.org/indicator/SL.SRV.EMPL.ZS?locations=PH', published: '2024 data', accessed: '2026-07-22' },
      { id: 4, name: 'School enrollment, tertiary (% gross) — Philippines', organization: 'World Bank', url: 'https://data.worldbank.org/indicator/SE.TER.ENRR?locations=PH', published: '2024 data', accessed: '2026-07-22' },
      { id: 5, name: 'Literacy rate, adult total — Philippines', organization: 'World Bank', url: 'https://data.worldbank.org/indicator/SE.ADT.LITR.ZS?locations=PH', published: '2020 data', accessed: '2026-07-22' },
      { id: 6, name: 'Republic Act No. 10173: Data Privacy Act of 2012', organization: 'The Lawphil Project, Supreme Court E-Library source text', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', published: '2012-08-15', accessed: '2026-07-22' },
      { id: 7, name: 'Republic Act No. 11165: Telecommuting Act', organization: 'The Lawphil Project, Supreme Court E-Library source text', url: 'https://lawphil.net/statutes/repacts/ra2018/ra_11165_2018.html', published: '2018-12-20', accessed: '2026-07-22' },
      { id: 8, name: 'NIST SP 800-53 Rev. 5: Security and Privacy Controls', organization: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', published: '2020-09-23', accessed: '2026-07-22' },
      { id: 9, name: 'NIST SP 800-63-4: Digital Identity Guidelines', organization: 'National Institute of Standards and Technology', url: 'https://pages.nist.gov/800-63-4/', published: '2025-08-01', accessed: '2026-07-22' }
    ],
    related: [
      { title: 'How to budget for a virtual assistant', href: '/blog/virtual-assistant-planning', description: 'Build the whole-role budget before comparing hourly plans. Include tools, management time, and paid leave in the estimate.' },
      { title: 'Assistant onboarding checklist', href: '/blog/assistant-onboarding-checklist', description: 'Turn the selected hire into a safe first-week launch. Set access limits and review points before live work begins.' },
      { title: 'Philippines-based staffing services', href: '/services', description: 'Compare role lanes for executive, operations, support, sales, bookkeeping, and more. All talent offered by the site is based in the Philippines.' },
      { title: 'Current public pricing', href: '/pricing', description: 'Review the site’s $10, $15, and $18 per hour Philippines-based tiers. Check what each tier includes before choosing a plan.' }
    ]
  }
];
export const publicTiers = [
  {name:'Executive Assistants', price:'$10/hour', detail:'Philippines-based support for structured executive and administrative work.'},
  {name:'Senior Assistants', price:'$15/hour', detail:'Experienced Philippines-based support for specialized workflows and coordination.'},
  {name:'C-Suite / Operations', price:'$18/hour', detail:'Philippines-based operational support for complex work lanes and leadership follow-through.'},
] as const;
