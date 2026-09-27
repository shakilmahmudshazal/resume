import React from "react";

export default function BasicInfo() {
  return (
    <aside className="glass-card profile-card">
      {/* Avatar Container with glowing ring */}
      <div className="profile-avatar-wrap">
        <div className="profile-avatar-glow"></div>
        <img
          src="/assets/shakil-mahmud.jpg"
          alt="Shakil Mahmud"
          className="profile-avatar-img"
        />
      </div>

      {/* Live Availability Status */}
      <div className="profile-status-badge">
        <span className="status-dot"></span>
        <span>Available for Senior Roles</span>
      </div>

      <h1 className="profile-name">Shakil Mahmud</h1>
      <div className="profile-role">Senior Software Engineer</div>
      
      <div style={{
        fontSize: "0.825rem",
        color: "var(--text-muted)",
        background: "rgba(255, 255, 255, 0.04)",
        padding: "0.35rem 0.85rem",
        borderRadius: "9999px",
        border: "1px solid var(--border-subtle)",
        marginBottom: "1.25rem"
      }}>
        📍 Echologyx Limited &bull; 7+ Yrs Exp (Since 2019)
      </div>

      {/* Contact Metadata List */}
      <div className="profile-meta-list">
        <div className="profile-meta-item">
          <div className="profile-meta-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className="profile-meta-content">
            <div className="profile-meta-label">Location</div>
            <span className="profile-meta-val">
              Dhaka, Bangladesh
            </span>
          </div>
        </div>

        <div className="profile-meta-item">
          <div className="profile-meta-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <div className="profile-meta-content">
            <div className="profile-meta-label">Focus</div>
            <span className="profile-meta-val">
              Full Stack & E-Commerce
            </span>
          </div>
        </div>
      </div>

      {/* Cross-Link to Publication */}
      <div style={{ marginBottom: "1.5rem" }}>
        <a
          href="https://shakilmahmud.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.75rem 1rem",
            borderRadius: "0.85rem",
            background: "rgba(255, 122, 69, 0.08)",
            border: "1px solid rgba(255, 122, 69, 0.25)",
            color: "var(--accent-color)",
            textDecoration: "none",
            fontSize: "0.85rem",
            fontWeight: 600,
            transition: "all 0.2s ease"
          }}
          className="publication-cross-link"
        >
          <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent-color)" }}></span>
            <span>Read My Essays & Publication</span>
          </span>
          <span>&rarr;</span>
        </a>
      </div>

      {/* Social Links */}
      <div className="profile-socials" style={{ marginBottom: 0 }}>
        <a
          href="https://github.com/shakilmahmudshazal"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-social-link"
          title="GitHub"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/md-shakil-37352918b/"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-social-link"
          title="LinkedIn"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

        <a
          href="https://cv.shakilmahmud.com/Shakil_Mahmud_CV.docx"
          download
          className="profile-social-link"
          title="Download CV Document"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </div>
    </aside>
  );
}
