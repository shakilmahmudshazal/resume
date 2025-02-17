import React from 'react';
import Link from 'next/link';
export default function TopBar() {
  return (
    <section className='top-section'>
        <div className="my-log-container">
            <Link href="/">
                {/* <img className='my-logo' src="assets/codeLogo.png" alt="Shakil Mahmud"/> */}
                <div className='title-logo'>
                  <span className='first-name'>SHAKIL</span> &nbsp;
                  <span className='last-name'>MAHMUD</span>
                </div>
            </Link>
        </div>   
    </section>
  );
}
