
"use client"
import React from "react";
import Image from "next/image";
import "./Skills.css"; // Path to your custom CSS file
import { TypeAnimation } from "react-type-animation"; 

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
      <div className="container">
        <TypeAnimation
          sequence={["Professional Skills", 1000]}
          wrapper="h2"
          speed={50}
          className="title-text"
          style={{
            lineHeight: "1.5",
            marginBottom: "1rem",
          }}
          repeat={Infinity}
        />
      </div>

        {/* Container for skill logos */}
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item"
              style={{
                transform: `rotate(${(index * 360) / skills.length}deg) translateY(-120px)`,
              }}
            >
              <Image
                src={skill.image}
                alt={`${skill.title} logo`}
                className="skill-logo"
                width={80}
                height={80}
              />
            </div>
          ))}
        </div>
  
    </section>
  );
};

export default Skills;
