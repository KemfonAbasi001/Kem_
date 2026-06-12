// import { useState } from 'react'
// import CoverPage from './pages/CoverPage'
// import HeaderSec from './pages/Header'
// import LandingPageSection from './pages/Landingpage'
// import Work from './pages/SelectedWork'
// import About from './pages/About'
// import Stack from './pages/Techstack'
// import ProcessSection from './pages/Process'
// import Footer from './pages/Footer'

// function App() {

//   return (
//     <>
//       {/* <CoverPage/> */}
//       <HeaderSec/>
//       <LandingPageSection/>
//       <Work/>
//       <About/>
//       <Stack/>
//       <ProcessSection/>
//       <Footer />
//     </>
//   )
// }

// export default App











import CoverPage from './pages/CoverPage'
import HeaderSec from './pages/Header'
import LandingPageSection from './pages/Landingpage'
import Work from './pages/SelectedWork'
import About from './pages/About'
import Stack from './pages/Techstack'
import ProcessSection from './pages/Process'
import Footer from './pages/Footer'
import { IntroProvider, useIntro } from './context/IntroContext'

// Separate inner component so it can consume the context
function SiteContent() {
  const { introDone } = useIntro()

  return (
    <>
      <CoverPage />

      {/* main-content fades in ONLY after intro finishes */}
      <div
        className="main-content transition-opacity duration-700 ease-in-out"
        style={{ opacity: introDone ? 1 : 0 }}
      >
        <HeaderSec />
        <LandingPageSection />
        <Work />
        <About />
        <Stack />
        <ProcessSection />
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <IntroProvider>
      <SiteContent />
    </IntroProvider>
  )
}

export default App