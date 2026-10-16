# Virtual Assistant Provider

SEO lead generation site for `virtualassistantprovider.com`. Built with Next.js, Docker, and the Hermes VA site factory playbook.

## Current conversion contracts

- `/contact-us` submits to `/api/contact` and accepted leads continue to `/thank-you`.
- ACR attribution uses the same-origin `/ingest/track` endpoint.
- Approved testimonials and the official StealthAgents identity assets are checked into the site.
- Privacy and terms routes are published and linked from the global footer.

## Daily research publishing

The scheduled workflow runs once daily at 09:40 UTC. A completed `.daily-blog-batch.json` must record the random selection and quantity, validate each topic against the repository and live content, and provide research, thumbnail, structure, humanizer, and link evidence for every article. Each article must contain exactly two internal article-body links and one authoritative external article-body link. The normal batch contains 20 to 25 non-overlapping research articles. A smaller batch is allowed only when validated non-overlap or reliable sources are unavailable, and must include a specific `publishFewerReason`.

Set these GitHub repository values before enabling the routine:

- Secrets: `COOLIFY_API_URL`, `COOLIFY_API_TOKEN`, `COOLIFY_APPLICATION_UUID`.
- Variables: `WEBSITE_DOMAIN` or `WEBSITE_URL`.

The gate fetches and rebases the production branch before building, stages only manifest-listed files, pushes the resulting commit, requests one matching Coolify deployment, and checks the home, blog, research, and new article URLs.
