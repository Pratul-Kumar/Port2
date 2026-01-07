import React from 'react';
import { motion } from 'framer-motion';
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
    category: "AI & Machine Learning",
    icon: <BrainCircuit size={20} />,
    skills: ["PyTorch", "Pandas", "Scikit-Learn", "XGBoost", "Matplotlib"],
    color: "white",
    level: "90%"
  },
  {
    category: "Web & Backend",
    icon: <Globe size={20} />,
    skills: ["Flask", "REST APIs"],
    color: "white",
    level: "85%"
  },
  {
    category: "Cloud & Enterprise",
    icon: <Cloud size={20} />,
    skills: ["Azure (AZ-900)", "ServiceNow (CSA)"],
    color: "#fcca46",
    level: "80%"
  },
  {
    category: "UI/UX & Design",
    icon: <Figma size={20} />,
    skills: ["Figma", "Wireframing", "Prototyping"],
    color: "white",
    level: "90%"
  },
  {
    category: "Version Control",
    icon: <GitBranch size={20} />,
    skills: ["Git", "GitHub"],
    color: "white",
    level: "95%"
  },
  {
    category: "Workflow Tools",
    icon: <Terminal size={20} />,
    skills: ["VS Code", "Jupyter Notebook"],
    color: "#fcca46",
    level: "100%"
  },
  {
    category: "Soft Skills",
    icon: <Users size={20} />,
    skills: ["Leadership", "Mentorship", "Strategy"],
    color: "white",
    level: "90%"
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="skills" className="relative min-h-screen py-24 overflow-hidden  text-white">
     
      <div className="mx-auto max-w-8xl px-20 relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-12 bg-[#fcca46]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-[#fcca46] font-bold">Capabilities.v6</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            Technical <br />
            <span className="text-zinc-800 italic font-light">Architectures.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skillsData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-2xl overflow-hidden"
            >
              {/* Hover Scanning Line */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fcca46]/10 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-scan pointer-events-none"
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 rounded-2xl bg-zinc-900 border border-white/10 text-[#fcca46] group-hover:shadow-[0_0_20px_rgba(252,202,70,0.3)] transition-all">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600 group-hover:text-[#fcca46] transition-colors">
                    {item.level}
                  </span>
                </div>

                <h3 className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 mb-6 group-hover:text-white transition-colors">
                  {item.category}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className={`text-[9px] px-3 py-1.5 rounded-full border border-white/5 bg-black/40 backdrop-blur-md font-bold tracking-widest uppercase transition-all group-hover:border-[#fcca46]/30 ${
                        item.color === "#fcca46" ? "text-[#fcca46]" : "text-zinc-400"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Subtle progress bar */}
                <div className="h-[1px] w-full bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: item.level }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-[#fcca46] to-transparent"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Status Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Core_Engine: Active</span>
            </div>
            <div className="h-4 w-px bg-zinc-800 hidden md:block" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">Bento_System.v2</span>
          </div>
          
          <div className="flex items-center gap-4 group cursor-help">
             <span className="text-[10px] font-mono text-zinc-600 group-hover:text-[#fcca46] transition-colors italic">
               &gt; Designing with Logic and Emotion
             </span>
             <div className="h-1 w-12 bg-zinc-900 overflow-hidden">
                <motion.div 
                  animate={{ x: [-50, 50] }} 
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="h-full w-full bg-[#fcca46]"
                />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;