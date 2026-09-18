import Link from "next/link";
import styles from "./AboutMobileButton.module.css";

export default function AboutMobileButton() {
  return (
    <div className={styles.wrapper}>
      <Link href="/Aboutus">About us</Link>
    </div>
  );
}
