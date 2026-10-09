import { notFound } from "next/navigation";
import { blogPosts } from "../../../data";
import { BlogListing, PAGE_SIZE } from "../../blog-listing";
import { parseBlogPage } from "../../page-number";

const totalPages = Math.max(1, Math.ceil(blogPosts.length / PAGE_SIZE));

export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from({ length: totalPages }, (_, index) => ({
    page: String(index + 1),
  }));
}

function requireBlogPage(value: string) {
  const page = parseBlogPage(value, totalPages);
  if (page === null) notFound();
  return page;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const number = requireBlogPage(page);
  const canonical = number === 1 ? "/blog" : `/blog/page/${number}`;
  return {
    title: `Blog – Page ${number}`,
    description: "Guides for planning Philippines-based staffing.",
    alternates: { canonical },
  };
}

export default async function NumberedBlogPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  return <BlogListing page={requireBlogPage(page)} />;
}
