import { useEffect, useRef } from 'react'

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

export default function NeuralMeshBackground({ isDarkMode }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const state = {
      dpr: Math.max(1, Math.min(2, window.devicePixelRatio || 1)),
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      hasMouse: false,
      nodes: [],
    }

    // THEME CONFIGURATION
    // Dark Mode: White/Indigo tint | Light Mode: Zinc/Indigo tint
    // Adjusted colors to match your new Indigo/Violet theme
    const themeColor = isDarkMode ? '129, 140, 248' : '79, 70, 229'; 

    const config = {
      nodeCount: window.innerWidth < 768 ? 50 : 90,
      maxLinkDist: 120,
      baseRadius: 1.5,
      driftSpeed: 0.2,
      color: themeColor,
    }

    let lastTime = performance.now()
    const targetFPS = 60
    const frameTime = 1000 / targetFPS
    let isVisible = true

    function handleVisibilityChange() {
      isVisible = !document.hidden
      if (isVisible && !rafRef.current) {
        lastTime = performance.now()
        rafRef.current = window.requestAnimationFrame(step)
      }
    }

    function resize() {
      const { innerWidth: w, innerHeight: h } = window
      state.width = w
      state.height = h
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      canvas.width = Math.floor(w * state.dpr)
      canvas.height = Math.floor(h * state.dpr)
      ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0)
      
      config.nodeCount = w < 768 ? 50 : 90
      
      // Re-initialize nodes on resize
      state.nodes = new Array(config.nodeCount).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * config.driftSpeed,
        vy: (Math.random() - 0.5) * config.driftSpeed,
      }))
    }

    function onPointerMove(e) {
      state.hasMouse = true
      state.mouseX = e.clientX
      state.mouseY = e.clientY
    }

    function onPointerLeave() {
      state.hasMouse = false
    }

    function step() {
      const now = performance.now()
      const delta = now - lastTime
      
      if (delta < frameTime) {
        rafRef.current = window.requestAnimationFrame(step)
        return
      }
      
      lastTime = now - (delta % frameTime)
      
      ctx.clearRect(0, 0, state.width, state.height)
      const mx = state.hasMouse ? state.mouseX : state.width * 0.5
      const my = state.hasMouse ? state.mouseY : state.height * 0.5

      // Update and draw nodes
      for (let i = 0; i < state.nodes.length; i++) {
        const n = state.nodes[i]
        n.x += n.vx
        n.y += n.vy
        
        // Mouse interaction (Repulsion)
        if (state.hasMouse && window.innerWidth >= 768) {
          const dx = n.x - mx
          const dy = n.y - my
          const distSq = dx * dx + dy * dy
          if (distSq < 25000) { 
            const dist = Math.sqrt(distSq)
            const force = (160 - dist) / 160
            n.vx += (dx / dist) * force * 0.05 
            n.vy += (dy / dist) * force * 0.05
          }
        }

        // Wrap around screen
        if (n.x < 0) n.x = state.width
        if (n.x > state.width) n.x = 0
        if (n.y < 0) n.y = state.height
        if (n.y > state.height) n.y = 0

        // Soft speed limit
        n.vx = clamp(n.vx, -0.5, 0.5)
        n.vy = clamp(n.vy, -0.5, 0.5)
        
        // Draw Dot
        ctx.beginPath()
        ctx.arc(n.x, n.y, config.baseRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${config.color}, ${isDarkMode ? 0.5 : 0.8})`
        ctx.fill()
      }

      // Draw Connections
      const len = state.nodes.length
      const maxDistSq = config.maxLinkDist * config.maxLinkDist
      
      for (let i = 0; i < len; i++) {
        const a = state.nodes[i]
        for (let j = i + 1; j < len; j++) {
          const b = state.nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distSq = dx * dx + dy * dy

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq)
            // Reduced max opacity slightly so it doesn't distract from text
            const maxAlpha = isDarkMode ? 0.2 : 0.15
            const alpha = (1 - dist / config.maxLinkDist) * maxAlpha
            
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${config.color}, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
      
      rafRef.current = window.requestAnimationFrame(step)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    rafRef.current = window.requestAnimationFrame(step)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
    }
  }, [isDarkMode])

  return (
    <canvas
      ref={canvasRef}
   
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-50"
      aria-hidden="true"
    />
  )
}