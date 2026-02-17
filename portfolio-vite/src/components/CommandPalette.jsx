import React, { useEffect, useMemo, useState } from 'react'
import { Command, Search, X } from 'lucide-react'
import { scrollToId } from '../utils/scrollTo'

const items = [
  { label: 'Go to Home', action: () => scrollToId('home', { offset: -80, duration: 1.0 }) },
  { label: 'Go to About', action: () => scrollToId('about', { offset: -80, duration: 1.0 }) },
  { label: 'Go to Skills', action: () => scrollToId('skills', { offset: -80, duration: 1.0 }) },
  { label: 'Go to Projects', action: () => scrollToId('projects', { offset: -80, duration: 1.0 }) },
  { label: 'Go to Achievements', action: () => scrollToId('achievements', { offset: -80, duration: 1.0 }) },
  { label: 'Go to Contact', action: () => scrollToId('contact', { offset: -80, duration: 1.0 }) },
  { label: 'Open Resume', action: () => window.open('https://drive.google.com/file/d/1oUg-r3-DarzzctcS_ZM5FzvfoK-ua2HT/view?usp=sharing', '_blank') },
]

const CommandPalette = () => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const onKey = (e) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC')
      const meta = isMac ? e.metaKey : e.ctrlKey
      if (meta && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-command-palette', onOpen)
    window.addEventListener('close-command-palette', onClose)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-palette', onOpen)
      window.removeEventListener('close-command-palette', onClose)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset'
  }, [open])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? items.filter((i) => i.label.toLowerCase().includes(q)) : items
  }, [query])

  const run = (fn) => {
    fn()
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[10000] bg-[#1A1A1A]/60 backdrop-blur-sm flex items-start justify-center pt-24"
      aria-modal="true"
      role="dialog"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border-2 border-[#1A1A1A] bg-[#E8E6D9] text-[#1A1A1A] shadow-[12px_12px_0px_0px_#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#1A1A1A]/10">
          <Command size={16} className="text-[#EF9144]" />
          <div className="relative flex-1">
            <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" />
            <input
              autoFocus
              aria-label="Command search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command…"
              className="w-full pl-8 pr-4 py-2 bg-transparent outline-none text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/40"
            />
          </div>
          <button aria-label="Close palette" onClick={() => setOpen(false)} className="p-2 hover:text-[#EF9144]">
            <X size={16} />
          </button>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto">
          {filtered.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => run(item.action)}
                className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF9144]"
              >
                <span className="text-sm font-black uppercase tracking-[0.2em]">{item.label}</span>
              </button>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="px-5 py-6 text-sm opacity-60">No results</li>
          )}
        </ul>
        <div className="px-5 py-3 border-t border-[#1A1A1A]/10 flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">
            Press Ctrl + K to toggle
          </span>
          <button
            onClick={() => setOpen(false)}
            className="px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] border-2 border-[#1A1A1A] rounded-full bg-white/60 hover:bg-white"
            aria-label="Close"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommandPalette
