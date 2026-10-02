import type { ResearchPost, ResearchSource } from './fleet-content';

const checked = '2026-10-02';
const allSources: readonly ResearchSource[] = [
  { id: 1, name: 'Cybersecurity Framework 2.0', organization: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20', accessed: checked },
  { id: 2, name: 'Data Integrity', organization: 'National Institute of Standards and Technology', url: 'https://csrc.nist.gov/glossary/term/data_integrity', accessed: checked },
  { id: 3, name: 'Protecting Personal Information: A Guide for Business', organization: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business', accessed: checked },
  { id: 4, name: 'CAN-SPAM Act: A Compliance Guide for Business', organization: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business', accessed: checked },
  { id: 5, name: 'Business Email Imposters', organization: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/business-email-imposters', accessed: checked },
  { id: 6, name: 'How long should I keep records?', organization: 'Internal Revenue Service', url: 'https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records', accessed: checked },
  { id: 7, name: 'Pre-Employment Inquiries and Disability', organization: 'U.S. Equal Employment Opportunity Commission', url: 'https://www.eeoc.gov/pre-employment-inquiries-and-disability', accessed: checked },
  { id: 8, name: 'Job Applicants and the ADA', organization: 'U.S. Equal Employment Opportunity Commission', url: 'https://www.eeoc.gov/laws/guidance/job-applicants-and-ada', accessed: checked },
  { id: 9, name: 'Minimum Necessary Requirement', organization: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/minimum-necessary-requirement/index.html', accessed: checked },
  { id: 10, name: 'Summary of the HIPAA Privacy Rule', organization: 'U.S. Department of Health and Human Services', url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html', accessed: checked },
];

type Study = { slug:string; title:string; keyword:string; question:string; role:string; service:string; sourceIds:readonly number[]; unit:string; risk:string; workflow:readonly string[]; scenario:string; boundary:string; limitations:string; measures:readonly {signal:string;finding:string;use:string;limit:string;ids:readonly number[]}[] };
const studies: readonly Study[] = [
  {slug:'sales-lead-consent-provenance-study',title:'Consent provenance for sales-support lead handoffs',keyword:'sales support assistant lead consent provenance',question:'What evidence should follow a lead from acquisition through an assistant-led sales handoff?',role:'sales-support assistant',service:'sales-support-assistants',sourceIds:[4,2,3],unit:'one lead linked to acquisition source, submitted wording, timestamp, contact fields, stated purpose, suppression state, permitted channel, receiving owner, and final disposition',risk:'A contact record can arrive without the form, list source, disclosure, or suppression history that explains whether and how it should be used. A clean CRM row is not evidence of permission.',workflow:['Preserve the acquisition record, exact submitted fields, source page or event, timestamp, and applicable disclosure before enrichment or routing.[4]','Reconcile email, phone, account, purpose, and suppression state against approved systems. Quarantine conflicting identities or missing provenance instead of filling gaps from assumption.[2]','Apply only the approved channel and cadence rule. Keep research facts separate from permission facts, and prevent enrichment from being mistaken for consent.','Record acceptance by the sales owner and the outcome of the permitted handoff. Retain corrections and opt-out changes across every destination rather than overwriting history.[3]'],scenario:'A conference spreadsheet contains a work email but no booth scan, form text, or outreach preference. The assistant preserves the row, labels provenance missing, and routes the eligibility question instead of launching a sequence.',boundary:'The assistant may preserve acquisition evidence, reconcile systems, apply approved routing rules, and withhold uncertain records. Marketing, sales, privacy, and legal owners decide lawful basis, consent, channel eligibility, cadence, and release.',limitations:'Communication rules vary by message, relationship, location, and channel. This study is operational guidance, not legal advice, and no lead database was audited.',measures:[{signal:'Acquisition evidence',finding:'Each lead retains its source and submitted context.',use:'Separate known origin from copied data.',limit:'A source record may still be defective.',ids:[4]},{signal:'Suppression reconciliation',finding:'Conflicting states remain visible.',use:'Find unsafe imports.',limit:'Identity matching can be uncertain.',ids:[2]},{signal:'Purpose boundary',finding:'Enrichment does not create permission.',use:'Review proposed outreach.',limit:'Owners must interpret applicable rules.',ids:[3,4]},{signal:'Destination disposition',finding:'Handoff and later changes are traceable.',use:'Verify downstream treatment.',limit:'Unknown systems may exist.',ids:[2,3]}]},
  {slug:'bookkeeping-vendor-bank-change-verification-study',title:'Vendor bank-change verification for bookkeeping assistants',keyword:'bookkeeping assistant vendor bank change verification',question:'How should a bookkeeping assistant route a vendor payment-detail change without trusting the requesting email?',role:'bookkeeping assistant',service:'bookkeeping-assistants',sourceIds:[5,1,2],unit:'one requested payment-detail change linked to original message, vendor master record, independent contact path, callback result, approver, effective date, changed fields, payment hold, and post-change review',risk:'An email thread can look familiar while an attacker changes reply-to details or payment instructions. Updating the vendor master from the same message collapses request and verification into one vulnerable channel.',workflow:['Preserve the original request, headers or system reference, affected vendor, changed fields, and urgency language. Do not reply with sensitive account data or treat thread history as identity proof.[5]','Use a previously approved contact method from the vendor master or contract, not contact details supplied in the change request. Record the independent verification result and unresolved discrepancies.','Separate preparation, approval, master-data change, and payment release. Apply the organization’s hold and dual-review rules, with attributable identities and logged exceptions.[1]','After authorization, compare the master record, queued payments, first affected payment, notification, and correction trail. Keep rejected and superseded requests available for security review.[2]'],scenario:'A long-running supplier appears to request an urgent bank change from a familiar display name, but the reply-to domain differs. The assistant holds the update and calls the established vendor contact rather than using the number in the email.',boundary:'The assistant may preserve requests, compare identifiers, use approved verification paths, prepare changes, and apply holds. Finance, security, vendor-management, legal, and authorized approvers decide authenticity, account validity, exceptions, payment release, and incident response.',limitations:'Controls depend on banking arrangements, contracts, systems, jurisdiction, and risk appetite. The sources do not validate a specific transaction, and no vendor or payment records were reviewed.',measures:[{signal:'Independent channel',finding:'Verification does not reuse requester-supplied contact data.',use:'Test change procedures.',limit:'Stored contact data can be stale.',ids:[5]},{signal:'Duty separation',finding:'One identity cannot request, approve, change, and release.',use:'Review privileges.',limit:'Small teams may need compensating controls.',ids:[1]},{signal:'Change lineage',finding:'Old and new values remain attributable.',use:'Reconstruct the event.',limit:'Logs can be incomplete.',ids:[2]},{signal:'First-payment review',finding:'The first affected payment receives explicit confirmation.',use:'Catch propagation errors.',limit:'Review cannot guarantee recovery.',ids:[1,5]}]},
  {slug:'recruiting-accommodation-request-routing-study',title:'Applicant accommodation request routing for recruiting assistants',keyword:'recruiting assistant accommodation request routing',question:'How can a recruiting assistant coordinate interview logistics without eliciting or spreading unnecessary medical information?',role:'recruiting assistant',service:'recruiting-assistants',sourceIds:[7,8,3],unit:'one applicant logistics request linked to requisition, requested process adjustment, permitted contact details, restricted owner, response deadline, approved arrangement, interviewer instruction, and closure evidence',risk:'A request for a different interview format, timing, or access method can prompt unnecessary questions about diagnosis. Copying an applicant’s explanation into general interview notes exposes information to people who only need the approved arrangement.',workflow:['Provide a clear channel for process-adjustment requests and capture only the logistics needed to route the request. Do not diagnose, challenge, or solicit broad medical history.[7]','Move sensitive explanation to the restricted owner and keep general scheduling records limited to the approved arrangement, timing, and contact instructions.[3]','Coordinate the approved interview change without altering evaluation criteria or briefing interviewers on unnecessary personal detail. Record who authorized deviations from the standard process.[8]','Verify that the applicant received the logistics, the interview team received only necessary instructions, and restricted material followed the retention and access rule.'],scenario:'An applicant asks for additional time in a work sample and volunteers a diagnosis. The assistant routes the sensitive message to the designated owner, keeps the calendar note to the approved duration, and does not repeat the diagnosis to interviewers.',boundary:'The assistant may receive requests through approved channels, preserve restricted records, coordinate authorized logistics, and confirm delivery. HR, accommodation, legal, hiring, and assessment owners decide eligibility, documentation, evaluation changes, confidentiality, retention, and disputes.',limitations:'Employment duties vary by employer, role, stage, location, and facts. This is not legal advice; the sources do not decide a particular request, and no applicant records were examined.',measures:[{signal:'Limited intake',finding:'Only routing and logistics fields enter the general workflow.',use:'Inspect forms and scripts.',limit:'Applicants may volunteer more information.',ids:[7]},{signal:'Restricted ownership',finding:'Sensitive detail reaches only the designated function.',use:'Review access and forwarding.',limit:'System permissions may be imperfect.',ids:[3,8]},{signal:'Instruction minimization',finding:'Interviewers receive the arrangement without unnecessary history.',use:'Check calendar and scorecard notes.',limit:'Some roles need tailored instruction.',ids:[8]},{signal:'Closure evidence',finding:'Applicant and interview team each receive the approved logistics.',use:'Find dropped handoffs.',limit:'Delivery does not prove sufficiency.',ids:[2]}]},
  {slug:'healthcare-referral-record-minimization-study',title:'Referral record minimization for healthcare admin assistants',keyword:'healthcare virtual assistant referral record minimization',question:'What should a healthcare admin assistant copy, link, and withhold when coordinating a referral?',role:'healthcare administrative assistant',service:'healthcare-admin-assistants',sourceIds:[9,10,1],unit:'one referral linked to verified patient, authorized source, receiving destination, administrative purpose, minimum routed fields, clinical owner, appointment status, returned exception, and final disposition',risk:'Referral packets often mix scheduling fields with clinical narratives, insurance documents, and identifiers. Copying an entire packet into email, chat, or a spreadsheet may expose more information than the coordination task requires.',workflow:['Define the administrative purpose, authorized systems, required fields, and stop conditions for each referral type before copying any information.[9]','Keep the original clinical record in its approved system. Link or route through approved interfaces where possible; place only the minimum scheduling and destination fields in operational queues.','Verify patient and destination identifiers using approved procedures. Route clinical interpretation, urgency, eligibility, missing orders, and contradictory instructions to their named owners.[10]','Confirm receipt and scheduling disposition at the destination, then close temporary copies under the retention rule. Record misroutes, rejected referrals, corrections, and unauthorized-channel attempts.[1]'],scenario:'A referral PDF contains a full clinical history although the scheduling queue needs only identifiers, destination, order reference, and contact preference. The assistant keeps the PDF in the approved record and enters only the authorized fields.',boundary:'The assistant may verify permitted identifiers, route approved records, coordinate appointments, and document exceptions. Clinical, privacy, security, records, billing, and referral owners decide necessity, interpretation, urgency, disclosure authority, eligibility, and release.',limitations:'Privacy duties depend on entity, relationship, purpose, jurisdiction, system, and policy. This study is not legal or clinical advice; no patient records or referral systems were inspected.',measures:[{signal:'Purpose map',finding:'Every copied field supports a named administrative action.',use:'Review queue design.',limit:'Local owners define necessity.',ids:[9]},{signal:'Approved-system link',finding:'Clinical content remains in its controlled record.',use:'Find shadow copies.',limit:'Links can still expose data.',ids:[1]},{signal:'Owner routing',finding:'Clinical and eligibility questions leave the admin lane.',use:'Test mixed requests.',limit:'Routing does not ensure timely resolution.',ids:[10]},{signal:'Temporary-copy closure',finding:'Working copies receive a disposition.',use:'Review exports and attachments.',limit:'Unknown copies may remain.',ids:[1,9]}]},
  {slug:'executive-travel-disruption-decision-log-study',title:'Travel disruption decision logs for executive assistants',keyword:'executive assistant travel disruption decision log',question:'How can an executive assistant coordinate a disrupted trip while preserving authority, security, and the reason for each change?',role:'executive assistant',service:'executive-assistant-staffing',sourceIds:[1,2,3],unit:'one disrupted itinerary linked to authoritative alerts, traveler constraints, approved options, cost and policy checks, decision owner, booking change, calendar update, sensitive documents, vendor confirmation, and unresolved risk',risk:'During cancellations or delays, speed encourages decisions in chat, reused identity documents, and unrecorded changes across airline, hotel, ground transport, calendar, and meeting owners. A confirmed flight alone does not mean the itinerary is coherent.',workflow:['Capture the authoritative disruption notice and freeze the current itinerary, traveler constraints, meeting dependencies, approval thresholds, and communication tree before changing bookings.','Build distinct options with source, timing, total known cost, cancellation terms, connection risk, and unanswered questions. Mark estimates and inferences instead of presenting them as confirmed facts.[2]','Obtain approval from the named owner for choices outside standing authority. Share identity and payment information only through approved systems and only to the destination that needs it.[3]','Reconcile every affected reservation, calendar event, host notice, transport segment, document, and refund. Verify confirmations at their destinations and keep unresolved vendor states open.[1]'],scenario:'A cancelled connection makes the original hotel arrival impossible. The assistant presents two sourced route options, flags the refundable-room deadline, obtains the traveler’s choice, and updates linked reservations only after approval.',boundary:'The assistant may monitor authoritative notices, assemble options, apply standing rules, coordinate approved changes, and reconcile confirmations. The traveler, finance, security, legal, medical, and executive owners decide risk acceptance, exceptions, sensitive disclosures, and material spend.',limitations:'Travel terms, border rules, safety conditions, accessibility needs, and vendor status change quickly. This framework does not validate a live itinerary, and no traveler or booking data were reviewed.',measures:[{signal:'Frozen baseline',finding:'The pre-change itinerary and constraints remain visible.',use:'Measure downstream impact.',limit:'Alerts can change after capture.',ids:[2]},{signal:'Option provenance',finding:'Facts, estimates, and inference are labeled.',use:'Compare choices.',limit:'Vendor inventory can vanish.',ids:[2]},{signal:'Authority record',finding:'Material changes identify their approver.',use:'Review exceptions and spend.',limit:'Approval may still be ill-informed.',ids:[1]},{signal:'Cross-system reconciliation',finding:'Every dependent reservation has a final state.',use:'Find stranded segments.',limit:'Third-party confirmations may lag.',ids:[1,3]}]},
];

const sourceById = (id: number) => allSources.find((item) => item.id === id)!;

export const october2ResearchPosts: readonly ResearchPost[] = studies.map((study, index) => {
  const sources = study.sourceIds.map(sourceById);
  const citations = study.sourceIds.map((id) => `[${id}]`).join('');
  return {
    slug: study.slug,
    featuredImage: '/featured/daily-research-brief-routine.png',
    primaryKeyword: study.keyword,
    title: study.title,
    metaTitle: study.title,
    excerpt: `A source-led operating study for buyers asking: ${study.question}`,
    published: '2026-10-02',
    updated: '2026-10-02',
    readingMinutes: 13,
    revision: `2026-10-02-${index + 1}-${study.slug}-v1`,
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
      { value: checked, label: 'Evidence checked', context: 'The linked source pages were checked for this report on October 2, 2026.', sourceIds: study.sourceIds },
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
        ],
      },
      {
        heading: 'A testable operating procedure',
        paragraphs: [...study.workflow],
      },
      {
        heading: 'Build the record before measuring performance',
        paragraphs: [
        ],
      },
      {
        heading: 'Sampling, denominators, and competing explanations',
        paragraphs: [
        ],
      },
      {
        heading: 'Representative case and stop rule',
        paragraphs: [
          study.scenario,
        ],
      },
      {
        heading: 'Role boundary and buyer interpretation',
        paragraphs: [
          study.boundary,
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
      `Evidence scope: ${sources.length} primary or authoritative public sources checked October 2, 2026.`,
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
