import React, { useRef } from "react";
import "./WorkshopPage.css";
import bgVideo from "../img/Background_videos&img/c2.webm";
import FeaturedWorkshop from "../components/FeaturedWorkshop.tsx";
import Gallery from "./Gallery.tsx";

const Workshop: React.FC = () => {
  const featureRef = useRef<HTMLDivElement | null>(null);

  const scrollToFeatured = () => {
    featureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="work-section">

        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="work-overlay"></div>

        <div className="work-center">
          <h2 className="work-title">
            Where <span>Learning</span><br />
            Comes <span>Alive</span>
          </h2>

          <p className="work-description">
            We transform classrooms into innovation hubs through hands-on
            workshops that ignite curiosity, build skills, and create
            lasting memories.
          </p>

          <div className="work-buttons">
            <button className="btn-primary" onClick={scrollToFeatured}>
              Explore Our Workshops
            </button>
          </div>
        </div>
      </section>

      {/* ===== Featured Workshop Section ===== */}
      <div ref={featureRef}>
        <FeaturedWorkshop />
      </div>
      <Gallery/>
    </>
  );
};

export default Workshop;
