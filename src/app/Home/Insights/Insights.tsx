import Image from "next/image";
import styles from "./Insights.module.css";
import houseImage from "./houseImage.png";
import image1 from "./image1.png";
import image2 from "./image2.png";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { blogs } from "@/data/blog";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Insights() {
  const insights = [
    {
      category: "Market",
      title: "Off-Plan vs. Ready Properties: What Dubai Buyers Should Know",
      description:
        "Compare investment potential, payment plans, rental yields, and ownership timelines to choose the right property.",
      readTime: "4 min read",
      image: image1,
    },
    {
      category: "Market",
      title: "Off-Plan vs. Ready Properties: What Dubai Buyers Should Know",
      description:
        "Compare investment potential, payment plans, rental yields, and ownership timelines to choose the right property.",
      readTime: "4 min read",
      image: image2,
    },
    {
      category: "Market",
      title: "Off-Plan vs. Ready Properties",
      description:
        "Compare investment potential, payment plans, rental yields, and ownership timelines to choose the property.",
      readTime: "4 min read",
      image: image1,
    },
  ];

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
          {blogs.slice(0, 3).map((blog) => (
            <article className={styles.card} key={blog.slug}>
              <div className={styles.cardImage}>
                <Image src={blog.image} alt={blog.title} fill />

                <span className={styles.category}>{blog.category}</span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.top}>
                  <h3>{blog.title}</h3>

                  <p>
                    {blog.intro ||
                      "Explore insights, market trends, and useful information about Dubai real estate."}
                  </p>
                </div>

                <div className={styles.bottom}>
                  <small>{blog.readTime}</small>

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
          ))}
        </div>
      </div>
    </section>
  );
}
