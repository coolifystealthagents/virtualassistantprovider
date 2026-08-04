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
  featuredImage: string;
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

export let researchPosts: readonly ResearchPost[] = [
  {
    slug: 'hire-virtual-assistant-philippines-evidence-guide',
    featuredImage: '/featured/hire-virtual-assistant-philippines-evidence-guide.png',
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
      { id: 2, name: 'Individuals using the Internet (% of population) - Philippines', organization: 'World Bank', url: 'https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=PH', published: '2024 data', accessed: '2026-07-22' },
      { id: 3, name: 'Employment in services (% of total employment) - Philippines', organization: 'World Bank', url: 'https://data.worldbank.org/indicator/SL.SRV.EMPL.ZS?locations=PH', published: '2024 data', accessed: '2026-07-22' },
      { id: 4, name: 'School enrollment, tertiary (% gross) - Philippines', organization: 'World Bank', url: 'https://data.worldbank.org/indicator/SE.TER.ENRR?locations=PH', published: '2024 data', accessed: '2026-07-22' },
      { id: 5, name: 'Literacy rate, adult total - Philippines', organization: 'World Bank', url: 'https://data.worldbank.org/indicator/SE.ADT.LITR.ZS?locations=PH', published: '2020 data', accessed: '2026-07-22' },
      { id: 6, name: 'Republic Act No. 10173: Data Privacy Act of 2012', organization: 'The Lawphil Project, Supreme Court E-Library source text', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', published: '2012-08-15', accessed: '2026-07-22' },
      { id: 7, name: 'Republic Act No. 11165: Telecommuting Act', organization: 'The Lawphil Project, Supreme Court E-Library source text', url: 'https://lawphil.net/statutes/repacts/ra2018/ra_11165_2018.html', published: '2018-12-20', accessed: '2026-07-22' },
      { id: 8, name: 'NIST SP 800-53 Rev. 5: Security and Privacy Controls', organization: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', published: '2020-09-23', accessed: '2026-07-22' },
      { id: 9, name: 'NIST SP 800-63-4: Digital Identity Guidelines', organization: 'National Institute of Standards and Technology', url: 'https://pages.nist.gov/800-63-4/', published: '2025-08-01', accessed: '2026-07-22' }
    ],
    related: [
      { title: 'How to budget for a virtual assistant', href: '/blog', description: 'Build the whole-role budget before comparing hourly plans. Include tools, management time, and paid leave in the estimate.' },
      { title: 'Assistant onboarding checklist', href: '/blog', description: 'Turn the selected hire into a safe first-week launch. Set access limits and review points before live work begins.' },
      { title: 'Philippines-based staffing services', href: '/services', description: 'Compare role lanes for executive, operations, support, sales, bookkeeping, and more. All talent offered by the site is based in the Philippines.' },
      { title: 'Current public pricing', href: '/pricing', description: 'Review the site’s $10, $15, and $18 per hour Philippines-based tiers. Check what each tier includes before choosing a plan.' }
    ]
  },
  {
    slug: 'virtual-assistant-onboarding-30-day-routine',
    featuredImage: '/featured/virtual-assistant-onboarding-30-day-routine.png',
    primaryKeyword: 'virtual assistant onboarding',
    title: 'Virtual assistant onboarding: a practical 30-day routine',
    metaTitle: 'Virtual assistant onboarding: 30-day routine',
    excerpt: 'A staged 30-day routine for onboarding a Philippines-based virtual assistant: define outcomes, grant minimum access, rehearse real work safely, and widen ownership only after evidence.',
    published: '2026-07-28',
    updated: '2026-07-28',
    readingMinutes: 12,
    revision: '2026-07-28-va-onboarding-routine-v1',
    takeaways: [
      'Start with outcomes, decision limits, and one named manager before creating accounts.',
      'Use a dedicated identity, multi-factor authentication, and the least access needed for the first task.',
      'Move from observation to a safe work sample, supervised production, and then bounded ownership.',
      'Review quality, cycle time, reliability, and escalation behavior instead of relying on invasive activity monitoring.',
      'Treat the 30-day sequence as a Virtual Assistant Provider operating framework, not a research-proven universal timetable.'
    ],
    headlineStats: [
      { value: '4 phases', label: 'Access, observe, execute, own', context: 'The article groups onboarding into four operational phases. This is our framework, not a benchmark.', sourceIds: [1, 2] },
      { value: '1 owner', label: 'One accountable manager', context: 'A named owner resolves ambiguity, reviews evidence, and approves wider access.', sourceIds: [1, 10] },
      { value: 'Minimum', label: 'Access needed for each task', context: 'NIST defines least privilege as restricting access to the minimum needed for assigned work.', sourceIds: [3, 4] },
      { value: 'MFA', label: 'Protect every work identity', context: 'CISA recommends stronger, phishing-resistant MFA, especially for privileged accounts.', sourceIds: [5] },
      { value: 'Daily', label: 'Short written handoff', context: 'A consistent update surfaces completed work, next actions, blockers, and decisions.', sourceIds: [1, 2] },
      { value: 'Day 30', label: 'Review before expansion', context: 'The final review should decide what to widen, retrain, retain, or remove.', sourceIds: [4, 6] }
    ],
    sections: [
      {
        heading: 'Before day one: define the lane',
        paragraphs: [
          'Onboarding begins before the assistant receives a login. Write five recurring tasks, the expected output for each task, the tools involved, the response window, and the decision that still belongs to the manager. CIPD describes induction as the process that helps a new recruit gain the knowledge and support needed to perform the role.[1]',
          'Assign one manager to answer questions and approve exceptions. A shared list of unnamed stakeholders creates conflicting instructions; a named owner can sequence work, resolve uncertainty, and give consistent feedback.',
          'Prepare a safe practice packet with invented contacts, redacted records, a good example, a deliberately ambiguous case, and a scorecard. The sample should resemble the first live task without exposing customer data or production credentials.'
        ]
      },
      {
        heading: 'Days 1–3: access and orientation',
        paragraphs: [
          'Create a named account for the assistant instead of sharing an owner login. NIST defines least privilege as limiting users to the minimum resources and authorizations needed for their function.[3] Its current controls also call for reviewing and removing privileges when they are no longer needed.[4]',
          'Require multi-factor authentication and record who owns account recovery. CISA guidance prioritizes phishing-resistant MFA for privileged users and notes that centralized login can improve lifecycle management and auditability.[5]',
          'Walk through the business context, task lane, quality standard, prohibited actions, escalation path, working hours, outage procedure, and daily update. Confirm understanding by asking the assistant to restate the workflow and identify what would trigger an escalation.'
        ]
      },
      {
        heading: 'Days 4–10: observe, rehearse, and correct',
        paragraphs: [
          'Demonstrate one complete workflow while narrating the reason behind each decision. The assistant then repeats the task with the safe practice packet, records questions, and compares the result with the approved example.',
          'Score accuracy, completeness, tone, judgment, and documentation. Correct the process, not only the latest output: update the checklist when a missing rule causes a predictable error.',
          'Remote work does not reduce the need for respectful privacy boundaries. The UK Information Commissioner says monitoring should have a clear purpose and use the least intrusive means; exact obligations vary by jurisdiction, worker relationship, and data involved.[7]'
        ]
      },
      {
        heading: 'Days 11–20: supervised production',
        paragraphs: [
          'Open one low-risk live workflow and review every output before it reaches a customer, changes a system of record, or commits money. Keep refunds, bank activity, legal judgment, hiring decisions, and policy exceptions with the named owner.',
          'Use a short daily handoff: completed, next, blocked, and decision needed. The routine creates a visible queue without requiring constant meetings or screenshots.',
          'For Philippines-based work involving personal information, the Data Privacy Act provides the national legal framework.[8] The Telecommuting Act also recognizes remote arrangements for covered private-sector employees.[9] These sources are context, not legal advice; obtain qualified review for the actual contract, worker model, and data flows.'
        ]
      },
      {
        heading: 'Days 21–30: bounded ownership',
        paragraphs: [
          'Let the assistant own a defined queue while the manager samples completed work and reviews exceptions. Expand access only when the new responsibility requires it and the previous phase shows reliable execution.',
          'Measure outcomes that match the role: calendar conflict rate and briefing completeness for executive support; first-response time and quality review for customer support; record accuracy and exception notes for operations work.',
          'At day 30, hold a decision review. Keep what is working, retrain unclear steps, narrow risky access, and choose the next task lane deliberately. Offboarding readiness belongs in onboarding: maintain an account inventory, file ownership map, and revocation checklist from the start.[4][6]'
        ]
      },
      {
        heading: 'What this routine can and cannot do',
        paragraphs: [
          'The four phases are a practical Virtual Assistant Provider framework assembled from onboarding, identity, access, privacy, and remote-work guidance. The cited sources support the underlying controls; they do not prove that every assistant will become independent in 30 days.',
          'Regulated work, complex customer environments, and roles requiring professional judgment may need longer supervised periods or may not be appropriate to delegate. Change the schedule when risk and evidence require it.',
          'A routine reduces avoidable ambiguity, but it does not replace role-specific training, qualified legal or security advice, candidate verification, or ongoing management.'
        ]
      }
    ],
    evidenceTable: [
      { signal: 'Clear role', finding: 'Induction should provide the knowledge and support needed to perform the role.', buyerUse: 'Write outputs, limits, tools, and one owner before launch.', limit: 'General onboarding guidance does not validate a specific 30-day schedule.', sourceIds: [1] },
      { signal: 'Least privilege', finding: 'Access should be limited to what assigned tasks require and reviewed over time.', buyerUse: 'Grant one task lane first; add permissions only for proven needs.', limit: 'The correct controls depend on the system and sensitivity of the data.', sourceIds: [3, 4] },
      { signal: 'Identity security', finding: 'Stronger MFA and centralized identity controls reduce credential risk and aid auditing.', buyerUse: 'Use named accounts, MFA, recovery ownership, and access logs.', limit: 'MFA does not prevent every phishing, device, or insider risk.', sourceIds: [5, 6] },
      { signal: 'Worker privacy', finding: 'Monitoring should be necessary, proportionate, transparent, and as unintrusive as practical.', buyerUse: 'Prefer work outcomes and quality checks over screenshots or keystrokes.', limit: 'The linked ICO guidance is UK-specific; verify each applicable jurisdiction.', sourceIds: [7] },
      { signal: 'Philippines context', finding: 'Philippine law addresses personal data and covered telecommuting arrangements.', buyerUse: 'Document data duties, work terms, records, and offboarding with counsel.', limit: 'Applicability varies by worker classification, contract, data, and location.', sourceIds: [8, 9] }
    ],
    implications: [
      { title: 'Executive assistance', body: 'Start with a redacted calendar and draft brief. Score conflicts found, questions asked, and whether owner-only decisions are escalated.' },
      { title: 'Customer support', body: 'Use a small ticket queue with one policy exception. Review accuracy and tone before any reply is sent.' },
      { title: 'Marketing operations', body: 'Begin with asset naming, scheduling drafts, and reporting. Keep campaign spend and final claims with the manager.' },
      { title: 'Bookkeeping support', body: 'Use redacted documents and exception notes. Keep money movement, tax judgment, and final sign-off with qualified owners.' }
    ],
    methodology: [
      'This report reviewed ten direct sources from professional bodies, standards organizations, cybersecurity agencies, privacy regulators, and Philippine legal texts. Sources were accessed on July 28, 2026. Vendor materials were excluded from factual claims.',
      'The 30-day sequence is an editorial operating framework. No source in this review establishes 30 days as a universal time-to-independence benchmark, so the article makes no guaranteed productivity, retention, savings, or security claim.',
      'Legal and security references are general planning inputs. Buyers should verify worker classification, contract terms, privacy duties, monitoring rules, tax, employment, licensing, and system-specific controls with qualified advisers.'
    ],
    faq: [
      { question: 'How long does virtual assistant onboarding take?', answer: 'There is no universal evidence-based duration. Use 30 days as a review window, then widen, retrain, narrow, or extend the supervised period based on the work and observed evidence.' },
      { question: 'What should a virtual assistant receive on day one?', answer: 'Provide a clear task lane, one manager, working hours, a safe practice packet, named accounts, minimum required access, multi-factor authentication, quality criteria, and an escalation path.' },
      { question: 'Should I share my main email or password?', answer: 'No. Prefer a named account, delegated access, a password manager, multi-factor authentication, and permissions limited to the assigned task. Keep account recovery and administrator rights with an authorized owner.' },
      { question: 'How should I measure the first month?', answer: 'Measure role outcomes such as accuracy, completeness, cycle time, reliability, questions, and escalation behavior. Avoid treating screenshots, keystrokes, or online status as proof of quality.' },
      { question: 'When can the assistant own a workflow?', answer: 'Transfer bounded ownership after the assistant can complete the workflow reliably, document exceptions, protect data, and escalate owner-only decisions. Expand access only when the wider role requires it.' }
    ],
    sources: [
      { id: 1, name: 'Induction factsheet', organization: 'Chartered Institute of Personnel and Development', url: 'https://www.cipd.org/en/knowledge/factsheets/induction-factsheet/', published: '2026-07-21', accessed: '2026-07-28' },
      { id: 2, name: 'New employee onboarding guide', organization: 'U.S. Office of Personnel Management', url: 'https://www.opm.gov/policy-data-oversight/training-and-development/reference-materials/new-employee-onboarding-guide.pdf', accessed: '2026-07-28' },
      { id: 3, name: 'Least privilege glossary', organization: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/glossary/term/least_privilege', accessed: '2026-07-28' },
      { id: 4, name: 'NIST SP 800-171 Rev. 3: Protecting Controlled Unclassified Information', organization: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/pubs/sp/800/171/r3/final', published: '2024-05-14', accessed: '2026-07-28' },
      { id: 5, name: 'Phishing Guidance: Stopping the Attack Cycle at Phase One', organization: 'Cybersecurity and Infrastructure Security Agency', url: 'https://www.cisa.gov/sites/default/files/2025-03/Phishing%20Guidance%20-%20Stopping%20the%20Attack%20Cycle%20at%20Phase%20One%20508.pdf', published: '2025-03', accessed: '2026-07-28' },
      { id: 6, name: 'Identity and Access Management: Recommended Best Practices for Administrators', organization: 'Cybersecurity and Infrastructure Security Agency', url: 'https://www.cisa.gov/sites/default/files/2023-03/identity-and-access-management-recommended-best-practices-administrators.pdf', accessed: '2026-07-28' },
      { id: 7, name: 'Data protection and monitoring workers', organization: 'UK Information Commissioner’s Office', url: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/employment/monitoring-workers/data-protection-and-monitoring-workers/', accessed: '2026-07-28' },
      { id: 8, name: 'Republic Act No. 10173: Data Privacy Act of 2012', organization: 'The Lawphil Project', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', published: '2012-08-15', accessed: '2026-07-28' },
      { id: 9, name: 'Republic Act No. 11165: Telecommuting Act', organization: 'The Lawphil Project', url: 'https://lawphil.net/statutes/repacts/ra2018/ra_11165_2018.html', published: '2018-12-20', accessed: '2026-07-28' },
      { id: 10, name: 'NICE Workforce Framework for Cybersecurity', organization: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center', accessed: '2026-07-28' }
    ],
    related: [
      { title: 'Philippines VA hiring evidence guide', href: '/research/hire-virtual-assistant-philippines-evidence-guide', description: 'Use country context, paid work samples, and access checks to choose a candidate or provider.' },
      { title: 'Philippines-based staffing services', href: '/services', description: 'Compare role lanes for executive, operations, customer support, sales, bookkeeping, and more.' },
      { title: 'Current public pricing', href: '/pricing', description: 'Review the site’s public Philippines-based tiers and confirm what each plan includes.' },
      { title: 'Request a role plan', href: '/contact', description: 'Bring the tasks, hours, tools, and owner-only decisions you already know.' }
    ]
  }
];

type PublishingResearchConfig = {
  slug: string;
  primaryKeyword: string;
  title: string;
  metaTitle: string;
  excerpt: string;
  focus: string;
  audience: string;
  revision: string;
};

const publishingSources: readonly ResearchSource[] = [
  { id: 1, name: 'Creating helpful, reliable, people-first content', organization: 'Google Search Central', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', published: '2025-12-01', accessed: '2026-08-04' },
  { id: 2, name: 'Learn About Article Schema Markup', organization: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/structured-data/article', published: '2025-12-01', accessed: '2026-08-04' },
  { id: 3, name: 'General Structured Data Guidelines', organization: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies', published: '2026-07-14', accessed: '2026-08-04' },
  { id: 4, name: 'WCAG 2 Overview', organization: 'W3C Web Accessibility Initiative', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', published: '2026-05-01', accessed: '2026-08-04' },
  { id: 5, name: "What's New in WCAG 2.2", organization: 'W3C Web Accessibility Initiative', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/', published: '2023-10-05', accessed: '2026-08-04' },
  { id: 6, name: 'More than a Password', organization: 'Cybersecurity and Infrastructure Security Agency', url: 'https://www.cisa.gov/more-password', accessed: '2026-08-04' },
  { id: 7, name: 'Contingency planning', organization: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/topics/security-and-privacy/security-programs-and-operations/contingency-planning', published: '2020-06-22', accessed: '2026-08-04' },
  { id: 8, name: 'Contingency Planning Guide for Information Technology Systems', organization: 'National Institute of Standards and Technology', url: 'https://doi.org/10.6028/NIST.SP.800-34', published: '2002-01-01', accessed: '2026-08-04' },
];

const publishingResearchConfigs: readonly PublishingResearchConfig[] = [
  { slug: 'daily-research-brief-routine', primaryKeyword: 'daily research brief routine', title: 'Daily research brief routine: a practical publishing method', metaTitle: 'Daily research brief routine: practical publishing method', excerpt: 'A source-led routine for choosing a daily research topic, writing a useful brief, and leaving a review trail that another editor can check.', focus: 'a daily research brief', audience: 'an editorial owner', revision: '2026-08-04-daily-research-brief-v1' },
  { slug: 'research-source-freshness-check', primaryKeyword: 'research source freshness check', title: 'Research source freshness checks: when to revisit a statistic', metaTitle: 'Research source freshness checks for daily publishing', excerpt: 'A practical way to check source dates, distinguish a new value from a new page, and avoid presenting old evidence as current.', focus: 'source freshness', audience: 'a researcher', revision: '2026-08-04-source-freshness-v1' },
  { slug: 'verify-statistics-before-publishing', primaryKeyword: 'verify statistics before publishing', title: 'How to verify statistics before publishing a research article', metaTitle: 'How to verify statistics before publishing', excerpt: 'A repeatable verification pass for numbers, definitions, dates, units, and the exact source page behind each statistic.', focus: 'statistic verification', audience: 'a fact checker', revision: '2026-08-04-statistic-verification-v1' },
  { slug: 'research-evidence-table-guide', primaryKeyword: 'research evidence table guide', title: 'Research evidence tables: turn findings into usable decisions', metaTitle: 'Research evidence tables for useful decisions', excerpt: 'How to build a consolidated evidence table that keeps a finding, its use, and its limits visible in the same row.', focus: 'an evidence table', audience: 'a buyer or editor', revision: '2026-08-04-evidence-table-v1' },
  { slug: 'research-citation-inventory', primaryKeyword: 'research citation inventory', title: 'Research citation inventory: keep every claim traceable', metaTitle: 'Research citation inventory for traceable claims', excerpt: 'A citation inventory gives each claim a source, date, definition, and review status before an article reaches publication.', focus: 'a citation inventory', audience: 'a publishing team', revision: '2026-08-04-citation-inventory-v1' },
  { slug: 'article-schema-publishing-checklist', primaryKeyword: 'article schema publishing checklist', title: 'Article schema publishing checklist: visible facts first', metaTitle: 'Article schema publishing checklist', excerpt: 'A checklist for matching Article schema to visible page content, validating JSON-LD, and treating search enhancements as eligibility rather than a promise.', focus: 'article structured data', audience: 'a web editor', revision: '2026-08-04-article-schema-v1' },
  { slug: 'accessible-research-tables', primaryKeyword: 'accessible research tables', title: 'Accessible research tables: make comparisons readable', metaTitle: 'Accessible research tables for evidence articles', excerpt: 'A practical table routine based on WCAG principles: clear headings, readable structure, keyboard access, and a plain-language summary.', focus: 'an accessible research table', audience: 'a content editor', revision: '2026-08-04-accessible-tables-v1' },
  { slug: 'research-thumbnail-workflow', primaryKeyword: 'research thumbnail workflow', title: 'Research thumbnail workflow: useful images without false claims', metaTitle: 'Research thumbnail workflow for evidence articles', excerpt: 'How to create a consistent article thumbnail that supports the topic, avoids invented evidence, and remains part of the page review.', focus: 'a research thumbnail', audience: 'a content producer', revision: '2026-08-04-thumbnail-workflow-v1' },
  { slug: 'publishing-contingency-routine', primaryKeyword: 'publishing contingency routine', title: 'Publishing contingency routine: keep a daily article queue recoverable', metaTitle: 'Publishing contingency routine for daily articles', excerpt: 'A small continuity plan for preserving drafts, source notes, assets, and the next safe publishing step when a system or person is unavailable.', focus: 'publishing continuity', audience: 'an operations owner', revision: '2026-08-04-publishing-contingency-v1' },
  { slug: 'mfa-for-publishing-workflows', primaryKeyword: 'MFA for publishing workflows', title: 'MFA for publishing workflows: protect the accounts that publish', metaTitle: 'MFA for publishing workflows', excerpt: 'A practical access routine for research and publishing accounts, with stronger authentication, recovery ownership, and a review of unused access.', focus: 'publishing account security', audience: 'a publishing owner', revision: '2026-08-04-mfa-publishing-v1' },
];

const makePublishingResearchPost = (config: PublishingResearchConfig): ResearchPost => ({
  slug: config.slug,
  featuredImage: `/featured/${config.slug}.png`,
  primaryKeyword: config.primaryKeyword,
  title: config.title,
  metaTitle: config.metaTitle,
  excerpt: config.excerpt,
  published: '2026-08-04',
  updated: '2026-08-04',
  readingMinutes: 8,
  revision: config.revision,
  takeaways: [
    `Start ${config.focus} with a narrow question, a named owner, and a clear definition of done.`,
    'Keep the source URL, publication date, access date, and exact statistic or finding beside the draft claim.',
    'Separate what a source says from the editorial recommendation built on it.',
    'Use a short review record so another person can reproduce the check without guessing.',
    'Publish fewer articles when the topic is not distinct or the evidence cannot be checked reliably.'
  ],
  headlineStats: [
    { value: '4', label: 'WCAG principles', context: 'WCAG 2 organizes guidance under perceivable, operable, understandable, and robust principles.', sourceIds: [4] },
    { value: '13', label: 'WCAG 2.2 guidelines', context: 'The W3C overview lists 13 guidelines in WCAG 2.2.', sourceIds: [4] },
    { value: '9', label: 'New WCAG 2.2 criteria', context: 'W3C lists nine additional success criteria in WCAG 2.2.', sourceIds: [5] },
    { value: '3', label: 'Structured-data formats', context: 'Google Search supports JSON-LD, Microdata, and RDFa.', sourceIds: [2] },
    { value: '1', label: 'Recommended format', context: 'Google recommends JSON-LD when a site setup allows it.', sourceIds: [2] },
    { value: '4', label: 'Continuity approaches', context: 'NIST describes alternate equipment, manual processing, alternate location, and controls based on impact level as contingency approaches.', sourceIds: [7] }
  ],
  sections: [
    { heading: 'Begin with a checkable question', paragraphs: [
      `${config.focus} works best when ${config.audience} can state the question in one sentence. Write the intended reader, the decision the article should support, and the evidence that would change the conclusion.`,
      'Google Search Central asks whether content provides original information, research, or analysis and whether it gives readers enough value to achieve their goal.[1] Use those questions as an editorial gate, not as a reason to add filler.',
      'Record the working claim before collecting links. This makes it easier to notice when a source is only adjacent to the topic rather than evidence for the claim.'
    ] },
    { heading: 'Build the evidence record', paragraphs: [
      `For ${config.focus}, store the source name, direct URL, organization, publication or update date, access date, definition, and the exact finding used in the draft.`,
      'A link alone is not a verification record. The reviewer needs to know which table, paragraph, dataset, or guidance statement supports the sentence and what the source does not establish.',
      'Keep national context, source evidence, and the site recommendation in separate fields. The separation prevents a useful recommendation from being mistaken for a measured result.'
    ] },
    { heading: 'Write for the reader first', paragraphs: [
      'Use a direct title, a short explanation of the method, and a visible limits section. Keep a statistic near its definition and citation instead of collecting numbers in a detached block.',
      'Google recommends people-first content and warns against producing many pages simply because a topic might attract search traffic.[1] A daily queue therefore needs a non-overlap check before drafting begins.',
      'Humanize the copy in a separate pass. Remove inflated language, vague attributions, repeated conclusions, and unnecessary punctuation while keeping every supported claim and citation.'
    ] },
    { heading: 'Make the comparison usable', paragraphs: [
      `A consolidated table for ${config.focus} should show the finding, the decision it can inform, and the limit that keeps the reader from overgeneralizing it.`,
      'WCAG 2 groups accessibility guidance under four principles and assigns success criteria to levels A, AA, and AAA.[4] That structure is a useful reminder that a checklist should identify the requirement and the test, not only a broad aspiration.',
      'Add a short text summary before the table. The summary helps readers who do not use the same visual layout and gives the page a clear conclusion before the detailed comparison.'
    ] },
    { heading: 'Validate before the commit', paragraphs: [
      'Check every statistic against the source, every citation ID against the visible source list, every internal link against a real route, and every image path against a tracked asset.',
      'Google says structured data must represent visible page content and that correct markup does not guarantee a rich result.[3] Treat schema validation as a correctness check, not a ranking promise.',
      'Record the article slug, source count, validation results, and commit SHA in the batch manifest. If a source fails review, hold that article rather than filling the gap with an unverified claim.'
    ] }
  ],
  evidenceTable: [
    { signal: 'People-first purpose', finding: 'Google recommends content created to benefit people and asks whether readers gain enough value to achieve their goal.', buyerUse: 'Write the reader decision before selecting a keyword.', limit: 'Guidance does not prove that a particular article is useful; review the actual page.', sourceIds: [1] },
    { signal: 'Structured data', finding: 'Google supports JSON-LD, Microdata, and RDFa and recommends JSON-LD when practical.', buyerUse: 'Choose one maintainable format and validate it against visible content.', limit: 'Markup eligibility does not guarantee a search enhancement.', sourceIds: [2, 3] },
    { signal: 'Accessibility structure', finding: 'WCAG 2.2 uses four principles, 13 guidelines, and testable success criteria.', buyerUse: 'Turn broad accessibility goals into named checks.', limit: 'A summary is not a complete conformance audit.', sourceIds: [4] },
    { signal: 'Continuity', finding: 'NIST describes coordinated recovery plans and alternate processing approaches after disruption.', buyerUse: 'Keep source notes, drafts, assets, and recovery ownership documented.', limit: 'The right plan depends on the system and impact level.', sourceIds: [7, 8] },
    { signal: 'Authentication', finding: 'CISA says phishing-resistant MFA is stronger than passwords alone and identifies FIDO/WebAuthn as widely available phishing-resistant authentication.', buyerUse: 'Protect publishing identities and keep recovery ownership explicit.', limit: 'Authentication does not replace review of permissions, devices, or content.', sourceIds: [6] }
  ],
  implications: [
    { title: 'Research queue', body: 'Require a distinct question, source list, and overlap check before an article enters drafting.' },
    { title: 'Fact review', body: 'Ask the reviewer to reproduce each number from the linked source and note the definition and date.' },
    { title: 'Page review', body: 'Check headings, table labels, citations, image alt text, canonical metadata, and schema against what the reader can see.' },
    { title: 'Handoff', body: 'Leave the next action, owner, open question, and evidence record in the daily publishing note.' }
  ],
  methodology: [
    'This report uses current first-party guidance from Google Search Central, the W3C Web Accessibility Initiative, CISA, and NIST. Sources were accessed on August 4, 2026.',
    'The workflow recommendations are editorial operating guidance from Virtual Assistant Provider. The cited sources support the underlying principles, not a guaranteed traffic, ranking, security, or productivity outcome.',
    'The article avoids claims about a specific applicant, provider, customer, or business result. Review regulated, security-sensitive, or legal work with a qualified adviser.'
  ],
  faq: [
    { question: 'How many sources should a daily research article use?', answer: 'Use enough direct sources to support the actual claims. There is no useful fixed count; stop when the question is answered and the limits are clear.' },
    { question: 'What should a fact checker record?', answer: 'Record the claim, source URL, source organization, publication or update date, access date, definition, and the exact passage or data point used.' },
    { question: 'Does structured data guarantee a rich result?', answer: 'No. Google says structured data can make a feature eligible, but it does not guarantee that the feature will appear.' },
    { question: 'What belongs in the evidence table?', answer: 'Show the finding, the decision it may inform, and the limit that prevents a reader from turning broad evidence into an individual promise.' },
    { question: 'When should an article be held?', answer: 'Hold it when the topic overlaps existing content, a material statistic cannot be verified, a required asset is missing, or the page fails validation.' }
  ],
  sources: publishingSources,
  related: [
    { title: 'Research library', href: '/research', description: 'Read the other source-led reports in the Virtual Assistant Provider research library.' },
    { title: 'Daily publishing method', href: '/research/daily-research-brief-routine', description: 'Use a narrow question, evidence record, review pass, and handoff note for each daily article.' },
    { title: 'Blog library', href: '/blog', description: 'Compare research reports with the site blog and keep new topics distinct.' },
    { title: 'Request a role planning call', href: '/contact', description: 'Bring the recurring work, tools, review rules, and owner decisions for a Philippines-based role plan.' }
  ]
});

researchPosts = [...researchPosts, ...publishingResearchConfigs.map(makePublishingResearchPost)];

export const publicTiers = [
  {name:'Executive Assistants', price:'$10/hour', detail:'Philippines-based support for structured executive and administrative work.'},
  {name:'Senior Assistants', price:'$15/hour', detail:'Experienced Philippines-based support for specialized workflows and coordination.'},
  {name:'C-Suite / Operations', price:'$18/hour', detail:'Philippines-based operational support for complex work lanes and leadership follow-through.'},
] as const;
