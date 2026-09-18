import Image from "next/image";
import styles from "./FounderSection.module.css";
import image from "./founder.png";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

export default function FounderSection() {
  return (
    <section className={styles.founder}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.subtitle}>Meet the Founder</p>

          <h2 className={montserrat.className}>Shayan Muzaffer</h2>

          <p className={styles.description}>
            We don’t just help clients buy or sell property. We help them make
            confident decisions that create long term value.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image src={image} alt="Skyline Founder" fill />
        </div>
      </div>
    </section>
  );
}
