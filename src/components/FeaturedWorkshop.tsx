import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturedWorkshop.css";

import workshopImg from "../img/Worksho_page/SRM.jpeg";
import careerImg from "../img/Worksho_page/career guidance.jpeg";
import mentoringImg from "../img/Worksho_page/mentoring.jpeg";
import awardImg from "../img/Worksho_page/award1.jpeg";

import bgVideo from "../img/Background_videos&img/c2.webm"; // ✅ ADD YOUR VIDEO HERE

const FeaturedWorkshop: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ================= BACKGROUND VIDEO ================= */}
      <div className="fw-bg-video-wrapper">
        <video
          className="fw-bg-video"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="fw-bg-overlay"></div>

      {/* ================= CONTENT ================= */}
      <section className="featured-workshop">

        {/* ================= SRM WORKSHOP ================= */}
        <div className="fw-block">
          <p className="fw-label">Featured Event</p>

          <h2 className="fw-title">
            SRM Chennai <span>Workshop</span>
          </h2>

          <p className="fw-subtitle">
            A large-scale hands-on workshop where 200+ students explored innovation,
            teamwork, and real-world problem solving.
          </p>

          <div className="fw-card">
            <div className="fw-left">
              <img src={workshopImg} alt="SRM Workshop" className="fw-img" />
            </div>

            <div className="fw-right">
              <div className="fw-tags">
                <span className="fw-tag">⭐ Flagship</span>
                <span className="fw-tag">👥 200+ Students</span>
              </div>

              <h3 className="fw-heading">
                Building the Future, One Project at a Time
              </h3>

              <p className="fw-text">
                Students engaged in live demos, project building, and collaborative
                learning under expert guidance.
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
        </div>

        {/* ================= CAREER GUIDANCE ================= */}
        <div className="fw-block">
          <h2 className="fw-title">
            Career <span>Guidance</span>
          </h2>

          <div className="fw-card reverse">
            <div className="fw-left">
              <img src={careerImg} alt="Career Guidance" className="fw-img" />
            </div>

            <div className="fw-right">
              <div className="fw-tags">
                <span className="fw-tag">🎯 Career Planning</span>
                <span className="fw-tag">💼 Industry Insights</span>
              </div>

              <h3 className="fw-heading">
                Shaping Careers with Clarity & Confidence
              </h3>

              <p className="fw-text">
                Students received expert advice on career paths, emerging technologies,
                and industry expectations.
              </p>

              <div className="fw-info">
                <span>📍 University Campuses</span>
                <span>🕒 Interactive Sessions</span>
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
        </div>

        {/* ================= MENTORING ================= */}
        <div className="fw-block">
          <h2 className="fw-title">
            Mentoring <span>Program</span>
          </h2>

          <div className="fw-card">
            <div className="fw-left">
              <img src={mentoringImg} alt="Mentoring Program" className="fw-img" />
            </div>

            <div className="fw-right">
              <div className="fw-tags">
                <span className="fw-tag">🤝 1-on-1</span>
                <span className="fw-tag">📈 Skill Growth</span>
              </div>

              <h3 className="fw-heading">
                Personalized Guidance for Long-Term Growth
              </h3>

              <p className="fw-text">
                One-on-one mentoring helped students develop leadership, technical
                skills, and professional confidence.
              </p>

              <div className="fw-info">
                <span>📍 Hybrid Mode</span>
                <span>🕒 Ongoing Support</span>
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
        </div>

        {/* ================= AWARD ================= */}
        <div className="fw-block">
          <h2 className="fw-title">
            Award <span>Distribution</span>
          </h2>

          <div className="fw-card reverse">
            <div className="fw-left">
              <img src={awardImg} alt="Award Distribution" className="fw-img" />
            </div>

            <div className="fw-right">
              <div className="fw-tags">
                <span className="fw-tag">🏆 Excellence</span>
                <span className="fw-tag">🎉 Recognition</span>
              </div>

              <h3 className="fw-heading">
                Celebrating Talent & Achievement
              </h3>

              <p className="fw-text">
                Outstanding performers and teams were recognized for innovation,
                dedication, and excellence.
              </p>

              <div className="fw-info">
                <span>📍 Workshop Venues</span>
                <span>🕒 Closing Ceremony</span>
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
        </div>

      </section>
    </>
  );
};

export default FeaturedWorkshop;
