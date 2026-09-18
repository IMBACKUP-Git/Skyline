import { Montserrat } from "next/font/google";
import styles from "./About.module.css";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function About() {
  return (
    <section className={styles.about}>
      <div className={`${styles.aboutTitle} ${montserrat.className}`}>
        <h2>
          Find your next property
          <br />
          with confidence
        </h2>
      </div>

      <div className={styles.aboutContent}>
        <p className={styles.description}>
          Buying, selling, or renting in Dubai shouldn't feel like a gamble.
          SKRE pairs you with agents who know the market block by block, so
          every recommendation — from off-plan launches to ready villas — is
          backed by real data, not guesswork. We handle the paperwork, the
          negotiations, and the follow-through, so you can focus on saying yes
          to the right home.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3 className={montserrat.className}>
              <span data-value="50">50</span>+
            </h3>
            <span>Properties Sold &amp; Leased</span>
          </div>

          <div className={styles.stat}>
            <h3 className={montserrat.className}>
              <span data-value="200">200</span>+
            </h3>
            <span>Happy Clients</span>
          </div>

          <div className={styles.stat}>
            <h3 className={montserrat.className}>
              <span data-value="4.8">4.8</span>
              <span className={styles.star}>★</span>
            </h3>
            <span>Average Client Rating</span>
          </div>
        </div>

        <Link href="/Aboutus" className={styles.aboutButton}>
          About us
        </Link>
      </div>
    </section>
  );
}
