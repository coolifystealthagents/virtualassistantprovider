# October 5 Blog working plan

This is a working artifact for VIR-98, not a publication manifest. No article is counted until its final public route passes the combined-release live checks. Publication dates remain unset while drafting; the site uses UTC and each date will be reconciled to the UTC date of first successful public verification.

## Repository and dependency audit

- Repository: `coolifystealthagents/virtualassistantprovider`
- Production branch: `main`
- Fetched production baseline: `832cc16e53f0ddc2aa2d1097ba9f2e97cc4a8ac4`
- Blog branch/worktree: `vir-98-blog-2026-10-05` / `vir-98-blog`
- Research dependency: VIR-97 run `9a42f924-9ef8-4730-830e-d517f0014a30` is active in the separate `vir-97-research` worktree at the same baseline. Do not touch or integrate it until its validated five-article commit is handed off.
- Public domain from repository configuration: `https://virtualassistantprovider.com`
- Production application from the current contract: Coolify3 `olts3775n7849bx8ol9ob7to`; the Blog agent does not deploy it.
- Audience from `app/data.ts`: business owners comparing managed virtual assistant providers.
- Conversion path: practical delegation guidance to a matching `/services/...` route and `/contact`.
- Current content model: typed `BlogPost` records in dated modules, aggregated by `app/data.ts`, rendered through `app/blog/[slug]/page.tsx`, and enumerated by `app/sitemap.xml/route.ts`.
- Approved reusable media is available under `public/featured`; final assignment must be checked for relevance and actual image decoding.

## Duplicate and niche screen

The existing inventory already covers broad hiring guides, generic first-week onboarding, inbox and calendar management, access control, handoffs, task queues, CRM cleanup, support QA, reporting, approval workflows, and the October 2 operational registers. The October 5 set therefore uses narrower buyer decisions and operating problems. Each article must use a distinct structure, example, argument sequence, and reader outcome; shared fill-in-the-blank prose is prohibited.

## Twelve accepted draft briefs

1. **When should a founder split one virtual assistant role into two?** Slug: `when-to-split-one-virtual-assistant-role-into-two`. Diagnose context switching, permission conflicts, queue competition, and specialist review needs; give a capacity map and a worked founder example. Conversion: executive and operations assistant staffing.
2. **Virtual assistant trial project: how to test the real job without using live risk**. Slug: `virtual-assistant-trial-project-real-job-test`. Build a representative, bounded work sample; distinguish screening evidence from unpaid production; show scoring and candidate feedback. Conversion: contact intake.
3. **How to calculate the true handoff cost before hiring a virtual assistant**. Slug: `calculate-virtual-assistant-handoff-cost`. Model owner preparation, training, review, rework, access setup, and steady-state savings; include a break-even worksheet without inventing provider pricing. Conversion: operations assistant staffing.
4. **What should a virtual assistant do when the source record is wrong?** Slug: `virtual-assistant-source-record-conflict-protocol`. Explain evidence hierarchy, reversible corrections, stop rules, and ownership using a CRM/customer example. Conversion: sales support assistants.
5. **Designing a virtual assistant role for exception work, not just repetitive tasks**. Slug: `virtual-assistant-exception-work-role-design`. Separate routine decisions, bounded judgment, and owner-only calls; provide an exception taxonomy and calibration method. Conversion: executive assistant staffing.
6. **Virtual assistant coverage during a founder’s vacation: a seven-day control plan**. Slug: `virtual-assistant-founder-vacation-coverage-plan`. Organize decision rights, daily briefs, emergency contacts, cash/legal boundaries, and return reconciliation around a day-by-day scenario. Conversion: executive assistant staffing.
7. **How to transfer a customer support queue between virtual assistants without losing context**. Slug: `transfer-customer-support-queue-between-virtual-assistants`. Cover active-case sampling, promises, SLA clocks, restricted notes, paired shifts, and acceptance evidence. Conversion: customer support assistants.
8. **A virtual assistant access review after a role changes**. Slug: `virtual-assistant-access-review-after-role-change`. Trigger a permissions review after promotion, reassignment, client change, or tool migration; use an identity-to-task matrix and removal verification. Conversion: operations assistant staffing.
9. **How a sales support assistant can prepare a no-response lead review**. Slug: `sales-support-assistant-no-response-lead-review`. Distinguish genuine silence, bad data, duplicate ownership, active negotiation, and opt-out; produce a decision queue without unauthorized outreach. Conversion: sales support assistants.
10. **Bookkeeping assistant month-end evidence: what “ready for review” actually means**. Slug: `bookkeeping-assistant-month-end-ready-for-review`. Define completeness by reconciled evidence, unresolved differences, reviewer questions, and approvals rather than document count. Conversion: bookkeeping assistants.
11. **Ecommerce assistant catalog rollback plan for high-risk product changes**. Slug: `ecommerce-assistant-catalog-change-rollback-plan`. Treat bulk edits as controlled releases; explain samples, before-state capture, variant checks, pause thresholds, and rollback verification. Conversion: ecommerce assistants.
12. **Recruiting assistant candidate-record corrections without rewriting history**. Slug: `recruiting-assistant-candidate-record-corrections`. Handle duplicate profiles, schedule errors, name corrections, consent, and interview-note boundaries through additive audit history. Conversion: recruiting assistants.

## Required completion gates

- Twelve registered Blog records, each at least 900 substantive body words.
- Current authoritative sources for every changeable claim, valid contextual internal links, relevant CTA, and no unsupported company claims.
- No duplicate slug/title/topic against the repository or VIR-97 handoff.
- Per-article body word count and content hash; repeated-paragraph check; qualitative shared-argument/example review; maximum pairwise five-word-shingle overlap below 50%.
- Relevant image exists, renders, and decodes; titles, full body, dates, canonicals, structured data, Blog index, and sitemap all validate from a clean combined build.
- VIR-97 contributes exactly five validated Research articles by full local commit SHA before integration.
- One combined non-force push only after fetch/rebase and all gates. The browser operator alone updates/deploys Coolify3; this agent then verifies all 17 public routes.
