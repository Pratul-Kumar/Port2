import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout, Globe, Cpu, Sparkles, Zap } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  const containerRef = useRef(null);

  // Parallax for Watermark
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yWatermark = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden bg-transparent">
      
      {/* Parallax Watermark */}
      <motion.div 
        style={{ y: yWatermark }}
        className="absolute top-20 right-0 lg:right-20 opacity-[0.03] text-[15rem] lg:text-[20rem] font-black text-white pointer-events-none select-none leading-none z-0 hidden md:block"
      >
        ABOUT
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-4 mb-16 lg:mb-24">
          <div className="h-[2px] w-12 bg-gradient-to-r from-yellow-400 to-amber-600" />
          <span className="text-zinc-500 font-mono text-sm uppercase tracking-[0.3em]">
            // The Architect
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT COLUMN: IMAGE --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative group w-full max-w-md">
              
              {/* Spinning Tech Rings (Yellow/Amber) */}
              <div className="absolute inset-0 -z-10 scale-125">
                <div className="absolute inset-0 border border-dashed border-zinc-800 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-4 border border-zinc-800 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                {/* Theme Color Ring */}
                <div className="absolute inset-0 border-r border-[#fcca46]/40 rounded-full animate-[spin_10s_linear_infinite]" />
              </div>

              {/* Image Frame */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl group-hover:border-[#fcca46]/30 transition-colors duration-500">
                <img 
                  src="./Profile.jpeg" 
                  alt="Pratul Kumar" 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover:scale-100"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-yellow-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Identity Card Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="backdrop-blur-md bg-black/40 border border-white/10 p-4 rounded-xl">
                    <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Pratul Kumar</h3>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fcca46] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fcca46]"></span>
                        </span>
                        <p className="text-[10px] font-mono text-[#fcca46] uppercase tracking-widest">Active_Now</p>
                      </div>
                      <Cpu size={16} className="text-zinc-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corners (Yellow) */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t border-r border-[#fcca46] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b border-l border-[#fcca46] opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: CONTENT --- */}
          <div className="relative order-2 lg:order-2">
            
            {/* Floating Icons */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 right-10 text-[#fcca46]/10 hidden lg:block">
               <Zap size={40} />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-white"
            >
              Data Science <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 italic font-serif font-light">
                Meets
              </span> <br />
              {/* Typewriter in Yellow */}
              <span className="text-[#fcca46]">
                <Typewriter
                  words={['Design.', 'Logic.', 'Systems.', 'UI/UX.']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative pl-8 border-l-2 border-zinc-800 space-y-6"
            >
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Bridging the gap between data science and design, I am an AI/ML enthusiast skilled in 
                <span className="text-white font-medium"> Python, Azure, and Figma</span>. I build intelligent systems with intuitive UI/UX, 
                from forest fire prediction models to the <span className="text-[#fcca46] font-medium"> 'Beat-Diary' </span> platform.
              </p>

              <p className="text-zinc-500 text-sm font-mono leading-relaxed">
                // BACKGROUND <br/>
                As Student Council Vice President and GSSOC Mentor, I combine technical logic with creative vision to solve real-world problems.
              </p>
            </motion.div>

            {/* Tech Stack / Bento Grid (Yellow Theme) */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TechCard 
                icon={Layout} 
                title="UI/UX Design" 
                desc="Figma / Framer" 
                themeColor="text-[#fcca46]"
                hoverBorder="group-hover:border-[#fcca46]/20"
                hoverBg="group-hover:bg-[#fcca46]/10"
              />
              <TechCard 
                icon={Globe} 
                title="Open Source" 
                desc="GSSOC Mentor" 
                themeColor="text-amber-400"
                hoverBorder="group-hover:border-amber-400/20"
                hoverBg="group-hover:bg-amber-400/10"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

// --- Sub-component for Bento Cards ---
const TechCard = ({ icon: Icon, title, desc, themeColor, hoverBorder, hoverBg }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={`p-6 rounded-xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 group ${hoverBorder}`}
  >
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-lg bg-zinc-950 border border-zinc-800 ${themeColor} ${hoverBg} transition-colors`}>
        <Icon size={24} />
      </div>
      <Sparkles size={16} className="text-zinc-700 group-hover:text-white transition-colors" />
    </div>
    <h4 className="text-white font-bold uppercase tracking-wider mb-1">{title}</h4>
    <p className="text-zinc-500 text-xs font-mono">{desc}</p>
  </motion.div>
);

export default About;