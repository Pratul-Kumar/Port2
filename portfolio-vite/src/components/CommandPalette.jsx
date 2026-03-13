import React, { useEffect, useMemo, useState } from 'react'
import { Command, Search, X } from 'lucide-react'
import { scrollToId } from '../utils/scrollTo'

const items = [
  { label: 'Toggle Training Mode (IDE)', action: () => window.dispatchEvent(new Event('toggle-terminal-mode')) },
  { label: 'Go to Home', action: () => scrollToId('home', { offset: -80, duration: 1.0 }) },
  { label: 'Go to About', action: () => scrollToId('about', { offset: -80, duration: 1.0 }) },
  { label: 'Go to Skills', action: () => scrollToId('skills', { offset: -80, duration: 1.0 }) },
  { label: 'Go to Projects', action: () => scrollToId('projects', { offset: -80, duration: 1.0 }) },
  { label: 'Go to Achievements', action: () => scrollToId('achievements', { offset: -80, duration: 1.0 }) },
  { label: 'Go to Contact', action: () => scrollToId('contact', { offset: -80, duration: 1.0 }) },
  { label: 'Open Classified Resume', action: () => window.open('https://drive.google.com/file/d/1lpONqi9hVFXy_SDI6cD7DMeZU16G4U8n/view?usp=sharing', '_blank') },
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
      className="fixed inset-0 z-[100000] bg-[#0A0A0A]/40 backdrop-blur-md flex items-start justify-center pt-24 md:pt-32 px-4 transition-all"
      aria-modal="true"
      role="dialog"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-gray-200/50 bg-[#F7F7F7] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-5 border-b border-gray-200 bg-white">
          <Command size={18} className="text-[#FF6B00]" />
          <div className="relative flex-1">
            <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              autoFocus
              aria-label="Command search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="System prompt..."
              className="w-full pl-9 pr-4 py-2 bg-transparent outline-none text-sm font-mono text-[#0A0A0A] placeholder:text-gray-400"
            />
          </div>
          <button aria-label="Close palette" onClick={() => setOpen(false)} className="p-2 text-gray-400 hover:text-[#FF6B00] transition-colors bg-gray-50 rounded-lg border border-gray-100">
            <X size={16} />
          </button>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto bg-white p-2">
          {filtered.map((item, i) => (
            <li key={i}>
              <button
                onClick={() => run(item.action)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-[#FF6B00]/5 rounded-xl transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00]"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gray-600 group-hover:text-[#FF6B00] transition-colors">{item.label}</span>
                <span className="text-[10px] text-gray-300 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Execute</span>
              </button>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="px-5 py-8 text-xs font-mono text-center text-gray-400 uppercase tracking-widest">Command not recognized.</li>
          )}
        </ul>
        <div className="px-5 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
           <div className="flex items-center gap-3">
             <span className="px-2 py-1 bg-white border border-gray-200 rounded text-[9px] font-mono font-bold text-gray-400 shadow-sm">ESC</span>
             <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
               to dismiss
             </span>
           </div>
           <div className="flex items-center gap-3 hidden md:flex">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Powered by <span className="text-[#0A0A0A] font-black">Pratul.</span></span>
           </div>
        </div>
      </div>
    </div>
  )
}

export default CommandPalette
