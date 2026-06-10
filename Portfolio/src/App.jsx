import { useState } from 'react'
import CoverPage from './pages/CoverPage'
import HeaderSec from './pages/Header'
import LandingPageSection from './pages/Landingpage'
import Work from './pages/SelectedWork'
import About from './pages/About'
import Stack from './pages/Techstack'

function App() {

  return (
    <>
      {/* <CoverPage/> */}
      <HeaderSec/>
      <LandingPageSection/>
      <Work/>
      <About/>
      <Stack/>
    </>
  )
}

export default App
