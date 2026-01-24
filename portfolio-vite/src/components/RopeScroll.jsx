import React, { useEffect, useRef } from 'react'

const RopeScroll = () => {
  const canvasRef = useRef(null)

  const rope = useRef({ current: 0, target: 0, v: 0 })
  const char = useRef({ y: 0, v: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = 100
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight

    const onScroll = () => {
      const p = maxScroll > 0 ? window.scrollY / maxScroll : 0
      rope.current.target = p * (window.innerHeight - 90)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    let last = performance.now()

    const animate = (t) => {
      const dt = Math.min(32, t - last)
      last = t

      /* calm spring */
      rope.current.v +=
        (rope.current.taret - rope.current.current) * 0.018 * dt
      rope.current.v *= 0.85
      rope.current.current += rope.current.v

      /* character follow */
      const desired = rope.current.current + 42
      char.current.v += (desired - char.current.y) * 0.022 * dt
      char.current.v *= 0.72
      char.current.y += char.current.v

      drawCable(ctx, rope.current.current, t)
      updateCharacter(char.current.y)

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const updateCharacter = (y) => {
    const el = document.getElementById('tech-node')
    if (!el) return
    const tilt = Math.sin(y / 80) * 2
    el.style.transform = `translateY(${y}px) rotate(${tilt}deg)`
  }

  const drawCable = (ctx, length, time) => {
    const cx = ctx.canvas.width / 2
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    const pulse = (time / 40) % 22

    /* soft glow */
    ctx.strokeStyle = 'rgba(230,194,0,0.15)'
    ctx.lineWidth = 7
    ctx.beginPath()
    ctx.moveTo(cx, 0)
    ctx.lineTo(cx, length)
    ctx.stroke()

    /* main cable */
    ctx.strokeStyle = '#E6C200'
    ctx.lineWidth = 3
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(cx, 0)
    ctx.lineTo(cx, length)
    ctx.stroke()

    /* subtle signal ticks */
    ctx.strokeStyle = 'rgba(230,194,0,0.6)'
    ctx.lineWidth = 1.5
    for (let y = pulse; y < length; y += 22) {
      ctx.beginPath()
      ctx.moveTo(cx - 2, y)
      ctx.lineTo(cx + 2, y + 5)
      ctx.stroke()
    }

    /* anchor */
    ctx.fillStyle = '#E6C200'
    ctx.beginPath()
    ctx.arc(cx, 0, 5, 0, Math.PI * 2)
    ctx.fill()
  }

  return (
    <div className="fixed top-0 right-0 w-24 h-screen pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0" />

      

      <div
        className="absolute right-5 w-10 h-10 rounded-full blur-lg opacity-20"
        style={{
          background:
            'radial-gradient(circle, rgba(230,194,0,.5), transparent 70%)',
        }}
      />
    </div>
  )
}

export default RopeScroll
