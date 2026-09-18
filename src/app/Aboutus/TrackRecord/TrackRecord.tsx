import styles from "./TrackRecord.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export default function TrackRecord() {
  const stats = [
    {
      value: "50+",
      label: "Properties Sold & Leased",
    },
    {
      value: "200+",
      label: "Happy Clients",
    },
    {
      value: "4.8",
      label: "Average Client Rating",
    },
  ];

  return (
    <section className={styles.trackRecord}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h2 className={montserrat.className}>
            A Track Record Built on Trust
          </h2>

          <p className={styles.description}>
            Numbers don’t make a relationship, but they tell you whether one is
            worth starting. Here’s where we stand today. Skyline Keys was
            founded to close a gap we kept seeing in Dubai real estate: brokers
            who disappeared the moment a deal closes. We built our practice
            around the opposite – a team that stays engaged with clients well
            past handover, whether that means managing a rental, advising on a
            resale, or simply answering a question two years down the line.
            Today, we work across Dubai’s most sought-after communities,
            connecting buyers, sellers, and investors with properties backed by
            full advisory support.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div className={styles.stat} key={stat.label}>
                <h3 className={montserrat.className}>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
