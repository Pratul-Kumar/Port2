import { motion } from 'framer-motion'
import { Award, GraduationCap, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-12">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Profile</p>
              <h2 className="mt-2 font-heading text-3xl font-semibold text-slate-100 sm:text-4xl">About</h2>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-lg">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-0.5 h-5 w-5 text-ui" />
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  I am a B.Tech AIML undergraduate at Technocrats Institute of Technology. Beyond code, I serve as the Vice President of the Student Council, where I bridge the gap between technical innovation and organizational leadership. I specialize in building secure web architectures and predictive AI models.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-lg">
              <div
                className="pointer-events-none absolute -inset-24 opacity-80"
                style={{
                  background:
                    'radial-gradient(520px circle at 20% 20%, rgba(6,182,212,0.14), transparent 55%), radial-gradient(520px circle at 85% 70%, rgba(16,185,129,0.12), transparent 58%)',
                }}
                aria-hidden
              />

              <div className="relative flex items-start gap-3">
                <Award className="mt-0.5 h-5 w-5 text-python" />
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] font-semibold text-slate-200">
                    <Sparkles className="h-3.5 w-3.5 text-ui" />
                    <span>Leadership</span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-slate-100">Vice President, Student Council</h3>
                  <p className="mt-1 font-mono text-xs text-slate-400">May ’25 – Apr ’26</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Focused on building high-trust collaboration, mentoring peers, and driving student initiatives with a modern, execution-first mindset.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            {/* Cyberpunk graphic panel (no external image required) */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-lg">
              <div
                className="pointer-events-none absolute inset-0 opacity-90"
                style={{
                  background:
                    'radial-gradient(520px circle at 30% 25%, rgba(6,182,212,0.16), transparent 55%), radial-gradient(520px circle at 70% 75%, rgba(16,185,129,0.10), transparent 58%)',
                }}
                aria-hidden
              />

              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">Signal</div>
                  <div className="h-2 w-2 rounded-full bg-ui/80 shadow-[0_0_24px_rgba(6,182,212,0.45)]" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'ML Systems', value: 'Predict' },
                    { label: 'Web UI', value: 'Immerse' },
                    { label: 'Security', value: 'Harden' },
                    { label: 'Iteration', value: 'Ship' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg"
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                        {s.label}
                      </div>
                      <div className="mt-2 font-heading text-2xl font-semibold text-slate-100">
                        {s.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-lg">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Focus</div>
                  <div className="mt-2 text-sm text-slate-300">
                    Predictive analytics • secure web apps • immersive motion
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.18]"
                style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                aria-hidden
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
