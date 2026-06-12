// import { useEffect, useRef } from 'react'
// import { useIntro } from '../context/IntroContext'

// export default function CoverPage() {
//   const introRef = useRef(null)
//   const { setIntroDone } = useIntro()

//   const INTRO_DURATION = 3010

//   useEffect(() => {
//     const intro = introRef.current
//     if (!intro) return

//     // Slide up after the animations finish
//     const slideTimer = setTimeout(() => {
//       intro.classList.add('intro--slide-up')
//     }, INTRO_DURATION)

//     // When slide-up transition ends, hide + fire the gate
//     const handleTransitionEnd = (e) => {
//       if (e.propertyName === 'transform') {
//         intro.style.display = 'none'
//         setIntroDone(true)   // ← unlocks all other section animations
//       }
//     }

//     intro.addEventListener('transitionend', handleTransitionEnd)

//     return () => {
//       clearTimeout(slideTimer)
//       intro.removeEventListener('transitionend', handleTransitionEnd)
//     }
//   }, [setIntroDone])

//   return (
//     <section
//       ref={introRef}
//       className="intro fixed inset-0 z-[9999] flex items-center justify-center text-center"
//       style={{ backgroundColor: 'black' }}
//     >
//       <div className="flex flex-col gap-2 overflow-hidden h-fit">

//         {/* Title */}
//         <div className="intro__title relative font-['Cookie',_cursive]">
//           {/* "Welcome" */}
//           <span className="intro__letter--unblur">W</span>
//           <span className="intro__letter--blur">e</span>
//           <span className="intro__letter--unblur">l</span>
//           <span className="intro__letter--blur">c</span>
//           <span className="intro__letter--unblur">o</span>
//           <span className="intro__letter--blur">m</span>
//           <span className="intro__letter--unblur intro__letter--spaced">e</span>
//           {' '}
//           {/* "to" */}
//           <span className="intro__letter--blur">t</span>
//           <span className="intro__letter--unblur intro__letter--spaced">o</span>
//           {' '}
//           {/* "my" */}
//           <span className="intro__letter--blur">m</span>
//           <span className="intro__letter--unblur">y</span>
//           <br />
//           {/* "Portfolio Website" */}
//           <span className="intro__letter--blur">Portfolio W</span>
//           <span className="intro__letter--last">ebsite</span>
//         </div>

//         {/* Rule */}
//         <hr className="intro__rule w-full m-0 rounded-full" />

//       </div>
//     </section>
//   )
// }
















// import { useEffect, useRef, useState } from 'react'
// import { useIntro } from '../context/IntroContext'

// export default function CoverPage() {
//   const introRef = useRef(null)
//   const { setIntroDone } = useIntro()

//   // Track current theme so we can style the cover correctly
//   const [isDark, setIsDark] = useState(
//     () => document.documentElement.classList.contains('dark')
//   )

//   const INTRO_DURATION = 3010

//   // Watch for dark-class changes on <html> (the Header's toggleTheme adds/removes it)
//   useEffect(() => {
//     const html = document.documentElement

//     const observer = new MutationObserver(() => {
//       setIsDark(html.classList.contains('dark'))
//     })

//     observer.observe(html, { attributes: true, attributeFilter: ['class'] })
//     return () => observer.disconnect()
//   }, [])

//   // Slide-up + gate logic (unchanged)
//   useEffect(() => {
//     const intro = introRef.current
//     if (!intro) return

//     const slideTimer = setTimeout(() => {
//       intro.classList.add('intro--slide-up')
//     }, INTRO_DURATION)

//     const handleTransitionEnd = (e) => {
//       if (e.propertyName === 'transform') {
//         intro.style.display = 'none'
//         setIntroDone(true)
//       }
//     }

//     intro.addEventListener('transitionend', handleTransitionEnd)

//     return () => {
//       clearTimeout(slideTimer)
//       intro.removeEventListener('transitionend', handleTransitionEnd)
//     }
//   }, [setIntroDone])

//   return (
//     <section
//       ref={introRef}
//       className="intro fixed inset-0 z-[9999] flex items-center justify-center text-center"
//       style={{ backgroundColor: isDark ? 'black' : 'white' }}
//     >
//       <div className="flex flex-col gap-2 overflow-hidden h-fit">

//         {/* Title */}
//         <div className="intro__title relative " style={{ color: isDark ? 'white' : 'black' }}>
//           {/* "Welcome" */}
//           <span className="intro__letter--unblur">W</span>
//           <span className="intro__letter--blur">e</span>
//           <span className="intro__letter--unblur">l</span>
//           <span className="intro__letter--blur">c</span>
//           <span className="intro__letter--unblur">o</span>
//           <span className="intro__letter--blur">m</span>
//           <span className="intro__letter--unblur intro__letter--spaced">e</span>
        
        
//           <span className="intro__letter--blur">t</span>
//           <span className="intro__letter--unblur intro__letter--spaced">o</span>
      
          
//           <span className="intro__letter--blur">m</span>
//           <span className="intro__letter--unblur">y</span>
//           <br />
        
//           <span className="intro__letter--blur">Portfolio W</span>
//           <span className="intro__letter--last">ebsite</span>
//         </div>

//         {/* Rule */}
//         <hr
//           className="intro__rule w-full m-0 rounded-[50%] relative"
//           style={{ borderColor: isDark ? 'white' : 'black' }}
//         />

//       </div>
//     </section>
//   )
// }













import { useEffect, useRef, useState } from 'react'
import { useIntro } from '../context/IntroContext'

// ─── Keyframe animations injected once as a <style> tag ──────────────────────
// Tailwind cannot express custom @keyframes, so we inject them once here.
const ANIM_STYLES = `
  @keyframes intro-rise {
    from { bottom: -130px; }
    to   { bottom: 0px; }
  }
  @keyframes intro-unblur {
    from { filter: blur(5px); }
    to   { filter: blur(0px); }
  }
  @keyframes intro-unblur-alt {
    from { filter: blur(5px); }
    to   { filter: blur(0px); }
  }
  @keyframes intro-unblur-last {
    from { filter: blur(5px); }
    to   { filter: blur(0px); }
  }
  @keyframes intro-expand {
    from { transform: scaleX(0); filter: blur(1.5px); }
    to   { transform: scaleX(1); filter: blur(0px); }
  }
`

// ─── Shared letter style builder ─────────────────────────────────────────────
const letterStyle = (animName, duration) => ({
  filter: 'blur(0px)',
  position: 'relative',
  animation: `${animName} ${duration} ease-in-out forwards`,
})

export default function CoverPage() {
  const introRef = useRef(null)
  const { setIntroDone } = useIntro()

  // Track current theme so cover matches the site theme
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  const INTRO_DURATION = 3010

  // Watch for dark-class changes on <html>
  useEffect(() => {
    const html = document.documentElement
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains('dark'))
    })
    observer.observe(html, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  // Slide-up + gate logic
  useEffect(() => {
    const intro = introRef.current
    if (!intro) return

    const slideTimer = setTimeout(() => {
      // Tailwind transition classes added programmatically
      intro.style.transform = 'translateY(-100%)'
    }, INTRO_DURATION)

    const handleTransitionEnd = (e) => {
      if (e.propertyName === 'transform') {
        intro.style.display = 'none'
        setIntroDone(true)
      }
    }

    intro.addEventListener('transitionend', handleTransitionEnd)
    return () => {
      clearTimeout(slideTimer)
      intro.removeEventListener('transitionend', handleTransitionEnd)
    }
  }, [setIntroDone])

  const fg = isDark ? 'white' : 'black'
  const bg = isDark ? 'black' : 'white'

  return (
    <>
      {/* Inject keyframes once */}
      <style>{ANIM_STYLES}</style>

      {/* ── Cover section ── */}
      <section
        ref={introRef}
        className="fixed inset-0 z-[9999] flex items-center justify-center text-center"
        style={{
          backgroundColor: bg,
          transform: 'translateY(0)',
          transition: 'transform 0.9s cubic-bezier(0.76, 0, 0.24, 1)',
          fontFamily: '"Cookie", cursive',
        }}
      >
        {/* Inner wrapper */}
        <div className="flex flex-col gap-2 overflow-hidden h-fit">

          {/* ── Title ── */}
          <div
            className="w-full"
            style={{
              bottom: '-130px',
              position: 'relative',
              animation: 'intro-rise 1s linear 1.2s forwards',
            }}
          >
            {/* font-size / letter-spacing / color applied via inline style on each span */}
            {[
              { text: 'W', anim: 'intro-unblur-alt', dur: '4.2s', spaced: false },
              { text: 'e', anim: 'intro-unblur',     dur: '3.8s', spaced: false },
              { text: 'l', anim: 'intro-unblur-alt', dur: '4.2s', spaced: false },
              { text: 'c', anim: 'intro-unblur',     dur: '3.8s', spaced: false },
              { text: 'o', anim: 'intro-unblur-alt', dur: '4.2s', spaced: false },
              { text: 'm', anim: 'intro-unblur',     dur: '3.8s', spaced: false },
              { text: 'e', anim: 'intro-unblur-alt', dur: '4.2s', spaced: true  },
            ].map(({ text, anim, dur, spaced }, i) => (
              <span
                key={i}
                style={{
                  ...letterStyle(anim, dur),
                  fontSize: '3.4rem',
                  letterSpacing: '3px',
                  color: fg,
                  fontWeight: 500,
                  ...(spaced ? { marginRight: '10px' } : {}),
                }}
              >
                {text}
              </span>
            ))}

            {/* space between "Welcome" and "to" */}
            {' '}

            <span style={{ ...letterStyle('intro-unblur', '3.8s'),     fontSize: '3.4rem', letterSpacing: '3px', color: fg, fontWeight: 500 }}>t</span>
            <span style={{ ...letterStyle('intro-unblur-alt', '4.2s'), fontSize: '3.4rem', letterSpacing: '3px', color: fg, fontWeight: 500, marginRight: '10px' }}>o</span>

            {' '}

            <span style={{ ...letterStyle('intro-unblur', '3.8s'),     fontSize: '3.4rem', letterSpacing: '3px', color: fg, fontWeight: 500 }}>m</span>
            <span style={{ ...letterStyle('intro-unblur-alt', '4.2s'), fontSize: '3.4rem', letterSpacing: '3px', color: fg, fontWeight: 500 }}>y</span>

            <br />

            <span style={{ ...letterStyle('intro-unblur', '3.8s'),     fontSize: '3.4rem', letterSpacing: '3px', color: fg, fontWeight: 500 }}>Portfolio W</span>
            <span style={{ ...letterStyle('intro-unblur-last', '4.4s'), fontSize: '3.4rem', letterSpacing: '3px', color: fg, fontWeight: 500 }}>ebsite</span>
          </div>

          {/* ── Rule ── */}
          <hr
            className="w-full m-0"
            style={{
              borderRadius: '50%',
              borderColor: fg,
              transform: 'scaleX(0)',
              transformOrigin: 'center',
              animation: 'intro-expand 2s ease-in-out forwards',
            }}
          />

        </div>
      </section>
    </>
  )
}