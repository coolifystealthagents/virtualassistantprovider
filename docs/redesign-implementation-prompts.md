# Redesign implementation prompts

These prompts define the completed scope for the November 2026 redesign-preserve release. Brand identity, navigation wording other than Pricing, routes, metadata, structured data, analytics, and form contracts remain authoritative.

1. **Pricing removal:** Remove every navigational and conversion link to `/pricing`, retire the route, remove it from the sitemap, redirect it permanently to `/contact-us`, and add regression coverage proving the page is gone and the redirect remains.
2. **Homepage hero image:** Replace the workflow illustration with licensed professional remote-work photography, load it responsively as the LCP image, reserve its dimensions, write factual alt text, and verify useful desktop and mobile crops.
3. **Homepage image system:** Give the homepage a cohesive professional photo set with no repeated image, service-specific subjects, documented licensing, responsive dimensions, and intentional aspect ratios.
4. **Homepage visual depth:** Preserve the brand palette while building an editorial split hero, asymmetric service mosaic, stronger section contrast, concise copy, visible focus states, and restrained hover feedback without oversized gaps or generic equal-card rows.
5. **Services hero:** Use a unique licensed photo of an operations team coordinating work. Do not reuse a homepage image. Reserve dimensions and keep the primary action visible in the initial viewport.
6. **Services spacing:** Remove fixed or empty spacing, use the shared spacing scale, keep the selector compact, and collapse every multi-column section explicitly below tablet width.
7. **Services image variety:** Assign one distinct professional landscape photo and descriptive alt text to each service record. Present all directory thumbnails at 16:9 with responsive sizing and lazy loading below the fold.
8. **Individual service pages:** Turn the shared detail template into a conversion-led service page with an asymmetric hero, outcome, audience, capabilities, inputs, decision boundaries, review evidence, launch sequence, scenario, FAQ, related services, and one consistent consultation action while preserving route metadata and source copy.
9. **Contact spacing:** Keep the existing field names and order, tighten the first fold and supporting sections, retain a balanced two-column desktop form composition, collapse cleanly on mobile, and strengthen label, focus, invalid, helper, and error presentation.
10. **Blog and research thumbnails:** Use the shared responsive image component for archive heroes and cards, enforce a landscape 16:9 frame with `object-fit: cover`, reserve dimensions, keep meaningful alt text, and preserve lazy loading for below-fold cards.
