import { useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const prefersReducedMotion = useReducedMotion()
  const dockRef = useRef(null)
  const [hoveredHref, setHoveredHref] = useState(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 260, damping: 30, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 260, damping: 30, mass: 0.6 })

  const onMove = (e) => {
    if (prefersReducedMotion) return
    const el = dockRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
  }

  const onLeave = () => {
    setHoveredHref(null)
  }

  const items = useMemo(() => navLinks, [])

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div
        ref={dockRef}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="relative flex items-center gap-4 rounded-full border border-white/10 bg-slate-950/90 px-6 py-3 shadow-2xl backdrop-blur-md"
      >
        {/* cursor-follow light */}
        {!prefersReducedMotion && (
          <motion.div
            style={{ x: sx, y: sy }}
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
            aria-hidden
          >
            <div
              className="h-12 w-12 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(6,182,212,0.22), rgba(16,185,129,0.08) 55%, transparent 70%)',
                filter: 'blur(2px)',
              }}
            />
          </motion.div>
        )}

        <a
          href="#home"
          className="relative z-10 select-none font-mono text-sm font-semibold text-slate-100"
          aria-label="Go to top"
        >
          <span className="text-slate-100">PK</span>
          <span className="text-ui">.</span>
        </a>

        <nav className="relative z-10 flex items-center gap-1" aria-label="Primary">
          {items.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onMouseEnter={() => setHoveredHref(l.href)}
              onFocus={() => setHoveredHref(l.href)}
              className="relative rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-slate-100 focus-visible:outline-none"
            >
              {hoveredHref === l.href && (
                <motion.span
                  layoutId="dock-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/5"
                  transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                />
              )}
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
