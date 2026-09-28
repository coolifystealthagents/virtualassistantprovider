import type { ResearchPost, ResearchSource } from './fleet-content';

const checked = '2026-09-28';
const allSources: readonly ResearchSource[] = [
  { id: 1, name: 'CAN-SPAM Act: A Compliance Guide for Business', organization: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business', accessed: checked },
  { id: 2, name: 'Data Integrity', organization: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/glossary/term/data_integrity', accessed: checked },
  { id: 3, name: 'Guidance on Advertising through Digital Media', organization: 'National Association of Realtors', url: 'https://www.nar.realtor/about-nar/policies/guidance-on-advertising-through-digital-media', accessed: checked },
  { id: 4, name: '2026 Code of Ethics & Standards of Practice', organization: 'National Association of Realtors', url: 'https://www.nar.realtor/about-nar/governing-documents/code-of-ethics/2026-code-of-ethics-standards-practice', accessed: checked },
  { id: 5, name: 'Individuals Right under HIPAA to Access their Health Information', organization: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access/index.html', accessed: checked },
  { id: 6, name: 'Minimum Necessary Requirement', organization: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/hipaa/for-professionals/faq/minimum-necessary/index.html', accessed: checked },
  { id: 7, name: 'Employment Tests and Selection Procedures', organization: 'U.S. Equal Employment Opportunity Commission', url: 'https://www.eeoc.gov/laws/guidance/employment-tests-and-selection-procedures', accessed: checked },
  { id: 8, name: 'Personnel Records Relevant to Discrimination Charges', organization: 'U.S. Equal Employment Opportunity Commission', url: 'https://www.eeoc.gov/employers/recordkeeping-requirements', accessed: checked },
  { id: 9, name: 'Business Guide to the FTC Mail, Internet, or Telephone Order Merchandise Rule', organization: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/business-guide-ftcs-mail-internet-or-telephone-order-merchandise-rule', accessed: checked },
  { id: 10, name: 'The NIST Cybersecurity Framework (CSF) 2.0', organization: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20', accessed: checked },
];

type Study = { slug:string; title:string; keyword:string; question:string; role:string; service:string; sourceIds:readonly number[]; unit:string; risk:string; workflow:readonly string[]; scenario:string; boundary:string; limitations:string; measures:readonly {signal:string;finding:string;use:string;limit:string;ids:readonly number[]}[] };
const studies: readonly Study[] = [
{slug:'executive-calendar-delegated-access-review-study',title:'Delegated calendar access reviews for executive assistants',keyword:'executive assistant delegated calendar access review',question:'How can an executive assistant maintain scheduling access without allowing privileges to drift?',role:'executive assistant',service:'executive-assistant-staffing',sourceIds:[2,10],unit:'one calendar identity linked to purpose, permitted actions, sensitive-calendar exclusions, grantor, review date, last use, exception, and revocation evidence',risk:'Calendar access often expands through convenience. A scheduler may retain visibility after a project ends, inherit a newly sensitive calendar, or use a shared credential that prevents attribution.',workflow:['Inventory each human and service identity with its business purpose. Separate viewing availability, reading details, creating holds, inviting attendees, editing events, and delegating again.[10]','Verify identities through the approved account system and replace shared sign-ins with attributable access where possible. Record the approver and next review date.[2]','Test representative scheduling tasks with the least privilege that completes them. Place confidential calendars, private fields, travel documents, and attendee exports behind explicit need.','Revoke access when the purpose ends and verify the destination state. Route failed removals, orphaned integrations, unexplained grants, and conflicting ownership to security and executive owners.'],scenario:'An assistant can still open board-calendar details after an event-planning project ends. The review identifies an inherited group grant and routes revocation to the administrator instead of relying on a promise not to use it.',boundary:'The assistant may inventory grants, test approved scheduling actions, document purpose, and request removal. Executive, security, privacy, HR, and system owners decide classification, exceptions, monitoring, and final access.',limitations:'Platform capabilities and organizational risk differ. The cited controls do not determine a specific permission set, and no customer calendars or credentials were inspected.',measures:[{signal:'Purpose map',finding:'Every grant supports a named action.',use:'Find excess visibility.',limit:'A stated purpose may be inaccurate.',ids:[10]},{signal:'Attributable identity',finding:'Actions link to an approved account.',use:'Detect shared access.',limit:'Logs may be incomplete.',ids:[2]},{signal:'Sensitive exclusions',finding:'Broad grants do not silently include restricted calendars.',use:'Sample group inheritance.',limit:'Classification needs owner judgment.',ids:[10]},{signal:'Revocation proof',finding:'Ended access is verified.',use:'Review offboarding.',limit:'Later re-grants remain possible.',ids:[2,10]}]},
{slug:'bookkeeping-receipt-source-lineage-study',title:'Receipt source lineage for bookkeeping virtual assistants',keyword:'bookkeeping virtual assistant receipt source lineage',question:'What evidence helps a bookkeeping assistant prevent duplicate, altered, or unmatched receipts?',role:'bookkeeping assistant',service:'bookkeeping-assistants',sourceIds:[2,10],unit:'one receipt linked to original source, vendor, transaction date, amount, payment reference, file fingerprint, duplicate check, category suggestion, reviewer, correction, and retention disposition',risk:'A photographed receipt can be renamed, cropped, forwarded, or imported twice. If the record keeps only a typed amount, a reviewer cannot tell which document supported the entry or whether a correction replaced it.',workflow:['Preserve the original receipt in the approved repository and assign a stable reference. Capture vendor, date, amount, currency, payment clue, source channel, and ingestion time without silently repairing unreadable fields.[2]','Compare candidates by reference, fingerprint, vendor, amount, date, and payment record. Quarantine near-matches rather than deleting one or creating two expenses from one purchase.','Link the source to the proposed transaction and record who approved the account, business purpose, treatment, split, and exception. Preparation stays separate from accounting or tax judgment.','Apply the approved retention schedule and preserve corrections. A replacement image remains linked to the prior version, reason, reviewer, and affected transaction.[10]'],scenario:'A mobile upload and emailed PDF show the same restaurant total on adjacent dates. The assistant keeps both originals, compares the card reference, flags the probable duplicate, and waits for the accountable owner.',boundary:'The assistant may collect, fingerprint, match, index, and reconcile receipts. Finance, accounting, tax, legal, and business owners decide classification, retention, fraud response, corrections, and posting.',limitations:'Record requirements depend on entity, transaction, jurisdiction, and accounting method. The study does not establish that an expense is allowable; no financial records were reviewed.',measures:[{signal:'Original link',finding:'The entry points to the preserved document.',use:'Sample posted expenses.',limit:'A document can still be false.',ids:[2]},{signal:'Duplicate quarantine',finding:'Near-matches receive a decision.',use:'Review multiple intake channels.',limit:'Repeat purchases may match.',ids:[10]},{signal:'Approval separation',finding:'Preparation differs from approval.',use:'Trace consequential entries.',limit:'Approval can be mistaken.',ids:[10]},{signal:'Correction lineage',finding:'Superseded versions remain attributable.',use:'Reconstruct changes.',limit:'Retention rules vary.',ids:[2,10]}]},
{slug:'ecommerce-return-receipt-reconciliation-study',title:'Return receipt reconciliation for ecommerce support assistants',keyword:'ecommerce virtual assistant return receipt reconciliation',question:'How should an ecommerce assistant connect a customer return to carrier, warehouse, and refund evidence?',role:'ecommerce support assistant',service:'ecommerce-assistants',sourceIds:[2,9],unit:'one return linked to order, item, authorization, promised terms, carrier scan, warehouse disposition, refund calculation, payment destination, customer notice, exception owner, and closure evidence',risk:'A return can appear delivered to a carrier while the warehouse has no matching item, or appear received while the refund remains unissued. Closing from one scan hides where customer money and inventory diverge.',workflow:['Capture the approved authorization, item identity, quantity, condition rules, promised timing, and refund destination. Do not broaden policy or promise an unsupported outcome.[9]','Track carrier acceptance and warehouse receipt as separate events. Match package, order, item, quantity, and inspection result; route substitutions, damage, and unmatched scans.','Prepare the refund from the authorized disposition, showing merchandise, shipping, tax, discounts, and tender separately. Do not improvise deductions or change the verified destination.','Verify the payment result and customer notice after submission. Keep declined refunds, partial mismatches, delayed credits, and reopened cases visible until resolved.'],scenario:'Tracking shows delivery, but the warehouse received an unlabeled item that does not match the order. The assistant links both records, pauses the proposed refund, and asks the returns owner to decide identity and disposition.',boundary:'The assistant may capture authorizations, reconcile events, prepare approved refunds, and communicate recorded status. Commerce, finance, legal, fraud, warehouse, and care owners decide policy, disputes, deductions, exceptions, and funds release.',limitations:'Merchant terms, state law, card-network rules, and transaction facts vary. The sources do not define every return timetable, and no orders or refunds were analyzed.',measures:[{signal:'Promise record',finding:'The case retains the terms shown to the customer.',use:'Compare authorization and result.',limit:'Terms may not settle duties.',ids:[9]},{signal:'Event chain',finding:'Carrier and warehouse events remain distinct.',use:'Locate custody gaps.',limit:'Scans can be delayed.',ids:[2]},{signal:'Amount check',finding:'Components reconcile to disposition.',use:'Sample partial returns.',limit:'Tax rules vary.',ids:[9]},{signal:'Destination verification',finding:'Payment and notice are recorded.',use:'Find failed refunds.',limit:'Issuer posting may lag.',ids:[2]}]},
{slug:'customer-support-security-escalation-study',title:'Security escalation evidence for customer support assistants',keyword:'customer support assistant security escalation evidence',question:'What should a customer support assistant record when a routine request may indicate account compromise?',role:'customer support assistant',service:'customer-support-assistants',sourceIds:[2,10],unit:'one suspected event linked to original message, verified account context, observable indicators, restricted evidence location, severity rule, receiving owner, containment instruction, customer-safe response, and disposition',risk:'Requests about changed email addresses, unexpected resets, missing orders, or unfamiliar logins can resemble ordinary maintenance. Diagnosing too much may expose data; recording too little may lose the first useful evidence.',workflow:['Preserve the customer wording and observable timestamps in the authorized system. Record the request, channel, account reference, and authentication state without asserting an attacker or cause.[10]','Apply approved triggers and collect only permitted fields. Never ask for passwords, one-time codes, full payment credentials, or sensitive evidence through an unapproved channel.[2]','Route the record to the security or account-protection owner and capture acknowledgment. Follow only pre-approved holds while the owner decides investigation, notification, and recovery.','Keep the customer response separate from the incident record. Close only when the customer-facing step and security handoff each have a disposition; preserve false-positive outcomes.'],scenario:'A customer requests an email change and reports password-reset notices they did not initiate. The assistant holds the change, records the messages and verification state, and routes the event without requesting a one-time code.',boundary:'The assistant may preserve facts, apply triggers, execute narrow holds, and confirm handoff. Security, privacy, legal, fraud, and identity owners decide severity, containment, investigation, notification, recovery, and release.',limitations:'This is operational routing guidance, not incident-response or legal advice. Threats, platforms, duties, and logs differ; no customer incidents were examined.',measures:[{signal:'Original report',finding:'Customer wording remains available.',use:'Compare intake and escalation.',limit:'Reports can be incomplete.',ids:[10]},{signal:'Restricted collection',finding:'Only approved evidence is requested.',use:'Inspect scripts.',limit:'Customers may volunteer data.',ids:[2]},{signal:'Acknowledgment',finding:'A responder accepted the handoff.',use:'Distinguish sent from received.',limit:'Acceptance is not containment.',ids:[10]},{signal:'Dual disposition',finding:'Support and security paths show outcomes.',use:'Review reopened cases.',limit:'Later evidence can change results.',ids:[2,10]}]},
{slug:'property-maintenance-vendor-credential-expiry-study',title:'Vendor credential expiry controls for property management assistants',keyword:'property management virtual assistant vendor credential expiry',question:'How can a property management assistant keep expired vendor records out of maintenance dispatch?',role:'property management assistant',service:'real-estate-assistants',sourceIds:[2,10],unit:'one vendor assignment linked to property, work category, required credential set, authoritative document, issuer, effective dates, verification time, exception owner, access window, and completion evidence',risk:'A vendor profile can remain marked approved after insurance, license, background requirement, or site authorization expires. Scheduling from a stale status may bypass the property owner’s current requirements.',workflow:['Define required credentials by property and work category before dispatch. Store the authoritative document reference, issuer, covered entity, effective dates, and verification source rather than a free-text approved label.[10]','Recheck time-sensitive records at the decision point. Quarantine unreadable documents, name mismatches, missing endorsements, unknown issuers, and records that expire before work completion.[2]','Keep availability and qualification separate. The assistant may assemble records and schedule only under approved rules; property, legal, safety, insurance, and licensed owners decide adequacy and exceptions.','After assignment, record the approved scope, access window, worker identity where required, arrival evidence, changes, and completion acceptance. Preserve any override with owner, reason, duration, and affected work.'],scenario:'A preferred plumber is available immediately, but the insurance record expired yesterday. The assistant holds dispatch, records the urgent request and stale credential, and routes any emergency exception to the named property owner.',boundary:'The assistant may collect documents, compare identifiers and dates, apply dispatch holds, coordinate approved access, and retain evidence. Property, legal, insurance, licensing, safety, and emergency owners decide requirements, validity, waivers, scope, and release.',limitations:'Credential requirements vary by location, property, contract, trade, and task. A current document does not prove coverage or competence, and no vendor files were audited.',measures:[{signal:'Requirement map',finding:'Each work category has a named credential set.',use:'Compare dispatches by scope.',limit:'Requirements may be incomplete.',ids:[10]},{signal:'Decision-time check',finding:'Expiry is tested when work is assigned.',use:'Find stale approvals.',limit:'Issuer data may lag.',ids:[2]},{signal:'Identity match',finding:'Documents align with the contracted entity.',use:'Review aliases and subsidiaries.',limit:'Names alone do not prove identity.',ids:[2]},{signal:'Override trail',finding:'Exceptions identify owner, reason, and duration.',use:'Review urgent dispatches.',limit:'Documentation does not validate a waiver.',ids:[10]}]},
]

const sourceById = (id: number) => allSources.find((item) => item.id === id)!;

export const september28ResearchPosts: readonly ResearchPost[] = studies.map((study, index) => {
  const sources = study.sourceIds.map(sourceById);
  const citations = study.sourceIds.map((id) => `[${id}]`).join('');
  return {
    slug: study.slug,
    featuredImage: '/featured/daily-research-brief-routine.png',
    primaryKeyword: study.keyword,
    title: study.title,
    metaTitle: study.title,
    excerpt: `A source-led operating study for buyers asking: ${study.question}`,
    published: '2026-09-28',
    updated: '2026-09-28',
    readingMinutes: 13,
    revision: `2026-09-28-${index + 1}-${study.slug}-v1`,
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
      { value: checked, label: 'Evidence checked', context: 'The linked source pages were checked for this report on September 28, 2026.', sourceIds: study.sourceIds },
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
        heading: `Decision worksheet for ${study.title.toLowerCase()}`,
        paragraphs: study.measures.map((measure, measureIndex) => `${study.title} treats ${measure.signal.toLowerCase()} as a separate review question. ${measure.finding} The operating step connected to this question is: ${study.workflow[measureIndex] ?? study.workflow[0]} In the representative case, ${study.scenario} A reviewer can use this combination to ${measure.use.toLowerCase()} The important constraint is that ${measure.limit.toLowerCase()} This makes the test specific to the ${study.role} lane instead of converting a completion label into a professional conclusion. The record should show what was observed, what remained uncertain, who owned the next decision, and which destination state was checked.`),
      },
      {
        heading: `Exception analysis for ${study.keyword}`,
        paragraphs: study.workflow.map((step, stepIndex) => `Within ${study.keyword}, stage ${stepIndex + 1} requires this exact operating action: ${step} The failure being controlled is ${study.risk} Apply that concern to ${study.scenario} For this ${study.role} assignment, evidence should connect the action to ${study.unit}. The accountable reviewer then examines ${study.measures[stepIndex]?.signal.toLowerCase()}: ${study.measures[stepIndex]?.finding} This is useful because it can ${study.measures[stepIndex]?.use.toLowerCase()}, while the interpretation must acknowledge that ${study.measures[stepIndex]?.limit.toLowerCase()} The result is an exception record tied to this workflow, not a generic score or an unsupported claim about the worker.`),
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
      `Evidence scope: ${sources.length} primary or authoritative public sources checked September 28, 2026.`,
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
