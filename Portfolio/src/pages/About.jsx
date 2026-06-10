import { useEffect, useRef, useState } from "react";
import me from "../assets/IMG-20251221-WA0035.jpg";



function About() {


  return (
    <>
      <section className="w-full pt-10 pb-20 flex justify-center items-center bg-[#0a0a0b]" id="work">
        <div className="w-[90%] flex flex-col gap-15">
          <div className="flex flex-col gap-4">
            <h1 className="text-[40px] leading-tight text-[#E5E5E5] font-semibold">About Me</h1>
            <p className="text-[#B5B5B5] leading-7 text-[18px]">I'm KemfonAbasi Jonah — a frontend developer with a particular obsession with the intersection of aesthetics and technical precision. My work spans luxury restaurant interfaces, Airbnb-style booking platforms, and portfolio sites that stand out in a sea of templates..</p>
            <p className="text-[#B5B5B5] leading-7 text-[18px]">I approach every project thinking about the gap between what a user expects and what would actually surprise them — in the best way. Whether it's a scroll-triggered reveal, a filter transition, or a navigation that disappears at exactly the right moment, the details matter.</p>
            <p className="text-[#B5B5B5] leading-7 text-[18px]">Currently deepening my skills across the full stack and building publicly on GitHub. Open to freelance projects and developer roles where craft is taken seriously.</p>
          </div>
          <div className="img">
            <img src={me} alt="" className="block" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;