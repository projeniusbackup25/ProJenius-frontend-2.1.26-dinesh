import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturedWorkshop.css";


import workshopImg from "../img/Worksho_page/SRM.jpeg";
import careerImg from "../img/Worksho_page/career guidance.jpeg";
import mentoringImg from "../img/Worksho_page/mentoring.jpeg";
import awardImg from "../img/Worksho_page/award1.jpeg";


const FeaturedWorkshop: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="featured-workshop">
      {/* ================= SRM WORKSHOP (FULL CONTENT) ================= */}
      <p className="fw-label">Featured Event</p>

      <h2 className="fw-title">
        SRM Chennai <span>Workshop</span>
      </h2>

      <p className="fw-subtitle">
        A transformative experience where 200+ students discovered the power of
        hands-on learning, collaboration, and innovation.
      </p>

      <div className="fw-card">
        <div className="fw-left">
          <img src={workshopImg} alt="SRM Workshop" className="fw-img" />
        </div>

        <div className="fw-right">
          <div className="fw-tags">
            <span className="fw-tag">⭐ Flagship Event</span>
            <span className="fw-tag">👥 200+ Students</span>
          </div>

          <h3 className="fw-heading">
            Building the Future, One Project at a Time
          </h3>

          <p className="fw-text">
            From ideation to implementation, students explored cutting-edge
            technologies through interactive sessions, live coding, and
            collaborative problem-solving.
          </p>

          <div className="fw-info">
            <span>📍 SRM University, Chennai</span>
            <span>🕒 2-Day Workshop</span>
          </div>

          <div className="fw-buttons">
            <button
              className="fw-btn-primary"
              onClick={() => navigate("/workshop-gallery")}
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* ================= CAREER GUIDANCE ================= */}
      <h2 className="fw-title">Career <span>Guidance</span></h2>

      <div className="fw-card">
        <div className="fw-left">
          <img src={careerImg} alt="Career Guidance" className="fw-img" />
        </div>

        <div className="fw-right">
          <p className="fw-text">
            Expert-led sessions designed to help students explore career paths,
            industry trends, and future opportunities.
          </p>

          <div className="fw-buttons">
            <button
              className="fw-btn-primary"
              onClick={() => navigate("/workshop-gallery")}
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* ================= MENTORING ================= */}
      <h2 className="fw-title">Mentoring <span>Program</span></h2>

      <div className="fw-card">
        <div className="fw-left">
          <img src={mentoringImg} alt="Mentoring Program" className="fw-img" />
        </div>

        <div className="fw-right">
          <p className="fw-text">
            One-on-one mentoring to guide students in skill development,
            leadership, and career growth.
          </p>

          <div className="fw-buttons">
            <button
              className="fw-btn-primary"
              onClick={() => navigate("/workshop-gallery")}
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>

      {/* ================= AWARD DISTRIBUTION ================= */}
      <h2 className="fw-title">Award <span>Distribution</span></h2>

      <div className="fw-card">
        <div className="fw-left">
          <img src={awardImg} alt="Award Distribution" className="fw-img" />
        </div>

        <div className="fw-right">
          <p className="fw-text">
            Honoring outstanding achievements and celebrating excellence among
            students and teams.
          </p>

          <div className="fw-buttons">
            <button
              className="fw-btn-primary"
              onClick={() => navigate("/workshop-gallery")}
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkshop;
