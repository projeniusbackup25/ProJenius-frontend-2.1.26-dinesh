// App.tsx
import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

// Pages
import Home from './pages/Home.tsx';
import AboutUsSection from './pages/AboutUsSection.tsx';
import ContactPage from './pages/Contact.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import Courses from './pages/CoursesPage.tsx';
import Workshop from './pages/WorkshopPage.tsx';
import Product from './pages/Product.tsx';
import MagazineSection from './pages/Magazine.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfService from './pages/TermsOfServices.tsx';
import ExploreProductsPage from './pages/ExploreProductsPage.tsx';
import WorkshopGallery from "./pages/WorkshopGallery.tsx";
import Blog from './pages/Blog.tsx';
import ExplorePage from './pages/Explorepage.tsx';

// Components
import Navbar from './components/NavBar.tsx';
import Footer from './components/Footer.tsx';
import FloatingChatIcon from './components/FloatingChatIcon.tsx';
import ChatBot from './components/ChatBot.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import ScrollButtons from './components/ScrollButtons.tsx';
import PosterPopup from './components/PosterPopup.tsx';

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const App: React.FC = () => {

  /* Google Translate */
  useEffect(() => {
    const initGoogleTranslate = () => {
      if (!document.getElementById("google_translate_element")) return;

      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    if (!window.google || !window.google.translate) {
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
        window.googleTranslateElementInit = initGoogleTranslate;
      }
    } else {
      initGoogleTranslate();
    }
  }, []);

  return (
    <>
      {/* Scroll to top on every route change */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/classes" element={<ExplorePage />} />
          <Route path="/workshops" element={<Workshop />} />
          <Route path="/workshop-gallery" element={<WorkshopGallery />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/explore" element={<ExploreProductsPage />} />
          <Route path="/magazine" element={<MagazineSection />} />
          <Route path="/chatbot" element={<ChatBot onClose={() => {}} />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      {/* Popup */}
      <PosterPopup />

      {/* Floating Components */}
      <FloatingChatIcon />
      <ScrollButtons />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
