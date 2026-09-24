# Philippines service-led topical authority ledger

Updated: 2026-09-24

This is a source-only planning record. It connects existing Philippines-based service pillars to existing research pages that answer the reader question just before a role-planning decision. It does not claim that a link is already visible unless the status says `verified`.

| Service pillar | Existing supporting page | Reader question | Current status | Next bounded action |
| --- | --- | --- | --- | --- |
| `/services/executive-assistant-staffing` | `/research/executive-assistant-calendar-coordination-evidence` | Which calendar tasks can a Philippines-based assistant handle while the executive keeps control of commitments? | delivered locally | One exact route-local service link is present. Preserve it while rollout evidence remains separate. |
| `/services/operations-assistant-staffing` | `/research/operations-assistant-daily-workflow` | How can an operations owner set up a daily work lane that leaves exceptions visible? | verified absent | The built research main has no matching service link. Keep review owners and stop rules in any later handoff. |
| `/services/customer-support-assistants` | `/research/customer-support-escalation-evidence` | What shows that a first support queue is ready for delegated work? | verified | Do not add another handoff. The existing contextual path is already publicly verified. |
| `/services/sales-support-assistants` | `/research/crm-data-quality-sales-administration-evidence` | What makes CRM updates useful without letting support invent or approve pipeline facts? | verified absent | The built research main has no matching service link. Keep forecasts, offers, and customer promises with sales owners. |
| `/services/bookkeeping-assistants` | `/research/bookkeeping-preparation-records-evidence` | Which record-preparation tasks support a bookkeeper while accounting judgment stays with the responsible professional? | verified absent | The built research main has no matching service link. Keep accounting and payment decisions out of the support scope. |
| `/services/ecommerce-assistants` | `/research/ecommerce-catalog-accuracy-evidence` | How can product records be maintained without delegating product claims or commercial decisions? | verified absent | The built research main has no matching service link. Keep product claims, pricing, refunds, and commercial decisions with the owner. |
| `/services/real-estate-assistants` | `/research/real-estate-administration-fair-housing-evidence` | Which factual listing and follow-up tasks can support a broker without becoming a housing decision? | verified absent | The built research main has no matching service link. Preserve licensed-owner review for advertising, steering, and eligibility. |
| `/services/healthcare-admin-assistants` | `/research/healthcare-administrative-support-privacy-evidence` | What privacy safeguards should be checked before administrative support handles patient-related information? | verified absent | The built research main has no matching service link. Keep clinical decisions and privacy incidents with the designated owner. |
| `/services/marketing-assistants` | `/research/market-research-brief-evidence` | What makes a research brief useful before a founder makes a marketing choice? | verified absent | The built research main has no matching service link. Keep interpretation and business decisions with the client. |
| `/services/recruiting-assistants` | `/research/recruiting-coordination-selection-evidence` | How can recruiting support improve scheduling and candidate updates without making hiring decisions? | verified absent | The built research main has no matching service link. Keep evaluation, selection, and employment decisions with the employer. |

## Rules for the next public change

1. Use a source page only when it covers the same work boundary as the service target.
2. Confirm the target route exists in `app/fleet-content.ts` before editing the source.
3. Search the source for the target href first. Do not duplicate an existing contextual path.
4. Add two short, original sentences in plain language. The link should help with the next decision, not repeat a navigation link.
5. Refresh the source page's actual `updated` field and verify the rendered schema, canonical route, and sitemap after the build.
6. A public handoff needs a commit, deployment, and cache-busted apex and `www` verification before this ledger may call it verified.

## 2026-09-24 artifact reconciliation

A fresh production build checked every source and service route in this ledger by its exact emitted artifact. All 20 routes have an H1, canonical URL, and sitemap location. The executive-calendar and customer-support sources each have one matching service link inside route-local `<main>`; the other eight source routes have none. This planning correction does not add reader-facing links, alter schema, or claim public rollout.

## 2026-09-23 buyer-decision batch

Twelve new Blog guides strengthen provider-selection and operating-model conversion paths. Public verification is pending deployment.
