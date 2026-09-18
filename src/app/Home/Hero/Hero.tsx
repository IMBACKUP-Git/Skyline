"use client";

import { Montserrat } from "next/font/google";
import styles from "./Hero.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  useGSAP(() => {
    gsap.to(`.${styles.hero}`, {
      "--hero-shift": "-120px",
      ease: "none",
      scrollTrigger: {
        trigger: `.${styles.hero}`,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={`${styles.heroTitle} ${montserrat.className}`}>
          <span>Redefining Real Estate,</span> <br />
          <span>creating lasting value.</span>
        </h1>

        <p className={styles.heroDescription}>
          SKRE is a Dubai-based real estate brokerage connecting buyers,
          sellers, and tenants with the city's best properties - backed by
          expert guidance from your first search to well after you've moved in.
        </p>

        <Link href="/Contact" className={styles.heroButton}>
          Book a consultation
        </Link>
      </div>
    </section>
  );
}
