import Image from "next/image";
import styles from "./AboutHero.module.css";
import heroImage from "./AboutHero.png";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function AboutHero() {
  return (
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
          opposite: an advisory team that stays engaged long after the handover.
        </p>

        <Link href="/Contact" className={styles.button}>
          Book a consultation
        </Link>
      </div>

      <div className={styles.fade} />
    </section>
  );
}
