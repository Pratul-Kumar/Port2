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

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches

    const state = {
      dpr: Math.max(1, Math.min(2, window.devicePixelRatio || 1)),
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      hasMouse: false,
      t: 0,
      nodes: [],
    }

    const config = {
      // Keep this modest for performance.
      nodeCount: prefersReducedMotion ? 35 : 70,
      maxLinkDist: 150,
      nodeRadius: 1.4,
      drift: prefersReducedMotion ? 0.08 : 0.18,
      mouseInfluence: prefersReducedMotion ? 0 : 0.22,
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

      // (Re)seed nodes keeping existing when possible
      if (state.nodes.length === 0) {
        state.nodes = new Array(config.nodeCount).fill(0).map((_, i) => {
          const x = Math.random() * w
          const y = Math.random() * h
          return {
            id: i,
            x,
            y,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
          }
        })
      } else {
        // Clamp within new bounds
        state.nodes.forEach((n) => {
          n.x = clamp(n.x, 0, w)
          n.y = clamp(n.y, 0, h)
        })
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
      state.t += 1

      ctx.clearRect(0, 0, state.width, state.height)

      // Subtle vignette glow (obsidian base with cyan/emerald hints)
      const glow = ctx.createRadialGradient(
        state.width * 0.5,
        state.height * 0.25,
        0,
        state.width * 0.5,
        state.height * 0.25,
        Math.max(state.width, state.height) * 0.75,
      )
      glow.addColorStop(0, 'rgba(6, 182, 212, 0.06)')
      glow.addColorStop(0.45, 'rgba(16, 185, 129, 0.04)')
      glow.addColorStop(1, 'rgba(2, 6, 23, 0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, state.width, state.height)

      // Update nodes
      const mx = state.hasMouse ? state.mouseX : state.width * 0.5
      const my = state.hasMouse ? state.mouseY : state.height * 0.3

      for (const n of state.nodes) {
        // gentle drift
        n.vx += (Math.random() - 0.5) * config.drift * 0.02
        n.vy += (Math.random() - 0.5) * config.drift * 0.02

        // mouse parallax influence
        if (state.hasMouse && config.mouseInfluence > 0) {
          const dx = n.x - mx
          const dy = n.y - my
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          const force = (1 - clamp(dist / 320, 0, 1)) * config.mouseInfluence
          n.vx += (dx / dist) * force * 0.02
          n.vy += (dy / dist) * force * 0.02
        }

        // velocity damp
        n.vx *= 0.985
        n.vy *= 0.985

        n.x += n.vx
        n.y += n.vy

        // bounce edges
        if (n.x < 0 || n.x > state.width) n.vx *= -1
        if (n.y < 0 || n.y > state.height) n.vy *= -1
        n.x = clamp(n.x, 0, state.width)
        n.y = clamp(n.y, 0, state.height)
      }

      // Draw links
      for (let i = 0; i < state.nodes.length; i++) {
        const a = state.nodes[i]
        for (let j = i + 1; j < state.nodes.length; j++) {
          const b = state.nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > config.maxLinkDist) continue

          const alpha = (1 - dist / config.maxLinkDist) * 0.25
          ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // Draw nodes
      for (const n of state.nodes) {
        // Color hint based on proximity to mouse (cyan)
        const dx = n.x - mx
        const dy = n.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        const hot = 1 - clamp(dist / 220, 0, 1)

        const baseAlpha = 0.35
        const alpha = baseAlpha + hot * 0.35

        ctx.fillStyle = `rgba(6, 182, 212, ${alpha})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, config.nodeRadius + hot * 0.6, 0, Math.PI * 2)
        ctx.fill()
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
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    />
  )
}
