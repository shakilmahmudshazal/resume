// src/components/Card.js
import React from 'react';


export default function ResumeCard({ year, subject, institution }) {
    return (
        <div className="card-item">
        <div className="card-dates">{year}</div>
        <div className="card-degree">{subject}</div>
        <div className="card-title">{institution}</div>
      </div>
    );
}


