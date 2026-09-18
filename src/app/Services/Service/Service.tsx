"use client";

import gsap from "gsap";
import React from "react";
import { type StaticImageData } from "next/image";
import styles from "./Service.module.css";

import managementIcon from "./managmentIcon.svg";
import salesIcon from "./salesIcon.svg";
import offPlanIcon from "./offPlanIcon.svg";
import leasingIcon from "./leasingIcon.svg";
import legalIcon from "./legalIcon.svg";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const services: {
  icon: StaticImageData;
  title: string;
  description: string;
  rotation: number;
}[] = [
  {
    icon: salesIcon,
    title: "Property Sales",
    description:
      "Buying or selling — we handle listing, marketing, negotiation, and closing for residential and commercial properties.",
    rotation: 45,
  },
  {
    icon: managementIcon,
    title: "Property Management",
    description:
      "Buying or selling — we handle listing, marketing, negotiation, and closing for residential and commercial properties.",
    rotation: 90,
  },
  {
    icon: offPlanIcon,
    title: "Off-Plan Sales",
    description:
      "Buying or selling — we handle listing, marketing, negotiation, and closing for residential and commercial properties.",
    rotation: 45,
  },
  {
    icon: leasingIcon,
    title: "Leasing & Rentals",
    description:
      "Buying or selling — we handle listing, marketing, negotiation, and closing for residential and commercial properties.",
    rotation: 45,
  },
  {
    icon: legalIcon,
    title: "Legal & Transaction Support",
    description:
      "Buying or selling — we handle listing, marketing, negotiation, and closing for residential and commercial properties.",
    rotation: 45,
  },
];

export default function Service() {
  const handleMouseEnter = (
    e: React.MouseEvent<HTMLElement>,
    rotation: number,
  ) => {
    if (window.innerWidth <= 640) return;

    const card = e.currentTarget;
    const icon = card.querySelector(`.${styles.icon}`);
    const title = card.querySelector("h3");
    const description = card.querySelector("p");

    gsap.killTweensOf([card, icon, title, description]);

    gsap.to(card, {
      background:
        "linear-gradient(227deg, #d1eaff 25%, #b8dcf8 55%, #b0d2ee 89%)",
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(icon, {
      rotation,
      backgroundColor: "#276FC3",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(title, {
      y: -10,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(description, {
      height: "auto",
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth <= 640) return;

    const card = e.currentTarget;
    const icon = card.querySelector(`.${styles.icon}`);
    const title = card.querySelector("h3");
    const description = card.querySelector("p");

    gsap.killTweensOf([card, icon, title, description]);

    gsap.to(card, {
      background:
        "linear-gradient(227deg, #edf7ff 25%, #ffffff 55%, #edf7ff 89%)",
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(icon, {
      rotation: 0,
      backgroundColor: "#86AEDD",
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(title, {
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(description, {
      height: 0,
      marginTop: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section className={styles.services}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <h2 className={montserrat.className}>Our services</h2>

          <p>
            From first search to well after handover -SKRE covers sales,
            leasing, off-plan, management, and the legal detail in between. No
            handoffs, no disappearing after the deal closes.
          </p>
        </div>

        {services.map((service) => (
          <article
            className={styles.card}
            key={service.title}
            onMouseEnter={(e) => handleMouseEnter(e, service.rotation)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={styles.icon}
              style={{ maskImage: `url(${service.icon.src})` }}
            />

            <div className={styles.cardContent}>
              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
