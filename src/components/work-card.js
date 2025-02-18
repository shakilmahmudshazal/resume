// src/components/Card.js
import React from 'react';


export default function ResumeCard({ image, type, title }) {
    return (
      <div className="work-card-item">
      <div className="work-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="work-card-type">
        <span>{type}</span>
      </div>
      <div className="work-card-title">
        <span>{title}</span>
      </div>
    </div>
    );
}


