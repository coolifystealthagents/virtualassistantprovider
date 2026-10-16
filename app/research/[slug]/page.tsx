import { permanentRedirect } from 'next/navigation';
import { EditorialArticle } from '../../editorial/EditorialArticle';
import { editorialMetadata } from '../../editorial/metadata';
import { getPublishedPost, publishedResearchPosts } from '../../publication-manifest';

export const dynamicParams = true;
export function generateStaticParams() { return publishedResearchPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPublishedPost('research', slug);
  return post ? editorialMetadata(post) : { title: { absolute: 'Research | Virtual Assistant Provider' }, robots: { index: false, follow: true } };
}

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPublishedPost('research', slug);
  if (!post) permanentRedirect('/research');
  return <EditorialArticle post={post} />;
}
