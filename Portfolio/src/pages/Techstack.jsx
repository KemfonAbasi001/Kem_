import { useEffect, useRef } from 'react'

const skills = [
  { name: 'HTML',       sub: 'Languages' },
  { name: 'CSS',        sub: 'Languages' },
  { name: 'JavaScript', sub: 'Languages' },
  { name: 'Bootstrap',  sub: 'Framework' },
  { name: 'Tailwind',   sub: 'Framework' },
  { name: 'React',      sub: 'Framework' },
  { name: 'JQuery',     sub: 'Framework' },
  { name: 'Nodejs',     sub: 'Framework' },
  { name: 'Express',    sub: 'Framework' },
  { name: 'Figma',      sub: 'UI/UX Design' },
  { name: 'Github',     sub: 'Version Control' },
  { name: 'Vercel',     sub: 'Deployment & Hosting' },
  { name: 'Postgres',   sub: 'Database' },
  { name: 'MySQL',      sub: 'Database' },
  { name: 'Firebase',   sub: 'Database' },
]

const stackStyles = `
  .slide-up-item {
    opacity: 0;
    transform: translateY(36px);
    transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .slide-up-item.visible { opacity: 1; transform: translateY(0); }

  .label-reveal {
    opacity: 0; transform: translateY(16px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .label-reveal.visible { opacity: 1; transform: translateY(0); }

  /* ── Grid responsive ── */
  .stack-grid { grid-template-columns: repeat(3, 1fr); }
  .skill-card-name { font-size: 30px; }
  .skill-card-sub  { font-size: 13px; }
  .skill-card-py   { padding-top: 40px; padding-bottom: 40px; }

  @media (max-width: 767px) {
    .stack-grid { grid-template-columns: repeat(2, 1fr); }
    .skill-card-name { font-size: 20px; }
    .skill-card-py   { padding-top: 28px; padding-bottom: 28px; }
    .stack-label-text { font-size: 11px; letter-spacing: 0.18em; }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    .stack-grid { grid-template-columns: repeat(3, 1fr); }
    .skill-card-name { font-size: 24px; }
    .skill-card-py   { padding-top: 32px; padding-bottom: 32px; }
  }
`

function SkillCard({ name, sub, index }) {
  return (
    <div
      className="slide-up-item flex items-center flex-col gap-1.5 justify-center bg-[#141415] border border-[#2a2a2a] rounded-xl skill-card-py transition-colors duration-150 hover:bg-[#1c1c1e] cursor-default"
      data-index={index}
    >
      <code className="skill-card-name leading-9 font-medium text-[#e8e8e8]">{name}</code>
      <code className="skill-card-sub text-[#666]">{sub}</code>
    </div>
  )
}

function LabelReveal({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className="label-reveal">{children}</div>
}

function Stack() {
  const gridRef = useRef(null)

  useEffect(() => {
    const container = gridRef.current
    if (!container) return
    const items = container.querySelectorAll('.slide-up-item')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const index = parseInt(el.dataset.index, 10)
            setTimeout(() => el.classList.add('visible'), index * 60)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08 }
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{stackStyles}</style>
      <section className="w-full py-20 flex justify-center items-center bg-[#0a0a0b]" id="stack">
        <div className="w-[90%] flex flex-col">

          <LabelReveal>
            <div className="flex flex-row justify-between items-center py-10 px-0 w-full">
              <p className="stack-label-text inline-flex items-center gap-4 text-[13px] leading-none tracking-[0.25em] font-normal mb-7.5 text-[#B5B5B5] uppercase">
                Technologies & Tools
              </p>
            </div>
          </LabelReveal>

          <div ref={gridRef} className="grid stack-grid gap-5">
            {skills.map((s, i) => (
              <SkillCard key={s.name} {...s} index={i} />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default Stack