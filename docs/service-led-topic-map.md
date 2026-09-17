# Service-led topic map

Updated: 2026-09-16

This is an execution ledger for existing Virtual Assistant Provider routes. It does not authorize new pages or duplicate calls to action. Each row has one buyer question, one existing service pillar, and one source route that must be checked in built route-local content before a handoff is added.

## Existing service pillars

| Service pillar | Buyer question | Existing supporting route | Route-local service link | Next action |
| --- | --- | --- | --- | --- |
| `/services/executive-assistant-staffing` | How can an owner set up calendar support without handing over travel, spending, or final commitments? | `/research/executive-assistant-calendar-coordination-evidence` | Delivered locally | The typed research record and its shared renderer already emit one route-local service link. Preserve this delivery and add no duplicate CTA while public rollout remains separately pending. |
| `/services/customer-support-assistants` | How can a manager give a Philippines-based assistant a safe first customer-support queue? | `/blog/virtual-assistant-customer-support-qa-philippines` | Delivered locally | The typed blog record and shared renderer now emit one route-local service link. Preserve this delivery and add no duplicate CTA while public rollout remains separately pending. |
| `/services/sales-support-assistants` | How can a team keep CRM follow-up moving without giving away sales decisions? | `/blog/virtual-assistant-crm-cleanup-philippines` | Delivered locally | Rendered source `fb1167e07a24a623beab514d7e4acfd49a6ec0e8` emits one route-local service handoff. Preserve it; public verification remains pending, so do not add a duplicate CTA. |
| `/services/bookkeeping-assistants` | What records can an assistant prepare before an owner reviews money decisions? | `/blog/virtual-assistant-bookkeeping-admin-philippines` | Delivered locally | Rendered source `1b992d6b7a7a67b1e9c0b14d6b632297f97ede35` emits one route-local service handoff. Preserve it; public verification is separately pending, so do not add a duplicate CTA. |
| `/services/ecommerce-assistants` | How can an owner test order and catalog support before giving wider access? | `/blog/virtual-assistant-ecommerce-qa-philippines` | Delivered locally | Rendered source `ef92f2f51a44b9c88ccefb6dca59172b745fe7f0` adds one route-local service handoff. Preserve it; public verification is separately pending, so do not add a duplicate CTA. |
| `/services/real-estate-assistants` | What administrative real-estate work can be prepared without making property or client commitments? | `/blog/real-estate-virtual-assistant-philippines` | Delivered locally | Rendered source `9c51f9dbbfe61c604bdc8b3b6ebcda2ed46c7e51` already emits one route-local service link. Preserve it and do not add another CTA. |
| `/services/healthcare-admin-assistants` | How can a practice organize appointment information without making clinical or privacy decisions? | `/blog/healthcare-virtual-assistant-philippines` | Delivered locally | Rendered source `62018860ef0e995c9a3a5105ef48055504f4566f` already emits one route-local service link. Preserve it and do not add another CTA. |
| `/services/marketing-assistants` | How can a team prepare content work while the owner keeps approval and publishing authority? | `/blog/virtual-assistant-content-operations-philippines` | Delivered locally | Rendered source `376078d9a8469c2df9f6de0bf46bfdeac86232f5` adds one route-local service handoff. Preserve it; public verification is separately pending, so do not add a duplicate CTA. |
| `/services/recruiting-assistants` | How can a team organize candidate administration while retaining employment decisions? | `/blog/virtual-assistant-recruiting-admin-philippines` | Verify absent | Candidate after the first three. Keep selection, offer, and employment decisions with the employer. |
| `/services/operations-assistant-staffing` | How can an owner create a repeatable work lane with an accountable exception path? | `/blog/virtual-assistant-daily-routine-philippines` | Verify absent | Candidate after the first three. Keep operational policy changes and exceptions with the owner. |

## Execution rule

Work one verified-absent pair at a time. Before editing, build the route and inspect only its `<main>` or `<article>` for the exact service href; navigation links do not count. A completed source handoff is marked delivered locally and is not recreated while deployment or public verification is pending.

## Release status — 2026-09-06

- Rendered source: b3a4407e1d02ab0297aae633221bac0f5be89bfd added the customer-support QA handoff. The local production artifact has the expected H1, one `data-route-next-action` section, one `/services/customer-support-assistants` link inside `<main>`, canonical URL, Article and Open Graph modified date `2026-09-06`, and sitemap location (this sitemap has no `<lastmod>` by repository contract).
- Cache-busted apex and www responses both returned HTTP 200 with the expected H1 and canonical URL, but neither rendered the new section, exact service link, or modified metadata. The GitHub deployment workflow could not be dispatched from this operator because approved GitHub authentication was unavailable; no direct provider target was inferred or triggered.
- Classification: `deployment_pending_public_verification / public_stale`. Preserve rendered-source commit b3a4407e1d02ab0297aae633221bac0f5be89bfd while the approved deployment routine catches up; do not add a duplicate handoff.

## Release status — 2026-09-08

- Rendered source: fb1167e07a24a623beab514d7e4acfd49a6ec0e8 adds one CRM-cleanup route-local handoff to `/services/sales-support-assistants`. The local production artifact has the CRM guide H1, one `data-route-next-action` section, one service href inside `<main>`, the sales-owner boundary, canonical URL, Article and Open Graph modified date `2026-09-08`, and the canonical sitemap location (this sitemap has no `<lastmod>` by repository contract).
- Cache-busted apex and www responses returned HTTP 200 with the expected H1 and apex canonical URL, but neither rendered the new section, service href, or sales-owner boundary. The canonical public sitemap includes the route, but cannot prove this content update because it has no `<lastmod>`.
- Classification: `deployment_pending_public_verification / public_stale`. Preserve rendered-source commit fb1167e07a24a623beab514d7e4acfd49a6ec0e8; the repository-approved deploy workflow is scheduled daily and no approved GitHub authentication was available to dispatch it. No deployment target was inferred or triggered.

## Release status — 2026-09-13

- Rendered source: 1b992d6b7a7a67b1e9c0b14d6b632297f97ede35 adds one bookkeeping-administration route-local handoff to `/services/bookkeeping-assistants`. The local production artifact has the expected H1, one `data-route-next-action` section, one service href inside `<main>`, the approval boundary, canonical URL, Article and Open Graph modified date `2026-09-13`, and the canonical sitemap location (this sitemap has no `<lastmod>` by repository contract).
- Cache-busted apex and www responses returned HTTP 200 with the expected H1 and apex canonical URL, but neither rendered the new section, service href, or modified metadata. Both public sitemaps contain the canonical route and omit `<lastmod>` by contract. The repository-approved workflow runs daily; no approved GitHub authentication was available for a manual dispatch, and no provider target was inferred or triggered.
- Classification: `deployment_pending_public_verification / public_stale`. Preserve rendered-source commit 1b992d6b7a7a67b1e9c0b14d6b632297f97ede35; this status-only record must not be treated as deployment proof or used to add a duplicate handoff.

## Release status — 2026-09-14

- Rendered source: ef92f2f51a44b9c88ccefb6dca59172b745fe7f0 adds one ecommerce-quality route-local handoff to `/services/ecommerce-assistants`. The local production artifact has the expected H1, one `data-route-next-action` section, one service href inside `<main>`, the store-owner boundary, canonical URL, Article and Open Graph modified date `2026-09-14`, and the canonical sitemap location (this sitemap has no `<lastmod>` by repository contract).
- Cache-busted apex and www responses each returned HTTP 200 with the expected H1 and apex canonical URL, but neither rendered the new section, service href, owner boundary, or modified metadata. Both public sitemaps contain the canonical route and omit `<lastmod>` by contract. The approved deployment workflow is scheduled daily; its command-line dispatcher is unavailable in this operator environment, and no provider target was inferred or triggered.
- Classification: `deployment_pending_public_verification / public_stale`. Preserve rendered-source commit ef92f2f51a44b9c88ccefb6dca59172b745fe7f0; this status-only record does not establish a rollout or authorize a duplicate CTA.

## Release status — 2026-09-17

- Rendered source: 376078d9a8469c2df9f6de0bf46bfdeac86232f5 adds one content-operations route-local handoff to `/services/marketing-assistants`. The local production artifact has the expected H1, one `data-route-next-action` section, one service href inside `<main>`, the owner boundary, canonical URL, Article and Open Graph modified date `2026-09-17`, and the canonical sitemap location (this sitemap has no `<lastmod>` by repository contract).
- Cache-busted apex and www responses each returned HTTP 200 with the expected H1 and apex canonical URL, but neither rendered the new section, service href, owner boundary, or modified metadata. The approved daily GitHub Actions deployment workflow could not be manually dispatched because `gh` is unavailable; no provider target was inferred or triggered.
- Classification: `deployment_pending_public_verification / public_stale`. Preserve rendered-source commit 376078d9a8469c2df9f6de0bf46bfdeac86232f5 while the approved workflow catches up; this status-only record does not establish a rollout or authorize a duplicate CTA.
