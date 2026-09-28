"use client";

import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

import styles from "./PropertyCarousel.module.css";

import property1 from "./image1.png";
import property2 from "./image2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

const properties = [
  {
    id: 1,
    image: property1,
    title: "Ellington Claydon House",
    location: "Dubai - UAE",
    price: "AED 639,000",
    bedrooms: "6 Bedrooms | 13.93.71 sqf",
  },
  {
    id: 2,
    image: property2,
    title: "High End Apartment",
    location: "Dubai - UAE",
    price: "AED 639,000",
    bedrooms: "6 Bedrooms | 13.93.71 sqf",
  },
  {
    id: 3,
    image: property2,
    title: "High End Apartment",
    location: "Dubai - UAE",
    price: "AED 639,000",
    bedrooms: "6 Bedrooms | 13.93.71 sqf",
  },
];

const carouselProperties = [...properties, ...properties, ...properties];

export default function PropertyCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const updateScale = useCallback((embla: EmblaCarouselType) => {
    const viewport = embla.rootNode();
    const slides = embla.slideNodes();

    const viewportRect = viewport.getBoundingClientRect();
    const viewportCenter = viewportRect.left + viewportRect.width / 2;

    let centerSlideIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const distance = Math.abs(slideCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        centerSlideIndex = index;
      }
    });

    slides.forEach((slide) => {
      const inner = slide.querySelector(
        `.${styles.slideInner}`,
      ) as HTMLElement | null;

      if (!inner) return;

      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;

      const distance = Math.abs(slideCenter - viewportCenter);
      const progress = Math.min(distance / 666, 1);

      const scale = 1 - progress * 0.2;
      const opacity = 1 - progress * 0.25;

      inner.style.setProperty("--scale", scale.toString());
      inner.style.setProperty("--opacity", opacity.toString());
      inner.style.setProperty("--fade-opacity", progress.toString());
    });

    const centerSlide = slides[centerSlideIndex];

    if (!centerSlide || !carouselRef.current) return;

    const centerRect = centerSlide.getBoundingClientRect();

    let leftSlide: Element | null = null;
    let rightSlide: Element | null = null;

    let closestLeftDistance = Infinity;
    let closestRightDistance = Infinity;

    slides.forEach((slide, index) => {
      if (index === centerSlideIndex) return;

      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;

      // Left side slide
      if (slideCenter < centerRect.left) {
        const distance = centerRect.left - rect.right;

        if (distance < closestLeftDistance) {
          closestLeftDistance = distance;
          leftSlide = slide;
        }
      }

      if (slideCenter > centerRect.right) {
        const distance = rect.left - centerRect.right;

        if (distance < closestRightDistance) {
          closestRightDistance = distance;
          rightSlide = slide;
        }
      }
    });

    const carouselRect = carouselRef.current.getBoundingClientRect();

    const leftElement = leftSlide as Element | null;
    const rightElement = rightSlide as Element | null;

    if (leftElement) {
      const leftInner = leftElement.querySelector(
        `.${styles.slideInner}`,
      ) as HTMLElement | null;

      if (leftInner) {
        const leftRect = leftInner.getBoundingClientRect();

        const position = leftRect.right - carouselRect.left;

        carouselRef.current.style.setProperty(
          "--prev-arrow-left",
          `${position}px`,
        );
      }
    }

    if (rightElement) {
      const rightInner = rightElement.querySelector(
        `.${styles.slideInner}`,
      ) as HTMLElement | null;

      if (rightInner) {
        const rightRect = rightInner.getBoundingClientRect();

        const position = rightRect.left - carouselRect.left;

        carouselRef.current.style.setProperty(
          "--next-arrow-left",
          `${position}px`,
        );
      }
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateScale(emblaApi);

    emblaApi.on("scroll", updateScale);
    emblaApi.on("select", updateScale);
    emblaApi.on("reInit", updateScale);

    return () => {
      emblaApi.off("scroll", updateScale);
      emblaApi.off("select", updateScale);
      emblaApi.off("reInit", updateScale);
    };
  }, [emblaApi, updateScale]);

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2 className={montserrat.className}>Find your dream home here</h2>

        <p>
          Explore the different types of properties so you can
          <br />
          choose the best option for you.
        </p>
      </div>

      <div className={styles.carousel} ref={carouselRef}>
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container}>
            {carouselProperties.map((property, index) => (
              <div className={styles.slide} key={`${property.id}-${index}`}>
                <div className={styles.slideInner}>
                  <article className={styles.card}>
                    <div className={styles.imageWrapper}>
                      <img
                        src={property.image.src}
                        alt={property.title}
                        className={styles.image}
                      />
                    </div>

                    <div className={styles.info}>
                      <div className={styles.topInfo}>
                        <h3 className={montserrat.className}>
                          {property.title}
                        </h3>

                        <span className={styles.price}>{property.price}</span>
                      </div>

                      <div className={styles.bottomInfo}>
                        <span>{property.location}</span>

                        <span className={styles.details}>
                          {property.bedrooms}
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>

          <div className={`${styles.imageFade} ${styles.leftFade}`} />
          <div className={`${styles.imageFade} ${styles.rightFade}`} />
        </div>
        <button
          className={`${styles.arrow} ${styles.prevArrow}`}
          onClick={scrollPrev}
          aria-label="Previous property"
        >
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arrowIcon}
          >
            <path
              d="M8.39844 15.3999L1.39844 8.3999L8.39844 1.3999"
              stroke="white"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className={`${styles.arrow} ${styles.nextArrow}`}
          onClick={scrollNext}
          aria-label="Next property"
        >
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.arrowIcon}
          >
            <path
              d="M1.39844 15.3999L8.39844 8.3999L1.39844 1.3999"
              stroke="white"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
