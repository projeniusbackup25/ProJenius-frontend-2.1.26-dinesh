import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import Showcase from "./Showcase.tsx";
import "./Home.css";
import robotImg from "../img/Background_videos&img/robot.png";
import robo from "../img/Background_videos&img/robotvideo.webm";
import particle from "../img/Background_videos&img/c2.webm";
import {
  FaFileAlt,
  FaUserTie,
  FaHandshake,
  FaMoneyBillWave,
  FaMoneyCheckAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaMicrochip,
  FaPaintBrush,
  FaComments,
  FaBrain,
  FaVideo,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hasMounted = useRef(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const topCategoriesRef = useRef(null);

  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [visibleCategoryCards, setVisibleCategoryCards] = useState<number[]>([]);

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const flipCard = (id: number) => {
    const card = document.getElementById(`card-${id}`);
    card?.classList.toggle("flipped");
  };

  useEffect(() => {
    if (hasMounted.current) {
      if (location.hash === "#how-it-works") {
        const el = document.getElementById("how-it-works");
        el?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      hasMounted.current = true;
    }

    const cards = sectionRef.current?.querySelectorAll(".step-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!cards) return;
          const index = Array.from(cards).indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cards?.forEach((card) => observer.observe(card));

    const categoryCards = (topCategoriesRef.current as HTMLElement | null)?.querySelectorAll(".animated-card");
    const categoryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!categoryCards) return;
          const index = Array.from(categoryCards).indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleCategoryCards((prev) => [...new Set([...prev, index])]);
            categoryObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    categoryCards?.forEach((card) => categoryObserver.observe(card));

    return () => {
      observer.disconnect();
      categoryObserver.disconnect();
    };
  }, [location]);

  const secondRowRef = useRef<HTMLDivElement | null>(null);
  const [secondRowVisible, setSecondRowVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSecondRowVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (secondRowRef.current) {
      observer.observe(secondRowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* Background Spline */}
      <video
  className="particle-video"
  src={particle}
  autoPlay
  loop
  muted
  playsInline
></video>


      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "3rem 5%",
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
          background: "none",
        }}
      >
        {/* Left */}
        <div className="hero-left" style={{ flex: 1, color: "#fff", marginBottom: "85px" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
            Find the Right <br />
            <span style={{ color: "#00fff2" }}>Talent.</span> <br />
            Deliver the Right <br />
            <span style={{ color: "#00fff2" }}>Project.</span>
          </h1>

          <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
            Connecting <span style={{ color: "#00fff2" }}>Top</span> talent with visionary clients to bring
            <span style={{ color: "#00fff2" }}> ideas</span> to life.
          </p>

          <div className="hero-buttons" style={{ display: "flex", gap: "1rem" }}>
            <a
              href="https://wa.me/918925450473?text=Hey%20Projenius%20Team%2C%20I%20need%20support%20on%20developing%20my%20project%21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-primary">Get Started</button>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — NOW VIDEO (replacing Spline robot) */}
        <div className="hero-right">
          <video
            src={robo}
            autoPlay
            loop
            muted
            playsInline
            className="robot-video"
          />
        </div>
      </div>

      {/* How it works */}
      <section id="how-it-works" className="how-it-works" ref={sectionRef}>
        <div className="how-it-works-wrapper">
          <h2 className="section-title1">
            How <span style={{ color: "#00fff2" }}>ProJenius</span> Works
          </h2>
          <img src={robotImg} className="running-robot" alt="Running Robot" />

          <div className="steps-grid">
            {[
              {
                icon: <FaFileAlt size={34} color="#00fff2" />,
                title: "1. Post a Project",
                desc: "Clearly describe what you need done, your budget, and timeline.",
              },
              {
                icon: <FaMoneyCheckAlt size={34} color="#00fff2" />,
                title: "2. Confirm Project & Make Advance",
                desc: "Discuss your requirements clearly with our team and confirm all terms. Pay the 35% advance along with hardware costs (if any) to start the project.",
              },
              {
                icon: <FaComments size={34} color="#00fff2" />,
                title: "3. Collaborate & Track Progress",
                desc: "Work closely with us, provide timely feedback, and track the progress. We’ll keep you updated throughout the process.",
              },
              {
                icon: <FaMoneyBillWave size={34} color="#00fff2" />,
                title: "4. Pay Securely",
                desc: "Release payment only when you are 100% satisfied with the work.",
              },
            ].map((step, i) => (
              <div key={i} className={`step-card delay-${i + 1} ${visibleCards.includes(i) ? "animate" : ""}`}>
                <div className="icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="top-categories">
        <h2>
          Browse <span style={{ color: "#00fff2" }}>Top</span> Categories
        </h2>

        {/* First Row */}
        <div ref={secondRowRef} className={`services-grid second-row ${secondRowVisible ? "fade-in" : "hidden"}`}>
          <div className="service-card">
            <div className="icon1">
              <FaLaptopCode size={34} color="#00fff2" />
            </div>
            <h3>Web Development</h3>
          </div>

          <div className="service-card">
            <div className="icon1">
              <FaMobileAlt size={34} color="#00fff2" />
            </div>
            <h3>App Development</h3>
          </div>

          <div className="service-card">
            <div className="icon1">
              <FaMicrochip size={34} color="#00fff2" />
            </div>
            <h3>IoT Projects</h3>
          </div>
        </div>

        {/* Second Row */}
        <div ref={secondRowRef} className={`services-grid second-row ${secondRowVisible ? "fade-in" : "hidden"}`}>
          <div className="service-card">
            <div className="icon1">
              <FaPaintBrush size={34} color="#00fff2" />
            </div>
            <h3>Graphic Designing</h3>
          </div>

          <div className="service-card">
            <div className="icon1">
              <FaBrain size={34} color="#00fff2" />
            </div>
            <h3>ML Projects</h3>
          </div>

          <div className="service-card">
            <div className="icon1">
              <FaVideo size={34} color="#00fff2" />
            </div>
            <h3>Video Editing</h3>
          </div>
        </div>
      </section>

      <Showcase />
      
    </>
  );
};

export default Home;