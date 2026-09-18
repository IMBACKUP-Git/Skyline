import styles from "./KeyFeatures.module.css";
import Image from "next/image";
import image from "./image.png";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function KeyFeatures() {
  return (
    <section className={styles.keyFeatures}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt="Skyline property" fill />
        </div>

        <div className={styles.info}>
          <div className={styles.heading}>
            <h2 className={montserrat.className}>
              What sets Skyline Keys apart
            </h2>
            <p>
              A small, hands-on team of advisors who know Dubai real estate from
              the inside.
            </p>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={`${styles.number} ${montserrat.className}`}>
                01
              </span>

              <div className={styles.featureContent}>
                <h3>We stay after the deal closes.</h3>
                <p>
                  Property management, renewals, and resale support are part of
                  the relationship, not an upsell.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <span className={`${styles.number} ${montserrat.className}`}>
                02
              </span>

              <div className={styles.featureContent}>
                <h3>Direct Developer Access</h3>
                <p>
                  Priority allocations with names like DAMAC, EMAAR, and SOBHA.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <span className={`${styles.number} ${montserrat.className}`}>
                03
              </span>

              <div className={styles.featureContent}>
                <h3>Local Market Depth</h3>
                <p>
                  Our advisors live and work in the communities we represent.
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <span className={`${styles.number} ${montserrat.className}`}>
                04
              </span>

              <div className={styles.featureContent}>
                <h3>A Straightforward Process</h3>
                <p>No jargon, no pressure — clear guidance at every stage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
