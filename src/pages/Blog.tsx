import { useState } from "react";
import "./Blog.css";
import bgVideo from "../img/Background_videos&img/c2.webm";

// Import videos
import review1 from "../img/Worksho_page/Review1.mp4";
import review2 from "../img/Worksho_page/Review2.mp4";
import review3 from "../img/Worksho_page/Review3.mp4";
import review4 from "../img/Worksho_page/Review4.mp4";
import review5 from "../img/Worksho_page/Review5.mp4";

// Import images
import award1 from "../img/Worksho_page/award3.jpeg";
import award2 from "../img/Worksho_page/award4.jpeg";
import award3 from "../img/Worksho_page/award5.jpeg";

const posts = [
  { id: 1, category: "Journey", title: "Our Journey of ProJenius — From Idea to Impact", desc: "How a small freelancing idea transformed into a student-led tech startup empowering innovation."},
  { id: 2, category: "IoT", title: "Getting Started with IoT: A Beginner’s Guide", desc: "Learn the fundamentals of IoT and build your first connected device." },
  { id: 3, category: "AI & ML", title: "Introduction to Machine Learning for Students", desc: "Demystifying ML concepts for beginners entering intelligent systems."},
  { id: 4, category: "Workshops", title: "Smart India Hackathon: Tips for Success", desc: "Expert strategies to ace hackathons from ideation to presentation." },
  { id: 5, category: "IoT", title: "Building an Ultrasonic Blind Stick", desc: "Step-by-step guide to building an assistive IoT device."},
  { id: 6, category: "Success Stories", title: "From Zero to Web Developer", desc: "How a workshop student became a professional web developer."},

  { id: 7, category: "Reviews", title: "Review Section", desc: "Watch feedback videos from events, workshops & clients"},
  { id: 8, category: "Awards", title: "Awards & Appreciation", desc: "View certificates, awards, recognition & moments" }
];

const reviewVideos = [
  { id: 1, title: "Client Appreciation", src: review1 },
  { id: 2, title: "Workshop Review", src: review2 },
  { id: 3, title: "Student Appreciation", src: review3 },
  { id: 4, title: "Client Appreciation", src: review4 },
  { id: 5, title: "Client Appreciation", src: review5 }
];

const awards = [
  { id: 1, title: "Award recieved with appreciation", img: award1},
  { id: 2, title: "Innovation Recognized on a Bigger Stage", img: award2},
  { id: 3, title: "Appreciation that Inspires Us Forward", img: award3}
];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Journey", "AI & ML", "IoT", "Workshops", "Success Stories", "Reviews", "Awards"];

  const filteredPosts = posts.filter((post) => {
    const matchCat = filter === "All" || post.category === filter;
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="blog-container">
      <video className="blog-bg-video" src={bgVideo} autoPlay muted loop playsInline />
      <div className="blog-overlay" />

      <div className="blog-content">
        <h1 className="blog-title"><span className="highlight">Pro</span>Jenius Blog</h1>
        <p className="blog-subtitle">Stories, learning, innovation, and the journey of a student-led startup.</p>

        <input
          className="search-bar"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="blog-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="blog-card"
              onClick={() => {
                if (post.type === "review") document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
                if (post.type === "award") document.getElementById("awards")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="tag">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.desc}</p>

              {/* ✅ FIX: render meta ONLY when data exists */}
              {post.date && post.read && (
                <div className="meta">
                  {post.date} • {post.read}
                </div>
              )}
            </div>
          ))}
        </div>

        <section className="review-section" id="reviews">
          <h2>Review Videos</h2>
          <div className="video-grid">
            {reviewVideos.map((vid) => (
              <div key={vid.id} className="video-card">
                <video src={vid.src} controls className="review-video" />
                <p>{vid.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="award-section" id="awards">
          <h2>Awards & Appreciation</h2>
          <div className="award-grid">
            {awards.map((award) => (
              <div key={award.id} className="award-card">
                <img src={award.img} alt={award.title} className="award-img"/>
                <h3>{award.title}</h3>
              </div>
            ))}
          </div>

          <div className="appreciation-box">
            <h3>We’re Grateful for the Recognition</h3>
            <p>Every award and appreciation fuels our mission to build impactful real-world tech solutions through ProJenius.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
