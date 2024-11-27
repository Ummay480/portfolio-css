"use client";
import React from "react";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  isVideo: boolean;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageSrc, isVideo, link }) => {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {isVideo ? (
          <video src={imageSrc} autoPlay loop muted className="project-card-media" />
        ) : (
          <img src={imageSrc} alt={title} className="project-card-media" />
        )}
        <h3 className="project-card-title">{title}</h3>
      </a>
    </div>
  );
};

export default ProjectCard;
