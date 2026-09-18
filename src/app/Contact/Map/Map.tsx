import styles from "./Map.module.css";

export default function Map() {
  return (
    <section className={styles.map}>
      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4294.547190865957!2d55.335538376045456!3d25.252167877675618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d2ced6fc0d1%3A0xe2a3957b4cc2eaa6!2sAl%20Basma%20Business%20Center!5e1!3m2!1sen!2sin!4v1789705997543!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
