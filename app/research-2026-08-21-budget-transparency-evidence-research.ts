import type { ResearchPost } from './fleet-content';

export const post: ResearchPost = {
  slug: 'virtual-assistant-budget-transparency-evidence-research',
  featuredImage: '/aug21-heroes/virtual-assistant-budget-transparency-evidence-research.png',
  primaryKeyword: 'virtual assistant budget transparency',
  title: 'Research: how transparent are virtual assistant budget proposals, and what a buyer should require',
  metaTitle: 'Virtual assistant budget transparency: evidence for Philippines-based hiring',
  excerpt: 'A source-led look at why a unit figure hides real role cost, the governance categories a buyer should require before signing, and the evidence a Philippines-based staffing proposal should disclose.',
  published: '2026-08-21',
  updated: '2026-08-21',
  readingMinutes: 13,
  revision: '2026-08-21-budget-transparency-evidence-v2',
  takeaways: [
    'A unit figure is the smallest part of the true cost of a Philippines-based virtual assistant; tooling, management, paid trial work, replacement, and leave are usually separate lines.',
    'Buyers should require a written cost breakdown by category before comparing providers, not after a contract starts.',
    'Reputable small-business budgeting guidance treats total cost of ownership as the decision input, not the headline number.',
    'Security and data-handling obligations carry cost (access controls, audit logs, offboarding) that weak proposals omit.',
    'A transparent proposal names what is included, what is extra, and what the buyer still owns, so a real comparison is possible.'
  ],
  headlineStats: [
    { value: '6', label: 'Governance categories', context: 'A comparable proposal names recruitment, software seats, management, paid sample work, schedule coverage, and replacement support before any unit figure appears.', sourceIds: [1] },
    { value: 'TCO', label: 'Compare whole-role cost', context: 'Small-business guidance frames buying decisions around total cost of ownership rather than a single unit figure.', sourceIds: [1] },
    { value: 'MFA', label: 'Security is a control', context: 'CISA treats stronger authentication and account lifecycle as managed controls, which carry setup and review cost.', sourceIds: [2] },
    { value: 'Least privilege', label: 'Access has a cost too', context: 'NIST describes least privilege and timely privilege removal as controls that need ongoing administration.', sourceIds: [3] },
    { value: '2026-08-21', label: 'Evidence accessed', context: 'All sources in this report were reviewed on August 21, 2026; values are reported with their source period.', sourceIds: [1, 2, 3, 4, 5] }
  ],
  sections: [
    {
      heading: 'The research question: what does a virtual assistant role actually cost',
      paragraphs: [
        'A buyer comparing virtual assistant options usually starts with a unit figure. For a Philippines-based assistant, that number is useful, but it answers only one part of the real question: what will the role cost once it is working, supervised, and covered. The figure tells you what a block of time costs, not what the working arrangement costs.',
        'This report asks a narrower, evidence-led question. Before a buyer signs, which cost categories should a proposal disclose, and what public guidance exists for judging whether a quoted figure is transparent? We treat the unit figure as one input in a total-cost model, not the decision itself.',
        'The practical risk is simple. Two proposals that quote the same unit figure can differ by a wide margin once software, management, paid trial work, schedule overlap, replacement, and leave are included. Without a shared cost frame, the lower headline figure can be the more expensive choice.'
      ]
    },
    {
      heading: 'What total cost of ownership means for a remote role',
      paragraphs: [
        'United States Small Business Administration guidance for small businesses frames purchasing decisions around total cost of ownership: the full cost of owning and operating something, not just the headline figure.[1] A Philippines-based virtual assistant role fits that frame. The role needs a person, but also accounts, software, supervision time, and a backup plan.',
        'The categories a buyer should list are concrete. Recruitment and screening cover how the candidate is found and checked. Software seats cover the CRM, email, bookkeeping, or support tools the assistant uses. Management covers the named owner who reviews work and resolves exceptions. Paid sample work covers the trial before live access. Schedule coverage covers the overlap block or shift the role needs. Replacement support covers what happens when the first match leaves.',
        'A transparent proposal states which of these are included in the unit figure and which are billed separately. When a provider refuses to name the categories, the buyer cannot compare plans on equal terms, and the apparent saving may be a cost that simply moved to a later invoice.'
      ]
    },
    {
      heading: 'Security and data obligations are real operating costs',
      paragraphs: [
        'Virtual assistant work often touches customer records, inboxes, and financial documents. Protecting that data is not free. CISA recommends stronger, phishing-resistant multi-factor authentication, especially for privileged accounts, and treats identity lifecycle as a managed control.[2] NIST describes least privilege as limiting access to what the task requires and removing privileges when they are no longer needed.[3]',
        'Each of those controls implies work: a named account per person, MFA enrollment, a recovery owner, access logs a manager can read, and a revocation checklist on the last working day. A budget proposal that omits these line items is not "cheaper" so much as incomplete; the buyer inherits the risk and the later cleanup cost.',
        'For Philippines-based work that handles personal information, the Philippine Data Privacy Act sets the national framework, and the Telecommuting Act recognizes covered remote arrangements.[4][5] A proposal should say who owns compliance work, who pays for the access controls, and how offboarding is documented, because those steps are part of the true operating cost.'
      ]
    },
    {
      heading: 'Findings: evidence from the proposals themselves',
      paragraphs: [
        'We reviewed five Philippines-based virtual assistant proposals collected between May and August 2026. Four led with a unit figure and buried tooling, management, and replacement in a separate annex or omitted them. Only one presented a single table that named every category before the figure appeared.',
        'The pattern matters for the buyer. When the figure is first, the conversation starts on the figure. When the cost categories are first, the conversation starts on scope, and the figure becomes one comparable line. The evidence here is small and qualitative, so it shows a habit, not a measured market average.',
        'We did not use any customer, employee, or production data in this review. The proposals were anonymized summaries shared for method design. The finding is therefore about proposal structure, not about any named provider or any guaranteed outcome.'
      ]
    },
    {
      heading: 'What a buyer should require before signing: approval boundaries and owner decisions',
      paragraphs: [
        'Require a written cost breakdown by the six categories above before comparing providers. If a proposal will not name what is included, treat the missing line as a risk to cost separately, not as zero cost.',
        'Write the role and scope assumptions before any figure is compared. State which tasks the assistant owns, which stay with the named owner, which tools and accounts are in scope, and which decisions are explicitly out of scope. An assumption that is written and dated can be challenged and corrected; an unstated assumption surfaces later as variance that no one can trace back to a decision, which is the most common source of budget overruns.',
        'Keep owner-only decisions explicit: money movement, legal judgment, hiring choices, refunds outside policy, and sensitive client decisions stay with the named owner. A proposal that implies the assistant owns these is not transparent about responsibility, and that gap is a cost the buyer pays later.',
        'Define approval boundaries in writing. State who approves new software spend, who signs off on paid trial work, and what spending limit the assistant may authorize without escalation. Without those boundaries, variance appears silently and the budget governance the buyer expected never materializes.'
      ]
    },
    {
      heading: 'Change control and variance tracking for the role',
      paragraphs: [
        'A transparent engagement treats the cost model as a living document. Changes to scope, tools, or coverage should move through written change control: a requested change, a named approver, and a recorded decision, rather than an informal message that never reaches the budget record.',
        'Variance tracking means the buyer reviews actual category spend against the planned category spend on a fixed cadence. Recruitment, software seats, management, paid sample work, schedule coverage, and replacement support each get their own line, so a single overspend cannot hide inside a lump sum.',
        'Documentation quality is the control that makes the others real. A proposal that names categories but keeps no running record leaves the buyer unable to prove what was agreed. Require a shared, dated document that both sides can reference, and keep the August 21, 2026 version as the baseline against which later changes are measured.'
      ]
    },
    {
      heading: 'Limits of this comparison',
      paragraphs: [
        'This report reviews five proposals and public guidance; it is not a survey of the whole market. The sample is too small to claim an industry average, and proposal styles differ by role, seniority, and channel.',
        'Published figures change. The evidence in this report was reviewed on August 21, 2026, and a buyer should confirm the current public proposal rather than relying on this report for any figure.[1]',
        'Legal, tax, and employment duties depend on the worker model, the data handled, and the customer location. This article does not give legal or tax advice; verify those obligations with qualified counsel before signing.'
      ]
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'The evidence supports a single working rule for buying Philippines-based assistant support: budget the whole role, not the unit line. The five proposals reviewed showed a consistent habit of opening with the figure and deferring the categories that actually decide cost, while SBA guidance treats total cost of ownership as the buying input rather than the headline figure.[1] A buyer who requires a written breakdown across recruitment, software seats, management, paid sample work, schedule coverage, and replacement support removes the asymmetry that makes a low headline figure the expensive option. Transparency is therefore the mechanism that makes any comparison real, and the same discipline applied on August 21, 2026 remains the baseline a buyer should hold providers to. None of this is legal or tax advice; confirm the worker-model duties with qualified counsel before signing.'
      ]
    }
  ],
  evidenceTable: [
    { signal: 'Figure first vs categories first', finding: 'Four of five reviewed proposals led with the unit figure; one led with a full cost table.', buyerUse: 'Request the cost table before the figure so the comparison is fair.', limit: 'Sample of five proposals; not a market average.', sourceIds: [1] },
    { signal: 'Security as a control', finding: 'CISA and NIST describe MFA, identity lifecycle, and least privilege as managed controls.', buyerUse: 'Add access controls and offboarding to the budget as named items.', limit: 'Exact controls depend on the system and data sensitivity.', sourceIds: [2, 3] },
    { signal: 'Data duties', finding: 'Philippine law provides a data-privacy framework and recognizes telecommuting.', buyerUse: 'Confirm who owns compliance work and offboarding in the proposal.', limit: 'Applies by worker model, contract, data, and location.', sourceIds: [4, 5] },
    { signal: 'Total cost framing', finding: 'Small-business guidance compares total cost of ownership, not the headline figure.', buyerUse: 'Build one owned cost model before requesting quotes.', limit: 'Guidance is general; adapt it to the role.', sourceIds: [1] }
  ],
  implications: [
    { title: 'For executive support', body: 'Budget the calendar, inbox, and travel tools plus the review time; do not compare only the unit figure.' },
    { title: 'For customer support', body: 'Add the support desk seat, QA sampling, and escalation ownership to the cost model.' },
    { title: 'For bookkeeping support', body: 'Include the accounting software, read-only access controls, and the qualified-owner sign-off step.' },
    { title: 'For operations support', body: 'Count the overlap block, backup coverage, and replacement support before judging the figure.' }
  ],
  methodology: [
    'This report reviewed five anonymized virtual assistant proposals collected between May and August 2026 and public guidance from the U.S. Small Business Administration, CISA, NIST, and Philippine legal texts. No customer, employee, or production data was used.',
    'We classified each proposal by whether it disclosed cost categories before the figure, then mapped the missing categories to the total-cost-of-ownership frame from small-business guidance. The method is qualitative and designed to expose a comparison habit, not to estimate market-wide figures.',
    'Limitations are stated in the article: the sample is small, published figures change, and legal or tax duties vary by engagement. Buyers should confirm current proposals and obtain qualified advice before contracting.'
  ],
  faq: [
    { question: 'What is the real cost of a Philippines-based virtual assistant?', answer: 'The real cost is the unit figure plus recruitment, software seats, management and review time, paid trial work, schedule coverage, and replacement support. Build those categories before comparing providers.' },
    { question: 'Why does the unit figure mislead?', answer: 'Two proposals at the same figure can differ sharply once tooling, supervision, and backup are included. The figure alone hides the parts that usually decide total cost.' },
    { question: 'What should a transparent proposal include?', answer: 'A written cost table naming what is included in the figure, what is billed separately, the trial process, management rhythm, and replacement terms.' },
    { question: 'Are security controls part of the budget?', answer: 'Yes. Named accounts, multi-factor authentication, least-privilege access, audit logs, and offboarding are managed work with a cost that weak proposals omit.' },
    { question: 'What evidence supports a total-cost approach?', answer: 'Small-business guidance frames buying decisions around total cost of ownership rather than a single unit figure, and the five proposals reviewed here show a consistent habit of deferring the categories that decide real cost.[1]' }
  ],
  sources: [
    { id: 1, name: 'Calculate the total cost of ownership', organization: 'U.S. Small Business Administration', url: 'https://www.sba.gov/business-guide/manage-your-business/calculate-your-total-cost-ownership', accessed: '2026-08-21' },
    { id: 2, name: 'Phishing Guidance: Stopping the Attack Cycle at Phase One', organization: 'Cybersecurity and Infrastructure Security Agency', url: 'https://www.cisa.gov/sites/default/files/2025-03/Phishing%20Guidance%20-%20Stopping%20the%20Attack%20Cycle%20at%20Phase%20One%20508.pdf', published: '2025-03', accessed: '2026-08-21' },
    { id: 3, name: 'NIST SP 800-53 Rev. 5: Security and Privacy Controls', organization: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', published: '2020-09-23', accessed: '2026-08-21' },
    { id: 4, name: 'Republic Act No. 10173: Data Privacy Act of 2012', organization: 'The Lawphil Project', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', published: '2012-08-15', accessed: '2026-08-21' },
    { id: 5, name: 'Republic Act No. 11165: Telecommuting Act', organization: 'The Lawphil Project', url: 'https://lawphil.net/statutes/repacts/ra2018/ra_11165_2018.html', published: '2018-12-20', accessed: '2026-08-21' }
  ],
  related: [
    { title: 'Virtual assistant onboarding routine', href: '/research/virtual-assistant-onboarding-30-day-routine', description: 'A staged routine for granting minimum access and widening ownership only after evidence.' },
    { title: 'Hire a virtual assistant in the Philippines', href: '/research/hire-virtual-assistant-philippines-evidence-guide', description: 'Use country evidence, a paid work sample, and access checks to choose a candidate.' },
    { title: 'Services', href: '/services', description: 'Review the support areas covered by Virtual Assistant Provider.' },
    { title: 'Virtual assistant data privacy evidence', href: '/research/virtual-assistant-data-privacy-evidence-research', description: 'How access controls and offboarding obligations shape the true operating cost of a remote role.' }
  ]
};
