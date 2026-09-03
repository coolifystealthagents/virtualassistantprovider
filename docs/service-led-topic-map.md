# Service-led topic map

Updated: 2026-09-03

This is an execution ledger for existing Virtual Assistant Provider routes. It does not authorize new pages or duplicate calls to action. Each row has one buyer question, one existing service pillar, and one source route that must be checked in built route-local content before a handoff is added.

## Existing service pillars

| Service pillar | Buyer question | Existing supporting route | Route-local service link | Next action |
| --- | --- | --- | --- | --- |
| `/services/executive-assistant-staffing` | How can an owner set up calendar support without handing over travel, spending, or final commitments? | `/research/executive-assistant-calendar-coordination-evidence` | Verify absent | Reconcile the existing handoff record first: the current emitted `<main>` has no exact service href. Add no duplicate CTA until the source record and renderer path are traced. |
| `/services/customer-support-assistants` | How can a manager give a Philippines-based assistant a safe first customer-support queue? | `/blog/virtual-assistant-customer-support-qa-philippines` | Verify absent | First candidate: add one route-local handoff only if the emitted article has no link to this service. Keep refunds and unusual requests with the manager. |
| `/services/sales-support-assistants` | How can a team keep CRM follow-up moving without giving away sales decisions? | `/blog/virtual-assistant-crm-cleanup-philippines` | Verify absent | Second candidate: add one route-local handoff only if absent. Keep qualification, promises, and negotiation with the sales owner. |
| `/services/bookkeeping-assistants` | What records can an assistant prepare before an owner reviews money decisions? | `/blog/virtual-assistant-bookkeeping-admin-philippines` | Verify absent | Third candidate: add one route-local handoff only if absent. Do not imply payment approval or accounting advice. |
| `/services/ecommerce-assistants` | How can an owner test order and catalog support before giving wider access? | `/blog/virtual-assistant-ecommerce-qa-philippines` | Verify absent | Candidate after the first three. Keep refunds, pricing, and customer exceptions with the owner. |
| `/services/real-estate-assistants` | What administrative real-estate work can be prepared without making property or client commitments? | `/blog/real-estate-virtual-assistant-philippines` | Verify absent | Candidate after the first three. Keep pricing, availability, and client commitments with the authorized owner. |
| `/services/healthcare-admin-assistants` | How can a practice organize appointment information without making clinical or privacy decisions? | `/blog/healthcare-virtual-assistant-philippines` | Verify absent | Candidate after the first three. Keep clinical, privacy, and patient decisions with the practice. |
| `/services/marketing-assistants` | How can a team prepare content work while the owner keeps approval and publishing authority? | `/blog/virtual-assistant-content-operations-philippines` | Verify absent | Candidate after the first three. Keep claims, final publishing, and budget decisions with the owner. |
| `/services/recruiting-assistants` | How can a team organize candidate administration while retaining employment decisions? | `/blog/virtual-assistant-recruiting-admin-philippines` | Verify absent | Candidate after the first three. Keep selection, offer, and employment decisions with the employer. |
| `/services/operations-assistant-staffing` | How can an owner create a repeatable work lane with an accountable exception path? | `/blog/virtual-assistant-daily-routine-philippines` | Verify absent | Candidate after the first three. Keep operational policy changes and exceptions with the owner. |

## Execution rule

Work one verified-absent pair at a time. Before editing, build the route and inspect only its `<main>` or `<article>` for the exact service href; navigation links do not count. A completed source handoff is marked delivered locally and is not recreated while deployment or public verification is pending.
