import React from 'react';

export default function Card({ title, CardIcon, badge, children }) {
  return (
    <div className="pillar-card">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div className="pillar-icon-box">
          <CardIcon />
        </div>
        {badge && (
          <span style={{
            fontSize: '0.725rem',
            fontFamily: 'var(--font-mono)',
            padding: '0.2rem 0.6rem',
            borderRadius: '9999px',
            background: 'rgba(6, 182, 212, 0.1)',
            color: 'var(--accent-cyan)',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            fontWeight: 600,
          }}>
            {badge}
          </span>
        )}
      </div>
      <h3 className="pillar-title">{title}</h3>
      <p className="pillar-desc">{children}</p>
    </div>
  );
}
