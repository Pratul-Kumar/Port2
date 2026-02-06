export function scrollToId(id, { offset = -80, duration = 1.0 } = {}) {
  const el = typeof id === 'string' ? document.getElementById(id) : id
  if (!el) return

  const lenis = typeof window !== 'undefined' ? window.lenis : undefined

  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(el, { offset, duration, lock: true })
    return
  }

  // Fallback: native smooth scroll
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  if (offset) {
    try {
      window.scrollBy({ top: offset, behavior: 'smooth' })
    } catch (e) {
      window.scrollTo(0, window.scrollY + offset)
    }
  }
}
