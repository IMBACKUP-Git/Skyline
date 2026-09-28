"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./RelatedBlog.module.css";
import type { Blog, Category, Media } from "@/payload-types";

export default function RelatedBlogs({
  relatedBlogs,
}: {
  relatedBlogs: Blog[];
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const updateSelectedIndex = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    updateSelectedIndex();

    emblaApi.on("select", updateSelectedIndex);
    emblaApi.on("reInit", updateSelectedIndex);

    return () => {
      emblaApi.off("select", updateSelectedIndex);
      emblaApi.off("reInit", updateSelectedIndex);
    };
  }, [emblaApi, updateSelectedIndex]);

  if (relatedBlogs.length === 0) return null;

  return (
    <section className={styles.relatedBlogs}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.cards}>
          {relatedBlogs.map((blog) => {
            const image = blog.featuredImage as Media;
            const category = blog.category as Category;

            return (
              <article className={styles.card} key={blog.id}>
                <div className={styles.image}>
                  {image?.url && (
                    <Image src={image.url} alt={image.alt || blog.title} fill />
                  )}

                  <span className={styles.category}>{category?.name}</span>
                </div>

                <div className={styles.content}>
                  <div className={styles.titleRow}>
                    <h3>{blog.title}</h3>
                    <span>{blog.readTime || "4 min read"}</span>
                  </div>

                  <p>{blog.shortDescription}</p>

                  <Link
                    href={`/Blog/${blog.slug}`}
                    className={styles.arrow}
                    aria-label={`Read ${blog.title}`}
                  >
                    <svg
                      width="8"
                      height="13"
                      viewBox="0 0 8 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 12L6.5 6.5L1 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className={styles.dots}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === selectedIndex ? styles.activeDot : ""
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to blog ${index + 1}`}
          />
        ))}
      </div>

      <button className={styles.viewMore}>View more</button>
    </section>
  );
}
