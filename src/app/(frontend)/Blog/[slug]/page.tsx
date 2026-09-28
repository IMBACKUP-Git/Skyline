import { notFound } from "next/navigation";
import { getPayload } from "payload";

import config from "@/payload.config";
import BlogInternal from "@/app/(frontend)/BlogInternal/BlogInternal";
import type { Category } from "@/payload-types";

export const dynamic = "force-dynamic";

async function getBlog(slug: string) {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "blogs",
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  });

  return docs[0] ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) return {};

  const category = blog.category as Category;

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.shortDescription,
    keywords: [category?.name, "Dubai real estate", "Dubai property", blog.title].filter(
      Boolean,
    ) as string[],
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  return <BlogInternal blog={blog} />;
}
