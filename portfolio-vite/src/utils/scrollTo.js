export function scrollToId(id, { offset = -80, duration = 1.0 } = {}) {
  const el = typeof id === 'string' ? document.getElementById(id) : id
  if (!el) return

  const lenis = typeof window !== 'undefined' ? window.lenis : undefined

  if (lenis && typeof lenis.scrollTo === 'function') {
    // No lock — prevents Lenis from freezing on short-distance scrolls
    lenis.scrollTo(el, { offset, duration })
    return
  }

  // Fallback: explicit absolute position for cross-browser reliability
  const top = Math.max(0, window.scrollY + el.getBoundingClientRect().top + (offset || 0))
  try {
    window.scrollTo({ top, behavior: 'smooth' })
  } catch (e) {
    window.scrollTo(0, top)
  }
}
