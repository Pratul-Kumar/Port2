import React from 'react';
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform 
} from 'framer-motion';
import { 
  Code2, BrainCircuit, Globe, Cloud, 
  Figma, Users, GitBranch, Terminal, Cpu 
} from 'lucide-react';

// Skills data (Unchanged)
const skillsData = [
  {
    category: "Languages",
    icon: <Code2 size={22} />,
    skills: ["Python", "SQL", "JavaScript"],
    color: "#fcca46",
    level: "95%"
  },
  {
    category: "AI & Machine Learning",
    icon: <BrainCircuit size={22} />,
    skills: ["PyTorch", "Scikit-Learn", "XGBoost"],
    color: "#fcca46",
    level: "90%"
  },
  {
    category: "Cloud Architecture",
    icon: <Cloud size={22} />,
    skills: ["Azure", "AWS", "ServiceNow"],
    color: "white",
    level: "80%"
  },
  {
    category: "UI/UX Design",
    icon: <Figma size={22} />,
    skills: ["Figma", "Prototyping", "Wireframe"],
    color: "#fcca46",
    level: "90%"
  },
  {
    category: "Development Env",
    icon: <Terminal size={22} />,
    skills: ["VS Code", "Jupyter Lab", "Vim"],
    color: "white",
    level: "90%"
  },
  {
    category: "Version Control",
    icon: <GitBranch size={22} />,
    skills: ["Git", "GitHub Actions", "CI/CD"],
    color: "#fcca46",
    level: "95%"
  },
  {
    category: "Leadership",
    icon: <Users size={22} />,
    skills: ["Mentorship", "Agile", "Scrum"],
    color: "white",
    level: "90%"
  },
  {
    category: "Backend Systems",
    icon: <Globe size={22} />,
    skills: ["Flask", "FastAPI", "REST"],
    color: "white",
    level: "85%"
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  }
};

const SkillCard = ({ item }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 40 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 40 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) => 
      `radial-gradient(350px circle at ${x}px ${y}px, rgba(252, 202, 70, 0.08), transparent 80%)`
  );

  const borderHighlight = useTransform(
    [smoothX, smoothY],
    ([x, y]) => 
      `radial-gradient(200px circle at ${x}px ${y}px, rgba(252, 202, 70, 0.3), transparent 80%)`
  );

  const isGold = item.color === "#fcca46";

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col h-full"
    >
        {/* Spotlight Border Container */}
        <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 overflow-hidden">
            <motion.div 
                className="absolute inset-0 opacity-50"
                style={{ background: borderHighlight }}
            />
        </div>

      <div className="relative h-full p-6 md:p-8 rounded-3xl border border-white/5 bg-zinc-900/40 backdrop-blur-xl overflow-hidden flex flex-col transition-all duration-500 group-hover:bg-zinc-900/60 group-hover:border-white/10 group-hover:shadow-2xl group-hover:shadow-black/50">
        
        {/* Internal Glow */}
        <motion.div 
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl z-0" 
          style={{ background }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className={`
                p-3.5 rounded-2xl border transition-all duration-300 shadow-lg
                ${isGold 
                    ? 'bg-[#fcca46]/10 border-[#fcca46]/20 text-[#fcca46] shadow-[#fcca46]/5 group-hover:bg-[#fcca46] group-hover:text-black group-hover:shadow-[#fcca46]/20' 
                    : 'bg-zinc-800/50 border-white/10 text-zinc-300 group-hover:bg-white group-hover:text-black'}
            `}>
              {item.icon}
            </div>
            <span className={`text-sm font-mono font-bold transition-colors ${isGold ? 'text-[#fcca46]' : 'text-zinc-500 group-hover:text-white'}`}>
              {item.level}
            </span>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-zinc-100 mb-3 tracking-tight group-hover:text-white transition-colors">
            {item.category}
          </h3>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {item.skills.map((skill, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 text-[11px] font-medium tracking-wide rounded-md bg-white/5 border border-white/5 text-zinc-400 group-hover:bg-white/10 group-hover:text-zinc-200 group-hover:border-white/10 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-auto pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
            <div className="flex justify-between text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-3 group-hover:text-zinc-400">
              <span>Proficiency</span>
            </div>
            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: item.level }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className={`h-full rounded-full relative ${isGold ? 'bg-[#fcca46]' : 'bg-zinc-300'}`}
              >
                  {/* Glowing end of bar */}
                  <div className={`absolute right-0 top-0 bottom-0 w-2 blur-[4px] ${isGold ? 'bg-[#fcca46]' : 'bg-white'}`} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="relative py-24 md:py-32 text-white overflow-hidden selection:bg-[#fcca46] selection:text-black">
      
      {/* REMOVED: Background Div and bg-zinc-950 class. 
        This section is now transparent. 
      */}

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Header Section */}
        <div className="mb-20 md:mb-32 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 bg-[#fcca46]/10 rounded border border-[#fcca46]/20">
                <Cpu className="text-[#fcca46]" size={16} />
            </div>
            <span className="text-[#fcca46] font-mono uppercase tracking-[0.2em] text-xs font-bold">
              Technical Arsenal
            </span>
          </motion.div>
          
         <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.9]"
          >
            <span className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">Core</span> <br />
            <span className="text-zinc-800 italic font-light lowercase tracking-tight relative">
                Capabilities.
                <svg className="absolute -bottom-4 right-0 w-24 h-6 text-[#fcca46]/40 hidden md:block" viewBox="0 0 100 20" fill="currentColor">
                    <path d="M0 10 Q50 20 100 10 T200 10" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            </span>
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {skillsData.map((item, index) => (
            <SkillCard key={index} item={item} />
          ))}
        </motion.div>

        {/* Status Footer */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              SYSTEM OPERATIONAL
            </span>
            <span className="hidden md:block text-zinc-800">|</span>
            <span>LAST UPDATED: JAN 2026</span>
          </div>

          <div className="flex items-center gap-4 group cursor-default">
              <span className="text-[10px] font-mono text-zinc-600 group-hover:text-[#fcca46] transition-colors italic uppercase tracking-wider">
               &gt; Building Intelligence
              </span>
              <div className="h-0.5 w-24 bg-zinc-800 overflow-hidden relative">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }} 
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fcca46] to-transparent w-1/2"
                />
              </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;