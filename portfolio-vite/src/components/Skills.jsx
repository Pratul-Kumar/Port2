import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, BrainCircuit, Globe, Cloud, Figma, Users, GitBranch, Terminal, RefreshCw } from 'lucide-react';

const skillsData = [
  { id: 'lang', category: "Languages", icon: <Code2 size={16} />, skills: ["Python", "SQL"], color: "#10B981" },
  { id: 'ai', category: "AI & ML", icon: <BrainCircuit size={16} />, skills: ["PyTorch", "Scikit", "XGBoost"], color: "#FF6B00" },
  { id: 'cloud', category: "Cloud Arch", icon: <Cloud size={16} />, skills: ["Azure"], color: "#3B82F6" },
  { id: 'ui', category: "UI/UX", icon: <Figma size={16} />, skills: ["Figma", "Framer", "Design"], color: "#EC4899" },
  { id: 'dev', category: "Dev Env", icon: <Terminal size={16} />, skills: ["VS Code", "Jupyter"], color: "#8B5CF6" },
  { id: 'version', category: "Version Ctrl", icon: <GitBranch size={16} />, skills: ["Git", "GitHub Actions"], color: "#EF4444" },
  { id: 'lead', category: "Leadership", icon: <Users size={16} />, skills: ["Mentorship", "Agile", "Strategy"], color: "#F59E0B" },
];

const OrbitalGraph = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  
  // Mathematical placement
  const radius = 190; // Distance of categories from center
  const subRadius = radius + 110; // Distance of sub-skills from center

  return (
    <div className="relative w-full min-h-[500px] md:min-h-[750px] flex items-center justify-center border border-gray-200/50 rounded-3xl shadow-sm my-6 md:my-10 z-20 overflow-hidden hidden md:flex backdrop-blur-[2px]">
       {/* Background structural rings now use global grid */}
       
       {/* Scalable inner container centered */}
       <div className="relative w-[600px] h-[600px] flex items-center justify-center scale-[0.55] sm:scale-[0.75] md:scale-100 origin-center flex-shrink-0">
         <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-gray-200 animate-[spin_60s_linear_infinite]" />
         <div className="absolute w-[600px] h-[600px] rounded-full border border-gray-100 opacity-50" />

       {/* Connecting Lines Canvas */}
       <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
             <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E5E7EB" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="#FF6B00" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#E5E7EB" stopOpacity="0.2"/>
             </linearGradient>
          </defs>
          <g className="origin-center translate-x-1/2 translate-y-1/2">
             {skillsData.map((item, i) => {
               const angle = (i * (360 / skillsData.length)) * (Math.PI / 180);
               const x = Math.cos(angle) * radius;
               const y = Math.sin(angle) * radius;
               const isActive = activeCategory === item.id;
               
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

       {/* Sub-Skills Perimeter when Active */}
       <AnimatePresence>
         {activeCategory && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {skillsData.find(d => d.id === activeCategory).skills.map((skill, si, arr) => {
                // Determine placement radius outside the main category orbit
                const catIndex = skillsData.findIndex(d => d.id === activeCategory);
                const catAngle = (catIndex * (360 / skillsData.length)) * (Math.PI / 180);
                
                // Spread the 3 sub-skills around the category node
                const spreadAngle = catAngle + ((si - 1) * 0.45); // offset angle slightly for each array element
                
                const sx = `calc(50% + ${Math.cos(spreadAngle) * subRadius}px)`;
                const sy = `calc(50% + ${Math.sin(spreadAngle) * subRadius}px)`;

                return (
                  <motion.div
                    key={`sub-${si}`}
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0.8 }}
                    animate={{ opacity: 1, left: sx, top: sy, scale: 1 }}
                    transition={{ delay: si * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                  >
                     <div className="bg-white border text-gray-700 px-3 py-1.5 rounded-full shadow-lg text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap" style={{ borderColor: skillsData.find(d => d.id === activeCategory).color + '60' }}>
                       {skill}
                     </div>
                  </motion.div>
                );
              })}
            </motion.div>
         )}
       </AnimatePresence>

       {/* Category Nodes */}
       {skillsData.map((item, i) => {
          const angle = (i * (360 / skillsData.length)) * (Math.PI / 180);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const isActive = activeCategory === item.id;
          
          return (
             <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.5, type: 'spring' }}
                onMouseEnter={() => setActiveCategory(item.id)}
                onMouseLeave={() => setActiveCategory(null)}
                className="absolute w-14 h-14 -ml-7 -mt-7 rounded-full flex flex-col items-center justify-center bg-white border cursor-pointer hover:z-20 transition-all duration-300"
                style={{ 
                   left: `calc(50% + ${x}px)`, 
                   top: `calc(50% + ${y}px)`,
                   borderColor: isActive ? item.color : '#E5E7EB',
                   boxShadow: isActive ? `0 0 20px ${item.color}30` : '0 2px 10px rgba(0,0,0,0.02)'
                }}
             >
                <div style={{ color: isActive ? item.color : '#9CA3AF' }} className="transition-colors duration-300">
                  {item.icon}
                </div>
                
                {/* Always visible label on outer edge */}
                <div className={`absolute ${x > 0 ? 'left-[4.5rem] text-left' : 'right-[4.5rem] text-right'} whitespace-nowrap text-[10px] font-mono uppercase tracking-widest font-bold transition-colors duration-300 pointer-events-none`} style={{ color: isActive ? item.color : '#6B7280' }}>
                  {item.category}
                </div>
             </motion.div>
          );
       })}

       {/* Center Core Node */}
       <motion.div 
         initial={{ scale: 0 }}
         whileInView={{ scale: 1 }}
         transition={{ type: "spring", stiffness: 200, damping: 20 }}
         className="relative z-10 w-24 h-24 rounded-full bg-[#0A0A0A] border-[4px] border-white shadow-2xl flex items-center justify-center group"
       >
          <div className="absolute inset-0 rounded-full border border-[#FF6B00]/30 animate-ping opacity-50" />
           <div className="flex flex-col items-center relative z-10 text-center">
              <BrainCircuit size={24} className="text-[#FF6B00] mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white">System<br/>Core</span>
           </div>
        </motion.div>
       </div>
    </div>
  );
};

// Mobile Fallback Grid
const MobileGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mt-8">
    {skillsData.map((item, index) => (
      <div key={index} className="flex flex-col bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-[#FF6B00]">{item.icon}</div>
          <h3 className="text-sm font-bold font-heading text-[#0A0A0A]">{item.category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill, i) => (
            <span key={i} className="px-2 py-1 text-[9px] font-mono uppercase tracking-widest rounded-md bg-gray-50 border border-gray-100 text-gray-500">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative py-16 md:py-24 overflow-hidden border-t border-dashed border-gray-200">
      
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
              <span className="text-[#FF6B00] font-mono text-sm font-medium">02</span>
              <div className="h-[1px] w-12 bg-gray-300" />
              <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                My Expertises
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[1.05] text-[#0A0A0A]">
              My <br className="hidden md:block"/> 
              <span style={{ fontFamily: 'var(--font-dotted)' }} className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] to-[#FF9E5E] tracking-[0.05em] drop-shadow-sm">Expertises.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end text-right gap-2">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm text-xs font-mono font-medium text-gray-500">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
               Interactive Map
             </div>
             <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest max-w-[200px] mt-2 hidden md:block">
               Hover over core nodes to reveal specialized skill clusters.
             </p>
          </div>
        </motion.div>

        {/* The Advanced Orbital Graph (Desktop) */}
        <OrbitalGraph />

        {/* The Simplified Grid (Mobile) */}
        <MobileGrid />

      </div>
    </section>
  );
};

export default Skills;