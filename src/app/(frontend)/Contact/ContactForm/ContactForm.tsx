"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ContactForm.module.css";
import image from "./image.png";
import { Montserrat } from "next/font/google";
import {
  validateContactForm,
  type ContactFormErrors,
} from "@/app/(frontend)/lib/formValidation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const clearError = (field: keyof ContactFormErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    const data = { ...values, source: "contact-page" };

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

      if (result.success) {
        console.log("Form submitted successfully");
        form.reset();
        setErrors({});
      } else {
        console.log("Failed to submit form");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contactForm}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt="Skyline Keys" fill className={styles.image} />
      </div>

      <div className={styles.formWrapper}>
        <div className={styles.heading}>
          <h1 className={montserrat.className}>Get in touch</h1>
          <p>We're here to assist you</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
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
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
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
              <label htmlFor="email">Email</label>
              <input
                id="email"
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
              <label htmlFor="mobile">Mobile Number</label>
              <input
                id="mobile"
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
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
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
    </section>
  );
}
