import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PosterPopup.css";

const PosterPopup: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 7000); // ⏱ 7 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const handleRedirect = () => {
    setVisible(false);
    navigate("/contact");
  };

  return (
    <div className="poster-overlay">
      <div className="poster-container">
        {/* ❌ Close Button */}
        <button
          className="poster-close"
          onClick={() => setVisible(false)}
          aria-label="Close poster"
        >
          ✕
        </button>

        {/* 🖼 Clickable Poster */}
        <img
          src="/poster.jpeg"
          alt="Contact Us Poster"
          className="poster-image"
          onClick={handleRedirect}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default PosterPopup;
