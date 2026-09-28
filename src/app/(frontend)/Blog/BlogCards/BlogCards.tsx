"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCards.module.css";
import { useState } from "react";
import type { Blog, Category, Media } from "@/payload-types";

const PAGE_SIZE = 6;

export default function BlogCards({
  blogs,
  categories,
}: {
  blogs: Blog[];
  categories: Category[];
}) {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredBlogs =
    activeFilter === "ALL"
      ? blogs
      : blogs.filter((blog) => {
          const category = blog.category as Category;
          return category?.id === Number(activeFilter);
        });

  const visibleBlogs = filteredBlogs.slice(0, visibleCount);
  const hasMore = visibleCount < filteredBlogs.length;

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section className={styles.blogs}>
      <div className={styles.filters}>
        <button
          className={activeFilter === "ALL" ? styles.active : ""}
          onClick={() => handleFilterChange("ALL")}
        >
          ALL
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            className={activeFilter === String(category.id) ? styles.active : ""}
            onClick={() => handleFilterChange(String(category.id))}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visibleBlogs.map((blog) => {
          const image = blog.featuredImage as Media;
          const category = blog.category as Category;

          return (
            <article className={styles.card} key={blog.id}>
              <div className={styles.image}>
                {image?.url && (
                  <Image src={image.url} alt={image.alt || blog.title} fill />
                )}

                <div className={styles.fade} />

                <span>{category?.name}</span>
              </div>

              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <h2>{blog.title}</h2>
                  <span>{blog.readTime || "4 min read"}</span>
                </div>

                <div className={styles.bottomRow}>
                  <p>
                    {blog.shortDescription ||
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
          );
        })}
      </div>

      {hasMore && (
        <button
          className={styles.viewMore}
          onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
        >
          View more
        </button>
      )}
    </section>
  );
}
