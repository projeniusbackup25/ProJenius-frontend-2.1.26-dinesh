import React, { useState, useRef, forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page } from "react-pdf";

import magazineFile from "../img/Magazine/magazine.pdf"; 
import flipSoundFile from "../img/Magazine/page-flip-01a.mp3"; 
import "./Magazine.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PageElement = forwardRef<HTMLDivElement, { pageNumber: number, width: number }>((props, ref) => {
  return (
    <div className="page-content" ref={ref}>
      <Page 
        pageNumber={props.pageNumber} 
        width={props.width} 
        renderAnnotationLayer={false} 
        renderTextLayer={false}
      />
    </div>
  );
});

const MagazineSection: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const bookRef = useRef<any>(null);

  /* --- LARGE BOOK SIZES --- */
  const bookWidth = 600;  // Increased for better visibility
  const bookHeight = 800; // Increased for better visibility

  const playTurnSound = () => {
    const audio = new Audio(flipSoundFile);
    audio.play().catch(() => {});
  };

  const onPageFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const handleNext = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
      playTurnSound(); 
    }
  };

  const handlePrev = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
      playTurnSound();
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <section className="magazine-container">
      <div className="magazine-grid">
        
        {/* LEFT: THE LARGE BOOK */}
        <div className="magazine-visual">
          <div className="book-shadow-wrapper">
            <Document file={magazineFile} onLoadSuccess={onDocumentLoadSuccess}>
              {numPages && (
                <HTMLFlipBook 
                  width={bookWidth} 
                  height={bookHeight} 
                  size="stretch"
                  className="magazine-book"
                  ref={bookRef}
                  showCover={true}
                  useMouseEvents={true}
                  onFlip={onPageFlip}
                >
                  {Array.from(new Array(numPages), (_, index) => (
                    <PageElement key={index} pageNumber={index + 1} width={bookWidth} />
                  ))}
                </HTMLFlipBook>
              )}
            </Document>
          </div>
          
          {/* NAVIGATION - FIXED FOR PERMANENT VISIBILITY */}
          <div className="magazine-controls-pill">
            <button className="nav-arrow-btn" onClick={handlePrev}>‹</button>
            <span className="page-indicator-text">
              {currentPage + 1} / {numPages || 0}
            </span>
            <button className="nav-arrow-btn" onClick={handleNext}>›</button>
          </div>
        </div>

        {/* RIGHT: MEDIUM SIZE CONTENT */}
        <div className="magazine-info">
          <h2 className="hero-text-medium">
            We Create With <br/>
            <span className="cyan-text">Purpose</span>
          </h2>
          <p className="hero-subtext-medium">
            A collective of designers, thinkers, and makers dedicated to crafting 
            meaningful experiences. Explore our creative journey through the pages.
          </p>
          <a href={magazineFile} download className="download-mag-btn-new">
             <div className="btn-icon-circle">↓</div> Download Magazine
          </a>
        </div>
      </div>
    </section>
  );
};

export default MagazineSection;