import type { ResearchPost, ResearchSource } from './fleet-content';

const checked = '2026-09-23';
const allSources: readonly ResearchSource[] = [
  { id: 1, name: 'Digital Identity Guidelines', organization: 'National Institute of Standards and Technology', url: 'https://pages.nist.gov/800-63-4/', accessed: checked },
  { id: 2, name: 'Business Email Compromise', organization: 'FBI Internet Crime Complaint Center', url: 'https://www.ic3.gov/PSA/2014/PSA140627.pdf', accessed: checked },
  { id: 3, name: 'Phishing Guidance: Stopping the Attack Cycle at Phase One', organization: 'Cybersecurity and Infrastructure Security Agency', url: 'https://www.cisa.gov/resources-tools/resources/phishing-guidance-stopping-attack-cycle-phase-one', accessed: checked },
  { id: 4, name: 'What kind of records should I keep?', organization: 'Internal Revenue Service', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep', accessed: checked },
  { id: 5, name: 'The NIST Cybersecurity Framework (CSF) 2.0', organization: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20', accessed: checked },
  { id: 6, name: 'Recall Handbook', organization: 'U.S. Consumer Product Safety Commission', url: 'https://www.cpsc.gov/s3fs-public/RecallHandbook.pdf', accessed: checked },
  { id: 7, name: 'Recalls and Product Safety Alerts', organization: 'U.S. Consumer Product Safety Commission', url: 'https://www.cpsc.gov/Recalls', accessed: checked },
  { id: 8, name: 'Personnel Records Relevant to Discrimination Charges', organization: 'U.S. Equal Employment Opportunity Commission', url: 'https://www.eeoc.gov/employers/recordkeeping-requirements', accessed: checked },
  { id: 9, name: 'Cybersecurity Performance Goals', organization: 'Cybersecurity and Infrastructure Security Agency', url: 'https://www.cisa.gov/cybersecurity-performance-goals', accessed: checked },
  { id: 10, name: 'Federal Plain Language Guidelines', organization: 'PlainLanguage.gov', url: 'https://www.plainlanguage.gov/guidelines/', accessed: checked },
];

type Study = {
  slug: string; title: string; keyword: string; question: string; role: string; service: string;
  sourceIds: readonly number[]; unit: string; risk: string; workflow: readonly string[];
  scenario: string; boundary: string; limitations: string;
  measures: readonly { signal: string; finding: string; use: string; limit: string; ids: readonly number[] }[];
};

const studies: readonly Study[] = [
  {
    slug: 'executive-calendar-invite-verification-study', title: 'External calendar invite verification for executive assistant teams', keyword: 'executive assistant calendar invite verification',
    question: 'How should an executive assistant verify an unusual external meeting request before exposing calendar details or changing an itinerary?', role: 'executive assistant', service: 'executive-assistant-staffing', sourceIds: [1,2,3],
    unit: 'one external meeting request linked to the incoming message, known contact record, independent verification route, calendar action, owner decision, and final state',
    risk: 'A plausible invitation can impersonate a customer, vendor, colleague, or executive. Accepting it may disclose availability, create a malicious conference link, displace protected time, or begin a business-email-compromise sequence.',
    workflow: ['Classify requests by consequence before acting. A routine invitation from a known thread may follow the normal rule; a new domain, payment context, changed location, unusual urgency, or request for confidential attendees enters verification.', 'Verify through a contact route already held by the organization rather than a phone number or link supplied in the new message. Digital identity guidance helps frame assurance, while the owner decides the assurance level appropriate to the meeting.[1]', 'Preserve the original sender, headers available in the approved system, requested attendees, links, attachments, claimed purpose, and discrepancy. Do not forward a suspicious attachment merely to ask whether it is safe.', 'After authorization, compare the final calendar entry with the approved time, time zone, participants, location, conferencing host, visibility, and reminder settings. Record declines and quarantined requests as outcomes rather than deleting the evidence.'],
    scenario: 'A message using a supplier display name asks the executive to replace a scheduled call with an urgent video link. The domain differs by one character. The assistant holds the change, contacts the supplier through the saved account record, alerts the security owner, and keeps the original event unchanged until the named owner decides.',
    boundary: 'The assistant may triage, preserve, verify through an approved route, and apply an authorized calendar decision. The executive and security owner retain authority over identity confidence, incident response, sensitive attendees, travel changes, and disclosure.',
    limitations: 'The sources provide identity and phishing principles, not a universal calendar protocol or a finding about any provider. Threats and organizational risk tolerances vary.',
    measures: [{signal:'Independent verification',finding:'Unusual requests are checked outside the incoming message.',use:'Sample changed domains, links, and urgent requests.',limit:'A saved channel can also be compromised.',ids:[1,2]},{signal:'Calendar diff',finding:'The approved and final event are compared.',use:'Check time zones, attendees, links, and visibility.',limit:'A correct event can later be edited.',ids:[3]},{signal:'Preserved exception',finding:'Rejected requests remain reviewable.',use:'Support security learning and owner review.',limit:'Retention must follow policy.',ids:[3]},{signal:'Named authority',finding:'Consequential changes name an approver.',use:'Separate coordination from risk acceptance.',limit:'Approval does not prove identity.',ids:[1]}],
  },
  {
    slug: 'bookkeeping-receipt-evidence-chain-study', title: 'Receipt evidence chains for bookkeeping virtual assistant support', keyword: 'bookkeeping virtual assistant receipt records',
    question: 'What evidence should a bookkeeping assistant preserve when organizing receipts without deciding tax treatment?', role: 'bookkeeping assistant', service: 'bookkeeping-assistants', sourceIds: [4,5,10],
    unit: 'one source document linked to receipt date, vendor, amount, payment record, business-purpose note, classification proposal, exception, reviewer, and retained location',
    risk: 'A clean folder or reconciled total can conceal duplicates, unreadable documents, personal charges, missing business purpose, altered files, currency ambiguity, or a classification that requires professional judgment.',
    workflow: ['Define the evidence packet before processing: original document, transaction reference, date, amount, currency, vendor identity, purpose supplied by the owner, and any required approval. IRS guidance emphasizes records that support income, deductions, and credits.[4]', 'Keep capture separate from classification. The assistant may transcribe and propose a queue label, but unclear tax treatment, capitalization, payroll, related-party, mixed-use, and jurisdiction questions go to the authorized accounting or tax owner.', 'Use stable identifiers and duplicate checks based on more than filename. Preserve the original file, record transformations such as OCR or compression, and flag conflicts between the receipt, bank record, purchase order, and owner note.', 'Close the item only after the approved repository is readable, access controlled, backed up according to policy, and linked to the reviewed transaction. A spreadsheet row without the underlying support is not a complete evidence chain.'],
    scenario: 'Two phone photos show the same vendor and amount but different filenames, while the bank feed contains one charge. The assistant links both images to one exception, avoids recording a second expense, and asks the bookkeeping owner whether either image is the authoritative retained copy.',
    boundary: 'The assistant can collect, name, transcribe, link, de-duplicate, and route records. The business and its accounting or tax professionals decide business purpose, deductibility, account treatment, retention duties, corrections, and filings.', limitations:'Record requirements depend on transaction, entity, jurisdiction, accounting method, and professional advice. No client ledger or tax position was reviewed.',
    measures:[{signal:'Source-to-transaction link',finding:'Each entry points to retained support.',use:'Sample ordinary, corrected, and high-value items.',limit:'A document can be false or incomplete.',ids:[4]},{signal:'Duplicate visibility',finding:'Possible copies share one exception trail.',use:'Review vendor, amount, date, and payment matches.',limit:'Similar transactions can be legitimate.',ids:[5]},{signal:'Classification boundary',finding:'Proposals remain distinct from professional decisions.',use:'Inspect ambiguous and mixed-purpose items.',limit:'A label does not establish tax treatment.',ids:[4]},{signal:'Readable retention',finding:'The final source remains accessible to authorized reviewers.',use:'Test retrieval and permissions.',limit:'Access today does not prove full retention compliance.',ids:[4,5]}],
  },
  {
    slug:'ecommerce-product-recall-routing-study', title:'Product recall routing for ecommerce virtual assistant teams', keyword:'ecommerce virtual assistant product recall workflow', question:'How should an ecommerce assistant route a product-safety notice without deciding the remedy or scope?', role:'ecommerce assistant', service:'ecommerce-assistants', sourceIds:[6,7,5], unit:'one safety notice linked to the authoritative notice, product identifier, affected scope, sales channels, inventory state, owner instruction, customer action, and verification', risk:'A recall or safety alert can be missed, over-applied to unaffected items, or reduced to a generic customer-service ticket. Product names alone may not identify the model, lot, date range, importer, or remedy.',
    workflow:['Start from the regulator or manufacturer record approved by the safety owner. Capture identifiers, affected dates or lots, hazard description, remedy, contact route, and notice version; do not infer scope from a headline.[6][7]','Match catalog and order records using the specific identifiers the notice provides. Keep confirmed matches, possible matches, and nonmatches separate. An absent field is an exception, not proof that an item is unaffected.','Freeze only the actions authorized by the accountable owner. The assistant can prepare affected-item lists, hold listings where instructed, and draft communications from approved language; legal, safety, and operations owners decide scope and remedy.','Verify each destination after action: storefront availability, marketplace listings, warehouse holds, open orders, customer-contact queue, and retained evidence. Record platform delays and rejected changes rather than marking the batch complete.'],
    scenario:'A safety notice names two model numbers sold under several storefront titles. One listing lacks the model field. The assistant holds that record in the possible-match queue, preserves the supplier identifier, and asks the product-safety owner to decide instead of assuming the marketing title excludes it.', boundary:'The assistant gathers authoritative notices, maps identifiers, prepares controlled actions, and verifies destinations. Product-safety, legal, marketplace, and operations owners decide applicability, reporting, remedy, customer language, and release.', limitations:'Recall obligations and remedies vary by product, jurisdiction, seller role, and notice. This report did not inspect inventory or determine whether any product is affected.', measures:[{signal:'Identifier match',finding:'Scope is based on notice identifiers.',use:'Compare model, lot, date, and importer fields.',limit:'Catalog data may be incomplete.',ids:[6,7]},{signal:'Possible-match queue',finding:'Missing identifiers remain unresolved.',use:'Prevent silent exclusion.',limit:'A queue does not resolve applicability.',ids:[6]},{signal:'Channel verification',finding:'Every instructed destination is checked.',use:'Find stale listings and failed holds.',limit:'A later sync may reverse a state.',ids:[5]},{signal:'Owner-approved remedy',finding:'Customer actions trace to accountable approval.',use:'Separate preparation from safety judgment.',limit:'Approval may still need legal review.',ids:[6]}],
  },
  {
    slug:'employee-offboarding-access-removal-study', title:'Employee offboarding access removal for administrative assistant support', keyword:'virtual assistant offboarding access removal', question:'How can an administrative assistant coordinate offboarding while keeping access decisions and personnel judgments with authorized owners?', role:'administrative assistant', service:'operations-assistant-staffing', sourceIds:[8,9,5], unit:'one departure linked to the authoritative trigger, effective time, account inventory, owner decisions, removal evidence, asset state, exceptions, and retained personnel record', risk:'A checklist can show completion while tokens, shared passwords, forwarding rules, vendor portals, physical assets, or recovery methods remain active. Broad notes can also expose sensitive personnel information.',
    workflow:['Accept the offboarding trigger only from the designated HR or management route. Record the effective time and authorized scope without copying performance, medical, complaint, or investigation detail into an operational checklist.','Build the account inventory from identity systems, owner-maintained application lists, role records, and manager confirmation. Include named accounts, groups, shared credentials, API keys, devices, badges, forwarding, delegates, and recovery contacts as policy requires.[9]','Assign each action to the system owner and distinguish disablement, revocation, transfer, archival, preservation, and deletion. The assistant coordinates evidence; HR, legal, security, and data owners decide timing and retention.','At the effective time, verify results in each authoritative system and escalate failures. A submitted ticket is not removal evidence. Preserve timestamps, system responses, exceptions, temporary controls, and the person accountable for follow-up.'],
    scenario:'A departing coordinator is removed from the main directory, but remains an administrator in a vendor portal and a recovery contact for a shared mailbox. The assistant records both exceptions, alerts the security owner, and keeps the case open until the destination systems show the approved state.', boundary:'The assistant may coordinate an authorized checklist, protect restricted context, collect system evidence, and chase exceptions. HR, legal, security, managers, and system owners decide the trigger, timing, preservation, transfer, notification, and deletion.', limitations:'Employment, privacy, preservation, and access duties vary. The sources do not prescribe one offboarding workflow, and no organization’s accounts or personnel files were audited.', measures:[{signal:'Authoritative trigger',finding:'Timing and scope trace to an approved owner.',use:'Test ordinary and urgent departures.',limit:'The trigger may later be amended.',ids:[8]},{signal:'Account inventory',finding:'Named and indirect access are considered.',use:'Compare identity, device, vendor, and recovery records.',limit:'Unknown shadow tools may remain.',ids:[9]},{signal:'Destination evidence',finding:'System state confirms the requested action.',use:'Distinguish tickets from completed revocation.',limit:'Evidence can become stale.',ids:[5,9]},{signal:'Restricted context',finding:'Operational records omit unnecessary personnel detail.',use:'Inspect checklist fields and permissions.',limit:'Data minimization requires local policy.',ids:[8]}],
  },
  {
    slug:'customer-support-account-recovery-escalation-study', title:'Account recovery escalation boundaries for customer support assistants', keyword:'customer support virtual assistant account recovery', question:'Where should a customer support assistant stop when a user cannot pass the approved account-recovery process?', role:'customer support assistant', service:'customer-support-assistants', sourceIds:[1,3,5], unit:'one recovery contact linked to claimed account, approved verification steps, disclosed fields, risk signals, attempted actions, escalation owner, decision, and customer-visible result', risk:'A helpful agent can become the path around authentication. Urgency, personal details, purchase knowledge, caller confidence, or access to an email thread may be persuasive without meeting the organization’s approved assurance level.',
    workflow:['Give the assistant a fixed recovery script with permitted signals, prohibited disclosures, attempt limits, and stop conditions. Verification requirements should be selected by the service owner from the risk of the account and action, not improvised by the agent.[1]','Collect only the data required by the approved step and reveal no account facts merely to help the claimant answer. Treat requests to change email, phone, multifactor method, payout destination, or administrator as consequential changes.','Route failed, conflicting, high-risk, or socially engineered cases to the named identity or security owner. Do not let a supervisor override become an undocumented shortcut; preserve the reason, authority, and resulting state.','After an approved recovery, verify notifications, active sessions, recovery methods, recent sensitive changes, and any required monitoring. Tell the customer what happened in plain language without exposing internal security rules that would aid evasion.'],
    scenario:'A caller knows recent order details but cannot access the registered email and asks the assistant to replace both the email and multifactor number. The assistant does not confirm additional account data or make the changes. They preserve the attempted path and route the case to the authorized recovery owner.', boundary:'The assistant follows the approved script, minimizes disclosure, records signals, and escalates at the stop rule. Identity, fraud, security, and account owners decide assurance, exceptions, recovery, session revocation, monitoring, and notification.', limitations:'NIST guidance is risk based and implementation specific. This study does not define an assurance level for any service or prove that a recovery method prevents fraud.', measures:[{signal:'Script adherence',finding:'The same approved steps govern comparable requests.',use:'Review normal, failed, and escalated cases.',limit:'A consistent script can still be weak.',ids:[1]},{signal:'Disclosure control',finding:'Agents do not reveal facts to coach a claimant.',use:'Inspect recordings and templates where lawful.',limit:'Samples may miss unrecorded contacts.',ids:[1,3]},{signal:'Documented exception',finding:'Overrides name the authority and reason.',use:'Find informal recovery shortcuts.',limit:'Documentation does not make an override safe.',ids:[5]},{signal:'Post-recovery state',finding:'Sessions and recovery methods are checked.',use:'Confirm the full action completed.',limit:'Later compromise remains possible.',ids:[1,5]}],
  },
];

const sourceById = (id: number) => allSources.find((item) => item.id === id)!;

export const september23ResearchPosts: readonly ResearchPost[] = studies.map((study, index) => {
  const sources = study.sourceIds.map(sourceById);
  const citations = study.sourceIds.map((id) => `[${id}]`).join('');
  return {
    slug: study.slug,
    featuredImage: '/featured/daily-research-brief-routine.png',
    primaryKeyword: study.keyword,
    title: study.title,
    metaTitle: study.title,
    excerpt: `A source-led operating study for buyers asking: ${study.question}`,
    published: '2026-09-23',
    updated: '2026-09-23',
    readingMinutes: 13,
    revision: `2026-09-23-${index + 1}-${study.slug}-v1`,
    takeaways: [
      study.workflow[0],
      study.boundary,
      'A completed administrative step is not evidence that the underlying professional decision was correct.',
      'Keep missing, contradictory, and corrected records visible so a reviewer can reconstruct the handoff.',
    ],
    headlineStats: [
      { value: '1', label: 'Defined observation unit', context: `The review unit is ${study.unit}.`, sourceIds: [study.sourceIds[0]] },
      { value: String(sources.length), label: 'Direct authoritative sources', context: 'Each source is named, linked, and checked on the publication date.', sourceIds: study.sourceIds },
      { value: '2', label: 'Required perspectives', context: 'Review the original source and the final destination rather than trusting a completion label.', sourceIds: [study.sourceIds[0], study.sourceIds[1]] },
      { value: '0', label: 'Guaranteed outcomes', context: 'The cited guidance does not guarantee worker, provider, compliance, or business results.', sourceIds: [study.sourceIds[0]] },
      { value: 'Named', label: 'Decision owner', context: 'The consequential judgment stays with an authorized owner.', sourceIds: [study.sourceIds[2]] },
      { value: checked, label: 'Evidence checked', context: 'The linked source pages were checked for this report on September 23, 2026.', sourceIds: study.sourceIds },
    ],
    sections: [
      {
        heading: `Research question: ${study.question}`,
        paragraphs: [
          study.risk,
          `This report studies a bounded work lane for a Philippines-based ${study.role}. It does not grade a worker, provider, profession, country, or software product. The question is whether a buyer can define a traceable administrative process while keeping consequential judgment with the correct owner.`,
          `The unit of observation is ${study.unit}. A fixed unit prevents a review from drifting into vague impressions such as "careful" or "responsive." It also makes omissions countable: if a source, decision, or final state is absent, the record is incomplete rather than quietly successful.`,
        ],
      },
      {
        heading: 'What the sources establish and where they stop',
        paragraphs: [
          `The cited materials establish relevant duties, control ideas, or field definitions for this workflow.${citations} They do not certify Virtual Assistant Provider, any Philippines-based worker, or any proposed procedure. Applying them to an assistant work lane is an operational inference, clearly separated here from the source facts.`,
          'Authority matters more than source count. This report favors issuing agencies, standards bodies, and professional rule publishers over summaries. A second page that repeats the first is not independent corroboration. Source age is recorded where the publisher supplies it; the checked date only says when the page was reviewed, not when every underlying rule or fact took effect.',
          'A buyer should still confirm which laws, contracts, platform rules, professional duties, and internal policies apply. Public guidance can shape a safer question and a better work sample. It cannot decide a live case without its facts, jurisdiction, authority chain, and qualified review.',
        ],
      },
      {
        heading: 'A testable operating procedure',
        paragraphs: [...study.workflow],
      },
      {
        heading: 'Build the record before measuring performance',
        paragraphs: [
          'Create a structured record with a stable identifier, received time, requester, purpose, source links, permitted action, current owner, deadline, status, exception reason, approval, final destination, and verification time. Use controlled status values. "Done" should mean that the defined finish line was checked, not merely that an email was sent.',
          'Preserve the first state and append corrections. Overwriting a wrong value removes the evidence needed to learn whether the problem came from the request, a field mapping, a copied template, an access limit, or an assistant decision. Corrections are useful operational data and should not be treated as an embarrassment to hide.',
          'Minimize sensitive content. A review record usually needs the evidence type and decision trail, not an unrestricted copy of every underlying document. Put protected material in its approved system and link by identifier where policy permits. Do not move information into personal notes merely to make review easier.',
        ],
      },
      {
        heading: 'Sampling, denominators, and competing explanations',
        paragraphs: [
          'Review all early live items until the definition and escalation path are stable. Later sampling can be risk based, but it should always include exceptions, corrected items, sensitive actions, new request types, apparent failures, and a selection of ordinary closures. A sample containing only clean completed items cannot describe the lane.',
          'Report both numerator and denominator. A correction rate needs the number of eligible items, the observation window, exclusions, unresolved cases, and whether one item can contain several defects. Median handling time needs paused states and owner-wait time separated from assistant work time. Otherwise a fast number may reward unsafe guessing or hidden work.',
          'Before attributing an outcome to the assistant, consider unclear instructions, missing source records, permissions, tool defaults, queue mix, novelty, volume, time-zone overlap, reviewer delay, and changed owner decisions. Look deliberately for a case that contradicts the preferred explanation. The aim is to improve the system, not turn incomplete workflow data into a personality judgment.',
        ],
      },
      {
        heading: 'Representative case and stop rule',
        paragraphs: [
          study.scenario,
          'The stop rule should be written before the task begins: when evidence is missing, conflicting, sensitive, or outside delegated authority, preserve the current state, avoid the consequential action, identify the question, and route it to the named owner. A safe stop is a valid output when the task definition says so.',
          'Use fictional or fully redacted information in a candidate work sample. The test should score source discipline, field accuracy, clarity, privacy, questions asked, and escalation judgment. It should not expose a real customer, patient, applicant, vendor, property client, or account.',
        ],
      },
      {
        heading: 'Role boundary and buyer interpretation',
        paragraphs: [
          study.boundary,
          'A buyer should ask for a redacted example showing the request, permitted action, source check, exception, owner decision, correction, and final verification. The useful signal is not polished prose alone. It is whether another authorized person can reproduce what happened without relying on memory or private chat.',
          'Provider claims require the same discipline. A process description is not evidence that every case follows it. Ask how access is granted and removed, how reviewers are calibrated, how exceptions are covered during absences, how corrections are retained, and which decisions the client must continue to own.',
        ],
      },
      {
        heading: 'Limitations and conclusion',
        paragraphs: [
          study.limitations,
          'This qualitative design has no live sample, comparison group, measured error rate, or causal estimate. It cannot support a benchmark for speed, accuracy, cost, compliance, candidate quality, or provider quality. Those claims would require defined populations, direct observations, consistent labels, and analysis suited to the decision.',
          `The practical conclusion is narrow: define ${study.unit}; preserve source, decision, and final-state evidence; and keep owner-only judgment outside the assistant lane. That design gives a buyer something reviewable without pretending that documentation eliminates uncertainty.`,
        ],
      },
    ],
    evidenceTable: study.measures.map((item) => ({
      signal: item.signal, finding: item.finding, buyerUse: item.use, limit: item.limit, sourceIds: item.ids,
    })),
    implications: [
      { title: 'For buyers', body: 'Ask for one redacted, end-to-end record and the written stop rule before expanding the work lane.' },
      { title: 'For managers', body: 'Review exceptions and corrections alongside clean closures; keep owner waiting time separate from assistant handling time.' },
      { title: `For the ${study.role}`, body: 'Preserve the source, state uncertainty plainly, use approved systems, and stop outside delegated authority.' },
      { title: 'For providers', body: 'Explain access control, reviewer calibration, absence coverage, correction handling, and client-owned decisions.' },
    ],
    methodology: [
      `Research question: ${study.question}`,
      `Evidence scope: ${sources.length} primary or authoritative public sources checked September 23, 2026.`,
      'Method: map source principles to a proposed observation unit, workflow, evidence table, role boundary, and falsifiable stop rule.',
      'Fact/inference separation: source-backed statements carry numbered citations; the workflow design and buyer conclusions are explicitly presented as analysis.',
      `Limitations: ${study.limitations}`,
    ],
    faq: [
      { question: 'Does this report prove a provider or assistant is qualified?', answer: 'No. Qualification requires role-specific work samples, references, access review, and observed production evidence.' },
      { question: 'Can the assistant make the underlying professional decision?', answer: `Not from this workflow. ${study.boundary}` },
      { question: 'What should a buyer inspect first?', answer: 'Inspect one ordinary case, one exception, one correction, and the associated source and final-state evidence.' },
      { question: 'Is a low error rate enough?', answer: 'No. Definitions, denominator, sample selection, missing records, risk mix, and owner delays must accompany any rate.' },
      { question: 'When should the procedure change?', answer: 'Review it after material changes to law, policy, tools, access, work type, or observed failure, with approval from the accountable owner.' },
    ],
    sources,
    related: [
      { title: `${study.role} service guide`, href: `/services/${study.service}`, description: 'Review the service scope, common tasks, controls, and launch path.' },
      { title: 'Research library', href: '/research', description: 'Compare other source-led reports for Philippines-based staffing decisions.' },
      { title: 'Plan a Philippines-based role', href: '/contact', description: 'Bring the tasks, tools, hours, access limits, and owner-only decisions for a role plan.' },
    ],
  };
});
