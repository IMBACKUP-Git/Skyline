"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import styles from "./ServicesHero.module.css";
import left from "./left.png";
import middle from "./middle.png";
import right from "./right.png";
import { Montserrat } from "next/font/google";
import ConsultationForm from "@/app/components/ConsultationForm/ConsultationForm";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function ServicesHero() {
  const imagesRef = useRef<HTMLDivElement>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useGSAP(
    () => {
      const images = gsap.utils.toArray<HTMLElement>(
        `.${styles.left}, .${styles.middle}, .${styles.right}`,
      );

      gsap.from(images, {
        yPercent: 100,
        duration: 1,
        ease: "power3.out",
        stagger: 0,
      });
    },
    { scope: imagesRef },
  );

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={montserrat.className}>
              Every stage of the property journey, handled by one team.
            </h1>

            <p>
              From first search to well after handover — SKRE covers sales,
              leasing, off-plan, management, and the legal detail in between. No
              handoffs, no disappearing after the deal closes.
            </p>
          </div>

          <button
            type="button"
            className={styles.button}
            onClick={() => setIsPopupOpen(true)}
          >
            Book a consultation
          </button>
        </div>

        <div className={styles.images} ref={imagesRef}>
          <div className={styles.left}>
            {" "}
            <Image src={left} alt="" />
          </div>
          <div className={styles.middle}>
            <Image src={middle} alt="" />
          </div>
          <div className={styles.right}>
            <Image src={right} alt="" />
          </div>
        </div>
      </section>
      <ConsultationForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
