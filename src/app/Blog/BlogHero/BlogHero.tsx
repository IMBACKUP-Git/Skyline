"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import styles from "./BlogHero.module.css";
import Link from "next/link";
import featuredImage from "./image.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function BlogHero() {
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
            <h2 className={montserrat.className}>
              A first-time buyer&apos;s guide to Dubai real estate
            </h2>

            <p>
              Every buyer who walks into a conversation about Dubai real estate
              eventually asks the same question: off-plan or ready?
            </p>
          </div>

          <Link href="/BlogInternal">Read more</Link>
        </div>

        <div className={styles.image}>
          <Image
            src={featuredImage}
            alt="Modern Dubai property"
            fill
            sizes="(max-width: 640px) 100vw, 70vw"
          />
        </div>
      </div>
    </section>
  );
}
