import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { ExternalLink, Github, Terminal } from "lucide-react";

/* =========================
   DATA
========================= */

const techProjects = [
  {
    title: "Forest Firing AI",
    stack: "Python • ML • Pandas",
    desc: "Wildfire simulation using ML and Cellular Automata.",
    github: "https://github.com/Pratul-Kumar/Forest-fire-prediction"
  },
  {
    title: "My Sweet Home",
    stack: "Python • XGBoost • Flask",
    desc: "House price prediction with ensemble boosting models.",
    github: "https://github.com/Pratul-Kumar/HousePredication"
  },
  {
    title: "Krishi",
    stack: "Python • TensorFlow • NumPy",
    desc: "Crop disease detection with real-time market insights.",
    github: "https://github.com/Pratul-Kumar/krishi"
  },
  {
    title: "Beat Diary (MP Police Project)",
    stack: "React • Node • MongoDB • JWT",
    desc: "Secure digital reporting system for MP Police.",
    github: "Private / Confidential"
  },
  {
    title: "Real-Time Eye Monitoring System",
    stack: "Python • OpenCV • MediaPipe",
    desc: "Deterministic drowsiness detection without neural networks.",
    github: "https://github.com/Pratul-Kumar/eyedetector.git"
  },
  {
    title: "Lane-Based Car Dodging Game",
    stack: "Python • Pygame",
    desc: "Procedural spawning and progressive difficulty scaling.",
    github: "https://github.com/Pratul-Kumar/CarRunner.git"
  }
];

const uiProject = {
  title: "Shooting Plexus",
  category: "Interactive Web Experience",
  desc: "Creative immersive web interface experiment.",
  live: "https://shooting-plexus.web.app/"
};

/* =========================
   CARD
========================= */

const ProjectCard = ({ p, isTech }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group relative flex flex-col h-full cursor-pointer"
    >
      <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-[#1A1A1A]/5 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />

      <div className="relative h-full p-8 rounded-2xl border-2 border-[#1A1A1A] bg-white/50 backdrop-blur-sm flex flex-col transition-colors group-hover:bg-[#fcfcfc]">

        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#EF9144]">
            {isTech ? p.stack : p.category}
          </span>

          {isTech ? <Terminal size={18} /> : <ExternalLink size={18} />}
        </div>

        <h3 className="text-2xl font-black uppercase tracking-tighter leading-none text-[#1A1A1A] mb-4">
          {p.title}
        </h3>

        <p className="text-sm text-zinc-800 leading-relaxed mb-8">
          {p.desc}
        </p>

        <div className="mt-auto pt-6 border-t-2 border-[#E8E6D9] flex justify-between items-center">

          {isTech && p.github !== "Private / Confidential" && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-black uppercase tracking-widest hover:text-[#EF9144] transition-colors flex items-center gap-2"
            >
              <Github size={14} />
              Repository
            </a>
          )}

          {isTech && p.github === "Private / Confidential" && (
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
              Confidential
            </span>
          )}

          {!isTech && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-black uppercase tracking-widest hover:text-[#EF9144] transition-colors flex items-center gap-2"
            >
              <ExternalLink size={14} />
              Visit Live
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
};

/* =========================
   SECTION
========================= */

const Projects = () => {
  const { scrollYProgress } = useScroll();

  // Parallax watermark
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  return (
    <section
      id="projects"
      className="relative py-32 bg-[#E8E6D9] overflow-hidden"
    >
      {/* Parallax Watermark */}
      <motion.div
        style={{ y: smoothY }}
        className="absolute inset-0 pointer-events-none select-none"
      >
        <div className="absolute top-[20%] left-[-5%] opacity-[0.05] text-[22vw] font-black uppercase tracking-tighter -rotate-6 text-[#1A1A1A]">
          Build
        </div>
        <div className="absolute bottom-[-5%] right-[-5%] opacity-[0.05] text-[18vw] font-black uppercase tracking-tighter rotate-12 text-[#1A1A1A]">
          Systems
        </div>
      </motion.div>

      <div className="relative max-w-8xl mx-auto lg:px-35 px-6 z-10">

        {/* Header Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-[#EF9144]" />
            <span className="font-black uppercase tracking-[0.4em] text-[10px] text-[#1A1A1A]">
              My Projects
            </span>
          </div>

          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-[#1A1A1A]">
            My <br />
            <span className="text-[#EF9144] italic font-serif font-light lowercase">
              Creativity.
            </span>
          </h2>
        </motion.div>

        {/* TECH PROJECTS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h3 className="text-xl font-black uppercase tracking-[0.4em] text-[#1A1A1A] mb-12">
            Tech Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {techProjects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ProjectCard p={p} isTech />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* UI PROJECT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-black uppercase tracking-[0.4em] text-[#1A1A1A] mb-12">
            UI/UX Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProjectCard p={uiProject} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
