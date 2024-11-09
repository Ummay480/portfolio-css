"use client";
import React from "react";
import ContactButtons from "./ContactButtons";
import styles from "./Contacts.module.css"; // Import the CSS module

const Contacts = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Let&apos;s Connect</h2>
            <p className={styles.subtitle}>
              Follow me on social media or reach out via email!
            </p>
            {/* Social media icons moved under the <p> */}
            <div className={styles.socialMediaIcons}>
              <a
                href="https://www.linkedin.com/in/ummaykulsoom/"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
              <ContactButtons />
            </div>
          </div>
        </div>
        <div className={styles.footerText}></div>
      </div>
    </footer>
  );
};

export default Contacts;
