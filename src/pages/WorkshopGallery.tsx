import React, { useState } from "react";
import "./WorkshopGallery.css";

import bgVideo from "../img/Background_videos&img/c2.webm";

// ================= IMAGES =================

// Awards & Recognition
import award1 from "../img/Worksho_page/award1.jpeg";
import award2 from "../img/Worksho_page/award2.jpeg";

// Career & Mentoring
import careerGuidance from "../img/Worksho_page/career guidance.jpeg";
import mentoring from "../img/Worksho_page/mentoring.jpeg";

// SRM Workshops & Sessions
import srm1 from "../img/Worksho_page/SRM.jpeg";
import srm2 from "../img/Worksho_page/SRM1.jpeg";
import srm3 from "../img/Worksho_page/SRM2.jpeg";
import srm5 from "../img/Worksho_page/SRM4.jpeg";
import srm6 from "../img/Worksho_page/SRM5.jpeg";
import srm7 from "../img/Worksho_page/SRM6.jpeg";
import srm8 from "../img/Worksho_page/SRM7.jpeg";
import srm9 from "../img/Worksho_page/SRM8.jpeg";
import srm10 from "../img/Worksho_page/SRM9.jpeg";
import srm11 from "../img/Worksho_page/SRM10.jpeg";
import srm12 from "../img/Worksho_page/SRM11.jpeg";
import srm13 from "../img/Worksho_page/SRM12.jpeg";
import srm14 from "../img/Worksho_page/SRM13.jpeg";
import srm15 from "../img/Worksho_page/SRM14.jpeg";

// Posters
import srmPoster from "../img/Worksho_page/SRM Poster.jpeg";

// Reviews (videos)
import review1 from "../img/Worksho_page/Review1.mp4";
import review2 from "../img/Worksho_page/Review2.mp4";
import review3 from "../img/Worksho_page/Review3.mp4";

// ================= CATEGORIES =================

const categories = [
  "All",
  "Workshop",
  "Career Guidance",
  "Mentoring",
  "Awards",
  "Review",
];

// ================= GALLERY DATA =================

const galleryItems = [
  { title: "Honouring Excellence", tag: "Awards", media: award1 },
  { title: "Achievement Recognition", tag: "Awards", media: award2 },

  { title: "Career Guidance Session", tag: "Career Guidance", media: careerGuidance },
  { title: "Student Mentoring Program", tag: "Mentoring", media: mentoring },

  { title: "SRM Hands-on Workshop", tag: "Workshop", media: srm1 },
  { title: "Interactive Learning Session", tag: "Workshop", media: srm2 },
  
  { title: "Live Technical Demonstration", tag: "Workshop", media: srm5 },
  { title: "Problem-Solving Workshop", tag: "Workshop", media: srm6 },
  { title: "Knowledge Sharing Session", tag: "Workshop", media: srm7 },
  { title: "Practical Training Program", tag: "Workshop", media: srm8 },
  { title: "Team-Based Learning", tag: "Workshop", media: srm9 },
  { title: "Collaborative Lab Session", tag: "Workshop", media: srm3 },
  { title: "Advanced Skill Workshop", tag: "Workshop", media: srm10 },
  { title: "Faculty Interaction Session", tag: "Workshop", media: srm11 },
  { title: "Student Presentation Activity", tag: "Workshop", media: srm12 },
  { title: "Hands-on Practice Session", tag: "Workshop", media: srm13 },
  { title: "Workshop Group Photo", tag: "Workshop", media: srm14 },
  { title: "Closing Ceremony Moments", tag: "Workshop", media: srm15 },

  { title: "SRM Workshop Poster", tag: "Workshop", media: srmPoster },

  { title: "Student Review", tag: "Review", media: review1 },
  { title: "Workshop Experience", tag: "Review", media: review2 },
  { title: "Participant Testimonial", tag: "Review", media: review3 },
];

// ================= COMPONENT =================

const WorkshopGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGallery = galleryItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.tag === activeCategory;

    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="gallery-page">
      {/* Background Video */}
      <video className="gallery-bg-video" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/webm" />
      </video>

      <div className="gallery-bg-overlay" />

      <div className="gallery-container">
        <h2 className="gallery-title">
          Workshop <span>Gallery</span>
        </h2>

        <p className="gallery-subtitle">
          Moments captured across our workshops — learning, achievements, and memories.
        </p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search gallery..."
          className="gallery-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Filters */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="gallery-grid">
          {filteredGallery.map((item, index) => (
            <div className="gallery-card" key={index}>
              {item.media.endsWith(".mp4") ? (
                <video
                  src={item.media}
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className="gallery-video"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
              ) : (
                <img src={item.media} alt={item.title} />
              )}

              <div className="card-overlay">
                <span className="card-tag">{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <p style={{ marginTop: "40px", opacity: 0.6 }}>
            No results found
          </p>
        )}
      </div>
    </section>
  );
};

export default WorkshopGallery;
