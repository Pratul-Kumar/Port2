import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Code2, 
  BrainCircuit, 
  Globe, 
  Cloud, 
  Figma, 
  Users, 
  GitBranch, 
  Terminal 
} from 'lucide-react';

const skillsData = [
  {
    category: "Languages",
    icon: <Code2 size={20} />,
    skills: ["Python", "SQL"],
    color: "#fcca46",
    level: "95%"
  },
  {
    category: "AI & ML",
    icon: <BrainCircuit size={20} />,
    skills: ["PyTorch", "Scikit-Learn", "XGBoost"],
    color: "white",
    level: "90%"
  },
  {
    category: "Cloud & Enterprise",
    icon: <Cloud size={20} />,
    skills: ["Azure", "ServiceNow"],
    color: "#fcca46",
    level: "80%"
  },
  {
    category: "UI/UX",
    icon: <Figma size={20} />,
    skills: ["Figma", "Prototyping"],
    color: "white",
    level: "90%"
  },
  {
    category: "Workflow",
    icon: <Terminal size={20} />,
    skills: ["VS Code", "Jupyter"],
    color: "#fcca46",
    level: "100%"
  },
  {
    category: "Version Control",
    icon: <GitBranch size={20} />,
    skills: ["Git", "GitHub"],
    color: "white",
    level: "95%"
  },
  {
    category: "Soft Skills",
    icon: <Users size={20} />,
    skills: ["Leadership", "Mentorship"],
    color: "white",
    level: "90%"
  },
  {
    category: "Backend",
    icon: <Globe size={20} />,
    skills: ["Flask", "REST APIs"],
    color: "white",
    level: "85%"
  }
];

const SkillCard = ({ item }) => {
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
    ([x, y]) => `radial-gradient(250px circle at ${x}px ${y}px, rgba(252, 202, 70, 0.1), transparent 80%)`
  );

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 bg-zinc-900/10 backdrop-blur-2xl overflow-hidden flex flex-col transition-all duration-500 hover:border-[#fcca46]/20"
    >
      {/* 1. DYNAMIC GLOW */}
      <motion.div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background }} />

      {/* 2. SCANNING LINE */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fcca46]/5 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-scan pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="p-3 rounded-xl bg-black border border-white/10 text-[#fcca46] group-hover:shadow-[0_0_15px_rgba(252,202,70,0.2)] transition-all duration-500">
            {item.icon}
          </div>
          <span className="text-[10px] font-mono text-zinc-600 group-hover:text-[#fcca46] transition-colors uppercase tracking-widest">
            {item.level}
          </span>
        </div>

        <h3 className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-5 group-hover:text-white transition-colors">
          {item.category}
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {item.skills.map((skill, sIdx) => (
            <motion.span 
              key={sIdx} 
              whileHover={{ scale: 1.05 }}
              className={`text-[8px] md:text-[9px] px-3 py-1.5 rounded-lg border border-white/5 bg-black/40 backdrop-blur-md font-bold tracking-widest uppercase transition-all group-hover:border-[#fcca46]/20 ${
                item.color === "#fcca46" ? "text-[#fcca46]" : "text-zinc-400"
              }`}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* 3. PROGRESS TRACK */}
        <div className="h-[1px] w-full bg-zinc-800/50 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: item.level }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="h-full bg-gradient-to-r from-[#fcca46] to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden text-white bg-transparent">
      
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-10 md:w-16 bg-[#fcca46]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#fcca46] font-bold">Stack.v2</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]"
          >
            Core <br />
            <span className="text-zinc-800 italic font-light lowercase">Capabilities.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {skillsData.map((item, idx) => (
            <SkillCard key={idx} item={item} />
          ))}
        </div>

        {/* Status Bar */}
        <div className="mt-16 md:mt-24 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#fcca46] animate-pulse shadow-[0_0_10px_rgba(252,202,70,0.5)]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Engine_Loaded</span>
            </div>
            <div className="h-4 w-px bg-zinc-800 hidden md:block" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 italic">v6.0.4.stable</span>
          </div>
          
          <div className="flex items-center gap-4 group">
             <span className="text-[10px] font-mono text-zinc-600 group-hover:text-[#fcca46] transition-colors italic uppercase tracking-wider">
               &gt; Building Intelligence
             </span>
             <div className="h-1 w-12 bg-zinc-900 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ x: [-50, 50] }} 
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                  className="h-full w-full bg-[#fcca46]"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;