// Canonical October 2 Blog relationships. Every value is a current service slug
// from app/data.ts; keeping this cycle-specific avoids changing earlier releases.
export const october2ServiceRelationships: Record<string, string> = {
  'executive-assistant-board-action-register': 'executive-assistant',
  'customer-support-assistant-backlog-aging-triage': 'customer-support-assistant',
  'sales-assistant-demo-no-show-recovery-workflow': 'crm-lead-follow-up',
  'bookkeeping-assistant-expense-receipt-exception-queue': 'executive-assistant',
  'ecommerce-assistant-return-reason-quality-audit': 'customer-support-assistant',
  'real-estate-assistant-listing-document-completeness-check': 'crm-lead-follow-up',
  'healthcare-virtual-assistant-referral-status-workflow': 'customer-support-assistant',
  'marketing-assistant-webinar-follow-up-operations': 'crm-lead-follow-up',
  'recruiting-assistant-candidate-withdrawal-workflow': 'executive-assistant',
  'operations-assistant-sop-change-request-log': 'executive-assistant',
  'virtual-assistant-supervisor-review-calibration': 'executive-assistant',
  'virtual-assistant-access-offboarding-drill': 'executive-assistant',
};
