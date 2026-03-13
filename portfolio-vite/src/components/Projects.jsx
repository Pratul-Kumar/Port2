import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Database, Cpu, Layout, Terminal, BrainCircuit, Globe } from 'lucide-react';

/* =========================
   DATA
========================= */

const projects = [
  {
    id: 'forest',
    title: "Forest Firing AI",
    stack: ["Python", "ML", "Pandas"],
    desc: "Wildfire simulation using ML. Models environmental spread factors.",
    github: "https://github.com/Pratul-Kumar/Forest-fire-prediction",
    category: "Machine Learning",
    color: "#FF6B00",
    icon: <BrainCircuit size={16} />
  },
  {
    id: 'house',
    title: "My Sweet Home",
    stack: ["Python", "XGBoost", "Flask"],
    desc: "House price prediction system utilizing ensemble boosting models.",
    github: "https://github.com/Pratul-Kumar/HousePredication",
    category: "Machine Learning",
    color: "#10B981",
    icon: <Database size={16} />
  },
  {
    id: 'krishi',
    title: "Krishi AI",
    stack: ["Python", "TensorFlow", "NumPy"],
    desc: "Deep learning crop disease detection system.",
    github: "https://github.com/Pratul-Kumar/krishi",
    category: "Computer Vision",
    color: "#3B82F6",
    icon: <Cpu size={16} />
  },
  {
    id: 'eye',
    title: "Eye Monitoring",
    stack: ["Python", "OpenCV", "MediaPipe"],
    desc: "Deterministic drowsiness detection system without neural networks.",
    github: "https://github.com/Pratul-Kumar/eyedetector.git",
    category: "Computer Vision",
    color: "#8B5CF6",
    icon: <Layout size={16} />
  },
  {
    id: 'beat',
    title: "Beat Diary System",
    stack: ["React", "Node", "MongoDB"],
    desc: "Secure digital reporting infrastructure architected for MP Police.",
    github: "Private / Confidential",
    category: "Full Stack",
    color: "#EC4899",
    icon: <Globe size={16} />
  },
  {
    id: 'plexus',
    title: "Shooting Plexus",
    stack: ["React", "Three.js", "GSAP"],
    desc: "Creative immersive web interface experiment pushing WebGL.",
    github: "https://shooting-plexus.web.app/",
    category: "Creative Dev",
    color: "#F59E0B",
    icon: <Terminal size={16} />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

/* =========================
   ORBITAL GRAPH COMPONENT
========================= */

const ProjectOrbitalGraph = () => {
  // We keep the active project persistently until another is hovered
  // so the user can hover into the center to click the link.
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  
  const radius = 220;
  const subRadius = radius + 90;

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[750px] flex items-center justify-center border border-gray-200/50 rounded-3xl shadow-sm my-6 md:my-10 z-20 overflow-hidden hidden md:flex backdrop-blur-[2px]">
       {/* Background rings now use global grid */}

       {/* Scalable inner container centered */}
       <div className="relative w-[600px] h-[600px] flex items-center justify-center scale-[0.55] sm:scale-[0.75] md:scale-100 origin-center flex-shrink-0">
         <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-gray-200 animate-[spin_60s_linear_infinite]" />
         <div className="absolute w-[600px] h-[600px] rounded-full border border-gray-100 opacity-50" />

       {/* Lines */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <g className="origin-center translate-x-1/2 translate-y-1/2">
             {projects.map((item, i) => {
               const angle = (i * (360 / projects.length)) * (Math.PI / 180);
               const x = Math.cos(angle) * radius;
               const y = Math.sin(angle) * radius;
               const isActive = (activeProject?.id === item.id);
               
               return (
                 <motion.line 
                    key={`line-${i}`}
                    x1="0" y1="0" x2={x} y2={y}
                    stroke={isActive ? item.color : "#E5E7EB"}
                    strokeWidth={isActive ? "2" : "1"}
                    strokeDasharray={isActive ? "none" : "4 4"}
                    transition={{ duration: 0.3 }}
                    className="transition-colors duration-300"
                 />
               );
             })}
          </g>
       </svg>

       {/* Tech Stack Sub-nodes */}
       <AnimatePresence>
         {activeProject && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {activeProject.stack.map((tech, si) => {
                const catIndex = projects.findIndex(d => d.id === activeProject.id);
                const catAngle = (catIndex * (360 / projects.length)) * (Math.PI / 180);
                
                const spreadAngle = catAngle + ((si - 1) * 0.45);
                
                const sx = `calc(50% + ${Math.cos(spreadAngle) * subRadius}px)`;
                const sy = `calc(50% + ${Math.sin(spreadAngle) * subRadius}px)`;

                return (
                  <motion.div
                    key={`sub-${si}-${activeProject.id}`}
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
                    animate={{ opacity: 1, left: sx, top: sy, scale: 1 }}
                    transition={{ delay: si * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                  >
                     <div className="bg-white border text-gray-700 px-3 py-1.5 rounded-full shadow-lg text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap" style={{ borderColor: activeProject.color + '60' }}>
                       {tech}
                     </div>
                  </motion.div>
                );
              })}
            </motion.div>
         )}
       </AnimatePresence>

       {/* Project Nodes */}
       {projects.map((item, i) => {
          const angle = (i * (360 / projects.length)) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isActive = (activeProject?.id === item.id) || (hoveredNode === item.id);
          
          return (
             <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.5, type: 'spring' }}
                onMouseEnter={() => { setActiveProject(item); setHoveredNode(item.id); }}
                onMouseLeave={() => setHoveredNode(null)}
                className="absolute w-14 h-14 -ml-7 -mt-7 rounded-full flex flex-col items-center justify-center bg-white border cursor-pointer hover:z-20 transition-all duration-300 shadow-sm"
                style={{ 
                   left: `calc(50% + ${x}px)`, 
                   top: `calc(50% + ${y}px)`,
                   borderColor: isActive ? item.color : '#E5E7EB',
                   boxShadow: isActive ? `0 0 20px ${item.color}40` : '0 2px 10px rgba(0,0,0,0.02)'
                }}
             >
                <div style={{ color: isActive ? item.color : '#9CA3AF' }} className="transition-colors duration-300">
                  {item.icon}
                </div>
                
                <div className={`absolute ${x > 0 ? 'left-[4.5rem] text-left' : 'right-[4.5rem] text-right'} whitespace-nowrap text-[10px] font-mono uppercase tracking-widest font-bold transition-colors duration-300 pointer-events-none`} style={{ color: isActive ? item.color : '#6B7280' }}>
                  {item.title}
                </div>
             </motion.div>
          );
       })}

       {/* Central HUD Data Hub */}
       <motion.div 
         initial={{ scale: 0 }}
         whileInView={{ scale: 1 }}
         transition={{ type: "spring", stiffness: 200, damping: 20 }}
         className="relative z-40 w-72 h-72 rounded-full border-[4px] border-white shadow-2xl flex items-center justify-center p-8 text-center bg-[#0A0A0A] overflow-hidden group"
       >
          <div className="absolute inset-0 bg-dotted-dark opacity-30 pointer-events-none" />
          
          {!activeProject ? (
             <div className="flex flex-col items-center relative z-10">
                <div className="absolute inset-0 rounded-full border border-[#FF6B00]/30 animate-ping opacity-50 pointer-events-none" />
                <Terminal size={32} className="text-[#FF6B00] mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white font-mono font-bold tracking-widest uppercase">Deployments</span>
                <span className="text-gray-500 text-[10px] mt-2 uppercase tracking-widest font-mono">Hover a node<br/>to analyze</span>
             </div>
          ) : (
             <motion.div 
               key={activeProject.id}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="flex flex-col items-center w-full relative z-10"
             >
                <div className="text-[#FF6B00] mb-3 p-2 bg-[#FF6B00]/10 rounded-full border border-[#FF6B00]/20">
                  {activeProject.icon}
                </div>
                <h4 className="text-white font-heading font-black text-xl leading-tight mb-2 tracking-tight">
                  {activeProject.title}
                </h4>
                <p className="text-gray-400 text-[11px] leading-relaxed mb-5 font-mono">
                  {activeProject.desc}
                </p>
                {activeProject.github !== "Private / Confidential" ? (
                   <a href={activeProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center text-[10px] bg-[#FF6B00] text-white px-4 py-2 rounded-full uppercase tracking-widest font-bold hover:bg-white hover:text-[#0A0A0A] transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,107,0,0.5)] z-50 relative pointer-events-auto">
                      Analyze Source <ExternalLink size={12} className="ml-1.5" />
                   </a>
                ) : (
                   <span className="inline-flex items-center justify-center text-[10px] bg-red-500/10 text-red-500 px-4 py-2 rounded-full uppercase tracking-widest font-bold border border-red-500/30">
                      Classified System
                   </span>
                )}
             </motion.div>
          )}
       </motion.div>
       </div>
    </div>
  );
};

/* =========================
   MOBILE GRID COMPONENT
========================= */

const MobileCard = ({ project, index }) => {
  return (
    <motion.div 
      variants={cardVariants}
      className="group relative flex flex-col bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl p-6 shadow-sm overflow-hidden h-full"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[#FF6B00] font-mono text-[9px] font-bold uppercase tracking-widest bg-[#FF6B00]/5 px-2.5 py-1 rounded-full border border-[#FF6B00]/10 flex items-center gap-1.5">
            {project.icon} {project.category}
          </span>
          <span className="text-gray-400 font-mono text-[9px] uppercase tracking-widest inline-flex items-center gap-1">
            Sys_0{index + 1}
          </span>
        </div>

        <h3 className="text-xl font-black font-heading tracking-tight text-[#0A0A0A] mb-3">
          {project.title}
        </h3>

        <p className="text-xs text-[#666666] leading-relaxed font-body mb-6 flex-grow">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6 border-b border-gray-100 pb-6 border-dashed">
          {project.stack.map((tech, i) => (
            <span key={i} className="px-2 py-1 text-[9px] font-mono font-medium uppercase tracking-wider rounded border border-gray-200 bg-gray-50 text-gray-500">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          {project.github !== "Private / Confidential" ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="w-full inline-flex justify-center items-center text-[10px] font-bold font-mono uppercase tracking-widest text-white bg-[#0A0A0A] py-2.5 rounded-lg border border-gray-800">
              Analyze Code <ExternalLink size={12} className="ml-2" />
            </a>
          ) : (
            <span className="w-full inline-flex justify-center items-center text-[10px] font-bold font-mono uppercase tracking-widest text-red-500 bg-red-50 py-2.5 rounded-lg border border-red-100 gap-2">
              <Terminal size={12} /> Classified
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* =========================
   SECTION COMPONENT
========================= */

const Projects = () => {
  return (
    <section id="projects" className="relative py-16 md:py-24 overflow-hidden border-t border-dashed border-gray-200">
      
      {/* Structural background now global */}

      <div className="relative max-w-6xl mx-auto px-6 z-10 w-full">
        
        {/* Header Reveal */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#FF6B00] font-mono text-sm font-medium">04</span>
              <div className="h-[1px] w-12 bg-gray-300" />
              <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                My Projects
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[1.05] text-[#0A0A0A]">
              My <br className="hidden md:block"/> 
              <span style={{ fontFamily: 'var(--font-dotted)' }} className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] to-[#FF9E5E] tracking-[0.05em] drop-shadow-sm">Projects.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end text-right gap-2">
             <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
                <Cpu size={16} className="text-[#FF6B00]" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">ML Capabilities Active</span>
             </div>
             <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest max-w-[200px] mt-2 hidden md:block">
               Click central HUD links to analyze source repositories.
             </p>
          </div>
        </motion.div>

        {/* ORBITAL GRAPH (DESKTOP) */}
        <ProjectOrbitalGraph />

        {/* PROJECTS GRID (MOBILE FALLBACK) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:hidden mt-8"
        >
          {projects.map((p, i) => (
            <MobileCard key={i} project={p} index={i} />
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/Pratul-Kumar"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center bg-white border border-gray-200 text-[#0A0A0A] px-8 py-4 rounded-xl font-bold font-mono text-sm tracking-widest overflow-hidden transition-all hover:border-[#FF6B00] hover:text-[#FF6B00] shadow-sm hover:shadow-lg hover:shadow-[#FF6B00]/10"
          >
            <span className="relative z-10 flex items-center gap-3">
              EXPLORE_MORE_ON_GITHUB
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
