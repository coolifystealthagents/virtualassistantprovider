import type { BlogPost } from './data';

const published = '2026-08-12';
const displayDate = 'August 12, 2026';

export const august12ReplacementBlogPosts: BlogPost[] = [
  {
    slug: 'virtual-assistant-provider-management-layer-comparison-philippines',
    published,
    updated: published,
    displayDate,
    featuredImage: '/featured/virtual-assistant-weekly-reporting-philippines.png',
    title: 'Virtual assistant provider management layers: compare who actually runs the work',
    excerpt: 'Compare Philippines VA providers by the operating layer around the assistant: queue ownership, coaching, quality review, absence handling, and escalation.',
    minutes: 11,
    takeaways: [
      'Separate candidate sourcing from day-to-day management; providers may include one, both, or neither.',
      'Ask each provider to name the person who receives a blocked-work escalation and the person who coaches quality.',
      'Compare the same operating scenario rather than relying on different package labels.',
      'Keep business priorities, policy exceptions, and consequential approvals with your own accountable owner.',
    ],
    sections: [
      {
        heading: 'Map the management layer before comparing providers',
        body: 'A provider can recruit a capable Philippines-based assistant without managing the client’s daily queue. Another may supply an account manager, team lead, quality reviewer, and absence coordinator. Write five rows before the sales calls: who sets priorities, who answers workflow questions, who reviews quality, who responds to absence, and who can start a replacement. Mark each row as client-owned, provider-owned, shared, or not included.',
        bullets: ['Ask for role names, not “our team.”', 'Record the contact route and expected response window.', 'Distinguish routine coaching from employment or contract decisions.'],
      },
      {
        heading: 'Use one scenario to expose operating differences',
        body: 'Give every provider the same example: the assistant finds conflicting instructions, the internal owner is unavailable, and a customer deadline is approaching. Ask what the assistant records, whom they contact, what work pauses, and who updates the client. A usable answer should preserve the source record and avoid letting support invent a policy decision. Compare the steps side by side after the calls.',
      },
      {
        heading: 'Ask for artifacts instead of broad assurances',
        body: 'Request blank examples of the tools behind the service: a weekly update, quality-review sheet, escalation note, attendance notification, access inventory, and replacement handoff. These can be empty or anonymized. You are assessing whether the operating method exists, not requesting another customer’s confidential information. A polished promise without an owner, trigger, record, and next action is not yet an operating control.',
      },
      {
        heading: 'Check access and accountability together',
        body: 'NIST Cybersecurity Framework 2.0 makes governance, roles, and supply-chain oversight part of cybersecurity risk management. Apply that discipline to the VA relationship: named identities, least-privilege access, an owner for recovery, periodic review, and a removal trigger. The Philippines National Privacy Commission’s Data Privacy Act materials are also relevant when the workflow processes personal information. Get qualified advice for the real contract and data flow.',
      },
      {
        heading: 'Score the provider on observable operations',
        body: 'Use a simple evidence column for each management function: named owner, trigger, response path, artifact, and unresolved limitation. Then run a small paid or contract-appropriate pilot with safe records. Review whether questions reached the right owner, whether corrections improved the instructions, and whether the promised support layer appeared in practice. Do not turn a short pilot into a guarantee; use it to identify what must be repaired before the lane expands.',
      },
    ],
    faq: [
      { question: 'Does an account manager manage the assistant’s daily work?', answer: 'Not necessarily. Ask whether the account manager sets priorities, reviews output, coaches the workflow, or only handles commercial and relationship questions.' },
      { question: 'What should I compare if provider job titles differ?', answer: 'Compare functions: priority setting, workflow support, quality review, absence response, access administration, escalation, and replacement. Job titles can then be mapped to the same rows.' },
      { question: 'What evidence can a provider share without exposing another client?', answer: 'Ask for blank or anonymized operating artifacts, such as a weekly report, escalation template, quality sheet, access checklist, and replacement handoff.' },
    ],
    sources: [
      { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20', note: 'Authoritative governance guidance for roles, oversight, cybersecurity risk, and supply-chain dependencies.' },
      { name: 'NIST SP 800-53 Rev. 5', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'Authoritative control catalog covering account management, access enforcement, audit, and personnel-related controls.' },
      { name: 'Philippines National Privacy Commission: Data Privacy Act of 2012', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Official Philippine privacy authority materials relevant when a delegated workflow processes personal information.' },
    ],
    relatedServices: [],
    articleLinks: [
      { label: 'weekly reporting operations guide', href: '/blog/virtual-assistant-weekly-reporting-philippines' },
      { label: 'escalation rules guide', href: '/blog/virtual-assistant-escalation-rules-philippines' },
      { label: 'NIST Cybersecurity Framework 2.0', href: 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20', external: true },
    ],
  },
  {
    slug: 'virtual-assistant-provider-transition-readiness-philippines',
    published,
    updated: published,
    displayDate,
    featuredImage: '/featured/virtual-assistant-backup-documentation-philippines.png',
    title: 'Virtual assistant provider transition readiness: compare the exit handoff before hiring',
    excerpt: 'Compare Philippines VA providers on records, account ownership, file transfer, open-work handoff, access removal, and continuity before the relationship starts.',
    minutes: 11,
    takeaways: [
      'A workable transition plan is useful for provider changes, role changes, leave, and ordinary staff turnover.',
      'Keep business identities, source records, and final file ownership under accountable client control where the workflow allows it.',
      'Ask who creates the handoff, who verifies it, and what happens to blocked or unfinished work.',
      'Test a small transition artifact during onboarding rather than waiting for an urgent exit.',
    ],
    sections: [
      {
        heading: 'Compare transition readiness before a problem exists',
        body: 'Provider comparisons often stop at screening, start dates, and replacement promises. Add a transition column before selecting a Philippines VA provider. It should cover client-owned accounts, current instructions, source files, open tasks, decision history, access revocation, retained copies, and the person who verifies completion. This is an operating question, not a prediction that the relationship will fail.',
        bullets: ['List each system and the identity that owns it.', 'Define the minimum open-work handoff record.', 'Name who confirms access removal and file transfer.'],
      },
      {
        heading: 'Walk one task from current owner to next owner',
        body: 'Choose a recurring task and ask the provider to show how another authorized person would continue it tomorrow. The handoff should identify the last trusted state, source of truth, completed action, open question, due time, customer commitment, and owner-only decision. If continuity depends on chat history, a personal mailbox, or an unexplained spreadsheet, record that dependency rather than assuming a replacement can infer it.',
      },
      {
        heading: 'Separate four parts of the exit handoff',
        body: 'Treat work transfer, information transfer, identity removal, and data disposition as separate checks. Finishing the task does not prove access was removed; disabling an account does not prove the next person has the current instructions. Require an owner and evidence for each check. For sensitive or regulated information, have qualified legal and security advisers apply the relevant duties to the actual relationship.',
      },
      {
        heading: 'Use continuity guidance as a practical lens',
        body: 'NIST contingency-planning guidance emphasizes business impact, recovery strategies, plan testing, and maintenance. NIST SP 800-53 includes controls for account management, termination, transfer, and contingency planning. Those sources do not endorse a provider or prescribe one universal VA handoff. They do support asking whether the role can resume from documented, controlled records after a person or service becomes unavailable.',
      },
      {
        heading: 'Run a reversible first-month test',
        body: 'During onboarding, ask the assistant to prepare one weekly handoff as though a trained backup will use it. Have the manager follow the note without relying on private chat. Confirm that files remain in approved locations and that the access inventory matches the first task lane. Repair missing context now. The goal is not redundant paperwork; it is a short record that makes normal work reviewable and an unusual transition recoverable.',
      },
    ],
    faq: [
      { question: 'Why ask about exit before hiring a virtual assistant provider?', answer: 'The same records support absences, role changes, replacements, and quality review. Asking early lets ownership and access be designed correctly from the start.' },
      { question: 'What should an open-work handoff contain?', answer: 'Record the source, last trusted state, work completed, next action, due time, blocker, customer commitment, and named decision owner.' },
      { question: 'Is a replacement guarantee the same as transition readiness?', answer: 'No. A replacement promise concerns staffing. Transition readiness concerns whether accounts, files, instructions, evidence, and unfinished work can move safely to an authorized next owner.' },
    ],
    sources: [
      { name: 'NIST SP 800-34 Rev. 1: Contingency Planning Guide for Federal Information Systems', url: 'https://csrc.nist.gov/pubs/sp/800/34/r1/final', note: 'Authoritative guidance on business impact, recovery strategy, plan testing, and maintenance.' },
      { name: 'NIST SP 800-53 Rev. 5', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', note: 'Authoritative controls relevant to accounts, personnel transfer or termination, access, and contingency planning.' },
      { name: 'Philippines National Privacy Commission: Data Privacy Act of 2012', url: 'https://privacy.gov.ph/data-privacy-act/', note: 'Official Philippine privacy authority materials relevant to personal-information handling and accountability.' },
    ],
    relatedServices: [],
    articleLinks: [
      { label: 'backup documentation guide', href: '/blog/virtual-assistant-backup-documentation-philippines' },
      { label: 'absence planning guide', href: '/blog/virtual-assistant-absence-plan-philippines' },
      { label: 'NIST contingency planning guide', href: 'https://csrc.nist.gov/pubs/sp/800/34/r1/final', external: true },
    ],
  },
];
