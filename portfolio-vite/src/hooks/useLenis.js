import { useEffect } from 'react'
import Lenis from 'lenis'

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.9,
      smoothTouch: false,
      touchMultiplier: 1.6,
      infinite: false,
    })

    // Expose globally for programmatic scroll (e.g., nav links)
    if (typeof window !== 'undefined') {
      window.lenis = lenis
    }

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    // Prevent browser from restoring scroll on refresh
    try {
      if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
    } catch {}

    // Ensure starting at top on initial mount
    try {
      if (typeof window !== 'undefined') {
        if (lenis && typeof lenis.scrollTo === 'function') {
          lenis.scrollTo(0, { duration: 0 })
        } else {
          window.scrollTo(0, 0)
        }
      }
    } catch {}

    requestAnimationFrame(raf)

    return () => {
      if (typeof window !== 'undefined' && window.lenis === lenis) {
        delete window.lenis
      }
      lenis.destroy()
    }
  }, [])
}
