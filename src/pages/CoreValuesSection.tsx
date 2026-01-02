import React, { useEffect } from 'react';
import { FaLightbulb, FaHandshake, FaRocket, FaRobot,FaCogs } from 'react-icons/fa';
import AOS from 'aos';               // Import AOS JS
import 'aos/dist/aos.css';          // Import AOS CSS
import './CoreValuesSection.css';

const coreValues = [
  {
    icon2: <FaLightbulb />,
    title: 'Innovation',
    description:
      'We drive innovation by embracing new ideas and modern technologies to build smart, scalable, and efficient digital solutions that meet evolving business and user needs.',
  },
  {
    icon2: <FaHandshake />,
    title: 'Trust & Transparency',
    description:
      'We foster long-term partnerships through transparent communication, ethical practices, and trust-driven collaboration, keeping clients informed and confident at every stage.',
  },
  {
    icon2: <FaRocket />,
    title: 'Speed & Agility',
    description:
      'We deliver high-quality solutions with speed and agility, adapting quickly to change while ensuring efficiency, reliability, and on-time project execution.',
  },

  {
    icon2: <FaCogs />,
    title: 'Client-Centric Development ',
    description:
      'We focus on client-centric development by delivering personalized, outcome-driven solutions through hands-on projects, workshops, training programs, and internships.',
  },
];

const CoreValuesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,  // animation duration in ms (0.5 to 0.7s as you wanted)
      once: true,     // animation triggers only once per element
    });
  }, []);

  return (
    <section className="core-values-section">
      <h2 className="core-values-title">Our Core Values</h2>
      <div className="core-values-grid">
        {coreValues.map((value, index) => (
          <div
            className="core-value-card"
            key={index}
            data-aos="fade-up"            // <-- AOS animation attribute here
          >
            <div className="icon2">{value.icon2}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;
