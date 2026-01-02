import React, { useState, useEffect } from 'react';
import './ScrollButtons.css';

const ScrollButtons: React.FC = () => {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // Hide buttons at top or bottom
      if (currentScrollY <= 0) {
        setShowUp(false);
      }
      if (currentScrollY + windowHeight >= documentHeight) {
        setShowDown(false);
      }

      // Show up button when scrolling down (not at top)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowUp(true);
        setShowDown(false);
      }
      // Show down button when scrolling up (not at bottom)
      else if (currentScrollY < lastScrollY && currentScrollY + windowHeight < documentHeight - 50) {
        setShowDown(true);
        setShowUp(false);
      }

      setLastScrollY(currentScrollY);

      // Hide both buttons if scrolling stops for 200ms
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setShowUp(false);
        setShowDown(false);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="scroll-buttons-left">
      {showUp && <button className="scroll-btn up" onClick={scrollToTop}>↑</button>}
      {showDown && <button className="scroll-btn down" onClick={scrollToBottom}>↓</button>}
    </div>
  );
};

export default ScrollButtons;
