"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {
  FaCode,
  FaGraduationCap,
  FaCertificate,
  FaClipboardList,
} from "react-icons/fa";
import styles from "../styles/AboutSection.module.css"; // Import the CSS module

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <FaCode className={styles.icon} />, // Icon for Skills
    content: (
      <ul>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>TypeScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <FaGraduationCap className={styles.icon} />, // Icon for Education
    content: (
      <ul>
        <li>Graduation</li>
        <li>Karachi University</li>
        <li>Web3.0</li>
        <li>Governor House Karachi</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <FaCertificate className={styles.icon} />, // Icon for Certifications
    content: (
      <ul>
        <li>DigiSkills</li>
        <li>Udemy</li>
        <li>Google Garage</li>
        <li>Governor House Karachi</li>
      </ul>
    ),
  },
  {
    title: "Expertise",
    id: "expertise",
    icon: <FaClipboardList className={styles.icon} />,
    content: (
      <ul>
        <li>Web Development</li>
        <li>Responsive Design</li>
        <li>UI/UX Design</li>
        <li>Problem Solving</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [visibleTab, setVisibleTab] = useState<string | null>(null);

  return (
    <section className={styles.bgDark}>
      <div className={styles.sectionContainer}>
        {/* About Image */}
        <Image
          src="/images/aboutme.png"
          alt="profile-image"
          width={500}
          height={500}
          className={styles.aboutImage}
        />

        {/* About Me Text */}
        <div className={styles.aboutText}>
          <TypeAnimation
            sequence={["About Me", 1000]}
            wrapper="h2"
            speed={50}
            className={styles.heading}
            repeat={Infinity}
          />
          <p className={styles.paragraph}>
            I&apos;m a passionate web developer with experience in building
            modern and responsive websites using the latest technologies. I
            enjoy turning complex problems into simple, beautiful, and intuitive
            designs.
          </p>

          {/* Bricks Layout for Tabs */}
          <div className={styles.tabsContainer}>
            {TAB_DATA.map((tab) => (
              <div
                key={tab.id}
                className={`${styles.tab} ${
                  tab.id === "skills"
                    ? styles.skillsTab
                    : tab.id === "education"
                    ? styles.educationTab
                    : tab.id === "certifications"
                    ? styles.certificationsTab
                    : styles.expertiseTab
                }`}
                onMouseEnter={() => setVisibleTab(tab.id)}
                onMouseLeave={() => setVisibleTab(null)}
              >
                <h3 className={styles.tabTitle}>
                  {tab.icon}
                  {tab.title}
                </h3>
                <div
                  className={`${styles.tabContent} ${
                    visibleTab === tab.id ? styles.tabContentVisible : ""
                  }`}
                >
                  {tab.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;