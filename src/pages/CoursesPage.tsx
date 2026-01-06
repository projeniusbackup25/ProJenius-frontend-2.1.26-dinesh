import React from "react";
import "./CoursesPage.css";
import circle from "../img/Background_videos&img/c2.webm";
import Navbar from "../components/NavBar.tsx";
import roboonline from "../img/Background_videos&img/Background_service_page.png";
import { PiGraduationCapBold } from "react-icons/pi";
import { LuSparkles, LuClock3 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Code2,
  Smartphone,
  Cpu,
  Brush,
  BrainCircuit,
  Video
} from "lucide-react";

import { useState, useEffect } from "react";

// ---- SCROLL IN VIEW HOOK ----
const useInView = (ref: React.RefObject<HTMLElement>, offset = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight - offset;

      if (top < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, offset]);

  return isVisible;
};

const Courses: React.FC = () => {
  const coursesRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(coursesRef, 150);

  React.useEffect(() => {
    const target = document.querySelector(".slide-in-target");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in-active");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (target) observer.observe(target);
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="courses-hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={circle} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            Your <span className="highlight">Project.</span> Our{" "}
            <span className="highlight">Expertise</span><br />
            Endless <span className="highlight">Possibilities</span>
          </h1>
        </div>
      </div>

      {/* COURSES SECTION */}
      <section className="courses-section" id="premium-section">
        <div className="courses-header">
          <span className="badge">Our Courses</span>
          <h2>Premium Learning Paths</h2>
          <p>
            Carefully crafted courses designed to take you from beginner to
            professional.
          </p>
        </div>

        <div className="courses-grid slide-in-target">
          {/* cards unchanged */}
        </div>
      </section>

      {/* INTERACTIVE SECTION */}
      <section className="interactive-section">
        <div className="interactive-left slide-in">
          <span className="badge-live">Live Classes</span>

          <h2 className="interactive-title">
            Interactive <span className="highlight2">Online Classes</span><br />
            With Real Experts
          </h2>

          <p className="interactive-subtext">
            Join our live online sessions and learn directly from industry professionals.
          </p>

          <Link to="/classes">
            <button className="join-btn">Explore Courses</button>
          </Link>

          <Link to="/contact">
            <button className="joined-btn">Contact Us</button>
          </Link>
        </div>

        <div className="interactive-right">
          <div className="robot-wrap">
            <img src={roboonline} alt="Robot" className="robot-img" />
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="why-section">
        <div className="why-header">
          <span className="why-badge">Why ProJenius</span>
          <h2>Why Learn With Us</h2>
          <p>Join thousands of successful graduates who transformed their careers.</p>
        </div>
      </section>

      {/* ENROLL SECTION (FIXED BUTTON) */}
      <section className="enroll-section">
        <div className="enroll-content">
          <h2>
            Ready to Start <span className="cyan-text">Learning</span>? <br />
            Join Our Next Batch Today.
          </h2>

          <p className="enroll-subtext">
            Limited seats available. Secure your spot and transform your career with ProJenius.
          </p>

          {/* ✅ FIXED */}
          <Link to="/contact" className="enrol-btn">
            ENROLL NOW
          </Link>
        </div>
      </section>
    </>
  );
};

export default Courses;
