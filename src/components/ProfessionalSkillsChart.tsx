"use client";

import React from 'react';
import NeonSkillCircle from './NeonSkillCircle';
import { TypeAnimation } from "react-type-animation"; 
import './ProfessionalSkillsChart.css'; // Import the CSS file

const skillsData = [
  { skill: "Time Management", percentage: 80 },
  { skill: "Team Work", percentage: 90 },
  { skill: "Problem Solving", percentage: 90 },
  { skill: "Communication Skills", percentage: 70 },
];

const ProfessionalSkillsChart: React.FC = () => {
  return (
    <div className="professional-skills-container">
      {/* Section Title */}
      <div className="section-title">
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

      {/* Skills Grid */}
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <NeonSkillCircle key={index} skill={skill.skill} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSkillsChart;
