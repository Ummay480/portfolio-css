"use client";

import React from "react";
import Image from "next/image";
import "../styles/Skills.css"; // Import the custom CSS

// Define the skill logos with their direct paths
const skills = [
  { title: "HTML", image: "/images/html-logo.svg" },
  { title: "CSS", image: "/images/css-logo.svg" },
  { title: "JavaScript", image: "/images/js-logo.svg" },
  { title: "TypeScript", image: "/images/ts-logo.svg" },
  { title: "Next.js", image: "/images/nextjs-logo.svg" },
  { title: "Tailwind CSS", image: "/images/tailwind-logo.svg" },
  { title: "Node.js", image: "/images/nodejs-logo.svg" },
  { title: "React", image: "/images/react-logo.svg" },
  { title: "API Development", image: "/images/api-logo.svg" },
  { title: "Figma", image: "/images/figma-logo.svg" },
  { title: "WordPress", image: "/images/WordPress.svg" },
  { title: "Wix", image: "/images/wix-logo.svg" },
  { title: "Shopify", image: "/images/shopify-logo.svg" },
  { title: "Elementor", image: "/images/elementor-logo.svg" },
  { title: "WooCommerce", image: "/images/woocommerce-logo.svg" },
  { title: "ShadCn", image: "/images/shadcn-logo.png" },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">
          <span className="title-text">My Skills</span>
        </h2>

        <div className="skills-globe">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item"
              style={{
                animationDelay: `${index * 0.9}s`, // Staggered effect
              }}
            >
              <Image
                src={skill.image}
                alt={`${skill.title} logo`}
                className="skill-logo"
                width={100}
                height={200}
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
