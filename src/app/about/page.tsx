import React from 'react';
import AboutSection from '../../components/AboutSection';
import Header from "../../components/Header";
import Contacts from "../../components/Contacts";
import '../../styles/customAboutPage.css'; // Importing custom CSS file

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="full-width">
        <Header />
      </div>
    
      {/* Spacer div visible only on larger screens */}
      <div className="hidden-lg hidden-lg-lg-block spacer-lg"></div>
      
      <div className="flex-center justify-center margin-top-20 margin-x-4">
        <AboutSection />
      </div>

      <div className="margin-top-20 margin-bottom-10 margin-bottom-lg-0">
        <Contacts />
      </div>
    </>
  );
};

export default AboutPage;
