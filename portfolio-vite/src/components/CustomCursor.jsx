import { useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

function ease(current, target, factor) {
  return current + (target - current) * factor
}

export default function CustomCursor() {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef(null)

  const [isVisible, setIsVisible] = useState(false)
  const [isMagnetic, setIsMagnetic] = useState(false)

  const state = useMemo(
    () => ({
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      sx: 1,
      sy: 1,
      raf: 0,
      targetEl: null,
    }),
    [],
  )

  useEffect(() => {
    if (prefersReducedMotion) return

    const onEnter = () => setIsVisible(true)
    const onLeave = () => setIsVisible(false)

    const onMove = (e) => {
      state.tx = e.clientX
      state.ty = e.clientY

      if (!isVisible) setIsVisible(true)

      const el = document.elementFromPoint(e.clientX, e.clientY)
      const magnetic = el?.closest?.('[data-magnetic]')

      if (magnetic) {
        state.targetEl = magnetic
        setIsMagnetic(true)

        const rect = magnetic.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2

        // snap cursor toward center
        state.tx = ease(state.tx, cx, 0.25)
        state.ty = ease(state.ty, cy, 0.25)

        // subtle squash based on distance to center
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const d = Math.min(48, Math.hypot(dx, dy))
        const t = 1 - d / 48
        state.sx = 1 + t * 0.9
        state.sy = 1 - t * 0.35
      } else {
        state.targetEl = null
        setIsMagnetic(false)
        state.sx = 1
        state.sy = 1
      }
    }

    const tick = () => {
      state.x = ease(state.x, state.tx, 0.18)
      state.y = ease(state.y, state.ty, 0.18)

      const el = ref.current
      if (el) {
        el.style.transform = `translate3d(${state.x}px, ${state.y}px, 0) translate(-50%, -50%) scale(${state.sx}, ${state.sy})`
      }

      state.raf = window.requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseenter', onEnter)
    window.addEventListener('mouseleave', onLeave)
    state.raf = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mouseleave', onLeave)
      window.cancelAnimationFrame(state.raf)
    }
  }, [isVisible, prefersReducedMotion, state])

  if (prefersReducedMotion) return null

  return (
    <div
      ref={ref}
      aria-hidden
      className={
        'pointer-events-none fixed left-0 top-0 z-[60] hidden h-6 w-6 rounded-full border border-white/80 bg-transparent mix-blend-difference md:block'
      }
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 200ms ease',
        willChange: 'transform',
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: isMagnetic ? '0 0 0 8px rgba(255,255,255,0.08)' : 'none',
          transition: 'box-shadow 220ms ease',
        }}
      />
    </div>
  )
}
