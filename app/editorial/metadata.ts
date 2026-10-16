import type { Metadata } from 'next';
import type { Publication } from '../publication-manifest';

const baseUrl = 'https://virtualassistantprovider.com';

export function editorialMetadata(post: Publication): Metadata {
  const canonical = `${baseUrl}/${post.kind}/${post.slug}`;
  return {
    title: { absolute: `${post.title} | Virtual Assistant Provider` },
    description: post.description,
    alternates: { canonical },
    openGraph: { title: post.title, description: post.description, url: canonical, type: 'article', publishedTime: post.published, modifiedTime: post.updated ?? post.published, siteName: 'Virtual Assistant Provider', images: [{ url: `${baseUrl}${post.heroImage}`, width: 1200, height: 675, alt: post.heroAlt }] },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [`${baseUrl}${post.heroImage}`] },
  };
}
