import { permanentRedirect } from 'next/navigation';
import { EditorialArticle } from '../../editorial/EditorialArticle';
import { editorialMetadata } from '../../editorial/metadata';
import { getPublishedPost, publishedBlogPosts } from '../../publication-manifest';

export const dynamicParams = true;
export function generateStaticParams() { return publishedBlogPosts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPublishedPost('blog', slug);
  return post ? editorialMetadata(post) : { title: { absolute: 'Guides | Virtual Assistant Provider' }, robots: { index: false, follow: true } };
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPublishedPost('blog', slug);
  if (!post) permanentRedirect('/blog');
  return <EditorialArticle post={post} />;
}
