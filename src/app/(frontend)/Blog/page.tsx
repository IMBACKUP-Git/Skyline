import type { Metadata } from "next";
import { getPayload } from "payload";

import config from "@/payload.config";
import BlogCards from "./BlogCards/BlogCards";
import BlogHero from "./BlogHero/BlogHero";
import Reveal from "../components/Reveal/Reveal";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Straight-talking market updates, buying guides, and neighborhood breakdowns — insights on Dubai real estate from Skyline Keys Real Estate.",
  keywords: [
    "Dubai real estate blog",
    "Dubai property market trends",
    "Dubai buying guide",
    "Dubai neighborhood guide",
    "Dubai real estate insights",
  ],
};

export default async function Blog() {
  const payload = await getPayload({ config });

  const [{ docs: blogs }, { docs: categories }] = await Promise.all([
    payload.find({
      collection: "blogs",
      sort: "_order",
      depth: 2,
      limit: 100,
    }),
    payload.find({
      collection: "categories",
      limit: 100,
    }),
  ]);

  return (
    <div>
      <BlogHero blogs={blogs} />
      <Reveal>
        <BlogCards blogs={blogs} categories={categories} />
      </Reveal>
    </div>
  );
}
