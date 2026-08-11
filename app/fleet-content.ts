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
  published?: string;
  updated?: string;
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
  { slug: 'research-topic-overlap-check', primaryKeyword: 'research topic overlap check', title: 'Research topic overlap checks: choose a distinct daily article', metaTitle: 'Research topic overlap checks for daily publishing', excerpt: 'A practical comparison pass for checking existing blog and research pages before a new daily article enters the queue.', focus: 'a topic overlap check', audience: 'an editorial owner', revision: '2026-08-05-topic-overlap-v1' },
  { slug: 'research-statistic-definition-check', primaryKeyword: 'research statistic definition check', title: 'Research statistic definition checks: read the measure correctly', metaTitle: 'Research statistic definition checks', excerpt: 'How to keep a statistic tied to its population, unit, period, and definition before it becomes a headline claim.', focus: 'a statistic definition check', audience: 'a fact checker', revision: '2026-08-05-statistic-definition-v1' },
  { slug: 'research-source-access-log', primaryKeyword: 'research source access log', title: 'Research source access logs: leave a review trail', metaTitle: 'Research source access logs for evidence articles', excerpt: 'A simple record of source URLs, access dates, versions, and review notes for articles that need to be checked again.', focus: 'a source access log', audience: 'a publishing team', revision: '2026-08-05-source-access-v1' },
  { slug: 'research-claim-evidence-map', primaryKeyword: 'research claim evidence map', title: 'Research claim evidence maps: connect sentences to sources', metaTitle: 'Research claim evidence maps', excerpt: 'A claim-to-source map helps an editor see which sentences are supported, qualified, or still waiting for evidence.', focus: 'a claim evidence map', audience: 'a research editor', revision: '2026-08-05-claim-map-v1' },
  { slug: 'research-related-content-links', primaryKeyword: 'research related content links', title: 'Research related-content links: build a useful next step', metaTitle: 'Research related-content links', excerpt: 'How to choose related research and blog links that extend the reader journey without pretending two pages answer the same question.', focus: 'related content links', audience: 'a web editor', revision: '2026-08-05-related-links-v1' },
  { slug: 'research-article-metadata-review', primaryKeyword: 'research article metadata review', title: 'Research article metadata review: keep page facts consistent', metaTitle: 'Research article metadata review', excerpt: 'A review of titles, descriptions, dates, canonical URLs, images, and visible headings before a research article is committed.', focus: 'article metadata', audience: 'a web editor', revision: '2026-08-05-metadata-review-v1' },
  { slug: 'research-table-summary-method', primaryKeyword: 'research table summary method', title: 'Research table summaries: explain the comparison before the grid', metaTitle: 'Research table summaries for evidence articles', excerpt: 'A short plain-language summary makes a consolidated evidence table easier to understand before readers compare every row.', focus: 'a table summary', audience: 'a content editor', revision: '2026-08-05-table-summary-v1' },
  { slug: 'research-source-reliability-review', primaryKeyword: 'research source reliability review', title: 'Research source reliability reviews: choose evidence with care', metaTitle: 'Research source reliability reviews', excerpt: 'A source review routine for checking publisher identity, method, date, scope, and whether a page directly supports the claim.', focus: 'source reliability', audience: 'a researcher', revision: '2026-08-05-source-reliability-v1' },
  { slug: 'research-article-handoff-note', primaryKeyword: 'research article handoff note', title: 'Research article handoff notes: make the next review obvious', metaTitle: 'Research article handoff notes', excerpt: 'A compact handoff note records what is complete, what remains open, and which evidence or decision the next person owns.', focus: 'an article handoff note', audience: 'an operations owner', revision: '2026-08-05-handoff-note-v1' },
  { slug: 'research-publishing-exception-log', primaryKeyword: 'research publishing exception log', title: 'Research publishing exception logs: record why work stopped', metaTitle: 'Research publishing exception logs', excerpt: 'A clear exception log explains when an article is held for overlap, weak evidence, missing assets, or a failed validation check.', focus: 'a publishing exception log', audience: 'a publishing owner', revision: '2026-08-05-exception-log-v1' },
  { slug: 'research-source-version-check', primaryKeyword: 'research source version check', title: 'Research source version checks: compare the evidence you actually used', metaTitle: 'Research source version checks for evidence articles', excerpt: 'A source-version check helps an editor confirm that a cited page, document, or dataset is the one that supports the published claim.', focus: 'a source version check', audience: 'a research editor', revision: '2026-08-07-source-version-v1' },
  { slug: 'research-methodology-limitations', primaryKeyword: 'research methodology limitations', title: 'Research methodology limitations: show what the evidence cannot prove', metaTitle: 'Research methodology limitations for useful articles', excerpt: 'A visible limitations pass keeps readers from turning a measured finding into a broader promise than the method supports.', focus: 'methodology limitations', audience: 'a report writer', revision: '2026-08-07-methodology-limitations-v1' },
  { slug: 'research-data-definition-audit', primaryKeyword: 'research data definition audit', title: 'Research data definition audits: keep measures tied to meaning', metaTitle: 'Research data definition audits', excerpt: 'A definition audit records the population, unit, period, and scope behind each data point before it becomes a headline.', focus: 'a data definition audit', audience: 'a fact checker', revision: '2026-08-07-data-definition-v1' },
  { slug: 'research-internal-link-review', primaryKeyword: 'research internal link review', title: 'Research internal-link reviews: connect readers without blurring topics', metaTitle: 'Research internal-link reviews', excerpt: 'A focused internal-link review connects a report to useful next steps while preserving clear ownership of each question.', focus: 'an internal-link review', audience: 'a web editor', revision: '2026-08-07-internal-links-v1' },
  { slug: 'research-citation-count-audit', primaryKeyword: 'research citation count audit', title: 'Research citation-count audits: make the source list match the claims', metaTitle: 'Research citation-count audits', excerpt: 'A citation-count audit checks that every visible source is used appropriately and every material claim has a traceable reference.', focus: 'a citation-count audit', audience: 'a publishing owner', revision: '2026-08-07-citation-count-v1' },
  { slug: 'research-question-design', primaryKeyword: 'research question design', title: 'Research question design: narrow the decision before collecting sources', metaTitle: 'Research question design for evidence articles', excerpt: 'A well-scoped research question gives a daily article a clear reader, decision, evidence threshold, and stopping rule.', focus: 'a research question', audience: 'an editorial owner', revision: '2026-08-07-question-design-v1' },
  { slug: 'research-editorial-qa', primaryKeyword: 'research editorial quality assurance', title: 'Research editorial QA: run a consistent final review', metaTitle: 'Research editorial QA checklist', excerpt: 'A compact editorial QA pass catches mismatched claims, citations, metadata, links, images, and limits before publication.', focus: 'editorial quality assurance', audience: 'a final reviewer', revision: '2026-08-07-editorial-qa-v1' },
  { slug: 'research-source-date-audit', primaryKeyword: 'research source date audit', title: 'Research source-date audits: distinguish new evidence from a new webpage', metaTitle: 'Research source-date audits', excerpt: 'A source-date audit separates publication, update, access, and data-collection dates so readers can judge evidence freshness.', focus: 'a source-date audit', audience: 'a researcher', revision: '2026-08-07-source-date-v1' },
  { slug: 'research-evidence-gap-log', primaryKeyword: 'research evidence gap log', title: 'Research evidence-gap logs: make unresolved claims visible', metaTitle: 'Research evidence-gap logs', excerpt: 'An evidence-gap log records the claims that still need support and keeps them from silently becoming publication copy.', focus: 'an evidence-gap log', audience: 'a research team', revision: '2026-08-07-evidence-gap-v1' },
  { slug: 'research-article-revision-log', primaryKeyword: 'research article revision log', title: 'Research article revision logs: preserve why a claim changed', metaTitle: 'Research article revision logs', excerpt: 'A revision log links material changes to evidence, review decisions, and owners so the final article remains explainable.', focus: 'an article revision log', audience: 'an editorial owner', revision: '2026-08-07-revision-log-v1' },
  { slug: 'research-source-triangulation', primaryKeyword: 'research source triangulation', title: 'Research source triangulation: test a finding from more than one angle', metaTitle: 'Research source triangulation for evidence articles', excerpt: 'A source-triangulation routine compares independent evidence, definitions, and limits before a finding becomes a confident conclusion.', focus: 'source triangulation', audience: 'a research editor', revision: '2026-08-08-source-triangulation-v1' },
  { slug: 'research-editorial-stop-rule', primaryKeyword: 'research editorial stop rule', title: 'Research editorial stop rules: know when the evidence is enough', metaTitle: 'Research editorial stop rules', excerpt: 'A stop rule keeps a daily research article from expanding forever or publishing before its material claims are supported.', focus: 'an editorial stop rule', audience: 'an editorial owner', revision: '2026-08-08-editorial-stop-rule-v1' },
  { slug: 'research-data-lineage', primaryKeyword: 'research data lineage', title: 'Research data lineage: record where each number came from', metaTitle: 'Research data lineage for research articles', excerpt: 'A simple lineage record connects a headline number to its dataset, transformation, date, and final sentence.', focus: 'data lineage', audience: 'a fact checker', revision: '2026-08-08-data-lineage-v1' },
  { slug: 'research-citation-placement', primaryKeyword: 'research citation placement', title: 'Research citation placement: put evidence beside the claim', metaTitle: 'Research citation placement for evidence articles', excerpt: 'Good citation placement lets readers and reviewers see which source supports a sentence without searching through a detached list.', focus: 'citation placement', audience: 'a content editor', revision: '2026-08-08-citation-placement-v1' },
  { slug: 'research-alt-text-evidence-images', primaryKeyword: 'research image alt text', title: 'Research image alt text: describe evidence visuals accurately', metaTitle: 'Research image alt text for evidence articles', excerpt: 'A practical alt-text pass describes what an image contributes, avoids inventing findings, and keeps decorative thumbnails out of the evidence chain.', focus: 'research image alt text', audience: 'a web editor', revision: '2026-08-08-alt-text-v1' },
  { slug: 'research-key-stats-design', primaryKeyword: 'research key stats design', title: 'Research key stats design: show numbers with their limits', metaTitle: 'Research key stats design for evidence pages', excerpt: 'A key-stats block can orient readers when every number keeps its unit, population, period, definition, and source close by.', focus: 'a key-stats block', audience: 'a report writer', revision: '2026-08-08-key-stats-v1' },
  { slug: 'research-related-research-map', primaryKeyword: 'research related content map', title: 'Research related-content maps: choose the next useful report', metaTitle: 'Research related-content maps', excerpt: 'A related-content map separates adjacent questions, shared evidence, and the next decision so internal links add context instead of repetition.', focus: 'a related-content map', audience: 'a web editor', revision: '2026-08-08-related-map-v1' },
  { slug: 'research-batch-manifest', primaryKeyword: 'research publishing batch manifest', title: 'Research batch manifests: make a daily publication set auditable', metaTitle: 'Research batch manifests for daily publishing', excerpt: 'A batch manifest records the selected target, accepted slugs, validation checks, and final commit so a publication run can be reviewed later.', focus: 'a research batch manifest', audience: 'a publishing owner', revision: '2026-08-08-batch-manifest-v1' },
  { slug: 'research-reviewer-independence', primaryKeyword: 'research reviewer independence', title: 'Research reviewer independence: reduce confirmation bias', metaTitle: 'Research reviewer independence for evidence articles', excerpt: 'A reviewer who did not write the claim can catch unsupported leaps, citation drift, and limits that the first draft missed.', focus: 'reviewer independence', audience: 'an editorial owner', revision: '2026-08-08-reviewer-independence-v1' },
  { slug: 'research-article-refresh', primaryKeyword: 'research article refresh workflow', title: 'Research article refresh workflows: update evidence without rewriting blindly', metaTitle: 'Research article refresh workflows', excerpt: 'A refresh workflow checks whether evidence, definitions, links, metadata, and limits still match before an older report is updated.', focus: 'an article refresh', audience: 'a research editor', revision: '2026-08-08-article-refresh-v1' },
  { slug: 'operations-assistant-daily-workflow', primaryKeyword: 'operations assistant daily workflow', title: 'Operations assistant daily workflows: evidence for a reliable handoff', metaTitle: 'Operations assistant daily workflows: evidence guide', excerpt: 'A source-led guide to designing an operations assistant workday around queues, exception rules, ownership, and a reviewable daily handoff.', focus: 'an operations assistant daily workflow', audience: 'an operations owner', revision: '2026-08-09-operations-workflow-v1' },
  { slug: 'executive-assistant-calendar-delegation', primaryKeyword: 'executive assistant calendar delegation', title: 'Executive assistant calendar delegation: design the approval boundary', metaTitle: 'Executive assistant calendar delegation guide', excerpt: 'How to separate scheduling work an executive assistant can complete from decisions that still require the executive owner.', focus: 'calendar delegation', audience: 'an executive owner', revision: '2026-08-09-calendar-delegation-v1' },
  { slug: 'customer-support-qa-workflow', primaryKeyword: 'customer support assistant QA workflow', title: 'Customer support assistant QA workflows: sample the work fairly', metaTitle: 'Customer support assistant QA workflow', excerpt: 'A practical research guide for sampling support work, recording service-level evidence, and escalating exceptions without exposing customer data.', focus: 'customer support QA', audience: 'a support owner', revision: '2026-08-09-support-qa-v1' },
  { slug: 'bookkeeping-assistant-control-checklist', primaryKeyword: 'bookkeeping assistant controls', title: 'Bookkeeping assistant controls: build a reviewable work lane', metaTitle: 'Bookkeeping assistant controls: evidence guide', excerpt: 'Use role boundaries, source records, reconciliations, and owner review to design a bookkeeping assistant workflow that is easier to check.', focus: 'bookkeeping assistant controls', audience: 'a finance owner', revision: '2026-08-09-bookkeeping-controls-v1' },
  { slug: 'ecommerce-order-exception-workflow', primaryKeyword: 'ecommerce assistant order exceptions', title: 'Ecommerce assistant order exceptions: research the safe escalation path', metaTitle: 'Ecommerce assistant order exception workflow', excerpt: 'A workflow guide for separating routine order updates from refunds, fraud signals, and other exceptions that need an owner decision.', focus: 'ecommerce order exceptions', audience: 'an ecommerce owner', revision: '2026-08-09-ecommerce-exceptions-v1' },
  { slug: 'recruiting-assistant-sourcing-workflow', primaryKeyword: 'recruiting assistant sourcing workflow', title: 'Recruiting assistant sourcing workflows: protect candidate data', metaTitle: 'Recruiting assistant sourcing workflow', excerpt: 'How to structure candidate sourcing, evidence capture, consent boundaries, and a daily handoff for a recruiting assistant.', focus: 'recruiting sourcing', audience: 'a recruiting owner', revision: '2026-08-09-recruiting-sourcing-v1' },
  { slug: 'real-estate-assistant-lead-follow-up', primaryKeyword: 'real estate assistant lead follow up', title: 'Real estate assistant lead follow-up: define the next-action record', metaTitle: 'Real estate assistant lead follow-up guide', excerpt: 'A research-backed way to organize lead follow-up, source records, response timing, and owner-only decisions in a real estate workflow.', focus: 'real estate lead follow-up', audience: 'a real estate owner', revision: '2026-08-09-real-estate-follow-up-v1' },
  { slug: 'healthcare-admin-assistant-scheduling', primaryKeyword: 'healthcare admin assistant scheduling', title: 'Healthcare admin assistant scheduling: map access and escalation', metaTitle: 'Healthcare admin assistant scheduling guide', excerpt: 'Design a scheduling work lane with minimum necessary access, clear patient-data boundaries, and an explicit escalation path.', focus: 'healthcare scheduling', audience: 'a healthcare operations owner', revision: '2026-08-09-healthcare-scheduling-v1' },
  { slug: 'sales-support-crm-hygiene', primaryKeyword: 'sales support CRM hygiene', title: 'Sales support CRM hygiene: make record updates auditable', metaTitle: 'Sales support CRM hygiene evidence guide', excerpt: 'A practical guide to defining CRM update rules, source evidence, duplicate handling, and owner review for sales support assistants.', focus: 'sales CRM hygiene', audience: 'a sales operations owner', revision: '2026-08-09-crm-hygiene-v1' },
  { slug: 'marketing-assistant-content-calendar', primaryKeyword: 'marketing assistant content calendar', title: 'Marketing assistant content calendars: turn a queue into a controlled workflow', metaTitle: 'Marketing assistant content calendar guide', excerpt: 'How to build a marketing content calendar with source notes, approval states, publishing ownership, and a clear daily handoff.', focus: 'a marketing content calendar', audience: 'a marketing owner', revision: '2026-08-09-content-calendar-v1' },
  { slug: 'research-evidence-priority-matrix', primaryKeyword: 'research evidence priority matrix', title: 'Research evidence priority matrices: review the claims that matter most', metaTitle: 'Research evidence priority matrices', excerpt: 'A practical way to rank claims by reader impact, uncertainty, and review effort before a research article enters final QA.', focus: 'an evidence priority matrix', audience: 'a fact checker', revision: '2026-08-10-evidence-priority-v1' },
  { slug: 'research-content-brief-template', primaryKeyword: 'research content brief template', title: 'Research content briefs: define the question before the draft', metaTitle: 'Research content brief template', excerpt: 'A short brief connects the reader question, decision, evidence plan, limits, and acceptance checks before writing begins.', focus: 'a research content brief', audience: 'an editorial owner', revision: '2026-08-10-content-brief-v1' },
  { slug: 'research-duplicate-title-check', primaryKeyword: 'research duplicate title check', title: 'Research duplicate-title checks: keep the library distinct', metaTitle: 'Research duplicate-title checks', excerpt: 'A title and intent review catches near-duplicate research pages before they split evidence and confuse the next reader.', focus: 'a duplicate-title check', audience: 'a web editor', revision: '2026-08-10-duplicate-title-v1' },
  { slug: 'research-source-quote-policy', primaryKeyword: 'research source quote policy', title: 'Research source quote policies: use excerpts without losing context', metaTitle: 'Research source quote policies', excerpt: 'A source-quote policy keeps excerpts short, attributed, and faithful to the source while leaving room for the article’s own explanation.', focus: 'a source-quote policy', audience: 'a research editor', revision: '2026-08-10-quote-policy-v1' },
  { slug: 'research-content-update-trigger', primaryKeyword: 'research content update trigger', title: 'Research content update triggers: decide when evidence needs a refresh', metaTitle: 'Research content update triggers', excerpt: 'Define the changes in a source, method, link, or reader question that should reopen an existing research article.', focus: 'a content update trigger', audience: 'a publishing owner', revision: '2026-08-10-update-trigger-v1' },
  { slug: 'research-table-column-design', primaryKeyword: 'research table column design', title: 'Research table column design: keep comparisons answerable', metaTitle: 'Research table column design', excerpt: 'Choose table columns that connect a finding to its use and limit without turning a comparison into a dense data dump.', focus: 'research table columns', audience: 'a content editor', revision: '2026-08-10-table-columns-v1' },
  { slug: 'research-article-slug-review', primaryKeyword: 'research article slug review', title: 'Research article slug reviews: make routes stable and clear', metaTitle: 'Research article slug reviews', excerpt: 'A route review checks uniqueness, plain language, family ownership, and links before a research article is committed.', focus: 'an article slug review', audience: 'a web editor', revision: '2026-08-10-slug-review-v1' },
  { slug: 'research-image-rights-check', primaryKeyword: 'research image rights check', title: 'Research image rights checks: document what a thumbnail permits', metaTitle: 'Research image rights checks', excerpt: 'A thumbnail review records the asset origin, permitted use, attribution need, and alt text before an article is published.', focus: 'an image rights check', audience: 'a content producer', revision: '2026-08-10-image-rights-v1' },
  { slug: 'research-claim-severity-review', primaryKeyword: 'research claim severity review', title: 'Research claim-severity reviews: match scrutiny to risk', metaTitle: 'Research claim-severity reviews', excerpt: 'Classify claims by their potential consequence so a research team spends the most review effort where an error would matter most.', focus: 'a claim-severity review', audience: 'a research editor', revision: '2026-08-10-claim-severity-v1' },
  { slug: 'research-fact-check-handoff', primaryKeyword: 'research fact check handoff', title: 'Research fact-check handoffs: leave each claim ready to reproduce', metaTitle: 'Research fact-check handoffs', excerpt: 'A fact-check handoff gives the next reviewer the claim, source, definition, date, limits, and exact open question in one place.', focus: 'a fact-check handoff', audience: 'a publishing team', revision: '2026-08-10-fact-check-handoff-v1' },
  { slug: 'research-owner-handoff-note', primaryKeyword: 'research owner handoff note', title: 'Research owner handoff notes: make the next decision clear', metaTitle: 'Research owner handoff notes', excerpt: 'An owner handoff note states what was checked, what remains open, and who must decide before a research article moves forward.', focus: 'an owner handoff note', audience: 'a publishing owner', revision: '2026-08-10-owner-handoff-v1', published: '2026-08-10', updated: '2026-08-10' },
  { slug: 'research-source-access-log', primaryKeyword: 'research source access log', title: 'Research source access logs: preserve the evidence trail', metaTitle: 'Research source access logs', excerpt: 'A source access log records when a page or dataset was checked and gives the next reviewer enough context to repeat the lookup.', focus: 'a source access log', audience: 'a research editor', revision: '2026-08-10-source-access-v1', published: '2026-08-10', updated: '2026-08-10' },
  { slug: 'research-claim-source-map', primaryKeyword: 'research claim source map', title: 'Research claim-to-source maps: keep support visible', metaTitle: 'Research claim-to-source maps', excerpt: 'A claim-to-source map links each material sentence to the evidence that supports it and shows where the source stops.', focus: 'a claim-to-source map', audience: 'a fact checker', revision: '2026-08-10-claim-source-map-v1', published: '2026-08-10', updated: '2026-08-10' },
  { slug: 'research-evidence-table-review', primaryKeyword: 'research evidence table review', title: 'Research evidence-table reviews: test every row', metaTitle: 'Research evidence-table reviews', excerpt: 'A row-by-row review checks that each finding, buyer use, limit, and citation still answer the article’s question.', focus: 'an evidence-table review', audience: 'a content editor', revision: '2026-08-10-evidence-table-review-v1', published: '2026-08-10', updated: '2026-08-10' },
  { slug: 'research-reading-level-check', primaryKeyword: 'research article reading level check', title: 'Research reading-level checks: explain evidence plainly', metaTitle: 'Research reading-level checks', excerpt: 'A reading-level pass removes avoidable jargon while keeping definitions, uncertainty, and source limits intact.', focus: 'a reading-level check', audience: 'a research editor', revision: '2026-08-10-reading-level-v1', published: '2026-08-10', updated: '2026-08-10' },
  { slug: 'research-external-link-health-check', primaryKeyword: 'research external link health check', title: 'Research external-link health checks: keep citations usable', metaTitle: 'Research external-link health checks', excerpt: 'An external-link review checks that cited pages resolve, belong to the named source, and still support the nearby claim.', focus: 'an external-link health check', audience: 'a web editor', revision: '2026-08-10-external-link-health-v1', published: '2026-08-10', updated: '2026-08-10' },
  { slug: 'research-faq-answerability-check', primaryKeyword: 'research FAQ answerability check', title: 'Research FAQ answerability checks: answer only what the evidence supports', metaTitle: 'Research FAQ answerability checks', excerpt: 'An FAQ review tests whether each answer is direct, supported, and narrow enough to avoid turning a general source into a promise.', focus: 'an FAQ answerability check', audience: 'a research editor', revision: '2026-08-10-faq-answerability-v1', published: '2026-08-10', updated: '2026-08-10' },
  { slug: 'research-date-stamp-review', primaryKeyword: 'research article date stamp review', title: 'Research date-stamp reviews: separate published from accessed', metaTitle: 'Research date-stamp reviews', excerpt: 'A date-stamp review distinguishes publication, update, data, and access dates so readers can judge how current a finding is.', focus: 'a date-stamp review', audience: 'a fact checker', revision: '2026-08-10-date-stamp-v1', published: '2026-08-10', updated: '2026-08-10' },
  { slug: 'research-batch-scope-review', primaryKeyword: 'research batch scope review', title: 'Research batch-scope reviews: publish a coherent set', metaTitle: 'Research batch-scope reviews', excerpt: 'A batch-scope review checks that the day’s articles belong to the Research family, answer distinct questions, and share a clear validation record.', focus: 'a batch-scope review', audience: 'a publishing owner', revision: '2026-08-10-batch-scope-v1', published: '2026-08-10', updated: '2026-08-10' },
  { slug: 'research-source-authority-check', primaryKeyword: 'research source authority check', title: 'Research source-authority checks: match the source to the claim', metaTitle: 'Research source-authority checks', excerpt: 'A source-authority check asks whether the publisher has the standing, method, and direct relationship needed for the claim being made.', focus: 'a source-authority check', audience: 'a research editor', revision: '2026-08-10-source-authority-v1', published: '2026-08-10', updated: '2026-08-10' },
];

const makePublishingResearchPost = (config: PublishingResearchConfig): ResearchPost => ({
  slug: config.slug,
  featuredImage: `/featured/${config.slug}.png`,
  primaryKeyword: config.primaryKeyword,
  title: config.title,
  metaTitle: config.metaTitle,
  excerpt: config.excerpt,
  published: config.published ?? (config.revision.startsWith('2026-08-10') ? '2026-08-10' : config.revision.startsWith('2026-08-08') ? '2026-08-08' : '2026-08-04'),
  updated: config.updated ?? (config.revision.startsWith('2026-08-10') ? '2026-08-10' : config.revision.startsWith('2026-08-08') ? '2026-08-08' : '2026-08-04'),
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
  sources: publishingSources.map((source) => config.revision.startsWith('2026-08-08') ? { ...source, accessed: '2026-08-08' } : source),
  related: [
    { title: 'Research library', href: '/research', description: 'Read the other source-led reports in the Virtual Assistant Provider research library.' },
    { title: 'Daily publishing method', href: '/research/daily-research-brief-routine', description: 'Use a narrow question, evidence record, review pass, and handoff note for each daily article.' },
    { title: 'Blog library', href: '/blog', description: 'Compare research reports with the site blog and keep new topics distinct.' },
    { title: 'Request a role planning call', href: '/contact', description: 'Bring the recurring work, tools, review rules, and owner decisions for a Philippines-based role plan.' }
  ]
});

researchPosts = [...researchPosts, ...publishingResearchConfigs.map(makePublishingResearchPost)]
  .sort((a, b) => b.published.localeCompare(a.published));

export const publicTiers = [
  {name:'Executive Assistants', price:'$10/hour', detail:'Philippines-based support for structured executive and administrative work.'},
  {name:'Senior Assistants', price:'$15/hour', detail:'Experienced Philippines-based support for specialized workflows and coordination.'},
  {name:'C-Suite / Operations', price:'$18/hour', detail:'Philippines-based operational support for complex work lanes and leadership follow-through.'},
] as const;
