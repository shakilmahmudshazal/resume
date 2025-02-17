import TitleBar from "@/components/title";

export default function Resume() {
  return (
    <section className="details">
      <TitleBar title="Resume" />

      <div className="education-experience">
        <div className="education">
          <div className='title sub-section-title'>
            <img src="/assets/title-logo/education-svg.svg" alt="Education Logo" />
            <span>Education</span>
          </div>
          <div className="card-items">
            <div className="card-item">
              <div className="card-dates">2015 - 2019</div>
              <div className="card-degree">Bachelor of Science in CSE</div>
              <div className="card-title">Daffodil Internationnal University, Dhaka</div>
            </div>
            <div className="card-item">
              <div className="card-dates">2012 - 2014</div>
              <div className="card-degree">HSC (Science)</div>
              <div className="card-title">Safiuddin Sarker Academy & College, Gazipur</div>
            </div>

            <div className="card-item">
              <div className="card-dates"> 2010 - 2012</div>
              <div className="card-degree">SSC (Science)</div>
              <div className="card-title">Safiuddin Sarker Academy & College, Gazipur</div>
            </div>

          </div>
        </div>
        <div className="Experience">
          <div className='title sub-section-title'>
            <img src="/assets/title-logo/work-svg.svg" alt="Education Logo" />
            <span> Experience </span>
          </div>
          <div className="card-items">
            <div className="card-item">
              <div className="card-dates"> 2020 - Current</div>
              <div className="card-degree">Senior Software Engineer</div>
              <div className="card-title">Echologyx Ltd</div>
            </div>
            <div className="card-item">
              <div className="card-dates">2019 - 2020</div>
              <div className="card-degree">Junior Software Engineer</div>
              <div className="card-title">Bluetech Solutions Ltd</div>
            </div>
          </div>
        </div>
        <div className="work-skills">
          <div className='title sub-section-title'>
            Work Skills
          </div>
          <div className="tag-card-items">
            <div className="tag-card-item">
              <div className="tag-card-title">Magento</div>
            </div>
            <div className="tag-card-item">
              <div className="tag-card-title">React</div>
            </div>
            <div className="tag-card-item">
              <div className="tag-card-title">Next</div>
            </div>
            <div className="tag-card-item">
              <div className="tag-card-title">Laravel</div>
            </div>
          </div>
        </div>
        <div className="soft-skills">
          <div className='title sub-section-title'>
            Soft Skills
          </div>
          <div className="tag-card-items">
            <div className="tag-card-item">
              <div className="tag-card-title">Team Work</div>
            </div>
            <div className="tag-card-item">
              <div className="tag-card-title">Problem Solving</div>

            </div>
            <div className="tag-card-item">
              <div className="tag-card-title">Communication</div>
            </div>
            <div className="tag-card-item">
              <div className="tag-card-title">Time Management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
