import React from 'react';

export default function WorkCard({
  type,
  title,
  role,
  description,
  metrics,
  techStack = [],
}) {
  return (
    <div className="project-card">
      <div className="project-header-box">
        <div className="project-header-top">
          <div className="project-icon-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <span className="project-category-badge">{type}</span>
        </div>

        <h3 className="project-title">{title}</h3>

        {role && (
          <div className="project-role-badge">
            <span className="project-role-dot"></span>
            <span>{role}</span>
          </div>
        )}
      </div>

      <div className="project-details">
        <p className="project-desc">{description}</p>

        {metrics && (
          <div className="project-metrics-callout">
            <span className="project-metrics-icon">⚡</span>
            <span>{metrics}</span>
          </div>
        )}

        {techStack && techStack.length > 0 && (
          <div className="tech-tags-row" style={{ marginBottom: '1.25rem' }}>
            {techStack.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="project-footer">
          <div className="project-confidential-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Live URLs & Screenshots Withheld • Company Policy & NDA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
