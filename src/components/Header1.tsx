"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/Header1.module.css"; // Import CSS module

export const Header1: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.centerImageContainer}>
        <Image
          src="/images/lets-connect.png"
          alt="Let's Connect Icon"
          width={400}
          height={100}
          className={styles.letsConnectImage}
        />
      </div>

      <div className={styles.iconOrbitContainer}>
        <div className={styles.orbit}>
          <div className={`${styles.icon} animate-orbit`}>
            <Image src="/images/WhatsApp.png" alt="WhatsApp Icon" width={40} height={40} />
          </div>
          <div className={`${styles.icon} animate-reverse-orbit`}>
            <Image src="/images/linkedin.png" alt="LinkedIn Icon" width={40} height={40} />
          </div>
          <div className={`${styles.icon} animate-orbit`}>
            <Image src="/images/insta.png" alt="Instagram Icon" width={40} height={40} />
          </div>
          <div className={`${styles.icon} animate-reverse-orbit`}>
            <Image src="/images/facebook.png" alt="Facebook Icon" width={40} height={40} />
          </div>
          <div className={`${styles.icon} animate-orbit`}>
            <Image src="/images/twiter.png" alt="Twitter Icon" width={40} height={40} />
          </div>
        </div>
      </div>

      <div className={styles.glassContainer}>
        <h1 className={styles.headerTitle}>Let&apos;s Connect</h1>
      </div>
    </div>
  );
};

export default Header1;