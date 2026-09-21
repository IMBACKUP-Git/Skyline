import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCards.module.css";
import { blogs } from "@/data/blog";

export default function BlogCards() {
  return (
    <section className={styles.blogs}>
      <div className={styles.filters}>
        <button className={styles.active}>ALL</button>
        <button>Market</button>
        <button>Buying guide</button>
        <button>Neighborhood</button>
        <button>Investments</button>
        <button>Legal & Process</button>
      </div>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <article className={styles.card} key={blog.slug}>
            <div className={styles.image}>
              <Image src={blog.image} alt={blog.title} fill />

              <div className={styles.fade} />

              <span>{blog.category}</span>
            </div>

            <div className={styles.content}>
              <div className={styles.titleRow}>
                <h2>{blog.title}</h2>
                <span>{blog.readTime}</span>
              </div>

              <div className={styles.bottomRow}>
                <p>
                  {blog.intro ||
                    "Explore insights, market trends, and useful information about Dubai real estate."}
                </p>

                <Link
                  href={`/Blog/${blog.slug}`}
                  className={styles.arrow}
                  aria-label={`Read ${blog.title}`}
                >
                  <svg
                    width="11"
                    height="17"
                    viewBox="0 0 11 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.39947 15.4004L8.67578 8.40039L1.39947 1.40039"
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
        ))}
      </div>

      <button className={styles.viewMore}>View more</button>
    </section>
  );
}
