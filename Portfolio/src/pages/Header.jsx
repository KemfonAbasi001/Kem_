import { useState, useEffect, useRef } from 'react'


function HeaderSec() {
  return (
    <>
      <nav className="w-full flex justify-center items-center py-2.5 px-0 fixed top-0 z-200 border-[#515151] border-solid border-t-0 border-b-[0.5px] border-r-0 border-l-0">
        <div className="w-[90%] flex justify-between items-center mx-auto my-0">
            <a href="#" className="text-[20px] font-fira font-medium">Jonah.</a>

            <div className="flex gap-3 items-center justify-center">
                <svg id="theme-icon" className="h-5.5 w-5.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                <button className="cursor-pointer font-fira font-medium bg-[#f7f3f3] py-1.75 px-3.75 rounded-lg text-black" id="open-cv-btn-mobile">Hire Me</button>
                <button className="bg-none border-none cursor-pointer flex flex-col gap-1.5" id="menuToggle">
                    <span className='block w-5 h-[2px] bg-[#f7f3f3]'></span>
                    <span className='block w-5 h-[2px] bg-[#f7f3f3]'></span>
                    <span className='block w-5 h-[2px] bg-[#f7f3f3]'></span>
                </button>
            </div>
        </div> 
      </nav>
    </>
  )
}

export default HeaderSec