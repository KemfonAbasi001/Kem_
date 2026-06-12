

// function Footer() {
//   return (
//     <>
//       <footer id="footer" className="relative w-full py-70 lg:py-90 flex justify-center items-center bg-[#f4f4f4] dark:bg-[#0a0a0b]">
//         <div className="w-[90%] flex-col pb-40 lg:pb-60 fixed bottom-0">

//         <div className="w-full flex gap-17 lg:gap-35 flex-col">
//           <a href="#" className="flex self-end py-3 px-10 bg-[#1c1c1c] text-[#f4f4f4] dark:bg-[#E5E5E5] dark:text-[#111114] cursor-pointer font-fira ">Hire Me</a>
//           <div className="flex flex-col gap-17 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
//              <h2 className="font-fira text-[16px] text-[#1c1c1c] dark:text-[#B5B5B5]">
//                 &copy; <span>{new Date().getFullYear()}</span> KemfonAbasi Mfon Jonah.<br className="block lg:hidden"/> All rights reserved
//               </h2>
//                <div className="flex gap-3 w-fit flex-wrap justify-center">
//                 <a href="" className="w-12.5 h-12.5 rounded-2xl border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] cursor-pointer flex items-center justify-center bg-transparent" aria-label="X / Twitter">
//                   <svg className="w-6.75 h-6.75 fill-[#0f0f0f] dark:fill-[#e5e5e5]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
//                     <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/>
//                   </svg>
//                 </a>
//                 <a href="" className="w-12.5 h-12.5 rounded-2xl border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] cursor-pointer flex items-center justify-center bg-transparent" aria-label="Google">
//                   <svg className="w-6.75 h-6.75 fill-[#0f0f0f] dark:fill-[#e5e5e5] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
//                     <path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z"/>
//                   </svg>
//                 </a>
//                 <a href="" target="_blank" className="w-12.5 h-12.5 rounded-2xl border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] cursor-pointer flex items-center justify-center bg-transparent" aria-label="GitHub">
//                   <svg className="w-6.75 h-6.75 fill-[#0f0f0f] dark:fill-[#e5e5e5] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
//                     <path d="M316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72z"/>
//                   </svg>
//                 </a>
//                 <a href="" className="w-12.5 h-12.5 rounded-2xl border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] cursor-pointer flex items-center justify-center bg-transparent" aria-label="LinkedIn">
//                   <svg className="w-6.75 h-6.75 fill-[#0f0f0f] dark:fill-[#e5e5e5] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
//                     <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/>
//                   </svg>
//                 </a>
//               </div>
//           </div>
//         </div>
//         <div className="footer-giant-text">Let's Connect</div>
//         </div>
//       </footer>
//     </>
//   )
// }

// export default Footer








function Footer() {

  function handleHireMe(e) {
    e.preventDefault()
    const section   = document.getElementById('footer')
    const navHeight = document.querySelector('nav')?.offsetHeight || 0
    if (!section) return
    window.scrollTo({
      top: section.getBoundingClientRect().top + window.scrollY - navHeight - 12,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <footer id="footer" className="relative w-full py-70 lg:py-90 flex justify-center items-center bg-[#f4f4f4] dark:bg-[#0a0a0b]">
        <div className="w-[90%] flex-col pb-40 lg:pb-60 fixed bottom-0">

          <div className="w-full flex gap-17 lg:gap-35 flex-col">
            {/* Hire Me — scrolls back to the footer/contact area */}
            <a
              href="#footer"
              onClick={handleHireMe}
              className="flex self-end py-3 px-10 bg-[#1c1c1c] text-[#f4f4f4] dark:bg-[#E5E5E5] dark:text-[#111114] cursor-pointer font-fira"
            >
              Hire Me
            </a>

            <div className="flex flex-col gap-17 lg:gap-0 lg:flex-row lg:justify-between lg:items-center">
              <h2 className="font-fira text-[16px] text-[#1c1c1c] dark:text-[#B5B5B5]">
                &copy; <span>{new Date().getFullYear()}</span> KemfonAbasi Mfon Jonah.<br className="block lg:hidden"/> All rights reserved
              </h2>
              <div className="flex gap-3 w-fit flex-wrap justify-center">
                <a href="" className="w-12.5 h-12.5 rounded-2xl border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] cursor-pointer flex items-center justify-center bg-transparent" aria-label="X / Twitter">
                  <svg className="w-6.75 h-6.75 fill-[#0f0f0f] dark:fill-[#e5e5e5]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/>
                  </svg>
                </a>
                <a href="" className="w-12.5 h-12.5 rounded-2xl border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] cursor-pointer flex items-center justify-center bg-transparent" aria-label="Google">
                  <svg className="w-6.75 h-6.75 fill-[#0f0f0f] dark:fill-[#e5e5e5]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z"/>
                  </svg>
                </a>
                <a href="" target="_blank" className="w-12.5 h-12.5 rounded-2xl border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] cursor-pointer flex items-center justify-center bg-transparent" aria-label="GitHub">
                  <svg className="w-6.75 h-6.75 fill-[#0f0f0f] dark:fill-[#e5e5e5]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72z"/>
                  </svg>
                </a>
                <a href="" className="w-12.5 h-12.5 rounded-2xl border border-solid border-[#9b9b9b] dark:border-[#2a2a2e] cursor-pointer flex items-center justify-center bg-transparent" aria-label="LinkedIn">
                  <svg className="w-6.75 h-6.75 fill-[#0f0f0f] dark:fill-[#e5e5e5]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-giant-text">Let's Connect</div>
        </div>
      </footer>
    </>
  )
}

export default Footer