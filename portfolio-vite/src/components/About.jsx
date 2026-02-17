import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout, Globe, Sparkles, ArrowUpRight } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  const containerRef = useRef(null);

  // Subtle Parallax for the Background Watermark
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yWatermark = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen flex items-center py-24 md:py-32 overflow-hidden bg-[#E8E6D9] text-[#1A1A1A]">
      
      {/* 1. LAYERED BACKGROUND GRADIENTS (Matching Hero Section) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ambient tan glow from the right middle */}
        <div 
          className="absolute top-[10%] right-[-5%] w-[70vw] h-[70vw] opacity-40 blur-[120px] rounded-full"
          style={{ background: 'radial-gradient(circle, #D4CDB3 0%, transparent 70%)' }}
        />
        {/* Soft orange warmth from the bottom-left */}
        <div 
          className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] opacity-30 blur-[100px] rounded-full"
          style={{ background: 'radial-gradient(circle, #F1A058 0%, transparent 70%)' }}
        />
      </div>

      {/* 2. TEXTURE & WATERMARK OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Paper Grain Texture Overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        {/* Large Editorial Watermark */}
        <motion.div 
          style={{ y: yWatermark }}
          className="absolute top-[30%] left-[20%] opacity-[0.06] text-[15rem] lg:text-[20rem] font-black text-[#1A1A1A] leading-none uppercase tracking-tighter rotate-[20deg] hidden md:block"
        >
          Architect
        </motion.div>

        {/* Decorative Background Star Watermark */}
        <div className="absolute bottom-[10%] left-[5%] opacity-[0.02] -rotate-12">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0L61 35H98L68 57L79 91L50 70L21 91L32 57L2 35H39L50 0Z" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-6 mb-20 lg:mb-28">
          <span className="text-[#EF9144] font-black text-2xl font-serif italic">01.</span>
          <div className="h-[2px] w-16 bg-[#EF9144]" />
          <span className="text-[#1A1A1A]/60 font-bold text-xs uppercase tracking-[0.4em]">
            About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* --- LEFT COLUMN: EDITORIAL IMAGE FRAME --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* The Large Background "A" Accent */}
            <span className="absolute -top-20 -left-10 text-[20rem] font-serif italic opacity-[0.05] text-[#1A1A1A] leading-none pointer-events-none select-none">
              A
            </span>

            <div className="relative group">
              {/* Sharp Brutalist Frame with Sunset Shadow */}
              <div className="relative z-10 w-full aspect-[4/5] overflow-hidden border-2 border-[#1A1A1A] bg-[#D9D7CA] shadow-[20px_20px_0px_0px_#EF9144] transition-shadow duration-500 group-hover:shadow-[25px_25px_0px_0px_#1A1A1A]">
                <img 
                  src="./Profile.jpeg" 
                  alt="Pratul Kumar" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                />
                
                {/* Editorial Label Overlay */}
                <div className="absolute top-6 right-6 bg-[#1A1A1A] text-[#E8E6D9] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest rotate-12 group-hover:rotate-0 transition-transform">
                  Verified_2026
                </div>
              </div>

              {/* Pulsing Accent Star */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 text-[#EF9144] opacity-20 hidden lg:block animate-pulse">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0L61 35H98L68 57L79 91L50 70L21 91L32 57L2 35H39L50 0Z" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: CONTENT --- */}
          <div className="lg:col-span-7 space-y-10">
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]"
            >
              Data Science <br /> 
              <span className="text-[#EF9144] italic font-serif font-light lowercase">meets</span> <br />
              <span className="relative inline-block">
                <Typewriter
                  words={['Design.', 'Logic.', 'UI/UX.']}
                  loop={0} cursor cursorStyle='' typeSpeed={70} deleteSpeed={50} delaySpeed={2000}
                />
              </span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="max-w-2xl border-l-4 border-[#EF9144] pl-8">
                <p className="text-xl md:text-2xl leading-relaxed font-medium text-[#1A1A1A]/80">
                  I specialize in converting raw data into <span className="text-[#1A1A1A] font-black underline decoration-4 decoration-[#EF9144] underline-offset-4">visual intelligence</span>. 
                  My work lives at the intersection of Python engineering and human-centered Figma prototyping.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TechCard 
                  icon={Layout} 
                  title="Interface Design" 
                  desc="Figma / Framer / Motion" 
                />
                <TechCard 
                  icon={Globe} 
                  title="Leadership" 
                  desc="Student VP / GSSOC Mentor" 
                />
              </div>

              <p className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]/40 flex items-center gap-4">
                <ArrowUpRight size={20} className="text-[#EF9144]" />
                Crafting the future of intelligent interfaces
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Refined Editorial Tech Cards ---
const TechCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5, x: 5 }}
    className="p-8 bg-white/40 backdrop-blur-md border-2 border-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A] group transition-all hover:bg-white/60"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="bg-[#EF9144] text-[#1A1A1A] p-3 rounded-lg border-2 border-[#1A1A1A] shadow-[3px_3px_0px_0px_#1A1A1A]">
        <Icon size={24} strokeWidth={3} />
      </div>
      <Sparkles size={18} className="text-[#1A1A1A] opacity-20 group-hover:opacity-100 transition-opacity" />
    </div>
    <h4 className="text-lg font-black uppercase tracking-tight mb-1">{title}</h4>
    <p className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">{desc}</p>
  </motion.div>
);

export default About;