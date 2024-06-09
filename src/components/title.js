import React from 'react';
import Link from 'next/link';
export default function TitleBar({title}) {
  return (
    <div className='title-div'>
        <div className='title-page'>
         {title}
        </div>
        <div className='title-bar'>
          
        </div>
    </div>
  );
}
