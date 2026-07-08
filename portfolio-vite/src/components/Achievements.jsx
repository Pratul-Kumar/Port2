import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Star, Crown, Megaphone } from "lucide-react";

/* =========================
   DATA
========================= */

const achievementsData = [
  {
    role: "Vice President",
    organization: "Student Council",
    period: "2025 - 2026",
    icon: <Crown size={20} className="text-[#0A0A0A]" />,
    description:
      "Leading student initiatives and managing large-scale campus operations while bridging administration and students.",
    tags: ["Leadership", "Management"]
  },
  {
    role: "Open Source Mentor",
    organization: "GSSOC 2025",
    period: "2025",
    icon: <Star size={20} className="text-[#0A0A0A]" />,
    description:
      "Mentoring global contributors and conducting high-level engineering reviews.",
    tags: ["Open Source", "Mentorship"]
  },
  {
    role: "Help in growing",
    organization: "Raina News",
    period: "2020-2026",
    icon: <Megaphone size={20} className="text-[#0A0A0A]" />,
    description:
      "Scaled a digital news platform to 120K+ followers across social platforms.",
    tags: ["Media", "Community"]
  }
];

/* =========================
   TIMELINE ITEM
========================= */

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex items-center w-full group mb-16 lg:mb-24 ${isEven ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'}`}
    >
      {/* Central Line & Icon (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 h-full flex-col items-center">
        {/* Top line extending up */}
        <div className={`w-[1px] bg-dashed border-l border-gray-300 ${index === 0 ? 'h-0' : 'h-1/2 -top-1/2 absolute'}`} />
        
        {/* Zig Zag Connector Line (Invisible anchor for the connection) */}
        {index !== 0 && (
          <svg className="absolute top-0 -translate-y-full pointer-events-none" width="100%" height="100%" style={{ overflow: 'visible', zIndex: -1 }}>
             <path 
                d={`M 0 0 Q ${isEven ? '50' : '-50'} 50 0 100`} 
                fill="none" 
                stroke="#FF6B00" 
                strokeWidth="1" 
                strokeDasharray="4 4" 
                opacity="0.3"
             />
          </svg>
        )}

        {/* Circle Node */}
        <div className="relative z-10 w-16 h-16 bg-white/60 backdrop-blur-md border border-gray-200 rounded-full flex items-center justify-center shadow-sm group-hover:border-[#FF6B00] group-hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all duration-300">
          <div className="absolute inset-0 bg-dotted opacity-[0.2] rounded-full pointer-events-none" />
          <div className="text-gray-400 group-hover:text-[#FF6B00] transition-colors">
            {item.icon}
          </div>
        </div>
        
        {/* Bottom line extending down */}
        <div className={`w-[1px] bg-dashed border-l border-gray-300 ${index === achievementsData.length - 1 ? 'h-0' : 'h-full top-16 absolute'}`} />
      </div>

      {/* Content Space (Zig Zag Alternating) */}
      <div className={`w-full md:w-[45%] flex ${isEven ? 'md:justify-end text-left md:text-right' : 'md:justify-start text-left'}`}>
        <div className="bg-white/60 backdrop-blur-md border border-gray-100 p-8 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:shadow-black/[0.03] transition-all duration-300 w-full relative overflow-hidden group-hover:-translate-y-1">
           {/* Decorative hover gradient */}
           <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-32 h-32 bg-[#FF6B00]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
           
           <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00] mb-4 block">
             {item.period}
           </span>
           
           <h3 className="text-2xl font-black font-heading tracking-tight text-[#0A0A0A] mb-2 group-hover:text-[#FF6B00] transition-colors duration-300">
             {item.role}
           </h3>
           
           <p className="font-mono text-xs font-medium text-gray-500 uppercase tracking-widest mb-6 border-b border-dashed border-gray-200 pb-6 inline-block">
             @ {item.organization}
           </p>

           <p className="text-sm text-[#666666] leading-relaxed font-body mb-8">
             {item.description}
           </p>

           <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
             {item.tags.map((tag, i) => (
               <span key={i} className="px-3 py-1 text-[10px] font-mono font-medium rounded-full border border-gray-200 bg-gray-50 text-gray-500 transition-colors">
                 {tag}
               </span>
             ))}
           </div>
        </div>
      </div>

      {/* Mobile Icon (Visible only on small screens) */}
      <div className="md:hidden flex items-center gap-4 w-full mt-6 px-4">
        <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shrink-0">
          {item.icon}
        </div>
        <div className="h-[1px] bg-dashed border-t border-gray-300 flex-grow" />
      </div>

      {/* Empty space for alternating flex layout (the other 45%) */}
      <div className="hidden md:block w-[45%]" />
    </motion.div>
  );
};

/* =========================
   SECTION
========================= */

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-16 md:py-24 overflow-hidden border-t border-gray-200"
    >
      {/* Shared global background applied */}

      <div className="relative max-w-7xl mx-auto px-6 z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#FF6B00] font-mono text-sm font-medium">05</span>
            <div className="h-[1px] w-12 bg-gray-300" />
            <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">
              My Achievements
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[1.1] flex flex-col items-center">
            <span className="text-[#0A0A0A]">Honors &</span>
            <span style={{ fontFamily: 'var(--font-dotted)' }} className="text-[#666666] tracking-[0.1em] mt-2">Recognition.</span>
          </h2>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative w-full flex flex-col items-center">
          {achievementsData.map((item, idx) => (
            <TimelineItem key={idx} item={item} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
