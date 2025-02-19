import TitleBar from "@/components/title";
import WorkCard from "@/components/work-card";

export default function Resume() {
  let workApplicationData = [
    {
      image: "/assets/work-image/espares-ss.png",
      type: "Web Application",
      title: "eSpares"
    },
    {
      image: "/assets/work-image/bdtickets-ss.png",
      type: "Web Application",
      title: "BDTickets"
    },
    {
      image: "/assets/work-image/gsf-ss.png",
      type: "Web Application",
      title: "GSF Car Parts"
    },
    {
      image: "/assets/work-image/hnl-ss.png",
      type: "Web Application",
      title: "Hook and Loop"
    },
    {
      image: "/assets/work-image/bd-ss.png",
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
