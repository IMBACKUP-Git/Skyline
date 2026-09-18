import Image from "next/image";
import styles from "./BlogInternal.module.css";
import image1 from "./image1.png";
import image2 from "./image2.png";
import mainImage from "./image.png";
import RelatedBlogs from "./RelatedBlog";

export default function BlogInternal() {
  const related = [
    {
      category: "Market",
      title: "Off-Plan vs. Ready Properties: What Dubai Buyers Should Know",
      description:
        "Compare investment potential, payment plans, rental yields, and ownership timelines to choose the right property.",
      readTime: "4 min read",
      image: image1,
    },
    {
      category: "Market",
      title: "Off-Plan vs. Ready Properties: What Dubai Buyers Should Know",
      description:
        "Compare investment potential, payment plans, rental yields, and ownership timelines to choose the right property.",
      readTime: "4 min read",
      image: image2,
    },
    {
      category: "Market",
      title: "Off-Plan vs. Ready Properties",
      description:
        "Compare investment potential, payment plans, rental yields, and ownership timelines to choose the property.",
      readTime: "4 min read",
      image: image1,
    },
  ];
  return (
    <section className={styles.blog}>
      <div className={styles.header}>
        <span className={styles.category}>Market</span>

        <h1>
          Off-Plan vs. Ready Properties:
          <br />
          What Dubai Buyers Should Know
        </h1>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.left}>
          <div className={styles.mainImage}>
            <Image src={mainImage} alt="" fill />
          </div>
          <article className={styles.article}>
            <p>
              Every buyer who walks into a conversation about Dubai real estate
              eventually asks the same question: off-plan or ready? There&apos;s
              no universal right answer — it depends on your timeline, your risk
              tolerance, and what you actually want the property to do for you.
              Here&apos;s how the two compare.
            </p>

            <section>
              <h2>What you&apos;re actually buying</h2>
              <p>
                An off-plan property is a promise — a unit in a development
                that's still under construction, sold against architectural
                plans and a payment schedule. A ready property is one you can
                walk through today: what you see is what you own, from day one.
              </p>
              <p>That distinction shapes everything else about the decision.</p>
            </section>

            <section>
              <h2>Payment plans and upfront cost</h2>
              <p>
                Off-plan developments typically ask for a smaller down payment —
                often 10–20% — with the balance spread across construction
                milestones and, in many cases, a post-handover plan that extends
                payments for a year or more after you receive the keys. Ready
                properties usually require the full purchase price (or mortgage
                down payment) at the point of sale, plus the standard transfer
                costs.
              </p>
              <p>
                If preserving cash flow matters more than immediate occupancy,
                off-plan's staged payments are the more comfortable route.
              </p>
            </section>

            <section>
              <h2>Timeline and certainty</h2>
              <p>
                Ready properties close the gap between decision and move-in —
                you can be signing a title deed within weeks. Off-plan requires
                patience: delivery dates can shift, and even well-regarded
                developers occasionally revise handover timelines. Buyers who
                need a home now, or who want a rental generating income
                immediately, are usually better served by ready stock.
              </p>
            </section>

            <section>
              <h2>Value and appreciation potential</h2>
              <p>
                Off-plan units are typically priced below comparable ready
                properties in the same area, since the developer is pricing in
                construction risk and time-to-market. That gap is where much of
                off-plan's upside lives — buyers who hold through completion
                often see appreciation simply from the property moving from "on
                paper" to "delivered." Ready properties, by contrast, are priced
                at current market value, so the entry cost is higher but the
                outcome is known.
              </p>
            </section>

            <section>
              <h2>Rental yield considerations</h2>
              <p>
                A ready property can start earning rental income immediately,
                which matters if cash flow is the priority. An off-plan unit
                earns nothing until handover — but buyers entering early
                sometimes secure a lower basis, which can translate into a
                stronger yield once the property is tenanted, assuming the
                area's rental market holds up as projected.
              </p>
            </section>

            <section>
              <h2>Which one fits you</h2>
              <ul>
                <li>
                  Choose off-plan if: you have a longer investment horizon, want
                  to spread payments over time, and are comfortable with
                  construction-stage uncertainty in exchange for a lower entry
                  price.
                </li>
                <li>
                  Choose ready if: you want immediate occupancy or rental
                  income, prefer to see exactly what you're buying, and would
                  rather pay current market value than wait on a delivery date.
                </li>
              </ul>
            </section>
          </article>
        </div>
        <div className={styles.related}>
          {" "}
          <div className={styles.cards}>
            {related.map((relate, index) => (
              <article className={styles.card} key={`${relate.title}-${index}`}>
                <div className={styles.cardImage}>
                  <Image src={relate.image} alt={relate.title} fill />

                  <span className={styles.cardCategory}>{relate.category}</span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.top}>
                    <h3>{relate.title}</h3>

                    <p>{relate.description}</p>
                  </div>
                  <div className={styles.bottom}>
                    <small>{relate.readTime}</small>

                    <button
                      className={styles.cardArrow}
                      aria-label={`Read ${relate.title}`}
                    >
                      <svg
                        width="10"
                        height="17"
                        viewBox="0 0 10 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
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
                </div>
              </article>
            ))}
          </div>
        </div>
        <RelatedBlogs />
      </div>
    </section>
  );
}
