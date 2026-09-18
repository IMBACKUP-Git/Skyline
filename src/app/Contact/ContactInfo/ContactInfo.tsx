import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <section className={styles.contact}>
      <div className={styles.info}>
        <div className={styles.desc}>
          <p>Call us</p>
          <span>+971585901402</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.desc}>
          <p>Email</p>
          <a>info@skre.ae</a>
        </div>
        <div className={styles.divider} />
        <div className={`${styles.desc} ${styles.visit}`}>
          <p>Visit</p>
          <span>
            109, Al basma business center, Al kazim building, Garhoud, Dubai
          </span>
        </div>
        <div className={styles.divider} />
        <div className={styles.desc}>
          <p>Follow us</p>
          <span>Instagram</span>
        </div>
      </div>
    </section>
  );
}
