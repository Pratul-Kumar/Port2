import { useEffect, useRef } from 'react'

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

export default function NeuralMeshBackground() {
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

    const config = {
      // Reduced count for a cleaner, minimal look
      nodeCount: window.innerWidth < 768 ? 30 : 50,
      maxLinkDist: 180,
      baseRadius: 1.2,
      // Very slow, calming drift
      driftSpeed: 0.1, 
      color: '252, 202, 70', // Gold Accents (#fcca46)
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
      
      config.nodeCount = w < 768 ? 30 : 50
      if (state.nodes.length !== config.nodeCount) {
        state.nodes = new Array(config.nodeCount).fill(0).map(() => ({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * config.driftSpeed,
          vy: (Math.random() - 0.5) * config.driftSpeed,
        }))
      }
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
      ctx.clearRect(0, 0, state.width, state.height)
      const mx = state.hasMouse ? state.mouseX : state.width * 0.5
      const my = state.hasMouse ? state.mouseY : state.height * 0.5

      state.nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        
        // Subtle mouse repulsion (keeps dots away from cursor slightly)
        if (state.hasMouse) {
          const dx = n.x - mx
          const dy = n.y - my
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200) {
            const force = (200 - dist) / 200
            n.vx -= (dx / dist) * force * 0.01 
            n.vy -= (dy / dist) * force * 0.01
          }
        }

        // Bounce off walls
        if (n.x < 0 || n.x > state.width) n.vx *= -1
        if (n.y < 0 || n.y > state.height) n.vy *= -1

        // Strict speed limit
        n.vx = clamp(n.vx, -0.2, 0.2)
        n.vy = clamp(n.vy, -0.2, 0.2)
        
        // Draw Dot
        ctx.beginPath()
        ctx.arc(n.x, n.y, config.baseRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${config.color}, 0.5)` // Fixed opacity for simplicity
        ctx.fill()
      })

      // Draw Lines
      for (let i = 0; i < state.nodes.length; i++) {
        const a = state.nodes[i]
        for (let j = i + 1; j < state.nodes.length; j++) {
          const b = state.nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < config.maxLinkDist) {
            // Very subtle lines
            const alpha = (1 - dist / config.maxLinkDist) * 0.15
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${config.color}, ${alpha})`
            ctx.lineWidth = 0.8
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
    rafRef.current = window.requestAnimationFrame(step)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-[#0a0a0a]"
      aria-hidden="true"
    />
  )
}