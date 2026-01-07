import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Star, 
  Award, 
  Medal,
  Crown,
  ScrollText,
  Megaphone // <--- Added this missing import
} from 'lucide-react';

const achievementsData = [
  {
    role: "Vice President",
    organization: "Student Council",
    period: "2025 - 2026",
    icon: <Crown size={24} />,
    description: "Leading student initiatives, managing campus events, and bridging the gap between administration and the student body.",
    tags: ["Leadership", "Management"],
    color: "#fcca46" // Changed to match the "Active" theme or keep "white" if preferred
  },
  {
    role: "Open Source Mentor",
    organization: "GirlScript Summer of Code",
    period: "2025",
    icon: <Star size={24} />,
    description: "Selected as a Mentor to guide contributors in open-source development, conduct code reviews, and foster community growth.",
    tags: ["Mentorship", "Open Source"],
    color: "white"
  },
  {
    role: "Co-Founder",
    organization: "Raina News",
    period: "Present",
    icon: <Megaphone size={24} />,
    description: "Founded and scaled a digital media news channel on social media, amassing a community of over 120K+ followers.",
    tags: ["Media", "Growth", "120K+ Subs"],
    color: "#fcca46"
  }
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="achievements" className="relative py-24 overflow-hidden text-white">
      
      <div className="mx-auto max-w-8xl px-6 md:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-12 bg-[#fcca46]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-[#fcca46] font-bold">Milestones.log</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none"
          >
            Honors & <br />
            <span className="text-zinc-800 italic font-light">Recognitions.</span>
          </motion.h2>
        </div>

        {/* Bento Grid - Optimized for 3 Columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievementsData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-[2rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-2xl overflow-hidden flex flex-col justify-between min-h-[300px]"
            >
              {/* Hover Scanning Line */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fcca46]/10 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-scan pointer-events-none"
              />

              <div className="relative z-10">
                {/* Top Row: Icon and Period */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`p-4 rounded-2xl bg-zinc-900 border border-white/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(252,202,70,0.3)] ${item.color === "#fcca46" ? "text-[#fcca46]" : "text-white"}`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 py-1 px-3 rounded-full border border-white/5 bg-black/20 uppercase tracking-widest">
                    {item.period}
                  </span>
                </div>

                {/* Main Content */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-[#fcca46] transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
                    {item.organization}
                  </p>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8 border-l-2 border-zinc-800 pl-4">
                  {item.description}
                </p>

                {/* Tags Footer */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[9px] px-3 py-1.5 rounded-full border border-white/5 bg-black/40 backdrop-blur-md font-bold tracking-widest uppercase text-zinc-500 group-hover:text-zinc-300 group-hover:border-[#fcca46]/20 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
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
              <div className="h-2 w-2 rounded-full bg-[#fcca46] animate-pulse shadow-[0_0_10px_#fcca46]" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Legacy_Build: Active</span>
            </div>
            <div className="h-4 w-px bg-zinc-800 hidden md:block" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">Records_Synced</span>
          </div>
          
          <div className="flex items-center gap-4 group cursor-help">
             <span className="text-[10px] font-mono text-zinc-600 group-hover:text-[#fcca46] transition-colors italic">
               &gt; Leading with Impact
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

export default Achievements;