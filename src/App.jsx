import React, { useEffect, useRef, useState, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PromoModal from './components/PromoModal'
import Footer from './components/Footer'
// Lazy-load larger, non-critical sections to improve initial load
const TrustedBy = lazy(() => import('./components/TrustedBy'))
const Services = lazy(() => import('./components/Services'))
const OurWork = lazy(() => import('./components/OurWork'))
const Teams = lazy(() => import('./components/Teams'))
const ContactUs = lazy(() => import('./components/ContactUs'))
import { Toaster } from 'react-hot-toast'

function App() {

  const dotRef = useRef(null)
  const outlineRef = useRef(null)

  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  useEffect(() => {
    // ✅ Detect screen resize to show/hide on mobile
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isDesktop) return // ❌ Stop animation on mobile

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    let rafId
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        // use translate3d and hint at will-change for smoother GPU-driven transforms
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }
      rafId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isDesktop])

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')

  return (
    <>
      <div className='dark:bg-gray-900 relative'>
        <Toaster />
        <Navbar theme={theme} setTheme={setTheme} />
        <PromoModal theme={theme} />

        {/* Center main sections on small screens; left-align on larger screens */}
        <div className="w-full flex flex-col items-center text-center sm:items-stretch sm:text-left">
          <Hero />

          <Suspense fallback={<div />}> 
            <TrustedBy />
          </Suspense>

          <Suspense fallback={<div />}>
            <Services />
          </Suspense>

          <Suspense fallback={<div />}>
            <OurWork />
          </Suspense>

          <Suspense fallback={<div />}>
            <Teams />
          </Suspense>

          <Suspense fallback={<div />}>
            <ContactUs />
          </Suspense>
        </div>

        <Footer theme={theme} />

        {/* ✅ Show mouse effect only on desktop */}
        {isDesktop && (
          <>
            <div
              ref={outlineRef}
              className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[999]'
              style={{ transition: 'transform 0.1s ease-out' }}
            ></div>
            <div
              ref={dotRef}
              className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]'
            ></div>
          </>
        )}
      </div>
    </>
  )
}

export default App
