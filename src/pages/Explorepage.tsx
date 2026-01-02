import React from "react";
import "./Explorepage.css";
import bgVideo from "../img/Background_videos&img/c2.webm";
import {
  FaMicrochip,
  FaCode,
  FaMobileAlt,
  FaBrain,
  FaPalette,
  FaPenNib,
} from "react-icons/fa";

const ExplorePage = () => {

  // 🔴 Replace with your WhatsApp number (country code required, no +, no spaces)
  const WHATSAPP_NUMBER = "918925450473";

  const handleEnroll = (courseName: string) => {
    const message = `Hello ProJenius,

I am interested in enrolling in the *${courseName}* course.

Could you please share the details such as:
• Course duration
• Fees
• Mode of learning
• Upcoming batch schedule

Thank you!`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="explore-page">

      {/* Background Video */}
      <video className="explore-bg-video" autoPlay loop muted playsInline>
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="explore-overlay"></div>

      {/* Center Content */}
      <div className="explore-content">

        <h1 className="explore-title">
          Your <span>Learning</span> Path Awaits
        </h1>

        <p className="explore-subtitle">
          Choose from our carefully crafted courses designed by industry experts
        </p>

        {/* Card Grid */}
        <div className="explore-grid">

          <div className="course-card">
            <div className="icon-box"><FaMicrochip /></div>
            <h3>Internet of Things (IoT)</h3>
            <p>
              Master the art of connecting devices and building smart solutions.
              From sensors to cloud integration.
            </p>
            <button
              className="enroll-btn"
              onClick={() => handleEnroll("Internet of Things (IoT)")}
            >
              Enroll Now →
            </button>
          </div>

          <div className="course-card">
            <div className="icon-box"><FaCode /></div>
            <h3>Full Stack Development</h3>
            <p>
              Build end-to-end web applications with modern frameworks.
            </p>
            <button
              className="enroll-btn"
              onClick={() => handleEnroll("Full Stack Development")}
            >
              Enroll Now →
            </button>
          </div>

          <div className="course-card">
            <div className="icon-box"><FaMobileAlt /></div>
            <h3>App Development</h3>
            <p>
              Create stunning mobile applications for iOS and Android.
            </p>
            <button
              className="enroll-btn"
              onClick={() => handleEnroll("App Development")}
            >
              Enroll Now →
            </button>
          </div>

          <div className="course-card special-glow">
            <div className="icon-box"><FaBrain /></div>
            <h3>AI & Machine Learning</h3>
            <p>
              Unlock the power of artificial intelligence.
            </p>
            <button
              className="enroll-btn"
              onClick={() => handleEnroll("AI & Machine Learning")}
            >
              Enroll Now →
            </button>
          </div>

          <div className="course-card">
            <div className="icon-box"><FaPalette /></div>
            <h3>Canva Design</h3>
            <p>
              Create stunning graphics with ease.
            </p>
            <button
              className="enroll-btn"
              onClick={() => handleEnroll("Canva Design")}
            >
              Enroll Now →
            </button>
          </div>

          <div className="course-card">
            <div className="icon-box"><FaPenNib /></div>
            <h3>Figma & UI/UX</h3>
            <p>
              Design beautiful user experiences from wireframes to prototypes.
            </p>
            <button
              className="enroll-btn"
              onClick={() => handleEnroll("Figma & UI/UX")}
            >
              Enroll Now →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExplorePage;
