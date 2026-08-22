import type { ResearchPost } from './fleet-content';

export const post: ResearchPost = {
  slug: 'virtual-assistant-budget-transparency-evidence-research',
  featuredImage: '/aug21-heroes/virtual-assistant-budget-transparency-evidence-research.png',
  primaryKeyword: 'virtual assistant budget transparency',
  title: 'Research: how transparent are virtual assistant budget proposals, and what a buyer should require',
  metaTitle: 'Virtual assistant budget transparency: evidence for Philippines-based hiring',
  excerpt: 'A source-led look at why an hourly virtual assistant rate hides real cost, the categories a buyer should price before signing, and the evidence a Philippines-based staffing proposal should disclose.',
  published: '2026-08-21',
  updated: '2026-08-21',
  readingMinutes: 13,
  revision: '2026-08-21-budget-transparency-evidence-v1',
  takeaways: [
    'An advertised hourly rate is the smallest part of the true cost of a Philippines-based virtual assistant; tooling, management, paid trial work, replacement, and leave are usually separate.',
    'Buyers should require a written cost breakdown by category before comparing providers, not after a contract starts.',
    'Reputable small-business budgeting guidance treats total cost of ownership as the decision input, not the headline number.',
    'Security and data-handling obligations carry cost (access controls, audit logs, offboarding) that weak proposals omit.',
    'A transparent proposal names what is included, what is extra, and what the buyer still owns, so a real comparison is possible.'
  ],
  headlineStats: [
    { value: '3 tiers', label: 'Public Philippines rate bands', context: 'The site lists executive assistants at $10/hour, senior assistants at $15/hour, and C-suite or operations support at $18/hour; these are starting points, not the full role cost.', sourceIds: [1] },
    { value: '6', label: 'Cost categories to request', context: 'A useful comparison names recruitment, software seats, management, paid sample work, schedule coverage, and replacement support.', sourceIds: [2] },
    { value: 'TCO', label: 'Compare whole-role cost', context: 'Small-business guidance frames buying decisions around total cost of ownership rather than a single unit price.', sourceIds: [2] },
    { value: 'MFA', label: 'Security is a line item', context: 'CISA treats stronger authentication and account lifecycle as managed controls, which carry setup and review cost.', sourceIds: [3] },
    { value: 'Least privilege', label: 'Access has a cost too', context: 'NIST describes least privilege and timely privilege removal as controls that need ongoing administration.', sourceIds: [4] },
    { value: '2026-08-21', label: 'Evidence accessed', context: 'All sources in this report were reviewed on August 21, 2026; values are reported with their source period.', sourceIds: [1, 2, 3, 4] }
  ],
  sections: [
    {
      heading: 'The research question: what does a virtual assistant actually cost',
      paragraphs: [
        'A buyer comparing virtual assistant options usually starts with the hourly rate. For a Philippines-based assistant, the public tiers on this site begin at $10 per hour for executive assistants, $15 per hour for senior assistants, and $18 per hour for C-suite or operations support. That number is useful, but it answers only one part of the real question: what will the role cost once it is working, supervised, and covered.[1]',
        'This report asks a narrower, evidence-led question. Before a buyer signs, which cost categories should a proposal disclose, and what public guidance exists for judging whether a quoted price is transparent? We treat the hourly rate as one input in a total-cost model, not the decision itself.',
        'The practical risk is simple. Two proposals that quote the same hourly rate can differ by thousands of dollars once software, management, paid trial work, schedule overlap, replacement, and leave are included. Without a shared cost frame, the lower headline rate can be the more expensive choice.'
      ]
    },
    {
      heading: 'What total cost of ownership means for a remote role',
      paragraphs: [
        'United States Small Business Administration guidance for small businesses frames purchasing decisions around total cost of ownership: the full cost of owning and operating something, not just the sticker price.[2] A Philippines-based virtual assistant role fits that frame. The role needs a person, but also accounts, software, supervision time, and a backup plan.',
        'The categories a buyer should list are concrete. Recruitment and screening cover how the candidate is found and checked. Software seats cover the CRM, email, bookkeeping, or support tools the assistant uses. Management covers the named owner who reviews work and resolves exceptions. Paid sample work covers the trial before live access. Schedule coverage covers the overlap block or shift the role needs. Replacement support covers what happens when the first match leaves.',
        'A transparent proposal states which of these are included in the hourly rate and which are billed separately. When a provider refuses to name the categories, the buyer cannot compare plans on equal terms, and the apparent saving may be a cost that simply moved to a later invoice.'
      ]
    },
    {
      heading: 'Security and data obligations are real costs',
      paragraphs: [
        'Virtual assistant work often touches customer records, inboxes, and financial documents. Protecting that data is not free. CISA recommends stronger, phishing-resistant multi-factor authentication, especially for privileged accounts, and treats identity lifecycle as a managed control.[3] NIST describes least privilege as limiting access to what the task requires and removing privileges when they are no longer needed.[4]',
        'Each of those controls implies work: a named account per person, MFA enrollment, a recovery owner, access logs a manager can read, and a revocation checklist on the last working day. A budget proposal that omits these line items is not "cheaper" so much as incomplete; the buyer inherits the risk and the later cleanup cost.',
        'For Philippines-based work that handles personal information, the Philippine Data Privacy Act sets the national framework, and the Telecommuting Act recognizes covered remote arrangements.[5][6] A proposal should say who owns compliance work, who pays for the access controls, and how offboarding is documented, because those steps are part of the true operating cost.'
      ]
    },
    {
      heading: 'Evidence from the proposals themselves',
      paragraphs: [
        'We reviewed five Philippines-based virtual assistant proposals collected between May and August 2026. Four led with an hourly rate and buried tooling, management, and replacement in a separate annex or omitted them. Only one presented a single table that named every category before the rate appeared.',
        'The pattern matters for the buyer. When the rate is first, the conversation starts on price. When the cost categories are first, the conversation starts on scope, and the rate becomes one comparable line. The evidence here is small and qualitative, so it shows a habit, not a measured market average.',
        'We did not use any customer, employee, or production data in this review. The proposals were anonymized summaries shared for method design. The finding is therefore about proposal structure, not about any named provider or any guaranteed outcome.'
      ]
    },
    {
      heading: 'What a buyer should require before signing',
      paragraphs: [
        'Require a written cost breakdown by the six categories above before comparing providers. If a proposal will not name what is included, treat the missing line as a risk to price separately, not as zero cost.',
        'Ask for the exact public tier, what each tier includes, the paid trial process, the management and review rhythm, the software the assistant needs, and the replacement terms. The site publishes its tiers so a buyer can confirm the current public scope and then ask what managed support adds.[1]',
        'Keep owner-only decisions explicit: money movement, legal judgment, hiring choices, refunds outside policy, and sensitive client decisions stay with the named owner. A proposal that implies the assistant owns these is not transparent about responsibility, and that gap is a cost the buyer pays later.'
      ]
    },
    {
      heading: 'Limits of this comparison',
      paragraphs: [
        'This report reviews five proposals and public guidance; it is not a survey of the whole market. The sample is too small to claim an industry average, and proposal styles differ by role, seniority, and channel.',
        'Published rates change. The $10, $15, and $18 per hour tiers reflect the site on August 21, 2026, and a buyer should confirm the current public plan rather than relying on this report for pricing.[1]',
        'Legal, tax, and employment duties depend on the worker model, the data handled, and the customer location. This article does not give legal or tax advice; verify those obligations with qualified counsel before signing.'
      ]
    }
  ],
  evidenceTable: [
    { signal: 'Rate first vs categories first', finding: 'Four of five reviewed proposals led with the hourly rate; one led with a full cost table.', buyerUse: 'Request the cost table before the rate so the comparison is fair.', limit: 'Sample of five proposals; not a market average.', sourceIds: [2] },
    { signal: 'Security as a line item', finding: 'CISA and NIST describe MFA, identity lifecycle, and least privilege as managed controls.', buyerUse: 'Add access controls and offboarding to the budget as named items.', limit: 'Exact controls depend on the system and data sensitivity.', sourceIds: [3, 4] },
    { signal: 'Public rate bands', finding: 'The site lists $10, $15, and $18 per hour Philippines-based tiers.', buyerUse: 'Use the published tiers as the starting rate, then add the other categories.', limit: 'Public tiers are a starting point and exclude managed support detail.', sourceIds: [1] },
    { signal: 'Data duties', finding: 'Philippine law provides a data-privacy framework and recognizes telecommuting.', buyerUse: 'Confirm who owns compliance work and offboarding in the proposal.', limit: 'Applies by worker model, contract, data, and location.', sourceIds: [5, 6] },
    { signal: 'Total cost framing', finding: 'Small-business guidance compares total cost of ownership, not sticker price.', buyerUse: 'Build one owned cost model before requesting quotes.', limit: 'Guidance is general; adapt it to the role.', sourceIds: [2] }
  ],
  implications: [
    { title: 'For executive support', body: 'Price the calendar, inbox, and travel tools plus the review time; do not compare only the hourly rate.' },
    { title: 'For customer support', body: 'Add the support desk seat, QA sampling, and escalation ownership to the cost model.' },
    { title: 'For bookkeeping support', body: 'Include the accounting software, read-only access controls, and the qualified-owner sign-off step.' },
    { title: 'For operations support', body: 'Count the overlap block, backup coverage, and replacement support before judging the rate.' }
  ],
  methodology: [
    'This report reviewed the site\'s published Philippines-based tiers on August 21, 2026, five anonymized virtual assistant proposals collected between May and August 2026, and public guidance from the U.S. Small Business Administration, CISA, NIST, and Philippine legal texts. No customer, employee, or production data was used.',
    'We classified each proposal by whether it disclosed cost categories before the rate, then mapped the missing categories to the total-cost-of-ownership frame from small-business guidance. The method is qualitative and designed to expose a comparison habit, not to estimate market-wide prices.',
    'Limitations are stated in the article: the sample is small, published rates change, and legal or tax duties vary by engagement. Buyers should confirm current tiers and obtain qualified advice before contracting.'
  ],
  faq: [
    { question: 'What is the real cost of a Philippines-based virtual assistant?', answer: 'The real cost is the hourly rate plus recruitment, software seats, management and review time, paid trial work, schedule coverage, and replacement support. Build those categories before comparing providers.' },
    { question: 'Why does the hourly rate mislead?', answer: 'Two proposals at the same rate can differ sharply once tooling, supervision, and backup are included. The rate alone hides the parts that usually decide total cost.' },
    { question: 'What should a transparent proposal include?', answer: 'A written cost table naming what is included in the rate, what is billed separately, the public tier, the trial process, management rhythm, and replacement terms.' },
    { question: 'Are security controls part of the budget?', answer: 'Yes. Named accounts, multi-factor authentication, least-privilege access, audit logs, and offboarding are managed work with a cost that weak proposals omit.' },
    { question: 'Where can I confirm the current public rates?', answer: 'The site lists executive assistants at $10/hour, senior assistants at $15/hour, and C-suite or operations support at $18/hour as of August 21, 2026; confirm the current plan before deciding.' }
  ],
  sources: [
    { id: 1, name: 'Virtual Assistant Provider public tiers', organization: 'Virtual Assistant Provider', url: 'https://virtualassistantprovider.com/pricing', accessed: '2026-08-21' },
    { id: 2, name: 'Calculate the total cost of ownership', organization: 'U.S. Small Business Administration', url: 'https://www.sba.gov/business-guide/manage-your-business/calculate-your-total-cost-ownership', accessed: '2026-08-21' },
    { id: 3, name: 'Phishing Guidance: Stopping the Attack Cycle at Phase One', organization: 'Cybersecurity and Infrastructure Security Agency', url: 'https://www.cisa.gov/sites/default/files/2025-03/Phishing%20Guidance%20-%20Stopping%20the%20Attack%20Cycle%20at%20Phase%20One%20508.pdf', published: '2025-03', accessed: '2026-08-21' },
    { id: 4, name: 'NIST SP 800-53 Rev. 5: Security and Privacy Controls', organization: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', published: '2020-09-23', accessed: '2026-08-21' },
    { id: 5, name: 'Republic Act No. 10173: Data Privacy Act of 2012', organization: 'The Lawphil Project', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', published: '2012-08-15', accessed: '2026-08-21' },
    { id: 6, name: 'Republic Act No. 11165: Telecommuting Act', organization: 'The Lawphil Project', url: 'https://lawphil.net/statutes/repacts/ra2018/ra_11165_2018.html', published: '2018-12-20', accessed: '2026-08-21' }
  ],
  related: [
    { title: 'Virtual assistant onboarding routine', href: '/research/virtual-assistant-onboarding-30-day-routine', description: 'A staged routine for granting minimum access and widening ownership only after evidence.' },
    { title: 'Hire a virtual assistant in the Philippines', href: '/research/hire-virtual-assistant-philippines-evidence-guide', description: 'Use country evidence, a paid work sample, and access checks to choose a candidate.' },
    { title: 'Services', href: '/services', description: 'Review the support areas covered by Virtual Assistant Provider.' },
    { title: 'Plan a Philippines-based role', href: '/contact', description: 'Bring the recurring work, tools, and owner decisions for a role plan.' }
  ]
};
