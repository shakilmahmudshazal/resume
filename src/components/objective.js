import React from 'react';

export default function Objective() {
  const coreTech = [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Magento 2',
    'Laravel',
    'Node.js',
    'Tailwind CSS',
    'REST & GraphQL',
    'PostgreSQL / MySQL',
    'Git & CI/CD',
  ];

  return (
    <div className="glass-card" style={{ padding: '1.75rem', marginBottom: '1.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
        <span style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--accent-cyan)',
          boxShadow: '0 0 10px var(--accent-cyan)',
        }}></span>
        <span style={{
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--accent-cyan)',
          fontWeight: 600,
        }}>
          Executive Summary
        </span>
      </div>

      <p style={{
        fontSize: '1.05rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        marginBottom: '1.25rem',
      }}>
        Accomplished <strong style={{ color: '#fff' }}>Senior Software Engineer</strong> with over 5 years of hands-on experience architecting and delivering high-performance full-stack web applications and enterprise-grade e-commerce solutions. Proven expertise in modern React/Next.js ecosystems, Magento platforms, and scalable backend services. Known for driving engineering quality, mentoring cross-functional developer teams, and delivering seamless user experiences at scale.
      </p>

      {/* Core Tech Stack Pills */}
      <div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Core Technical Toolkit
        </div>
        <div className="tech-tags-row">
          {coreTech.map((tech) => (
            <span key={tech} className="tech-tag" style={{ color: 'var(--text-primary)', background: 'rgba(255, 255, 255, 0.05)' }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
