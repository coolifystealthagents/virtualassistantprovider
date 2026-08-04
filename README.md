# Virtual Assistant Provider

SEO lead generation site for `virtualassistantprovider.com`. Built with Next.js, Docker, and the Hermes VA site factory playbook.

## Placeholder swaps

- Connect `/contact` to CRM/Formspree/Staffing intake.
- Add analytics ID.
- Add real testimonials only after approval.
- Add legal/privacy pages before paid traffic.

## Daily research publishing

The scheduled workflow runs hourly and the deployment gate proceeds only at 06:00 in `SITE_TIMEZONE` (a GitHub Actions repository variable). A completed `.daily-blog-batch.json` must record the random selection, quantity, validation state, exclusion check, thumbnail readiness, and direct-source count for every article. The normal batch contains 10 to 15 non-overlapping research articles. A smaller batch must include a non-empty `publishFewerReason`.

Set these GitHub repository values before enabling the routine:

- Secrets: `COOLIFY_API_URL`, `COOLIFY_API_TOKEN`, `COOLIFY_APPLICATION_UUID`.
- Variables: `SITE_TIMEZONE`, `WEBSITE_DOMAIN` or `WEBSITE_URL`.

The gate fetches and rebases the production branch before building, stages only manifest-listed files, pushes the resulting commit, requests one matching Coolify deployment, and checks the home, blog, research, and new article URLs.
