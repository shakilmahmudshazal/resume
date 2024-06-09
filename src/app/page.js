import TitleBar from "@/components/title";
import Objective from "@/components/objective";
import WhatDoIDo from "@/components/whatDoIDo"; 
export default function Home() {
  return (
    <section className="details">
        <TitleBar title="ABOUT ME"/>
        <Objective/>
        <WhatDoIDo title ="What I do!"/>
    </section>
  );
}
