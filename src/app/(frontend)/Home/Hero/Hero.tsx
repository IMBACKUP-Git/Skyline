"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import styles from "./Hero.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConsultationForm from "@/app/(frontend)/components/ConsultationForm/ConsultationForm";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useGSAP(() => {
    gsap.to(`.${styles.hero}`, {
      "--hero-shift": "-100px",
      ease: "none",
      scrollTrigger: {
        trigger: `.${styles.hero}`,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const entranceTargets = [
      `.${styles.heroTitle}`,
      `.${styles.heroDescription}`,
      `.${styles.heroButton}`,
    ];

    gsap
      .timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => gsap.set(entranceTargets, { clearProps: "all" }),
      })
      .fromTo(
        `.${styles.heroTitle}`,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
      )
      .fromTo(
        `.${styles.heroDescription}`,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        "-=0.6",
      )
      .fromTo(
        `.${styles.heroButton}`,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5",
      );
  });

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.text}>
            <h1 className={`${styles.heroTitle} ${montserrat.className}`}>
              <span>Redefining Real Estate,</span> <br />
              <span>creating lasting value.</span>
            </h1>

            <p className={styles.heroDescription}>
              SKRE is a Dubai-based real estate brokerage connecting buyers,
              sellers, and tenants with the city's best properties - backed by
              expert guidance from your first search to well after you've moved
              in.
            </p>
          </div>

          <button
            type="button"
            className={styles.heroButton}
            onClick={() => setIsPopupOpen(true)}
          >
            Book a consultation
          </button>
        </div>
      </section>

      <ConsultationForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
