import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Code2, Globe } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const float = {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center py-16 md:py-24 overflow-hidden bg-transparent">
      
      {/* 1. MINIMALIST WATERMARK - Responsive Font Size */}
      <div className="absolute top-10 left-5 md:left-10 opacity-[0.02] text-[18vw] md:text-[12vw] font-black text-white pointer-events-none select-none leading-none">
        ABOUT
      </div>

      <div className="mx-auto w-[90%] md:w-[85%] max-w-7xl px-2 md:px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center"
        >
          
          {/* 2. IMAGE SECTION - First on Mobile, Right on Desktop */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Responsive Image Frame */}
              <div className="relative w-60 h-72 sm:w-72 sm:h-96 lg:w-80 lg:h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                <img 
                  src="./Profile.jpeg" 
                  alt="Pratul Kumar" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
                
                {/* Image Label */}
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tighter">PRATUL KUMAR</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#fcca46] animate-pulse" />
                    <p className="text-[9px] md:text-[10px] font-mono text-[#fcca46] uppercase tracking-[0.2em]">Active_Now</p>
                  </div>
                </div>
              </div>
              
              {/* Geometric Corner Accents */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-[#fcca46]/40 rounded-tr-[2rem] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-[#fcca46]/40 rounded-bl-[2rem] group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
            </div>
          </motion.div>

          {/* 3. CONTENT SECTION */}
          <div className="relative order-2 lg:order-1">
            {/* Floating Icons - Hidden on small screens to reduce clutter */}
            <motion.div animate={float} className="absolute -top-16 -left-10 text-[#fcca46]/10 hidden lg:block">
              <Code2 size={60} />
            </motion.div>
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -bottom-10 right-0 text-white/5 hidden lg:block">
              <Terminal size={50} />
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 md:mb-8 leading-[0.9] text-white">
                Data Science <br /> 
                <span className="text-zinc-700 italic font-light">meets</span> {" "}
                <br />
                <span className="text-[#fcca46] italic font-light lowercase">
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

            <motion.p variants={itemVariants} className="text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl">
              Bridging the gap between data science and design, I am an AI/ML enthusiast skilled in 
              <span className="text-white font-medium"> Python, Azure, and Figma</span>. I build intelligent systems with intuitive UI/UX, 
              from forest fire prediction models to the <span className="text-[#fcca46] font-medium"> 'Beat-Diary' </span> platform.
            </motion.p>

            <motion.div variants={itemVariants} className="border-l-2 border-[#fcca46]/50 pl-6 mb-10 group">
              <p className="text-zinc-500 text-xs md:text-sm italic leading-relaxed group-hover:text-zinc-400 transition-colors">
                As Student Council Vice President and GSSOC Mentor, I combine technical logic with creative vision to solve real-world problems.
              </p>
            </motion.div>

            {/* 4. SIMPLE BENTO CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div 
                variants={itemVariants} 
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm flex items-center gap-4 group transition-colors hover:border-[#fcca46]/20"
              >
                <div className="p-3 rounded-xl bg-[#fcca46]/5 text-[#fcca46]">
                  <Layout size={20} />
                </div>
                <h4 className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">UI/UX Design</h4>
              </motion.div>

              <motion.div 
                variants={itemVariants} 
                whileHover={{ scale: 1.02 }}
                className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm flex items-center gap-4 group transition-colors hover:border-[#fcca46]/20"
              >
                <div className="p-3 rounded-xl bg-[#fcca46]/5 text-[#fcca46]">
                  <Globe size={20} />
                </div>
                <h4 className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">Open Source</h4>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;