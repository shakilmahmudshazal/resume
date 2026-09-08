import React from 'react';

export default function BasicInfo() {
  return (
    <aside className="glass-card profile-card">
      {/* Avatar Container with glowing ring */}
      <div className="profile-avatar-wrap">
        <div className="profile-avatar-glow"></div>
        <img
          src="/assets/pp.png"
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
        fontSize: '0.825rem',
        color: 'var(--text-muted)',
        background: 'rgba(255, 255, 255, 0.04)',
        padding: '0.35rem 0.85rem',
        borderRadius: '9999px',
        border: '1px solid var(--border-subtle)',
        marginBottom: '1.25rem'
      }}>
        📍 Echologyx Ltd &bull; 5+ Yrs Exp
      </div>

      {/* Contact Metadata List */}
      <div className="profile-meta-list">
        <div className="profile-meta-item">
          <div className="profile-meta-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div className="profile-meta-content">
            <div className="profile-meta-label">Phone</div>
            <a href="tel:+8801521213911" className="profile-meta-val">
              +880 1521 213 911
            </a>
          </div>
        </div>

        <div className="profile-meta-item">
          <div className="profile-meta-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div className="profile-meta-content">
            <div className="profile-meta-label">Email</div>
            <a href="mailto:shakilcse2019@gmail.com" className="profile-meta-val">
              shakilcse2019@gmail.com
            </a>
          </div>
        </div>

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
      </div>

      {/* Social Links */}
      <div className="profile-socials">
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
          href="https://linkedin.com/in/shakil-mahmud-shazal"
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
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-social-link"
          title="Twitter"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
          </svg>
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-social-link"
          title="Facebook"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
      </div>

      {/* Download Resume Button */}
      <a
        href="/assets/profile.jpg"
        download="Shakil_Mahmud_Resume.pdf"
        className="btn-primary"
        style={{ width: '100%', justifyContent: 'center' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>Download Resume</span>
      </a>
    </aside>
  );
}
