import Image from "next/image";
import styles from "./Insights.module.css";
import houseImage from "./houseImage.png";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import type { Blog, Category, Media } from "@/payload-types";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Insights({ blogs }: { blogs: Blog[] }) {
  return (
    <section className={styles.insights}>
      <div className={styles.content}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.headingContent}>
            <h2 className={montserrat.className}>Insights & trends</h2>

            <p>
              Straight-talking market updates, buying guides, and neighborhood
              breakdowns – so you always know what's actually happening in Dubai
              real estate, not just what's trending.
            </p>

            <Link href="/Blog" className={styles.viewAll}>
              View All
            </Link>
          </div>

          <div className={styles.houseImage}>
            <Image src={houseImage} alt="Modern Dubai property" fill priority />
            <div className={styles.imageFade} />
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.cards}>
          {blogs.map((blog) => {
            const image = blog.featuredImage as Media;
            const category = blog.category as Category;

            return (
              <article className={styles.card} key={blog.id}>
                <div className={styles.cardImage}>
                  {image?.url && (
                    <Image src={image.url} alt={image.alt || blog.title} fill />
                  )}

                  <span className={styles.category}>{category?.name}</span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.top}>
                    <h3>{blog.title}</h3>

                    <p>
                      {blog.shortDescription ||
                        "Explore insights, market trends, and useful information about Dubai real estate."}
                    </p>
                  </div>

                  <div className={styles.bottom}>
                    <small>{blog.readTime || "4 min read"}</small>

                    <Link
                      href={`/Blog/${blog.slug}`}
                      className={styles.cardArrow}
                      aria-label={`Read ${blog.title}`}
                    >
                      <svg
                        width="10"
                        height="17"
                        viewBox="0 0 10 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.39844 15.3999L8.39844 8.3999L1.39844 1.3999"
                          stroke="white"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
