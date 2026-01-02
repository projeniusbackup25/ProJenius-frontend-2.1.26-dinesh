import "./Footer.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
  FaStar,
  FaGoogle,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      // 1️⃣ Save email in MongoDB via LIVE backend (Render)
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Subscription failed.");
        setLoading(false);
        return;
      }

      // 2️⃣ Send confirmation email using EmailJS (FRONTEND)
      await emailjs.send(
        "service_cc9nfaf",
        "template_jzfdhbw",
        { user_email: email },
        "ycC6mxev6DxH2CRFn"
      );

      setStatus("Subscription successful! Check your email 📩");
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* ===== Brand Section ===== */}
        <div className="footer-col">
          <h2 className="brand">
            Pro<span>Jenius</span>
          </h2>
          <p className="tagline">
            Connecting talent with projects, smarter.
          </p>

          <a
            href="https://www.google.com/search?q=projenius+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="google-review"
          >
            <FaGoogle className="google-icon" />
            <div className="review-info">
              <div className="stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <span className="rating-text">4.8 / 5</span>
              <small>100+ Google Reviews</small>
            </div>
          </a>

          <div className="social_media-icons">
            <a href="https://www.instagram.com/projenius_?igsh=MXJwaGhtMWFieHQ4cw==" target="_blank"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/projenius-498444374/" target="_blank"><FaLinkedin /></a>
            <a href="https://chat.whatsapp.com/BA9caXw5J9W3gNrSfiVSBc" target="_blank"><FaWhatsapp /></a>
            <a href="https://youtube.com/@projenius-8" target="_blank"><FaYoutube /></a>
            <a href="mailto:teamprojenius@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        {/* ===== Quick Links ===== */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* ===== Contact ===== */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p><FaEnvelope /> <a href="mailto:teamprojenius@gmail.com">teamprojenius@gmail.com</a></p>
          <p><FaPhoneAlt /> <a href="tel:+918925450473">+91 89254 50473</a></p>
          <p><FaPhoneAlt /> <a href="tel:+919025476322">+91 90254 76322</a></p>
          <p><FaMapMarkerAlt /> Madurai, Tamil Nadu, India</p>
        </div>

        {/* ===== Map ===== */}
        <div className="footer-col">
          <h3>Location</h3>
          <iframe
            src="https://www.google.com/maps?q=Plot+no+3,+Velmurugan+Nagar,+Erikarai+street,+Madurai+16&output=embed"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
            title="Projenius Location"
          />
        </div>

        {/* ===== Newsletter ===== */}
        <div className="footer-col">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter</p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="button" onClick={handleSubscribe} disabled={loading}>
              {loading ? "..." : "➤"}
            </button>
          </div>

          {status && <p className="subscribe-status">{status}</p>}
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 ProJenius. All rights reserved.</p>
        <p>
          <Link to="/privacy">Privacy Policy</Link> |{" "}
          <Link to="/terms">Terms & Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;