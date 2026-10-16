export type AcrLeadPayload = Record<string, unknown>;

type TrackerWindow = Window & {
  acrTracker?: { trackLead?: (payload: AcrLeadPayload) => void };
};

type StoredQueue = {
  available: boolean;
  items: AcrLeadPayload[];
};

export const ACR_PENDING_LEAD_KEY = 'acr.pendingLead.v1';

function readQueue(): StoredQueue {
  let serialized: string | null;
  try {
    serialized = window.sessionStorage.getItem(ACR_PENDING_LEAD_KEY);
  } catch {
    return { available: false, items: [] };
  }
  if (!serialized) return { available: true, items: [] };

  try {
    const parsed: unknown = JSON.parse(serialized);
    const candidates = Array.isArray(parsed) ? parsed : [parsed];
    const items = candidates.filter(
      (item): item is AcrLeadPayload => Boolean(item) && typeof item === 'object' && !Array.isArray(item),
    );
    if (items.length !== candidates.length) writeQueue(items);
    return { available: true, items };
  } catch {
    return { available: writeQueue([]), items: [] };
  }
}

function writeQueue(items: AcrLeadPayload[]): boolean {
  try {
    if (items.length) {
      window.sessionStorage.setItem(ACR_PENDING_LEAD_KEY, JSON.stringify(items));
    } else {
      window.sessionStorage.removeItem(ACR_PENDING_LEAD_KEY);
    }
    return true;
  } catch {
    return false;
  }
}

export function queueAcrLead(payload: AcrLeadPayload): boolean {
  const queue = readQueue();
  if (!queue.available) return false;
  return writeQueue([...queue.items, payload]);
}

export function trackOrQueueAcrLead(payload: AcrLeadPayload): 'queued' | 'attempted' | 'dropped' {
  const tracker = (window as TrackerWindow).acrTracker;
  const queued = queueAcrLead(payload);

  if (queued) {
    return flushPendingAcrLead() === 'sent' ? 'attempted' : 'queued';
  }

  if (typeof tracker?.trackLead !== 'function') return 'dropped';
  try {
    tracker.trackLead(payload);
  } catch {
    // Treat invocation as at-most-once: the tracker may have sent before throwing.
  }
  return 'attempted';
}

export function flushPendingAcrLead(): 'empty' | 'waiting' | 'sent' {
  const queue = readQueue();
  if (!queue.available) return 'waiting';
  if (queue.items.length === 0) return 'empty';

  const tracker = (window as TrackerWindow).acrTracker;
  if (typeof tracker?.trackLead !== 'function') return 'waiting';

  for (let index = 0; index < queue.items.length; index += 1) {
    const remaining = queue.items.slice(index + 1);
    if (!writeQueue(remaining)) return 'waiting';

    try {
      tracker.trackLead(queue.items[index]);
    } catch {
      // Do not restore and retry: a tracker can throw after transmitting.
    }
  }
  return 'sent';
}
