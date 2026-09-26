"use client";

import Image from "next/image";
import styles from "./AboutHero.module.css";
import heroImage from "./AboutHero.png";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import ConsultationForm from "@/app/components/ConsultationForm/ConsultationForm";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AboutHero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <section className={styles.hero}>
        <Image
          src={heroImage}
          alt="Modern Dubai property"
          fill
          priority
          className={styles.heroImage}
        />

        <div className={styles.heroContent}>
          <h1 className={montserrat.className}>
            Built on Relationships
            <br />
            That Outlast the Deal.
          </h1>

          <p className={styles.description}>
            Skyline Keys Real Estate (SKRE) exists because too many people close
            on a property and never hear from their broker again. We built the
            opposite: an advisory team that stays engaged long after the
            handover.
          </p>

          <button
            type="button"
            className={styles.button}
            onClick={() => setIsPopupOpen(true)}
          >
            Book a consultation
          </button>
        </div>

        <div className={styles.fade} />
      </section>
      <ConsultationForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
