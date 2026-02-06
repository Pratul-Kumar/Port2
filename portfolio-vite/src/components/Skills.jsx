import React from 'react';
import { 
  motion, 
  useMotionValue, 
  useTransform, 
  animate 
} from 'framer-motion';
import { 
  Code2, BrainCircuit, Globe, Cloud, 
  Figma, Users, GitBranch, Terminal, Cpu 
} from 'lucide-react';

// Skills data (Unchanged)
const skillsData = [
  { category: "Languages", icon: <Code2 size={22} />, skills: ["Python", "SQL", "JavaScript"], color: "#EF9144", level: "95%" },
  { category: "AI & Machine Learning", icon: <BrainCircuit size={22} />, skills: ["PyTorch", "Scikit-Learn", "XGBoost"], color: "#EF9144", level: "90%" },
  { category: "Cloud Architecture", icon: <Cloud size={22} />, skills: ["Azure", "AWS", "ServiceNow"], color: "white", level: "80%" },
  { category: "UI/UX Design", icon: <Figma size={22} />, skills: ["Figma", "Prototyping", "Wireframe"], color: "#EF9144", level: "90%" },
  { category: "Development Env", icon: <Terminal size={22} />, skills: ["VS Code", "Jupyter Lab", "Vim"], color: "white", level: "90%" },
  { category: "Version Control", icon: <GitBranch size={22} />, skills: ["Git", "GitHub Actions", "CI/CD"], color: "#EF9144", level: "95%" },
  { category: "Leadership", icon: <Users size={22} />, skills: ["Mentorship", "Agile", "Scrum"], color: "white", level: "90%" },
  { category: "Backend Systems", icon: <Globe size={22} />, skills: ["Flask", "FastAPI", "REST"], color: "white", level: "85%" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const SkillCard = ({ item }) => {
  const isGold = item.color === "#EF9144" || item.color === "#fcca46";
  
  // Animation logic for the percentage text
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + "%");

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col h-full"
      onViewportEnter={() => {
        animate(count, parseInt(item.level), { duration: 1.5, ease: "circOut", delay: 0.2 });
      }}
    >
      <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
      <div className="relative h-full p-8 rounded-2xl border-2 border-[#1A1A1A] bg-white/50 z-10 flex flex-col transition-colors group-hover:bg-[#fcfcfc]">
        <div className="flex items-center justify-between mb-8">
          <div className={`p-3 rounded-xl border-2 transition-all duration-300 ${isGold ? 'bg-[#EF9144] border-[#1A1A1A] text-white shadow-[3px_3px_0px_0px_#1A1A1A]' : 'bg-[#E8E6D9] border-[#1A1A1A] text-[#1A1A1A]'}`}>
            {item.icon}
          </div>
          {/* Animated Percentage Text */}
          <motion.span className={`text-xs font-mono font-black tracking-widest ${isGold ? 'text-[#EF9144]' : 'text-zinc-400'}`}>
            {rounded}
          </motion.span>
        </div>
        <h3 className="text-xl font-black text-[#1A1A1A] mb-4 uppercase tracking-tighter leading-none">
          {item.category}
        </h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {item.skills.map((skill, index) => (
            <span key={index} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border border-[#1A1A1A]/10 bg-[#E8E6D9]/30 text-zinc-600 group-hover:border-[#1A1A1A]/30 transition-all">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-6 border-t-2 border-[#E8E6D9]">
          <div className="flex justify-between text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-black mb-3">
            <span>Engineering Proficiency</span>
          </div>
          <div className="h-4 bg-[#E8E6D9] border border-[#1A1A1A] p-[2px] overflow-hidden">
            <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: item.level }} 
                viewport={{ once: true }} 
                transition={{ duration: 1.5, ease: "circOut" }} 
                className={`h-full ${isGold ? 'bg-[#EF9144]' : 'bg-[#1A1A1A]'}`} 
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 bg-[#E8E6D9] overflow-hidden">
      
      {/* 1. LAYERED BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] opacity-40 blur-[120px] rounded-full"
          style={{ background: 'radial-gradient(circle, #EF9144 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vw] opacity-30 blur-[100px] rounded-full"
          style={{ background: 'radial-gradient(circle, #D4CDB3 0%, transparent 70%)' }}
        />
      </div>

      {/* 2. TEXTURE & WATERMARK OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        <div className="absolute top-[15%] left-[-5%] opacity-[0.06] text-[25vw] font-black leading-none uppercase tracking-tighter -rotate-6 text-[#1A1A1A]">
          Stacks
        </div>
        <div className="absolute bottom-[-5%] right-[-5%] opacity-[0.06] text-[18vw] font-black leading-none uppercase tracking-tighter rotate-12 text-[#1A1A1A]">
          Logic
        </div>

        <div className="absolute top-[20%] right-[15%] opacity-[0.06] text-[#EF9144] rotate-[15deg]">
          <svg width="280" height="280" viewBox="0 0 100 100" fill="none">
             <path d="M50 0L52 48L100 50L52 52L50 100L48 52L0 50L48 48L50 0Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-[15%] left-[10%] opacity-[0.04] text-[#EF9144] -rotate-12">
          <svg width="350" height="350" viewBox="0 0 100 100" fill="none">
             <path d="M50 0L52 48L100 50L52 52L50 100L48 52L0 50L48 48L50 0Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-8xl mx-auto lg:px-35 px-6 z-10">
        <div className="mb-24 lg:mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-[#EF9144]" />
            <span className="text-[#1A1A1A] font-black uppercase tracking-[0.4em] text-[10px]">Technical Inventory_2026</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-[#1A1A1A]">
            Core <br /> <span className="text-[#EF9144] italic font-serif font-light lowercase">Capabilities.</span>
          </motion.h2>
        </div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-32">
          {skillsData.map((item, index) => (
            <SkillCard key={index} item={item} />
          ))}
        </motion.div>

        <div className="border-t-2 border-[#1A1A1A]/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <div className="flex items-center gap-3 px-4 py-2 bg-white border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] text-[#1A1A1A]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              LETS CONNECT
            </div>
            <span>ENGINEERING</span>
          </div>
          <div className="flex items-center gap-4">
              <span className="text-[10px] font-black text-[#1A1A1A] uppercase tracking-[0.3em]">Building Intelligence</span>
              <div className="h-1 w-32 bg-[#1A1A1A]/10 relative overflow-hidden">
                <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="absolute inset-0 bg-[#EF9144] w-1/3" />
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;