import { articleImageManifest } from './article-image-manifest.mjs';

type ArticleImageChoice = { src: string; alt: string };

type ArticleImageInput = {
  title: string;
  slug: string;
  featuredImage: string;
};

const genericFallbacks = new Set([
  '/featured/publishing-contingency-routine.png',
  '/featured/daily-research-brief-routine.png',
  '/featured/operations-assistant-daily-workflow.png',
  '/featured/virtual-assistant-appointment-setting-philippines.png',
]);

const curatedDescriptions = new Map<string, string>();
for (const choice of Object.values(articleImageManifest)) {
  const existing = curatedDescriptions.get(choice.src);
  if (existing && existing !== choice.alt) {
    throw new Error(`Conflicting descriptions for article image: ${choice.src}`);
  }
  curatedDescriptions.set(choice.src, choice.alt);
}

/**
 * Preserve every authored image. The four historic generic fallbacks may only be
 * replaced by an explicit, reviewed entry in the current-corpus manifest.
 */
export function resolveArticleImage(input: ArticleImageInput): string {
  if (!genericFallbacks.has(input.featuredImage)) return input.featuredImage;

  const choice = articleImageManifest[input.slug];
  if (!choice) {
    throw new Error(`Missing reviewed article image mapping for generic fallback: ${input.slug}`);
  }
  return choice.src;
}

/** Curated descriptions for remediated visuals; authored art gets article-specific purpose text. */
export function articleImageAlt(imagePath: string, articleTitle?: string): string {
  const curated = curatedDescriptions.get(imagePath);
  if (curated) return curated;
  if (!articleTitle?.trim()) throw new Error(`Missing article title for authored image alt text: ${imagePath}`);
  return `Featured illustration for “${articleTitle.trim()}”`;
}

export function articleImageChoice(input: ArticleImageInput): ArticleImageChoice {
  const src = resolveArticleImage(input);
  return { src, alt: articleImageAlt(src, input.title) };
}

export function isGenericArticleFallback(imagePath: string): boolean {
  return genericFallbacks.has(imagePath);
}
