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
      nodeCount: prefersReducedMotion ? 35 : 70,
      maxLinkDist: 150,
      nodeRadius: 1.4,
      // 1. SPEED CONTROL: Lower this number to make it slower (e.g., 0.05 is very slow)
      drift: prefersReducedMotion ? 0.05 : 0.1, 
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
            // Initial velocity is set very low for a slow start
            vx: (Math.random() - 0.5) * 0.1, 
            vy: (Math.random() - 0.5) * 0.1,
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

      // Clear the canvas, leaving it transparent
      ctx.clearRect(0, 0, state.width, state.height)

      // Update nodes
      const mx = state.hasMouse ? state.mouseX : state.width * 0.5
      const my = state.hasMouse ? state.mouseY : state.height * 0.3

      for (const n of state.nodes) {
        // Gentle random drift
        n.vx += (Math.random() - 0.5) * config.drift * 0.02
        n.vy += (Math.random() - 0.5) * config.drift * 0.02

        // Mouse influence
        if (state.hasMouse && config.mouseInfluence > 0) {
          const dx = n.x - mx
          const dy = n.y - my
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          const force = (1 - clamp(dist / 320, 0, 1)) * config.mouseInfluence
          n.vx += (dx / dist) * force * 0.02
          n.vy += (dy / dist) * force * 0.02
        }

        // Friction: Closer to 1.0 means they glide longer (smoother). 
        // Lower (e.g., 0.90) means they stop faster.
        n.vx *= 0.99 
        n.vy *= 0.99

        // 2. MAX SPEED CAP: This ensures they never get too fast
        const maxSpeed = 0.4;
        n.vx = clamp(n.vx, -maxSpeed, maxSpeed);
        n.vy = clamp(n.vy, -maxSpeed, maxSpeed);

        n.x += n.vx
        n.y += n.vy

        // Bounce edges
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

          // >>> 3. CONTROL LINK OPACITY HERE <<<
          // Change '0.4' to make lines brighter (e.g. 0.8) or dimmer (e.g. 0.2)
          const alpha = (1 - dist / config.maxLinkDist) * 0.2 
          
          // Theme Color: Gold (#fcca46 corresponds roughly to 252, 202, 70)
          ctx.strokeStyle = `rgba(252, 202, 70, ${alpha})` 
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // Draw nodes
      for (const n of state.nodes) {
        // Color hint based on proximity to mouse
        const dx = n.x - mx
        const dy = n.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        const hot = 1 - clamp(dist / 220, 0, 1)

        // >>> 4. CONTROL DOT OPACITY HERE <<<
        // '0.6' is the starting brightness. Increase for glowing dots.
        const baseAlpha = 0.6
        const alpha = baseAlpha + hot * 0.2 

        ctx.fillStyle = `rgba(252, 202, 70, ${alpha})`
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