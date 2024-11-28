"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/Header3.module.css"; // Import CSS module

const Header3: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.iconContainer}>
        <div className={`${styles.icon} ${styles.sparkle}`}>
          <Image
            src="/images/api3.png"
            alt="API Icon"
            width={100}
            height={100}
            className={styles.w20}
          />
        </div>
        <div className={`${styles.icon} ${styles.sparkle}`}>
          <Image
            src="/images/ecommerce.png"
            alt="Ecommerce Icon"
            width={100}
            height={100}
            className={styles.w20}
          />
        </div>
        <div className={styles.projectIcon}>
          <Image
            src="/images/projects.png"
            alt="Projects Icon"
            width={400}
            height={100}
          />
        </div>
      </div>

      <div className={styles.glassContainer}>
        <h1 className={styles.headerTitle}>Projects</h1>
      </div>
    </div>
  );
};

export default Header3;