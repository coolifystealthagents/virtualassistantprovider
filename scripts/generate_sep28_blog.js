const fs = require('fs');
const path = require('path');

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) throw new Error('GEMINI_API_KEY is unavailable');

const topics = [
  ['executive-assistant', 'executive-assistant-meeting-pre-read-workflow', 'How an Executive Assistant Can Build a Decision-Ready Meeting Pre-Read', 'executive-assistant', 'meeting pre-read containing the decision requested, background, current facts, options, unresolved questions, attendees, and source links', 'The executive keeps the decision, sensitive relationship judgments, commitments, and any statement that has not been verified.'],
  ['customer-support', 'customer-support-ticket-reopen-analysis', 'How to Review Reopened Support Tickets Before Changing a Help Process', 'customer-support-assistant', 'reopen review table containing the original issue, first response, promised action, reopen reason, evidence, current owner, and prevention note', 'The business keeps refund authority, safety decisions, policy exceptions, account restrictions, and final customer commitments.'],
  ['sales-support', 'sales-assistant-lead-source-reconciliation', 'A Lead-Source Reconciliation Workflow for a Sales Virtual Assistant', 'sales-assistant', 'lead-source register that compares form, campaign, CRM, meeting, and salesperson records without overwriting the original values', 'Sales leadership owns attribution rules, territory disputes, quota credit, forecasts, and decisions to merge or delete records.'],
  ['bookkeeping', 'bookkeeping-assistant-vendor-statement-reconciliation', 'How a Bookkeeping Assistant Can Prepare Vendor Statement Reconciliation', 'bookkeeping-assistant', 'reconciliation pack listing statement lines, ledger matches, missing documents, timing differences, disputed items, and reviewer decisions', 'A qualified owner keeps accounting judgments, payment release, account changes, tax treatment, write-offs, and supplier disputes.'],
  ['ecommerce', 'ecommerce-assistant-product-data-change-control', 'Product Data Change Control for an Ecommerce Virtual Assistant', 'ecommerce-assistant', 'change request containing the SKU, current value, proposed value, approved source, affected channels, reviewer, publish time, and rollback note', 'The merchant keeps pricing strategy, regulated claims, product safety decisions, deletion, bulk imports, and final publication approval.'],
  ['real-estate', 'real-estate-assistant-showing-feedback-routing', 'A Showing-Feedback Routing System for a Real Estate Virtual Assistant', 'real-estate-assistant', 'feedback queue recording property, showing, consent-safe comments, follow-up request, responsible agent, due time, and disposition', 'The licensed professional keeps advice, representation decisions, negotiation, fair-housing-sensitive interpretation, and promises to clients.'],
  ['healthcare-admin', 'healthcare-admin-assistant-record-request-tracker', 'Build a Medical Record Request Tracker Without Delegating Clinical Judgment', 'healthcare-virtual-assistant', 'request tracker containing requester, authorization status, requested scope, date range, destination, deadline, disclosure status, and exception owner', 'Authorized healthcare staff keep identity exceptions, disclosure approval, minimum-necessary judgments, clinical interpretation, and urgent patient decisions.'],
  ['marketing', 'marketing-assistant-content-approval-register', 'A Content Approval Register for a Marketing Virtual Assistant', 'marketing-assistant', 'approval register containing asset, audience, channel, claim source, rights status, reviewer, revision history, scheduled time, and withdrawal action', 'The brand owner keeps positioning, regulated or comparative claims, crisis responses, rights exceptions, budgets, and final approval.'],
  ['recruiting', 'recruiting-assistant-interview-scheduling-accessibility', 'Accessible Interview Scheduling for a Recruiting Virtual Assistant', 'recruiting-assistant', 'scheduling record containing candidate preference, availability, format, accommodation routing status, interviewer, confirmation, and change history', 'Recruiting leadership keeps candidate evaluation, accommodation decisions, hiring decisions, compensation, and sensitive disclosures.'],
  ['operations', 'operations-assistant-recurring-report-close-checklist', 'How to Close a Recurring Operations Report Without Silent Data Gaps', 'operations-assistant', 'report close checklist containing source owner, extract time, completeness check, variance note, open exception, approver, distribution list, and archive location', 'The operating owner keeps metric definitions, materiality decisions, performance conclusions, access exceptions, and final distribution.'],
  ['legal-admin', 'virtual-assistant-contract-renewal-notice-calendar', 'A Contract Renewal Notice Calendar a Virtual Assistant Can Maintain Safely', 'executive-assistant', 'renewal calendar containing agreement owner, source document, notice window, renewal mechanism, review deadline, status, and counsel escalation', 'The company and its counsel keep legal interpretation, negotiation, cancellation decisions, signature authority, and conclusions about enforceability.'],
  ['provider-selection', 'virtual-assistant-backup-coverage-drill', 'How to Test a Virtual Assistant Provider’s Backup Coverage Before an Absence', 'operations-assistant', 'coverage drill record containing critical queue, backup identity, access readiness, handoff evidence, timed scenarios, defects, owners, and retest date', 'The customer keeps business priorities, emergency declarations, sensitive approvals, and acceptance of continuity risk.'],
];

const sources = [
  { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20', note: 'First-party framework used to structure governance, protection, response, and recovery responsibilities.' },
  { name: 'CISA Secure Our World: Require Multifactor Authentication', url: 'https://www.cisa.gov/secure-our-world/require-multifactor-authentication', note: 'First-party account-security guidance used for staged access planning.' },
  { name: 'Federal Plain Language Guidelines', url: 'https://www.plainlanguage.gov/guidelines/', note: 'Government guidance used to make instructions and operational records easier to understand and act on.' },
];

async function generate(prompt) {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-pro-preview:generateContent?key=' + apiKey, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { responseMimeType: 'application/json', temperature: 0.78, maxOutputTokens: 12000 } }),
  });
  const payload = await response.json();
  if (!response.ok || payload.error) throw new Error(payload.error?.message || `HTTP ${response.status}`);
  return JSON.parse(payload.candidates[0].content.parts[0].text);
}

async function main() {
  const articles = [];
  for (let i = 0; i < topics.length; i++) {
    const [family, slug, title, service, artifact, boundary] = topics[i];
    const prompt = `Write one publication-ready article for VirtualAssistantProvider.com. Return JSON only with keys excerpt, minutes, takeaways (4 strings), sections (8 objects with heading and body), and faq (3 question/answer objects).

Title: ${title}
Audience: a business owner or manager deciding whether and how to delegate this exact workflow to a Philippines-based virtual assistant.
Central deliverable: ${artifact}.
Authority boundary: ${boundary}

The eight sections together must contain 1,050-1,300 substantive words. Each section must advance this exact topic through a concrete scenario, fields, operating sequence, quality checks, exception cases, measurement, and provider-selection questions. Use varied section structure and topic-specific examples. Do not reuse a generic hiring/pilot outline. Do not mention prompts, agents, generation, manifests, deployment, QA tooling, or publication mechanics. Do not invent company results, prices, testimonials, certifications, or locations. Treat the role as administrative support, not licensed professional advice. Explain that sources are planning references, not legal, tax, accounting, security, clinical, or HR advice. Refer accurately and sparingly to NIST CSF 2.0, CISA MFA guidance, and the Federal Plain Language Guidelines; do not invent statistics. Natural, direct prose; no hype, fake quotations, or repetitive conclusions. Do not include the date in the prose.`;
    let article;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try { article = await generate(prompt); break; }
      catch (error) { if (attempt === 3) throw error; }
    }
    const bodyWords = article.sections.map((s) => s.body).join(' ').trim().split(/\s+/).length;
    if (bodyWords < 900) throw new Error(`${slug} too short: ${bodyWords}`);
    articles.push({
      slug, featuredImage: '/featured/operations-assistant-daily-workflow.png', title,
      excerpt: article.excerpt, minutes: article.minutes || 10, published: '2026-09-28', displayDate: 'September 28, 2026',
      takeaways: article.takeaways, sections: article.sections, faq: article.faq, sources,
      relatedServices: [service],
      articleLinks: [
        { label: 'Philippines virtual assistant hiring guide', href: '/blog/virtual-assistant-hiring-guide-philippines' },
        { label: 'virtual assistant escalation rules guide', href: '/blog/virtual-assistant-escalation-rules-philippines' },
        { label: 'NIST Cybersecurity Framework 2.0', href: sources[0].url, external: true },
      ],
      nextAction: { heading: 'Turn this workflow into a bounded role', href: '/contact', label: 'Request a Philippines staffing plan', description: 'Bring your current examples, systems, volume, review owner, and decision boundaries. Virtual Assistant Provider can help turn them into a practical role brief for Philippines-based talent.' },
      _family: family,
    });
    console.log(`${i + 1}/12 ${slug}: ${bodyWords} body words`);
  }
  const clean = articles.map(({ _family, ...article }) => article);
  fs.writeFileSync(path.join(__dirname, '..', 'app', 'article-blog-sep28-2026.ts'), `import type { BlogPost } from './data';\n\nexport const september28BlogPosts: BlogPost[] = ${JSON.stringify(clean, null, 2)};\n`);
  fs.writeFileSync(path.join(__dirname, '..', '.paperclip', 'daily-content', '2026-09-28-blog-draft.json'), JSON.stringify({ batchId: '2026-09-28-vir-93-blog-12', taskId: process.env.PAPERCLIP_TASK_ID, runId: process.env.PAPERCLIP_RUN_ID, baselineSha: '3dfd6b8ffe68045ef009ac5edbf08fbc1652ba3d', timezone: 'UTC', publicationDate: '2026-09-28', quantity: 12, blogs: articles.map((a) => ({ family: a._family, topic: a.title, slug: a.slug, sources: a.sources.map((s) => s.url), liveUrl: `https://virtualassistantprovider.com/blog/${a.slug}` })) }, null, 2));
}

main().catch((error) => { console.error(error.stack || error); process.exit(1); });
