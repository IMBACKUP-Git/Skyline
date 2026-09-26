"use client";

import ConsultationForm from "@/app/components/ConsultationForm/ConsultationForm";
import styles from "./ConversationCTA.module.css";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

export default function ConverstationCTA() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <section className={styles.content}>
        <div className={styles.text}>
          <h1 className={montserrat.className}>
            Ready to start the conversation?
          </h1>
          <p>
            Whether you're buying, selling, renting, or investing, <br /> our
            team is ready to help.
          </p>
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={() => setIsPopupOpen(true)}
        >
          Book a consultation
        </button>
      </section>
      <ConsultationForm
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
