"use client";

import styles from "./LogoMarquee.module.css";
import Image from "next/image";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./logo4.png";
import logo5 from "./logo5.png";
import logo6 from "./logo6.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LogoMarquee() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;

    const group = trackRef.current.children[0] as HTMLElement;
    const groupWidth = group.getBoundingClientRect().width + 80;

    gsap.to(trackRef.current, {
      x: -groupWidth,
      duration: 5,
      ease: "none",
      repeat: -1,
    });
  });
  return (
    <section className={styles.marquee}>
      <div className={styles.track} ref={trackRef}>
        <div className={styles.logoGroup}>
          {logos.map((logo, index) => (
            <div className={styles.logo} key={index}>
              <Image src={logo} alt="Partner logo" />
            </div>
          ))}
        </div>
        <div className={styles.logoGroup}>
          {logos.map((logo, index) => (
            <div className={styles.logo} key={index}>
              <Image src={logo} alt="Partner logo" />
            </div>
          ))}
        </div>
        <div className={styles.logoGroup}>
          {logos.map((logo, index) => (
            <div className={styles.logo} key={index}>
              <Image src={logo} alt="Partner logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
