import TitleBar from "@/components/title";
import Objective from "@/components/objective";
import WhatDoIDo from "@/components/whatDoIDo";
import BasicInfo from "@/components/basicInfo";

export default function Home() {
  const metrics = [
    { number: "5+", label: "Years Commercial Experience" },
    { number: "400+", label: "Algorithmic Problems Solved" },
    { number: "6+", label: "Enterprise Platforms Delivered" },
    { number: "3.75", label: "B.Sc CSE Academic CGPA" },
  ];

  return (
    <div className="hero-bento-grid">
      {/* Left Bento Column: Profile Sidebar */}
      <BasicInfo />

      {/* Right Bento Column: Main Presentation */}
      <div>
        {/* Senior Engineering Metrics Grid */}
        <div className="metrics-grid">
          {metrics.map((m, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-number">{m.number}</div>
              <div className="metric-label">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Executive Summary Card */}
        <Objective />

        {/* Core Pillars Grid */}
        <WhatDoIDo title="Engineering Pillars" />
      </div>
    </div>
  );
}
