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
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [loading])

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < loadingText.length - 1 ? prev + 1 : prev))
    }, 900)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.floor(Math.random() * 8) + 2
      })
    }, 180)

    const handleLoad = () => {
      setTimeout(() => setLoading(false), 3200)
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

  // Generate multi-color matrix code lines
  const matrixColors = ["#ffffff", "#fcca46", "#f8973c"];
  const matrixLines = Array.from({ length: 18 }, (_, i) =>
    Array.from({ length: 32 }, () => {
      const char = Math.random() > 0.8 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : Math.floor(Math.random() * 10);
      const color = matrixColors[Math.floor(Math.random() * matrixColors.length)];
      return `<span style='color:${color}'>${char}</span>`;
    }).join(' ')
  )

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8 } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center backdrop-blur-lg bg-black/50 text-[#fcca46] font-mono"
        >
          {/* Matrix background */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
            <div className="w-full h-full flex flex-col justify-center items-center opacity-30">
              {matrixLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.7 }}
                  className="text-xs md:text-sm tracking-widest whitespace-nowrap"
                  style={{ fontFamily: 'monospace' }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              ))}
            </div>
          </div>
          {/* Loader content */}
          <div className="relative z-10 w-80 max-w-full flex flex-col items-center space-y-6">
            {/* Animated technical logo */}
            
            {/* Changing Text */}
            <div className="h-6 overflow-hidden w-full text-center">
              <motion.p 
                key={textIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="text-xs font-mono text-[#fcca46] uppercase tracking-widest text-center drop-shadow"
              >
                &gt; {loadingText[textIndex]}
              </motion.p>
            </div>
            {/* Gradient Progress Bar */}
            <div className="w-full flex flex-col items-center">
              <div className="w-full h-4 bg-[#222] rounded-full overflow-hidden relative border border-[#fcca46]/30">
                <motion.div 
                  className="absolute top-0 left-0 h-full"
                  style={{ background: "linear-gradient(90deg, #ff3b14 0%, #fcca46 100%)", boxShadow: "0 0 15px #fcca46" }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ type: "spring", stiffness: 60 }}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#fcca46]">
                  {Math.min(progress, 100)}%
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}