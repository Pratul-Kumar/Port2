import React from 'react';
import { motion } from 'framer-motion';
import { Star, Crown, Megaphone, Sparkles } from 'lucide-react';

const achievementsData = [
  {
    role: "Vice President",
    organization: "Student Council",
    period: "2025 - 2026",
    icon: <Crown size={24} strokeWidth={3} />,
    description: "Leading student initiatives and managing complex campus events while bridging the gap between administration and the student body.",
    tags: ["Leadership", "Management"],
  },
  {
    role: "Open Source Mentor",
    organization: "GSSOC 2025",
    period: "2025",
    icon: <Star size={24} strokeWidth={3} />,
    description: "Selected as an industry mentor to guide global contributors in open-source development and conduct high-level code reviews.",
    tags: ["Mentorship", "Open Source"],
  },
  {
    role: "Co-Founder",
    organization: "Raina News",
    period: "Present",
    icon: <Megaphone size={24} strokeWidth={3} />,
    description: "Founded and scaled a digital media news channel on social media, amassing a massive community of over 120K+ followers.",
    tags: ["Media", "Growth"],
  }
];

const AchievementCard = ({ item }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ x: -6, y: -6 }}
      className="group relative p-10 bg-white/40 backdrop-blur-md border-2 border-[#1A1A1A] flex flex-col min-h-[380px] shadow-[10px_10px_0px_0px_#1A1A1A] hover:shadow-[15px_15px_0px_0px_#EF9144] transition-all duration-300"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-12">
          <div className="p-4 bg-[#EF9144] border-2 border-[#1A1A1A] rounded-xl shadow-[4px_4px_0px_0px_#1A1A1A] text-[#1A1A1A]">
            {item.icon}
          </div>
          <span className="text-[10px] font-black text-[#1A1A1A]/40 uppercase tracking-widest bg-[#E8E6D9]/50 px-4 py-2 border border-[#1A1A1A]/10 rounded-full">
            {item.period}
          </span>
        </div>

        <div className="mb-6">
          <h3 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tighter leading-none group-hover:text-[#EF9144] transition-colors">
            {item.role}
          </h3>
          <p className="text-[10px] font-black text-[#EF9144] uppercase tracking-[0.2em] mt-3 font-mono">
            {item.organization}
          </p>
        </div>

        <p className="text-[#1A1A1A]/70 text-sm leading-relaxed mb-10 flex-grow font-medium">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-6 border-t-2 border-[#1A1A1A]/5">
          {item.tags.map((tag, i) => (
            <span key={i} className="text-[9px] px-3 py-1 bg-[#E8E6D9]/80 border border-[#1A1A1A] font-black uppercase tracking-widest text-[#1A1A1A]">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <Sparkles className="absolute bottom-6 right-6 text-[#EF9144] opacity-5 group-hover:opacity-20 transition-opacity" size={40} />
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 md:py-32 bg-[#E8E6D9] overflow-hidden">
      
      {/* 1. LAYERED BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute bottom-[-10%] left-[-5%] w-[70vw] h-[70vw] opacity-50 blur-[120px] rounded-full"
          style={{ background: 'radial-gradient(circle, #EF9144 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[5%] right-[-10%] w-[60vw] h-[60vw] opacity-30 blur-[100px] rounded-full"
          style={{ background: 'radial-gradient(circle, #D4CDB3 0%, transparent 70%)' }}
        />
      </div>

      {/* 2. TEXTURE & WATERMARK OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        {/* Editorial Text Watermarks */}
        <div className="absolute top-[10%] left-[3%] opacity-[0.08] text-[22vw] font-black text-[#1A1A1A] leading-none uppercase tracking-tighter -rotate-6">
          Honors
        </div>
       

        {/* --- FOUR-POINT LINE STARS WATERMARKS --- */}
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

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[#EF9144]">
          <svg width="500" height="500" viewBox="0 0 100 100" fill="none">
             <path d="M50 0L52 48L100 50L52 52L50 100L48 52L0 50L48 48L50 0Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-8xl lg:px-35 px-6 relative z-10">
        
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-[#EF9144]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]/60">Achievement_Ref_2026</span>
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-[12vh] font-black text-[#1A1A1A] uppercase tracking-tighter leading-none">
            Honors & <br /> <span className="text-[#EF9144] font-serif italic font-light lowercase">Recognitions.</span>
          </h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {achievementsData.map((item, idx) => (
            <AchievementCard key={idx} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;