// import { useState, useEffect, useRef } from 'react'


// function HeaderSec() {
//   return (
//     <>
//       <nav className="bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 px-0 fixed top-0 z-200 border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[24px] font-fira font-medium">Jonah.</a>

//             <div className="flex gap-3 items-center justify-center">
//                 <svg id="theme-icon" className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                   <circle cx="12" cy="12" r="4"></circle>
//                   <path d="M12 2v2"></path> 
//                   <path d="M12 20v2"></path> 
//                   <path d="m4.93 4.93 1.41 1.41"></path> 
//                   <path d="m17.66 17.66 1.41 1.41"></path> 
//                   <path d="M2 12h2"></path> 
//                   <path d="M20 12h2"></path> 
//                   <path d="m6.34 17.66-1.41 1.41"></path> 
//                   <path d="m19.07 4.93-1.41 1.41"></path> 
//                 </svg>
//                 <button className="cursor-pointer font-fira font-medium text-[15px] bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-black" id="open-cv-btn-mobile">Hire Me</button>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec







// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[white] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 px-0 fixed top-0 z-200 border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[24px] font-fira font-medium">Jonah.</a>

//             <div className="flex gap-3 items-center justify-center">
//                 <button
//                   onClick={toggleTheme}
//                   className="bg-none border-none cursor-pointer text-[#f7f3f3] dark:text-[#f7f3f3]"
//                   aria-label="Toggle theme"
//                 >
//                   {isDark ? <SunIcon /> : <MoonIcon />}
//                 </button>
//                 <button className="cursor-pointer font-fira font-medium text-[15px] bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-black" id="open-cv-btn-mobile">Hire Me</button>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec





























































// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//             <ul class="hidden lg:flex gap-3 items-center justify-center lg:gap-8">
//                 <li><a href="#home"        class="text-[15px] text-[#E5E5E5]" data-scroll="home">Home</a></li>
//                 <li><a href="#about"       class="text-[15px] text-[#B5B5B5]" data-scroll="about">About</a></li>
//                 <li><a href="#work"        class="text-[15px] text-[#B5B5B5]" data-scroll="work">Work</a></li>
//                 <li><a href="#testimonials" class="text-[15px] text-[#B5B5B5]" data-scroll="testimonials">Testimony</a></li>
//                 <li><a href="#footer"      class="text-[15px] text-[#B5B5B5]" data-scroll="footer">Contact</a></li>
//             </ul>

//             <div className="flex gap-3 items-center justify-center">
//                 <button
//                   onClick={toggleTheme}
//                   className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//                   aria-label="Toggle theme"
//                 >
//                   {isDark ? <SunIcon /> : <MoonIcon />}
//                 </button>
//                 <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black" id="open-cv-btn-mobile">Hire Me</a>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                     <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                     <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec


















































// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//           <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//           {/* Desktop nav links */}
//           <ul className="hidden lg:flex gap-3 items-center justify-center lg:gap-8">
//             <li><a href="#home"         className="text-[15px] text-[#E5E5E5]" data-scroll="home">Home</a></li>
//             <li><a href="#about"        className="text-[15px] text-[#B5B5B5]" data-scroll="about">About</a></li>
//             <li><a href="#work"         className="text-[15px] text-[#B5B5B5]" data-scroll="work">Work</a></li>
//             <li><a href="#testimonials" className="text-[15px] text-[#B5B5B5]" data-scroll="testimonials">Testimony</a></li>
//             <li><a href="#footer"       className="text-[15px] text-[#B5B5B5]" data-scroll="footer">Contact</a></li>
//           </ul>

//           <div className="flex gap-3 items-center justify-center">
//             <button
//               onClick={toggleTheme}
//               className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black">Hire Me</a>
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden"
//             >
//               {menuOpen ? (
//                 <svg className="w-5 h-5 text-[#1c1c1c] dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <>
//                   <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                   <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                   <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile full-screen menu */}
//       {menuOpen && (
//         <div className="lg:hidden fixed top-11.25 left-0 w-full h-[calc(100vh-45px)] bg-[#f4f4f4] dark:bg-[rgba(10,10,11,0.99)] z-199 flex flex-col items-start justify-start pt-10 pl-6 gap-10">
//           <ul className="flex flex-col gap-10">
//             <li><a href="#home"         onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#1c1c1c] dark:text-[#E5E5E5]">Home</a></li>
//             <li><a href="#about"        onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">About</a></li>
//             <li><a href="#work"         onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">Work</a></li>
//             <li><a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">Testimony</a></li>
//             <li><a href="#footer"       onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">Contact</a></li>
//           </ul>
//         </div>
//       )}
//     </>
//   )
// }

// export default HeaderSec











// const [activeLink, setActiveLink] = useState('home')
// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a 7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [hidden, setHidden] = useState(false)
//   const [activeLink, setActiveLink] = useState('home')

//   const lastScrollY = useRef(0)
//   const ticking = useRef(false)

//   // Init dark mode
//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   // Scroll hide / show
//   useEffect(() => {
//     function updateHeader() {
//       const currentScrollY = window.scrollY

//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setHidden(true)
//       } else if (currentScrollY < lastScrollY.current) {
//         setHidden(false)
//       }

//       lastScrollY.current = currentScrollY
//       ticking.current = false
//     }

//     function onScroll() {
//       if (!ticking.current) {
//         window.requestAnimationFrame(updateHeader)
//         ticking.current = true
//       }
//     }

//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [menuOpen])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

// const handleNavClick = (e, target) => {
//   e.preventDefault()

//   setActiveLink(target)
//   setMenuOpen(false)

//   setTimeout(() => {
//     if (target === 'home') {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       })
//       return
//     }

//     const section = document.getElementById(target)

//     if (section) {
//       const navHeight =
//         document.querySelector('nav')?.offsetHeight || 0

//       const top =
//         section.getBoundingClientRect().top +
//         window.scrollY -
//         navHeight -
//         12

//       window.scrollTo({
//         top,
//         behavior: 'smooth',
//       })
//     }
//   }, menuOpen ? 350 : 0)
// }
//   return (
//     <>
//       <nav
//   style={{
//     transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
//     transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//   }}
//   className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0"
// >
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//           <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//           {/* Desktop nav links */}
//           <ul className="hidden lg:flex gap-3 items-center justify-center lg:gap-8">
//   {[
//     { target: 'home', label: 'Home' },
//     { target: 'work', label: 'Work' },
//     { target: 'about', label: 'About' },
//     { target: 'stack', label: 'Tools' },
//     { target: 'footer', label: 'Contact' },
//   ].map(({ target, label }) => (
//     <li key={target}>
//       <a
//         href={`#${target}`}
//         onClick={(e) => handleNavClick(e, target)}
//         className={`
//           text-[15px]
//           px-2.5
//           py-1
//           rounded-lg
//           transition-all
//           duration-200
//           ${
//             activeLink === target
//   ? 'text-[#0a0a0b] dark:text-[#E5E5E5]'
//   : 'text-[#B5B5B5] dark:text-[#9b9b9b] hover:bg-[#e9e9e9] dark:hover:bg-[#141416] hover:text-[#0a0a0b] dark:hover:text-[#E5E5E5]'}
//         `}
//       >
//         {label}
//       </a>
//     </li>
//   ))}
// </ul>

//           <div className="flex gap-3 items-center justify-center">
//             <button
//               onClick={toggleTheme}
//               className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black">Hire Me</a>

//             {/* Animated hamburger button */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden w-5 h-5 relative justify-center items-center"
//               aria-label="Toggle menu"
//             >
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
//               />
//               <span
//                 style={{ transition: 'opacity 0.2s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
//               />
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
//               />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile full-screen menu */}
//       <div
//         style={{
//           transition: 'opacity 0.3s ease, transform 0.35s ease',
//           pointerEvents: menuOpen ? 'all' : 'none',
//         }}
//         className={`lg:hidden fixed top-11.25 left-0 w-full h-[calc(100vh-45px)] bg-[#f4f4f4] dark:bg-[rgba(10,10,11,0.99)] z-199 flex flex-col items-start justify-start pt-10 pl-6 gap-10 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
//       >
//         <ul className="flex flex-col gap-10">
//           {[
//   { target: 'home', label: 'Home' },
//   { target: 'work', label: 'Work' },
//   { target: 'about', label: 'About' },
//   { target: 'stack', label: 'Tools' },
//   { target: 'footer', label: 'Contact' },
// ].map(({ target, label }, i) => (
//   <li
//     key={target}
//     style={{
//       transition: `opacity 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms, transform 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms`,
//       opacity: menuOpen ? 1 : 0,
//       transform: menuOpen
//         ? 'translateY(0)'
//         : 'translateY(12px)',
//     }}
//   >
//     <a
//       href={`#${target}`}
//       onClick={(e) => handleNavClick(e, target)}
//       className={`text-[26px] font-medium ${
//   activeLink === target
//     ? 'text-[#1c1c1c] dark:text-[#E5E5E5]'
//     : 'text-[#555] dark:text-[#B5B5B5]'
// }`}
//     >
//       {label}
//     </a>
//   </li>
// ))}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default HeaderSec






















// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a 7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [hidden, setHidden] = useState(false)
//   const [activeLink, setActiveLink] = useState('home')

//   const lastScrollY = useRef(0)
//   const ticking = useRef(false)

//   // Init dark mode
//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   // Scroll hide / show
//   useEffect(() => {
//     function updateHeader() {
//       const currentScrollY = window.scrollY

//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setHidden(true)
//       } else if (currentScrollY < lastScrollY.current) {
//         setHidden(false)
//       }

//       lastScrollY.current = currentScrollY
//       ticking.current = false
//     }

//     function onScroll() {
//       if (!ticking.current) {
//         window.requestAnimationFrame(updateHeader)
//         ticking.current = true
//       }
//     }

//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [menuOpen])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

// const handleNavClick = (e, target) => {
//   e.preventDefault()

//   setActiveLink(target)
//   setMenuOpen(false)

//   setTimeout(() => {
//     if (target === 'home') {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       })
//       return
//     }

//     const section = document.getElementById(target)

//     if (section) {
//       const navHeight =
//         document.querySelector('nav')?.offsetHeight || 0

//       const top =
//         section.getBoundingClientRect().top +
//         window.scrollY -
//         navHeight -
//         12

//       window.scrollTo({
//         top,
//         behavior: 'smooth',
//       })
//     }
//   }, menuOpen ? 350 : 0)
// }
//   return (
//     <>
//       <nav
//   style={{
//     transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
//     transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//   }}
//   className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0"
// >
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//           {/* <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a> */}
//           <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//           {/* Desktop nav links */}
//           <ul className="hidden lg:flex gap-3 items-center justify-center lg:gap-6">
//   {[
//     { target: 'home', label: 'Home' },
//     { target: 'work', label: 'Work' },
//     { target: 'about', label: 'About' },
//     { target: 'stack', label: 'Tools' },
//     { target: 'footer', label: 'Contact' },
//   ].map(({ target, label }) => (
//     <li key={target}>
//       <a
//         href={`#${target}`}
//         onClick={(e) => handleNavClick(e, target)}
//         className={`
//           text-[15px]
//           px-2.5
//           py-1
//           rounded-lg
//           transition-all
//           duration-200
//           ${
//             activeLink === target
//   ? 'text-[#0a0a0b] dark:text-[#E5E5E5] font-semibold'
//   : 'text-[#1C1C1C] dark:text-[#9b9b9b] hover:bg-[#e9e9e9] dark:hover:bg-[#141416] hover:text-[#0a0a0b] dark:hover:text-[#E5E5E5]'}
//         `}
//       >
//         {label}
//       </a>
//     </li>
//   ))}
// </ul>

//           <div className="flex gap-3 items-center justify-center">
//             <button
//               onClick={toggleTheme}
//               className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black">Hire Me</a>

//             {/* Animated hamburger button */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden w-5 h-5 relative justify-center items-center"
//               aria-label="Toggle menu"
//             >
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
//               />
//               <span
//                 style={{ transition: 'opacity 0.2s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
//               />
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
//               />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile full-screen menu */}
//       <div
//         style={{
//           transition: 'opacity 0.3s ease, transform 0.35s ease',
//           pointerEvents: menuOpen ? 'all' : 'none',
//         }}
//         className={`lg:hidden fixed top-11.25 left-0 w-full h-[calc(100vh-45px)] bg-[#f4f4f4] dark:bg-[rgba(10,10,11,0.99)] z-199 flex flex-col items-start justify-start pt-10 pl-6 gap-10 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
//       >
//         <ul className="flex flex-col gap-10">
//           {[
//   { target: 'home', label: 'Home' },
//   { target: 'work', label: 'Work' },
//   { target: 'about', label: 'About' },
//   { target: 'stack', label: 'Tools' },
//   { target: 'footer', label: 'Contact' },
// ].map(({ target, label }, i) => (
//   <li
//     key={target}
//     style={{
//       transition: `opacity 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms, transform 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms`,
//       opacity: menuOpen ? 1 : 0,
//       transform: menuOpen
//         ? 'translateY(0)'
//         : 'translateY(12px)',
//     }}
//   >
//     <a
//       href={`#${target}`}
//       onClick={(e) => handleNavClick(e, target)}
//       className={`text-[26px] font-medium ${
//   activeLink === target
//     ? 'text-[#1c1c1c] dark:text-[#E5E5E5] font-semibold'
//     : 'text-[#555] dark:text-[#B5B5B5]'
// }`}
//     >
//       {label}
//     </a>
//   </li>
// ))}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default HeaderSec

















// import { useState, useEffect, useRef } from 'react'


// function HeaderSec() {
//   return (
//     <>
//       <nav className="bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 px-0 fixed top-0 z-200 border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[24px] font-fira font-medium">Jonah.</a>

//             <div className="flex gap-3 items-center justify-center">
//                 <svg id="theme-icon" className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                   <circle cx="12" cy="12" r="4"></circle>
//                   <path d="M12 2v2"></path> 
//                   <path d="M12 20v2"></path> 
//                   <path d="m4.93 4.93 1.41 1.41"></path> 
//                   <path d="m17.66 17.66 1.41 1.41"></path> 
//                   <path d="M2 12h2"></path> 
//                   <path d="M20 12h2"></path> 
//                   <path d="m6.34 17.66-1.41 1.41"></path> 
//                   <path d="m19.07 4.93-1.41 1.41"></path> 
//                 </svg>
//                 <button className="cursor-pointer font-fira font-medium text-[15px] bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-black" id="open-cv-btn-mobile">Hire Me</button>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec







// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[white] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 px-0 fixed top-0 z-200 border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[24px] font-fira font-medium">Jonah.</a>

//             <div className="flex gap-3 items-center justify-center">
//                 <button
//                   onClick={toggleTheme}
//                   className="bg-none border-none cursor-pointer text-[#f7f3f3] dark:text-[#f7f3f3]"
//                   aria-label="Toggle theme"
//                 >
//                   {isDark ? <SunIcon /> : <MoonIcon />}
//                 </button>
//                 <button className="cursor-pointer font-fira font-medium text-[15px] bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-black" id="open-cv-btn-mobile">Hire Me</button>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec





























































// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//             <ul class="hidden lg:flex gap-3 items-center justify-center lg:gap-8">
//                 <li><a href="#home"        class="text-[15px] text-[#E5E5E5]" data-scroll="home">Home</a></li>
//                 <li><a href="#about"       class="text-[15px] text-[#B5B5B5]" data-scroll="about">About</a></li>
//                 <li><a href="#work"        class="text-[15px] text-[#B5B5B5]" data-scroll="work">Work</a></li>
//                 <li><a href="#testimonials" class="text-[15px] text-[#B5B5B5]" data-scroll="testimonials">Testimony</a></li>
//                 <li><a href="#footer"      class="text-[15px] text-[#B5B5B5]" data-scroll="footer">Contact</a></li>
//             </ul>

//             <div className="flex gap-3 items-center justify-center">
//                 <button
//                   onClick={toggleTheme}
//                   className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//                   aria-label="Toggle theme"
//                 >
//                   {isDark ? <SunIcon /> : <MoonIcon />}
//                 </button>
//                 <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black" id="open-cv-btn-mobile">Hire Me</a>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                     <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                     <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec


















































// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//           <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//           {/* Desktop nav links */}
//           <ul className="hidden lg:flex gap-3 items-center justify-center lg:gap-8">
//             <li><a href="#home"         className="text-[15px] text-[#E5E5E5]" data-scroll="home">Home</a></li>
//             <li><a href="#about"        className="text-[15px] text-[#B5B5B5]" data-scroll="about">About</a></li>
//             <li><a href="#work"         className="text-[15px] text-[#B5B5B5]" data-scroll="work">Work</a></li>
//             <li><a href="#testimonials" className="text-[15px] text-[#B5B5B5]" data-scroll="testimonials">Testimony</a></li>
//             <li><a href="#footer"       className="text-[15px] text-[#B5B5B5]" data-scroll="footer">Contact</a></li>
//           </ul>

//           <div className="flex gap-3 items-center justify-center">
//             <button
//               onClick={toggleTheme}
//               className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black">Hire Me</a>
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden"
//             >
//               {menuOpen ? (
//                 <svg className="w-5 h-5 text-[#1c1c1c] dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <>
//                   <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                   <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                   <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile full-screen menu */}
//       {menuOpen && (
//         <div className="lg:hidden fixed top-11.25 left-0 w-full h-[calc(100vh-45px)] bg-[#f4f4f4] dark:bg-[rgba(10,10,11,0.99)] z-199 flex flex-col items-start justify-start pt-10 pl-6 gap-10">
//           <ul className="flex flex-col gap-10">
//             <li><a href="#home"         onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#1c1c1c] dark:text-[#E5E5E5]">Home</a></li>
//             <li><a href="#about"        onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">About</a></li>
//             <li><a href="#work"         onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">Work</a></li>
//             <li><a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">Testimony</a></li>
//             <li><a href="#footer"       onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">Contact</a></li>
//           </ul>
//         </div>
//       )}
//     </>
//   )
// }

// export default HeaderSec











// const [activeLink, setActiveLink] = useState('home')
// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a 7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [hidden, setHidden] = useState(false)
//   const [activeLink, setActiveLink] = useState('home')

//   const lastScrollY = useRef(0)
//   const ticking = useRef(false)

//   // Init dark mode
//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   // Scroll hide / show
//   useEffect(() => {
//     function updateHeader() {
//       const currentScrollY = window.scrollY

//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setHidden(true)
//       } else if (currentScrollY < lastScrollY.current) {
//         setHidden(false)
//       }

//       lastScrollY.current = currentScrollY
//       ticking.current = false
//     }

//     function onScroll() {
//       if (!ticking.current) {
//         window.requestAnimationFrame(updateHeader)
//         ticking.current = true
//       }
//     }

//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [menuOpen])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

// const handleNavClick = (e, target) => {
//   e.preventDefault()

//   setActiveLink(target)
//   setMenuOpen(false)

//   setTimeout(() => {
//     if (target === 'home') {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       })
//       return
//     }

//     const section = document.getElementById(target)

//     if (section) {
//       const navHeight =
//         document.querySelector('nav')?.offsetHeight || 0

//       const top =
//         section.getBoundingClientRect().top +
//         window.scrollY -
//         navHeight -
//         12

//       window.scrollTo({
//         top,
//         behavior: 'smooth',
//       })
//     }
//   }, menuOpen ? 350 : 0)
// }
//   return (
//     <>
//       <nav
//   style={{
//     transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
//     transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//   }}
//   className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0"
// >
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//           <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//           {/* Desktop nav links */}
//           <ul className="hidden lg:flex gap-3 items-center justify-center lg:gap-8">
//   {[
//     { target: 'home', label: 'Home' },
//     { target: 'work', label: 'Work' },
//     { target: 'about', label: 'About' },
//     { target: 'stack', label: 'Tools' },
//     { target: 'footer', label: 'Contact' },
//   ].map(({ target, label }) => (
//     <li key={target}>
//       <a
//         href={`#${target}`}
//         onClick={(e) => handleNavClick(e, target)}
//         className={`
//           text-[15px]
//           px-2.5
//           py-1
//           rounded-lg
//           transition-all
//           duration-200
//           ${
//             activeLink === target
//   ? 'text-[#0a0a0b] dark:text-[#E5E5E5]'
//   : 'text-[#B5B5B5] dark:text-[#9b9b9b] hover:bg-[#e9e9e9] dark:hover:bg-[#141416] hover:text-[#0a0a0b] dark:hover:text-[#E5E5E5]'}
//         `}
//       >
//         {label}
//       </a>
//     </li>
//   ))}
// </ul>

//           <div className="flex gap-3 items-center justify-center">
//             <button
//               onClick={toggleTheme}
//               className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black">Hire Me</a>

//             {/* Animated hamburger button */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden w-5 h-5 relative justify-center items-center"
//               aria-label="Toggle menu"
//             >
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
//               />
//               <span
//                 style={{ transition: 'opacity 0.2s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
//               />
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
//               />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile full-screen menu */}
//       <div
//         style={{
//           transition: 'opacity 0.3s ease, transform 0.35s ease',
//           pointerEvents: menuOpen ? 'all' : 'none',
//         }}
//         className={`lg:hidden fixed top-11.25 left-0 w-full h-[calc(100vh-45px)] bg-[#f4f4f4] dark:bg-[rgba(10,10,11,0.99)] z-199 flex flex-col items-start justify-start pt-10 pl-6 gap-10 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
//       >
//         <ul className="flex flex-col gap-10">
//           {[
//   { target: 'home', label: 'Home' },
//   { target: 'work', label: 'Work' },
//   { target: 'about', label: 'About' },
//   { target: 'stack', label: 'Tools' },
//   { target: 'footer', label: 'Contact' },
// ].map(({ target, label }, i) => (
//   <li
//     key={target}
//     style={{
//       transition: `opacity 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms, transform 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms`,
//       opacity: menuOpen ? 1 : 0,
//       transform: menuOpen
//         ? 'translateY(0)'
//         : 'translateY(12px)',
//     }}
//   >
//     <a
//       href={`#${target}`}
//       onClick={(e) => handleNavClick(e, target)}
//       className={`text-[26px] font-medium ${
//   activeLink === target
//     ? 'text-[#1c1c1c] dark:text-[#E5E5E5]'
//     : 'text-[#555] dark:text-[#B5B5B5]'
// }`}
//     >
//       {label}
//     </a>
//   </li>
// ))}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default HeaderSec






















// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a 7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [hidden, setHidden] = useState(false)
//   const [activeLink, setActiveLink] = useState('home')

//   const lastScrollY = useRef(0)
//   const ticking = useRef(false)

//   // Init dark mode
//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   // Scroll hide / show
//   useEffect(() => {
//     function updateHeader() {
//       const currentScrollY = window.scrollY

//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setHidden(true)
//       } else if (currentScrollY < lastScrollY.current) {
//         setHidden(false)
//       }

//       lastScrollY.current = currentScrollY
//       ticking.current = false
//     }

//     function onScroll() {
//       if (!ticking.current) {
//         window.requestAnimationFrame(updateHeader)
//         ticking.current = true
//       }
//     }

//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [menuOpen])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

// const handleNavClick = (e, target) => {
//   e.preventDefault()

//   setActiveLink(target)
//   setMenuOpen(false)

//   setTimeout(() => {
//     if (target === 'home') {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       })
//       return
//     }

//     const section = document.getElementById(target)

//     if (section) {
//       const navHeight =
//         document.querySelector('nav')?.offsetHeight || 0

//       const top =
//         section.getBoundingClientRect().top +
//         window.scrollY -
//         navHeight -
//         12

//       window.scrollTo({
//         top,
//         behavior: 'smooth',
//       })
//     }
//   }, menuOpen ? 350 : 0)
// }
//   return (
//     <>
//       <nav
//   style={{
//     transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
//     transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//   }}
//   className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0"
// >
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//           {/* <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a> */}
//           <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//           {/* Desktop nav links */}
//           <ul className="hidden lg:flex gap-3 items-center justify-center lg:gap-6">
//   {[
//     { target: 'home', label: 'Home' },
//     { target: 'work', label: 'Work' },
//     { target: 'about', label: 'About' },
//     { target: 'stack', label: 'Tools' },
//     { target: 'footer', label: 'Contact' },
//   ].map(({ target, label }) => (
//     <li key={target}>
//       <a
//         href={`#${target}`}
//         onClick={(e) => handleNavClick(e, target)}
//         className={`
//           text-[15px]
//           px-2.5
//           py-1
//           rounded-lg
//           transition-all
//           duration-200
//           ${
//             activeLink === target
//   ? 'text-[#0a0a0b] dark:text-[#E5E5E5] font-semibold'
//   : 'text-[#1C1C1C] dark:text-[#9b9b9b] hover:bg-[#e9e9e9] dark:hover:bg-[#141416] hover:text-[#0a0a0b] dark:hover:text-[#E5E5E5]'}
//         `}
//       >
//         {label}
//       </a>
//     </li>
//   ))}
// </ul>

//           <div className="flex gap-3 items-center justify-center">
//             <button
//               onClick={toggleTheme}
//               className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <a href="#footer" onClick={(e) => handleNavClick(e, 'footer')} className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black">Hire Me</a>

//             {/* Animated hamburger button */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden w-5 h-5 relative justify-center items-center"
//               aria-label="Toggle menu"
//             >
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
//               />
//               <span
//                 style={{ transition: 'opacity 0.2s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
//               />
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
//               />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile full-screen menu */}
//       <div
//         style={{
//           transition: 'opacity 0.3s ease, transform 0.35s ease',
//           pointerEvents: menuOpen ? 'all' : 'none',
//         }}
//         className={`lg:hidden fixed top-11.25 left-0 w-full h-[calc(100vh-45px)] bg-[#f4f4f4] dark:bg-[rgba(10,10,11,0.99)] z-199 flex flex-col items-start justify-start pt-10 pl-6 gap-10 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
//       >
//         <ul className="flex flex-col gap-10">
//           {[
//   { target: 'home', label: 'Home' },
//   { target: 'work', label: 'Work' },
//   { target: 'about', label: 'About' },
//   { target: 'stack', label: 'Tools' },
//   { target: 'footer', label: 'Contact' },
// ].map(({ target, label }, i) => (
//   <li
//     key={target}
//     style={{
//       transition: `opacity 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms, transform 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms`,
//       opacity: menuOpen ? 1 : 0,
//       transform: menuOpen
//         ? 'translateY(0)'
//         : 'translateY(12px)',
//     }}
//   >
//     <a
//       href={`#${target}`}
//       onClick={(e) => handleNavClick(e, target)}
//       className={`text-[26px] font-medium ${
//   activeLink === target
//     ? 'text-[#1c1c1c] dark:text-[#E5E5E5] font-semibold'
//     : 'text-[#555] dark:text-[#B5B5B5]'
// }`}
//     >
//       {label}
//     </a>
//   </li>
// ))}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default HeaderSec
















// import { useState, useEffect, useRef } from 'react'


// function HeaderSec() {
//   return (
//     <>
//       <nav className="bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 px-0 fixed top-0 z-200 border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[24px] font-fira font-medium">Jonah.</a>

//             <div className="flex gap-3 items-center justify-center">
//                 <svg id="theme-icon" className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                   <circle cx="12" cy="12" r="4"></circle>
//                   <path d="M12 2v2"></path> 
//                   <path d="M12 20v2"></path> 
//                   <path d="m4.93 4.93 1.41 1.41"></path> 
//                   <path d="m17.66 17.66 1.41 1.41"></path> 
//                   <path d="M2 12h2"></path> 
//                   <path d="M20 12h2"></path> 
//                   <path d="m6.34 17.66-1.41 1.41"></path> 
//                   <path d="m19.07 4.93-1.41 1.41"></path> 
//                 </svg>
//                 <button className="cursor-pointer font-fira font-medium text-[15px] bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-black" id="open-cv-btn-mobile">Hire Me</button>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec







// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[white] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 px-0 fixed top-0 z-200 border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[24px] font-fira font-medium">Jonah.</a>

//             <div className="flex gap-3 items-center justify-center">
//                 <button
//                   onClick={toggleTheme}
//                   className="bg-none border-none cursor-pointer text-[#f7f3f3] dark:text-[#f7f3f3]"
//                   aria-label="Toggle theme"
//                 >
//                   {isDark ? <SunIcon /> : <MoonIcon />}
//                 </button>
//                 <button className="cursor-pointer font-fira font-medium text-[15px] bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-black" id="open-cv-btn-mobile">Hire Me</button>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec





























































// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//             <ul class="hidden lg:flex gap-3 items-center justify-center lg:gap-8">
//                 <li><a href="#home"        class="text-[15px] text-[#E5E5E5]" data-scroll="home">Home</a></li>
//                 <li><a href="#about"       class="text-[15px] text-[#B5B5B5]" data-scroll="about">About</a></li>
//                 <li><a href="#work"        class="text-[15px] text-[#B5B5B5]" data-scroll="work">Work</a></li>
//                 <li><a href="#testimonials" class="text-[15px] text-[#B5B5B5]" data-scroll="testimonials">Testimony</a></li>
//                 <li><a href="#footer"      class="text-[15px] text-[#B5B5B5]" data-scroll="footer">Contact</a></li>
//             </ul>

//             <div className="flex gap-3 items-center justify-center">
//                 <button
//                   onClick={toggleTheme}
//                   className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//                   aria-label="Toggle theme"
//                 >
//                   {isDark ? <SunIcon /> : <MoonIcon />}
//                 </button>
//                 <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black" id="open-cv-btn-mobile">Hire Me</a>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                     <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                     <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec


















































// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//           <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//           {/* Desktop nav links */}
//           <ul className="hidden lg:flex gap-3 items-center justify-center lg:gap-8">
//             <li><a href="#home"         className="text-[15px] text-[#E5E5E5]" data-scroll="home">Home</a></li>
//             <li><a href="#about"        className="text-[15px] text-[#B5B5B5]" data-scroll="about">About</a></li>
//             <li><a href="#work"         className="text-[15px] text-[#B5B5B5]" data-scroll="work">Work</a></li>
//             <li><a href="#testimonials" className="text-[15px] text-[#B5B5B5]" data-scroll="testimonials">Testimony</a></li>
//             <li><a href="#footer"       className="text-[15px] text-[#B5B5B5]" data-scroll="footer">Contact</a></li>
//           </ul>

//           <div className="flex gap-3 items-center justify-center">
//             <button
//               onClick={toggleTheme}
//               className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black">Hire Me</a>
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden"
//             >
//               {menuOpen ? (
//                 <svg className="w-5 h-5 text-[#1c1c1c] dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <>
//                   <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                   <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                   <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile full-screen menu */}
//       {menuOpen && (
//         <div className="lg:hidden fixed top-11.25 left-0 w-full h-[calc(100vh-45px)] bg-[#f4f4f4] dark:bg-[rgba(10,10,11,0.99)] z-199 flex flex-col items-start justify-start pt-10 pl-6 gap-10">
//           <ul className="flex flex-col gap-10">
//             <li><a href="#home"         onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#1c1c1c] dark:text-[#E5E5E5]">Home</a></li>
//             <li><a href="#about"        onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">About</a></li>
//             <li><a href="#work"         onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">Work</a></li>
//             <li><a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">Testimony</a></li>
//             <li><a href="#footer"       onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">Contact</a></li>
//           </ul>
//         </div>
//       )}
//     </>
//   )
// }

// export default HeaderSec











// const [activeLink, setActiveLink] = useState('home')
// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a 7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [hidden, setHidden] = useState(false)
//   const [activeLink, setActiveLink] = useState('home')

//   const lastScrollY = useRef(0)
//   const ticking = useRef(false)

//   // Init dark mode
//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   // Scroll hide / show
//   useEffect(() => {
//     function updateHeader() {
//       const currentScrollY = window.scrollY

//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setHidden(true)
//       } else if (currentScrollY < lastScrollY.current) {
//         setHidden(false)
//       }

//       lastScrollY.current = currentScrollY
//       ticking.current = false
//     }

//     function onScroll() {
//       if (!ticking.current) {
//         window.requestAnimationFrame(updateHeader)
//         ticking.current = true
//       }
//     }

//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [menuOpen])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

// const handleNavClick = (e, target) => {
//   e.preventDefault()

//   setActiveLink(target)
//   setMenuOpen(false)

//   setTimeout(() => {
//     if (target === 'home') {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       })
//       return
//     }

//     const section = document.getElementById(target)

//     if (section) {
//       const navHeight =
//         document.querySelector('nav')?.offsetHeight || 0

//       const top =
//         section.getBoundingClientRect().top +
//         window.scrollY -
//         navHeight -
//         12

//       window.scrollTo({
//         top,
//         behavior: 'smooth',
//       })
//     }
//   }, menuOpen ? 350 : 0)
// }
//   return (
//     <>
//       <nav
//   style={{
//     transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
//     transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//   }}
//   className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0"
// >
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//           <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//           {/* Desktop nav links */}
//           <ul className="hidden lg:flex gap-3 items-center justify-center lg:gap-8">
//   {[
//     { target: 'home', label: 'Home' },
//     { target: 'work', label: 'Work' },
//     { target: 'about', label: 'About' },
//     { target: 'stack', label: 'Tools' },
//     { target: 'footer', label: 'Contact' },
//   ].map(({ target, label }) => (
//     <li key={target}>
//       <a
//         href={`#${target}`}
//         onClick={(e) => handleNavClick(e, target)}
//         className={`
//           text-[15px]
//           px-2.5
//           py-1
//           rounded-lg
//           transition-all
//           duration-200
//           ${
//             activeLink === target
//   ? 'text-[#0a0a0b] dark:text-[#E5E5E5]'
//   : 'text-[#B5B5B5] dark:text-[#9b9b9b] hover:bg-[#e9e9e9] dark:hover:bg-[#141416] hover:text-[#0a0a0b] dark:hover:text-[#E5E5E5]'}
//         `}
//       >
//         {label}
//       </a>
//     </li>
//   ))}
// </ul>

//           <div className="flex gap-3 items-center justify-center">
//             <button
//               onClick={toggleTheme}
//               className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black">Hire Me</a>

//             {/* Animated hamburger button */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden w-5 h-5 relative justify-center items-center"
//               aria-label="Toggle menu"
//             >
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
//               />
//               <span
//                 style={{ transition: 'opacity 0.2s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
//               />
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
//               />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile full-screen menu */}
//       <div
//         style={{
//           transition: 'opacity 0.3s ease, transform 0.35s ease',
//           pointerEvents: menuOpen ? 'all' : 'none',
//         }}
//         className={`lg:hidden fixed top-11.25 left-0 w-full h-[calc(100vh-45px)] bg-[#f4f4f4] dark:bg-[rgba(10,10,11,0.99)] z-199 flex flex-col items-start justify-start pt-10 pl-6 gap-10 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
//       >
//         <ul className="flex flex-col gap-10">
//           {[
//   { target: 'home', label: 'Home' },
//   { target: 'work', label: 'Work' },
//   { target: 'about', label: 'About' },
//   { target: 'stack', label: 'Tools' },
//   { target: 'footer', label: 'Contact' },
// ].map(({ target, label }, i) => (
//   <li
//     key={target}
//     style={{
//       transition: `opacity 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms, transform 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms`,
//       opacity: menuOpen ? 1 : 0,
//       transform: menuOpen
//         ? 'translateY(0)'
//         : 'translateY(12px)',
//     }}
//   >
//     <a
//       href={`#${target}`}
//       onClick={(e) => handleNavClick(e, target)}
//       className={`text-[26px] font-medium ${
//   activeLink === target
//     ? 'text-[#1c1c1c] dark:text-[#E5E5E5]'
//     : 'text-[#555] dark:text-[#B5B5B5]'
// }`}
//     >
//       {label}
//     </a>
//   </li>
// ))}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default HeaderSec






















// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a 7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [hidden, setHidden] = useState(false)
//   const [activeLink, setActiveLink] = useState('home')

//   const lastScrollY = useRef(0)
//   const ticking = useRef(false)

//   // Init dark mode
//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   // Scroll hide / show
//   useEffect(() => {
//     function updateHeader() {
//       const currentScrollY = window.scrollY

//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setHidden(true)
//       } else if (currentScrollY < lastScrollY.current) {
//         setHidden(false)
//       }

//       lastScrollY.current = currentScrollY
//       ticking.current = false
//     }

//     function onScroll() {
//       if (!ticking.current) {
//         window.requestAnimationFrame(updateHeader)
//         ticking.current = true
//       }
//     }

//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [menuOpen])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

// const handleNavClick = (e, target) => {
//   e.preventDefault()

//   setActiveLink(target)
//   setMenuOpen(false)

//   setTimeout(() => {
//     if (target === 'home') {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       })
//       return
//     }

//     const section = document.getElementById(target)

//     if (section) {
//       const navHeight =
//         document.querySelector('nav')?.offsetHeight || 0

//       const top =
//         section.getBoundingClientRect().top +
//         window.scrollY -
//         navHeight -
//         12

//       window.scrollTo({
//         top,
//         behavior: 'smooth',
//       })
//     }
//   }, menuOpen ? 350 : 0)
// }
//   return (
//     <>
//       <nav
//   style={{
//     transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
//     transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//   }}
//   className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0"
// >
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//           {/* <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a> */}
//           <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//           {/* Desktop nav links */}
//           <ul className="hidden lg:flex gap-3 items-center justify-center lg:gap-6">
//   {[
//     { target: 'home', label: 'Home' },
//     { target: 'work', label: 'Work' },
//     { target: 'about', label: 'About' },
//     { target: 'stack', label: 'Tools' },
//     { target: 'footer', label: 'Contact' },
//   ].map(({ target, label }) => (
//     <li key={target}>
//       <a
//         href={`#${target}`}
//         onClick={(e) => handleNavClick(e, target)}
//         className={`
//           text-[15px]
//           px-2.5
//           py-1
//           rounded-lg
//           transition-all
//           duration-200
//           ${
//             activeLink === target
//   ? 'text-[#0a0a0b] dark:text-[#E5E5E5] font-semibold'
//   : 'text-[#1C1C1C] dark:text-[#9b9b9b] hover:bg-[#e9e9e9] dark:hover:bg-[#141416] hover:text-[#0a0a0b] dark:hover:text-[#E5E5E5]'}
//         `}
//       >
//         {label}
//       </a>
//     </li>
//   ))}
// </ul>

//           <div className="flex gap-3 items-center justify-center">
//             <button
//               onClick={toggleTheme}
//               className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black">Hire Me</a>

//             {/* Animated hamburger button */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden w-5 h-5 relative justify-center items-center"
//               aria-label="Toggle menu"
//             >
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
//               />
//               <span
//                 style={{ transition: 'opacity 0.2s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
//               />
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
//               />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile full-screen menu */}
//       <div
//         style={{
//           transition: 'opacity 0.3s ease, transform 0.35s ease',
//           pointerEvents: menuOpen ? 'all' : 'none',
//         }}
//         className={`lg:hidden fixed top-11.25 left-0 w-full h-[calc(100vh-45px)] bg-[#f4f4f4] dark:bg-[rgba(10,10,11,0.99)] z-199 flex flex-col items-start justify-start pt-10 pl-6 gap-10 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
//       >
//         <ul className="flex flex-col gap-10">
//           {[
//   { target: 'home', label: 'Home' },
//   { target: 'work', label: 'Work' },
//   { target: 'about', label: 'About' },
//   { target: 'stack', label: 'Tools' },
//   { target: 'footer', label: 'Contact' },
// ].map(({ target, label }, i) => (
//   <li
//     key={target}
//     style={{
//       transition: `opacity 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms, transform 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms`,
//       opacity: menuOpen ? 1 : 0,
//       transform: menuOpen
//         ? 'translateY(0)'
//         : 'translateY(12px)',
//     }}
//   >
//     <a
//       href={`#${target}`}
//       onClick={(e) => handleNavClick(e, target)}
//       className={`text-[26px] font-medium ${
//   activeLink === target
//     ? 'text-[#1c1c1c] dark:text-[#E5E5E5] font-semibold'
//     : 'text-[#555] dark:text-[#B5B5B5]'
// }`}
//     >
//       {label}
//     </a>
//   </li>
// ))}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default HeaderSec

















// import { useState, useEffect, useRef } from 'react'


// function HeaderSec() {
//   return (
//     <>
//       <nav className="bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 px-0 fixed top-0 z-200 border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[24px] font-fira font-medium">Jonah.</a>

//             <div className="flex gap-3 items-center justify-center">
//                 <svg id="theme-icon" className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                   <circle cx="12" cy="12" r="4"></circle>
//                   <path d="M12 2v2"></path> 
//                   <path d="M12 20v2"></path> 
//                   <path d="m4.93 4.93 1.41 1.41"></path> 
//                   <path d="m17.66 17.66 1.41 1.41"></path> 
//                   <path d="M2 12h2"></path> 
//                   <path d="M20 12h2"></path> 
//                   <path d="m6.34 17.66-1.41 1.41"></path> 
//                   <path d="m19.07 4.93-1.41 1.41"></path> 
//                 </svg>
//                 <button className="cursor-pointer font-fira font-medium text-[15px] bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-black" id="open-cv-btn-mobile">Hire Me</button>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec







// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[white] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 px-0 fixed top-0 z-200 border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[24px] font-fira font-medium">Jonah.</a>

//             <div className="flex gap-3 items-center justify-center">
//                 <button
//                   onClick={toggleTheme}
//                   className="bg-none border-none cursor-pointer text-[#f7f3f3] dark:text-[#f7f3f3]"
//                   aria-label="Toggle theme"
//                 >
//                   {isDark ? <SunIcon /> : <MoonIcon />}
//                 </button>
//                 <button className="cursor-pointer font-fira font-medium text-[15px] bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-black" id="open-cv-btn-mobile">Hire Me</button>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                     <span className='block w-5 h-0.5 bg-[#f7f3f3]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec





























































// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//             <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//             <ul class="hidden lg:flex gap-3 items-center justify-center lg:gap-8">
//                 <li><a href="#home"        class="text-[15px] text-[#E5E5E5]" data-scroll="home">Home</a></li>
//                 <li><a href="#about"       class="text-[15px] text-[#B5B5B5]" data-scroll="about">About</a></li>
//                 <li><a href="#work"        class="text-[15px] text-[#B5B5B5]" data-scroll="work">Work</a></li>
//                 <li><a href="#testimonials" class="text-[15px] text-[#B5B5B5]" data-scroll="testimonials">Testimony</a></li>
//                 <li><a href="#footer"      class="text-[15px] text-[#B5B5B5]" data-scroll="footer">Contact</a></li>
//             </ul>

//             <div className="flex gap-3 items-center justify-center">
//                 <button
//                   onClick={toggleTheme}
//                   className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//                   aria-label="Toggle theme"
//                 >
//                   {isDark ? <SunIcon /> : <MoonIcon />}
//                 </button>
//                 <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black" id="open-cv-btn-mobile">Hire Me</a>
//                 <button className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden" id="menuToggle">
//                     <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                     <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                     <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                 </button>
//             </div>
//         </div> 
//       </nav>
//     </>
//   )
// }

// export default HeaderSec


















































// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)

//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

//   return (
//     <>
//       <nav className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//           <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//           {/* Desktop nav links */}
//           <ul className="hidden lg:flex gap-3 items-center justify-center lg:gap-8">
//             <li><a href="#home"         className="text-[15px] text-[#E5E5E5]" data-scroll="home">Home</a></li>
//             <li><a href="#about"        className="text-[15px] text-[#B5B5B5]" data-scroll="about">About</a></li>
//             <li><a href="#work"         className="text-[15px] text-[#B5B5B5]" data-scroll="work">Work</a></li>
//             <li><a href="#testimonials" className="text-[15px] text-[#B5B5B5]" data-scroll="testimonials">Testimony</a></li>
//             <li><a href="#footer"       className="text-[15px] text-[#B5B5B5]" data-scroll="footer">Contact</a></li>
//           </ul>

//           <div className="flex gap-3 items-center justify-center">
//             <button
//               onClick={toggleTheme}
//               className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black">Hire Me</a>
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden"
//             >
//               {menuOpen ? (
//                 <svg className="w-5 h-5 text-[#1c1c1c] dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <>
//                   <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                   <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                   <span className='block w-5 h-0.5 bg-[black] dark:bg-[white]'></span>
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile full-screen menu */}
//       {menuOpen && (
//         <div className="lg:hidden fixed top-11.25 left-0 w-full h-[calc(100vh-45px)] bg-[#f4f4f4] dark:bg-[rgba(10,10,11,0.99)] z-199 flex flex-col items-start justify-start pt-10 pl-6 gap-10">
//           <ul className="flex flex-col gap-10">
//             <li><a href="#home"         onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#1c1c1c] dark:text-[#E5E5E5]">Home</a></li>
//             <li><a href="#about"        onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">About</a></li>
//             <li><a href="#work"         onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">Work</a></li>
//             <li><a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">Testimony</a></li>
//             <li><a href="#footer"       onClick={() => setMenuOpen(false)} className="text-[26px] font-medium text-[#555] dark:text-[#B5B5B5]">Contact</a></li>
//           </ul>
//         </div>
//       )}
//     </>
//   )
// }

// export default HeaderSec











// const [activeLink, setActiveLink] = useState('home')
// import { useState, useEffect, useRef } from 'react'

// const SunIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="4"></circle>
//     <path d="M12 2v2"></path>
//     <path d="M12 20v2"></path>
//     <path d="m4.93 4.93 1.41 1.41"></path>
//     <path d="m17.66 17.66 1.41 1.41"></path>
//     <path d="M2 12h2"></path>
//     <path d="M20 12h2"></path>
//     <path d="m6.34 17.66-1.41 1.41"></path>
//     <path d="m19.07 4.93-1.41 1.41"></path>
//   </svg>
// )

// const MoonIcon = () => (
//   <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
//     <path strokeLinecap="round" strokeLinejoin="round"
//       d="M21 12.79A9 9 0 1 1 11.21 3a 7 7 0 0 0 9.79 9.79z"/>
//   </svg>
// )

// function HeaderSec() {
//   const [isDark, setIsDark] = useState(true)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [hidden, setHidden] = useState(false)
//   const [activeLink, setActiveLink] = useState('home')

//   const lastScrollY = useRef(0)
//   const ticking = useRef(false)

//   // Init dark mode
//   useEffect(() => {
//     document.documentElement.classList.add('dark')
//   }, [])

//   // Scroll hide / show
//   useEffect(() => {
//     function updateHeader() {
//       const currentScrollY = window.scrollY

//       if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
//         setHidden(true)
//       } else if (currentScrollY < lastScrollY.current) {
//         setHidden(false)
//       }

//       lastScrollY.current = currentScrollY
//       ticking.current = false
//     }

//     function onScroll() {
//       if (!ticking.current) {
//         window.requestAnimationFrame(updateHeader)
//         ticking.current = true
//       }
//     }

//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   // Lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? 'hidden' : ''
//     return () => { document.body.style.overflow = '' }
//   }, [menuOpen])

//   const toggleTheme = () => {
//     const html = document.documentElement
//     if (isDark) {
//       html.classList.remove('dark')
//     } else {
//       html.classList.add('dark')
//     }
//     setIsDark(!isDark)
//   }

// const handleNavClick = (e, target) => {
//   e.preventDefault()

//   setActiveLink(target)
//   setMenuOpen(false)

//   setTimeout(() => {
//     if (target === 'home') {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       })
//       return
//     }

//     const section = document.getElementById(target)

//     if (section) {
//       const navHeight =
//         document.querySelector('nav')?.offsetHeight || 0

//       const top =
//         section.getBoundingClientRect().top +
//         window.scrollY -
//         navHeight -
//         12

//       window.scrollTo({
//         top,
//         behavior: 'smooth',
//       })
//     }
//   }, menuOpen ? 350 : 0)
// }
//   return (
//     <>
//       <nav
//   style={{
//     transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
//     transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//   }}
//   className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0"
// >
//         <div className="w-[90%] flex justify-between items-center mx-auto my-0">
//           <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

//           {/* Desktop nav links */}
//           <ul className="hidden lg:flex gap-3 items-center justify-center lg:gap-8">
//   {[
//     { target: 'home', label: 'Home' },
//     { target: 'work', label: 'Work' },
//     { target: 'about', label: 'About' },
//     { target: 'stack', label: 'Tools' },
//     { target: 'footer', label: 'Contact' },
//   ].map(({ target, label }) => (
//     <li key={target}>
//       <a
//         href={`#${target}`}
//         onClick={(e) => handleNavClick(e, target)}
//         className={`
//           text-[15px]
//           px-2.5
//           py-1
//           rounded-lg
//           transition-all
//           duration-200
//           ${
//             activeLink === target
//   ? 'text-[#0a0a0b] dark:text-[#E5E5E5]'
//   : 'text-[#B5B5B5] dark:text-[#9b9b9b] hover:bg-[#e9e9e9] dark:hover:bg-[#141416] hover:text-[#0a0a0b] dark:hover:text-[#E5E5E5]'}
//         `}
//       >
//         {label}
//       </a>
//     </li>
//   ))}
// </ul>

//           <div className="flex gap-3 items-center justify-center">
//             <button
//               onClick={toggleTheme}
//               className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <SunIcon /> : <MoonIcon />}
//             </button>
//             <a href="#contact" className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black">Hire Me</a>

//             {/* Animated hamburger button */}
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden w-5 h-5 relative justify-center items-center"
//               aria-label="Toggle menu"
//             >
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
//               />
//               <span
//                 style={{ transition: 'opacity 0.2s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
//               />
//               <span
//                 style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
//                 className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
//               />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile full-screen menu */}
//       <div
//         style={{
//           transition: 'opacity 0.3s ease, transform 0.35s ease',
//           pointerEvents: menuOpen ? 'all' : 'none',
//         }}
//         className={`lg:hidden fixed top-11.25 left-0 w-full h-[calc(100vh-45px)] bg-[#f4f4f4] dark:bg-[rgba(10,10,11,0.99)] z-199 flex flex-col items-start justify-start pt-10 pl-6 gap-10 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
//       >
//         <ul className="flex flex-col gap-10">
//           {[
//   { target: 'home', label: 'Home' },
//   { target: 'work', label: 'Work' },
//   { target: 'about', label: 'About' },
//   { target: 'stack', label: 'Tools' },
//   { target: 'footer', label: 'Contact' },
// ].map(({ target, label }, i) => (
//   <li
//     key={target}
//     style={{
//       transition: `opacity 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms, transform 0.35s ease ${
//         menuOpen ? i * 60 : 0
//       }ms`,
//       opacity: menuOpen ? 1 : 0,
//       transform: menuOpen
//         ? 'translateY(0)'
//         : 'translateY(12px)',
//     }}
//   >
//     <a
//       href={`#${target}`}
//       onClick={(e) => handleNavClick(e, target)}
//       className={`text-[26px] font-medium ${
//   activeLink === target
//     ? 'text-[#1c1c1c] dark:text-[#E5E5E5]'
//     : 'text-[#555] dark:text-[#B5B5B5]'
// }`}
//     >
//       {label}
//     </a>
//   </li>
// ))}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default HeaderSec






















import { useState, useEffect, useRef } from 'react'

const SunIcon = () => (
  <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="m4.93 4.93 1.41 1.41"></path>
    <path d="m17.66 17.66 1.41 1.41"></path>
    <path d="M2 12h2"></path>
    <path d="M20 12h2"></path>
    <path d="m6.34 17.66-1.41 1.41"></path>
    <path d="m19.07 4.93-1.41 1.41"></path>
  </svg>
)

const MoonIcon = () => (
  <svg className="h-5.75 w-5.75 lg:w-4.75 lg:h-4.75" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M21 12.79A9 9 0 1 1 11.21 3a 7 7 0 0 0 9.79 9.79z"/>
  </svg>
)

function HeaderSec() {
  // Read the saved preference (set by main.jsx before React mounted).
  // Falls back to true (dark) if nothing is stored — safety net only.
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') !== 'light'
  )
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  // Sync <html> class with stored preference on mount.
  // main.jsx already does this before React hydrates, but this
  // keeps React state + DOM in agreement after any hot-reload.
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Scroll hide / show
  useEffect(() => {
    function updateHeader() {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true)
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false)
      }

      lastScrollY.current = currentScrollY
      ticking.current = false
    }

    function onScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(updateHeader)
        ticking.current = true
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleTheme = () => {
    const html = document.documentElement
    const next = !isDark
    if (next) {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
    setIsDark(next)
  }

const handleNavClick = (e, target) => {
  e.preventDefault()

  setActiveLink(target)
  setMenuOpen(false)

  setTimeout(() => {
    if (target === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      return
    }

    const section = document.getElementById(target)

    if (section) {
      const navHeight =
        document.querySelector('nav')?.offsetHeight || 0

      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        navHeight -
        12

      window.scrollTo({
        top,
        behavior: 'smooth',
      })
    }
  }, menuOpen ? 350 : 0)
}
  return (
    <>
      <nav
  style={{
    transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  }}
  className="bg-[#f4f4f4] dark:bg-[#0a0a0b] w-full flex justify-center items-center py-2.5 lg:py-2 px-0 fixed top-0 z-200 border-[#9b9b9b] dark:border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0"
>
        <div className="w-[90%] flex justify-between items-center mx-auto my-0">
          {/* <a href="#" className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a> */}
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-[#0a0a0b] dark:text-white text-[24px] font-fira font-medium lg:text-[20px]">Jonah.</a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex gap-3 items-center justify-center lg:gap-6">
  {[
    { target: 'home', label: 'Home' },
    { target: 'work', label: 'Work' },
    { target: 'about', label: 'About' },
    { target: 'stack', label: 'Tools' },
    { target: 'footer', label: 'Contact' },
  ].map(({ target, label }) => (
    <li key={target}>
      <a
        href={`#${target}`}
        onClick={(e) => handleNavClick(e, target)}
        className={`
          text-[15px]
          px-2.5
          py-1
          rounded-lg
          transition-all
          duration-200
          ${
            activeLink === target
  ? 'text-[#0a0a0b] dark:text-[#E5E5E5] font-semibold'
  : 'text-[#1C1C1C] dark:text-[#9b9b9b] hover:bg-[#e9e9e9] dark:hover:bg-[#141416] hover:text-[#0a0a0b] dark:hover:text-[#E5E5E5]'}
        `}
      >
        {label}
      </a>
    </li>
  ))}
</ul>

          <div className="flex gap-3 items-center justify-center">
            <button
              onClick={toggleTheme}
              className="bg-none border-none cursor-pointer text-[#1c1c1c] dark:text-[#f7f3f3]"
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href="#footer" onClick={(e) => handleNavClick(e, 'footer')} className="cursor-pointer font-fira font-medium text-[15px] lg:text-[14px] bg-[#1c1c1c] dark:bg-[#f7f3f3] py-1.5 px-3.75 rounded-lg text-[#f4f4f4] dark:text-black">Hire Me</a>

            {/* Animated hamburger button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="bg-none border-none cursor-pointer flex flex-col gap-1.25 lg:hidden w-5 h-5 relative justify-center items-center"
              aria-label="Toggle menu"
            >
              <span
                style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
                className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}
              />
              <span
                style={{ transition: 'opacity 0.2s ease' }}
                className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
                className={`block absolute w-5 h-0.5 bg-[black] dark:bg-[white] ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        style={{
          transition: 'opacity 0.3s ease, transform 0.35s ease',
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
        className={`lg:hidden fixed top-11.25 left-0 w-full h-[calc(100vh-45px)] bg-[#f4f4f4] dark:bg-[rgba(10,10,11,0.99)] z-199 flex flex-col items-start justify-start pt-10 pl-6 gap-10 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}
      >
        <ul className="flex flex-col gap-10">
          {[
  { target: 'home', label: 'Home' },
  { target: 'work', label: 'Work' },
  { target: 'about', label: 'About' },
  { target: 'stack', label: 'Tools' },
  { target: 'footer', label: 'Contact' },
].map(({ target, label }, i) => (
  <li
    key={target}
    style={{
      transition: `opacity 0.35s ease ${
        menuOpen ? i * 60 : 0
      }ms, transform 0.35s ease ${
        menuOpen ? i * 60 : 0
      }ms`,
      opacity: menuOpen ? 1 : 0,
      transform: menuOpen
        ? 'translateY(0)'
        : 'translateY(12px)',
    }}
  >
    <a
      href={`#${target}`}
      onClick={(e) => handleNavClick(e, target)}
      className={`text-[26px] font-medium ${
  activeLink === target
    ? 'text-[#1c1c1c] dark:text-[#E5E5E5] font-semibold'
    : 'text-[#555] dark:text-[#B5B5B5]'
}`}
    >
      {label}
    </a>
  </li>
))}
        </ul>
      </div>
    </>
  )
}

export default HeaderSec