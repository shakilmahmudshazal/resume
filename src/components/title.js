import React from 'react';

export default function TitleBar({ title, subtitle, icon }) {
  return (
    <div className="section-header">
      <div className="section-title-wrap">
        {icon && (
          <div className="section-icon-badge">
            {icon}
          </div>
        )}
        <div>
          <h1 className="section-title">{title}</h1>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
