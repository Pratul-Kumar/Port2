import { motion } from 'framer-motion'
import { Brain, LayoutGrid, Terminal } from 'lucide-react'
import SkillRadar from './SkillRadar.jsx'

function ModuleCard({ icon: Icon, title, subtitle, accent, chips, codeLine, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-ui/40 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            accent === 'python'
              ? 'radial-gradient(520px circle at 20% 20%, rgba(234,179,8,0.12), transparent 60%)'
              : accent === 'data'
                ? 'radial-gradient(520px circle at 20% 20%, rgba(16,185,129,0.12), transparent 60%)'
                : 'radial-gradient(520px circle at 20% 20%, rgba(6,182,212,0.12), transparent 60%)',
        }}
        aria-hidden
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                <Icon className="h-5 w-5 text-slate-200" />
              </div>
              <div className="min-w-0">
                <div className="truncate font-heading text-lg font-semibold text-slate-100">{title}</div>
                <div className="mt-0.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {subtitle}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
              accent === 'python' ? 'bg-python' : accent === 'data' ? 'bg-data' : 'bg-ui'
            }`}
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/10 bg-white/0 px-3 py-1 font-mono text-[11px] font-medium text-slate-300"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4 font-mono text-xs text-slate-200">
          <span className="text-slate-400">$</span> {codeLine}
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-12">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }}>
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Tech Stack</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-slate-100 sm:text-4xl">
              Modules
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              A control-center view of the tools I use to build intelligent systems and polished interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ModuleCard
                icon={Terminal}
                title="Module A: Core Logic"
                subtitle="Python • Database"
                accent="python"
                chips={['Python', 'MySQL', 'Git', 'VS Code']}
                codeLine="python Pratul_Profile.py --mode=build"
              />
            </div>

            <div className="lg:col-span-7">
              <ModuleCard
                icon={Brain}
                title="Module B: AI/ML Engine"
                subtitle="Data • Training • Models"
                accent="data"
                chips={['Pandas', 'PyTorch', 'Scikit-learn', 'Cellular Automata']}
                codeLine="import pandas as pd"
              />
            </div>

            <div className="lg:col-span-12">
              <ModuleCard
                icon={LayoutGrid}
                title="Module C: Frontend Interface"
                subtitle="UI • Motion • Prototyping"
                accent="ui"
                chips={[
                  'React.js',
                  'Tailwind CSS',
                  'Node.js',
                  'Flask',
                  'Microsoft Azure (AZ-900)',
                  'ServiceNow (CSA)',
                ]}
                codeLine="npm create vite@latest ui-interface"
              />
            </div>
          </div>

          <div className="mt-6">
            <SkillRadar />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
