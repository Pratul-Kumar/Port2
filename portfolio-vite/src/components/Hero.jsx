import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download } from 'lucide-react';

const Hero = () => {
  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <motion.section 
      id='home' 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // Background style removed here to allow transparency
      className='min-h-screen relative text-white w-full px-6 lg:px-24 flex flex-col justify-center overflow-hidden'
    >
      {/* 1. DECORATIVE ACCENTS (Kept these for depth, but base is transparent) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#fcca46]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      {/* 2. LAYER: TOP IDENTIFIER (The HUD feel) */}
      <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8 mt-5">
        <div className="h-2 w-2 rounded-full bg-[#fcca46] animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-500">
          Pratul_Kumar_v1.0
        </span>
      </motion.div>

      {/* 3. LAYER: MAIN TITLE BLOCK */}
      <div className="space-y-4">
        <motion.h1 
          variants={itemVariants}
          className='text-5xl md:text-8xl lg:text-[14vh] font-black uppercase tracking-tighter leading-[0.85]'
        >
            <span className='tracking-widest'>Pratul</span>
           <br />
          <span className='text-[#fcca46] tracking-wider italic'>Kumar</span>
        </motion.h1>

        <motion.div 
          variants={itemVariants}
          className='text-xl md:text-3xl font-mono text-zinc-500 mt-5 flex items-center gap-3 italic'
        >
          <span className="text-[#fcca46]">&gt;&gt;</span>
          <span>
            <Typewriter
              words={['UX Designer', 'Python Developer', 'Data Strategist']}
              loop={true}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.div>
      </div>

      {/* 4. LAYER: ASYMMETRIC DESCRIPTION & STATS */}
      <div className='mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end'>
        <motion.div variants={itemVariants} className="lg:col-span-5 border-l-2 border-[#fcca46]/30 pl-8">
          <p className='text-base lg:text-lg font-light leading-relaxed text-zinc-400'>
            Bridging the gap between <span className="text-white">Clean Engineering</span> and <span className="text-white">Human-Centric Design</span>. 
            I build intelligent systems in Python and wrap them in world-class experiences.
          </p>
        </motion.div>

        {/* Floating Code Snippet / HUD Detail */}
        <motion.div variants={itemVariants} className="lg:col-span-7 flex justify-end">
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-xl hidden md:block">
                <div className="flex gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <code className="text-xs font-mono text-zinc-500 block">
                    <span className="text-[#fcca46]">def</span> <span className="text-white">create_experience</span>(user_need, tech_logic):<br />
                    &nbsp;&nbsp;return solve_problem(design + code)<br /><br />
                    <span className="text-zinc-600"># System Status: Optimal</span>
                </code>
            </div>
        </motion.div>
      </div>

      {/* 5. LAYER: ACTIONS */}
      <motion.div 
        variants={itemVariants}
        className='mt-20 flex flex-wrap gap-8 items-center'
      >
        <a 
          href="https://drive.google.com/file/d/1DV_QzkLzFtG8hw7n7IsqvReEEmEIFZHn/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(252, 202, 70, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-10 py-4 bg-gradient-to-br from-[#fcca46] to-[#d9a82e] text-black text-[11px] font-black uppercase tracking-widest rounded-sm transition-all duration-500 cursor-pointer"
          >
            View Resume
            <Download size={14} strokeWidth={3} />
          </motion.button>
        </a>
      </motion.div>

      {/* Background Watermark */}
      <div className="absolute top-20 left-[35%] opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[10vw] font-black uppercase tracking-tighter">Visual</h2>
      </div>
      <div className="absolute top-55 left-[38%] opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[10vw] font-black uppercase tracking-tighter">Architech</h2>
      </div>
      
    </motion.section>
  );
};

export default Hero;