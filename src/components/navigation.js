'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Work", href: "/work" },
    { label: "Essays & Blog ↗", href: "https://shakilmahmud.com", external: true },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="header-container">
      <nav className="navbar">
        {/* Brand Identity - Matching Blog Theme */}
        <Link href="/" className="brand-link">
          <div className="brand-badge-editorial">
            <img
              src="/assets/shakil-mahmud.jpg"
              alt="Shakil Mahmud"
              className="brand-avatar-img"
            />
          </div>
          <div className="brand-text">
            <span className="brand-name">Shakil Mahmud</span>
            <span className="brand-sub-badge">
              <span className="status-pulse-dot"></span>
              <span>Senior Engineer</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="nav-links">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-item external-nav-item"
                  title="Visit Shakil Mahmud Ideas & Publication"
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${isActive ? "active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Header Right Actions */}
        <div className="header-actions">
          <a
            href="https://shakilmahmud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-header"
            title="Read Essays"
          >
            <span>Read Publication</span>
          </a>

          <a
            href="https://github.com/shakilmahmudshazal"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social"
            title="GitHub Profile"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/md-shakil-37352918b/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-social"
            title="LinkedIn Profile"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <Link
            href="/contact"
            className="btn-primary"
            style={{ padding: "0.45rem 1rem", fontSize: "0.825rem" }}
          >
            <span>Let's Talk</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="header-social"
            style={{ display: "none" }}
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            marginTop: "0.75rem",
            padding: "1rem",
            background: "rgba(20, 27, 39, 0.96)",
            backdropFilter: "blur(20px)",
            borderRadius: "1.25rem",
            border: "1px solid var(--border-subtle)",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    color: "var(--accent-color)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "0.75rem",
                  color: isActive ? "#fff" : "var(--text-secondary)",
                  background: isActive ? "var(--accent-color)" : "transparent",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          #mobile-menu-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
