"use client";
import React from "react";
import "../styles/ProjectCards.css"

const projects = [
  {
    id: 1,
    title: "ATM Simulation",
    description: "A functional ATM simulation project using TypeScript.",
    videoSrc: "/assets/ATM.mp4",
    link: "https://github.com/your-repo/ATM",
  },
  {
    id: 2,
    title: "To-Do List App",
    description: "A simple task management app built with React and TypeScript.",
    videoSrc: "/assets/to-do-list.mp4",
    link: "https://github.com/your-repo/ToDo",
  },
  {
    id: 3,
    title: "Word-Counter",
    description: "A Word Counter tool built with TypeScript to analyze and count words in a text.",
    videoSrc: "/assets/word-counter.mp4",
    link: "https://github.com/your-repo/WeatherApp",
  },
  {
    id: 4,
    title: "Number Guessing Game",
    description: "A simple number guessing game built with TypeScript.",
    videoSrc: "/assets/number-guessing.mp4",
    link: "https://github.com/your-repo/NumberGuessingGame",
  },
  {
    id: 5,
    title: "Calculator",
    description: "A personal portfolio showcasing my skills and projects.",
    videoSrc: "/assets/Calculator.mp4",
    link: "https://github.com/your-repo/Portfolio",
  },
  {
    id: 6,
    title: "Currency Converter",
    description: "A real-time currency converter built with TypeScript.",
    videoSrc: "/assets/currency-converter.mp4",
    link: "https://github.com/your-repo/CurrencyConverter",
  },
];

const ProjectCards: React.FC = () => {
  return (
    <div className="projects-container">
      {/* Header */}
      <h1 className=".title-text">
        CLI Projects with Nodejs
      </h1>

      {/* Cards */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Video Container */}
            <div className="video-container">
              <video
                src={project.videoSrc}
                autoPlay
                loop
                muted
                className="project-video"
              ></video>
            </div>

            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
