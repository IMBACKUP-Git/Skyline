"use client";

import Image from "next/image";
import styles from "./PropertyMarquee.module.css";
import property1 from "./property-1.png";
import property2 from "./property-2.png";
import property3 from "./property-3.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function PropertyMarquee() {
  useGSAP(() => {
    gsap.to(`.${styles.marqueeTrack}`, {
      xPercent: -50,
      duration: 10,
      ease: "none",
      repeat: -1,
    });
  });
  return (
    <section className={styles.propertiesMarquee}>
      <div className={styles.marqueeTrack}>
        <div className={styles.marqueeGroup}>
          <div className={styles.propertyCard}>
            <Image src={property1} alt="" fill />
          </div>

          <div className={styles.propertyCard}>
            <Image src={property2} alt="" fill />
          </div>

          <div className={styles.propertyCard}>
            <Image src={property3} alt="" fill />
          </div>

          <div className={styles.propertyCard}>
            <Image src={property2} alt="" fill />
          </div>
        </div>

        <div className={styles.marqueeGroup} aria-hidden="true">
          <div className={styles.propertyCard}>
            <Image src={property1} alt="" fill />
          </div>

          <div className={styles.propertyCard}>
            <Image src={property2} alt="" fill />
          </div>

          <div className={styles.propertyCard}>
            <Image src={property3} alt="" fill />
          </div>

          <div className={styles.propertyCard}>
            <Image src={property2} alt="" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
