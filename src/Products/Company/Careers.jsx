/* ─────────────────────────  src/Products/Careers.jsx  ───────────────────────── */
import React, { useState, useEffect } from "react";
import backgroundCareers from "/src/assets/images/black1.jpeg";
import "./Careers.css";

/* ---------- job data ---------- */
const jobListings = [
  {
    team: "Engineering",
    roles: [
      { title: "Head of Security",               location: "North America" },
      { title: "Staff Security Engineer",        location: "North America" },
      { title: "Product Engineer",               location: "North America" },
      { title: "Senior / Staff Frontend Engineer",  location: "North America" },
      { title: "Senior / Staff Fullstack Engineer", location: "North America" },
      { title: "Senior / Staff Product Engineer",   location: "Remote" },
      { title: "Senior / Staff Backend Engineer",   location: "Remote" },
    ],
  },
  {
    team: "Magic Team",
    roles: [{ title: "Creative Lead (Web & Brand)", location: "North America" }],
  },
  {
    team: "Business Operations",
    roles: [{ title: "Head of Marketing", location: "North America" }],
  },
  {
    team: "Product Management",
    roles: [{ title: "Product Manager", location: "Remote, North America" }],
  },
];

/* ---------- component ---------- */
const Careers = () => {
  const [hoveredJob, setHoveredJob] = useState(null);
  const [scrollY, setScrollY]       = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="careers-container">
      {/* ────── Hero Section ────── */}
      <section className="hero-section">
        <div
          className="hero-background"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)),
              url(${backgroundCareers})
            `,
          }}
        />
        <div className="hero-content">
          <div className="brand-icon">
            <div className="icon-grid">
              <div className="icon-square" />
              <div className="icon-square" />
              <div className="icon-square" />
              <div className="icon-square" />
            </div>
          </div>

          <h1 className="hero-title">
            Build the Future
            <span className="title-accent">With Precision</span>
          </h1>

          <p className="hero-description">
            Join our team of architects and engineers crafting next-generation
            tools that combine elegance with uncompromising performance.
          </p>

          <button
            className="cta-button"
            onClick={() =>
              document
                .getElementById("roles")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <span>Explore Opportunities</span>
            <div className="button-arrow">↓</div>
          </button>
        </div>

        <div className="hero-overlay-pattern" />
      </section>

      {/* ────── Roles Section ────── */}
      <section id="roles" className="roles-section">
        <div className="section-header">
          <h2>Open Positions</h2>
          <div className="header-line" />
        </div>

        <div className="roles-container">
          {jobListings.map((group, groupIndex) => (
            <div key={groupIndex} className="team-group">
              <div className="team-header">
                <h3>{group.team}</h3>
                <span className="team-count">
                  {group.roles.length} positions
                </span>
              </div>

              <div className="roles-grid">
                {group.roles.map((job, jobIndex) => (
                  <div
                    key={jobIndex}
                    className={`job-card ${
                      hoveredJob === `${groupIndex}-${jobIndex}` ? "hovered" : ""
                    }`}
                    onMouseEnter={() =>
                      setHoveredJob(`${groupIndex}-${jobIndex}`)
                    }
                    onMouseLeave={() => setHoveredJob(null)}
                  >
                    <div className="job-content">
                      <h4 className="job-title">{job.title}</h4>
                      <p className="job-location">{job.location}</p>
                    </div>

                    <div className="job-action">
                      <button className="apply-button">
                        Apply
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="card-glow" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;
