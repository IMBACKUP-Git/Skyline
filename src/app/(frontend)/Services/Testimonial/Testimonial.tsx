"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Testimonial.module.css";
import quote from "./quote.svg";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const testimonials = [
  {
    text: "I had a wonderful experience purchasing my home in Dubai with the support of Ms. Arshi from Skyline. She was patient, honest, and took the time to truly understand what I was looking for. She presented excellent options, answered all my …More",
    name: "Arif Shaikh",
  },
  {
    text: "I had a wonderful experience purchasing my home in Dubai with the support of Ms. Arshi from Skyline. She was patient, honest, and took the time to truly understand what I was looking for. She presented excellent options, answered all my …More",
    name: "Arif Shaikh",
  },
  {
    text: "I had a wonderful experience purchasing my home in Dubai with the support of Ms. Arshi from Skyline. She was patient, honest, and took the time to truly understand what I was looking for. She presented excellent options, answered all my …More",
    name: "Arif Shaikh",
  },
];

export default function Testimonial() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;

    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      updateButtons();
    };

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, updateButtons]);

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className={styles.testimonial}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h2 className={montserrat.className}>What clients say</h2>
            <p>200+ happy clients and counting.</p>
          </div>

          <div className={styles.arrows}>
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous testimonial"
            >
              <svg
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.39844 15.4004L1.39844 8.40039L8.39844 1.40039"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Next testimonial"
            >
              <svg
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.39844 15.4004L8.39844 8.40039L1.39844 1.40039"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.cards}>
            {testimonials.map((testimonial, index) => (
              <article className={styles.card} key={index}>
                <div className={styles.quote}>
                  <Image src={quote} alt="" fill />
                </div>

                <div className={styles.cardContent}>
                  <p>{testimonial.text}</p>

                  <div className={styles.below}>
                    <div className={styles.divider} />

                    <span>{testimonial.name}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.dots}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === selectedIndex ? styles.activeDot : ""
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
