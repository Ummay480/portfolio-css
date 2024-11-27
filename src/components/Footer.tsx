"use client";
import React from "react";
import styles from "../styles/Footer.module.css"; // Import the CSS module

export function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>© 2024 Ummay Kulsoom. All rights reserved.</p>
    </div>
  );
}

export default Footer;