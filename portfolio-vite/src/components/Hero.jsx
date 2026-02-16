import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, Sparkles, Globe, Clock } from 'lucide-react';

const Hero = () => {
  // --- ADDED: Live Clock Logic ---
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const titleLetter = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const name = "Pratul".split("");
  const surname = "Kumar".split("");

  return (
    <motion.section 
      id='home' 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='min-h-screen relative text-[#1A1A1A] w-full px-6 lg:px-24 flex flex-col justify-center overflow-hidden py-20 bg-[#E8E6D9]'
    >
      {/* 1. LAYERED BACKGROUND GRADIENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] opacity-60 blur-[120px] rounded-full"
          style={{ background: 'radial-gradient(circle, #EF9144 0%, transparent 70%)' }}
        />
        <div 
          className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] opacity-40 blur-[100px] rounded-full"
          style={{ background: 'radial-gradient(circle, #D4CDB3 0%, transparent 70%)' }}
        />
      </div>

      {/* 2. TEXTURE & WATERMARK OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <motion.h2 
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] font-black absolute bottom-5 -right-10 leading-none uppercase tracking-tighter opacity-[0.03] rotate-[-10deg]"
        >
          Creative
        </motion.h2>

        <div className="absolute top-[10%] right-[10%] opacity-[0.05] text-[#EF9144] rotate-[15deg]">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none">
             <path d="M50 0L52 48L100 50L52 52L50 100L48 52L0 50L48 48L50 0Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-[10%] left-[-5%] opacity-[0.03] text-[#EF9144] -rotate-12">
          <svg width="500" height="500" viewBox="0 0 100 100" fill="none">
             <path d="M50 0L52 48L100 50L52 52L50 100L48 52L0 50L48 48L50 0Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:mt-1 mt-10 items-start relative z-10'>
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 flex flex-col mt-10 gap-10">
          <div className="space-y-4">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#EF9144]" />
              <span className="text-xs font-black uppercase tracking-[0.5em] text-[#1A1A1A]/40">
                Architecting Intelligent Systems.

              </span>
            </motion.div>

            <h1 className='text-7xl md:text-8xl lg:text-[15vh] font-black uppercase leading-[0.85] tracking-tighter flex flex-col'>
              <span className="flex overflow-hidden">
                {name.map((l, i) => (
                  <motion.span key={i} variants={titleLetter}>{l}</motion.span>
                ))}
              </span>
              <span className="text-[#EF9144] italic font-serif font-light flex overflow-hidden">
                {surname.map((l, i) => (
                  <motion.span key={i} variants={titleLetter} transition={{ delay: 1.8 + (i * 0.05) }}>{l}</motion.span>
                ))}
              </span>
            </h1>
          </div>

          <motion.div 
            variants={itemVariants} 
            className="bg-white/40 backdrop-blur-md border border-[#1A1A1A]/5 p-8 md:p-12 rounded-[3rem] max-w-2xl shadow-2xl shadow-black/[0.02]"
          >
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="relative shrink-0">
                <span className="text-9xl font-serif leading-none italic opacity-10 select-none">A</span>
                <Sparkles className="absolute top-0 right-0 text-[#EF9144] opacity-40 animate-pulse" size={40} />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-black uppercase tracking-tight">
                  AI ENGINEERING & DESIGN 
                </h3>
                <p className='text-lg leading-relaxed text-[#1A1A1A]/80 font-medium'>
                  I am a <span className="text-[#1A1A1A] font-bold border-b-2 border-[#EF9144]/40">Multi-Disciplinary Engineer & Designer.</span> I write Python, build and deploy AI/ML models, and craft beautiful, user-centered interfaces.
                </p>
                <div className="h-[1px] w-full bg-[#1A1A1A]/10" />
                <p className="text-sm uppercase font-black tracking-widest text-[#1A1A1A]/40">
                  Ref: Code Model Design & Visual Systems
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-5 flex flex-col gap-10 lg:mt-32">
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row lg:flex-col gap-5">
            <motion.a 
              href="https://drive.google.com/file/d/1oUg-r3-DarzzctcS_ZM5FzvfoK-ua2HT/view?usp=sharing"
              whileHover={{ scale: 1.05, x: -10 }}
              className="bg-[#1A1A1A] text-[#E8E6D9] border border-[#1A1A1A]/10 flex items-center justify-between px-10 py-8 rounded-full font-black uppercase tracking-widest text-xs group"
            >
              Download Resume
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6 p-6 border-2 border-[#1A1A1A]/5 rounded-3xl">
            <div className="flex justify-between items-center">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-[#EF9144]">Core_Competencies</h3>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <p className="text-[11px] leading-relaxed text-[#1A1A1A]/60 font-black uppercase tracking-[0.2em]">
              Visual Design • UI/UX Architecture • Generative Logic • Python Intelligence • Systems Thinking
            </p>
            <p className="text-base text-[#1A1A1A]/70 leading-relaxed italic border-t border-[#1A1A1A]/5 pt-4">
              "Building intelligent systems where <span className="text-[#1A1A1A] font-bold not-italic decoration-[#EF9144] underline-offset-4">algorithmic precision</span> meets beautiful, human-centered design."
            </p>
          </motion.div>

          <motion.div
            className="competency-card flex flex-col sm:flex-row items-center justify-between gap-4 px-7 py-4 border-2 border-[#1A1A1A]/5 rounded-3xl bg-white/30 backdrop-blur-sm"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
          >
            <div className="flex items-center gap-3">
              <span style={{ fontSize: '1.4rem' }}>🎨</span>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'var(--orange)',
                    marginBottom: '3px',
                  }}
                >
                  UI/UX Design
                </p>
                <p style={{ fontSize: '0.8rem', color: '#555' }}>
                  Figma · Wireframing · Prototyping · User Research
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span style={{ fontSize: '1.4rem' }}>🤖</span>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'var(--orange)',
                    marginBottom: '3px',
                  }}
                >
                  AI / ML
                </p>
                <p style={{ fontSize: '0.8rem', color: '#555' }}>
                  TensorFlow · PyTorch · LLMs · GenAI
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- ADDED CONTENT: EDITORIAL FOOTER BAR --- */}
      <motion.div 
        variants={itemVariants}
        className="absolute bottom-10 left-0 w-full px-6 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8 z-20"
      >
        {/* Live Status & Clock */}
        <div className="flex items-center gap-8 font-mono text-[10px] font-black uppercase tracking-widest opacity-40">
          <div className="flex items-center gap-2">
            <Globe size={12} className="animate-spin-slow" />
            <span>Based in India</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={12} />
            <span>{time}</span>
          </div>
        </div>

        {/* Project availability badge */}
        <motion.a
          href="https://www.linkedin.com/in/pratul21"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-4 px-5 py-2 border border-[#1A1A1A]/10 rounded-full bg-white/20 backdrop-blur-sm cursor-pointer transition-all"
        >
          <motion.span
              className="w-2 h-2 rounded-full"
              animate={{
                backgroundColor: ["#EF9144", "#c52222", "#3B82F6", "#681bed", "#EF9144"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          <span className="text-[9px] font-black uppercase tracking-[0.2em]">
            Let's Connect and Build Something Amazing Together!
          </span>
        </motion.a>


        {/* Micro-Marquee */}
        <div className="overflow-hidden w-40 hidden lg:block border-b border-[#1A1A1A]/20">
          <motion.div 
            animate={{ x: [0, -100] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            className="whitespace-nowrap text-[9px] font-black uppercase tracking-[0.4em] opacity-30"
          >
            Scroll to explore Archive • Pratul Kumar 2026 • 
          </motion.div>
        </div>
      </motion.div>

      {/* FLOATING SVG ACCENTS */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[12%] left-[5%] opacity-30 pointer-events-none"
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="#EF9144">
          <path d="M50 0L61 35H98L68 57L79 91L50 70L21 91L32 57L2 35H39L50 0Z" />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default Hero;