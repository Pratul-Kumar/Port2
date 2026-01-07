import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

function TimelineItem({ title, subtitle, time, icon: Icon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative pl-12"
    >
      {/* Node */}
      <div className="absolute left-4 top-2 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-white/10 bg-white/5 shadow-[0_0_24px_rgba(6,182,212,0.28)] backdrop-blur-lg">
        <Icon className="h-4 w-4 text-ui" />
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-lg">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <div className="font-heading text-lg font-semibold text-slate-100">{title}</div>
            <div className="text-sm font-semibold text-slate-300">{subtitle}</div>
          </div>
          <div className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-400">{time}</div>
        </div>
        <div className="mt-4 text-sm leading-relaxed text-slate-300">{children}</div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-12">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">System Log</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-slate-100 sm:text-4xl">Internship</h2>
        </div>

        <div className="relative">
          {/* Glowing line that draws on scroll */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="absolute left-4 top-2 h-[calc(100%-8px)] w-px origin-top bg-gradient-to-b from-ui via-data to-transparent shadow-[0_0_20px_rgba(6,182,212,0.35)]"
            aria-hidden
          />

          <div className="space-y-8">
            <TimelineItem
              icon={Briefcase}
              title="Python Intern"
              subtitle="Cognifyz Technologies"
              time="Dec 2024 – Jan 2025"
            >
              Deployed production-style mini-systems including a File Encryptor, Game Server Chat, and secure Banking Applications—focused on reliability, security-first thinking, and clean Python implementations.
            </TimelineItem>

            <TimelineItem
              icon={GraduationCap}
              title="Education"
              subtitle="Technocrats Institute of Technology (B.Tech AIML)"
              time="2022–2026"
            >
              Undergraduate focus on machine learning fundamentals, applied modeling, and building end-to-end systems with strong engineering discipline.
            </TimelineItem>
          </div>
        </div>
      </div>
    </section>
  )
}
