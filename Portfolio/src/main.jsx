// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ─── Theme initialisation (runs before React mounts) ───────────────────────
// If the user has never visited → default to dark mode and store it.
// If they have a saved preference → restore it immediately (no flash).
;(function () {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    // 'dark' OR first visit (no saved value) → dark mode
    document.documentElement.classList.add('dark')
    if (!saved) localStorage.setItem('theme', 'dark')
  }
})()
// ───────────────────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)