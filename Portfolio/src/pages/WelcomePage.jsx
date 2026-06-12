// function WelcomePage() {


//   return (
//     <>
//       <section className="intro">
//             <div className="intro__wrapper">

//                 <div className="intro__title">
//                     <span className="intro__letter--unblur">W</span><span className="intro__letter--blur">e</span><span className="intro__letter--unblur">l</span><span className="intro__letter--blur">c</span><span className="intro__letter--unblur">o</span><span className="intro__letter--blur">m</span><span className="intro__letter--unblur intro__letter--spaced">e</span>
//                     <span className="intro__letter--blur">t</span><span className="intro__letter--unblur intro__letter--spaced">o</span>
//                     <span className="intro__letter--blur">m</span><span className="intro__letter--unblur">y</span><br/>
//                     <span className="intro__letter--blur">Portfolio W</span><span className="intro__letter--last">ebsite</span>
//                 </div>

//                 <hr className="intro__rule"/>

//             </div>
//         </section>
//     </>
//   );
// }

// export default WelcomePage;


// // IntroAnimation.jsx
// import { useState, useEffect } from "react";

// const INTRO_DURATION = 3090;

// export default function IntroAnimation() {
//   const [slidUp,  setSlidUp]  = useState(false);
//   const [hidden,  setHidden]  = useState(false);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setSlidUp(true), INTRO_DURATION);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleTransitionEnd = (e) => {
//     if (e.propertyName === "transform") {
//       setHidden(true);
//       setVisible(true);
//     }
//   };

//   return (
//     <>
//       {/* ── INTRO ── */}
//       {!hidden && (
//         <section
//           onTransitionEnd={handleTransitionEnd}
//           className={`bg-black w-full flex justify-center items-center h-screen text-center
//             font-cookie fixed top-0 left-0 z-[9999]
//             transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]
//             ${slidUp ? "-translate-y-full" : "translate-y-0"}`}
//         >
//           <div className="flex flex-col gap-2 overflow-hidden h-fit">

//             {/* Title */}
//             <div className="w-full relative bottom-[-130px] animate-intro-rise text-center">
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur-alt">W</span>
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur">e</span>
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur-alt">l</span>
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur">c</span>
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur-alt">o</span>
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur">m</span>
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur-alt mr-[10px]">e</span>{" "}
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur">t</span>
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur-alt mr-[10px]">o</span>{" "}
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur">m</span>
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur-alt">y</span>
//               <br />
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur">Portfolio W</span>
//               <span className="text-[3.4rem] tracking-[3px] text-white font-medium animate-intro-unblur-last">ebsite</span>
//             </div>

//             {/* HR */}
//             <hr className="w-full rounded-[50%] m-0 relative origin-center animate-intro-expand" />

//           </div>
//         </section>
//       )}

//       {/* ── MAIN CONTENT ── */}
//       <div
//         className={`transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]
//           flex items-center justify-center h-screen text-white font-sans text-xl bg-[#080808]
//           ${visible ? "opacity-100" : "opacity-0"}`}
//       >
//         Your main content goes here.
//       </div>
//     </>
//   );
// }