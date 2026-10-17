# Service-led research link ledger

Last verified: 2026-09-28

This ledger connects one existing research question to one existing Philippines-only service route. It is a source-only planning record. It does not add reader-facing links, change schema, or prove public deployment.

## Confirmed delivery rules

- Candidate source and destination routes must each have one generated self-canonical artifact and a sitemap `<loc>`.
- Check the source route's `<main>` for the exact destination href before any implementation. A present link is delivered and must not be duplicated.
- Keep the research question narrow. The service link should help a reader plan the related role, without suggesting that an assistant owns clinical, housing, employment, financial, privacy, access, or customer decisions.
- When a candidate is implemented, use the existing typed service-link fields in the source record, refresh only that record's real `updated` value, and prove the route-local link, metadata, and sitemap output after a fresh build.

## Verified-absent candidates

| Order | Research source | Reader question | Existing Philippines-only service | Source `<main>` target-link count | Status |
| --- | --- | --- | --- | ---: | --- |
| 1 | `/research/healthcare-administrative-support-privacy-evidence` | What privacy safeguards should be visible before administrative support handles patient-related information? | `/services/healthcare-admin-assistants` | 1 locally | Delivered in rendered-source commit `5d60f3546c24196fe6d4a2bc039b5e4472484f37`; public verification is pending because cache-busted apex and www still serve the prior route body. Do not duplicate the CTA. Keep patient, clinical, access, and incident decisions with the healthcare owner. |
| 2 | `/research/recruiting-coordination-selection-evidence` | How can recruiting support improve candidate communication without making an unreviewed employment decision? | `/services/recruiting-assistants` | 0 | Verified absent. Keep candidate evaluation and selection with the employer. |
| 3 | `/research/real-estate-administration-fair-housing-evidence` | Which real-estate administrative tasks can be delegated without turning support into an unreviewed housing decision? | `/services/real-estate-assistants` | 0 | Verified absent. Keep advertising, steering, eligibility, and final housing decisions with the licensed owner. |
| 4 | `/research/ecommerce-catalog-accuracy-evidence` | What evidence supports delegating product-record maintenance without delegating product claims or commercial decisions? | `/services/ecommerce-assistants` | 0 | Verified absent. Keep product claims and commercial decisions with the owner. |
| 5 | `/research/crm-data-quality-sales-administration-evidence` | What makes CRM maintenance useful to sales without allowing support to invent or approve pipeline facts? | `/services/sales-support-assistants` | 0 | Verified absent. Keep forecasts, promises, and sales decisions with the sales owner. |
| 6 | `/research/market-research-brief-evidence` | What separates a useful market-research brief from a collection of untested links? | `/services/marketing-assistants` | 0 | Verified absent. Keep interpretation and business decisions with the client. |
| 7 | `/research/document-organization-access-evidence` | What evidence should a business examine before delegating shared-file organization? | `/services/operations-assistant-staffing` | 0 | Verified absent. Keep access grants and sensitive-file decisions with the named owner. |

## Artifact basis

A fresh production build on 2026-09-28 confirmed that all seven source routes and all seven service routes have one canonical generated artifact and a sitemap location. The repository sitemap intentionally has no `<lastmod>`. Each source route's route-local `<main>` contained zero anchors for its matched service route.

## 2026-10-17 active-inventory reconciliation

This older candidate list belongs to the retired editorial corpus. It is preserved as historical planning evidence, not an implementation queue. The current manifest emits only `/research/hire-virtual-assistant-philippines-evidence-guide` for research and `/blog/executive-assistant-philippines-hiring-guide` for the related role guide; none of the seven listed research sources is generated or sitemap-listed now.

Fresh production artifacts confirm that the executive guide has one route-local link to `/services/executive-assistant-staffing`. The active research guide has one route-local `/services` directory link and no role-specific research question, so it is not a valid substitute for any retired candidate. Keep the reader path as-is. Before a future contextual handoff, add an approved generated research source with a matching Philippines-only role question and repeat the source/target canonical, H1, `<main>` anchor-count, and sitemap checks.
