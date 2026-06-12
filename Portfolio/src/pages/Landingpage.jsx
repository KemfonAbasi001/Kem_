// import cv from '../assets/CV.pdf'


// function LandingPageSection() {

//   return (
//     <>
//       <section className="w-full pt-40 pb-24 flex justify-center bg-[#f4f4f4] dark:bg-[#0a0a0b]">
//         <div className="w-[90%] text-center flex flex-col items-center">
//             <a href="" className="font-fira py-1 px-3.5 rounded-full flex gap-2 items-center lg:text-[12.5px] text-[16px] bg-inherit dark:bg-[#111114] border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] text-[#1c1c1c] dark:text-[#B5B5B5] cursor-pointer">
//               <svg className="h-4 lg:h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
//                 <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
//               </svg>
//             Open to work</a>
//             <h1 className="font-goggle text-[2.7rem] leading-13.75 font-semibold text-[#0f0f0f] dark:text-[#E5E5E5] tracking-tight mt-4 mb-3 lg:mt-2 lg:mb-1">Build with KemfonAbasi_</h1>
//             <p className="text-[#1c1c1c] dark:text-[#B5B5B5] text-[1.15rem] leading-7 font-normal">Crafting modern digital experiences focused on quality, performance, and<br className="md:block hidden lg:block"/> professional web development standards.</p>
//             <div className="flex gap-5 mt-6 lg:mt-4">
//               <a href="" className="font-fira py-2.75 px-4.75 lg:py-1.75 lg:px=3.25 lg:text-[13px] border-0 text-[15px] leading-5 bg-[#1c1c1c] text-[#f4f4f4] dark:bg-[#E5E5E5] dark:text-[#111114] font-medium rounded-lg">View My Work</a>
//               <a href="" className="font-fira py-2.75 px-4.75 lg:py-1.75 lg:px=3.25 lg:text-[13px] text-[15px] leading-5 font-medium border border-solid border[#9b9b9b] dark:border-[#2a2a2e] text-[#1c1c1c] dark:text-[#E5E5E5] rounded-lg cursor-pointer">Open Resume</a>
//             </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default LandingPageSection









// import { useEffect, useRef } from 'react'
// import cv from '../assets/CV.pdf'

// // ─── Hook: slide up + fade in once, with a delay ──────────────────────────────
// function useSlideUp(ref, { delay = 0, threshold = 0.1 } = {}) {
//   useEffect(function () {
//     const el = ref.current
//     if (!el) return

//     el.style.opacity = '0'
//     el.style.transform = 'translateY(28px)'
//     el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`

//     const observer = new IntersectionObserver(
//       function (entries) {
//         entries.forEach(function (entry) {
//           if (!entry.isIntersecting) return
//           el.style.opacity = '1'
//           el.style.transform = 'translateY(0)'
//           observer.unobserve(el)
//         })
//       },
//       { threshold }
//     )

//     observer.observe(el)
//     return function () { observer.disconnect() }
//   }, [])
// }

// function LandingPageSection() {
//   const badgeRef   = useRef(null)
//   const headingRef = useRef(null)
//   const subRef     = useRef(null)
//   const btnsRef    = useRef(null)

//   useSlideUp(badgeRef,   { delay: 0   })
//   useSlideUp(headingRef, { delay: 120 })
//   useSlideUp(subRef,     { delay: 220 })
//   useSlideUp(btnsRef,    { delay: 330 })

//   return (
//     <>
//       <section className="w-full pt-40 pb-24 flex justify-center bg-[#f4f4f4] dark:bg-[#0a0a0b]">
//         <div className="w-[90%] text-center flex flex-col items-center">

//           {/* ── Badge ── */}
//           <a
//             ref={badgeRef}
//             href=""
//             className="font-fira py-1 px-3.5 rounded-full flex gap-2 items-center lg:text-[12.5px] text-[16px] bg-inherit dark:bg-[#111114] border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] text-[#1c1c1c] dark:text-[#B5B5B5] cursor-pointer"
//           >
//             <svg className="h-4 lg:h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
//               <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
//             </svg>
//             Open to work
//           </a>

//           {/* ── Heading ── */}
//           <h1
//             ref={headingRef}
//             className="font-goggle text-[2.7rem] leading-13.75 font-semibold text-[#0f0f0f] dark:text-[#E5E5E5] tracking-tight mt-4 mb-3 lg:mt-2 lg:mb-1"
//           >
//             Build with KemfonAbasi_
//           </h1>

//           {/* ── Subtext ── */}
//           <p
//             ref={subRef}
//             className="text-[#1c1c1c] dark:text-[#B5B5B5] text-[1.15rem] leading-7 font-normal"
//           >
//             Crafting modern digital experiences focused on quality, performance, and
//             <br className="md:block hidden lg:block"/> professional web development standards.
//           </p>

//           {/* ── Buttons ── */}
//           <div ref={btnsRef} className="flex gap-5 mt-6 lg:mt-4">
//             <a
//               href=""
//               className="font-fira py-2.75 px-4.75 lg:py-1.75 lg:px=3.25 lg:text-[13px] border-0 text-[15px] leading-5 bg-[#1c1c1c] text-[#f4f4f4] dark:bg-[#E5E5E5] dark:text-[#111114] font-medium rounded-lg"
//             >
//               View My Work
//             </a>
//             <a
//               href={cv}
//               target="_blank"
//               rel="noreferrer"
//               className="font-fira py-2.75 px-4.75 lg:py-1.75 lg:px=3.25 lg:text-[13px] text-[15px] leading-5 font-medium border border-solid border[#9b9b9b] dark:border-[#2a2a2e] text-[#1c1c1c] dark:text-[#E5E5E5] rounded-lg cursor-pointer"
//             >
//               Open Resume
//             </a>
//           </div>

//         </div>
//       </section>
//     </>
//   )
// }

// export default LandingPageSection




















// import { useEffect, useRef } from 'react'
// import cv from '../assets/CV.pdf'

// function LandingPageSection() {
//   const badgeRef   = useRef(null)
//   const headingRef = useRef(null)
//   const subRef     = useRef(null)
//   const btnsRef    = useRef(null)

//   useEffect(function () {
//     const elements = [
//       { el: badgeRef.current,   delay: 0   },
//       { el: headingRef.current, delay: 120 },
//       { el: subRef.current,     delay: 240 },
//       { el: btnsRef.current,    delay: 360 },
//     ]

//     // Set all to hidden immediately (before first paint)
//     elements.forEach(function ({ el }) {
//       if (!el) return
//       el.style.opacity = '0'
//       el.style.transform = 'translateY(28px)'
//       el.style.transition = 'none'
//     })

//     // Animate each in with its staggered delay
//     const timers = elements.map(function ({ el, delay }) {
//       return setTimeout(function () {
//         if (!el) return
//         el.style.transition = 'opacity 0.65s ease, transform 0.65s ease'
//         el.style.opacity = '1'
//         el.style.transform = 'translateY(0)'
//       }, delay)
//     })

//     return function () { timers.forEach(clearTimeout) }
//   }, [])

//   return (
//     <>
//       <section className="w-full pt-40 pb-24 flex justify-center bg-[#f4f4f4] dark:bg-[#0a0a0b]">
//         <div className="w-[90%] text-center flex flex-col items-center">

//           {/* ── Badge ── */}
//           <a
//             ref={badgeRef}
//             href=""
//             className="font-fira py-1 px-3.5 rounded-full flex gap-2 items-center lg:text-[12.5px] text-[16px] bg-inherit dark:bg-[#111114] border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] text-[#1c1c1c] dark:text-[#B5B5B5] cursor-pointer"
//           >
//             <svg className="h-4 lg:h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
//               <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
//             </svg>
//             Open to work
//           </a>

//           {/* ── Heading ── */}
//           <h1
//             ref={headingRef}
//             className="font-goggle text-[2.7rem] leading-13.75 font-semibold text-[#0f0f0f] dark:text-[#E5E5E5] tracking-tight mt-4 mb-3 lg:mt-2 lg:mb-1"
//           >
//             Build with KemfonAbasi_
//           </h1>

//           {/* ── Subtext ── */}
//           <p
//             ref={subRef}
//             className="text-[#1c1c1c] dark:text-[#B5B5B5] text-[1.15rem] leading-7 font-normal"
//           >
//             Crafting modern digital experiences focused on quality, performance, and
//             <br className="md:block hidden lg:block" /> professional web development standards.
//           </p>

//           {/* ── Buttons ── */}
//           <div ref={btnsRef} className="flex gap-5 mt-6 lg:mt-4">
//             <a
//               href=""
//               className="font-fira py-2.75 px-4.75 lg:py-1.75 lg:px=3.25 lg:text-[13px] border-0 text-[15px] leading-5 bg-[#1c1c1c] text-[#f4f4f4] dark:bg-[#E5E5E5] dark:text-[#111114] font-medium rounded-lg"
//             >
//               View My Work
//             </a>
//             <a
//               href={cv}
//               target="_blank"
//               rel="noreferrer"
//               className="font-fira py-2.75 px-4.75 lg:py-1.75 lg:px=3.25 lg:text-[13px] text-[15px] leading-5 font-medium border border-solid border[#9b9b9b] dark:border-[#2a2a2e] text-[#1c1c1c] dark:text-[#E5E5E5] rounded-lg cursor-pointer"
//             >
//               Open Resume
//             </a>
//           </div>

//         </div>
//       </section>
//     </>
//   )
// }

// export default LandingPageSection





















import { useEffect, useRef } from 'react'
import { useIntro } from '../context/IntroContext'
import cv from '../assets/CV.pdf'

function LandingPageSection() {
  const { introDone } = useIntro()

  const badgeRef   = useRef(null)
  const headingRef = useRef(null)
  const subRef     = useRef(null)
  const btnsRef    = useRef(null)

  // ── Animate in ONLY after intro cover-page is gone ──────────────────────────
  useEffect(function () {
    if (!introDone) return

    const elements = [
      { el: badgeRef.current,   delay: 0   },
      { el: headingRef.current, delay: 120 },
      { el: subRef.current,     delay: 240 },
      { el: btnsRef.current,    delay: 360 },
    ]

    // Ensure invisible before animating
    elements.forEach(function ({ el }) {
      if (!el) return
      el.style.opacity   = '0'
      el.style.transform = 'translateY(28px)'
      el.style.transition = 'none'
    })

    const timers = elements.map(function ({ el, delay }) {
      return setTimeout(function () {
        if (!el) return
        el.style.transition = 'opacity 0.65s ease, transform 0.65s ease'
        el.style.opacity   = '1'
        el.style.transform = 'translateY(0)'
      }, delay)
    })

    return function () { timers.forEach(clearTimeout) }
  }, [introDone])

  // ── "View My Work" scrolls to the work section ───────────────────────────────
  function handleViewWork(e) {
    e.preventDefault()
    const section   = document.getElementById('work')
    const navHeight = document.querySelector('nav')?.offsetHeight || 0
    if (!section) return
    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - navHeight - 12,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <section className="w-full pt-40 pb-24 flex justify-center bg-[#f4f4f4] dark:bg-[#0a0a0b]">
        <div className="w-[90%] text-center flex flex-col items-center">

          {/* ── Badge ── */}
          <a
            ref={badgeRef}
            href=""
            style={{ opacity: 0, transform: 'translateY(28px)' }}
            className="font-fira py-1 px-3.5 rounded-full flex gap-2 items-center lg:text-[12.5px] text-[16px] bg-inherit dark:bg-[#111114] border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] text-[#1c1c1c] dark:text-[#B5B5B5] cursor-pointer"
          >
            <svg className="h-4 lg:h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
              <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
            </svg>
            Open to work
          </a>

          {/* ── Heading ── */}
          <h1
            ref={headingRef}
            style={{ opacity: 0, transform: 'translateY(28px)' }}
            className="font-goggle text-[2.7rem] leading-13.75 font-semibold text-[#0f0f0f] dark:text-[#E5E5E5] tracking-tight mt-4 mb-3 lg:mt-2 lg:mb-1"
          >
            Build with KemfonAbasi_
          </h1>

          {/* ── Subtext ── */}
          <p
            ref={subRef}
            style={{ opacity: 0, transform: 'translateY(28px)' }}
            className="text-[#1c1c1c] dark:text-[#B5B5B5] text-[1.15rem] leading-7 font-normal"
          >
            Crafting modern digital experiences focused on quality, performance, and
            <br className="md:block hidden lg:block" /> professional web development standards.
          </p>

          {/* ── Buttons ── */}
          <div
            ref={btnsRef}
            style={{ opacity: 0, transform: 'translateY(28px)' }}
            className="flex gap-5 mt-6 lg:mt-4"
          >
            {/* Scrolls to Selected Work section */}
            <a
              href="#work"
              onClick={handleViewWork}
              className="font-fira py-2.75 px-4.75 lg:py-1.75 lg:px-3.25 lg:text-[13px] border-0 text-[15px] leading-5 bg-[#1c1c1c] text-[#f4f4f4] dark:bg-[#E5E5E5] dark:text-[#111114] font-medium rounded-lg cursor-pointer"
            >
              View My Work
            </a>
            <a
              href={cv}
              target="_blank"
              rel="noreferrer"
              className="font-fira py-2.75 px-4.75 lg:py-1.75 lg:px-3.25 lg:text-[13px] text-[15px] leading-5 font-medium border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] text-[#1c1c1c] dark:text-[#E5E5E5] rounded-lg cursor-pointer"
            >
              Open Resume
            </a>
          </div>

        </div>
      </section>
    </>
  )
}

export default LandingPageSection