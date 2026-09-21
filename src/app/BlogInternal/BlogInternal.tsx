import Image from "next/image";
import Link from "next/link";
import styles from "./BlogInternal.module.css";
import RelatedBlogs from "./RelatedBlog";
import type { Blog } from "@/data/blog";

export default function BlogInternal({ blog }: { blog: Blog }) {
  return (
    <section className={styles.blog}>
      <div className={styles.header}>
        <span className={styles.category}>{blog.category}</span>

        <h1>{blog.title}</h1>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.left}>
          <div className={styles.mainImage}>
            <Image src={blog.image} alt={blog.title} fill />
          </div>

          <article className={styles.article}>
            {blog.intro && <p>{blog.intro}</p>}

            {blog.content.map((section, index) => (
              <section key={index}>
                <h2>{section.heading}</h2>

                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}

                {section.list && (
                  <ul>
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>

        <div className={styles.related}>
          <div className={styles.cards}>
            {blog.related.map((relate, index) => (
              <article className={styles.card} key={`${relate.slug}-${index}`}>
                <div className={styles.cardImage}>
                  <Image src={relate.image} alt={relate.title} fill />

                  <span className={styles.cardCategory}>{relate.category}</span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.top}>
                    <h3>{relate.title}</h3>

                    <p>{relate.description}</p>
                  </div>

                  <div className={styles.bottom}>
                    <small>{relate.readTime}</small>

                    <Link
                      href={`/Blog/${relate.slug}`}
                      className={styles.cardArrow}
                      aria-label={`Read ${relate.title}`}
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

        <RelatedBlogs relatedBlogs={blog.related} />
      </div>
    </section>
  );
}
