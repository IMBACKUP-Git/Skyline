"use client";

import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { Montserrat } from "next/font/google";
import styles from "./ConsultationForm.module.css";
import {
  validateContactForm,
  type ContactFormErrors,
} from "@/app/(frontend)/lib/formValidation";

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
  const [errors, setErrors] = useState<ContactFormErrors>({});

  useEffect(() => {
    if (isOpen) {
      setSuccess(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const clearError = (field: keyof ContactFormErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const values = {
      firstName: String(formData.get("firstName") || ""),
      lastName: String(formData.get("lastName") || ""),
      email: String(formData.get("email") || ""),
      mobile: String(formData.get("mobile") || ""),
      message: String(formData.get("message") || ""),
    };

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const data = { ...values, source: "popup" };

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
        setErrors({});
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
    <div className={styles.overlay} onClick={onClose} data-lenis-prevent>
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

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.fields}>
                <div className={styles.field}>
                  <label htmlFor="popup-firstName">First Name</label>
                  <input
                    id="popup-firstName"
                    name="firstName"
                    type="text"
                    placeholder="Your first name*"
                    minLength={2}
                    maxLength={50}
                    required
                    onInput={() => clearError("firstName")}
                    aria-invalid={Boolean(errors.firstName)}
                  />
                  {errors.firstName && (
                    <span className={styles.error}>{errors.firstName}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="popup-lastName">Last Name</label>
                  <input
                    id="popup-lastName"
                    name="lastName"
                    type="text"
                    placeholder="Your last name*"
                    minLength={2}
                    maxLength={50}
                    required
                    onInput={() => clearError("lastName")}
                    aria-invalid={Boolean(errors.lastName)}
                  />
                  {errors.lastName && (
                    <span className={styles.error}>{errors.lastName}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="popup-email">Email</label>
                  <input
                    id="popup-email"
                    name="email"
                    type="email"
                    placeholder="Your email address*"
                    maxLength={100}
                    required
                    onInput={() => clearError("email")}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <span className={styles.error}>{errors.email}</span>
                  )}
                </div>

                <div className={styles.field}>
                  <label htmlFor="popup-mobile">Mobile Number</label>
                  <input
                    id="popup-mobile"
                    name="mobile"
                    type="tel"
                    inputMode="tel"
                    placeholder="Your mobile number*"
                    pattern="\+?[0-9\s]{7,20}"
                    minLength={7}
                    maxLength={20}
                    required
                    onInput={() => clearError("mobile")}
                    aria-invalid={Boolean(errors.mobile)}
                  />
                  {errors.mobile && (
                    <span className={styles.error}>{errors.mobile}</span>
                  )}
                </div>

                <div className={styles.messageField}>
                  <label htmlFor="popup-message">Your Message</label>
                  <textarea
                    id="popup-message"
                    name="message"
                    placeholder="Write your message here"
                    maxLength={500}
                    onInput={() => clearError("message")}
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && (
                    <span className={styles.error}>{errors.message}</span>
                  )}
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
