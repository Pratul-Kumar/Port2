import { motion, useReducedMotion } from 'framer-motion'
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { skill: 'Python', value: 95 },
  { skill: 'ML', value: 85 },
  { skill: 'Frontend', value: 80 },
  { skill: 'Backend', value: 75 },
  { skill: 'Leadership', value: 90 },
]

export default function SkillRadar() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      whileInView={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-400">Skill Analysis</div>
          <div className="mt-2 font-heading text-xl font-semibold text-slate-100">Hybrid Engineer Mix</div>
          <div className="mt-1 text-sm text-slate-300">Logic, models, UI, systems, and leadership.</div>
        </div>
        <div className="hidden font-mono text-xs text-slate-400 sm:block">scroll: pop-in</div>
      </div>

      <div className="mt-6 h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius="78%">
            <defs>
              <filter id="radarGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#06b6d4" floodOpacity="0.35" />
                <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#06b6d4" floodOpacity="0.18" />
              </filter>
            </defs>

            <PolarGrid stroke="#06b6d4" strokeOpacity={0.2} />

            <PolarAngleAxis
              dataKey="skill"
              tick={{
                fill: 'rgba(255,255,255,0.92)',
                fontSize: 12,
                fontFamily:
                  '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              }}
            />

            <Radar
              dataKey="value"
              stroke="#06b6d4"
              strokeWidth={2}
              fill="rgba(6,182,212,0.18)"
              fillOpacity={1}
              filter="url(#radarGlow)"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
