import { useEffect, useRef } from 'react'

import skinImg from '../assets/skin.png'
import lastly from '../assets/lastly.png'
import fyn from '../assets/fyn.png'
import twitter from '../assets/twitter_post.png'
import dine from '../assets/dine.png'

const workStyles = `
  .work-card {
    opacity: 0;
    transform: translateY(40px);
    transition:
      opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1),
      border-color 0.2s ease;
  }
  .work-card.in-view  { opacity: 1; transform: translateY(0); }
  .work-card:hover    { border-color: #3a3a3e; }

  .work-card-img {
    transition: transform 1.1s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: center center;
  }
  .work-card:hover .work-card-img { transform: scale(1.1); }

  .work-title-reveal {
    opacity: 0; transform: translateY(16px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .work-title-reveal.in-view { opacity: 1; transform: translateY(0); }

  .view-all-btn {
    transition: background-color 0.25s ease, color 0.25s ease,
      border-color 0.25s ease, transform 0.2s cubic-bezier(0.16,1,0.3,1);
  }
  .view-all-btn:hover {
    background-color: #16171b; color: #B5B5B5;
    border-color: #3a3a3e; transform: translateY(-1px);
  }

  /* ── Grid responsive ── */
  .work-grid { grid-template-columns: repeat(3, 1fr); }

  @media (max-width: 767px) {
    .work-grid { grid-template-columns: 1fr; gap: 50px; }
    .work-section-heading { font-size: 28px; }
    .work-section-para    { font-size: 15px; }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .work-grid { grid-template-columns: repeat(2, 1fr); }
    .work-section-heading { font-size: 32px; }
  }
`

function WorkCard({ skinImg: src, logo, logotext, index }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('in-view'), index * 80)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  const cardingf = "https://funn-nine.vercel.app/";

  return (
    <a ref={cardRef} href={cardingf} target="_blank" className="work-card rounded-lg bg-[#0a0a0a] border border-solid border-[#232427] overflow-hidden block">
      <div className="w-full overflow-hidden">
        <img className="w-full work-card-img block" src={src} alt={logo} />
      </div>
      <div className="p-4 flex flex-col gap-1.5">
        <div className="flex justify-between items-center">
          <code className="text-base text-[#E5E5E5] font-semibold">{logo}</code>
          <svg className="text-[#B5B5B5] h-5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
        <p className="text-[15px] text-[#B5B5B5]">{logotext}</p>
      </div>
    </a>
  )
}

const cards = [
  { src: skinImg, logo: 'SkinLovry Website',   logotext: 'Modern beauty and skincare platform designed with responsive interfaces, smooth interactions, and premium frontend structure.' },
  { src: lastly,  logo: 'Healthcare Website',  logotext: 'Hospital management platform focused on modern web development, responsive design, and seamless healthcare interactions.' },
  { src: fyn,     logo: 'Avenoir Website',     logotext: 'Luxury hotel experience focused on responsive systems, modern frontend development, and smooth interaction.' },
  { src: twitter, logo: 'Velmora Experience',  logotext: 'Velmora restaurant focused on responsive systems, modern frontend development, and smooth customer interaction.' },
  { src: dine,    logo: 'Taste Meets Elegance',logotext: 'Wine commerce platform focused on modern web development, responsive design, and seamless shopping interactions.' },
]

function Work() {
  const titleRef = useRef(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('in-view'); observer.unobserve(el) } },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{workStyles}</style>
      <section className="w-full py-20 flex justify-center items-center bg-[#0a0a0b]" id="work">
        <div className="w-[90%] flex flex-col gap-10">

          <div ref={titleRef} className="work-title-reveal flex justify-between">
            <h1 className="work-section-heading text-[40px] leading-tight text-[#E5E5E5] font-semibold">Selected Work</h1>
            <p className="work-section-para justify-right text-right text-[18px] text-[#B5B5B5] max-w-125">
              A growing collection of interfaces and web experiences built with simplicity, structure, and usability in mind.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="w-full box-border grid work-grid gap-8">
              {cards.map((card, i) => (
                <WorkCard key={card.logo} skinImg={card.src} logo={card.logo} logotext={card.logotext} index={i} />
              ))}
            </div>
            <a href="" className="view-all-btn py-2 px-5 text-sm rounded-lg bg-[#111114] border border-solid border-[#2a2a2e] text-[#E5E5E5] cursor-pointer self-center" id="view-all-btn">
              <code>View All Projects</code>
            </a>
          </div>

        </div>
      </section>
    </>
  )
}

export default Work