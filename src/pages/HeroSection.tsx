import React from "react";
import "./HeroSection.css";
import Spline from "@splinetool/react-spline";
import circle1 from "../img/Background_videos&img/c2.webm";

const HeroSection = () => {
  return (
    <section className="about-hero-container">
  {/* Background Video */}
  <video className="about-hero-video" autoPlay loop muted playsInline>
    <source src={circle1} type="video/mp4" />
  </video>
    <div className="hero-overlay"></div>
  <div className="about-hero-content">
    <h1 className="about-hero-title">
      Who We Are at <span style={{ color: "#00fff2" }}>ProJenius</span>
    </h1>

    <p className="about-hero-subtitle">
      Driven by <span style={{ color: "#00fff2" }}>creativity</span>, guided by purpose — discover the story
      behind our passion for innovative project <span style={{ color: "#00fff2" }}>solutions</span>.
    </p>
  </div>
</section>

  );
};

export default HeroSection;
