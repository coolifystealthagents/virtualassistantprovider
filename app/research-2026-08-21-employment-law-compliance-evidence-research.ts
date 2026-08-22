import type { ResearchPost } from './fleet-content';

export const post: ResearchPost = {
  slug: 'virtual-assistant-employment-law-compliance-evidence-research',
  featuredImage: '/aug21-heroes/virtual-assistant-employment-law-compliance-evidence-research.png',
  primaryKeyword: 'virtual assistant employment law compliance',
  title: 'Research: employment-law questions when engaging a Philippines-based virtual assistant',
  metaTitle: 'Employment-law compliance for Philippines-based virtual assistants',
  excerpt: 'A source-led review of the worker-status, telecommuting, data, and offboarding questions a buyer should settle before engaging a Philippines-based virtual assistant, with the laws that frame them.',
  published: '2026-08-21',
  updated: '2026-08-21',
  readingMinutes: 13,
  revision: '2026-08-21-employment-law-compliance-evidence-v1',
  takeaways: [
    'Worker status decides most legal duties: employee, contractor, and agency models carry different tax, benefit, and termination rules.',
    'The Philippine Telecommuting Act recognizes covered remote arrangements and supports written terms on hours, equipment, records, and offboarding.',
    'The Data Privacy Act frames how personal information is processed and is part of the engagement, not a side note.',
    'Offboarding, IP, confidentiality, and the owner-only decision line should be written before any live access.',
    'This article is planning context, not legal advice; confirm the model and duties with qualified counsel.'
  ],
  headlineStats: [
    { value: 'Status', label: 'The decisive variable', context: 'Employee, contractor, and agency models create different legal duties; the label alone does not decide the status.', sourceIds: [1] },
    { value: 'Telework', label: 'Written remote terms', context: 'The Telecommuting Act recognizes covered remote arrangements with documented equipment, records, and offboarding.', sourceIds: [2] },
    { value: 'DPA', label: 'Data duty frame', context: 'The Data Privacy Act provides the national framework for processing personal information.', sourceIds: [3] },
    { value: 'DOLE', label: 'Labor authority', context: 'The Department of Labor and Employment is the Philippines labor authority for standards and relations.', sourceIds: [4] },
    { value: 'MFA', label: 'Access control', context: 'CISA ties managed identity to a compliant, auditable access posture.', sourceIds: [5] },
    { value: '2026-08-21', label: 'Evidence accessed', context: 'Sources reviewed on August 21, 2026; periods noted with each source.', sourceIds: [1, 2, 3, 4, 5] }
  ],
  sections: [
    {
      heading: 'The research question: which legal duties follow the role',
      paragraphs: [
        'Engaging a Philippines-based virtual assistant raises a legal question before any task is assigned: what duties follow from the way the person is engaged? This report reviews the laws that frame that question and the buyer actions they imply, without treating any one model as fixed.',
        'The decisive issue is worker status. Whether the assistant is an employee, an independent contractor, or supplied through an agency changes tax, benefits, termination, and liability. The contract label is not the whole answer; how the work is directed and controlled matters.',
        'We frame the review around four questions a buyer can settle in writing: status, remote terms, data duty, and offboarding. Each maps to a Philippine law or standard that the engagement should respect.'
      ]
    },
    {
      heading: 'Worker status and the law',
      paragraphs: [
        'The Department of Labor and Employment is the Philippines authority for labor standards and relations, and the Labor Code governs core employment matters.[4] For an engagement, the practical question is who directs the work, supplies the tools, sets the hours, and controls termination, because those facts shape status more than the title on the contract.',
        'A direct hire, a contractor, and an agency-supplied assistant can look identical on a screen but differ sharply in obligation. Mislabeling status can create back-tax, benefit, or termination exposure that the buyer inherits regardless of the rate paid.',
        'Because status depends on facts and jurisdiction, this article does not classify any model. It points the buyer to confirm the model, the contract, and the tax and employment duties with qualified Philippine and home-country counsel before signing.'
      ]
    },
    {
      heading: 'The Telecommuting Act and written remote terms',
      paragraphs: [
        'The Telecommuting Act recognizes remote-work arrangements for covered private-sector employees and supports documented terms around equipment, work hours, records, and offboarding.[2] For a Philippines-based assistant, that law argues for writing the remote arrangement clearly rather than relying on an informal understanding.',
        'Useful written terms include the working hours and overlap window, the equipment each side provides, the records the assistant may access, the data-handling rules, and the offboarding step. The Act makes the remote arrangement legible; the buyer supplies the specifics.',
        'For contractor or agency models, the same topics belong in the agreement so the remote nature of the work is documented. A written remote terms sheet reduces later disputes about hours, equipment, and data.'
      ]
    },
    {
      heading: 'Data duty as a compliance item',
      paragraphs: [
        'When the assistant processes personal information, the Data Privacy Act sets the national framework: process only for declared, legitimate purposes, protect the data, and keep a responsible owner.[3] That duty rides along with the role whenever customer or employee records are touched.',
        'Compliance here overlaps with security design. CISA ties managed identity, MFA, and auditability to a defensible access posture, which supports both privacy and the written record an engagement may need.[5] Named accounts and logs make the data duty observable.',
        'Put the data duty in the contract: purpose, access limits, breach notice, and offboarding of data. A role that ignores this clause is not merely risky; it may sit outside the legal frame the assistant works under.'
      ]
    },
    {
      heading: 'Offboarding, IP, and owner-only decisions',
      paragraphs: [
        'Offboarding should be written before launch: account removal, secret rotation, return or deletion of records, and a confirmation step. NIST and CISA treat timely privilege removal as a control, and the Telecommuting Act\'s offboarding emphasis makes it a remote-work term too.[1][2][5]',
        'Intellectual property and confidentiality clauses should state who owns work product and how client data is handled after the relationship ends. For a virtual assistant, much of the value is in documents and drafts, so ownership cannot be assumed.',
        'Keep owner-only decisions explicit: money movement, legal judgment, hiring choices, refunds outside policy, and sensitive client decisions stay with the named owner. Writing that line is both an operating rule and a compliance boundary.'
      ]
    },
    {
      heading: 'Limits of this compliance review',
      paragraphs: [
        'This report maps the laws that frame a Philippines-based engagement; it does not classify any specific model or give legal advice.[2][3][4] Status, tax, and termination duties depend on facts a counsel must review.',
        'The cited laws are Philippine; the buyer\'s home-country duties may also apply, especially for tax, data export, and employment. Both sides should be checked.',
        'Standards such as CISA guidance are general controls, not a legal compliance program.[5] Use them as the security layer under the legal layer, not as a replacement.'
      ]
    }
  ],
  evidenceTable: [
    { signal: 'Status decides duties', finding: 'Employee, contractor, and agency models create different tax and labor duties.', buyerUse: 'Confirm the model and facts with counsel before engaging.', limit: 'Label alone does not decide status; facts matter.', sourceIds: [4] },
    { signal: 'Remote terms', finding: 'The Telecommuting Act recognizes covered remote arrangements with written terms.', buyerUse: 'Write hours, equipment, records, and offboarding.', limit: 'Applies to covered employees; confirm scope.', sourceIds: [2] },
    { signal: 'Data duty', finding: 'The Data Privacy Act frames processing of personal information.', buyerUse: 'State purpose, limits, breach notice, and offboarding of data.', limit: 'Duties vary by model and data; get counsel.', sourceIds: [3] },
    { signal: 'Labor authority', finding: 'DOLE is the Philippines labor authority for standards and relations.', buyerUse: 'Use DOLE guidance to scope the engagement correctly.', limit: 'General authority; facts decide the case.', sourceIds: [4] },
    { signal: 'Access record', finding: 'CISA ties managed identity and auditability to compliance posture.', buyerUse: 'Require named accounts, MFA, and logs.', limit: 'Controls support but do not replace legal review.', sourceIds: [5] }
  ],
  implications: [
    { title: 'For executive support', body: 'Confirm status and IP ownership; keep payment and legal decisions with the owner.' },
    { title: 'For customer support', body: 'Write data purpose and breach notice; keep refunds and legal judgment owned.' },
    { title: 'For bookkeeping support', body: 'Document records handling and offboarding; keep sign-off with qualified owners.' },
    { title: 'For operations support', body: 'Put remote terms and account removal in writing before live access.' }
  ],
  methodology: [
    'This report reviewed the Philippine Telecommuting Act and Data Privacy Act via the Lawphil Project, the Department of Labor and Employment as the labor authority, NIST privilege-removal guidance, and CISA identity guidance, all accessed on August 21, 2026. No customer or employee data was used.',
    'We framed the sources as four buyer questions (status, remote terms, data duty, offboarding) and mapped each to a written action. The method is qualitative and intended to plan a Philippines-based engagement, not to classify any model.',
    'Limitations are stated in the article: laws frame but do not decide status, home-country duties may also apply, and standards are controls not legal advice. Buyers should confirm with qualified counsel.'
  ],
  faq: [
    { question: 'Is a virtual assistant an employee or contractor?', answer: 'It depends on how the work is directed and controlled, not the contract label. Confirm the model and duties with qualified counsel before engaging.' },
    { question: 'What remote terms should I write?', answer: 'Working hours and overlap, equipment, records access, data-handling rules, and offboarding, as supported by the Telecommuting Act.' },
    { question: 'What data duty applies?', answer: 'The Data Privacy Act frames processing of personal information; state purpose, limits, breach notice, and offboarding of data in the agreement.' },
    { question: 'What stays with the business owner?', answer: 'Money movement, legal judgment, hiring choices, refunds outside policy, and sensitive client decisions remain owner-only.' },
    { question: 'Is this legal advice?', answer: 'No. This is planning context from public laws and standards. Confirm the model, tax, and employment duties with qualified counsel.' }
  ],
  sources: [
    { id: 1, name: 'NIST SP 800-53 Rev. 5: Security and Privacy Controls', organization: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final', published: '2020-09-23', accessed: '2026-08-21' },
    { id: 2, name: 'Republic Act No. 11165: Telecommuting Act', organization: 'The Lawphil Project', url: 'https://lawphil.net/statutes/repacts/ra2018/ra_11165_2018.html', published: '2018-12-20', accessed: '2026-08-21' },
    { id: 3, name: 'Republic Act No. 10173: Data Privacy Act of 2012', organization: 'The Lawphil Project', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html', published: '2012-08-15', accessed: '2026-08-21' },
    { id: 4, name: 'Department of Labor and Employment', organization: 'Republic of the Philippines', url: 'https://www.dole.gov.ph/', accessed: '2026-08-21' },
    { id: 5, name: 'Identity and Access Management: Recommended Best Practices for Administrators', organization: 'Cybersecurity and Infrastructure Security Agency', url: 'https://www.cisa.gov/sites/default/files/2023-03/identity-and-access-management-recommended-best-practices-administrators.pdf', accessed: '2026-08-21' }
  ],
  related: [
    { title: 'Data privacy for virtual assistants', href: '/research/virtual-assistant-data-privacy-evidence-research', description: 'Access, encryption, and offboarding controls for handing data to an assistant.' },
    { title: 'Virtual assistant onboarding routine', href: '/research/virtual-assistant-onboarding-30-day-routine', description: 'A staged routine that starts with access limits and offboarding readiness.' },
    { title: 'Services', href: '/services', description: 'Review the support areas covered by Virtual Assistant Provider.' },
    { title: 'Plan a Philippines-based role', href: '/contact', description: 'Bring the tasks, hours, and tools for a role plan.' }
  ]
};
