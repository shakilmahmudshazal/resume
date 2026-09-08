import ResumeCard from "@/components/resume-card";
import TitleBar from "@/components/title";
import TagCard from "@/components/tagcard";

export default function Resume() {
  const experienceData = [
    {
      year: "2020 — Present",
      position: "Senior Software Engineer",
      company: "Echologyx Ltd",
      badge: "Current Role",
      bullets: [
        "Architecting and delivering high-performance, enterprise-scale e-commerce and web applications for global enterprise clients.",
        "Spearheading frontend modernization using Next.js (App Router), React 19, and headless commerce architectures to maximize speed and SEO.",
        "Achieving substantial improvements in Core Web Vitals (LCP, CLS, INP) across production stores serving thousands of daily shoppers.",
        "Conducting rigorous code reviews, defining architectural standards, and mentoring mid-level and junior engineers.",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Magento 2", "Tailwind CSS", "GraphQL", "REST APIs", "CI/CD"],
    },
    {
      year: "2019 — 2020",
      position: "Junior Software Engineer",
      company: "Bluetech Solutions Ltd",
      badge: "Full-Time",
      bullets: [
        "Engineered full-stack features and bespoke business logic using PHP, Laravel, and relational databases (MySQL).",
        "Integrated secure payment gateways, SMS verification services, and third-party vendor APIs.",
        "Collaborated in Agile sprints with product designers and QA engineers to ensure flawless bi-weekly releases.",
      ],
      techStack: ["Laravel", "PHP", "JavaScript", "MySQL", "Git", "REST APIs", "Bootstrap"],
    },
  ];

  const educationData = [
    {
      year: "2015 — 2019",
      subject: "Bachelor of Science in Computer Science & Engineering (B.Sc CSE)",
      institution: "Daffodil International University, Dhaka",
      badge: "Graduated",
      bullets: [
        "Core Focus: Software Engineering, Data Structures & Algorithms, Object-Oriented Design, Database Systems, Web Technologies.",
        "Active participant in collegiate programming competitions and software development workshops.",
      ],
      techStack: ["Algorithms", "Software Architecture", "Database Systems", "C/C++", "Java", "Web Dev"],
    },
    {
      year: "2012 — 2014",
      subject: "Higher Secondary Certificate (HSC) — Science",
      institution: "Safiuddin Sarker Academy & College, Gazipur",
      badge: "Pre-University",
      bullets: ["Rigorous foundation in Higher Mathematics, Physics, and Chemistry."],
      techStack: [],
    },
    {
      year: "2010 — 2012",
      subject: "Secondary School Certificate (SSC) — Science",
      institution: "Safiuddin Sarker Academy & College, Gazipur",
      badge: "Secondary",
      bullets: ["Excellence in Science and General Mathematics curriculum."],
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
      skills: ["Next.js (App Router)", "React 19", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Modern CSS / PostCSS", "HTML5 & Semantic Web", "State Management (Redux/Zustand)"],
    },
    {
      title: "Backend & System APIs",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: ["PHP", "Laravel", "Node.js", "RESTful APIs", "GraphQL", "MySQL", "Database Indexing & Optimization"],
    },
    {
      title: "E-Commerce & Architecture",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      ),
      skills: ["Magento 2", "Headless Commerce", "Payment Gateways", "High-Concurrency Checkout", "Multi-Warehouse Sync", "Catalog Architecture"],
    },
    {
      title: "DevOps & Engineering Practices",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
        </svg>
      ),
      skills: ["Git & GitHub Actions", "CI/CD Pipelines", "Turbopack / Vite", "Code Reviews & Standards", "Agile & Scrum Delivery", "Technical Mentorship"],
    },
  ];

  return (
    <div>
      <TitleBar
        title="Resume & Credentials"
        subtitle="A detailed track record of professional engineering experience, system architecture, and academic achievements."
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

      {/* Experience Section */}
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
