import { useState, useEffect, useRef } from 'react'

import imgsrc from '../assets/skin.png'
import one from '../assets/lastly.png'
import two from '../assets/fyn.png'
import three from '../assets/twitter_post.png'
import four from '../assets/dine.png'
import five from '../assets/log.png'
import six from '../assets/Eden.png'

// ─── All project data lives here ──────────────────────────────────────────────
// Add your real live URLs to each `link` field
const projects = [
  {
    link: "",
    src: imgsrc,
    title: "SkinLovry Website",
    text: "Modern beauty and skincare platform designed with responsive interfaces, smooth interactions, and premium frontend structure.",
    year: "2025"
  },
  {
    link: "",
    src: one,
    title: "Healthcare Website",
    text: "Hospital management platform focused on modern web development, responsive design, and seamless healthcare interactions.",
    year: "2026"
  },
  {
    link: "",
    src: two,
    title: "Avenoir Website",
    text: "Luxury hotel experience focused on responsive systems, modern frontend development, and smooth interaction.",
    year: "2026"
  },
  {
    link: "",
    src: three,
    title: "Velmora Experience",
    text: "Velmora restaurant focused on responsive systems, modern frontend development, and smooth customer interaction.",
    year: "2026"
  },
  {
    link: "",
    src: four,
    title: "Taste Meets Elegance",
    text: "Wine commerce platform focused on modern web development, responsive design, and seamless shopping interactions.",
    year: "2026"
  },
  {
    link: "",
    src: five,
    title: "CozaStore Website",
    text: "A stylish online store delivering seamless product browsing, intuitive navigation, and a premium retail experience across devices.",
    year: "2025"
  },
  {
    link: "",
    src: six,
    title: "Eden Garden",
    text: "A clean and responsive gardening website focused on nature-inspired design, service discovery, and effortless user experience.",
    year: "2026"
  }
]

// ─── WorkCard Component ────────────────────────────────────────────────────────
function WorkCard({ link, src, title, text, year }) {
  return (
    <div className="rounded-lg bg-[#0a0a0a] border border-solid border-[#232427] overflow-hidden">
      <a href={link} target="_blank" rel="noreferrer" className="block">
        <div className="w-full overflow-hidden">
          <img className="w-full block" src={src} alt={title} />
        </div>
        <div className="p-4 flex flex-col gap-2.25">
          <div className="flex justify-between items-center">
            <h3 className="text-[#E5E5E5] text-[18px] font-semibold">{title}</h3>
            <svg className="text-[#B5B5B5] h-5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          <p className="text-[18px] text-[#B5B5B5]">{text}</p>
          <div className="flex justify-between border-[#515151] border-solid border-b-0 border-t-[0.5px] border-r-0 border-l-0 pt-2.75">
            <p className="font-fira text-[13px]">{year} Project</p>
            <span className="font-fira text-[13px] flex items-center gap-0.5">VIEW LIVE PROJECT</span>
          </div>
        </div>
      </a>
    </div>
  )
}

// ─── Work Section ──────────────────────────────────────────────────────────────
function Work() {
  // Tracks whether the extra cards are visible
  const [showAll, setShowAll] = useState(false)

  // Holds a ref to each extra card's wrapper div so we can animate it
  const extraCardsRef = useRef([])

  // First 5 are always in the DOM. The rest are "extra".
  const initialProjects = projects.slice(0, 5)
  const extraProjects = projects.slice(5)

  // Runs whenever showAll flips to true
  useEffect(function animateExtraCards() {
    if (!showAll) return

    extraCardsRef.current.forEach(function (card, index) {
      if (!card) return

      // Stagger: card 0 animates at 0ms, card 1 at 100ms, etc.
      setTimeout(function () {
        card.style.opacity = '1'
        card.style.transform = 'translateY(0)'
      }, index * 100)
    })
  }, [showAll])

  function handleViewAll() {
    setShowAll(true)
  }

  return (
    <>
      <section className="w-full py-20 flex justify-center items-center bg-[#0a0a0b]" id="work">
        <div className="w-[90%] flex flex-col gap-10">

          <div className="flex flex-col gap-1">
            <h1 className="text-[40px] leading-tight text-[#E5E5E5] font-semibold">Selected Work</h1>
            <p className="text-[18px] text-[#B5B5B5] max-w-125">
              A growing collection of interfaces and web experiences built with simplicity, structure, and usability in mind.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 gap-12">

            {/* ── Always-visible first 5 cards ── */}
            {initialProjects.map(function (project) {
              return (
                <WorkCard
                  key={project.title}
                  link={project.link}
                  src={project.src}
                  title={project.title}
                  text={project.text}
                  year={project.year}
                />
              )
            })}

            {/* ── Extra cards: only mount when showAll is true, then animate in ── */}
            {showAll && extraProjects.map(function (project, index) {
              return (
                <div
                  key={project.title}
                  ref={function (el) { extraCardsRef.current[index] = el }}
                  style={{
                    opacity: 0,
                    transform: 'translateY(20px)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease'
                  }}
                >
                  <WorkCard
                    link={project.link}
                    src={project.src}
                    title={project.title}
                    text={project.text}
                    year={project.year}
                  />
                </div>
              )
            })}

          </div>

          {/* ── Button disappears once all projects are shown ── */}
          {!showAll && (
            <button
              onClick={handleViewAll}
              className="py-2.75 px-5.5 text-sm rounded-lg bg-[#111114] border border-solid border-[#2a2a2e] text-[#E5E5E5] cursor-pointer font-medium self-center font-fira"
            >
              View All Projects
            </button>
          )}

        </div>
      </section>
    </>
  )
}

export default Work