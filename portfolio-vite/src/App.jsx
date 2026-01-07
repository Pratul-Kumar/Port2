import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import NeuralMeshBackground from './components/NeuralMeshBackground.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-obsidian">
      <NeuralMeshBackground />
      <Navbar />

      <main id="home" className="pt-28">
        <Hero />

        <Skills />
        <Projects />
        <Experience />
        <About />

        <section id="contact" className="py-10">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Contact</p>
              <h2 className="mt-3 text-3xl font-medium text-slate-100 sm:text-4xl">Let’s build something</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300">
                If you want to collaborate on ML, secure web apps, or premium UI engineering—reach out.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  data-magnetic
                  className="inline-flex items-center justify-center rounded-xl bg-teal-400/90 px-5 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.01]"
                  href="mailto:pratulkumar@example.com"
                >
                  Email Me
                </a>
                <a
                  data-magnetic
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/0 px-5 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-colors hover:border-white/20 hover:text-slate-100"
                  href="#"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
