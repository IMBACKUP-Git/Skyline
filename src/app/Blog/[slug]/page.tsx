import { notFound } from "next/navigation";
import { blogs } from "@/data/blog";
import BlogInternal from "@/app/BlogInternal/BlogInternal";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  return <BlogInternal blog={blog} />;
}
