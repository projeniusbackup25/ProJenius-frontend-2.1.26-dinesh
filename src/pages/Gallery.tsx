import React, { useEffect, useRef, useState } from "react";
import "./Gallery.css";

/* ===== IMAGES (UNCHANGED) ===== */
// Awards & Recognition
import award1 from "../img/Worksho_page/award1.jpeg";
import award2 from "../img/Worksho_page/award2.jpeg";

// Career & Mentoring
import careerGuidance from "../img/Worksho_page/career guidance.jpeg";
import mentoring from "../img/Worksho_page/mentoring.jpeg";

// SRM Workshops
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

// Poster
import srmPoster from "../img/Worksho_page/SRM Poster.jpeg";

/* ===== DATA ===== */
const galleryItems = [
  { id: 1, title: "Honouring Excellence", description: "Awards Ceremony", image: award1 },
  { id: 2, title: "Achievement Recognition", description: "Student Awards", image: award2 },
  { id: 3, title: "Career Guidance Session", description: "Expert Talk", image: careerGuidance },
  { id: 4, title: "Student Mentoring Program", description: "Mentoring Support", image: mentoring },
  { id: 5, title: "SRM Hands-on Workshop", description: "Technical Training", image: srm1 },
  { id: 6, title: "Interactive Learning Session", description: "Lab Session", image: srm2 },
  { id: 7, title: "Collaborative Lab Session", description: "Group Work", image: srm3 },
  { id: 8, title: "Live Technical Demonstration", description: "Workshop Demo", image: srm5 },
  { id: 9, title: "Problem-Solving Workshop", description: "Skill Session", image: srm6 },
  { id: 10, title: "Knowledge Sharing Session", description: "Student Session", image: srm7 },
  { id: 11, title: "Practical Training Program", description: "Practice Session", image: srm8 },
  { id: 12, title: "Team-Based Learning", description: "Team Activity", image: srm9 },
  { id: 13, title: "Advanced Skill Workshop", description: "Expert Session", image: srm10 },
  { id: 14, title: "Faculty Interaction Session", description: "Q&A Session", image: srm11 },
  { id: 15, title: "Student Presentation Activity", description: "Presentation", image: srm12 },
  { id: 16, title: "Hands-on Practice Session", description: "Learning", image: srm13 },
  { id: 17, title: "Workshop Group Photo", description: "Memories", image: srm14 },
  { id: 18, title: "Closing Ceremony Moments", description: "Ceremony", image: srm15 },
  { id: 19, title: "SRM Workshop Poster", description: "Event Poster", image: srmPoster }
];

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(false); // reset
          requestAnimationFrame(() => setActive(true));
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="gallery-section">
      <h2 className="gallery-title">
        Our <span>Gallery</span>
      </h2>

      <div className={`gallery-grid ${active ? "loaded" : ""}`}>
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`gallery-item ${index % 2 === 0 ? "from-left" : "from-right"}`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <img src={item.image} alt={item.title} />
            <div className="gallery-overlay">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
