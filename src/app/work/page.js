import TitleBar from "@/components/title";
import WorkCard from "@/components/work-card";

export default function Work() {
  const workApplicationData = [
    {
      image: "/assets/work-image/espares-ss.png",
      type: "Enterprise E-Commerce",
      title: "eSpares",
      description:
        "The UK's market-leading spare parts and appliance repair platform managing an expansive catalog of over 1M+ SKUs. Contributed to front-end performance tuning, responsive UI redesign, and frictionless checkout flows.",
      techStack: ["Next.js", "React", "Magento 2", "Tailwind CSS", "REST APIs"],
      link: "https://www.espares.co.uk",
    },
    {
      image: "/assets/work-image/bdtickets-ss.png",
      type: "High-Concurrency Platform",
      title: "BDTickets",
      description:
        "The premier real-time online ticketing platform in Bangladesh across bus, launch, and air transport. Built to withstand extreme traffic spikes during holidays with instant seat locking and redundant payment integrations.",
      techStack: ["React", "Next.js", "Laravel", "MySQL", "REST APIs"],
      link: "https://bdtickets.com",
    },
    {
      image: "/assets/work-image/gsf-ss.png",
      type: "Automotive E-Commerce",
      title: "GSF Car Parts",
      description:
        "Major UK national automotive parts distributor with hundreds of branch locations. Features vehicle registration number (VRM) lookup, real-time localized warehouse stock, and click-and-collect reservation.",
      techStack: ["React", "Next.js", "Magento 2", "REST APIs", "Modern CSS"],
      link: "https://www.gsfcarparts.com",
    },
    {
      image: "/assets/work-image/hnl-ss.png",
      type: "Specialty Commerce",
      title: "Hook and Loop",
      description:
        "Specialized industrial fastening and commercial fastener web store. Includes dynamic custom strap configurator tools, tiered quantity discounts for B2B accounts, and intuitive product discovery.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Magento 2"],
      link: "https://hookandloop.com",
    },
    {
      image: "/assets/work-image/bd-ss.png",
      type: "B2B / B2C Commerce",
      title: "Barriers Direct",
      description:
        "UK industry leader for commercial security barriers, bollards, and safety infrastructure. Engineered automated bespoke quoting engines, customized dimension calculations, and complex trade dispatch workflows.",
      techStack: ["React", "Next.js", "PHP", "Magento 2"],
      link: "https://www.barriersdirect.co.uk",
    },
    {
      image: "/assets/work-image/napa-ss.png",
      type: "Automotive Aftermarket Distribution",
      title: "NAPA Auto Parts UK",
      description:
        "Premier UK automotive parts, workshop tools, and commercial vehicle equipment platform. Contributed to modern catalog browsing, digital product discovery, responsive UX, and distributor portal integrations.",
      techStack: ["Next.js", "React", "Magento 2", "Tailwind CSS", "REST APIs"],
      link: "https://www.napaautoparts.co.uk/",
    },
  ];

  return (
    <div>
      <TitleBar
        title="Featured Work & Architecture"
        subtitle="A showcase of enterprise e-commerce platforms and high-traffic web applications architected, developed, and maintained."
        icon={
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        }
      />

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
    </div>
  );
}
