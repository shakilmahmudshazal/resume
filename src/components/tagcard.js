import React from 'react';

export default function TagCard({ tag, level }) {
  return (
    <div className="skill-pill">
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: 'var(--accent-cyan)',
      }}></span>
      <span>{tag}</span>
      {level && (
        <span style={{
          fontSize: '0.7rem',
          color: 'var(--text-dim)',
          fontFamily: 'var(--font-mono)',
          marginLeft: '0.25rem'
        }}>
          {level}
        </span>
      )}
    </div>
  );
}
