#!/usr/bin/env node

import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const OUTCOMES = {
  incomplete: 'SKIPPED_INCOMPLETE',
  noChanges: 'NO_NEW_CHANGES',
  deployed: 'ALREADY_DEPLOYED',
  pending: 'DEPLOYMENT_ALREADY_PENDING',
  queue: 'SKIPPED_COOLIFY_QUEUE',
  submitted: 'DEPLOYMENT_SUBMITTED',
  active: 'DEPLOYMENT_IN_PROGRESS',
  failed: 'DEPLOYMENT_FAILED',
  verified: 'LIVE_VERIFIED',
};

const required = ['COOLIFY_API_URL', 'COOLIFY_API_TOKEN', 'COOLIFY_APPLICATION_UUID'];
const missing = required.filter((key) => !process.env[key]);
if (missing.length) fail(`Missing required environment variables: ${missing.join(', ')}`);

const root = resolve(process.env.GITHUB_WORKSPACE || process.cwd());
const manifestPath = resolve(root, process.env.DAILY_BLOG_MANIFEST || '.daily-blog-batch.json');
const now = new Date().toISOString();

function emit(outcome, message, extra = {}) {
  console.log(JSON.stringify({ outcome, message, timestampUtc: now, ...extra }));
  process.exit(outcome === OUTCOMES.failed ? 1 : 0);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function git(...args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
}

function readManifest() {
  if (!existsSync(manifestPath)) return null;
  try { return JSON.parse(readFileSync(manifestPath, 'utf8')); }
  catch (error) { fail(`Invalid daily blog manifest: ${error.message}`); }
}

function apiUrl(path) {
  return `${process.env.COOLIFY_API_URL.replace(/\/$/, '')}/api/v1${path}`;
}

async function coolify(path, options = {}) {
  const response = await fetch(apiUrl(path), {
    ...options,
    headers: { Authorization: `Bearer ${process.env.COOLIFY_API_TOKEN}`, ...(options.headers || {}) },
  });
  const text = await response.text();
  let body;
  try { body = text ? JSON.parse(text) : {}; } catch { body = { message: text }; }
  if (!response.ok) throw new Error(`Coolify ${response.status}: ${body.message || 'request failed'}`);
  return body;
}

function deploymentsFrom(body) {
  return Array.isArray(body) ? body : (body.deployments || body.data || []);
}

function deploymentCommit(deployment) {
  return deployment.commit || deployment.commit_sha || deployment.git_commit_sha || deployment.gitCommitSha || null;
}

function deploymentUuid(deployment) {
  return deployment.deployment_uuid || deployment.uuid || deployment.id || null;
}

function manifestSlugs(manifest) {
  return Array.isArray(manifest.slugs) ? manifest.slugs : (manifest.blogs || []).map((blog) => blog.slug);
}

function manifestRoutes(manifest) {
  if (manifest.routes && typeof manifest.routes === 'object') return Object.entries(manifest.routes).flatMap(([prefix, slugs]) => (Array.isArray(slugs) ? slugs.map((slug) => `${prefix}/${slug}`) : []));
  const articlePrefix = manifest.scope && /^research\b/i.test(manifest.scope) ? '/research' : '/blog';
  return manifestSlugs(manifest).map((slug) => `${articlePrefix}/${slug}`);
}

function normalizedStatus(deployment) {
  return String(deployment.status || '').toLowerCase().replaceAll('-', '_').replaceAll(' ', '_');
}

async function allDeployments() {
  const result = [];
  const take = 100;
  for (let page = 1; page <= 100; page += 1) {
    const pageItems = deploymentsFrom(await coolify(`/deployments?take=${take}&page=${page}`));
    result.push(...pageItems);
    if (pageItems.length < take) break;
  }
  return result;
}

async function verifyLive(manifest) {
  const base = process.env.WEBSITE_URL || process.env.WEBSITE_DOMAIN;
  if (!base) return { verified: false, reason: 'WEBSITE_URL or WEBSITE_DOMAIN is not configured.' };
  const origin = /^https?:\/\//i.test(base) ? base.replace(/\/$/, '') : `https://${base.replace(/\/$/, '')}`;
  const paths = ['/', '/blog', '/research', ...manifestRoutes(manifest)];
  for (const path of [...new Set(paths)]) {
    const response = await fetch(`${origin}${path}`, { redirect: 'follow' });
    if (!response.ok) return { verified: false, reason: `${path} returned HTTP ${response.status}.` };
  }
  return { verified: true, origin, checkedPaths: [...new Set(paths)] };
}

const manifest = readManifest();
const aggregateValidation = manifest && Array.isArray(manifest.slugs) &&
  manifest.slugs.length > 0 && manifest.quantity === manifest.slugs.length &&
  typeof manifest.selectionSeed === 'string' && manifest.selectionSeed.length > 0 &&
  manifest.validation && manifest.validation.topicOverlapChecked === true &&
  manifest.validation.existingBlogAndResearchCompared === true &&
  manifest.validation.authoritativeSourcesVerified === true &&
  manifest.validation.statisticsVerified === true &&
  manifest.validation.metadataAndSchemaPresent === true &&
  typeof manifest.validation.humanizerPass === 'string' && manifest.validation.humanizerPass.toLowerCase().includes('complete') &&
  typeof manifest.validation.thumbnailAssets === 'string' && manifest.validation.thumbnailAssets.toLowerCase().includes('generated') &&
  typeof manifest.validation.build === 'string' && manifest.validation.build.startsWith('passed');
const perBlogValidation = manifest && Array.isArray(manifest.blogs) && manifest.blogs.length > 0 &&
  manifest.complete === true && manifest.validated === true && manifest.buildPassed === true &&
  manifest.excludedContentChecked === true &&
  manifest.blogs.every((blog) => blog.complete === true && blog.humanized === true && blog.structureValid === true &&
    blog.thumbnailReady === true && blog.internalArticleBodyLinks === 2 && blog.externalArticleBodyLinks === 1 &&
    Number.isInteger(blog.sourceCount) && blog.sourceCount >= 1);
if (!aggregateValidation && !perBlogValidation) {
  emit(OUTCOMES.incomplete, 'Daily blog production is not complete.');
}
const batchSize = aggregateValidation ? manifest.slugs.length : manifest.blogs.length;
if (aggregateValidation && manifest.scope === 'combined' && (manifest.blogQuantity < 20 || manifest.researchQuantity < 10)) {
  emit(OUTCOMES.incomplete, 'Combined batch must contain at least 20 Blog and 10 Research articles.');
}
const fewerReason = typeof manifest.publishFewerReason === 'string' ? manifest.publishFewerReason.trim() : '';
const validFewerReason = /validated non[- ]overlap|reliable source/i.test(fewerReason);
if (perBlogValidation && (batchSize < 20 || batchSize > 25) && !(batchSize < 20 && validFewerReason)) {
  emit(OUTCOMES.incomplete, 'Batch must contain 20-25 validated articles, or fewer only with a reason citing validated non-overlap or reliable sources.');
}
if (perBlogValidation && (manifest.quantity !== batchSize || !manifest.randomSelection || typeof manifest.randomSeed !== 'string')) {
  emit(OUTCOMES.incomplete, 'Manifest must record quantity, randomSelection, and randomSeed for the selected batch.');
}

const active = new Set(['queued', 'in_progress', 'building', 'deploying', 'running', 'pending', 'starting']);
function activeOutcome(deployment) {
  return normalizedStatus(deployment) === 'queued' ? OUTCOMES.pending : OUTCOMES.active;
}

try {
  const status = git('status', '--porcelain');
  const branch = process.env.PRODUCTION_BRANCH || 'main';
  const currentShaBeforeCommit = git('rev-parse', 'HEAD');
  let commitSha = currentShaBeforeCommit;
  let deployments = await allDeployments();

  // A queue-skipped batch is intentionally left committed and clean. Reconcile
  // that existing HEAD before deciding there are no new changes, so the next
  // scheduled run can submit it.
  const currentDeployments = deployments.filter((item) => deploymentCommit(item) === commitSha);
  const successful = new Set(['finished', 'success', 'succeeded', 'completed']);
  const failed = new Set(['failed', 'error', 'errored', 'cancelled', 'canceled', 'crashed']);
  const existingActiveBeforeCommit = currentDeployments.find((item) => active.has(normalizedStatus(item)));
  if (!status && existingActiveBeforeCommit) emit(activeOutcome(existingActiveBeforeCommit), 'The current commit already has a queued or active deployment.', { commitSha, deploymentUuid: deploymentUuid(existingActiveBeforeCommit), deploymentStatus: existingActiveBeforeCommit.status });
  const existingSuccessBeforeCommit = currentDeployments.find((item) => successful.has(normalizedStatus(item)));
  if (!status && existingSuccessBeforeCommit) {
    const live = await verifyLive(manifest);
    if (!live.verified) emit(OUTCOMES.deployed, `The current commit is deployed, but live verification is pending: ${live.reason}`, { commitSha, deploymentUuid: deploymentUuid(existingSuccessBeforeCommit) });
    emit(OUTCOMES.verified, 'The completed blog batch was successfully deployed and verified on the live site.', { commitSha, deploymentUuid: deploymentUuid(existingSuccessBeforeCommit), websiteDomain: live.origin, checkedPaths: live.checkedPaths });
  }
  const existingFailedBeforeCommit = currentDeployments.find((item) => failed.has(normalizedStatus(item)));
  if (!status && existingFailedBeforeCommit) emit(OUTCOMES.failed, 'The current commit has a failed Coolify deployment and requires recovery.', { commitSha, deploymentUuid: deploymentUuid(existingFailedBeforeCommit), deploymentStatus: existingFailedBeforeCommit.status });
  if (!status && !currentDeployments.length) {
    // HEAD may be a previously pushed but not yet deployed batch.
  } else if (!status) {
    emit(OUTCOMES.noChanges, 'There is no new completed batch requiring deployment.');
  }

  if (status) {
    git('fetch', 'origin', branch);
    git('rebase', `origin/${branch}`);
    execFileSync('npm', ['run', 'build'], { cwd: root, stdio: 'inherit' });
    const allowedFiles = Array.isArray(manifest.files) ? new Set(manifest.files) : null;
    if (!allowedFiles) fail('Manifest must declare the completed batch files in "files".');
    const changedFiles = git('status', '--porcelain').split('\n').filter(Boolean).map((line) => line.slice(3));
    const unexpected = changedFiles.filter((file) => !allowedFiles.has(file));
    if (unexpected.length) fail(`Refusing to commit files outside the declared batch: ${unexpected.join(', ')}`);
    git('add', '--', ...[...allowedFiles]);
    const staged = git('diff', '--cached', '--name-only');
    if (!staged) emit(OUTCOMES.noChanges, 'There is no new completed batch requiring deployment.');
    git('commit', '-m', `content: publish daily blog batch ${manifest.batchId || now.slice(0, 10)}`);
    commitSha = git('rev-parse', 'HEAD');
    git('push', 'origin', `${branch}:${branch}`);
    deployments = await allDeployments();
  }

  const sameCommit = deployments.filter((item) => deploymentCommit(item) === commitSha);
  const existingActive = sameCommit.find((item) => active.has(normalizedStatus(item)));
  if (existingActive) emit(activeOutcome(existingActive), 'The current commit already has a queued or active deployment.', { commitSha, deploymentUuid: deploymentUuid(existingActive), deploymentStatus: existingActive.status });
  const existingSuccess = sameCommit.find((item) => successful.has(normalizedStatus(item)));
  if (existingSuccess) {
    const live = await verifyLive(manifest);
    if (!live.verified) emit(OUTCOMES.deployed, `The current commit is deployed, but live verification is pending: ${live.reason}`, { commitSha, deploymentUuid: deploymentUuid(existingSuccess) });
    emit(OUTCOMES.verified, 'The completed blog batch was successfully deployed and verified on the live site.', { commitSha, deploymentUuid: deploymentUuid(existingSuccess), websiteDomain: live.origin, checkedPaths: live.checkedPaths });
  }
  const existingFailed = sameCommit.find((item) => failed.has(normalizedStatus(item)));
  if (existingFailed) emit(OUTCOMES.failed, 'The current commit has a failed Coolify deployment and requires recovery.', { commitSha, deploymentUuid: deploymentUuid(existingFailed), deploymentStatus: existingFailed.status });

  const queuedCount = deployments.filter((item) => normalizedStatus(item) === 'queued').length;
  const activeCount = deployments.filter((item) => active.has(normalizedStatus(item))).length;
  const queuedOrActiveCount = deployments.filter((item) => active.has(normalizedStatus(item))).length;
  if (queuedOrActiveCount >= 3) emit(OUTCOMES.queue, 'Coolify has three or more queued or active deployments globally. Retry at the next scheduled run.', { commitSha, queuedDeployments: queuedCount, activeDeployments: activeCount, queuedOrActiveDeployments: queuedOrActiveCount });

  let request;
  try {
    request = await coolify(`/deploy?uuid=${encodeURIComponent(process.env.COOLIFY_APPLICATION_UUID)}&force=false`);
  } catch (error) {
    // An interrupted/uncertain request must be reconciled, never blindly retried.
    const reconciled = (await allDeployments()).find((item) => deploymentCommit(item) === commitSha);
    if (reconciled) emit(active.has(normalizedStatus(reconciled)) ? OUTCOMES.active : OUTCOMES.failed,
      'Deployment request was uncertain and was reconciled against Coolify.', { commitSha, deploymentUuid: deploymentUuid(reconciled), status: reconciled.status });
    emit(OUTCOMES.failed, `Deployment request failed without a matching Coolify deployment: ${error.message}`, { commitSha });
  }
  const deployment = (request.deployments || [request])[0];
  emit(OUTCOMES.submitted, 'One Coolify deployment was accepted.', {
    websiteDomain: process.env.WEBSITE_DOMAIN || process.env.COOLIFY_FQDN || null,
    paperclipProject: process.env.PAPERCLIP_PROJECT || 'VirtualAssistantProvider',
    applicationUuid: process.env.COOLIFY_APPLICATION_UUID,
    commitSha,
    deploymentUuid: deploymentUuid(deployment),
    deploymentStatus: deployment?.status || 'queued',
    queuedDeployments: queuedCount,
    activeDeployments: activeCount,
    queuedOrActiveDeployments: queuedOrActiveCount,
    previousCommitSha: currentShaBeforeCommit,
  });
} catch (error) {
  emit(OUTCOMES.failed, error.message);
}
