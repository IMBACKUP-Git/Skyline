"use client";

import { useState } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import houseImage from "./houseImage1.png";
import logo from "./logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className={styles.footer}>
      <div className={styles.footerImage}>
        <div className={styles.houseImage}>
          <Image src={houseImage} alt="Luxury property" fill />
        </div>
      </div>

      <div className={styles.footerContent}>
        <div className={styles.newsletter}>
          <h3>Insight on Dubai Real Estate</h3>
          <p>
            Get market trends, new listings, and buying tips delivered straight
            to your inbox.
          </p>

          <div className={styles.emailBox}>
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button disabled={!email.trim()}>Stay updated</button>
          </div>

          <div className={styles.footerLogo}>
            <Image src={logo} alt="logo" fill />
          </div>
        </div>

        <div className={styles.company}>
          <h3>Company</h3>
          <div className={styles.links}>
            <Link href="/Aboutus">
              <span>About us</span>
              <span className={styles.linkArrow}>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500007 11L5.75 5.75001L0.500007 0.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            <Link href="/Services">
              <span>Services</span>
              <span className={styles.linkArrow}>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500007 11L5.75 5.75001L0.500007 0.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            <Link href="/">
              <span>Featured properties</span>
              <span className={styles.linkArrow}>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500007 11L5.75 5.75001L0.500007 0.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            <Link href="/Blog">
              <span>Blogs</span>
              <span className={styles.linkArrow}>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500007 11L5.75 5.75001L0.500007 0.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            <Link href="/Contact">
              <span>Contact us</span>
              <span className={styles.linkArrow}>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.500007 11L5.75 5.75001L0.500007 0.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        <div className={styles.contact}>
          <h3>Contact</h3>

          <div className={styles.contactColumns}>
            <div>
              <span>Call us</span>
              <p>
                <a href="tel:+971585901402">+971585901402</a>
              </p>
            </div>

            <div>
              <span>Email</span>
              <p className={styles.email}>
                <a href="mailto:admin@skre.ae">admin@skre.ae</a>
              </p>
            </div>

            <div>
              <span>Follow us</span>
              <p className={styles.social}>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </p>
              <p className={styles.social}>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>

            <div className={styles.visit}>
              <span>Visit</span>
              <p>
                109, Al basma business center, Al kazim
                <br />
                building, Garhoud, Dubai
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 SKRE Real Estate. All rights reserved.</p>

        <div>
          <a href="/">Privacy Policy</a>
          <span>|</span>
          <a href="/">Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
}
