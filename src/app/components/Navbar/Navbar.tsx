import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "./logo.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  return (
    <div className={`${styles.navbar} ${poppins.className}`}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" fill />
      </div>
      <div className={styles.navLinks}>
        <Link href="/Aboutus">About Us</Link>
        <Link href="/Services">Services</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/Contact">Contact Us</Link>
      </div>
    </div>
  );
}
