// function ProcessSection() {
//   return(
//     <>
//       <section className="w-full pb-6.25 flex justify-center items-center bg-[#f4f4f4] dark:bg-[#0a0a0b]">
//         <div className="w-[90%] flex flex-col lg:text-right">
//           <p className="font-semibold text-[1.9rem] lg:text-[45px] lg:leading-13.75 tracking-0.5 text-[#0f0f0f] dark:text-[#E5E5E5]">
//             Turning imagination into<br/><span className="text-[#5a5a5a] dark:text-[#515151]">responsive, modern, and<br/> impactful web experiences.</span>
//           </p>
//         </div>
//       </section>
//     </>
//   )
// }

// export default ProcessSection









import { useEffect, useRef } from 'react'

function ProcessSection() {
  const textRef = useRef(null)

  useEffect(function () {
    const el = textRef.current
    if (!el) return

    el.style.opacity = '0'
    el.style.transform = 'translateX(-48px)'
    el.style.transition = 'none'

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return
          setTimeout(function () {
            el.style.transition = 'opacity 0.65s ease, transform 0.65s ease'
            el.style.opacity = '1'
            el.style.transform = 'translateX(0)'
          }, 16)
          observer.unobserve(el)
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return function () { observer.disconnect() }
  }, [])

  return (
    <>
      <section className="w-full pb-6.25 flex justify-center items-center bg-[#f4f4f4] dark:bg-[#0a0a0b]">
        <div className="w-[90%] flex flex-col lg:text-right">
          <p ref={textRef} className="font-semibold text-[1.9rem] lg:text-[45px] lg:leading-13.75 tracking-0.5 text-[#0f0f0f] dark:text-[#E5E5E5]">
            Turning imagination into<br/><span className="text-[#5a5a5a] dark:text-[#515151]">responsive, modern, and<br/> impactful web experiences.</span>
          </p>
        </div>
      </section>
    </>
  )
}

export default ProcessSection