import React from 'react';
import PolygonCard from '../../components/PolygonCard';
import ProjectSection from "../../components/ProjectSection";
import Contacts from "../../components/Contacts";
import Header3 from "../../components/Header3";
import '../../styles/customProjectPage.css'; // Import the custom CSS

const ProjectPage: React.FC = () => {
  return (
    <>
      {/* Header */}
      <div className="fixed-header">
        <Header3 />
      </div>

      {/* Spacer to offset the header's height */}
      <div className="header-offset">
        <h1 className="title title-lg">
          My Projects
        </h1>

        {/* PolygonCard Section */}
        <div className="polygon-card-wrapper">
          <PolygonCard />
        </div>
      </div>

      {/* Project Section */}
      <div className="project-section-wrapper">
        <ProjectSection />
      </div>

      {/* Contacts Section */}
      <div className="contacts-wrapper">
        <Contacts />
      </div>
    </>
  );
};

export default ProjectPage;
