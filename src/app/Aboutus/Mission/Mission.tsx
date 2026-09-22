"use client";

import Image from "next/image";
import styles from "./Mission.module.css";
import above from "./above.png";
import bottom from "./bottom.png";
import aboveVision from "./aboveVision.png";
import belowVision from "./belowVision.png";
import { Montserrat } from "next/font/google";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray<HTMLElement>(`.${styles.slide}`);

    if (slides.length < 2) return;

    const isMobile = window.innerWidth <= 640;

    if (isMobile) {
      gsap.set(slides[0], {
        opacity: 1,
      });

      gsap.set(slides[1], {
        opacity: 0,
      });
    } else {
      gsap.set(slides[0], {
        opacity: 1,
        yPercent: 0,
      });

      gsap.set(slides[1], {
        opacity: 1,
        yPercent: 100,
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: () => `+=${(containerRef.current?.offsetHeight ?? 0) * 0.1}`,
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    if (isMobile) {
      tl.to(
        slides[0],
        {
          opacity: 0,
          duration: 1,
          ease: "none",
          overwrite: "auto",
        },
        0,
      ).to(
        slides[1],
        {
          opacity: 1,
          duration: 1,
          ease: "none",
          overwrite: "auto",
        },
        0,
      );
    } else {
      tl.to(
        slides[1],
        {
          yPercent: 0,
          duration: 1,
          ease: "none",
          overwrite: "auto",
        },
        0,
      ).to(
        slides[0],
        {
          opacity: 0,
          duration: 1,
          ease: "none",
          overwrite: "auto",
        },
        0,
      );
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section className={styles.mission}>
      <div ref={containerRef} className={styles.stickyContainer}>
        <div className={styles.slide}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2 className={montserrat.className}>Our Mission</h2>

              <p>
                To make every property transaction in Dubai feel guided,
                transparent, and supported — from the first search to well after
                the deal is signed. We exist to take the uncertainty out of
                buying, selling, renting, and owning property.
              </p>
            </div>

            <div className={styles.images}>
              <div className={styles.aboveImage}>
                <Image src={bottom} alt="Modern property" fill />
              </div>

              <div className={styles.bottomImage}>
                <Image src={above} alt="Modern interior" fill />
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.slide} ${styles.vision}`}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2 className={montserrat.className}>Our Vision</h2>

              <p>
                To be Dubai's most trusted real estate brokerage — known not for
                the number of deals we close, but for the relationships we keep
                long after they do.
              </p>
            </div>

            <div className={styles.images}>
              <div className={styles.aboveImage}>
                <Image src={belowVision} alt="Modern property" fill />
              </div>

              <div className={styles.bottomImage}>
                <Image src={aboveVision} alt="Modern interior" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
