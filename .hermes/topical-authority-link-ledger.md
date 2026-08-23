# Philippines service-led topical authority ledger

Updated: 2026-08-22

This is a source-only planning record. It connects existing Philippines-based service pillars to existing research pages that answer the reader question just before a role-planning decision. It does not claim that a link is already visible unless the status says `verified`.

| Service pillar | Existing supporting page | Reader question | Current status | Next bounded action |
| --- | --- | --- | --- | --- |
| `/services/executive-assistant-staffing` | `/research/executive-assistant-calendar-coordination-evidence` | Which calendar tasks can a Philippines-based assistant handle while the executive keeps control of commitments? | candidate | Check for a useful body-level handoff to the executive assistant service. Keep scheduling decisions with the owner. |
| `/services/operations-assistant-staffing` | `/research/operations-assistant-daily-workflow` | How can an operations owner set up a daily work lane that leaves exceptions visible? | candidate | Check whether the report needs one direct service handoff after it explains the review owner and stop rules. |
| `/services/customer-support-assistants` | `/research/customer-support-escalation-evidence` | What shows that a first support queue is ready for delegated work? | verified | Do not add another handoff. The existing contextual path is already publicly verified. |
| `/services/sales-support-assistants` | `/research/crm-data-quality-sales-administration-evidence` | What makes CRM updates useful without letting support invent or approve pipeline facts? | candidate | Audit for one sales-support handoff tied to source-backed record changes and owner review. |
| `/services/bookkeeping-assistants` | `/research/bookkeeping-preparation-records-evidence` | Which record-preparation tasks support a bookkeeper while accounting judgment stays with the responsible professional? | candidate | Audit for one bookkeeping-service handoff. Keep accounting and payment decisions out of the support scope. |
| `/services/ecommerce-assistants` | `/research/ecommerce-catalog-accuracy-evidence` | How can product records be maintained without delegating product claims or commercial decisions? | candidate | Audit for one ecommerce-service handoff after the evidence boundary. |
| `/services/real-estate-assistants` | `/research/real-estate-administration-fair-housing-evidence` | Which factual listing and follow-up tasks can support a broker without becoming a housing decision? | candidate | Audit for one real-estate-service handoff. Preserve licensed-owner review for advertising, steering, and eligibility. |
| `/services/healthcare-admin-assistants` | `/research/healthcare-administrative-support-privacy-evidence` | What privacy safeguards should be checked before administrative support handles patient-related information? | candidate | Audit for one healthcare-admin handoff. Keep clinical decisions and privacy incidents with the designated owner. |
| `/services/marketing-assistants` | `/research/marketing-assistant-content-calendar` | How can a marketing owner keep a content calendar organized while retaining final publishing approval? | candidate | Audit for a marketing-service handoff that is specific to approved content preparation. |
| `/services/recruiting-assistants` | `/research/recruiting-coordination-selection-evidence` | How can recruiting support improve scheduling and candidate updates without making hiring decisions? | candidate | Audit for one recruiting-service handoff that keeps evaluation and selection with the employer. |

## Rules for the next public change

1. Use a source page only when it covers the same work boundary as the service target.
2. Confirm the target route exists in `app/fleet-content.ts` before editing the source.
3. Search the source for the target href first. Do not duplicate an existing contextual path.
4. Add two short, original sentences in plain language. The link should help with the next decision, not repeat a navigation link.
5. Refresh the source page's actual `updated` field and verify the rendered schema, canonical route, and sitemap after the build.
6. A public handoff needs a commit, deployment, and cache-busted apex and `www` verification before this ledger may call it verified.
