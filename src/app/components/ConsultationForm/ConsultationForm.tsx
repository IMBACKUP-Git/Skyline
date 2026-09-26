"use client";

import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { Montserrat } from "next/font/google";
import styles from "./ConsultationForm.module.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

type ConsultationFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConsultationForm({
  isOpen,
  onClose,
}: ConsultationFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      message: formData.get("message"),
    };

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();
        setSuccess(true);
      } else {
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.popup}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-popup-title"
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close contact form"
        >
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
        </button>

        {success ? (
          <div className={styles.success}>
            <h2 className={montserrat.className}>Thank you!</h2>
            <p>Your message has been sent successfully.</p>
            <button onClick={onClose}>Close</button>
          </div>
        ) : (
          <div className={styles.formWrapper}>
            <div className={styles.heading}>
              <h2 id="contact-popup-title" className={montserrat.className}>
                Get in touch
              </h2>
              <p>We're here to assist you</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fields}>
                <div className={styles.field}>
                  <label htmlFor="popup-firstName">First Name</label>
                  <input
                    id="popup-firstName"
                    name="firstName"
                    type="text"
                    placeholder="Your first name*"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="popup-lastName">Last Name</label>
                  <input
                    id="popup-lastName"
                    name="lastName"
                    type="text"
                    placeholder="Your last name*"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="popup-email">Email</label>
                  <input
                    id="popup-email"
                    name="email"
                    type="email"
                    placeholder="Your email address*"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="popup-mobile">Mobile Number</label>
                  <input
                    id="popup-mobile"
                    name="mobile"
                    type="tel"
                    placeholder="Your mobile number*"
                    required
                  />
                </div>

                <div className={styles.messageField}>
                  <label htmlFor="popup-message">Your Message</label>
                  <textarea
                    id="popup-message"
                    name="message"
                    placeholder="Write your message here"
                  />
                </div>
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
