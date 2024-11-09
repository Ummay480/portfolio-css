import React from "react";
import HeroSection from "../components/HeroSection"; 
import AboutMe from "../components/AboutSection"; 
import ProjectSection from "../components/ProjectSection";
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import Contacts from "../components/Contacts";
import PolygonCard from '../components/PolygonCard';
import ProfessionalSkillsChart from "../components/ProfessionalSkillsChart";

// HomePage component
const HomePage: React.FC = () => {
  return (
    <main>
      <div className="text-center">
        {/* Hero Section */}
        <div className="hero-container">
          <HeroSection />
        </div>

        {/* About Me Section */}
        <div className="about-section">
          <AboutMe />
        </div>

        {/* Project Section */}
        <div className="project-section">
          <h1>My Projects</h1>
          <div className="polygon-card-container">
            <PolygonCard />
          </div>
          <ProjectSection />
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <Skills />
        </div>

        {/* Professional Skills Chart */}
        <div className="professional-skills-container">
          <ProfessionalSkillsChart />
        </div>

        {/* Contact Us Section */}
        <div className="contact-form-container">
          <ContactForm />
        </div>

        {/* Contacts Section */}
        <div className="contacts-section">
          <Contacts />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
