import React from 'react';
export default function BasicInfo() {
  return (
    <section className='basic-info-section'>
      <div className="basic-info">
        <div className='profile-picture-container'>
          <img src='assets/profile.jpg' className='prfile-picture' />
        </div>
        <div className='profile-name'>Shakil Mahmud</div>
        <div className='profile-title'>FullStack Developer</div>
        <div className='socials-link-container'>
          <div className='socials-link-items'>
            <a href='/' className='socials-link-item'>
              <img className='social-logo' src="assets/Facebook.png" />
            </a>
          
            <a href='/' className='socials-link-item'>
              <img className='social-logo' src="assets/Linkedin.png" />
            </a>
          
            <a href='/' className='socials-link-item'>
              <img className='social-logo' src="assets/Twitter.png" />
            </a>
          
            <a href='/' className='socials-link-item'>
              <img className='social-logo' src="assets/Github.png" />
            </a>
          </div>
        </div>

        <div className='basic-info-download'>
        <div className='basic-information-container'>
          <div className='info-items'>
            <div className='info-item'>
              <div className='info-icon'>
                <img src="assets/phone.png" className='info-icon-image' />
              </div>
              <div className='info-title-value'>
                <div className='info-title'>
                  Phone
                </div>
                <div className='info-value'>
                  +8801521213911
                </div>
              </div>
            </div>
            <div className='info-item'>
              <div className='info-icon'>
                <img src="assets/message.png" className='info-icon-image' />
              </div>
              <div className='info-title-value'>
                <div className='info-title'>
                  Email
                </div>
                <div className='info-value'>
                  shakilcse2019@gmail.com
                </div>
              </div>
            </div>
            <div className='info-item'>
              <div className='info-icon'>
                <img src="assets/location.png" className='info-icon-image' />
              </div>
              <div className='info-title-value'>
                <div className='info-title'>
                  Location
                </div>
                <div className='info-value'>
                  Dhaka, Bangladesh
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='cv-download-container'>
          <a href="file" download="shakilmahmudcv.pdf">
            <img src="assets/download.png" className='download-icon'/>
           <span className='download-text'> Download Resume</span>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
