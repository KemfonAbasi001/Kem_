import { useState, useEffect, useRef } from 'react'
import looks from '../assets/group.jpg'

const testimonyStyles = `
  .testimony-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
  }
  .testimony-img-col  { width: 47%; }
  .testimony-text-col { width: 49%; }
  .testimony-heading  { font-size: 43px; line-height: 1.2; }

  @media (max-width: 767px) {
    .testimony-wrap {
      flex-direction: column;
      gap: 36px;
    }
    .testimony-img-col  { width: 100%; }
    .testimony-text-col { width: 100%; }
    .testimony-heading  { font-size: 26px; letter-spacing: -0.5px; }
    .testimony-step-row { gap: 7px; padding: 24px 0; flex-direction: column; }
    .testimony-step-title { font-size: 22px; min-width: auto; }
    .testimony-step-desc  { font-size: 17px; }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .testimony-wrap {
      flex-direction: column;
      gap: 40px;
    }
    .testimony-img-col  { width: 100%; }
    .testimony-text-col { width: 100%; }
    .testimony-heading  { font-size: 32px; }
  }
`

const steps = [
  { title: "Architecture", desc: "Building scalable digital systems with strong frontend/backend architecture." },
  { title: "Engineering",  desc: "Building high-performance applications with clean code and seamless user experiences." },
  { title: "Test & ship",  desc: "Building production-ready applications focused on performance and scalability." },
]

function Creative() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.15 }
    )
    const current = sectionRef.current
    if (current) observer.observe(current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{testimonyStyles}</style>
      <section
        ref={sectionRef}
        className="w-full py-20 flex justify-center items-center bg-[#0a0a0b]"
        id="testimony"
        style={{ overflowX: 'hidden' }}
      >
        <div className="testimony-wrap">

          {/* Image */}
          <div
            className="testimony-img-col overflow-hidden"
            style={{
              transform: inView ? 'translateX(0)' : 'translateX(-80px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.75s ease',
            }}
          >
            <img src={looks} alt="" className="w-full object-cover rounded-xl" />
          </div>

          {/* Text */}
          <div
            className="testimony-text-col flex flex-col gap-5"
            style={{
              transform: inView ? 'translateX(0)' : 'translateX(80px)',
              opacity: inView ? 1 : 0,
              transition: 'transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94) 0.1s, opacity 0.75s ease 0.1s',
            }}
          >
            <h1 className="testimony-heading font-bold tracking-[-1.5px] text-[#E5E5E5]">
              Turning imagination into{' '}
              <span className="text-[#515151]">responsive, modern, and impactful web experiences.</span>
            </h1>

            <div className="w-full flex flex-col ">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`testimony-step-row flex flex-row items-start gap-11 py-9 ${i !== steps.length - 1 ? 'border-b border-white/[0.07]' : ''}`}
                  style={{
                    transform: inView ? 'translateX(0)' : 'translateX(80px)',
                    opacity: inView ? 1 : 0,
                    transition: `transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94) ${0.2 + i * 0.1}s, opacity 0.75s ease ${0.2 + i * 0.1}s`,
                  }}
                >
                  <div className="min-w-32">
                    <p className="testimony-step-title text-[20px] font-semibold text-[#B5B5B5] leading-tight m-0">{step.title}</p>
                  </div>
                  <div>
                    <p className="testimony-step-desc text-[17px] text-[#515151] leading-6 m-0">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Creative