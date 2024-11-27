"use client";
import React from "react";
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import styles from "../styles/ContactSection.module.css"; // Import the CSS module

interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  colorClass: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  href,
  icon,
  label,
  colorClass,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.contactButton} ${styles[colorClass]}`}
    >
      {icon}
      <span className={styles.label}>{label}</span>
    </a>
  );
};

const ContactSection: React.FC = () => {
  return (
    <div>
      {/* Contact Buttons */}
      <div className={styles.buttonsContainer}>
        <ContactButton
          href="https://wa.me/923249208788"
          icon={<FaWhatsapp className={`${styles.icon}`} />}
          label="WhatsApp"
          colorClass="whatsapp"
        />

        <ContactButton
          href="https://www.linkedin.com/in/ummay-kulsoom-b53bb71a8"
          icon={<FaLinkedin className={`${styles.icon}`} />}
          label="LinkedIn"
          colorClass="linkedin"
        />

        <ContactButton
          href="mailto:kulsoom0324@gmail.com"
          icon={<FaEnvelope className={`${styles.icon}`} />}
          label="Email"
          colorClass="email"
        />

        <ContactButton
          href="https://github.com/Ummay480"
          icon={<FaGithub className={`${styles.icon}`} />}
          label="GitHub"
          colorClass="github"
        />
      </div>
    </div>
  );
};

export default ContactSection;