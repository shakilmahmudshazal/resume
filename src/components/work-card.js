import React from 'react';

export default function WorkCard({ image, type, title, description, techStack = [], link = "#" }) {
  return (
    <div className="project-card">
      <div className="project-thumbnail-box">
        <img src={image} alt={title} className="project-thumbnail" />
        <span className="project-category-badge">{type}</span>
      </div>

      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>

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
          <span style={{ fontSize: '0.775rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
            Enterprise Deployment
          </span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-link"
          >
            <span>Visit Platform</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
