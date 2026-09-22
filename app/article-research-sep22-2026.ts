import type { ResearchPost, ResearchSource } from './fleet-content';

const checked = '2026-09-22';
const allSources: readonly ResearchSource[] = [
  { id: 1, name: 'The NIST Cybersecurity Framework (CSF) 2.0', organization: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20', accessed: checked },
  { id: 2, name: 'Federal Plain Language Guidelines', organization: 'PlainLanguage.gov', url: 'https://www.plainlanguage.gov/guidelines/', accessed: checked },
  { id: 3, name: '2026 Code of Ethics & Standards of Practice', organization: 'National Association of REALTORS', url: 'https://www.nar.realtor/about-nar/governing-documents/code-of-ethics/2026-code-of-ethics-standards-of-practice', published: '2026', accessed: checked },
  { id: 4, name: 'RESO Data Dictionary', organization: 'Real Estate Standards Organization', url: 'https://www.reso.org/data-dictionary/', accessed: checked },
  { id: 5, name: 'Minimum Necessary Requirement', organization: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html', accessed: checked },
  { id: 6, name: 'Security Standards: Technical Safeguards', organization: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/hipaa/for-professionals/security/guidance/cybersecurity/index.html', accessed: checked },
  { id: 7, name: 'FTC Policy Statement Regarding Advertising Substantiation', organization: 'Federal Trade Commission', url: 'https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation', published: '1984-11-23', accessed: checked },
  { id: 8, name: 'Endorsements, Influencers, and Reviews', organization: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/advertising-marketing/endorsements-influencers-reviews', accessed: checked },
  { id: 9, name: "What can't I ask when hiring?", organization: 'U.S. Equal Employment Opportunity Commission', url: 'https://www.eeoc.gov/employers/small-business/4-what-cant-i-ask-when-hiring', accessed: checked },
  { id: 10, name: 'Disability Discrimination and Employment Decisions', organization: 'U.S. Equal Employment Opportunity Commission', url: 'https://www.eeoc.gov/disability-discrimination-and-employment-decisions', accessed: checked },
  { id: 11, name: 'Business Email Compromise', organization: 'FBI Internet Crime Complaint Center', url: 'https://www.ic3.gov/PSA/2014/PSA140627.pdf', accessed: checked },
  { id: 12, name: 'Digital Identity Guidelines', organization: 'National Institute of Standards and Technology', url: 'https://pages.nist.gov/800-63-4/', accessed: checked },
];

type Study = {
  slug: string; title: string; keyword: string; question: string; role: string;
  service: string; sourceIds: readonly number[]; unit: string; risk: string;
  workflow: readonly string[]; scenario: string; boundary: string; limitations: string;
  measures: readonly { signal: string; finding: string; use: string; limit: string; ids: readonly number[] }[];
};

const studies: readonly Study[] = [
  {
    slug: 'real-estate-listing-field-verification-study',
    title: 'Real-estate listing field verification for virtual assistant support',
    keyword: 'real estate virtual assistant listing verification',
    question: 'How should a real-estate assistant verify listing fields without becoming the source of a property claim?',
    role: 'real-estate assistant', service: 'real-estate-assistants', sourceIds: [3, 4, 1],
    unit: 'one proposed listing change linked to the owner-approved source, field definition, channel, reviewer, and final published state',
    risk: 'A tidy listing can still be wrong. Price, status, room counts, measurements, features, media rights, attribution, and disclosure fields may come from different records and may change at different times.',
    workflow: [
      'Start with a field map that names the controlling source for each field. The listing agreement or broker-approved worksheet may control price and authority; an MLS record may control status; approved media records may control photo rights. Do not let a prior portal page become evidence merely because it is easy to copy.',
      'Compare the source value, proposed value, and destination value side by side. Record whether the difference is a format conversion, an approved correction, a new instruction, or an unresolved conflict. Standard field names improve exchange between systems, but a shared label does not prove that the underlying value is current or accurate.[4]',
      'Use an exception state for missing authority, conflicting measurements, stale availability, edited images, unsupported superlatives, and fair-housing-sensitive language. The assistant can identify and route the problem. The broker or authorized listing owner decides the representation and publication.',
      'After publication, read the public page as a consumer would. Check the address or permitted location description, status, price, attribution, media order, contact route, and update time. Preserve the URL and a time-stamped comparison to the approved source.'
    ],
    scenario: 'A portal import retains "available" after the MLS record changes to pending. The assistant does not infer that either system is right. They capture both states, identify the last approved instruction, ask the named broker to decide, then verify the corrected public page. The record distinguishes detection, approval, correction, and live confirmation.',
    boundary: 'An assistant may gather approved facts, normalize fields, flag inconsistencies, and verify publication. A licensed or otherwise authorized real-estate owner remains responsible for advertising authority, representations, disclosures, fair-housing compliance, and final release.',
    limitations: 'The sources describe professional and data standards, not every jurisdiction, MLS rule, brokerage policy, or property type. This report did not inspect a live listing dataset and cannot establish legal compliance.',
    measures: [
      { signal: 'Source-linked fields', finding: 'Each changed field points to a named controlling record.', use: 'Sample price, status, attribution, and one descriptive field.', limit: 'A source can itself be stale or unauthorized.', ids: [3,4] },
      { signal: 'Conflict visibility', finding: 'Disagreements remain open until an owner decides.', use: 'Review the exception queue, published listings and the exception queue.', limit: 'A low count may indicate hidden overrides.', ids: [1] },
      { signal: 'Public-state check', finding: 'The destination is compared after release.', use: 'Catch feed, cache, and mapping errors.', limit: 'One check does not guarantee continued accuracy.', ids: [3,4] },
      { signal: 'Authority boundary', finding: 'The record names who approved the representation.', use: 'Separate preparation from professional judgment.', limit: 'A named approver does not by itself prove compliance.', ids: [3] },
    ],
  },
  {
    slug: 'healthcare-scheduling-minimum-necessary-study',
    title: 'Minimum-necessary healthcare scheduling for virtual assistant teams',
    keyword: 'healthcare virtual assistant scheduling privacy',
    question: 'What information does a scheduling assistant need, and what should stay outside the scheduling lane?',
    role: 'healthcare administrative assistant', service: 'healthcare-admin-assistants', sourceIds: [5, 6, 1],
    unit: 'one scheduling interaction with purpose, identity step, permitted fields, channel, action, exception, and disposition',
    risk: 'Scheduling work can expose names, contact details, appointment types, referrals, insurance information, clinical notes, and caregiver relationships. Convenience can expand access beyond what the task actually requires.',
    workflow: [
      'Define routine scheduling types before granting access. For each type, list the fields the assistant may view or change, the permitted verification step, the communication channel, and the stop condition. HHS explains that routine uses can follow standard protocols, while non-routine requests need appropriate criteria and review.[5]',
      'Design the screen and script around purpose. If a task only needs appointment time, location, contact preference, and an approved status, do not copy diagnosis details into a general queue. If a system exposes more information than the lane needs, treat that as an access-design issue rather than permission to reuse it.',
      'Separate administrative routing from clinical judgment. Symptoms, urgency, treatment questions, medication questions, record amendments, unusual identity conflicts, and requests outside the approved script go to the healthcare owner. The assistant records the request accurately without interpreting it.',
      'Review access, exports, shared inboxes, copied spreadsheets, and message templates. Named accounts, audit trails, secure channels, timeout behavior, and offboarding matter because a correct script cannot compensate for uncontrolled credentials or downloaded data.'
    ],
    scenario: 'A caller asks to move an appointment and adds a new symptom. The assistant completes only the approved identity and scheduling steps, records the caller’s words in the designated field, and routes the clinical content through the approved path. They do not rank urgency, give advice, or paste the detail into a general calendar note.',
    boundary: 'The organization’s privacy, security, and clinical owners define permitted use, verification, minimum fields, retention, channels, and escalation. The assistant follows those controls and stops when the request calls for clinical, legal, privacy, or security judgment.',
    limitations: 'HIPAA applicability and minimum-necessary exceptions depend on the entity, relationship, purpose, and facts. Other laws and contracts may apply. This report is operational research, not legal, clinical, privacy, or security advice.',
    measures: [
      { signal: 'Purpose-to-field map', finding: 'Each routine has an approved minimum field set.', use: 'Compare screens and templates with the task purpose.', limit: 'Minimum necessary does not apply identically to every disclosure.', ids: [5] },
      { signal: 'Non-routine stop', finding: 'Unexpected requests reach a named reviewer.', use: 'Test symptoms, identity conflicts, and unusual disclosures.', limit: 'Escalation design does not determine clinical urgency.', ids: [5,6] },
      { signal: 'Named access', finding: 'Activity is attributable to one account.', use: 'Support review and prompt offboarding.', limit: 'Logs do not show whether a decision was appropriate.', ids: [1,6] },
      { signal: 'Copy control', finding: 'Sensitive detail stays in approved systems.', use: 'Inspect exports, inboxes, and calendar descriptions.', limit: 'A clean sample cannot prove all handling is safe.', ids: [5,6] },
    ],
  },
  {
    slug: 'marketing-claim-substantiation-handoff-study',
    title: 'Marketing claim substantiation before a virtual assistant publishes',
    keyword: 'marketing virtual assistant claim substantiation',
    question: 'What evidence should a marketing assistant require before scheduling an objective claim or endorsement?',
    role: 'marketing assistant', service: 'marketing-assistants', sourceIds: [7, 8, 2],
    unit: 'one proposed claim with exact copy, intended audience, placement, supporting evidence, disclosure, owner approval, and live version',
    risk: 'A content calendar can turn a draft phrase into a repeated public claim. Numbers, comparisons, "best" language, customer outcomes, expert statements, and endorsements need different evidence and may imply more than the writer intended.',
    workflow: [
      'Create a claim record before layout or scheduling. Preserve the exact words, nearby image, audience, channel, landing page, evidence link, evidence date, and owner. The FTC states that advertisers should have a reasonable basis for objective claims before dissemination, and the required support depends on what the claim communicates.[7]',
      'Read for implied meaning as well as literal grammar. "Customers save time" may communicate a typical outcome; "tested" may communicate a study; a chart may imply a comparison even when the caption avoids one. Record the reasonable interpretations that need owner review rather than softening unsupported copy with vague qualifiers.',
      'Treat endorsements as their own evidence lane. Confirm that quoted experience is genuine, authorized, accurately represented, and accompanied by any required material-connection disclosure. A marketing assistant may verify that the approved disclosure is present and conspicuous; the accountable owner decides sufficiency and legal posture.[8]',
      'Lock approved copy or use version identifiers. At publication, compare the live headline, body, image, caption, footnote, link, and disclosure with the approved record. Platform truncation, responsive layouts, link previews, and reposting can separate a disclosure from the message it qualifies.'
    ],
    scenario: 'A draft social post says a service "cuts admin time in half" and attributes the line to a customer. The source folder contains only an informal email with no measured baseline or publication permission. The assistant holds the post, records the missing evidence and consent, and offers neutral factual copy for the marketing owner to review.',
    boundary: 'The assistant can inventory claims, attach sources, preserve versions, check required fields, and stop an incomplete handoff. Marketing, legal, product, and executive owners approve claim meaning, evidence sufficiency, testimonial use, disclosures, and release.',
    limitations: 'FTC materials address U.S. consumer-protection principles and do not replace advice for a specific claim, product, audience, platform, or jurisdiction. No campaign, evidence file, or consumer interpretation study was analyzed.',
    measures: [
      { signal: 'Pre-publication evidence', finding: 'Objective claims have linked support before scheduling.', use: 'Sample numbers, comparisons, and outcomes.', limit: 'A linked file may not support the message consumers take.', ids: [7] },
      { signal: 'Exact approved copy', finding: 'The record preserves words and surrounding context.', use: 'Detect meaning changes during design.', limit: 'Approval does not make a claim truthful.', ids: [7,2] },
      { signal: 'Endorsement disclosure', finding: 'Connection and authorization checks are visible.', use: 'Review testimonials, creators, and employee posts.', limit: 'Presence alone does not prove conspicuous placement.', ids: [8] },
      { signal: 'Live comparison', finding: 'Published content matches the approved version.', use: 'Catch truncation and missing footnotes.', limit: 'Platforms can change rendering later.', ids: [8] },
    ],
  },
  {
    slug: 'recruiting-accommodation-request-routing-study',
    title: 'Recruiting accommodation requests: a safe virtual assistant routing study',
    keyword: 'recruiting virtual assistant accommodation request',
    question: 'How can a recruiting assistant coordinate an accommodation request without collecting or judging medical information?',
    role: 'recruiting assistant', service: 'recruiting-assistants', sourceIds: [9, 10, 2],
    unit: 'one applicant request with process stage, requested change, permitted recipient, scheduling action, confidentiality state, and resolution owner',
    risk: 'A request for a different interview format, extra time, accessible technology, or another process change may reveal sensitive information. An eager coordinator can ask prohibited questions, place details in broad notes, or make a decision reserved for the employer.',
    workflow: [
      'Publish a clear route for requesting changes to the application process. The coordinator needs enough information to route and schedule the request, not a diagnosis. EEOC guidance distinguishes asking whether an applicant can perform job tasks from pre-offer disability questions that generally should not be asked.[9]',
      'Use a narrow intake: applicant identifier, hiring stage, requested process change, timing, preferred contact method, and the authorized accommodation owner. Do not invite medication lists, medical histories, severity narratives, or speculation about future attendance. If documentation is appropriate, the designated owner handles it outside the general scheduling queue.',
      'Keep the accommodation path separate from evaluative notes. Interviewers should receive the approved logistics they need, while access to the underlying request remains limited. A request must not silently become a score, warning flag, or informal comment about fit.',
      'Test ordinary and difficult cases: an accessible video platform, a schedule change, an interpreter request, a last-minute request, unclear wording, and a request that affects a work sample. The assistant should know whom to contact and what can proceed while the owner reviews the change.'
    ],
    scenario: 'An applicant says the timed online exercise is not accessible and asks for another format. The coordinator acknowledges the request, records the process barrier and deadline in the restricted route, pauses the standard exercise, and alerts the named owner. They do not ask for a diagnosis or decide whether the request is reasonable.',
    boundary: 'The assistant coordinates the approved process and protects the request from unnecessary disclosure. The employer’s authorized HR, legal, or accommodation owner handles interactive assessment, documentation rules, undue-hardship questions, decisions, and any change to evaluation criteria.',
    limitations: 'The EEOC sources explain U.S. federal employment principles; coverage, state or local requirements, role facts, and international hiring arrangements can differ. This report did not review applicant records and is not legal or HR advice.',
    measures: [
      { signal: 'Narrow intake', finding: 'The queue captures the requested process change, not a medical history.', use: 'Review forms, email templates, and recruiter notes.', limit: 'Some requests require owner-led follow-up.', ids: [9,10] },
      { signal: 'Restricted routing', finding: 'Only the authorized owner sees sensitive context.', use: 'Inspect permissions and interview packets.', limit: 'Permissions do not prevent every verbal disclosure.', ids: [1,10] },
      { signal: 'Evaluation separation', finding: 'Accommodation data stays out of scoring.', use: 'Compare scorecards with coordination records.', limit: 'Process separation cannot prove absence of bias.', ids: [10] },
      { signal: 'Timely acknowledgment', finding: 'Requests are acknowledged and routed without silent delay.', use: 'Measure routing time with case context.', limit: 'Speed alone does not show a fair decision.', ids: [9] },
    ],
  },
  {
    slug: 'operations-vendor-payment-detail-change-study',
    title: 'Vendor payment-detail changes: an operations assistant verification study',
    keyword: 'operations virtual assistant vendor payment change verification',
    question: 'What should an operations assistant verify when a vendor asks to change payment details?',
    role: 'operations assistant', service: 'operations-assistant-staffing', sourceIds: [11, 12, 1],
    unit: 'one change request with original message, known vendor record, independent contact route, verifier, approval, system change, and downstream notice',
    risk: 'A convincing email can carry fraudulent bank details. A familiar signature, invoice thread, urgent deadline, or matching display name is not independent proof that the vendor authorized the change.',
    workflow: [
      'Separate intake from verification and approval. Preserve the original request, but do not use contact information supplied in that request as the only verification route. Retrieve a previously approved contact path from the vendor master, signed agreement, or another trusted system.',
      'Define what the verification step proves. A return email may prove control of the same compromised mailbox; a callback to an independently sourced number can add a separate channel, but only if the caller and authority are verified under the company’s rule. NIST identity guidance helps frame assurance, while the business must choose a process proportionate to the payment risk.[12]',
      'Require dual control for consequential changes. One person may prepare the packet and another authorized owner may approve the master-data change. Record old and new values in a protected audit trail without exposing full account details in general tickets or chat.',
      'After approval, verify the system state, notification, and first affected transaction under the finance owner’s procedure. A completed vendor-master edit is not permission for the assistant to release payment, choose the account, waive a hold, or decide that suspicious behavior is harmless.'
    ],
    scenario: 'An email inside an existing invoice thread requests a same-day bank change and supplies a new callback number. The assistant quarantines the request, retrieves the vendor contact from the pre-existing master record, and routes the evidence to the finance owner. Urgency changes the escalation speed, not the proof requirement.',
    boundary: 'The assistant can preserve the request, assemble prior records, initiate the approved independent check, and document the handoff. Finance, security, procurement, or another named owner approves vendor identity, banking changes, payment release, fraud response, and exceptions.',
    limitations: 'The FBI notice describes a fraud pattern, and NIST provides general identity principles; neither supplies a universal accounts-payable procedure. Risk, law, banking arrangements, tools, insurance, and company policy differ. No vendor or payment data were analyzed.',
    measures: [
      { signal: 'Independent channel', finding: 'Verification does not rely only on the incoming message.', use: 'Sample changes against prior vendor records.', limit: 'A second channel can also be compromised.', ids: [11,12] },
      { signal: 'Dual control', finding: 'Preparation and approval are attributable to different roles.', use: 'Inspect permissions and change history.', limit: 'Two approvals can repeat the same weak evidence.', ids: [1] },
      { signal: 'Protected audit trail', finding: 'The record shows what changed without broad exposure.', use: 'Support review and incident response.', limit: 'A log cannot validate vendor authority by itself.', ids: [1,12] },
      { signal: 'Payment boundary', finding: 'Master-data work does not silently authorize payment.', use: 'Test roles, holds, and exception paths.', limit: 'Technical separation depends on system configuration.', ids: [1,11] },
    ],
  },
];

const sourceById = (id: number) => allSources.find((item) => item.id === id)!;

export const september22ResearchPosts: readonly ResearchPost[] = studies.map((study, index) => {
  const sources = study.sourceIds.map(sourceById);
  const citations = study.sourceIds.map((id) => `[${id}]`).join('');
  return {
    slug: study.slug,
    featuredImage: '/featured/daily-research-brief-routine.png',
    primaryKeyword: study.keyword,
    title: study.title,
    metaTitle: study.title,
    excerpt: `A source-led operating study for buyers asking: ${study.question}`,
    published: '2026-09-22',
    updated: '2026-09-22',
    readingMinutes: 13,
    revision: `2026-09-22-${index + 1}-${study.slug}-v1`,
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
      { value: checked, label: 'Evidence checked', context: 'The linked source pages were checked for this report on September 22, 2026.', sourceIds: study.sourceIds },
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
      `Evidence scope: ${sources.length} primary or authoritative public sources checked September 22, 2026.`,
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
