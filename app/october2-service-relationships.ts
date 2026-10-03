// Canonical October 2 Blog relationships. Every value is a current service slug
// from fleetServices in app/fleet-content.ts; cycle scoping preserves earlier releases.
export const october2ServiceRelationships: Record<string, string> = {
  'executive-assistant-board-action-register': 'executive-assistant-staffing',
  'customer-support-assistant-backlog-aging-triage': 'customer-support-assistants',
  'sales-assistant-demo-no-show-recovery-workflow': 'sales-support-assistants',
  'bookkeeping-assistant-expense-receipt-exception-queue': 'bookkeeping-assistants',
  'ecommerce-assistant-return-reason-quality-audit': 'ecommerce-assistants',
  'real-estate-assistant-listing-document-completeness-check': 'real-estate-assistants',
  'healthcare-virtual-assistant-referral-status-workflow': 'healthcare-admin-assistants',
  'marketing-assistant-webinar-follow-up-operations': 'marketing-assistants',
  'recruiting-assistant-candidate-withdrawal-workflow': 'recruiting-assistants',
  'operations-assistant-sop-change-request-log': 'operations-assistant-staffing',
  'virtual-assistant-supervisor-review-calibration': 'operations-assistant-staffing',
  'virtual-assistant-access-offboarding-drill': 'operations-assistant-staffing',
};
