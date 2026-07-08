import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Typewriter = ({ roles }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let timeout;
    
    if (isDeleting) {
      if (currentText.length === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        timeout = setTimeout(() => {}, 500); // Pause before typing new
      } else {
        timeout = setTimeout(() => {
          setCurrentText(role.substring(0, currentText.length - 1));
        }, 50);
      }
    } else {
      if (currentText.length === role.length) {
        timeout = setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else {
        timeout = setTimeout(() => {
          setCurrentText(role.substring(0, currentText.length + 1));
        }, 100);
      }
    }
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <span className="font-mono text-[#FF6B00]">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        className="inline-block w-[2px] h-[1em] bg-[#FF6B00] ml-1 align-middle"
      />
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      
      {/* Shared global background applied */}
      
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {[...Array(10)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute w-1.5 h-1.5 rounded-full bg-[#E5E5E5]"
             style={{
               left: `${Math.random() * 100}%`,
               top: `${Math.random() * 100}%`,
             }}
             animate={{
               y: [0, -30, 0],
               opacity: [0, 1, 0],
               scale: [1, 1.5, 1]
             }}
             transition={{
               duration: 4 + Math.random() * 6,
               repeat: Infinity,
               ease: "easeInOut",
               delay: Math.random() * 2
             }}
           />
         ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Introduction */}
        <div className="flex flex-col items-start pb-20 lg:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-gray-200 rounded-full bg-white/50 backdrop-blur-sm shadow-sm">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
               </span>
               <span className="text-xs font-mono font-medium text-gray-800 uppercase tracking-widest">
                 Primary Role: <span className="text-[#FF6B00] font-bold">Product Analyst</span>
               </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black font-heading text-[#0A0A0A] leading-[1.05] tracking-tighter mb-6 relative">
              <span className="relative z-10">Pratul Kumar</span>
              {/* Subtle dotted accent behind name */}
              <div className="absolute -bottom-4 -left-4 w-32 h-12 bg-dotted-dark opacity-10 -z-10" />
            </h1>

            <div className="text-[1.35rem] md:text-3xl font-body text-[#666666] mb-8 min-h-[40px] md:min-h-[50px] flex items-center flex-wrap">
              A Multi-Disciplinary {' '}
              <span className="ml-2 font-medium text-[#0A0A0A] inline-block mt-2 md:mt-0">
                <Typewriter roles={["AI/ML Engineer", "Frontend Developer", "Product Designer"]} />
              </span>
            </div>

            <p className="text-lg text-[#666666] max-w-lg mb-12 leading-relaxed font-body">
              I build high-performance intelligent systems with Python and design clean, user-centered interfaces. Bridging the gap between deeply technical machine learning and premium aesthetic design.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.button
                onClick={() => window.lenis?.scrollTo('#projects')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center bg-[#FF6B00] text-white px-8 py-4 rounded-xl font-medium overflow-hidden transition-all shadow-[0_0_40px_-10px_rgba(255,107,0,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,107,0,0.7)] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/1-V8mYmbUT_Ols0D08lAdZfUtH3dSqp1f/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gray-50 border border-gray-200 text-[#0A0A0A] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 hover:border-gray-300 transition-all font-mono text-sm tracking-wide"
              >
                Download Resume
              </motion.a>
            </div>
            
          </motion.div>
        </div>

        {/* Right Side: Minimal Visual */}
        <div className="hidden lg:flex justify-end items-center relative h-[600px] w-full">
          {/* Abstract geometric composition */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
             className="relative w-[440px] h-[520px]"
          >
             {/* Main structural box */}
             <div className="absolute inset-0 border border-gray-200 rounded-3xl bg-[#F7F7F7]/60 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-black/[0.03]">
                {/* Inner dotted grid rendering */}
                <div className="absolute inset-0 opacity-20 bg-dotted-dark" />
                
                {/* Visual Elements inside glass box */}
                {/* Element 1: Model conceptualization node */}
                <motion.div 
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/4 left-[15%] w-32 h-32 bg-[#FFFFFF] rounded-2xl shadow-xl shadow-black/5 border border-gray-100 flex items-center justify-center"
                >
                  <div className="w-10 h-10 rounded-full border-[3px] border-[#FF6B00]" />
                  <div className="absolute -right-4 top-1/2 w-8 h-[1px] bg-gray-300" />
                  <div className="absolute -bottom-4 left-1/2 w-[1px] h-8 bg-gray-300" />
                </motion.div>

                {/* Element 2: Code simulation block */}
                <motion.div 
                  animate={{ y: [15, -15, 15] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-[20%] right-[15%] w-44 h-28 bg-[#0A0A0A] rounded-2xl shadow-2xl flex flex-col justify-center px-6 overflow-hidden border border-gray-800"
                >
                  <div className="space-y-2 w-full">
                    <div className="w-4/5 h-1.5 bg-[#333333] rounded-full" />
                    <div className="w-1/2 h-1.5 bg-[#FF6B00]/90 rounded-full" />
                    <div className="w-full h-1.5 bg-[#333333] rounded-full" />
                    <div className="w-2/3 h-1.5 bg-[#333333] rounded-full" />
                  </div>
                </motion.div>

                {/* Decorative connection lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-[1px] bg-dashed border border-gray-200 rotate-45" />

             </div>

             {/* Outlying accents */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               className="absolute -top-6 -right-6 w-32 h-32 border border-dashed border-gray-300 rounded-full pointer-events-none" 
             />
             <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-100 rounded-full border border-gray-200 shadow-sm" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;