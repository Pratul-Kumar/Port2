import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Layout, Terminal, Box } from 'lucide-react';

const uiProjects = [
  {
    title: "Beat-Diary Platform",
    category: "Mobile UI/UX",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop", 
    tags: ["Figma", "Prototyping"],
    link: "#"
  },
  {
    title: "Eco-Stream Dashboard",
    category: "Web Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["Visual Design", "System"],
    link: "#"
  },
  {
    title: "Neural Interface",
    category: "Futuristic UI",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    tags: ["HMI", "Dark Theme"],
    link: "#"
  }
];

const techProjects = [
  {
    title: "Forest Firing AI",
    stack: "Python • ML • Pandas",
    desc: "Utilizes Machine Learning and Cellular Automata to simulate dynamic fire spread patterns and predict risk zones for disaster management.",
    github: "https://github.com/Pratul-Kumar/Forest-fire-prediction",
  },
  {
    title: "My Sweet Home",
    stack: "Python • XGBoost • Flask",
    desc: "Integrates CatBoost and XGBoost algorithms to accurately predict house prices and recommend properties based on user input.",
    github: "https://github.com/Pratul-Kumar/HousePredication",
  }
];

const ProjectCard = ({ p, isTech = false }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(300px circle at ${x}px ${y}px, rgba(252, 202, 70, 0.1), transparent 80%)`
  );

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative rounded-[2rem] border border-white/5 bg-zinc-900/10 backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-[#fcca46]/20 ${
        isTech ? "p-8 min-h-[320px] flex flex-col justify-between" : "aspect-[4/5] sm:aspect-square lg:aspect-[4/5]"
      }`}
    >
      <motion.div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" style={{ background }} />

      {isTech ? (
        <>
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Box size={80} className="text-[#fcca46]" />
          </div>
          <div className="relative z-20">
            <div className="flex items-center gap-2 text-[#fcca46] font-mono text-[10px] uppercase tracking-widest mb-4">
              <div className="h-1.5 w-1.5 rounded-full bg-[#fcca46] animate-pulse" />
              {p.stack}
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-[#fcca46] transition-colors">{p.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">{p.desc}</p>
          </div>
          <div className="relative z-20 mt-8">
            <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
              <Github size={14} /> View Source
            </a>
          </div>
        </>
      ) : (
        <>
          <img src={p.image} className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt={p.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
          <div className="absolute bottom-8 left-8 right-8 z-20">
            <p className="text-[#fcca46] font-mono text-[10px] uppercase tracking-widest mb-2">{p.category}</p>
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 text-white">{p.title}</h3>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(tag => (
                <span key={tag} className="text-[8px] px-2.5 py-1 rounded-md border border-white/10 bg-black/60 backdrop-blur-md uppercase tracking-widest text-zinc-300">{tag}</span>
              ))}
            </div>
          </div>
          <a href={p.link} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all hover:bg-[#fcca46] hover:text-black">
            <ExternalLink size={16} />
          </a>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 md:py-32 text-white bg-transparent">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        
        {/* --- TECH PROJECTS --- */}
        <div className="mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Terminal size={16} className="text-[#fcca46]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">Source_Control</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Logic <span className="text-zinc-800 italic font-light">Execution.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techProjects.map((p, i) => <ProjectCard key={i} p={p} isTech />)}
          </div>
        </div>

        {/* --- UI PROJECTS --- */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Layout size={16} className="text-[#fcca46]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">Design_System</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Design <span className="text-zinc-800 italic font-light">Archives.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uiProjects.map((p, i) => <ProjectCard key={i} p={p} />)}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;