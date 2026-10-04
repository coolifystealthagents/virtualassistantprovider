# October 2 blog service-link ledger

Last verified: 2026-10-04

This source-only ledger records the current relationship between each October 2 blog and an existing Philippines-based staffing service. It does not add a reader-facing link, change metadata, or prove public rollout.

## Delivery rule

Each source and service route must have a generated self-canonical page and a sitemap `<loc>`. Check route-local `<main>` anchors, not navigation alone. A row with its inline link and its related-service card is delivered locally and must not receive another CTA.

## Verified delivery

| Blog route | Buyer decision | Existing service pillar | Route-local service anchors | Status |
| --- | --- | --- | ---: | --- |
| `/blog/executive-assistant-board-action-register` | Who can keep a board action register current while leaders keep governance decisions? | `/services/executive-assistant-staffing` | 2 | Delivered locally: one inline service link and one related-service card. Directors and executives keep decisions and approvals. |
| `/blog/customer-support-assistant-backlog-aging-triage` | What can a support assistant organize before an owner handles refunds, security, and customer commitments? | `/services/customer-support-assistants` | 2 | Delivered locally: one inline service link and one related-service card. Authorized owners keep customer commitments and exceptions. |
| `/blog/sales-assistant-demo-no-show-recovery-workflow` | How can a sales assistant follow up on a missed demo without making commercial promises? | `/services/sales-support-assistants` | 2 | Delivered locally: one inline service link and one related-service card. The account owner keeps qualification, pricing, and scope decisions. |
| `/blog/bookkeeping-assistant-expense-receipt-exception-queue` | Which receipt exceptions can an assistant prepare for review without approving money decisions? | `/services/bookkeeping-assistants` | 2 | Delivered locally: one inline service link and one related-service card. The finance owner keeps accounting and payment approvals. |
| `/blog/ecommerce-assistant-return-reason-quality-audit` | How can an assistant sort return evidence while an owner keeps product and refund decisions? | `/services/ecommerce-assistants` | 2 | Delivered locally: one inline service link and one related-service card. The store owner keeps refund, product, and policy decisions. |
| `/blog/real-estate-assistant-listing-document-completeness-check` | What listing records can an assistant check before a licensed owner makes property commitments? | `/services/real-estate-assistants` | 2 | Delivered locally: one inline service link and one related-service card. The licensed owner keeps housing and client decisions. |
| `/blog/healthcare-virtual-assistant-referral-status-workflow` | Which referral details can an assistant route without making a clinical or privacy decision? | `/services/healthcare-admin-assistants` | 2 | Delivered locally: one inline service link and one related-service card. The healthcare owner keeps clinical, access, and privacy decisions. |
| `/blog/marketing-assistant-webinar-follow-up-operations` | How can an assistant prepare webinar follow-up while the owner approves messages and offers? | `/services/marketing-assistants` | 2 | Delivered locally: one inline service link and one related-service card. The business owner keeps publishing and commercial decisions. |
| `/blog/recruiting-assistant-candidate-withdrawal-workflow` | What candidate follow-up can an assistant prepare before the employer makes an employment decision? | `/services/recruiting-assistants` | 2 | Delivered locally: one inline service link and one related-service card. The employer keeps selection, offers, and employment decisions. |
| `/blog/operations-assistant-sop-change-request-log` | How can an assistant log SOP changes while the owner approves the policy and exceptions? | `/services/operations-assistant-staffing` | 2 | Delivered locally: one inline service link and one related-service card. The owner keeps policy and exception decisions. |
| `/blog/virtual-assistant-supervisor-review-calibration` | What can a supervisor prepare for calibration while the owner keeps performance decisions? | `/services/operations-assistant-staffing` | 2 | Delivered locally: one inline service link and one related-service card. The owner keeps performance and work-scope decisions. |
| `/blog/virtual-assistant-access-offboarding-drill` | How can an assistant prepare an offboarding record without changing access or security controls? | `/services/operations-assistant-staffing` | 2 | Delivered locally: one inline service link and one related-service card. The named owner keeps access and security decisions. |

## Artifact basis

A fresh production build on 2026-10-04 verified all 12 exact blog artifacts and their service artifacts. Each source and destination has the expected canonical URL and sitemap `<loc>`. Each source `<main>` has exactly two DOM anchors to the matched service: a contextual inline link plus the related-service card. The sitemap intentionally omits `<lastmod>`.

No CTA was added in this ledger update. Preserve every row as non-duplicable unless a later route redesign deliberately replaces one of the two existing service paths.
