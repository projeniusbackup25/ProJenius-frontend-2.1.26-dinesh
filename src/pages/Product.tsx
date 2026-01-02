import React from "react";
import "./Product.css";
import bgVideo from "../img/Background_videos&img/c2.webm";
import ComingImg from "../img/Background_videos&img//coming-soon.png"; // <-- Add your image here
import { FaGraduationCap, FaMicrochip } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductPage: React.FC = () => {
  return (
    <>
      <section className="video-hero">

        {/* Background Video */}
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay + Glow Layer */}
        <div className="video-overlay"></div>
        <div className="particle-layer"></div>

        {/* Centered Content */}
        <div className="hero-center">

          <h1 className="hero-title">
            Welcome to <span>ProJenius</span>
          </h1>

          {/* <p className="hero-subtitle">Build Innovate Deliver</p> */}

          <p className="coming-desc">
          We’re building something powerful — advanced AI modules, interactive learning tools,
          IoT systems, and more. Stay tuned for the next evolution of ProJenius.
        </p>

        {/* <img src={ComingImg} alt="Coming Soon" className="coming-image" /> */}

          {/* <p className="hero-desc">
            Discover our revolutionary learning products designed to transform
            how you learn technology — from AI and IoT to Web Development and more.
          </p> */}

          

          {/* Product Cards */}
          <div className="product-cards">
            <div className="product-card">
              <div className="icon-box">
                <FaGraduationCap />
              </div>
              <h3>EduTech Platform</h3>
              <span className="coming">Coming Soon</span>
              <p>Learn Anywhere. Build Everything.</p>
            </div>

            <div className="product-card">
              <div className="icon-box">
                <FaMicrochip />
              </div>
              <h3>IoT Kit</h3>
              <span className="coming">Coming Soon</span>
              <p>Build Real Projects from Day One.</p>
            </div>

          </div>
          <div className="hero-buttons">
            <Link to="/products/explore">
              <button className="btn-product">Explore Products</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== NEW COMING SOON SECTION ===== */}
      <section className="coming-soon-section">

        

        

      </section>
    </>
  );
};

export default ProductPage;
