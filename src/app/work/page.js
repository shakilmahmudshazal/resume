import TitleBar from "@/components/title";
import WorkCard from "@/components/work-card";

export default function Resume() {
  let workApplicationData = [
    {
      image: "/assets/work-image/espares.png",
      type: "Web Application",
      title: "eSpares"
    },
    {
      image: "/assets/work-image/bdtickets.png",
      type: "Web Application",
      title: "BDTickets"
    },
    {
      image: "/assets/work-image/gsf.svg",
      type: "Web Application",
      title: "GSF Car Parts"
    },
    {
      image: "/assets/work-image/hooknloop.png",
      type: "Web Application",
      title: "Hook and Loop"
    },
    {
      image: "/assets/work-image/barriersdirect.webp",
      type: "Web Application",
      title: "Barriers Direct"
    }

  ]
  return (
    <section className="details">
      <TitleBar title="Work" />

      <div className="work-card-items">
        {
          workApplicationData.map((item)=><WorkCard image={item.image} type={item.type} title={item.title}/>)
        }
      </div>
    </section>
  );
}
