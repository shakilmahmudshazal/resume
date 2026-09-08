'use client';

import React, { useState } from 'react';
import TitleBar from '@/components/title';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mdshakilmahmud517@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  return (
    <div>
      <TitleBar
        title="Get In Touch"
        subtitle="Available for Senior Fullstack Engineering roles, technical architecture consulting, and high-impact web development."
        icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        }
      />

      <div className="contact-grid">
        {/* Left Column: Direct Contact Info */}
        <div className="contact-info-panel">
          {/* Availability Status Card */}
          <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <span className="status-dot"></span>
              <span style={{
                fontSize: '0.775rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-emerald)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Open for Senior Opportunities
              </span>
            </div>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              I am open to discussing senior software engineering opportunities, technical advisory, high-performance web applications, and developer mentorship.
            </p>
          </div>

          {/* Email Channel */}
          <div className="contact-channel-card">
            <div className="contact-channel-left">
              <div className="contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <div className="contact-channel-label">Primary Email</div>
                <a href="mailto:mdshakilmahmud517@gmail.com" className="contact-channel-val">
                  mdshakilmahmud517@gmail.com
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="copy-btn"
              title="Copy Email to Clipboard"
            >
              {copied ? "Copied! ✓" : "Copy"}
            </button>
          </div>

          {/* Secondary Email Channel */}
          <div className="contact-channel-card">
            <div className="contact-channel-left">
              <div className="contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <div className="contact-channel-label">Secondary Email</div>
                <a href="mailto:shakilcse2019@gmail.com" className="contact-channel-val">
                  shakilcse2019@gmail.com
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText('shakilcse2019@gmail.com');
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
              }}
              className="copy-btn"
              title="Copy Secondary Email"
            >
              Copy
            </button>
          </div>

          {/* Phone Channel */}
          <div className="contact-channel-card">
            <div className="contact-channel-left">
              <div className="contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <div className="contact-channel-label">Phone / WhatsApp</div>
                <a href="tel:+8801760396857" className="contact-channel-val">
                  +880 1760 396 857
                </a>
              </div>
            </div>
            <a
              href="tel:+8801760396857"
              className="copy-btn"
              style={{ textDecoration: 'none' }}
            >
              Call
            </a>
          </div>

          {/* Location Channel */}
          <div className="contact-channel-card">
            <div className="contact-channel-left">
              <div className="contact-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <div className="contact-channel-label">Location</div>
                <span className="contact-channel-val">
                  Dhaka / Gazipur, Bangladesh (UTC+6)
                </span>
              </div>
            </div>
          </div>

          {/* Direct Social Links */}
          <div className="glass-card" style={{ padding: '1.25rem 1.5rem' }}>
            <div style={{ fontSize: '0.775rem', color: 'var(--text-dim)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Connect Across Professional Channels
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href="https://github.com/shakilmahmudshazal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.8rem', padding: '0.5rem' }}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/md-shakil-37352918b/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.8rem', padding: '0.5rem' }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="form-card">
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            Send a Direct Message
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Fill out the form below and I will respond to your inquiry promptly.
          </p>

          {submitted && (
            <div className="success-banner">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Thank you! Your message has been received. I'll get back to you shortly.</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">Subject</label>
              <input
                type="text"
                id="contact-subject"
                required
                placeholder="Senior Engineering Opportunity / Project Discussion"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder="Describe your team requirements, collaboration scope, or architectural challenge..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-textarea"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
            >
              <span>Send Message</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
