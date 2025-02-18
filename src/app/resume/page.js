import ResumeCard from "@/components/resume-card";
import TitleBar from "@/components/title";
import TagCard from "@/components/tagcard";

export default function Resume() {
  let educationData =[
    {
      year: "2015 - 2019",
      subject: "Bachelor of Science in CSE",
      institution: "Daffodil Internationnal University, Dhaka"
    },
    {
      year: "2012 - 2014",
      subject: "HSC (Science)",
      institution: "Safiuddin Sarker Academy & College, Gazipur"
    },
    {
      year: "2010 - 2012",
      subject: "SSC (Science)",
      institution: "Safiuddin Sarker Academy & College, Gazipur"
    }
  ];

  let experienceData =[
    {
      year: "2020 - Current",
      position: "Senior Software Engineer",
      company: "Echologyx Ltd"
    },
    {
      year: "2019 - 2020",
      position: "Junior Software Engineer",
      company: "Bluetech Solutions Ltd"
    }
  ];
  let workSkills = [
    "Magento",
    "React",
    "Next",
    "Laravel"
  ];

  let softSkills = [
    "Team Work",
    "Problem Solving",
    "Communication",
    "Time Management",
    "Adapt",
    "Leadership"
  ];
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
            {
              educationData.map((item)=><ResumeCard year={item.year} subject={item.subject} institution={item.institution}/>)
            }
          </div>
        </div>
        <div className="Experience">
          <div className='title sub-section-title'>
            <img src="/assets/title-logo/work-svg.svg" alt="Education Logo" />
            <span> Experience </span>
          </div>
          <div className="card-items">
          {
            experienceData.map((item)=><ResumeCard year={item.year} subject={item.position} institution={item.company}/>)
          }
          </div>
        </div>
        <div className="work-skills">
          <div className='title sub-section-title'>
            Work Skills
          </div>
          <div className="tag-card-items">
           {
            workSkills.map((item)=><TagCard tag={item}/>)
           }
          </div>
        </div>
        <div className="soft-skills">
          <div className='title sub-section-title'>
            Soft Skills
          </div>
          <div className="tag-card-items">
            {
              softSkills.map((item)=><TagCard tag={item}/>)
            }
          </div>
        </div>
      </div>
    </section>
  );
}
