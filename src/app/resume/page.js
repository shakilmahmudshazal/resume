import ResumeCard from "@/components/resume-card";
import TitleBar from "@/components/title";
import TagCard from "@/components/tagcard";

export default function Resume() {
  const experienceData = [
    {
      year: "Nov 2020 — Present",
      position: "Senior Software Engineer",
      company: "Echologyx Limited, Uttara, Dhaka",
      badge: "Current Role",
      bullets: [
        "Architecting and delivering enterprise-scale e-commerce web applications for international retail clients across the UK and Europe, including eSpares, GSF Car Parts, NAPA Auto Parts UK, Hook and Loop, and Barriers Direct.",
        "Spearheading frontend modernization using Next.js (App Router), React 19, and headless commerce architectures, resulting in measurable improvements to Core Web Vitals (LCP, INP, CLS) and user conversions.",
        "Engineering Conversion Rate Optimization (CRO) experiments and building automated end-to-end testing suites using WebDriverIO.",
        "Leading technical design discussions, establishing code review guidelines, and mentoring mid-level and junior software engineers.",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Magento 2", "PHP (OOP)", "Tailwind CSS", "WebDriverIO", "CRO Development", "GraphQL & REST APIs", "CI/CD"],
    },
    {
      year: "Oct 2019 — Oct 2020",
      position: "Software Engineer",
      company: "Bluetech Solutions Bangladesh Limited, Gulshan, Dhaka",
      badge: "Full-Time",
      bullets: [
        "Core engineer for bdtickets.com, the country's flagship real-time transit reservation platform for bus, launch, and air travel, handling high-concurrency peak traffic.",
        "Built administrative portals (admin.bdtickets.com and sradmin.bdtickets.com) using React.js, Next.js, JavaScript ES6, and Ant Design.",
        "Developed travel agency inventory management systems (inventory.deshtravelsbd.com) and 401kdepot.com APIs utilizing Slim, Laravel, PHP, and MySQL.",
        "Integrated dynamic seat-locking mechanisms, secure online payment gateways, and automated SMS verification services.",
      ],
      techStack: ["React.js", "Next.js", "JavaScript (ES6+)", "Ant Design", "Laravel", "Slim", "PHP", "MySQL", "REST APIs", "Git"],
    },
    {
      year: "Aug 2019 — Oct 2019",
      position: "Laravel API Developer",
      company: "ARA Ads & Co. INC, Progati Sarani, Dhaka",
      badge: "Full-Time",
      bullets: [
        "Engineered scalable RESTful API services and cost-management microservices utilizing PHP, Laravel, and MySQL.",
        "Designed high-throughput relational database schemas and automated data processing endpoints for digital advertising operations.",
      ],
      techStack: ["PHP", "Laravel", "MySQL", "RESTful APIs", "Postman", "Git"],
    },
  ];

  const competitiveProgramming = [
    { platform: "UVA Online Judge", solved: "120+ Solved", icon: "⚡" },
    { platform: "Beecrowd / URI", solved: "100+ Solved", icon: "🌐" },
    { platform: "ACM-Hust", solved: "100+ Solved", icon: "🏆" },
    { platform: "Codeforces", solved: "50+ Solved", icon: "⚔️" },
    { platform: "LightOJ", solved: "30+ Solved", icon: "💡" },
  ];

  const honorsAwards = [
    { title: "Individual Programming Contest Champion", org: "Daffodil International University (CSE Dept)", year: "2015" },
    { title: "Top CGPA Achiever Award (CGPA 3.75)", org: "DIU 'We Shine Brighter' Honor", year: "2015" },
    { title: "Second Runner-up, CSE Fest Programming Contest", org: "DIU Computer Programming Club (CPC)", year: "2016" },
    { title: "National Runner-Up, iGenius Competition", org: "Grameenphone", year: "2014" },
    { title: "Academic Excellence Reception", org: "Daily Prothom Alo", year: "2012" },
  ];

  const educationData = [
    {
      year: "2015 — 2019",
      subject: "BSc in Computer Science & Engineering (B.Sc CSE)",
      institution: "Daffodil International University, Dhaka, Bangladesh",
      badge: "CGPA 3.75 / 4.00",
      bullets: [
        "Academic standing: Graduated with a high CGPA of 3.75 / 4.00; awarded the Top CGPA Achiever award in 2015.",
        "Capstone / Final Year Project: 'Voice Recognition Robot via Android' utilizing Arduino, Java, and XML.",
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL), System Analysis & Design, Computer Architecture.",
      ],
      techStack: ["Algorithms", "Data Structures", "System Design", "Java", "C/C++", "SQL", "Robotics/Arduino"],
    },
    {
      year: "2012 — 2014",
      subject: "Higher Secondary Certificate (HSC) — Science",
      institution: "Safiuddin Sarker Academy & College, Gazipur",
      badge: "Pre-University",
      bullets: ["Strong foundation in Higher Mathematics, Physics, and Chemistry."],
      techStack: [],
    },
    {
      year: "2010 — 2012",
      subject: "Secondary School Certificate (SSC) — Science",
      institution: "Safiuddin Sarker Academy & College, Gazipur",
      badge: "Secondary",
      bullets: ["Excellence in Science and General Mathematics; awarded formal reception by Daily Prothom Alo for outstanding academic achievement."],
      techStack: [],
    },
  ];

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ["Next.js 16 (App Router)", "React 19", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "Ant Design", "Modern CSS / PostCSS", "Sass / SCSS", "React-Native", "HTML5 & JSX"],
    },
    {
      title: "Backend & Systems",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: ["PHP (OOP)", "Laravel", "Lumen", "Slim", "Node.js / Express", "ASP.NET / C#", "Java", "Python", "RESTful APIs", "GraphQL"],
    },
    {
      title: "E-Commerce & QA Testing",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      ),
      skills: ["Magento 2", "Headless Commerce", "CRO Development", "WebDriverIO (E2E Testing)", "Payment Gateways", "High-Concurrency Checkout", "Multi-Warehouse Sync"],
    },
    {
      title: "Databases, DevOps & CS Fundamentals",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
        </svg>
      ),
      skills: ["MySQL", "SQL Indexing & Optimization", "MongoDB", "Data Structures & Algorithms", "Git, GitHub & GitLab", "CI/CD Pipelines", "Linux Cloud Server", "Firebase", "cPanel"],
    },
  ];

  return (
    <div>
      <TitleBar
        title="Resume & Credentials"
        subtitle="A detailed track record of professional engineering experience, system architecture, competitive programming, and academic credentials."
        icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        }
      />

      {/* Professional Experience Section */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '0.5rem',
            background: 'rgba(6, 182, 212, 0.1)',
            color: 'var(--accent-cyan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Work Experience
          </h2>
        </div>

        <div className="timeline-container">
          {experienceData.map((item, index) => (
            <ResumeCard
              key={`exp-${index}-${item.company}`}
              year={item.year}
              subject={item.position}
              institution={item.company}
              badge={item.badge}
              bullets={item.bullets}
              techStack={item.techStack}
            />
          ))}
        </div>
      </section>

      {/* Competitive Programming & Algorithmic Problem Solving */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '0.5rem',
            background: 'rgba(245, 158, 11, 0.1)',
            color: 'var(--accent-amber)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Competitive Programming & Problem Solving
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              Over 400+ algorithmic problems solved across international competitive programming platforms
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}>
          {competitiveProgramming.map((cp, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '1.25rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{cp.icon}</span>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                {cp.platform}
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--accent-cyan)',
                fontWeight: 600,
                background: 'rgba(6, 182, 212, 0.1)',
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
              }}>
                {cp.solved}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Categorized Skills Matrix */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '0.5rem',
            background: 'rgba(139, 92, 246, 0.1)',
            color: 'var(--accent-violet)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Technical Expertise & Skills Matrix
          </h2>
        </div>

        <div className="skills-matrix-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-category-header">
                <div style={{ color: 'var(--accent-cyan)' }}>{category.icon}</div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-badges-container">
                {category.skills.map((skill, sIdx) => (
                  <TagCard key={`skill-${idx}-${sIdx}`} tag={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honors & Awards Section */}
      <section style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '0.5rem',
            background: 'rgba(236, 72, 153, 0.1)',
            color: '#ec4899',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Honors & Awards
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {honorsAwards.map((award, aIdx) => (
            <div key={aIdx} className="glass-card" style={{ padding: '1.35rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-cyan)',
                  background: 'rgba(6, 182, 212, 0.1)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                }}>
                  {award.year}
                </span>
                <span style={{ fontSize: '1.1rem' }}>🏅</span>
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                {award.title}
              </h3>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {award.org}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '0.5rem',
            background: 'rgba(16, 185, 129, 0.1)',
            color: 'var(--accent-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Education & Academic Background
          </h2>
        </div>

        <div className="timeline-container">
          {educationData.map((item, index) => (
            <ResumeCard
              key={`edu-${index}-${item.institution}`}
              year={item.year}
              subject={item.subject}
              institution={item.institution}
              badge={item.badge}
              bullets={item.bullets}
              techStack={item.techStack}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
