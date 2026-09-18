import styles from "./ConversationCTA.module.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

export default function ConverstationCTA() {
  return (
    <section className={styles.content}>
      <div className={styles.text}>
        <h1 className={montserrat.className}>
          Ready to start the conversation?
        </h1>
        <p>
          Whether you're buying, selling, renting, or investing, <br /> our team
          is ready to help.
        </p>
      </div>
      <Link href="/Contact" className={styles.button}>
        Book a consultation
      </Link>
    </section>
  );
}
