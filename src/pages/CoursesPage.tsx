import React from "react";
import "./CoursesPage.css";
import circle from "../img/Background_videos&img/c2.webm";
import Navbar from "../components/NavBar.tsx";
import roboonline from "../img/Background_videos&img/Background_service_page.png";
import { PiGraduationCapBold } from "react-icons/pi";
import { LuSparkles } from "react-icons/lu";
import { LuClock3 } from "react-icons/lu";
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
import Footer from "../components/Footer.tsx";
// ---- SCROLL IN VIEW HOOK ----
import { useState, useEffect } from "react";

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
            <span className="highlight">Expertise</span>
            <br />
            Endless <span className="highlight">Possibilities</span>
          </h1>
        </div>
      </div>

      {/* COURSES SECTION */}
      {/* ======= COURSES SECTION WITH SLIDE-IN ======= */}

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
        <div className="course-card-new">
          <div className="course-icon-new icon-blue spiral-hover">
            <Code2 />
          </div>
          <div>
            <h3>Full-Stack Web Development</h3>
            <p>
              Build powerful, responsive websites using modern technologies like
              React, Node.js, and cloud deployment.
            </p>
          </div>
        </div>

        <div className="course-card-new">
          <div className="course-icon-new icon-blue spiral-hover">
            <Smartphone />
          </div>
          <div>
            <h3>App Development</h3>
            <p>
              Create high-performance mobile applications for Android and iOS.
            </p>
          </div>
        </div>

        <div className="course-card-new">
          <div className="course-icon-new icon-blue spiral-hover">
            <Cpu />
          </div>
          <div>
            <h3>IoT (Internet of Things)</h3>
            <p>
              Learn to connect sensors, devices, and cloud platforms to build
              intelligent IoT systems.
            </p>
          </div>
        </div>

        <div className="course-card-new">
          <div className="course-icon-new icon-blue spiral-hover">
            <Brush />
          </div>
          <div>
            <h3>Figma Designing</h3>
            <p>
              Design stunning user interfaces and engaging visuals using modern
              design tools.
            </p>
          </div>
        </div>

        <div className="course-card-new">
          <div className="course-icon-new icon-blue spiral-hover">
            <BrainCircuit />
          </div>
          <div>
            <h3>Machine Learning</h3>
            <p>
              Develop intelligent systems using Python, data processing, and ML
              algorithms.
            </p>
          </div>
        </div>

        <div className="course-card-new">
          <div className="course-icon-new icon-blue spiral-hover">
            <Video />
          </div>
          <div>
            <h3>Canva</h3>
            <p>
              Master professional editing workflows to create cinematic and
              engaging content.
            </p>
          </div>
        </div>
      </div>
    </section>


      {/* ===================== SECTION 2 ===================== */}

<section className="interactive-section">

  {/* Left Content */}
  <div className="interactive-left slide-in">

    <span className="badge-live">Live Classes</span>

    <h2 className="interactive-title">
      Interactive <span className="highlight2">Online Classes</span><br />
      With Real Experts
    </h2>

    <p className="interactive-subtext">
      Join our live online sessions and learn directly from industry professionals.
      Get real-time feedback, ask questions, and collaborate with fellow learners
      in an engaging virtual environment.
    </p>

    {/* Features Grid */}
    <div className="features-grid">

      <div className="feature-item">
        <img src="https://img.icons8.com/?size=100&id=85074&format=png&color=00fff2" alt="" />
        <p>Live Interactive Sessions</p>
      </div>

      <div className="feature-item">
        <img src="https://img.icons8.com/?size=100&id=63320&format=png&color=00fff2" alt="" />
        <p>Small Group Mentoring</p>
      </div>

      <div className="feature-item">
        <img src="https://img.icons8.com/?size=100&id=8324&format=png&color=00fff2" alt="" />
        <p>Flexible Scheduling</p>
      </div>

      <div className="feature-item">
        <img src="https://img.icons8.com/?size=100&id=12389&format=png&color=00fff2" alt="" />
        <p>Certified Completion</p>
      </div>

    </div>

    <Link to="/classes">
  <button className="join-btn">Explore Courses</button>
</Link>
    <Link to="/contact">
  <button className="joined-btn">Contact Us</button>
</Link>
  </div>

  {/* Right Side (Robot Image) */}
  {/* Right Side (Robot Image) */}
  <div className="interactive-right">
      <div className="robot-wrap">
          <img
            src={roboonline}
            alt="Robot"
            className="robot-img"
          />
    </div>

    {/* <div className="active-learners-card">
      <div>
          <p className="label"></p>
          <h3></h3>
      </div>
    </div> */}
  </div>


</section>
    <section className="why-section">
      <div className="why-header">
        <span className="why-badge">Why ProJenius</span>
        <h2>Why Learn With Us</h2>
        <p>Join thousands of successful graduates who transformed their careers.</p>
      </div>  

      <div className="why-features">
        {/* 1 */}
        <div className="why-card">
          <div className="why-icon">
            <PiGraduationCapBold />
          </div>
          <h3>Expert Instructors</h3>
          <p>Learn from industry veterans with real-world experience</p>
        </div>

        {/* 2 */}
        <div className="why-card">
          <div className="why-icon">
            <LuSparkles />
          </div>
          <h3>Cutting-Edge Content</h3>
          <p>Stay ahead with constantly updated course materials</p>
        </div>

        {/* 3 */}
        <div className="why-card">
          <div className="why-icon">
            <LuClock3 />
          </div>
          <h3>Lifetime Access</h3>
          <p>Learn at your pace with unlimited course access</p>
        </div>

        {/* 4 */}
        <div className="why-card">
          <div className="why-icon">
            <FaRegHeart />
          </div>
          <h3>Career Support</h3>
          <p>Get guidance for job placement and career growth</p>
        </div>
      </div>
    </section>

    <section className="enroll-section">
      <div className="enroll-content">
        <h2>
          Ready to Start <span className="cyan-text">Learning</span>? <br />
          Join Our Next Batch Today.
        </h2>

        <p className="enroll-subtext">
          Limited seats available. Secure your spot and transform your career with ProJenius.
        </p>

        <button className="enrol-btn">ENROLL NOW</button>
      </div>
    </section>
    
    </>
  );
};

export default Courses;
