import React from 'react';
import './AboutUsSection.css';
import Navbar from '../components/NavBar.tsx';
import CoreValuesSection from './CoreValuesSection.tsx';
import TeamSection from './TeamSection.tsx';
import StatsSection from './StatsSection.tsx';
import Testimonials from './Testimonials.tsx';
import Footer from '../components/Footer.tsx';
import HeroSection from './HeroSection.tsx';
import MagazineSection from './Magazine.tsx'; // This is your new interactive component

const AboutUsSection = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      <section className="about-us-container">
        <div className="about-us-top">
          <div className="about-us-left">
            <h1>
              We’re <br />
              the Team Behind <br />
              Your Next Big Idea.
            </h1>
          </div>
          <div className="about-us-right">
            <p>
              At ProJenius, we’re a team of passionate creators and problem-solvers committed to bringing your ideas to life...
            </p>
          </div>
        </div>

        <div className="about-us-video">
          <iframe 
            width="560" 
            height="315"
            src="https://www.youtube.com/embed/1adzVmNh078"
            title="Intro Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
          </iframe>
        </div>
      </section>

      <CoreValuesSection />
      <TeamSection />
      <StatsSection />

      {/* REMOVED: The old "pj-magazine-section" was deleted from here 
          to stop the overlap and duplication.
      */}

      {/* This is the ONLY component needed for the magazine now */}
      <MagazineSection />

      <Testimonials />
      
    </>
  );
};

export default AboutUsSection;