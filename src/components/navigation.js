'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname  } from 'next/navigation';
export default function BasicInfo() {
  const pathName = usePathname(); 
  console.log('Current Pathname:', pathName);
  debugger
  return (
    <section className="navigation-section">
        <div className="navigation-container">
            <div className='navigation-items'>
              <Link href="/" className= {`navigation-item ${pathName === '/' ? 'navigation-item-active' : ''}`}>
                <div className='navigation-item-logo'>
                    < img src="assets/homeIcon.png" className='navigation-item-log-image'/>
                  </div>
                  <div className='navigation-item-text'>
                    Home
                  </div>
              </Link>
              <Link href="/resume" className= {`navigation-item ${pathName === '/resume' ? 'navigation-item-active' : ''}`}>
                <div className='navigation-item-logo'>
                    < img src="assets/resumeIcon.png" className='navigation-item-log-image'/>
                  </div>
                  <div className='navigation-item-text'>
                    Resume
                  </div>
              </Link>
              <Link href="/work" className= {`navigation-item ${pathName === '/work' ? 'navigation-item-active' : ''}`}>
                <div className='navigation-item-logo'>
                    < img src="assets/workIcon.png" className='navigation-item-log-image'/>
                  </div>
                  <div className='navigation-item-text'>
                    Work
                  </div>
              </Link>
              <Link href="/contact" className= {`navigation-item ${pathName === '/contact' ? 'navigation-item-active' : ''}`}>
                <div className='navigation-item-logo'>
                    < img src="assets/contactIcon.png" className='navigation-item-log-image'/>
                  </div>
                  <div className='navigation-item-text'>
                    Contact
                  </div>
              </Link>
            </div>
        </div>   
    </section>
  );
}
