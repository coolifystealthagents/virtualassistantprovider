import type { Publication } from './publication-manifest';

export const oct25ResearchPosts: readonly Publication[] = [
  {
    "publicationStatus": "reviewed",
    "kind": "research",
    "slug": "intake-reliability",
    "title": "How Complete Is the virtual assistant placement and managed support Intake Record at First Review?",
    "description": "A protocol for measuring whether virtual assistant placement and managed support intake items carry the source, owner, and date needed before work begins.",
    "published": "2026-10-25",
    "readingMinutes": 11,
    "heroImage": "/featured/oct25-intake-reliability.svg",
    "heroAlt": "How Complete Is the virtual assistant placement and managed support Intake Record at First Review? editorial illustration",
    "topic": "Managed assistant operations",
    "relatedService": {
      "href": "/services",
      "label": "Assistant staffing"
    },
    "relatedResource": {
      "href": "/research",
      "label": "Research library"
    },
    "sources": [
      {
        "label": "Public guidance",
        "href": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Public guidance",
        "href": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Public guidance",
        "href": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "sections": [
      {
        "id": "research-question-and-scope",
        "heading": "Research question and scope",
        "paragraphs": [
          "Do intake items carry the source, owner, and date needed at first review, and how often are they sent back? The scope is the operational record for virtual assistant placement and managed support, not the legal, financial, or clinical conclusion that may follow.",
          "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect."
        ]
      },
      {
        "id": "population-and-unit-of-analysis",
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Items entering {n} work during a defined month, including items later returned or withdrawn.",
          "The unit is one intake item at first review. A clear unit prevents linked events from being counted as independent successes. Record opening cases, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "id": "definitions-and-measures",
        "heading": "Definitions and measures",
        "paragraphs": [
          "Predefine the start, stop, pause rule, and missing-evidence treatment. Measure complete-at-first-review rate, returns by missing field, days from intake to owner acceptance.",
          "A count needs its denominator and window before it becomes a measure. Publish definitions with the result."
        ]
      },
      {
        "id": "evidence-and-data-dictionary",
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Each case needs the request record, the source link and version, the owner assignment, the due window, the return reason. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states."
        ]
      },
      {
        "id": "sampling-and-collection",
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the version observed. A later export can overwrite a value that was present during the review."
        ]
      },
      {
        "id": "reviewer-independence",
        "heading": "Reviewer independence",
        "paragraphs": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check."
        ]
      },
      {
        "id": "what-the-evidence-can-support",
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the virtual assistant placement and managed support record is thin. It can support a field-level intake checklist, a return-reason taxonomy, a first-week review.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol does not judge whether the work itself was correct."
        ]
      },
      {
        "id": "limitations-and-error",
        "heading": "Limitations and error",
        "paragraphs": [
          "A shared inbox can make an item look complete while the source is missing. A late owner assignment can hide an intake defect. The sample may overrepresent clean items.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another."
        ]
      },
      {
        "id": "sensitivity-and-alternatives",
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation."
        ]
      },
      {
        "id": "privacy-access-and-retention",
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "SBA and internal control guidance frame the record question, not a result. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "id": "operational-use-and-reporting",
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "id": "governance-and-stopping",
        "heading": "Governance and stopping",
        "paragraphs": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. Pause on unauthorized disclosure or an unverifiable source.",
          "Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift. The brief is complete when another reviewer can repeat it."
        ]
      },
      {
        "id": "a-calibration-case",
        "heading": "A calibration case",
        "paragraphs": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers reconstruct the evidence independently before discussion.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If reviewers need different documents, the record is ambiguous."
        ]
      },
      {
        "id": "effort-and-practical-constraints",
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "With accessible files, the review fits a short cycle: define the population, pull and mask the sample, review, reconcile. The expensive step is finding evidence across systems.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem."
        ]
      },
      {
        "id": "reporting-package",
        "heading": "Reporting package",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Keep a short version log. When a definition or sample rule changes, record the date and affected cases so two reports are not mistaken for comparable."
        ]
      },
      {
        "id": "interpreting-a-small-sample",
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "A small review finds where the record breaks; it does not estimate a population rate. Report counts, fields checked, and unresolved items rather than a precise percentage.",
          "If the sample cannot support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix."
        ]
      },
      {
        "id": "reopening-conditions",
        "heading": "Reopening conditions",
        "paragraphs": [
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material volume shift.",
          "Name the next review date and the owner who will decide whether the finding still applies. A protocol without reopening conditions becomes an old opinion."
        ]
      },
      {
        "id": "a-worked-example-of-the-record",
        "heading": "A worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current virtual assistant placement and managed support record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed."
        ]
      },
      {
        "id": "common-failure-modes",
        "heading": "Common failure modes",
        "paragraphs": [
          "The first failure is treating a status as evidence. The second is closing an item because the queue is long. The third is measuring activity without checking the record.",
          "Each failure has a cheap test: can a second reviewer find the source, the owner, and the next action in a few minutes? If not, the item is not ready."
        ]
      },
      {
        "id": "what-the-result-does-not-prove",
        "heading": "What the result does not prove",
        "paragraphs": [
          "The result does not prove that the virtual assistant placement and managed support work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Keep that limit in the finding. A reviewer who knows what was not tested is less likely to overstate the result."
        ]
      },
      {
        "id": "a-short-review-agenda",
        "heading": "A short review agenda",
        "paragraphs": [
          "Start with the items whose decision date has passed, then the items tied to a current revision, then the highest value items. End with a one-page summary for the owner.",
          "The agenda is not ceremony. It makes the same gaps visible each cycle so the team stops rediscovering them at the deadline."
        ]
      },
      {
        "id": "data-quality-checks",
        "heading": "Data quality checks",
        "paragraphs": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation."
        ]
      },
      {
        "id": "a-note-on-sampling",
        "heading": "A note on sampling",
        "paragraphs": [
          "Sample by value and by change, not only by convenience. Include one item that was corrected, one that was escalated, and one that looked routine.",
          "Record why the sample was chosen. A reader who knows the rule can judge whether the finding applies to their own queue."
        ]
      },
      {
        "id": "a-note-on-evidence-ownership",
        "heading": "A note on evidence ownership",
        "paragraphs": [
          "Name the person who can confirm each source and the person who can change the rule. A source without an owner is a link, not evidence.",
          "When ownership is unclear, record the gap and route it. Do not assign a source to a team name that cannot answer a question about it."
        ]
      },
      {
        "id": "what-would-change-the-answer",
        "heading": "What would change the answer",
        "paragraphs": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation."
        ]
      },
      {
        "id": "why-this-matters-for-virtual-assistant-provider",
        "heading": "Why this matters for Virtual Assistant Provider",
        "paragraphs": [
          "Virtual Assistant Provider supports businesses hiring virtual assistants with virtual assistant placement and managed support. A local protocol is useful only if it names the records this team can actually see and the decisions its owners can actually make.",
          "The findings here describe the record, not a ranking of providers or staff. the operations manager remains the decision maker for any commercial or service change."
        ]
      },
      {
        "id": "writing-the-conclusion",
        "heading": "Writing the conclusion",
        "paragraphs": [
          "State the question, population, window, measures, and the limits before the finding. A reader should be able to see which claims are supported and which are not.",
          "Avoid rankings and predictions. The useful conclusion is a specific record gap and a testable fix, not a general judgment about a team or vendor."
        ]
      },
      {
        "id": "governance-and-handoff",
        "heading": "Governance and handoff",
        "paragraphs": [
          "Leave the protocol, codebook, sample file, and open items in one place. The next reviewer should not rebuild the method from memory.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list."
        ]
      },
      {
        "id": "sources",
        "heading": "Sources",
        "paragraphs": [
          "GAO Standards for Internal Control: https://www.gao.gov/products/gao-14-704g",
          "NIST Cybersecurity Framework: https://www.nist.gov/cyberframework",
          "SBA Manage Your Business: https://www.sba.gov/business-guide/manage-your-business"
        ]
      }
    ]
  },
  {
    "publicationStatus": "reviewed",
    "kind": "research",
    "slug": "queue-aging",
    "title": "Where Does virtual assistant placement and managed support Queue Time Actually Go?",
    "description": "A protocol separating owner wait, source wait, system delay, and rework in virtual assistant placement and managed support queues.",
    "published": "2026-10-25",
    "readingMinutes": 11,
    "heroImage": "/featured/oct25-queue-aging.svg",
    "heroAlt": "Where Does virtual assistant placement and managed support Queue Time Actually Go? editorial illustration",
    "topic": "Managed assistant operations",
    "relatedService": {
      "href": "/services",
      "label": "Assistant staffing"
    },
    "relatedResource": {
      "href": "/research",
      "label": "Research library"
    },
    "sources": [
      {
        "label": "Public guidance",
        "href": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "Public guidance",
        "href": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "Public guidance",
        "href": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      }
    ],
    "sections": [
      {
        "id": "research-question-and-scope",
        "heading": "Research question and scope",
        "paragraphs": [
          "How much queue time is waiting for an owner, waiting for a source, system delay, or rework? The scope is the operational record for virtual assistant placement and managed support, not the legal, financial, or clinical conclusion that may follow.",
          "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect."
        ]
      },
      {
        "id": "population-and-unit-of-analysis",
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Items open during a defined period, including closed, blocked, and reopened items.",
          "The unit is one item and its state intervals. A clear unit prevents linked events from being counted as independent successes. Record opening cases, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "id": "definitions-and-measures",
        "heading": "Definitions and measures",
        "paragraphs": [
          "Predefine the start, stop, pause rule, and missing-evidence treatment. Measure median days by wait reason, oldest unresolved item, share of time in owner wait.",
          "A count needs its denominator and window before it becomes a measure. Publish definitions with the result."
        ]
      },
      {
        "id": "evidence-and-data-dictionary",
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Each case needs the state changes and timestamps, the source request, the owner assignment, the exception reason, the destination event. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states."
        ]
      },
      {
        "id": "sampling-and-collection",
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the version observed. A later export can overwrite a value that was present during the review."
        ]
      },
      {
        "id": "reviewer-independence",
        "heading": "Reviewer independence",
        "paragraphs": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check."
        ]
      },
      {
        "id": "what-the-evidence-can-support",
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the virtual assistant placement and managed support record is thin. It can support a state-based queue review, an owner response target, a source request template.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol does not evaluate individual performance."
        ]
      },
      {
        "id": "limitations-and-error",
        "heading": "Limitations and error",
        "paragraphs": [
          "Timestamps may record system events rather than human action. A blocked item can look active because someone opened it. A short sample may miss the oldest items.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another."
        ]
      },
      {
        "id": "sensitivity-and-alternatives",
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation."
        ]
      },
      {
        "id": "privacy-access-and-retention",
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "NIST and internal control guidance frame the state record. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "id": "operational-use-and-reporting",
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "id": "governance-and-stopping",
        "heading": "Governance and stopping",
        "paragraphs": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. Pause on unauthorized disclosure or an unverifiable source.",
          "Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift. The brief is complete when another reviewer can repeat it."
        ]
      },
      {
        "id": "a-calibration-case",
        "heading": "A calibration case",
        "paragraphs": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers reconstruct the evidence independently before discussion.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If reviewers need different documents, the record is ambiguous."
        ]
      },
      {
        "id": "effort-and-practical-constraints",
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "With accessible files, the review fits a short cycle: define the population, pull and mask the sample, review, reconcile. The expensive step is finding evidence across systems.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem."
        ]
      },
      {
        "id": "reporting-package",
        "heading": "Reporting package",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Keep a short version log. When a definition or sample rule changes, record the date and affected cases so two reports are not mistaken for comparable."
        ]
      },
      {
        "id": "interpreting-a-small-sample",
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "A small review finds where the record breaks; it does not estimate a population rate. Report counts, fields checked, and unresolved items rather than a precise percentage.",
          "If the sample cannot support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix."
        ]
      },
      {
        "id": "reopening-conditions",
        "heading": "Reopening conditions",
        "paragraphs": [
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material volume shift.",
          "Name the next review date and the owner who will decide whether the finding still applies. A protocol without reopening conditions becomes an old opinion."
        ]
      },
      {
        "id": "a-worked-example-of-the-record",
        "heading": "A worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current virtual assistant placement and managed support record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed."
        ]
      },
      {
        "id": "common-failure-modes",
        "heading": "Common failure modes",
        "paragraphs": [
          "The first failure is treating a status as evidence. The second is closing an item because the queue is long. The third is measuring activity without checking the record.",
          "Each failure has a cheap test: can a second reviewer find the source, the owner, and the next action in a few minutes? If not, the item is not ready."
        ]
      },
      {
        "id": "what-the-result-does-not-prove",
        "heading": "What the result does not prove",
        "paragraphs": [
          "The result does not prove that the virtual assistant placement and managed support work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Keep that limit in the finding. A reviewer who knows what was not tested is less likely to overstate the result."
        ]
      },
      {
        "id": "a-short-review-agenda",
        "heading": "A short review agenda",
        "paragraphs": [
          "Start with the items whose decision date has passed, then the items tied to a current revision, then the highest value items. End with a one-page summary for the owner.",
          "The agenda is not ceremony. It makes the same gaps visible each cycle so the team stops rediscovering them at the deadline."
        ]
      },
      {
        "id": "data-quality-checks",
        "heading": "Data quality checks",
        "paragraphs": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation."
        ]
      },
      {
        "id": "a-note-on-sampling",
        "heading": "A note on sampling",
        "paragraphs": [
          "Sample by value and by change, not only by convenience. Include one item that was corrected, one that was escalated, and one that looked routine.",
          "Record why the sample was chosen. A reader who knows the rule can judge whether the finding applies to their own queue."
        ]
      },
      {
        "id": "a-note-on-evidence-ownership",
        "heading": "A note on evidence ownership",
        "paragraphs": [
          "Name the person who can confirm each source and the person who can change the rule. A source without an owner is a link, not evidence.",
          "When ownership is unclear, record the gap and route it. Do not assign a source to a team name that cannot answer a question about it."
        ]
      },
      {
        "id": "what-would-change-the-answer",
        "heading": "What would change the answer",
        "paragraphs": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation."
        ]
      },
      {
        "id": "why-this-matters-for-virtual-assistant-provider",
        "heading": "Why this matters for Virtual Assistant Provider",
        "paragraphs": [
          "Virtual Assistant Provider supports businesses hiring virtual assistants with virtual assistant placement and managed support. A local protocol is useful only if it names the records this team can actually see and the decisions its owners can actually make.",
          "The findings here describe the record, not a ranking of providers or staff. the operations manager remains the decision maker for any commercial or service change."
        ]
      },
      {
        "id": "writing-the-conclusion",
        "heading": "Writing the conclusion",
        "paragraphs": [
          "State the question, population, window, measures, and the limits before the finding. A reader should be able to see which claims are supported and which are not.",
          "Avoid rankings and predictions. The useful conclusion is a specific record gap and a testable fix, not a general judgment about a team or vendor."
        ]
      },
      {
        "id": "governance-and-handoff",
        "heading": "Governance and handoff",
        "paragraphs": [
          "Leave the protocol, codebook, sample file, and open items in one place. The next reviewer should not rebuild the method from memory.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list."
        ]
      },
      {
        "id": "sources",
        "heading": "Sources",
        "paragraphs": [
          "NIST Cybersecurity Framework: https://www.nist.gov/cyberframework",
          "SBA Manage Your Business: https://www.sba.gov/business-guide/manage-your-business",
          "DOL Recordkeeping Fact Sheet: https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
        ]
      }
    ]
  },
  {
    "publicationStatus": "reviewed",
    "kind": "research",
    "slug": "reviewer-agreement",
    "title": "Do Reviewers Agree on virtual assistant placement and managed support Exception Codes?",
    "description": "A protocol testing whether independent reviewers assign the same exception reason to the same virtual assistant placement and managed support record.",
    "published": "2026-10-25",
    "readingMinutes": 11,
    "heroImage": "/featured/oct25-reviewer-agreement.svg",
    "heroAlt": "Do Reviewers Agree on virtual assistant placement and managed support Exception Codes? editorial illustration",
    "topic": "Managed assistant operations",
    "relatedService": {
      "href": "/services",
      "label": "Assistant staffing"
    },
    "relatedResource": {
      "href": "/research",
      "label": "Research library"
    },
    "sources": [
      {
        "label": "Public guidance",
        "href": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "Public guidance",
        "href": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "label": "Public guidance",
        "href": "https://www.archives.gov/records-mgmt"
      }
    ],
    "sections": [
      {
        "id": "research-question-and-scope",
        "heading": "Research question and scope",
        "paragraphs": [
          "Do two reviewers assign the same exception code from the same evidence? The scope is the operational record for virtual assistant placement and managed support, not the legal, financial, or clinical conclusion that may follow.",
          "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect."
        ]
      },
      {
        "id": "population-and-unit-of-analysis",
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Exceptions raised in a defined month, including resolved and open items.",
          "The unit is one exception at first classification. A clear unit prevents linked events from being counted as independent successes. Record opening cases, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "id": "definitions-and-measures",
        "heading": "Definitions and measures",
        "paragraphs": [
          "Predefine the start, stop, pause rule, and missing-evidence treatment. Measure agreement on the reason code, disagreement by cause, reopened exceptions.",
          "A count needs its denominator and window before it becomes a measure. Publish definitions with the result."
        ]
      },
      {
        "id": "evidence-and-data-dictionary",
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Each case needs the exception record, the source evidence, the code definitions, the reviewer note, the resolution. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states."
        ]
      },
      {
        "id": "sampling-and-collection",
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the version observed. A later export can overwrite a value that was present during the review."
        ]
      },
      {
        "id": "reviewer-independence",
        "heading": "Reviewer independence",
        "paragraphs": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check."
        ]
      },
      {
        "id": "what-the-evidence-can-support",
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the virtual assistant placement and managed support record is thin. It can support a coded exception taxonomy, a reviewer calibration, a clearer stop rule.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol does not decide whether the exception was handled correctly."
        ]
      },
      {
        "id": "limitations-and-error",
        "heading": "Limitations and error",
        "paragraphs": [
          "Reviewers may share the same incomplete record and agree for the wrong reason. A code may be defined by outcome rather than evidence. Small samples cannot support a broad rate.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another."
        ]
      },
      {
        "id": "sensitivity-and-alternatives",
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation."
        ]
      },
      {
        "id": "privacy-access-and-retention",
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "GAO internal control guidance frames the review. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "id": "operational-use-and-reporting",
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "id": "governance-and-stopping",
        "heading": "Governance and stopping",
        "paragraphs": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. Pause on unauthorized disclosure or an unverifiable source.",
          "Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift. The brief is complete when another reviewer can repeat it."
        ]
      },
      {
        "id": "a-calibration-case",
        "heading": "A calibration case",
        "paragraphs": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers reconstruct the evidence independently before discussion.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If reviewers need different documents, the record is ambiguous."
        ]
      },
      {
        "id": "effort-and-practical-constraints",
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "With accessible files, the review fits a short cycle: define the population, pull and mask the sample, review, reconcile. The expensive step is finding evidence across systems.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem."
        ]
      },
      {
        "id": "reporting-package",
        "heading": "Reporting package",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Keep a short version log. When a definition or sample rule changes, record the date and affected cases so two reports are not mistaken for comparable."
        ]
      },
      {
        "id": "interpreting-a-small-sample",
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "A small review finds where the record breaks; it does not estimate a population rate. Report counts, fields checked, and unresolved items rather than a precise percentage.",
          "If the sample cannot support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix."
        ]
      },
      {
        "id": "reopening-conditions",
        "heading": "Reopening conditions",
        "paragraphs": [
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material volume shift.",
          "Name the next review date and the owner who will decide whether the finding still applies. A protocol without reopening conditions becomes an old opinion."
        ]
      },
      {
        "id": "a-worked-example-of-the-record",
        "heading": "A worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current virtual assistant placement and managed support record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed."
        ]
      },
      {
        "id": "common-failure-modes",
        "heading": "Common failure modes",
        "paragraphs": [
          "The first failure is treating a status as evidence. The second is closing an item because the queue is long. The third is measuring activity without checking the record.",
          "Each failure has a cheap test: can a second reviewer find the source, the owner, and the next action in a few minutes? If not, the item is not ready."
        ]
      },
      {
        "id": "what-the-result-does-not-prove",
        "heading": "What the result does not prove",
        "paragraphs": [
          "The result does not prove that the virtual assistant placement and managed support work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Keep that limit in the finding. A reviewer who knows what was not tested is less likely to overstate the result."
        ]
      },
      {
        "id": "a-short-review-agenda",
        "heading": "A short review agenda",
        "paragraphs": [
          "Start with the items whose decision date has passed, then the items tied to a current revision, then the highest value items. End with a one-page summary for the owner.",
          "The agenda is not ceremony. It makes the same gaps visible each cycle so the team stops rediscovering them at the deadline."
        ]
      },
      {
        "id": "data-quality-checks",
        "heading": "Data quality checks",
        "paragraphs": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation."
        ]
      },
      {
        "id": "a-note-on-sampling",
        "heading": "A note on sampling",
        "paragraphs": [
          "Sample by value and by change, not only by convenience. Include one item that was corrected, one that was escalated, and one that looked routine.",
          "Record why the sample was chosen. A reader who knows the rule can judge whether the finding applies to their own queue."
        ]
      },
      {
        "id": "a-note-on-evidence-ownership",
        "heading": "A note on evidence ownership",
        "paragraphs": [
          "Name the person who can confirm each source and the person who can change the rule. A source without an owner is a link, not evidence.",
          "When ownership is unclear, record the gap and route it. Do not assign a source to a team name that cannot answer a question about it."
        ]
      },
      {
        "id": "what-would-change-the-answer",
        "heading": "What would change the answer",
        "paragraphs": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation."
        ]
      },
      {
        "id": "why-this-matters-for-virtual-assistant-provider",
        "heading": "Why this matters for Virtual Assistant Provider",
        "paragraphs": [
          "Virtual Assistant Provider supports businesses hiring virtual assistants with virtual assistant placement and managed support. A local protocol is useful only if it names the records this team can actually see and the decisions its owners can actually make.",
          "The findings here describe the record, not a ranking of providers or staff. the operations manager remains the decision maker for any commercial or service change."
        ]
      },
      {
        "id": "writing-the-conclusion",
        "heading": "Writing the conclusion",
        "paragraphs": [
          "State the question, population, window, measures, and the limits before the finding. A reader should be able to see which claims are supported and which are not.",
          "Avoid rankings and predictions. The useful conclusion is a specific record gap and a testable fix, not a general judgment about a team or vendor."
        ]
      },
      {
        "id": "governance-and-handoff",
        "heading": "Governance and handoff",
        "paragraphs": [
          "Leave the protocol, codebook, sample file, and open items in one place. The next reviewer should not rebuild the method from memory.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list."
        ]
      },
      {
        "id": "sources",
        "heading": "Sources",
        "paragraphs": [
          "SBA Manage Your Business: https://www.sba.gov/business-guide/manage-your-business",
          "DOL Recordkeeping Fact Sheet: https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
          "National Archives Records Management: https://www.archives.gov/records-mgmt"
        ]
      }
    ]
  },
  {
    "publicationStatus": "reviewed",
    "kind": "research",
    "slug": "access-removal",
    "title": "How Long Does virtual assistant placement and managed support Access Outlive the Assignment?",
    "description": "A protocol measuring the gap between assignment end and access removal for virtual assistant placement and managed support work.",
    "published": "2026-10-25",
    "readingMinutes": 11,
    "heroImage": "/featured/oct25-access-removal.svg",
    "heroAlt": "How Long Does virtual assistant placement and managed support Access Outlive the Assignment? editorial illustration",
    "topic": "Managed assistant operations",
    "relatedService": {
      "href": "/services",
      "label": "Assistant staffing"
    },
    "relatedResource": {
      "href": "/research",
      "label": "Research library"
    },
    "sources": [
      {
        "label": "Public guidance",
        "href": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "label": "Public guidance",
        "href": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "Public guidance",
        "href": "https://www.gao.gov/products/gao-14-704g"
      }
    ],
    "sections": [
      {
        "id": "research-question-and-scope",
        "heading": "Research question and scope",
        "paragraphs": [
          "How long after an assignment ends does access remain active? The scope is the operational record for virtual assistant placement and managed support, not the legal, financial, or clinical conclusion that may follow.",
          "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect."
        ]
      },
      {
        "id": "population-and-unit-of-analysis",
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Assignments ending in a defined quarter, including transfers and client removals.",
          "The unit is one assignment and one access account. A clear unit prevents linked events from being counted as independent successes. Record opening cases, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "id": "definitions-and-measures",
        "heading": "Definitions and measures",
        "paragraphs": [
          "Predefine the start, stop, pause rule, and missing-evidence treatment. Measure days from end to removal, accounts active after seven days, shared credentials rotated.",
          "A count needs its denominator and window before it becomes a measure. Publish definitions with the result."
        ]
      },
      {
        "id": "evidence-and-data-dictionary",
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Each case needs the assignment end date, the access list, the removal log, the equipment return, the client confirmation. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states."
        ]
      },
      {
        "id": "sampling-and-collection",
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the version observed. A later export can overwrite a value that was present during the review."
        ]
      },
      {
        "id": "reviewer-independence",
        "heading": "Reviewer independence",
        "paragraphs": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check."
        ]
      },
      {
        "id": "what-the-evidence-can-support",
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the virtual assistant placement and managed support record is thin. It can support an offboarding checklist, a weekly access review, a client notification standard.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol does not decide whether the assignment ended for cause."
        ]
      },
      {
        "id": "limitations-and-error",
        "heading": "Limitations and error",
        "paragraphs": [
          "A client may remove access without telling the team. A shared account cannot identify the individual. A transfer may legitimately keep an account open.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another."
        ]
      },
      {
        "id": "sensitivity-and-alternatives",
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation."
        ]
      },
      {
        "id": "privacy-access-and-retention",
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "NIST access guidance frames the measure. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "id": "operational-use-and-reporting",
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "id": "governance-and-stopping",
        "heading": "Governance and stopping",
        "paragraphs": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. Pause on unauthorized disclosure or an unverifiable source.",
          "Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift. The brief is complete when another reviewer can repeat it."
        ]
      },
      {
        "id": "a-calibration-case",
        "heading": "A calibration case",
        "paragraphs": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers reconstruct the evidence independently before discussion.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If reviewers need different documents, the record is ambiguous."
        ]
      },
      {
        "id": "effort-and-practical-constraints",
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "With accessible files, the review fits a short cycle: define the population, pull and mask the sample, review, reconcile. The expensive step is finding evidence across systems.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem."
        ]
      },
      {
        "id": "reporting-package",
        "heading": "Reporting package",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Keep a short version log. When a definition or sample rule changes, record the date and affected cases so two reports are not mistaken for comparable."
        ]
      },
      {
        "id": "interpreting-a-small-sample",
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "A small review finds where the record breaks; it does not estimate a population rate. Report counts, fields checked, and unresolved items rather than a precise percentage.",
          "If the sample cannot support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix."
        ]
      },
      {
        "id": "reopening-conditions",
        "heading": "Reopening conditions",
        "paragraphs": [
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material volume shift.",
          "Name the next review date and the owner who will decide whether the finding still applies. A protocol without reopening conditions becomes an old opinion."
        ]
      },
      {
        "id": "a-worked-example-of-the-record",
        "heading": "A worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current virtual assistant placement and managed support record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed."
        ]
      },
      {
        "id": "common-failure-modes",
        "heading": "Common failure modes",
        "paragraphs": [
          "The first failure is treating a status as evidence. The second is closing an item because the queue is long. The third is measuring activity without checking the record.",
          "Each failure has a cheap test: can a second reviewer find the source, the owner, and the next action in a few minutes? If not, the item is not ready."
        ]
      },
      {
        "id": "what-the-result-does-not-prove",
        "heading": "What the result does not prove",
        "paragraphs": [
          "The result does not prove that the virtual assistant placement and managed support work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Keep that limit in the finding. A reviewer who knows what was not tested is less likely to overstate the result."
        ]
      },
      {
        "id": "a-short-review-agenda",
        "heading": "A short review agenda",
        "paragraphs": [
          "Start with the items whose decision date has passed, then the items tied to a current revision, then the highest value items. End with a one-page summary for the owner.",
          "The agenda is not ceremony. It makes the same gaps visible each cycle so the team stops rediscovering them at the deadline."
        ]
      },
      {
        "id": "data-quality-checks",
        "heading": "Data quality checks",
        "paragraphs": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation."
        ]
      },
      {
        "id": "a-note-on-sampling",
        "heading": "A note on sampling",
        "paragraphs": [
          "Sample by value and by change, not only by convenience. Include one item that was corrected, one that was escalated, and one that looked routine.",
          "Record why the sample was chosen. A reader who knows the rule can judge whether the finding applies to their own queue."
        ]
      },
      {
        "id": "a-note-on-evidence-ownership",
        "heading": "A note on evidence ownership",
        "paragraphs": [
          "Name the person who can confirm each source and the person who can change the rule. A source without an owner is a link, not evidence.",
          "When ownership is unclear, record the gap and route it. Do not assign a source to a team name that cannot answer a question about it."
        ]
      },
      {
        "id": "what-would-change-the-answer",
        "heading": "What would change the answer",
        "paragraphs": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation."
        ]
      },
      {
        "id": "why-this-matters-for-virtual-assistant-provider",
        "heading": "Why this matters for Virtual Assistant Provider",
        "paragraphs": [
          "Virtual Assistant Provider supports businesses hiring virtual assistants with virtual assistant placement and managed support. A local protocol is useful only if it names the records this team can actually see and the decisions its owners can actually make.",
          "The findings here describe the record, not a ranking of providers or staff. the operations manager remains the decision maker for any commercial or service change."
        ]
      },
      {
        "id": "writing-the-conclusion",
        "heading": "Writing the conclusion",
        "paragraphs": [
          "State the question, population, window, measures, and the limits before the finding. A reader should be able to see which claims are supported and which are not.",
          "Avoid rankings and predictions. The useful conclusion is a specific record gap and a testable fix, not a general judgment about a team or vendor."
        ]
      },
      {
        "id": "governance-and-handoff",
        "heading": "Governance and handoff",
        "paragraphs": [
          "Leave the protocol, codebook, sample file, and open items in one place. The next reviewer should not rebuild the method from memory.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list."
        ]
      },
      {
        "id": "sources",
        "heading": "Sources",
        "paragraphs": [
          "DOL Recordkeeping Fact Sheet: https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
          "National Archives Records Management: https://www.archives.gov/records-mgmt",
          "GAO Standards for Internal Control: https://www.gao.gov/products/gao-14-704g"
        ]
      }
    ]
  },
  {
    "publicationStatus": "reviewed",
    "kind": "research",
    "slug": "handoff-completeness",
    "title": "Can a Second Reviewer Continue the Handoff?",
    "description": "A protocol measuring whether virtual assistant placement and managed support handoffs carry the source, state, owner, and next action.",
    "published": "2026-10-25",
    "readingMinutes": 11,
    "heroImage": "/featured/oct25-handoff-completeness.svg",
    "heroAlt": "Can a Second Reviewer Continue the Handoff? editorial illustration",
    "topic": "Managed assistant operations",
    "relatedService": {
      "href": "/services",
      "label": "Assistant staffing"
    },
    "relatedResource": {
      "href": "/research",
      "label": "Research library"
    },
    "sources": [
      {
        "label": "Public guidance",
        "href": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "Public guidance",
        "href": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "Public guidance",
        "href": "https://www.nist.gov/cyberframework"
      }
    ],
    "sections": [
      {
        "id": "research-question-and-scope",
        "heading": "Research question and scope",
        "paragraphs": [
          "Can a reviewer who did not prepare the item continue it without asking the preparer? The scope is the operational record for virtual assistant placement and managed support, not the legal, financial, or clinical conclusion that may follow.",
          "The study is deliberately narrow. It reports what the record can show in a defined population and window. It does not claim an industry rate or a causal staffing effect."
        ]
      },
      {
        "id": "population-and-unit-of-analysis",
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Handoffs made in a defined month between roles or shifts.",
          "The unit is one handoff event. A clear unit prevents linked events from being counted as independent successes. Record opening cases, additions, withdrawals, resolutions, and unresolved end-of-window cases."
        ]
      },
      {
        "id": "definitions-and-measures",
        "heading": "Definitions and measures",
        "paragraphs": [
          "Predefine the start, stop, pause rule, and missing-evidence treatment. Measure handoffs a second reviewer can continue, missing source rate, reopened after handoff.",
          "A count needs its denominator and window before it becomes a measure. Publish definitions with the result."
        ]
      },
      {
        "id": "evidence-and-data-dictionary",
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Each case needs the handoff note, the source link, the open question, the receiving owner, the next date. Record the source, observation time, field, and reviewer.",
          "Keep missing, unavailable, and confirmed negative as separate codes. A blank and a verified no are different states."
        ]
      },
      {
        "id": "sampling-and-collection",
        "heading": "Sampling and collection",
        "paragraphs": [
          "Select cases from a frozen population with a written rule. Include ordinary, exception, reopened, and withdrawn items.",
          "Collect on a fixed cadence and preserve the version observed. A later export can overwrite a value that was present during the review."
        ]
      },
      {
        "id": "reviewer-independence",
        "heading": "Reviewer independence",
        "paragraphs": [
          "Two reviewers classify the same cases before discussion. Compare first-pass judgments and group differences by evidence, definition, authority, or calculation.",
          "Agreement is not accuracy. Two reviewers can agree on the same incomplete file. Follow agreement with a completeness check."
        ]
      },
      {
        "id": "what-the-evidence-can-support",
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the virtual assistant placement and managed support record is thin. It can support a handoff template, an acknowledgment rule, a weekly sample.",
          "It cannot promise an outcome, a regulator's view, or a causal result. The protocol does not judge the quality of the underlying work."
        ]
      },
      {
        "id": "limitations-and-error",
        "heading": "Limitations and error",
        "paragraphs": [
          "A chat message may carry context that never reaches the record. An acknowledgment may be assumed rather than recorded. The receiver may accept a weak packet to keep work moving.",
          "Report the window, volume, mix, and exclusions beside the result. A single period may not represent another."
        ]
      },
      {
        "id": "sensitivity-and-alternatives",
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "Rerun the count with a different pause rule and a different treatment of unresolved cases. If the direction changes, report the finding as fragile.",
          "Name the plausible alternatives: volume, system change, policy change, or client mix. Do not choose the most convenient explanation."
        ]
      },
      {
        "id": "privacy-access-and-retention",
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Collect the minimum fields. Use named accounts, role-based access, masked identifiers, and an approved location. Log access and set a disposal date.",
          "Records management guidance frames the documentation standard. The cited public sources frame method and context; they do not provide a result for this sample."
        ]
      },
      {
        "id": "operational-use-and-reporting",
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Test one change on a later window. If the measure does not move, the cause is likely upstream in the source or the rule."
        ]
      },
      {
        "id": "governance-and-stopping",
        "heading": "Governance and stopping",
        "paragraphs": [
          "Name the protocol owner, data custodian, operational owner, and the reviewer who can pause the study. Pause on unauthorized disclosure or an unverifiable source.",
          "Record what would reopen the conclusion: a system change, a new policy, a different mix, or a material volume shift. The brief is complete when another reviewer can repeat it."
        ]
      },
      {
        "id": "a-calibration-case",
        "heading": "A calibration case",
        "paragraphs": [
          "Take one ordinary case, one exception, one withdrawn case, and one unresolved end-of-window case. Two reviewers reconstruct the evidence independently before discussion.",
          "The calibration is not a search for consensus. It tests whether the evidence standard can be applied the same way twice. If reviewers need different documents, the record is ambiguous."
        ]
      },
      {
        "id": "effort-and-practical-constraints",
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "With accessible files, the review fits a short cycle: define the population, pull and mask the sample, review, reconcile. The expensive step is finding evidence across systems.",
          "If the review takes much longer, treat the record structure as the first finding. A process that cannot be sampled without reconstructing private email is a control problem."
        ]
      },
      {
        "id": "reporting-package",
        "heading": "Reporting package",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Keep a short version log. When a definition or sample rule changes, record the date and affected cases so two reports are not mistaken for comparable."
        ]
      },
      {
        "id": "interpreting-a-small-sample",
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "A small review finds where the record breaks; it does not estimate a population rate. Report counts, fields checked, and unresolved items rather than a precise percentage.",
          "If the sample cannot support a comparison, say so and describe what a larger review would need. The next step can still be a targeted fix."
        ]
      },
      {
        "id": "reopening-conditions",
        "heading": "Reopening conditions",
        "paragraphs": [
          "Record what would reopen the conclusion: a system change, a new policy, a different client mix, or a material volume shift.",
          "Name the next review date and the owner who will decide whether the finding still applies. A protocol without reopening conditions becomes an old opinion."
        ]
      },
      {
        "id": "a-worked-example-of-the-record",
        "heading": "A worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current virtual assistant placement and managed support record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The corrected source arrives, the reviewer compares it with the prior value, and the owner accepts the next action. The record now shows why the delay occurred and what changed."
        ]
      },
      {
        "id": "common-failure-modes",
        "heading": "Common failure modes",
        "paragraphs": [
          "The first failure is treating a status as evidence. The second is closing an item because the queue is long. The third is measuring activity without checking the record.",
          "Each failure has a cheap test: can a second reviewer find the source, the owner, and the next action in a few minutes? If not, the item is not ready."
        ]
      },
      {
        "id": "what-the-result-does-not-prove",
        "heading": "What the result does not prove",
        "paragraphs": [
          "The result does not prove that the virtual assistant placement and managed support work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Keep that limit in the finding. A reviewer who knows what was not tested is less likely to overstate the result."
        ]
      },
      {
        "id": "a-short-review-agenda",
        "heading": "A short review agenda",
        "paragraphs": [
          "Start with the items whose decision date has passed, then the items tied to a current revision, then the highest value items. End with a one-page summary for the owner.",
          "The agenda is not ceremony. It makes the same gaps visible each cycle so the team stops rediscovering them at the deadline."
        ]
      },
      {
        "id": "data-quality-checks",
        "heading": "Data quality checks",
        "paragraphs": [
          "Check identifiers, timestamps, impossible sequences, duplicates, and edits made after observation. Automated checks find inconsistencies; a reviewer interprets the meaning.",
          "Keep the raw extract and the cleaned version. If a value changes, record the change and the reason rather than overwriting the observation."
        ]
      },
      {
        "id": "a-note-on-sampling",
        "heading": "A note on sampling",
        "paragraphs": [
          "Sample by value and by change, not only by convenience. Include one item that was corrected, one that was escalated, and one that looked routine.",
          "Record why the sample was chosen. A reader who knows the rule can judge whether the finding applies to their own queue."
        ]
      },
      {
        "id": "a-note-on-evidence-ownership",
        "heading": "A note on evidence ownership",
        "paragraphs": [
          "Name the person who can confirm each source and the person who can change the rule. A source without an owner is a link, not evidence.",
          "When ownership is unclear, record the gap and route it. Do not assign a source to a team name that cannot answer a question about it."
        ]
      },
      {
        "id": "what-would-change-the-answer",
        "heading": "What would change the answer",
        "paragraphs": [
          "A new system, a policy change, a different client mix, or a material shift in volume can make the result stale. Record those triggers with the finding.",
          "Name the next review date and the owner. A protocol that is not revisited becomes an old opinion with a citation."
        ]
      },
      {
        "id": "why-this-matters-for-virtual-assistant-provider",
        "heading": "Why this matters for Virtual Assistant Provider",
        "paragraphs": [
          "Virtual Assistant Provider supports businesses hiring virtual assistants with virtual assistant placement and managed support. A local protocol is useful only if it names the records this team can actually see and the decisions its owners can actually make.",
          "The findings here describe the record, not a ranking of providers or staff. the operations manager remains the decision maker for any commercial or service change."
        ]
      },
      {
        "id": "writing-the-conclusion",
        "heading": "Writing the conclusion",
        "paragraphs": [
          "State the question, population, window, measures, and the limits before the finding. A reader should be able to see which claims are supported and which are not.",
          "Avoid rankings and predictions. The useful conclusion is a specific record gap and a testable fix, not a general judgment about a team or vendor."
        ]
      },
      {
        "id": "governance-and-handoff",
        "heading": "Governance and handoff",
        "paragraphs": [
          "Leave the protocol, codebook, sample file, and open items in one place. The next reviewer should not rebuild the method from memory.",
          "Assign one owner for the protocol and one custodian for the data. Record the disposal date and the access list."
        ]
      },
      {
        "id": "sources",
        "heading": "Sources",
        "paragraphs": [
          "National Archives Records Management: https://www.archives.gov/records-mgmt",
          "GAO Standards for Internal Control: https://www.gao.gov/products/gao-14-704g",
          "NIST Cybersecurity Framework: https://www.nist.gov/cyberframework"
        ]
      }
    ]
  }
];
