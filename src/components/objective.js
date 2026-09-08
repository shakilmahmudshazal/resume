import React from 'react';

export default function Objective() {
  const coreTech = [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Magento 2',
    'PHP & Laravel',
    'Node.js',
    'Algorithms & DS (400+ Solved)',
    'Tailwind CSS',
    'CRO & WebDriverIO',
    'REST & GraphQL APIs',
    'MySQL & MongoDB',
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
          Executive Engineering Summary
        </span>
      </div>

      <p style={{
        fontSize: '1.05rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        marginBottom: '1.25rem',
      }}>
        Results-driven <strong style={{ color: '#fff' }}>Senior Software Engineer</strong> with over 7 years of commercial experience (engineering full-stack systems since 2019) architecting enterprise-grade e-commerce platforms, mission-critical booking engines, and scalable web architectures. Combines rigorous computer science fundamentals—distinguished as an individual programming contest champion with <strong style={{ color: '#fff' }}>400+ algorithmic problems solved</strong> across UVA, Codeforces, and LightOJ—with deep production mastery of modern React/Next.js ecosystems, Magento 2, and Laravel microservices. Proven track record at <strong style={{ color: '#fff' }}>Echologyx Limited</strong> and <strong style={{ color: '#fff' }}>Bluetech Solutions</strong> leading cross-functional teams, optimizing Core Web Vitals, and shipping resilient software at international scale.
      </p>

      {/* Core Tech Stack Pills */}
      <div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Core Technical Toolkit & Specializations
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
