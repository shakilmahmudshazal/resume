import TitleBar from "@/components/title";

export default function Resume() {
  return (
    <section className="details">
      <TitleBar title="Work" />

      <div className="work-card-items">
        <div className="work-card-item">
          <div className="work-card-image">
            <img src="/assets/work-image/espares.png" alt="eSpares" />
          </div>
          <div className="work-card-type">
            <span>Web Application</span>
          </div>
          <div className="work-card-title">
            <span>eSpares</span>
          </div>
        </div>
        <div className="work-card-item">
          <div className="work-card-image">
            <img src="/assets/work-image/bdtickets.png" alt="bdtickets" />
          </div>
          <div className="work-card-type">
            <span>Web Application</span>
          </div>
          <div className="work-card-title">
            <span>
              BDTickets
            </span>
          </div>
        </div>
        <div className="work-card-item">
          <div className="work-card-image">
            <img src="/assets/work-image/gsf.svg" alt="gsf" />
          </div>
          <div className="work-card-type">
            <span>Web Application</span>
          </div>
          <div className="work-card-title">
            <span>GSF Car Parts</span>
          </div>
        </div>
        <div className="work-card-item">
          <div className="work-card-image">
            <img src="/assets/work-image/hooknloop.png" alt="Hook and Loop" />
          </div>
          <div className="work-card-type">
            <span>
              Web Application
            </span>
          </div>
          <div className="work-card-title">
            <span>Hook and Loop</span>
          </div>
        </div>
        <div className="work-card-item">
          <div className="work-card-image">
            <img src="/assets/work-image/barriersdirect.webp" alt="barriersdirect" />
          </div>
          <div className="work-card-type">
            <span>Web Application</span>
          </div>
          <div className="work-card-title">
            <span>
              Barriers Direct
            </span>
          </div>
        </div>
       
      </div>
    </section>
  );
}
