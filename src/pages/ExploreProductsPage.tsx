import React from "react";
import { Link } from "react-router-dom";
import "./ExploreProducts.css";
import bgVideo from "../img/Background_videos&img/c2.webm"; // <-- add your video here

export default function ExploreProductsPage() {
  return (
    <div className="explore-container">

      {/* Background Video */}
      <video
        className="explore-bg-video"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="explore-overlay" />

      {/* Page Content */}
      <div className="explore-content">

        {/* Header */}
        <section className="explore-header">
          <p className="breadcrumb">Product Catalog</p>
          <h1>Our <span>Products</span></h1>
          <p className="subtitle">
            We're building products that empower learners and innovators.
            From digital courses to hands-on technology kits — discover tools
            designed for real-world learning.
          </p>
        </section>

        {/* Product Cards */}
        <section className="product-row">

          <div className="product-card">
            <p className="tag">Coming Soon</p>
            <h2>ProJenius EduTech Platform</h2>
            <p className="card-desc">
              A supportive online learning platform with structured courses,
              community support, downloadable resources, and dashboards.
            </p>

            <ul className="features">
              <li>✔ Live / Recorded Classes</li>
              <li>✔ Course Progress Tracking</li>
              <li>✔ Notes & PDFs</li>
              <li>✔ Interactive Assignments</li>
              <li>✔ Student Dashboard</li>
            </ul>

            <button className="btn-secondary">
              Join Early Access
            </button>
          </div>

          <div className="product-card">
            <p className="tag">Coming Soon</p>
            <h2>ProJenius IoT Kit</h2>
            <p className="card-desc">
              A hands-on IoT kit combining hardware modules,
              cloud connectivity, and guided project learning.
            </p>

            <ul className="features">
              <li>✔ Sensors & Modules</li>
              <li>✔ Arduino + NodeMCU</li>
              <li>✔ Step-by-step videos</li>
              <li>✔ Project-based learning</li>
              <li>✔ QR-linked guides</li>
            </ul>

            <button className="btn-secondary">
              Pre-order Interest
            </button>
          </div>

        </section>

        {/* Development */}
        <section className="development-box">
          <p className="dev-title">Currently Under Development</p>
          <p className="progress">🚧 Launching Soon — Stay Tuned</p>
        </section>

        {/* FAQ */}
        <section className="faq">
          <h2>Frequently Asked <span>Questions</span></h2>

          <details>
            <summary>When will the products launch?</summary>
            <p>We will announce release dates once development is complete.</p>
          </details>

          <details>
            <summary>How can users pre-register?</summary>
            <p>Pre-registration will open soon on our website.</p>
          </details>

          <details>
            <summary>Will pricing be student-friendly?</summary>
            <p>Yes, affordability for students is a key goal.</p>
          </details>
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Ready to Start Your <span>Learning Journey?</span></h2>
          <p>Reach out to us for guidance, inquiries, or collaborations.</p>

          <Link to="/contact">
            <button className="btn-primary">Go to Contact Page</button>
          </Link>
        </section>

      </div>
    </div>
  );
}
