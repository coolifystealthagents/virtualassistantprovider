# Humanizer audit

Date: 2026-07-20
Scope: site-wide marketing and editorial copy

## Reviewed

- `app/page.tsx` — homepage hero, task cards, provider-support section, guide rail, and final CTA
- `app/data.ts` — site positioning, service copy, provider notes, article data, FAQs, staffing offer, intake questions, and staffing process
- `app/components.tsx` — header, footer description and disclosure, and shared CTA
- `app/services/[slug]/page.tsx` — service-page headings, guidance, provider script, FAQs, and related-guide copy
- `app/blog/page.tsx` — guide index metadata, heading, and introduction
- `app/blog/[slug]/page.tsx` — article labels, source note, provider questions, related roles, and shared CTA placement
- `app/contact/page.tsx` — metadata, intake introduction, form labels, option copy, and callout
- `app/thank-you/page.tsx` — confirmation and next-step cards
- `app/layout.tsx` — default and Open Graph metadata

## What changed

- Removed internal benchmark language from the homepage.
- Replaced promotional phrases such as "premium staffing match" and "top-fit match" with direct role and hiring language.
- Broke up generic lists about screening, onboarding, quality, and support into concrete questions a buyer can ask.
- Rewrote stiff CTA, footer, contact, and confirmation copy in plain language.
- Repaired garbled budget-guide wording left by an earlier brand cleanup and gave the article a useful search-intent title.
- Removed em-dash and "not only" constructions from user-facing copy.
- Kept the VA niche, route slugs, cited sources, existing numbers, schema meaning, and conversion path intact.

## Exclusions

- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `app/cancellation/page.tsx`
- `app/cancellation-policy/page.tsx`

Legal policy wording was not edited. Repository documentation and generated build files were outside the user-facing copy audit.
