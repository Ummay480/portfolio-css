import React from "react";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import Contacts from "../components/Contacts";
import ProjectCards from "../components/ProjectCards";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#121212] overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-6 mt-10">
        <HeroSection />
      </div>

      {/* About Me Section */}
      <div className="w-full flex items-center justify-center bg-[#121212] px-4 sm:px-6 lg:px-12 py-6">
        <AboutMe />
      </div>

      {/* Project Section */}
      <div className="w-full flex flex-col items-center py-8 bg-[#121212]">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-yellow-600 text-transparent bg-clip-text mb-8">
          My Projects
        </h1>
        <ProjectSection />
        <div className="mt-6">
          <ProjectCards />
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full px-4 sm:px-6 lg:px-12 mt-12">
        <Skills />
      </div>

            {/* Contact Form Section */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-12">
        <ContactForm />
      </div>

      {/* Contacts Section */}
      <div className="w-full px-4 sm:px-6 lg:px-12 py-12">
        <Contacts />
      </div>
    </main>
  );
};

export default HomePage;
