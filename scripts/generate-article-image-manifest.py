#!/usr/bin/env python3
import json, pathlib, re

corpus=json.load(open('/tmp/vap-generic-corpus.json'))['rows']

CATALOG={
 'executive':('/featured/executive-assistant-calendar-delegation.png','Executive calendar delegation workflow with scheduling rules and approval boundaries'),
 'travel':('/aug20-heroes/executive-travel-virtual-assistant-coordination.jpeg','Executive travel coordination with itinerary options and approval steps'),
 'customer':('/featured/customer-support-qa-workflow.png','Customer support quality review workflow for routine tickets and escalations'),
 'sales':('/featured/sales-support-crm-hygiene.png','Sales support CRM workflow for source-backed updates and owner review'),
 'bookkeeping':('/featured/bookkeeping-assistant-control-checklist.png','Bookkeeping preparation controls for source records, exceptions, and owner approval'),
 'ecommerce':('/featured/ecommerce-order-exception-workflow.png','Ecommerce order workflow separating routine updates from refund and fraud exceptions'),
 'realestate':('/featured/real-estate-assistant-lead-follow-up.png','Real estate lead follow-up workflow with factual updates and agent escalation'),
 'healthcare':('/featured/healthcare-admin-assistant-scheduling.png','Healthcare administrative scheduling workflow with access and escalation boundaries'),
 'marketing':('/featured/marketing-assistant-content-calendar.png','Marketing content calendar workflow with draft, review, and approval stages'),
 'recruiting':('/featured/recruiting-assistant-sourcing-workflow.png','Recruiting workflow for candidate records, interview coordination, and manager review'),
 'research':('/featured/research-claim-evidence-map.png','Research workflow connecting claims with supporting evidence'),
 'research-sources':('/featured/research-source-reliability-review.png','Research workflow for reviewing source reliability and limitations'),
 'access':('/aug19-heroes/assistant-service-access-recertification-review.webp','Access review showing account ownership, permissions, and recertification steps'),
 'change':('/aug19-heroes/assistant-service-change-control-record.webp','Change-control record with prior state, approval, and effective date'),
 'escalation':('/aug19-heroes/assistant-service-escalation-path-design.webp','Escalation path showing decision owners and handoff points'),
 'exception':('/aug19-heroes/assistant-service-exception-queue-triage.webp','Exception queue organized by status, owner, and required decision'),
 'handoff':('/aug19-heroes/assistant-service-handoff-acceptance-log.webp','Handoff acceptance log with deliverables, owners, and review status'),
 'intake':('/aug19-heroes/assistant-service-intake-source-register.webp','Source register with document identifiers, receipt states, and owners'),
 'approval':('/aug19-heroes/assistant-service-approval-evidence-matrix.webp','Approval matrix connecting evidence, reviewers, and decision status'),
 'quality':('/aug19-heroes/assistant-service-quality-review-cadence.webp','Quality-review schedule with checkpoints, owners, and follow-up actions'),
 'source':('/aug19-heroes/assistant-service-source-of-truth-map.webp','Source-of-truth map connecting records, systems, and accountable owners'),
 'weekly':('/aug19-heroes/assistant-service-weekly-decision-brief.webp','Weekly decision brief summarizing open items, evidence, and owners'),
 'queue':('/aug19-heroes/assistant-service-work-queue-ownership.webp','Work queue with priorities, ownership, and completion status'),
 'role':('/illustrations/getillustrations/grain-teamwork/role-planning-workflow.svg','Role-planning workflow for workload, ownership, and staffing'),
}

EXACT={
 'virtual-assistant-website-content-inventory-philippines':'marketing',
 'virtual-assistant-construction-submittal-receipt-log':'intake',
 'virtual-assistant-construction-submittal-register':'intake',
 'virtual-assistant-travel-research-philippines':'travel',
 'virtual-assistant-customer-refund-evidence-packet':'customer',
 'virtual-assistant-august-23-refund-evidence-packet':'customer',
 'virtual-assistant-manager-capacity-before-hiring':'role',
 'calculate-virtual-assistant-handoff-cost':'role',
 'bookkeeping-assistant-document-access-plan':'bookkeeping',
 'ecommerce-assistant-return-evidence-pack':'ecommerce',
 'ecommerce-return-receipt-reconciliation-study':'ecommerce',
 'recruiting-assistant-candidate-data-retention-tracker':'recruiting',
 'recruiting-automated-screening-change-log-study':'change',
 'virtual-assistant-vendor-renewal-fact-pack':'queue',
 'virtual-assistant-august-23-vendor-renewal-brief':'queue',
 'virtual-assistant-workload-review-philippines':'role',
 'virtual-assistant-escalation-response-time-matrix':'healthcare',
 'virtual-assistant-provider-tool-costs-comparison':'marketing',
 'virtual-assistant-communication-cadence-first-month':'role',
 'virtual-assistant-marketplace-listing-change-log':'ecommerce',
 'virtual-assistant-property-maintenance-work-order-log':'realestate',
 'virtual-assistant-film-release-form-register':'intake',
 'virtual-assistant-film-release-form-register-september-11-review':'intake',
 'virtual-assistant-film-release-form-register-september-14-review':'intake',
 'virtual-assistant-restaurant-allergen-content-calendar':'marketing',
 'virtual-assistant-social-content-approval-calendar':'marketing',
 'virtual-assistant-recruiter-calendar-philippines':'recruiting',
 'virtual-assistant-password-manager-onboarding-checklist':'access',
}

def has(s,*parts): return any(p in s for p in parts)

def classify(row):
 s=row['slug'].lower()
 if s in EXACT: return EXACT[s]
 # Strong business domains take precedence over generic process words.
 if has(s,'ecommerce','shopify','amazon','catalog','chargeback','order-','order_','inventory-reconciliation'): return 'ecommerce'
 if has(s,'customer-support','customer-service','help-desk','ticket','refund','call-handling','multilingual-support'): return 'customer'
 if has(s,'bookkeeping','accounting','bank-','invoice','expense','financial','month-end','payment-reminder'): return 'bookkeeping'
 if has(s,'real-estate','property','listing','tenant','lease-'): return 'realestate'
 if has(s,'healthcare','patient','dental','clinic','medical','referral-intake'): return 'healthcare'
 if has(s,'recruiting','candidate','interview','applicant','new-hire'): return 'recruiting'
 if has(s,'sales-','lead-','crm','demo-','proposal','appointment-setting'): return 'sales'
 if has(s,'travel'): return 'travel'
 if has(s,'executive','board-','calendar','inbox','meeting','founder-'): return 'executive'
 if has(s,'marketing','content','social-media','webinar','podcast','newsletter','campaign','brand-','website','publishing'): return 'marketing'
 # Research route gets an honest research editorial visual unless a strong domain matched above.
 if row['kind']=='research':
  if has(s,'source','citation','methodology','claim','evidence','study','research'): return 'research-sources'
  return 'research'
 # General operations: select only explicit process concepts.
 if has(s,'access','permission','authentication','account-recovery','offboarding'): return 'access'
 if has(s,'change-control','change-log','version-control','revision'): return 'change'
 if has(s,'escalation'): return 'escalation'
 if has(s,'exception','conflict','incident'): return 'exception'
 if has(s,'handoff','transfer-','transition'): return 'handoff'
 if has(s,'intake','register','receipt-log'): return 'intake'
 if has(s,'approval','sign-off'): return 'approval'
 if has(s,'quality','qa-','review','audit','scorecard','readiness'): return 'quality'
 if has(s,'source-of-truth','source-record','record-hygiene','data-entry','data-cleanup','document','file-','shared-drive'): return 'source'
 if has(s,'weekly','reporting','brief','status-update','summary'): return 'weekly'
 if has(s,'queue','task-','workflow','routine','follow-up','tracking','tracker','log','coordination','coverage','schedule'): return 'queue'
 if has(s,'role','staffing','capacity','workload','delegat','manager','provider','trial','onboarding','training','sop','instructions'): return 'role'
 return 'queue'

mapped=[]
for r in corpus:
 cat=classify(r); src,alt=CATALOG[cat]
 mapped.append({**r,'category':cat,'src':src,'alt':alt})

counts={}
for x in mapped: counts[x['category']]=counts.get(x['category'],0)+1
print(json.dumps({'count':len(mapped),'categories':dict(sorted(counts.items()))},indent=2))

# TypeScript-compatible ESM manifest: one exact decision per unique slug, no runtime classification.
by_slug={}
for x in mapped:
 choice=(x['src'],x['alt'])
 previous=by_slug.get(x['slug'])
 if previous and previous != choice:
  raise RuntimeError(f"Conflicting cross-route mapping for {x['slug']}: {previous} vs {choice}")
 by_slug[x['slug']]=choice
lines=["/** @typedef {{ src: string, alt: string }} ArticleImageChoice */", "", "/** @type {Readonly<Record<string, ArticleImageChoice>>} */", "export const articleImageManifest = {"]
for slug,(src,alt) in sorted(by_slug.items()):
 lines.append(f"  {json.dumps(slug)}: {{ src: {json.dumps(src)}, alt: {json.dumps(alt)} }},")
lines.append('};\n')
pathlib.Path('app/article-image-manifest.mjs').write_text('\n'.join(lines))
pathlib.Path('/tmp/vap-image-manifest-audit.json').write_text(json.dumps(mapped,indent=2))
