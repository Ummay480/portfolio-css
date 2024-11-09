"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./ContactForm.module.css"; // Import the CSS module

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    // Add form submission logic here
  };

  return (
    <div className={styles.contactFormContainer}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Contact Me</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Name Input */}
          <div className={styles.inputGroup}>
            <div className={styles.iconWrapper}>
              <Image src="/images/person.png" alt="name icon" width={64} height={64} />
            </div>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>

          {/* Email Input */}
          <div className={styles.inputGroup}>
            <div className={styles.iconWrapper}>
              <Image src="/images/gmail.png" alt="gmail-icon" width={64} height={64} />
            </div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>

          {/* Phone Input */}
          <div className={styles.inputGroup}>
            <div className={styles.iconWrapper}>
              <Image src="/images/call1.png" alt="phone icon" width={64} height={64} />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.inputField}
            />
          </div>

          {/* Message Input */}
          <div className={styles.inputGroup}>
            <div className={styles.iconWrapper}>
              <Image src="/images/message.png" alt="message icon" width={64} height={64} />
            </div>
            <textarea
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={styles.textAreaField}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
