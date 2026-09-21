import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "./BlogHero.module.css";
import Link from "next/link";
import { blogs } from "@/data/blog";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function BlogHero() {
  const featuredBlog = blogs.find(
    (blog) => blog.slug === "first-time-buyer-guide-dubai-real-estate",
  );

  if (!featuredBlog) return null;

  return (
    <section className={styles.hero}>
      <div className={styles.header}>
        <h1 className={montserrat.className}>Latest insights & tips</h1>

        <p>
          Straight-talking market updates, buying guides, and neighborhood
          breakdowns — so you always know what&apos;s actually happening in
          Dubai real estate, not just what&apos;s trending.
        </p>
      </div>

      <div className={styles.featured}>
        <div className={styles.info}>
          <div className={styles.infoContent}>
            <h2 className={montserrat.className}>{featuredBlog.title}</h2>

            <p>{featuredBlog.intro}</p>
          </div>

          <Link href={`/Blog/${featuredBlog.slug}`}>Read more</Link>
        </div>

        <div className={styles.image}>
          <Image
            src={featuredBlog.featuredImage || featuredBlog.image}
            alt={featuredBlog.title}
            fill
            sizes="(max-width: 640px) 100vw, 70vw"
          />
        </div>
      </div>
    </section>
  );
}
