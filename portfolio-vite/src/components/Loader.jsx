import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const loadingText = [
  "Initializing Neural Networks...",
  "Loading Modules...",
  "Verifying System Integrity...",
  "Syncing Data...",
  "Access Granted."
]

export default function Loader() {
  const [loading, setLoading] = useState(true)
  const [textIndex, setTextIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  // --- Scroll Lock Effect ---
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden' // Lock scroll
    } else {
      document.body.style.overflow = 'unset'  // Unlock scroll
    }
    
    // Cleanup in case component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [loading])

  useEffect(() => {
    // 1. Text Cycle Logic
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < loadingText.length - 1 ? prev + 1 : prev))
    }, 800)

    // 2. Progress Bar Logic
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.floor(Math.random() * 10) + 1
      })
    }, 250)

    // 3. Completion Logic
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 3800) 
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      clearInterval(textInterval)
      clearInterval(progressInterval)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8 } }}
          // Changed backdrop-blur-2xl to backdrop-blur-sm for less blur
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm text-white"
        >
          <div className="w-64 space-y-4">
            {/* Logo / Title */}
            <div className="flex items-center gap-2 mb-8">
               <span className="text-xl font-bold tracking-widest uppercase text-white">Pratul</span>
               <span className="text-xl font-bold text-[#fcca46]">.</span>
            </div>

            {/* Changing Text */}
            <div className="h-6 overflow-hidden">
                <motion.p 
                    key={textIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="text-xs font-mono text-zinc-400 uppercase tracking-widest"
                >
                    &gt; {loadingText[textIndex]}
                </motion.p>
            </div>

            {/* Progress Bar Container */}
            <div className="h-[2px] w-full bg-zinc-800 rounded-full overflow-hidden relative">
              {/* Moving Bar */}
              <motion.div 
                className="absolute top-0 left-0 h-full bg-[#fcca46] shadow-[0_0_15px_#fcca46]"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ type: "spring", stiffness: 50 }}
              />
            </div>
            
            {/* Percentage */}
            <div className="flex justify-end">
                <span className="text-[10px] font-mono text-zinc-500">
                    {Math.min(progress, 100)}%
                </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}