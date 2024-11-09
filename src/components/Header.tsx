"use client";
import React from "react";
import Image from "next/image";
import styles from "./Header.module.css"; // Import the CSS module

export const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.iconContainer}>
        <div className={`${styles.icon} ${styles.educationIcon}`}>
          <Image
            src="/images/education.png"
            alt="Education Icon"
            width={100}
            height={100}
          />
        </div>

        <div className={`${styles.icon} ${styles.skillsIcon}`}>
          <Image
            src="/images/skill.png"
            alt="Skills Icon"
            width={100}
            height={100}
          />
        </div>

        <div className={`${styles.icon} ${styles.codeIcon}`}>
          <Image
            src="/images/code.png"
            alt="Code Icon"
            width={100}
            height={100}
          />
        </div>

        <div className={`${styles.icon} ${styles.certificateIcon}`}>
          <Image
            src="/images/certificate.png"
            alt="Certificate Icon"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className={styles.glassContainer}>
        <h1 className={styles.headerTitle}>About Me</h1>
      </div>
    </div>
  );
};

export default Header;
