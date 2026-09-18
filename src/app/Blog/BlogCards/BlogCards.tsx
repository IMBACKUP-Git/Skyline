import Image from "next/image";
import styles from "./BlogCards.module.css";

import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";
import image5 from "./image5.png";
import image6 from "./image6.png";

const blogs = [
  {
    image: image1,
    category: "Market",
    title: "Off-Plan vs. Ready Properties: What Dubai Buyers Should Know",
    description:
      "Compare investment potential, payment plans, and rental yields to choose the...",
    time: "4 min read",
  },
  {
    image: image2,
    category: "Market",
    title: "A First-Time Buyer’s Guide to Dubai Real Estate",
    description: "From budgeting and mortgage pre-approval to...",
    time: "4 min read",
  },
  {
    image: image3,
    category: "Market",
    title: "Dubai Hills vs. Dubai Marina: Which Fits Your Lifestyle?",
    description:
      "Two of the city’s most sought-after communities, compared on price per...",
    time: "4 min read",
  },
  {
    image: image4,
    category: "Market",
    title: "Where Dubai’s Rental Yields Are Headed in 2026",
    description:
      "A look at which communities are outperforming the market average...",
    time: "4 min read",
  },
  {
    image: image5,
    category: "Market",
    title: "Understanding the Golden Visa and Its Impact on Property Buyers",
    description:
      "How the 10-year residency program is shaping demand for premium...",
    time: "4 min read",
  },
  {
    image: image6,
    category: "Market",
    title: "What International Buyers Should Know Before Purchasing in Dubai",
    description:
      "Ownership rules, financing options, and the paperwork non-resident...",
    time: "4 min read",
  },
];

export default function BlogCards() {
  return (
    <section className={styles.blogs}>
      <div className={styles.filters}>
        <button className={styles.active}>ALL</button>
        <button>Market</button>
        <button>Buying guide</button>
        <button>Neighborhood</button>
        <button>Investments</button>
        <button>Legal & Process</button>
      </div>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <article className={styles.card} key={blog.title}>
            <div className={styles.image}>
              <Image src={blog.image} alt="" fill />
              <div className={styles.fade} />
              <span>{blog.category}</span>
            </div>
            <div className={styles.content}>
              <div className={styles.titleRow}>
                <h2>{blog.title}</h2>
                <span>{blog.time}</span>
              </div>

              <div className={styles.bottomRow}>
                <p>{blog.description}</p>

                <button className={styles.arrow}>
                  <svg
                    width="11"
                    height="17"
                    viewBox="0 0 11 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.39947 15.4004L8.67578 8.40039L1.39947 1.40039"
                      stroke="white"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button className={styles.viewMore}>View more</button>
    </section>
  );
}
