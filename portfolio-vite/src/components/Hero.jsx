import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

function useTerminalType(text, { typingMs = 24, holdMs = 500 } = {}) {
  const prefersReducedMotion = useReducedMotion()
  const [out, setOut] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) {
      setOut(text)
      setDone(true)
      return
    }

    let i = 0
    let timer = 0

    const tick = () => {
      i += 1
      const next = text.slice(0, i)
      setOut(next)

      if (i >= text.length) {
        timer = window.setTimeout(() => setDone(true), holdMs)
        return
      }

      timer = window.setTimeout(tick, typingMs)
    }

    timer = window.setTimeout(tick, typingMs)
    return () => window.clearTimeout(timer)
  }, [holdMs, prefersReducedMotion, text, typingMs])

  return { out, done }
}

export default function Hero() {
  const bootText = useMemo(
    () =>
      '> Initializing Neural Link...\n'
      + '> Import pandas as pd\n'
      + '> Import torch\n'
      + '> Loading MERN_Stack_Module...\n'
      + '> System Online: Pratul Kumar.',
    [],
  )
  const { out: typedBoot, done: bootDone } = useTerminalType(bootText)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section className="relative overflow-hidden">
      {/* Fixed ambient glow behind hero text */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center"
        aria-hidden
      >
        <div className="ambient-glow glow-animate mt-[-200px] h-[720px] w-[980px] max-w-[140vw] rounded-full blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-6 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Left: headline + actions */}
            <div>
              <motion.div variants={item}>
                <h1 className="tracking-tight">
                  <span
                    className="glitch glitch-once block font-heading text-4xl font-semibold text-slate-100 sm:text-5xl md:text-6xl"
                    data-text="Pratul Kumar"
                  >
                    Pratul Kumar
                  </span>
                </h1>
              </motion.div>

              <motion.p variants={item} className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
                Architecting Intelligence with{' '}
                <span className="font-mono text-python">Python</span> &amp;{' '}
                <span className="font-mono text-ui">Design</span>.
              </motion.p>

              <motion.div variants={item} className="mt-5">
                <div className="inline-flex flex-wrap items-center gap-x-5 gap-y-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-mono text-xs text-slate-200 backdrop-blur-xl">
                  <div className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-python" />
                    <span className="text-slate-300">Python:</span>
                    <span className="text-python">Online</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-ui" />
                    <span className="text-slate-300">React:</span>
                    <span className="text-ui">Active</span>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-data" />
                    <span className="text-slate-300">AI Models:</span>
                    <span className="text-data">Ready</span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={item} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  data-magnetic
                  className="btn-fill group inline-flex items-center justify-center gap-2 rounded-xl border border-ui/40 bg-white/0 px-5 py-3 text-sm font-semibold text-slate-100 backdrop-blur-md transition-transform will-change-transform hover:scale-[1.01] hover:border-ui/60"
                  style={{ boxShadow: '0 18px 60px rgba(6,182,212,0.18)' }}
                >
                  <span className="inline-flex items-center gap-2">
                    Open Case Files
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>

                <a
                  href="#contact"
                  data-magnetic
                  className="btn-fill inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/0 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-transform will-change-transform hover:scale-[1.01] hover:border-white/20"
                >
                  <span className="inline-flex items-center gap-2">
                    Contact
                    <Mail className="h-4 w-4" />
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Right: terminal glass pane */}
            <motion.div variants={item} className="lg:justify-self-end">
              <div className="w-full max-w-xl rounded-2xl border border-data/30 bg-black/40 p-5 shadow-2xl backdrop-blur-sm">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-python/80" />
                    <span className="h-2 w-2 rounded-full bg-ui/70" />
                    <span className="h-2 w-2 rounded-full bg-data/80" />
                  </div>
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                    System Boot
                  </div>
                </div>

                <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-data">
                  {typedBoot}
                  {!bootDone && <span className="inline-block w-[10px] animate-pulse text-data">▋</span>}
                </pre>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
