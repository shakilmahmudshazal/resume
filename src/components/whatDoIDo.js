import React from 'react';
import Card from './card';
import { CodeIcon, DesignIcon, ProjectManagementIcon, LearningIcon } from './icon';

export default function WhatDoIDo({ title = "Engineering Pillars" }) {
  return (
    <div style={{ marginTop: '2rem' }}>
      <div className="section-header" style={{ marginBottom: '1.25rem' }}>
        <div className="section-title-wrap">
          <div className="section-icon-badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <div>
            <h2 className="section-title" style={{ fontSize: '1.5rem' }}>{title}</h2>
            <div className="section-subtitle">Core engineering competencies and technical specializations</div>
          </div>
        </div>
      </div>

      <div className="pillars-grid">
        <Card title="Frontend Architecture & Next.js" CardIcon={CodeIcon} badge="Next.js &bull; React">
          Specializing in scalable Next.js and React web applications. Deep expertise in Server Components,
          state architecture, Turbopack bundling, and optimizing Core Web Vitals for maximum performance and conversion.
        </Card>

        <Card title="Enterprise E-Commerce" CardIcon={ProjectManagementIcon} badge="Magento &bull; Scale">
          Architecting resilient, high-volume e-commerce platforms. Experienced in Magento 2, headless commerce,
          complex product catalog scalability, secure payment integrations, and checkout performance.
        </Card>

        <Card title="Engineering Leadership" CardIcon={DesignIcon} badge="Mentorship &bull; QA">
          Passionate about cultivating engineering excellence through rigorous code reviews, automated CI/CD pipelines,
          clear documentation, and mentoring developers to reach their full potential.
        </Card>

        <Card title="Systems & API Integration" CardIcon={LearningIcon} badge="APIs &bull; Fullstack">
          Designing scalable RESTful and GraphQL APIs, integrating payment gateways and microservices, optimizing database
          queries, and ensuring cross-platform stability across distributed systems.
        </Card>
      </div>
    </div>
  );
}
