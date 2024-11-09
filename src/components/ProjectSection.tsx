"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import './ProjectSection.css'; // Import the CSS file

interface Project {
  title: string;
  imageSrc: string;
  isVideo: boolean;
  link: string;
}

const projects: Project[] = [
  {
    title: "Portfolio",
    imageSrc: "/videos/portfolio.mp4",
    isVideo: true,
    link: "https://portfolio-uq3i.vercel.app/",
  },
  {
    title: "Real Estate",
    imageSrc: "/videos/real-estate.mp4",
    isVideo: true,
    link: "https://real-estate-omega-topaz.vercel.app/",
  },
  {
    title: "Resume Builder",
    imageSrc: "/videos/resume-builder.mp4",
    isVideo: true,
    link: "https://resume-builder-nu-two.vercel.app/",
  },
  {
    title: "Calculator",
    imageSrc: "/videos/calculator.mp4",
    isVideo: true,
    link: "https://github.com/Ummay480/White-Calculator",
  },
  {
    title: "E-Commerce",
    imageSrc: "/images/e-commerce.png",
    isVideo: false,
    link: "#",
  },
  {
    title: "Clone Amazon",
    imageSrc: "/images/Amazon.png",
    isVideo: false,
    link: "#",
  },
  {
    title: "Clone Sushiman",
    imageSrc:"/images/sushiman.png",
    isVideo:false,
    link: "#",
  },
  {
    title: "Landing Page",
    imageSrc: "/images/landing-page.png",
    isVideo: false,
    link: "#",
  },
  {
    title: "Digital Marketing",
    imageSrc: "/images/digital-marketing.png",
    isVideo: false,
    link: "www.marketingjet.tech",
  },
  {
    title: "Resume",
    imageSrc: "/images/cv.png",
    isVideo: false,
    link: "https://cv-ruby-five.vercel.app/",
  },
  {
    title: "Resume",
    imageSrc: "/images/cv1.png",
    isVideo: false,
    link: "https://kulsoom-resume.vercel.app/",
  },
];

const ProjectSection: React.FC = () => {
  return (
    <div className="project-section">
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            isVideo={project.isVideo}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;