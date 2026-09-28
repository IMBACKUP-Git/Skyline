"use client";

import Image from "next/image";
import styles from "./Vission.module.css";
import card1 from "./card1.svg";
import card2 from "./card2.svg";
import card3 from "./card3.svg";
import card4 from "./card4.svg";
import card1Mobile from "./card1Mobile.svg";
import card2Mobile from "./card2Mobile.svg";
import { Montserrat } from "next/font/google";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const values = [
  {
    title: "Transparency",
    description: "Clear terms and honest advice, with nothing hidden.",
    image: card1,
    mobileImage: card1Mobile,
  },
  {
    title: "Long-Term Relationships",
    description: "We measure success by clients who return, not deals closed.",
    image: card2,
    mobileImage: card2Mobile,
  },
  {
    title: "Full-Service Support",
    description:
      "From first viewing to post-handover management, we stay involved.",
    image: card3,
    mobileImage: card1Mobile,
  },
  {
    title: "Local Expertise",
    description:
      "Deep knowledge of Dubai's communities, developers, and market cycles.",
    image: card4,
    mobileImage: card2Mobile,
  },
];

export default function Vission() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(`.${styles.card}`);

      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className={styles.vision}>
      <div className={styles.heading}>
        <h2 className={montserrat.className}>What drives us</h2>
        <p>
          The principles that shape every client relationship,
          <br />
          not just our tagline.
        </p>
      </div>

      <div className={styles.cards}>
        {values.map((value) => (
          <div className={styles.card} key={value.title}>
            <Image
              src={value.image}
              alt=""
              className={`${styles.cardPattern} ${styles.desktopPattern}`}
              fill
            />

            <Image
              src={value.mobileImage}
              alt=""
              className={`${styles.cardPattern} ${styles.mobilePattern}`}
              fill
            />

            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
