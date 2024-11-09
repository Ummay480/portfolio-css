"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import styles from "./HeroSection.module.css"; // Import CSS module

const HeroSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        {/* Text Section */}
        <div className={styles.textSection}>
          <h1 className={styles.heading}>
            <span className={styles.gradientText}>Hello, I am </span>
            <TypeAnimation
              sequence={[
                "Ummay",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block", lineHeight: "1" }}
              repeat={Infinity}
            />
          </h1>
          <p className={styles.description}>
            I create modern, responsive websites that combine creativity and technical skill. With a focus on web development and UI/UX design, I bring ideas to life with seamless digital experiences.
          </p>
          <div className={styles.buttonContainer}>
            <a href="/contact" className={styles.hireButton}>
              Hire Me
            </a>
            <a
              href="/images/umme-resume.png"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadButton}
            >
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.imageSection}>
          <div className={styles.neonBorder}>
            <Image
              src="/images/ummay1.jpeg"
              alt="profile picture"
              className="rounded-full border-r-gray-50"
              width={300}
              height={300}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
