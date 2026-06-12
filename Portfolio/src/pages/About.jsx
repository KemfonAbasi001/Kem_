// import { useEffect, useRef, useState } from "react";
// import me from "../assets/IMG-20251221-WA0035.jpg";



// function About() {


//   return (
//     <>
//       <section className="w-full pt-10 pb-20 flex justify-center items-center bg-[#f4f4f4] dark:bg-[#0a0a0b]" id="work">
//         <div className="w-[90%] flex flex-col gap-15 lg:flex-row lg:items-center ">
//           <div className="flex flex-col gap-4 lg:w-[98%]">
//             <h1 className="text-[40px] leading-tight text-[#0f0f0f] dark:text-[#E5E5E5] font-semibold">About Me</h1>
//             <p className="text-[#1c1c1c] dark:text-[#B5B5B5] leading-7 text-[18px]">I'm KemfonAbasi Jonah — a frontend developer with a particular obsession with the intersection of aesthetics and technical precision. My work spans luxury restaurant interfaces, Airbnb-style booking platforms, and portfolio sites that stand out in a sea of templates..</p>
//             <p className="text-[#1c1c1c] dark:text-[#B5B5B5] leading-7 text-[18px]">I approach every project thinking about the gap between what a user expects and what would actually surprise them — in the best way. Whether it's a scroll-triggered reveal, a filter transition, or a navigation that disappears at exactly the right moment, the details matter.</p>
//             <p className="text-[#1c1c1c] dark:text-[#B5B5B5] leading-7 text-[18px]">Currently deepening my skills across the full stack and building publicly on GitHub. Open to freelance projects and developer roles where craft is taken seriously.</p>
//           </div>
//           <div className="img">
//             <img src={me} alt="" className="block" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default About;








// import { useEffect, useRef, useState } from "react";
// import me from "../assets/IMG-20251221-WA0035.jpg";

// function About() {
//   const textRef = useRef(null);
//   const imgRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (textRef.current) observer.observe(textRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <section
//         className="w-full pt-10 pb-20 flex justify-center items-center bg-[#f4f4f4] dark:bg-[#0a0a0b] overflow-hidden"
//         id="about"
//       >
//         <div className="w-[90%] flex flex-col gap-15 lg:flex-row lg:items-center">

//           {/* Text — slides in from left */}
//           <div
//             ref={textRef}
//             className="flex flex-col gap-4 lg:w-[98%] transition-all duration-700 ease-out"
//             style={{
//               opacity: visible ? 1 : 0,
//               transform: visible ? "translateX(0)" : "translateX(-60px)",
//             }}
//           >
//             <h1 className="text-[40px] leading-tight text-[#0f0f0f] dark:text-[#E5E5E5] font-semibold">
//               About Me
//             </h1>
//             <p className="text-[#1c1c1c] dark:text-[#B5B5B5] leading-7 text-[18px]">
//               I'm KemfonAbasi Jonah — a frontend developer with a particular obsession with the intersection of aesthetics and technical precision. My work spans luxury restaurant interfaces, Airbnb-style booking platforms, and portfolio sites that stand out in a sea of templates..
//             </p>
//             <p className="text-[#1c1c1c] dark:text-[#B5B5B5] leading-7 text-[18px]">
//               I approach every project thinking about the gap between what a user expects and what would actually surprise them — in the best way. Whether it's a scroll-triggered reveal, a filter transition, or a navigation that disappears at exactly the right moment, the details matter.
//             </p>
//             <p className="text-[#1c1c1c] dark:text-[#B5B5B5] leading-7 text-[18px]">
//               Currently deepening my skills across the full stack and building publicly on GitHub. Open to freelance projects and developer roles where craft is taken seriously.
//             </p>
//           </div>

//           {/* Image — slides in from right */}
//           <div
//             ref={imgRef}
//             className="img transition-all duration-700 ease-out"
//             style={{
//               opacity: visible ? 1 : 0,
//               transform: visible ? "translateX(0)" : "translateX(60px)",
//               transitionDelay: "150ms",
//             }}
//           >
//             <img src={me} alt="" className="block" />
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

// export default About;
























import { useEffect, useRef } from "react";
import me from "../assets/IMG-20251221-WA0035.jpg";

// ─── Hook: slide in from a direction once element enters viewport ──────────────
function useSlideIn(ref, { direction = 'left', delay = 0, threshold = 0.15 } = {}) {
  useEffect(function () {
    const el = ref.current
    if (!el) return

    const offset = direction === 'left' ? 'translateX(-48px)' : 'translateX(48px)'

    el.style.opacity = '0'
    el.style.transform = offset
    el.style.transition = `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return
          el.style.opacity = '1'
          el.style.transform = 'translateX(0)'
          observer.unobserve(el)
        })
      },
      { threshold }
    )

    observer.observe(el)
    return function () { observer.disconnect() }
  }, [])
}

function About() {
  const textRef = useRef(null)
  const imgRef  = useRef(null)

  useSlideIn(textRef, { direction: 'left',  delay: 0   })
  useSlideIn(imgRef,  { direction: 'right', delay: 120 })

  return (
    <>
      <section
        className="w-full pt-10 pb-20 flex justify-center items-center bg-[#f4f4f4] dark:bg-[#0a0a0b]"
        id="about"
      >
        <div className="w-[90%] flex flex-col gap-15 lg:flex-row lg:items-center">

          {/* ── Text block — slides in from left ── */}
          <div ref={textRef} className="flex flex-col gap-4 lg:w-[98%]">
            <h1 className="text-[40px] leading-tight text-[#0f0f0f] dark:text-[#E5E5E5] font-semibold">
              About Me
            </h1>
            <p className="text-[#1c1c1c] dark:text-[#B5B5B5] leading-7 text-[18px]">
              I'm KemfonAbasi Jonah — a frontend developer with a particular obsession with the intersection of aesthetics and technical precision. My work spans luxury restaurant interfaces, Airbnb-style booking platforms, and portfolio sites that stand out in a sea of templates.
            </p>
            <p className="text-[#1c1c1c] dark:text-[#B5B5B5] leading-7 text-[18px]">
              I approach every project thinking about the gap between what a user expects and what would actually surprise them — in the best way. Whether it's a scroll-triggered reveal, a filter transition, or a navigation that disappears at exactly the right moment, the details matter.
            </p>
            <p className="text-[#1c1c1c] dark:text-[#B5B5B5] leading-7 text-[18px]">
              Currently deepening my skills across the full stack and building publicly on GitHub. Open to freelance projects and developer roles where craft is taken seriously.
            </p>
          </div>

          {/* ── Image — slides in from right ── */}
          <div ref={imgRef} className="img">
            <img src={me} alt="KemfonAbasi Jonah" className="block" />
          </div>

        </div>
      </section>
    </>
  );
}

export default About;