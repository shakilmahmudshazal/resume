// src/components/Card.js
import React from 'react';


export default function Card({ title, CardIcon, children }) {
    return (
        <div className='card-div'>
            <div className='card-title-icon-div'>
                <div className='card-icon-div'>
                    <CardIcon />
                </div>   
                <div className='card-title-div'>{title}</div>
            </div>
            <div className='card-description'>
                {children}
            </div>
        </div>
    );
}


