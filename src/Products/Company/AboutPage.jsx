// AboutPage.jsx
import React from "react";
import "./AboutPage.css";

const AboutPage = () => (
  <div className="about-container">
    <header className="about-header">
      <h1 className="main-heading">Reconrabbit is Redefining Control</h1>
      <div className="screenshot-placeholder"></div>
    </header>

    <section className="intro-section">
      <h2>"The most precious resource we all have is time." Jobs</h2>
      <p>
        Modern productivity apps are all scattered. There is no consistency
        between apps and consolidation. Reconrabbit removes all the clutter and
        separates your life into clear, dedicated workspaces — Work, Personal,
        Freelance, Education — each with its own emails, passwords, contacts,
        analytics, notifications, and quick-access tools. No more scattered
        tabs, lost logins, or forgotten tasks.
      </p>
    </section>

    <section className="team-section">
      <h2>Because time is too expensive to waste.</h2>
      <p>
        Reconrabbit was born from a love of saving the most precious resource.
        We value user experience, consistent improvement, and efficiency. We are
        a small, focused team distributed across the world, united by a shared
        passion for self-improvement and efficiency.
      </p>
      <div
        className="founders"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img
          src="src/assets/images/founder.jpg"
          alt="Founders"
          style={{ maxWidth: "300px", width: "100%", borderRadius: "0.5rem" }}
        />
        <p className="caption">Reconrabbit founder David Ren</p>
      </div>
    </section>
  </div>
);

export default AboutPage;
