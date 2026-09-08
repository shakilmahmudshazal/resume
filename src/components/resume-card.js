import React from 'react';

export default function ResumeCard({ year, subject, institution, bullets = [], techStack = [], badge }) {
  return (
    <div className="timeline-item">
      <div className="timeline-node"></div>
      <div className="timeline-content-card">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-role">{subject}</h3>
            <div className="timeline-company">{institution}</div>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {badge && (
              <span style={{
                fontSize: '0.725rem',
                fontFamily: 'var(--font-mono)',
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
              }}>
                {badge}
              </span>
            )}
            <span className="timeline-badge">{year}</span>
          </div>
        </div>

        {bullets && bullets.length > 0 && (
          <ul className="timeline-bullets">
            {bullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        )}

        {techStack && techStack.length > 0 && (
          <div className="tech-tags-row">
            {techStack.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
