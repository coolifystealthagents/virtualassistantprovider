# V3 acceptance ledger: virtualassistantprovider.com

Specification: `v3_update.md` supplied 2026-10-16.

Design read: Reading this as a virtual-assistant provider and managed staffing site for operations leaders and business owners, with a calm evidence-led and human operational visual language, leaning toward magazine-led editorial with technical workflow cues.

- DESIGN_VARIANCE: 8
- MOTION_INTENSITY: 3
- VISUAL_DENSITY: 6
- Redesign mode: overhaul
- Primary theme: light
- Primary accent strategy: restrained signal orange for decisions and actions against ink and warm paper
- Shape system: clipped editorial panels, ruled dividers, restrained radii
- Typography direction: compact editorial display headings with readable humanist body copy
- Image direction: topic-specific operational photography and diagrams with documentary crops
- Motion rationale: continuous review provenance and useful state transitions only; static under reduced motion

## Status vocabulary

- PASS: source, rendered, and interaction evidence complete where applicable
- FAIL: known noncompliance
- NOT VERIFIED: evidence unavailable or pending
- N/A: clause does not apply to the retained information architecture

## Predeployment acceptance

| Gate | Status | Evidence |
|---|---|---|
| Powered by StealthAgents in visible header and footer | PASS | 100-state browser matrix across 25 routes and four widths |
| At least 10 distinct first-party StealthAgents reviews | PASS | 12 unique records in `app/review-provenance.json`; one DOM record per review |
| Continuously moving control-free review marquee | PASS | node-recycling marquee, hover/focus pause, no controls, reduced-motion grid |
| Sticky navigation with exactly Home, Services, Contact Us | PASS | source contract plus desktop/mobile browser interaction |
| Mobile keyboard behavior | PASS | first-link focus, Escape close, trigger focus restoration, Tab containment |
| One subsidiary identity across favicon, header, and footer | PASS | `/icon.svg` and shared shell browser audit |
| Parent-brand attribution | PASS | visible shared header/footer plate and official contact proof section |
| Long-form commercial content | PASS | homepage, About, pricing, services index, and 10 role-specific services |
| Relevant route-specific imagery | PASS | image manifest, decode audit, rendered matrix, no detected upscale on required proof image |
| Contact first fold, full form, and conversion ownership | PASS | required desktop widths and mobile; single form owner; invalid-field focus |
| Parent section immediately after contact opening | PASS | source order and browser screenshots |
| `/contact-us` to `/thank-you` to `/thanks-whats-next` | PASS | route and form contracts; OnceHub appears only on `/thank-you` |
| Automatic OnceHub post-booking redirect | NOT VERIFIED | controlled in OnceHub administration, outside repository code |
| About route with business model and accountability | PASS | route, sitemap, long-form content, and browser matrix |
| Reviewed editorial publication system | PASS | one reviewed guide and one reviewed report; all generated legacy details permanently retired |
| Route-specific editorial heroes | PASS | distinct 1672 by 941 source assets rendered without detected upscale |
| Sticky desktop TOC and populated sidebar | PASS | both retained articles; active anchors and four resource modules |
| Collapsible mobile TOC | PASS | both retained articles; keyboard-operable details and anchor links |
| No content after article footer | PASS | one footer, zero injected banners, no visible elements after footer |
| Permanent retirement redirects | PASS | comparison, pagination, 12 blog, and 5 research legacy paths |
| Canonical contact redirect | PASS | `/contact` returns permanent redirect to `/contact-us` locally |
| Forbidden visible punctuation | PASS | source and rendered matrix scans |
| Decorative number/letter labels | PASS | reviewed commercial and editorial route scan |
| Unsupported ranking/comparison claims | PASS | source scan and retirement of comparison directory |
| Responsive containment | PASS | 1366x768, 1440x800, 390x844, and 320x800; zero document overflow |
| Security and dependency gate | PASS | bounded contact request, forwarded-origin validation, security headers, zero production vulnerabilities |
| ACR tracking and lead delivery | PASS | first-party proxy, queue ordering, at-most-once invocation, failure containment |
| Production deployment and live verification | NOT VERIFIED | requires exact-SHA receipt and post-cutover matrix |
| HTTP/HTTPS and `www` canonicalization | NOT VERIFIED | corrected configuration requires post-cutover probes |

## Retained public route families

- Home: 1
- About: 1
- Services: 1 index plus 10 detail routes
- Pricing: 1
- Blog: 1 index plus 1 reviewed guide
- Research: 1 index plus 1 reviewed evidence report
- Conversion: contact, thank-you, and post-scheduling next steps
- Legal: privacy, terms, and cancellation policy
- Branded 404 behavior
- Historical generated editorial and pagination paths remain only as permanent redirects and are excluded from the sitemap

## Mechanical receipts

- Automated tests: 49 passed, 0 failed
- TypeScript: passed
- Clean Next.js production build: passed, 50 route outputs
- Production dependency audit: 0 vulnerabilities
- Rendered matrix: 100 route/viewport states, 0 fatal errors, 0 overflow failures, 0 H1 failures
- Required interaction checks: form focus, mobile menu, reduced motion, sticky article navigation, mobile TOC, and permanent redirects passed

The two production-only gates remain NOT VERIFIED until the exact reviewed SHA is deployed and the complete live matrix is repeated against the apex and alternate hosts.
