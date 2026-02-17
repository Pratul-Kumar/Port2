import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Sparkles, Box } from 'lucide-react';

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
  },
   {
    title: "Krishi",
    stack: "Python • ML • TensorFlow • NumPy • Under Developing",
    desc: "Krishi Drishti is an integrated platform that leverages deep learning to detect diseases in wheat and rice crops from images, and provides real-time market price information for major crops. The system is designed for farmers, agronomists, and researchers to enable rapid disease diagnosis and informed market decisions.",
    github: "https://github.com/Pratul-Kumar/krishi",
  },
  {
  title: "Beat Diary (MP Police Project)",
  stack: "React, Tailwind, Node.js, Express, MongoDB, JWT, Cloudinary, Python",
  desc: (
  <>
    A secure web platform to digitize daily police beat reporting for Madhya Pradesh Police, replacing manual registers with centralized, real-time data access. 
    <strong>( Can't Share Due to Confidentiality Agreements)</strong>
  </>
  ),
    github: "Private / Confidential"
},

  {
    title: "Voice Assistant",
    stack: "Python •NumPy • SpeechRecognition • pytesseract • pillow • wikipedia-api",
    desc: "Alpha is a professional, robust, and responsive voice assistant for Windows, written in Python. It uses speech recognition and text-to-speech to interact with users, execute commands, fetch information, and automate tasks.",
    github: "https://github.com/Pratul-Kumar/krishi",
  },
  {
  title: "Real-Time Eye Monitoring System",
  stack: "Python • OpenCV • MediaPipe • NumPy",
  desc: "A deterministic real-time drowsiness detection system that tracks facial landmarks and computes Eye Aspect Ratio (EAR) and PERCLOS without using neural networks or datasets. Built with a state-machine driven architecture for edge deployment.",
  github: "https://github.com/Pratul-Kumar/eyedetector.git"
},
  {
  title: "Lane-Based Car Dodging Game",
  stack: "Python • Pygame",
  desc: "A real-time 2D lane-based car game built using a deterministic game loop architecture. Implements discrete lane switching, procedural vehicle spawning, rectangle-based collision detection, and progressive difficulty scaling using frame-timed state management.",
  github: "https://github.com/Pratul-Kumar/CarRunner.git"
}


];

const ProjectCard = ({ p, isTech = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: -6, y: -6 }}
      className={`group relative bg-white/50 border-2 border-[#1A1A1A] transition-all duration-500 ${
        isTech 
          ? "p-10 shadow-[10px_10px_0px_0px_#1A1A1A] hover:shadow-[15px_15px_0px_0px_#EF9144]" 
          : "aspect-[4/5] overflow-hidden shadow-[10px_10px_0px_0px_#EF9144] hover:shadow-[14px_14px_0px_0px_#1A1A1A]"
      }`}
    >
      {isTech ? (
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="bg-[#EF9144] p-3 border-2 border-[#1A1A1A] rounded-xl shadow-[4px_4px_0px_0px_#1A1A1A]">
                <Terminal size={22} strokeWidth={3} className="text-[#1A1A1A]" />
              </div>
              <Sparkles size={20} className="opacity-10 group-hover:opacity-100 transition-opacity text-[#EF9144]" />
            </div>
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#EF9144] mb-3 block">
              {p.stack}
            </span>
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-[0.9] text-[#1A1A1A]">
              {p.title}
            </h3>
            <p className="text-[#1A1A1A]/70 text-sm leading-relaxed font-medium">
              {p.desc}
            </p>
          </div>
          
          <div className="mt-8 pt-6 border-t-2 border-[#1A1A1A]/5 flex items-center justify-between">
            <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[15px] font-black uppercase tracking-widest hover:text-[#EF9144] transition-colors">
              <Github size={14} strokeWidth={3} /> Repository Link
            </a>
            <Box size={24} className="opacity-5" />
          </div>
        </div>
      ) : (
        <>
          <img src={p.image} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" alt={p.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-70" />
          
          <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <p className="text-[#EF9144] font-serif italic text-sm mb-1">{p.category}</p>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-5 leading-none">
              {p.title}
            </h3>
            <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
              {p.tags.map(tag => (
                <span key={tag} className="text-[9px] font-black px-3 py-1 bg-white border border-[#1A1A1A] uppercase tracking-widest shadow-[2px_2px_0px_0px_#1A1A1A] text-[#1A1A1A]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <a href={p.link} className="absolute top-6 right-6 w-14 h-14 bg-[#EF9144] border-2 border-[#1A1A1A] rounded-full flex items-center justify-center transform -translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[4px_4px_0px_0px_#1A1A1A] text-[#1A1A1A]">
            <ExternalLink size={20} strokeWidth={3} />
          </a>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#E8E6D9] text-[#1A1A1A] overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[10%] left-[-10%] w-[70vw] h-[70vw] opacity-30 blur-[120px] rounded-full"
          style={{ background: 'radial-gradient(circle, #EF9144 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-[5%] right-[-5%] w-[60vw] h-[60vw] opacity-40 blur-[100px] rounded-full"
          style={{ background: 'radial-gradient(circle, #D4CDB3 0%, transparent 70%)' }}
        />
      </div>

      {/* 2. TEXTURE & EDITORIAL WATERMARK OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        {/* Massive Background Text Watermarks - Opacity Increased */}
        <div className="absolute top-[10%] right-[-10%] opacity-[0.08] text-[25vw] font-black leading-none uppercase tracking-tighter -rotate-12">
          Work
        </div>
        <div className="absolute bottom-[25%] left-[5%] opacity-[0.08] text-[22vw] font-black leading-none uppercase tracking-tighter rotate-6">
          Archive
        </div>

        {/* --- FOUR-POINT LINE STARS BACKGROUND --- */}
        <div className="absolute top-[15%] left-[10%] opacity-[0.08] text-[#EF9144]">
          <svg width="240" height="240" viewBox="0 0 100 100" fill="none">
             <path d="M50 0L52 48L100 50L52 52L50 100L48 52L0 50L48 48L50 0Z" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute bottom-[20%] right-[10%] opacity-[0.05] text-[#EF9144] rotate-[25deg]">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none">
             <path d="M50 0L52 48L100 50L52 52L50 100L48 52L0 50L48 48L50 0Z" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute top-[45%] right-[25%] opacity-[0.03] text-[#EF9144] -rotate-12">
          <svg width="180" height="180" viewBox="0 0 100 100" fill="none">
             <path d="M50 0L52 48L100 50L52 52L50 100L48 52L0 50L48 48L50 0Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6 lg:px-35 relative z-10">
        
        <div className="flex flex-col mb-24">
           <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-16 bg-[#EF9144]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-50">Project_Index_2026</span>
           </div>
           <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-[#1A1A1A]">
            Visual <br /> 
            <span className="text-[#EF9144] font-serif italic font-light lowercase">Architecture.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-40">
          {techProjects.map((p, i) => <ProjectCard key={i} p={p} isTech />)}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:mt-32">
            <ProjectCard p={uiProjects[0]} />
          </div>
          <div className="lg:mt-10">
            <ProjectCard p={uiProjects[1]} />
          </div>
          <div className="lg:mt-48">
            <ProjectCard p={uiProjects[2]} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;