import TitleBar from "@/components/title";
import WorkCard from "@/components/work-card";

export const metadata = {
  title: "Featured Work & Enterprise Architecture | Md. Shakil Mahmud",
  description:
    "Enterprise e-commerce architectures, high-concurrency booking engines, and mission-critical systems delivered by Senior Software Engineer Md. Shakil Mahmud.",
};

export default function Work() {
  const workApplicationData = [
    {
      type: "Enterprise E-Commerce",
      title: "eSpares",
      role: "Senior Software Engineer • Echologyx",
      metrics: "1M+ Catalog SKUs • Core Web Vitals Optimization",
      description:
        "The UK's market-leading spare parts and appliance repair platform managing an expansive catalog of over 1M+ SKUs. Contributed to front-end performance tuning, responsive UI redesign, and frictionless checkout flows at Echologyx.",
      techStack: ["Next.js", "React", "Magento 2", "Tailwind CSS", "REST APIs", "WebDriverIO"],
    },
    {
      type: "High-Concurrency Booking Engine",
      title: "BDTickets Platform",
      role: "Core Software Engineer • Bluetech Solutions",
      metrics: "Nationwide Transit Ticketing • Real-Time Concurrency",
      description:
        "Engineered as a core software engineer across the public passenger booking system, operator administration portal, and executive monitoring console. Architected real-time seat locks, multi-operator inventory synchronization, and redundant payment gateways to handle extreme holiday travel traffic.",
      techStack: ["React.js", "Next.js", "JavaScript (ES6+)", "Ant Design", "Laravel", "MySQL"],
    },
    {
      type: "Automotive E-Commerce",
      title: "GSF Car Parts",
      role: "Senior Software Engineer • Echologyx",
      metrics: "Nationwide UK Distribution • Real-Time Branch Inventory",
      description:
        "Major UK national automotive parts distributor with hundreds of branch locations. Contributed to vehicle registration number (VRM) lookup integration, real-time localized warehouse stock validation, and click-and-collect reservation workflows engineered at Echologyx.",
      techStack: ["React", "Next.js", "Magento 2", "REST APIs", "Modern CSS", "CRO"],
    },
    {
      type: "Automotive Aftermarket Distribution",
      title: "NAPA Auto Parts UK",
      role: "Senior Software Engineer • Echologyx",
      metrics: "Pan-European Catalog Architecture • Distributor UX",
      description:
        "Premier UK automotive parts, workshop tools, and commercial vehicle equipment platform. Contributed to modern catalog browsing, digital product discovery, responsive UX design, and distributor portal integrations at Echologyx.",
      techStack: ["Next.js", "React", "Magento 2", "Tailwind CSS", "REST APIs"],
    },
    {
      type: "Specialty Commerce & Configurator",
      title: "Hook and Loop",
      role: "Senior Software Engineer • Echologyx",
      metrics: "Dynamic Product Configurator • B2B Tiered Volume Pricing",
      description:
        "Specialized industrial fastening and commercial fastener web store. Engineered dynamic custom strap configurator tools, tiered quantity discounts for B2B accounts, and intuitive product discovery architectures.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Magento 2", "TypeScript"],
    },
    {
      type: "B2B / B2C Infrastructure Commerce",
      title: "Barriers Direct",
      role: "Senior Software Engineer • Echologyx",
      metrics: "Bespoke Dimension Quoting Engine • Complex Trade Dispatch",
      description:
        "UK industry leader for commercial security barriers, bollards, and safety infrastructure. Engineered automated bespoke quoting engines, customized dimension calculations, and complex trade dispatch workflows.",
      techStack: ["React", "Next.js", "PHP", "Magento 2", "Custom Modules"],
    },
  ];

  const additionalPlatforms = [
    {
      title: "Transit Operator Administration & SR Admin Portals",
      role: "Core Frontend & Systems Engineer • Bluetech Solutions",
      tech: ["React.js", "Next.js", "Ant Design", "REST APIs", "Secure RBAC"],
      desc: "Comprehensive operations console for transport operators and super administrators to manage routes, real-time bus seats, dynamic fares, passenger manifests, and financial reconciliation reports.",
    },
    {
      title: "Inter-District Fleet Inventory & Ticket Dispatch",
      role: "Backend & Systems Developer • Bluetech Solutions",
      tech: ["Slim", "PHP", "MySQL", "jQuery", "APIs"],
      desc: "Centralized inventory reservation and fleet management system built for major inter-district transport operators with localized branch ticketing and live route scheduling.",
    },
    {
      title: "Retirement & Investment Portfolio Validation API",
      role: "API Developer • ARA Ads / Bluetech",
      tech: ["Laravel", "PHP", "MySQL", "Financial APIs"],
      desc: "High-security financial API backend designed for managing investment portfolios, retirement contribution records, and automated transactional validation.",
    },
    {
      title: "FoodCount PWA (Enterprise Meal Orchestration)",
      role: "Creator & Fullstack Developer",
      tech: ["React", "Firebase API", "PWA", "Realtime Auth"],
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

      {/* Corporate Confidentiality / Company Policy Notice */}
      <div
        className="glass-card"
        style={{
          padding: "1.25rem 1.5rem",
          marginBottom: "2.5rem",
          borderLeft: "4px solid var(--accent-cyan)",
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <div
          style={{
            color: "var(--accent-cyan)",
            paddingTop: "0.15rem",
            flexShrink: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
        <div>
          <div
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontFamily: "var(--font-mono)",
              marginBottom: "0.25rem",
            }}
          >
            Client Confidentiality & Company Policy Notice
          </div>
          <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
            In strict compliance with corporate client non-disclosure agreements (NDAs) and company confidentiality policies, live external URLs, operator console endpoints, and production UI screenshots are withheld. Technical architecture, systems design, and engineering methodologies are summarized below.
          </p>
        </div>
      </div>

      {/* Main Flagship Enterprise Projects */}
      <section style={{ marginBottom: "3.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <div
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "0.5rem",
              background: "rgba(6, 182, 212, 0.1)",
              color: "var(--accent-cyan)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
          </div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)" }}>
            Enterprise Platforms & Flagship Systems
          </h2>
        </div>

        <div className="projects-grid">
          {workApplicationData.map((item, index) => (
            <WorkCard
              key={`work-${index}-${item.title}`}
              type={item.type}
              title={item.title}
              role={item.role}
              metrics={item.metrics}
              description={item.description}
              techStack={item.techStack}
            />
          ))}
        </div>
      </section>

      {/* Additional Platforms, Admin Engines & Microservices */}
      <section>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
          <div
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "0.5rem",
              background: "rgba(139, 92, 246, 0.1)",
              color: "var(--accent-violet)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <div>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)" }}>
              Operational Portals, Admin Systems & Fullstack Services
            </h2>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0 }}>
              Enterprise administrative consoles, financial APIs, and specialized inventory modules
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {additionalPlatforms.map((proj, pIdx) => (
            <div key={pIdx} className="glass-card" style={{ padding: "1.5rem", display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: "0.75rem" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.35rem" }}>
                  {proj.title}
                </h3>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent-emerald)",
                    fontWeight: 600,
                  }}
                >
                  {proj.role}
                </div>
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1rem", flex: 1 }}>
                {proj.desc}
              </p>

              <div className="tech-tags-row" style={{ marginBottom: "1rem" }}>
                {proj.tech.map((t, tIdx) => (
                  <span key={tIdx} className="tech-tag" style={{ fontSize: "0.7rem", padding: "0.2rem 0.5rem" }}>
                    {t}
                  </span>
                ))}
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--border-subtle)",
                  paddingTop: "0.75rem",
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.725rem",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-dim)",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>Internal Infrastructure System • Confidential</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
