# Service-led topic map

Updated: 2026-09-06

This is an execution ledger for existing Virtual Assistant Provider routes. It does not authorize new pages or duplicate calls to action. Each row has one buyer question, one existing service pillar, and one source route that must be checked in built route-local content before a handoff is added.

## Existing service pillars

| Service pillar | Buyer question | Existing supporting route | Route-local service link | Next action |
| --- | --- | --- | --- | --- |
| `/services/executive-assistant-staffing` | How can an owner set up calendar support without handing over travel, spending, or final commitments? | `/research/executive-assistant-calendar-coordination-evidence` | Delivered locally | The typed research record and its shared renderer already emit one route-local service link. Preserve this delivery and add no duplicate CTA while public rollout remains separately pending. |
| `/services/customer-support-assistants` | How can a manager give a Philippines-based assistant a safe first customer-support queue? | `/blog/virtual-assistant-customer-support-qa-philippines` | Delivered locally | The typed blog record and shared renderer now emit one route-local service link. Preserve this delivery and add no duplicate CTA while public rollout remains separately pending. |
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

## Release status — 2026-09-06

- Rendered source: b3a4407e1d02ab0297aae633221bac0f5be89bfd added the customer-support QA handoff. The local production artifact has the expected H1, one `data-route-next-action` section, one `/services/customer-support-assistants` link inside `<main>`, canonical URL, Article and Open Graph modified date `2026-09-06`, and sitemap location (this sitemap has no `<lastmod>` by repository contract).
- Cache-busted apex and www responses both returned HTTP 200 with the expected H1 and canonical URL, but neither rendered the new section, exact service link, or modified metadata. The GitHub deployment workflow could not be dispatched from this operator because approved GitHub authentication was unavailable; no direct provider target was inferred or triggered.
- Classification: `deployment_pending_public_verification / public_stale`. Preserve rendered-source commit b3a4407e1d02ab0297aae633221bac0f5be89bfd while the approved deployment routine catches up; do not add a duplicate handoff.
