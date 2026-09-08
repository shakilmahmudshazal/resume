import TitleBar from "@/components/title";
import WorkCard from "@/components/work-card";

export default function Work() {
  const workApplicationData = [
    {
      image: "/assets/work-image/espares-ss.png",
      type: "Enterprise E-Commerce",
      title: "eSpares",
      description:
        "The UK's market-leading spare parts and appliance repair platform managing an expansive catalog of over 1M+ SKUs. Contributed to front-end performance tuning, responsive UI redesign, and frictionless checkout flows at Echologyx.",
      techStack: ["Next.js", "React", "Magento 2", "Tailwind CSS", "REST APIs"],
      link: "https://www.espares.co.uk",
    },
    {
      image: "/assets/work-image/bdtickets-ss.png",
      type: "High-Concurrency Booking Engine",
      title: "BDTickets",
      description:
        "Engineered as a core software engineer at Bluetech Solutions across bdtickets.com, admin.bdtickets.com, and sradmin.bdtickets.com. Built real-time seat locks, multi-operator inventory sync, and redundant payment gateways to handle extreme holiday traffic.",
      techStack: ["React.js", "Next.js", "JavaScript (ES6+)", "Ant Design", "Laravel", "MySQL"],
      link: "https://bdtickets.com",
    },
    {
      image: "/assets/work-image/gsf-ss.png",
      type: "Automotive E-Commerce",
      title: "GSF Car Parts",
      description:
        "Major UK national automotive parts distributor with hundreds of branch locations. Features vehicle registration number (VRM) lookup, real-time localized warehouse stock, and click-and-collect reservation engineered at Echologyx.",
      techStack: ["React", "Next.js", "Magento 2", "REST APIs", "Modern CSS"],
      link: "https://www.gsfcarparts.com",
    },
    {
      image: "/assets/work-image/napa-ss.png",
      type: "Automotive Aftermarket Distribution",
      title: "NAPA Auto Parts UK",
      description:
        "Premier UK automotive parts, workshop tools, and commercial vehicle equipment platform. Contributed to modern catalog browsing, digital product discovery, responsive UX, and distributor portal integrations at Echologyx.",
      techStack: ["Next.js", "React", "Magento 2", "Tailwind CSS", "REST APIs"],
      link: "https://www.napaautoparts.co.uk/",
    },
    {
      image: "/assets/work-image/hnl-ss.png",
      type: "Specialty Commerce & Configurator",
      title: "Hook and Loop",
      description:
        "Specialized industrial fastening and commercial fastener web store. Includes dynamic custom strap configurator tools, tiered quantity discounts for B2B accounts, and intuitive product discovery.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Magento 2"],
      link: "https://hookandloop.com",
    },
    {
      image: "/assets/work-image/bd-ss.png",
      type: "B2B / B2C Infrastructure Commerce",
      title: "Barriers Direct",
      description:
        "UK industry leader for commercial security barriers, bollards, and safety infrastructure. Engineered automated bespoke quoting engines, customized dimension calculations, and complex trade dispatch workflows.",
      techStack: ["React", "Next.js", "PHP", "Magento 2"],
      link: "https://www.barriersdirect.co.uk",
    },
  ];

  const additionalPlatforms = [
    {
      title: "BDTickets Admin & SR Admin Portals",
      url: "https://admin.bdtickets.com/",
      role: "Core Frontend & Systems Engineer",
      tech: ["React.js", "Next.js", "Ant Design", "REST APIs"],
      desc: "Comprehensive operations console for transport operators and super administrators to manage routes, real-time bus seats, dynamic fares, passenger manifests, and financial reports.",
    },
    {
      title: "Desh Travels Inventory Management",
      url: "https://inventory.deshtravelsbd.com/",
      role: "Backend & Systems Developer",
      tech: ["Slim", "PHP", "MySQL", "jQuery"],
      desc: "Centralized inventory reservation and fleet management system built for major inter-district transport operators with localized branch ticketing.",
    },
    {
      title: "401kDepot Financial API",
      url: "https://401kdepot.com/",
      role: "API Developer",
      tech: ["Laravel", "PHP", "SQL APIs"],
      desc: "High-security financial API backend designed for managing investment portfolios, retirement contribution records, and transactional validation.",
    },
    {
      title: "FoodCount PWA (Office Fast-Food Management)",
      url: "https://foodcount-e830c.firebaseapp.com/",
      role: "Creator & Fullstack Developer",
      tech: ["React", "Firebase API", "PWA", "Auth"],
      desc: "Progressive Web Application (PWA) engineered for real-time automated meal scheduling, office lunch orders, and group tallying.",
    },
  ];

  return (
    <div>
      <TitleBar
        title="Featured Work & Architecture"
        subtitle="A showcase of enterprise e-commerce platforms, high-concurrency reservation systems, and mission-critical applications architected and delivered."
        icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        }
      />

      {/* Main Flagship Enterprise Projects */}
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
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
            Enterprise Platforms & Flagship Systems
          </h2>
        </div>

        <div className="projects-grid">
          {workApplicationData.map((item, index) => (
            <WorkCard
              key={`work-${index}-${item.title}`}
              image={item.image}
              type={item.type}
              title={item.title}
              description={item.description}
              techStack={item.techStack}
              link={item.link}
            />
          ))}
        </div>
      </section>

      {/* Additional Platforms, Admin Engines & Microservices */}
      <section>
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
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Operational Portals, Admin Systems & Fullstack Services
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
              Enterprise administrative consoles, financial APIs, and specialized inventory modules
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {additionalPlatforms.map((proj, pIdx) => (
            <div key={pIdx} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {proj.title}
                </h3>
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--accent-cyan)',
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                  title="Open Live Site"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>

              <div style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-emerald)',
                marginBottom: '0.65rem',
                fontWeight: 600
              }}>
                {proj.role}
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem', flex: 1 }}>
                {proj.desc}
              </p>

              <div className="tech-tags-row">
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-tag" style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
