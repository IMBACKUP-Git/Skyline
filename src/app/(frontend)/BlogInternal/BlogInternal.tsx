import Image from "next/image";
import Link from "next/link";
import styles from "./BlogInternal.module.css";
import RelatedBlogs from "./RelatedBlog";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { Blog, Category, Media } from "@/payload-types";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["500"],
  subsets: ["latin"],
});

export default function BlogInternal({ blog }: { blog: Blog }) {
  const image = blog.featuredImage as Media;
  const category = blog.category as Category;
  const relatedBlogs = (blog.relatedBlogs as Blog[] | undefined) ?? [];

  return (
    <section className={styles.blog}>
      <div className={styles.header}>
        <span className={styles.category}>{category?.name}</span>

        <h1 className={montserrat.className}>{blog.title}</h1>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.left}>
          <div className={styles.mainImage}>
            {image?.url && (
              <Image src={image.url} alt={image.alt || blog.title} fill />
            )}
          </div>

          <article className={styles.article}>
            {blog.shortDescription && <p>{blog.shortDescription}</p>}

            <RichText data={blog.longDescription} />
          </article>
        </div>

        <div className={styles.related}>
          <div className={styles.cards}>
            {relatedBlogs.map((relate) => {
              const relateImage = relate.featuredImage as Media;
              const relateCategory = relate.category as Category;

              return (
                <article className={styles.card} key={relate.id}>
                  <div className={styles.cardImage}>
                    {relateImage?.url && (
                      <Image
                        src={relateImage.url}
                        alt={relateImage.alt || relate.title}
                        fill
                      />
                    )}

                    <span className={styles.cardCategory}>
                      {relateCategory?.name}
                    </span>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.top}>
                      <h3>{relate.title}</h3>

                      <p>{relate.shortDescription}</p>
                    </div>

                    <div className={styles.bottom}>
                      <small>{relate.readTime || "4 min read"}</small>

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
              );
            })}
          </div>
        </div>

        <RelatedBlogs relatedBlogs={relatedBlogs} />
      </div>
    </section>
  );
}
