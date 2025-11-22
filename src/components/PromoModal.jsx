import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import assets from '../assets/assets'

const PromoModal = ({ theme }) => {
  const [open, setOpen] = useState(false)
  const [dontShow, setDontShow] = useState(false)

  useEffect(() => {
    try {
      const seen = localStorage.getItem('promoSeen')
      if (!seen) {
        // show after a short delay so page can render (gentle UX)
        const t = setTimeout(() => setOpen(true), 900)
        return () => clearTimeout(t)
      }
    } catch (e) {
      setOpen(true)
    }
  }, [])

  const close = (setSeen = true) => {
    setOpen(false)
    if (setSeen && dontShow) {
      try { localStorage.setItem('promoSeen', '1') } catch (e) {}
    }
  }

  const handleContact = () => {
    // mark seen so it doesn't reappear and navigate to contact section
    try { localStorage.setItem('promoSeen', '1') } catch (e) {}
    window.location.hash = '#contact-us'
    setOpen(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => close(false)} />

          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`relative z-10 w-[90%] max-w-2xl rounded-2xl shadow-2xl p-6 sm:p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
            style={{ border: '1px solid rgba(255,255,255,0.04)' }}
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <img src={assets.logo} alt="logo" className="w-14 h-14 sm:w-16 sm:h-16" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-extrabold text-amber-300">Welcome — 20% Off Your First Project</h3>
                <p className="mt-2 text-sm sm:text-base opacity-80">As a thank-you for visiting, enjoy 20% off your first project when you contact us today. Limited-time offer for new visitors.</p>

                <ul className="mt-4 text-sm space-y-2">
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-amber-300"/> Free consultation</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-amber-300"/> Custom proposal with discount applied</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-amber-300"/> Fast response from our team</li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
                  <button onClick={handleContact} className="bg-amber-300 text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition">Claim 20% & Contact Us</button>
                  <button onClick={() => close(true)} className={`px-5 py-3 rounded-full border ${theme === 'dark' ? 'border-gray-700 text-white' : 'border-gray-200 text-gray-700'}`}>Maybe later</button>
                </div>

                <label className="mt-3 inline-flex items-center text-xs opacity-80 cursor-pointer">
                  <input type="checkbox" className="mr-2" checked={dontShow} onChange={(e) => setDontShow(e.target.checked)} /> Don't show again
                </label>
              </div>
            </div>

            <button aria-label="close" className="absolute top-3 right-3 text-xl opacity-70 hover:opacity-100" onClick={() => close(true)}>×</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default React.memo(PromoModal)
