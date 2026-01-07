import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

function CaseFileCard({ fileNo, title, description, tags, codeUrl, accent }) {
  const accentBorder =
    accent === 'warning'
      ? 'border-l-python'
      : accent === 'security'
        ? 'border-l-ui'
        : 'border-l-data'

  const accentGlow =
    accent === 'warning'
      ? 'radial-gradient(520px circle at 20% 20%, rgba(234,179,8,0.16), transparent 60%)'
      : accent === 'security'
        ? 'radial-gradient(520px circle at 20% 20%, rgba(6,182,212,0.16), transparent 60%)'
        : 'radial-gradient(520px circle at 20% 20%, rgba(16,185,129,0.16), transparent 60%)'

  const card = {
    rest: { y: 0 },
    hover: { y: -6 },
  }

  const action = {
    rest: { opacity: 0, y: 18 },
    hover: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        variants={card}
        initial="rest"
        whileHover="hover"
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        className={`group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl transition-colors hover:border-white/20 ${accentBorder} border-l-2`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: accentGlow }}
          aria-hidden
        />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-400">
                File {fileNo}
              </div>
              <h3 className="mt-2 font-heading text-xl font-semibold text-slate-100">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/0 px-3 py-1 font-mono text-[11px] font-medium text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hover-reveal action */}
        <motion.div
          variants={action}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative mt-6"
        >
          <a
            href={codeUrl}
            target="_blank"
            rel="noreferrer"
            data-magnetic
            className="btn-fill inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/0 px-4 py-3 text-sm font-semibold text-slate-100 backdrop-blur-md transition-colors hover:border-white/20"
            aria-label={`View source for ${title}`}
            title="View Source"
          >
            <span className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" />
              View Source
            </span>
          </a>
        </motion.div>

        {/* Bottom slide hint */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 translate-y-6 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          aria-hidden
        />
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        fileNo: '01',
        title: 'Forest Firing',
        description:
          'Predictive Risk Mapping Engine — Simulates forest fire spread using Cellular Automata and assesses risk using ML algorithms.',
        tags: ['Python', 'ML', 'Cellular Automata'],
        codeUrl: 'https://github.com/',
        accent: 'warning',
      },
      {
        fileNo: '02',
        title: 'Beat-Diary',
        description:
          'Secure Law Enforcement System — A cloud-based digital logbook for the Madhya Pradesh Police with JWT authentication and digitized beat reporting.',
        tags: ['MERN Stack', 'JWT Auth', 'Cloudinary'],
        codeUrl: 'https://github.com/',
        accent: 'security',
      },
      {
        fileNo: '03',
        title: 'My Sweet Home',
        description:
          'Real Estate Valuation AI — Advanced house price prediction leveraging CatBoost and XGBoost for high-accuracy market analysis.',
        tags: ['Flask', 'CatBoost', 'XGBoost'],
        codeUrl: 'https://github.com/',
        accent: 'data',
      },
    ],
    [],
  )

  return (
    <section id="projects" className="relative py-12">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }}>
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Data Case Studies</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-slate-100 sm:text-4xl">Case Files</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Each project is a system: inputs, constraints, signal processing, and a clean interface.
              </p>
            </div>
            <div className="hidden font-mono text-xs text-slate-400 sm:block">hover: reveal source</div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {projects.map((p) => (
              <CaseFileCard
                key={p.fileNo}
                fileNo={p.fileNo}
                title={p.title}
                description={p.description}
                tags={p.tags}
                codeUrl={p.codeUrl}
                accent={p.accent}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
