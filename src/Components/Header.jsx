/* ──────────────────────  src/Components/Header.jsx  ────────────────────── */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/src/LandingPage.css";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate       = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try   { setUser(JSON.parse(stored)); }
      catch { localStorage.removeItem("user"); }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/auth");
  };

  return (
    <header className="header">
      {/* ─────── Logo ─────── */}
      <div className="logo">
        <Link to="/">
          <img src="/reconrabbit.jpeg" alt="logo" style={{ width: 30 }} />
        </Link>
      </div>

      {/* ─────── Navigation ─────── */}
      <nav className="navigation">
        <ul>
          {/* PRODUCT ---------- */}
          <li className="nav-item">
            <a href="#" style={{ color: "#ffffff" }}>Product</a>
            <div className="dropdown-menu">
              <div className="dropdown-column">
                <h4>Company</h4>

                <div className="feature-item">
                  <strong>
                    <Link to="/about"   style={{ color: "inherit", textDecoration: "none" }}>
                      About
                    </Link>
                  </strong>
                  <p>Meet the team</p>
                </div>

                <div className="feature-item">
                  <strong>
                    <Link to="/careers" style={{ color: "inherit", textDecoration: "none" }}>
                      Careers
                    </Link>
                  </strong>
                  <p>Job opportunities at Zρ</p>
                </div>
              </div>

              <div className="dropdown-column">
                <h4>Core Features</h4>

                <div className="feature-item">
                  <strong>
                    <Link to="/workspaces" style={{ color: "inherit", textDecoration: "none" }}>
                      Workspaces
                    </Link>
                  </strong>
                  <p>Keep tabs on your life</p>
                </div>

                <div className="feature-item">
                  <strong>
                    <Link to="/comms" style={{ color: "inherit", textDecoration: "none" }}>
                      Communication Hub
                    </Link>
                  </strong>
                  <p>Route emails and sms to workspaces</p>
                </div>

                <div className="feature-item">
                  <strong>
                    <Link to="/pass" style={{ color: "inherit", textDecoration: "none" }}>
                      Password Vault
                    </Link>
                  </strong>
                  <p>Keep track of your passwords</p>
                </div>
              </div>

              <div className="dropdown-column">
                <h4>Auxiliary Features</h4>

                <div className="feature-item">
                  <strong>Data Backup &amp; Recovery</strong>
                  <p>Your information is backed up automatically and safely stored</p>
                </div>

                <div className="feature-item">
                  <strong>Analytics</strong>
                  <p>Carefully monitored analytics to show where your time, energy, and money actually go</p>
                </div>
              </div>
            </div>
          </li>

          {/* RESOURCES ---------- */}
          <li className="nav-item">
            <a href="#" style={{ color: "#ffffff" }}>Resources</a>
            <div className="dropdown-menu">
              <div className="dropdown-column">
                <h4>Mission</h4>

                <div className="feature-item">
                  <strong>
                    <Link to="/whoweare" style={{ color: "inherit", textDecoration: "none" }}>
                      Who We Are
                    </Link>
                  </strong>
                  <p>Learn about our mission and how we aim to help</p>
                </div>

                <div className="feature-item">
                  <strong>Why Us</strong>
                  <p>Find out why our app supports you the best and accelerates your journey</p>
                </div>
              </div>

              <div className="dropdown-column">
                <h4>More</h4>

                <div className="feature-item">
                  <strong>Showcase</strong>
                  <p>Research and Development</p>
                </div>

                <div className="feature-item">
                  <strong>Insights</strong>
                  <p>Realtime analytics</p>
                </div>

                <div className="feature-item">
                  <strong>Recon Asks</strong>
                  <p>Common Q&amp;A</p>
                </div>
              </div>

              <div className="dropdown-column">
                <h4>Integrations</h4>

                <div className="feature-item">
                  <strong>Mobile app</strong>
                  <p>Linear in your pocket</p>
                </div>

                <div className="feature-item">
                  <strong>Changelog</strong>
                  <p>See what's new</p>
                </div>
              </div>
            </div>
          </li>

          {/* PRICING ---------- */}
          <li className="nav-item">
            <Link to="/pricing" style={{ color: "#ffffff", textDecoration: "none" }}>
              Pricing
            </Link>
          </li>

          {/* DOCS ---------- */}
          <li className="nav-item">
            <Link to="/docs" style={{ color: "#ffffff", textDecoration: "none" }}>
              Docs
            </Link>
          </li>

          {/* CONTACT ---------- */}
          <li className="nav-item">
            <Link to="/contact" style={{ color: "#ffffff", textDecoration: "none" }}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* ─────── Auth Buttons ─────── */}
      <div className="auth-buttons">
        {user ? (
          <>
            <Link to="/dashboard" className="login-btn" style={{ textDecoration: "none" }}>
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="signup-btn"
              style={{ background: "none", border: "none", color: "#ffffff", cursor: "pointer", marginLeft: 12 }}
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link to="/auth" className="login-btn" style={{ textDecoration: "none", marginRight: 12 }}>
              Log in
            </Link>

            <Link to="/auth" className="signup-btn" style={{ textDecoration: "none" }}>
              Sign up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
