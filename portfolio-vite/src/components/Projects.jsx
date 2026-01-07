import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layout, Terminal, Box, Play } from 'lucide-react';

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
    tags: ["Visual Design", "Design System"],
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
    title: "Forest Firing (AI Risk Mapping)",
    stack: "Python • ML • Cellular Automata • Pandas",
    desc: "Utilizes Machine Learning and Cellular Automata to simulate dynamic fire spread patterns and predict risk zones, aiding in early warning systems and disaster management.",
    github: "https://github.com/Pratul-Kumar/Forest-fire-prediction",
    demo: "#"
  },
  {
    title: "My Sweet Home (House Price Prediction)",
    stack: "Python • Flask • XGBoost • CatBoost • HTML/CSS",
    desc: " Integrates CatBoost and XGBoost algorithms to accurately predict house prices and recommend similar properties based on user input.",
    github: "https://github.com/Pratul-Kumar/HousePredication",
    demo: "#"
  }
];

const Projects = () => {
  // Variants renamed to 'visible' for clarity and better trigger reliability
  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 } 
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="projects" className="relative min-h-screen py-24  text-white z-10">
      <div className="mx-auto max-w-8xl px-20 lg:px-20">

        {/* --- SECTION 1: TECH PROJECTS --- */}
        <div className="mb-32">
          <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Terminal size={16} className="text-[#fcca46]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">Source_Control.sh</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
                Logic <span className="text-zinc-800 italic font-light">Execution.</span>
              </h2>
            </div>
          </div>

          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }} // Reduced amount to trigger easier
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {techProjects.map((p, i) => (
              <motion.div 
                key={i} 
                variants={item} 
                className="p-8 rounded-[2rem] border border-white/5 bg-zinc-900/40 backdrop-blur-xl relative group overflow-hidden min-h-[350px] flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Box size={80} className="text-[#fcca46]" />
                </div>
                
                <div>
                  <div className="flex items-center gap-2 text-[#fcca46] font-mono text-[10px] uppercase tracking-widest mb-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#fcca46] animate-pulse" />
                    {p.stack}
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{p.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">{p.desc}</p>
                </div>
                
                <div className="flex gap-6 mt-8">
                  <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-[#fcca46] transition-colors">
                    <Github size={14} /> Repository
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* --- SECTION 2: UI PROJECTS --- */}
        <div className="mb-32">
          <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Layout size={16} className="text-[#fcca46]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">Design_System.v2</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
                Design <span className="text-zinc-800 italic font-light">Archives.</span>
              </h2>
            </div>
          </div>

          <motion.div 
            variants={container} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.1 }} 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {uiProjects.map((p, i) => (
              <motion.div 
                key={i} 
                variants={item} 
                className="group relative rounded-[2rem] border border-white/5 bg-zinc-900/20 overflow-hidden aspect-[4/5] lg:aspect-square"
              >
                <img 
                  src={p.image} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  alt={p.title} 
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90" /> */}
                
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <p className="text-[#fcca46] font-mono text-[10px] uppercase tracking-widest mb-2">{p.category}</p>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">{p.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-[9px] px-2 py-1 rounded-md border border-white/10 bg-black/40 backdrop-blur-md uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <a href={p.link} className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center z-30 opacity-0 group-hover:opacity-100 transition-all">
                  <ExternalLink size={18} />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Projects;