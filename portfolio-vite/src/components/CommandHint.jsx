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
          className="fixed right-24 bottom-20 z-[99999] hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl border-2 border-[#1A1A1A] bg-[#E8E6D9]/95 shadow-[6px_6px_0px_0px_#1A1A1A]"
          aria-label="Open command palette"
        >
          <Command size={16} className="text-[#EF9144]" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]">
            Press Ctrl + K
          </span>
          <span
            onClick={dismiss}
            aria-label="Dismiss"
            className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1A1A1A] text-[#E8E6D9]"
          >
            ×
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default CommandHint
