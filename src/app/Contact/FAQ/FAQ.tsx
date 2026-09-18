"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "How do you select the best locations?",
    answer:
      "We start with your goals — lifestyle, yield, or long-term appreciation — then weigh developer track record, community maturity, and resale demand. Every recommendation is backed by research, not just what’s newly listed.",
  },
  {
    question: "Do you only work with buyers, or sellers and landlords too?",
    answer:
      "We start with your goals — lifestyle, yield, or long-term appreciation — then weigh developer track record, community maturity, and resale demand. Every recommendation is backed by research, not just what’s newly listed.",
  },
  {
    question: "Can you help with off-plan investments?",
    answer:
      "We start with your goals — lifestyle, yield, or long-term appreciation — then weigh developer track record, community maturity, and resale demand. Every recommendation is backed by research, not just what’s newly listed.",
  },
  {
    question: "Do I need to be in Dubai to work with you?",
    answer:
      "We start with your goals — lifestyle, yield, or long-term appreciation — then weigh developer track record, community maturity, and resale demand. Every recommendation is backed by research, not just what’s newly listed.",
  },
  {
    question: "What are your fees?",
    answer:
      "We start with your goals — lifestyle, yield, or long-term appreciation — then weigh developer track record, community maturity, and resale demand. Every recommendation is backed by research, not just what’s newly listed.",
  },
  {
    question: "What happens after I move in?",
    answer:
      "We start with your goals — lifestyle, yield, or long-term appreciation — then weigh developer track record, community maturity, and resale demand. Every recommendation is backed by research, not just what’s newly listed.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={styles.faq}>
      <div className={styles.heading}>
        <h2>Frequently asked questions.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              className={`${styles.item} ${isOpen ? styles.open : ""}`}
              key={faq.question}
            >
              <button
                className={styles.question}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {isOpen ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.75 19.0757L19.0809 0.75M0.75 0.75L19.0809 19.0757"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.75 14.1199H14.1199M14.1199 14.1199H27.4898M14.1199 14.1199V0.75M14.1199 14.1199V27.4898"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {isOpen && faq.answer && (
                <div className={styles.answer}>
                  <div className={styles.divider} />
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
