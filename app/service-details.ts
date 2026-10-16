export type ServiceDetail = {
  whoFor: string;
  inputs: string[];
  deliverables: string[];
  scenario: { title: string; body: string };
  faq: { question: string; answer: string }[];
  related: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  'executive-assistant-staffing': {
    whoFor: 'Executives who have a stable set of calendar, inbox, meeting, and travel routines but need to keep commitments and sensitive judgment under their own control.',
    inputs: ['Calendar rules, working hours, buffers, and no-book conditions', 'Redacted inbox examples, priority contacts, and escalation categories', 'Travel preferences, approval thresholds, and meeting-note format'],
    deliverables: ['Daily schedule and conflict brief', 'Categorized inbox queue with draft replies', 'Approval-ready itinerary comparisons', 'Decision and follow-up register'],
    scenario: { title: 'A calendar conflict with an urgent client request', body: 'The assistant compares the calendar rules, drafts two options, and flags the tradeoff. The executive chooses the commitment; the assistant updates attendees and records the follow-up.' },
    faq: [{ question: 'Can this role accept meetings without review?', answer: 'Only within written availability, buffer, attendee, and meeting-type rules. Exceptions stay with the executive.' }, { question: 'Should the assistant use the executive password?', answer: 'No. Use named or delegated access, limited permissions, and an access-removal checklist.' }],
    related: ['operations-assistant-staffing', 'sales-support-assistants'],
  },
  'operations-assistant-staffing': {
    whoFor: 'Operations owners with repeat queues, clear systems of record, and recurring coordination work that is being lost between teams or tools.',
    inputs: ['One workflow map with owners, deadlines, and exception paths', 'Access to approved source systems and current SOPs', 'Priority rules, update cadence, and escalation contacts'],
    deliverables: ['Current queue with owner and due-date status', 'Blocker and exception report', 'Source-linked tracker updates', 'Proposed SOP corrections for owner review'],
    scenario: { title: 'A vendor task is late and blocks a customer deadline', body: 'The assistant verifies the source status, records the dependency, sends the approved follow-up, and escalates the priority conflict to the operations owner instead of changing the plan.' },
    faq: [{ question: 'Can the assistant redesign the process?', answer: 'The assistant can document friction and propose corrections. Process ownership and material changes remain with the operations owner.' }, { question: 'What should launch first?', answer: 'Start with one low-risk recurring queue whose inputs, owners, deadlines, and exceptions are already understood.' }],
    related: ['executive-assistant-staffing', 'customer-support-assistants'],
  },
  'customer-support-assistants': {
    whoFor: 'Support teams with repeat ticket categories, an up-to-date knowledge base, and a manager available for policy, refund, privacy, and account-security exceptions.',
    inputs: ['Approved answers and tone examples', 'Ticket categories, urgency rules, and service policies', 'Escalation owners for refunds, security, and policy exceptions'],
    deliverables: ['Accurate replies for approved ticket types', 'Tagged escalation queue with preserved context', 'Order or appointment status updates', 'Weekly question and knowledge-gap summary'],
    scenario: { title: 'A customer asks for an out-of-policy refund', body: 'The assistant verifies the account context, acknowledges the request without promising an outcome, and routes the complete case to the manager who owns the refund decision.' },
    faq: [{ question: 'Can the assistant issue refunds?', answer: 'Not unless a tightly limited rule and permission are explicitly approved. Exceptions and unusual amounts should route to a manager.' }, { question: 'How is reply quality checked?', answer: 'Review accuracy, tone, privacy handling, and escalation choice against sampled tickets and current guidance.' }],
    related: ['ecommerce-assistants', 'operations-assistant-staffing'],
  },
  'sales-support-assistants': {
    whoFor: 'Sales teams that need cleaner records, consistent approved follow-up, and better meeting preparation while sellers retain qualification, pricing, negotiation, and promises.',
    inputs: ['CRM field definitions and stage rules', 'Approved sources, scripts, consent rules, and no-contact lists', 'Seller handoff criteria and proposal-input checklist'],
    deliverables: ['Source-backed CRM updates', 'Approved follow-up messages and meeting coordination', 'Meeting briefs with open questions', 'Exception list for seller decisions'],
    scenario: { title: 'A prospect asks for a discount in reply to a follow-up', body: 'The assistant records the reply, preserves the prospect context, and routes it to the seller. Pricing and negotiation language are never improvised.' },
    faq: [{ question: 'Does this replace a salesperson?', answer: 'No. It supports administration and approved follow-up; qualification judgment, commercial terms, and closing remain with sales owners.' }, { question: 'What makes a safe CRM update?', answer: 'Each material update should point to an observed source such as a message, call note, form, or approved seller instruction.' }],
    related: ['executive-assistant-staffing', 'marketing-assistants'],
  },
  'bookkeeping-assistants': {
    whoFor: 'Finance teams that need organized source documents, consistent record preparation, and exception lists while accountable professionals retain payment, tax, and final reconciliation decisions.',
    inputs: ['Chart of accounts and documented coding rules', 'Invoices, receipts, statements, and approved source locations', 'Close calendar, materiality rules, and finance-owner escalation path'],
    deliverables: ['Named and organized source-document set', 'Prepared transaction records with source links', 'Duplicate, missing, and unreconciled-item list', 'Approval-ready reminder drafts'],
    scenario: { title: 'A transaction could fit two accounting categories', body: 'The assistant records the source, marks the ambiguity, and routes the item to the bookkeeper or finance owner rather than choosing an unsupported treatment.' },
    faq: [{ question: 'Can the assistant release payments?', answer: 'Payment release and bank administration should remain separated from preparation work and held by authorized finance owners.' }, { question: 'Can this role give tax advice?', answer: 'No. Tax classification and professional accounting judgment belong to qualified, accountable professionals.' }],
    related: ['operations-assistant-staffing', 'ecommerce-assistants'],
  },
  'ecommerce-assistants': {
    whoFor: 'Stores with documented catalog, order, and customer-update routines that need daily execution while owners retain pricing, refund, fraud, and product-claim decisions.',
    inputs: ['Approved product source records and publishing workflow', 'Order, fulfillment, return, and customer-response rules', 'Escalation paths for fraud, refunds, claims, and inventory conflicts'],
    deliverables: ['Source-backed catalog updates', 'Order and fulfillment exception queue', 'Approved routine customer updates', 'Inventory discrepancy and stalled-order report'],
    scenario: { title: 'Product inventory conflicts across systems', body: 'The assistant compares the approved sources, pauses the customer-facing change, and reports the mismatch to the store owner instead of guessing which quantity is correct.' },
    faq: [{ question: 'Can the assistant change prices?', answer: 'Only when an approved source and explicit workflow authorize the change. Pricing strategy and exceptions stay with the owner.' }, { question: 'Can the assistant decide a fraud case?', answer: 'No. The assistant can collect context and flag signals; the authorized owner or platform process makes the decision.' }],
    related: ['customer-support-assistants', 'marketing-assistants'],
  },
  'real-estate-assistants': {
    whoFor: 'Licensed real-estate teams that need listing, inquiry, appointment, and transaction-file administration without delegating licensed advice or representation.',
    inputs: ['Approved listing facts and source documents', 'Inquiry scripts, appointment rules, and licensed-agent escalation criteria', 'Transaction checklist and jurisdiction-specific supervision rules'],
    deliverables: ['Source-checked listing drafts', 'Complete inquiry and appointment records', 'Transaction checklist status', 'Exception queue for licensed review'],
    scenario: { title: 'A buyer asks whether a property is a good investment', body: 'The assistant records the question and routes it to the licensed professional. The assistant does not offer valuation, legal, financing, or investment advice.' },
    faq: [{ question: 'Can the assistant negotiate with a buyer?', answer: 'No. Negotiation, representation, and licensed judgment stay with the responsible real-estate professional.' }, { question: 'What can be delegated safely?', answer: 'Administrative work such as source-backed listing preparation, scheduling, record updates, and checklist follow-through can be scoped with supervision.' }],
    related: ['sales-support-assistants', 'executive-assistant-staffing'],
  },
  'healthcare-admin-assistants': {
    whoFor: 'Healthcare offices with approved administrative workflows, privacy controls, and accountable clinical staff who retain medical judgment and patient-care decisions.',
    inputs: ['Approved scheduling, intake, and reminder scripts', 'Minimum-necessary access policy and privacy escalation path', 'Clinical and urgent-message routing rules'],
    deliverables: ['Scheduled appointments and documented reminders', 'Complete administrative intake queue', 'Records-request status log', 'Urgent or clinical-message escalation record'],
    scenario: { title: 'A patient message includes new symptoms', body: 'The assistant does not interpret the symptoms. The message is preserved and routed immediately through the practice’s clinical or urgent escalation process.' },
    faq: [{ question: 'Can the assistant answer medical questions?', answer: 'No. Clinical questions, triage, diagnosis, and treatment decisions must go to authorized clinical staff.' }, { question: 'How should access be limited?', answer: 'Use named accounts, minimum-necessary permissions, approved devices and tools, activity review, and prompt access removal.' }],
    related: ['customer-support-assistants', 'operations-assistant-staffing'],
  },
  'marketing-assistants': {
    whoFor: 'Marketing owners with approved brand guidance, source material, and a review process who need production coordination rather than independent strategy or unsupported claims.',
    inputs: ['Approved brief, audience, brand voice, and channel requirements', 'Source assets, usage rights, and claim evidence', 'Publishing calendar, reviewer, and correction process'],
    deliverables: ['Draft content and asset checklist', 'Scheduled approved posts or campaigns', 'Source and rights register', 'Performance-data export for owner interpretation'],
    scenario: { title: 'A draft includes a performance claim without evidence', body: 'The assistant removes or flags the claim and asks the marketing owner for a source. It is not published merely because similar wording appears elsewhere.' },
    faq: [{ question: 'Can the assistant set marketing strategy?', answer: 'The role can support research and execution. Positioning, budgets, claims, and strategic choices remain with the accountable marketing owner.' }, { question: 'Who approves publication?', answer: 'Name a reviewer and approval state for each channel, especially for regulated, comparative, or performance-related content.' }],
    related: ['sales-support-assistants', 'ecommerce-assistants'],
  },
  'recruiting-assistants': {
    whoFor: 'Recruiting teams with documented criteria and accountable hiring managers who need candidate administration without delegating final selection or sensitive employment decisions.',
    inputs: ['Approved role brief and job requirements', 'Candidate communication templates and interview workflow', 'Data-retention, consent, and escalation rules'],
    deliverables: ['Complete candidate records and schedule', 'Criteria-based screening notes', 'Interview packet and missing-information list', 'Candidate communication status log'],
    scenario: { title: 'A candidate requests an accommodation', body: 'The assistant preserves the request and routes it to the authorized recruiting or people owner. The assistant does not judge eligibility or improvise a response.' },
    faq: [{ question: 'Can the assistant reject candidates?', answer: 'Final selection and sensitive employment decisions should remain with accountable hiring owners. Administrative screening must follow documented job criteria.' }, { question: 'How should candidate data be handled?', answer: 'Limit collection and access, use approved systems, follow retention rules, and route privacy or accommodation questions to the responsible owner.' }],
    related: ['operations-assistant-staffing', 'executive-assistant-staffing'],
  },
};
