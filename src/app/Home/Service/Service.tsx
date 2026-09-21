"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./Service.module.css";

import serviceImage from "./serviceImage.png";
import leasingImage from "./leasingImage.png";
import offplanImage from "./offplanImage.png";
import managementImage from "./managementImage.png";
import legalImage from "./legalImage.png";

import { Montserrat } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const services = [
    {
      id: 0,
      title: "Property Sales",
      description:
        "Buying or selling – we handle listing, marketing, negotiation, and closing for residential and commercial properties.",
      image: serviceImage,
    },
    {
      id: 1,
      title: "Leasing & rentals",
      description:
        "Buying or selling - we handle listing, marketing, negotiation, and closing for residential and commercial properties.",
      image: leasingImage,
    },
    {
      id: 2,
      title: "Off-plan sales",
      description:
        "Buying or selling - we handle listing, marketing, negotiation, and closing for residential and commercial properties.",
      image: offplanImage,
    },
    {
      id: 3,
      title: "Property managements",
      description:
        "Buying or selling - we handle listing, marketing, negotiation, and closing for residential and commercial properties.",
      image: managementImage,
    },
    {
      id: 4,
      title: "Legal & transaction support",
      description:
        "Buying or selling - we handle listing, marketing, negotiation, and closing for residential and commercial properties.",
      image: legalImage,
    },
  ];

  useGSAP(() => {
    descriptionRefs.current.forEach((description, index) => {
      if (!description) return;

      const isOpen = activeService === index;

      gsap.to(description, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    });
  }, [activeService]);

  return (
    <section className={styles.services}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.text}>
            <h2 className={montserrat.className}>What we do</h2>

            <p>
              Perumnas cluster housing is the right choice for those of you who
              are looking for comfortable, safe and affordable housing.
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src={services[activeService].image}
              alt={services[activeService].title}
              fill
            />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.servicesList}>
            {services.map((service) => {
              const isOpen = activeService === service.id;

              return (
                <div
                  key={service.title}
                  className={`${styles.serviceItem} ${
                    isOpen ? styles.open : styles.closed
                  }`}
                >
                  <button
                    className={styles.serviceHeader}
                    onClick={() => setActiveService(service.id)}
                  >
                    <h3>{service.title}</h3>

                    <span>
                      {!isOpen && (
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.75 8.25H8.25M8.25 8.25H15.75M8.25 8.25V0.75M8.25 8.25V15.75"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  <div className={styles.serviceContent}>
                    <p
                      ref={(element) => {
                        descriptionRefs.current[service.id] = element;
                      }}
                      className={styles.serviceDescription}
                    >
                      {service.description}
                    </p>

                    {isOpen && (
                      <div className={styles.mobileServiceImage}>
                        <Image src={service.image} alt={service.title} fill />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <Link href="/Services" className={styles.button}>
            Explore service
          </Link>
        </div>
      </div>
    </section>
  );
}
