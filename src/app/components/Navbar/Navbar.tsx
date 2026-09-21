"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`${styles.navbar} ${poppins.className}`}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="logo" fill />
        </Link>
      </div>

      <div className={styles.navLinks}>
        <Link href="/Aboutus">About Us</Link>
        <Link href="/Services">Services</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="/Contact">Contact Us</Link>
      </div>

      <button
        className={`${styles.menuButton} ${menuOpen ? styles.menuOpen : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <line data-line="1" x1="3" y1="6" x2="21" y2="6" />
          <line data-line="2" x1="3" y1="12" x2="21" y2="12" />
          <line data-line="3" x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.menuVisible : ""}`}
      >
        <Link href="/Aboutus" onClick={closeMenu}>
          About Us
        </Link>

        <Link href="/Services" onClick={closeMenu}>
          Services
        </Link>

        <Link href="/Blog" onClick={closeMenu}>
          Blog
        </Link>

        <Link href="/Contact" onClick={closeMenu}>
          Contact Us
        </Link>
      </div>
    </div>
  );
}
