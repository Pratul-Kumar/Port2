import React, { useEffect, useState } from 'react'
import { Command } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'command_hint_dismissed'

const CommandHint = () => {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const isDesktop = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(min-width: 768px)').matches
    const dismissed = typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY) === 'true'
    if (isDesktop && !dismissed) {
      const id = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(id)
    }
  }, [])

  // Auto-hide after a short delay if not interacted
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(() => {
      if (!hovered) setVisible(false)
    }, 9000)
    return () => clearTimeout(timer)
  }, [visible, hovered])

  // Hide whenever the global palette open event fires (e.g., Ctrl+K)
  useEffect(() => {
    const onOpen = () => setVisible(false)
    window.addEventListener('open-command-palette', onOpen)
    return () => window.removeEventListener('open-command-palette', onOpen)
  }, [])

  const openPalette = () => {
    window.dispatchEvent(new Event('open-command-palette'))
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  const dismiss = (e) => {
    e.stopPropagation()
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={openPalette}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="fixed right-6 md:right-12 bottom-8 z-[90000] hidden md:flex items-center gap-3 px-5 py-3 rounded-full border border-gray-200 bg-white/90 backdrop-blur-md shadow-xl"
          aria-label="Open command palette"
        >
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gray-100 border border-gray-200">
             <Command size={12} className="text-[#FF6B00]" />
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
            System Override <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-400 ml-1">Ctrl+K</span>
          </span>
          <span
            onClick={dismiss}
            aria-label="Dismiss"
            className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-gray-300 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            ×
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default CommandHint
