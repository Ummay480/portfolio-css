"use client";

import React from "react";
import './ProjectCard.css'; // Import the CSS file

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  isVideo: boolean;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageSrc, isVideo, link }) => {
  return (
    <div className="project-card">
      {/* Project content (Image or Video) */}
      {isVideo ? (
        <video src={imageSrc} className="project-card-media" autoPlay loop muted playsInline />
      ) : (
        <img src={imageSrc} alt={title} className="project-card-media" />
      )}

      {/* Glass effect overlay on hover */}
      <div className="project-card-overlay">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-button"
        >
          View/Visit
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
