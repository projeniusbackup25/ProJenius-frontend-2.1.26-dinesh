import React, { useEffect, useState } from "react";
import "./Showcase.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import client1 from "../img/client_project/client1.jpeg";
import client2 from "../img/client_project/client2.jpg";
import client3 from "../img/client_project/client3.jpeg";
import client4 from "../img/client_project/client4.jpeg";
import client5 from "../img/client_project/client5.jpeg";
import client6 from "../img/client_project/client-6.jpeg";
import client7 from "../img/client_project/client7.jpeg";
import client8 from "../img/client_project/client8.jpeg";
import client9 from "../img/client_project/client9.jpeg";
import client10 from "../img/client_project/client10.png";

const projects = [
  {
    title: "AI-Powered Water Health Monitoring",
    category: "Software",
    description: "Real-time water quality monitoring using AI & sensors.",
    rating: "⭐⭐⭐⭐☆ (4/5)",
    image: client1,
  },
  {
    title: "Road Hazard Detection",
    category: "Software",
    description: "AI accident detection with emergency GPS alerts.",
    rating: "⭐⭐⭐⭐⭐ (5/5)",
    image: client2,
  },
  {
    title: "Smart Waste Management",
    category: "Software",
    description: "Automated wet/dry waste segregation using sensors.",
    rating: "⭐⭐⭐⭐☆ (4/5)",
    image: client3,
  },
  {
    title: "Autonomous Follower Robot",
    category: "Hardware",
    description: "Obstacle-avoiding follower robot for logistics.",
    rating: "⭐⭐⭐⭐⭐ (5/5)",
    image: client4,
  },
  {
    title: "Smart Hospital Access",
    category: "Software",
    description: "Smart parking & emergency navigation system.",
    rating: "⭐⭐⭐⭐⭐ (5/5)",
    image: client5,
  },
  {
    title: "Intelligent Commodity System",
    category: "Software & Hardware",
    description: "IoT-based automated ration distribution.",
    rating: "⭐⭐⭐⭐☆ (4/5)",
    image: client6,
  },
 {
  title: "Helminth Egg Detection Poster",
  category: "Medical Conference Poster",
  description: "A detailed scientific poster presenting helminth egg identification in dog fecal samples. Designed for medical and veterinary conferences, it highlights zoonotic risks, diagnostic methods, microscopic findings, and One Health relevance.",
  rating: "⭐⭐⭐⭐⭐ (5/5)",
  image: client7,
},
{
  title: "Buffalo Calf Parasitic Infection Case Report Poster",
  category: "Medical Conference Poster",
  description: "A visually structured medical conference poster documenting a parasitic co-infection in a buffalo calf. Includes clinical observations, diagnostic techniques, microscopic images, treatment analysis, and research outcomes for veterinary audiences.",
  rating: "⭐⭐⭐⭐⭐ (5/5)",
  image: client8,
},

  {
  title: "Gold Savings Mobile App UI/UX",
  category: "App Development",
  description: "A modern and intuitive mobile application designed for seamless gold saving, secure digital deposits, and user-friendly financial tracking.",
  rating: "⭐⭐⭐⭐⭐ (5/5)",
  image: client9,
},
{
  title: "Entrepreneurship Training Platform",
  category: "Web Development",
  description: "A responsive website crafted for a technology foundation, offering entrepreneurship programs, startup incubation features, and easy mobile navigation.",
  rating: "⭐⭐⭐⭐⭐ (5/5)",
  image: client10,
},
];

const Showcase: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const total = projects.length;

  useEffect(() => {
    setFlipped(false);
    const flipTimer = setTimeout(() => setFlipped(true), 3000);
    return () => clearTimeout(flipTimer);
  }, [index]);

  useEffect(() => {
    const slideTimer = setTimeout(
      () => setIndex((prev) => (prev + 1) % total),
      5500
    );
    return () => clearTimeout(slideTimer);
  }, [index, total]);

  const next = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % total);
  };

  const prev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + total) % total);
  };

  return (
    <section className="projects-section-wrapper">
      <div className="dual-scroll">
        <div className="scroll-content">

          <h2 className="showcase-title">
            Our <span>Project</span> Showcase
          </h2>

          {/* ARROWS LAYER */}
          <div className="carousel-arrows">
            <button className="arrow-button left" onClick={prev}>
              <FaChevronLeft />
            </button>
            <button className="arrow-button right" onClick={next}>
              <FaChevronRight />
            </button>
          </div>

          {/* CAROUSEL */}
          <div className="project-carousel">
            {projects.map((project, i) => {
              let offset = i - index;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const isActive = offset === 0;

              return (
                <div
                  key={i}
                  className="project-card"
                  style={{
                    transform: `
                      translateX(${offset * 320}px)
                      scale(${isActive ? 1 : 0.85})
                    `,
                    zIndex: 5 - Math.abs(offset),
                    opacity: Math.abs(offset) > 2 ? 0 : 1,
                  }}
                >
                  <div
                    className={`project-card-inner ${
                      isActive && flipped ? "flipped" : ""
                    }`}
                  >
                    <div className="project-card-front">
                      <img src={project.image} alt={project.title} />
                      <div className="project-title">{project.title}</div>
                    </div>

                    <div className="project-card-back">
                      <h3>{project.title}</h3>
                      <p className="category">{project.category}</p>
                      <p>{project.description}</p>
                      <p className="rating">{project.rating}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Showcase;