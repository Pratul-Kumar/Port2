import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  const traits = [
    "Available for new opportunities",
    "Designing art & interfaces",
    "Building logic & systems"
  ];
  
  const [traitIndex, setTraitIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTraitIndex((prev) => (prev + 1) % traits.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [traits.length]);

  return (
    <footer id="contact" className="relative pt-12 pb-12 overflow-hidden text-[#0A0A0A] border-t border-dashed border-gray-200">
      
      {/* Shared global background applied */}

      {/* MARQUEE ANIMATION (Horizontal Scroll) */}
      <div className="w-full overflow-hidden py-4 mb-20 bg-[#FF6B00] border-y border-[#FF6B00]/20 flex relative z-10 shadow-sm">
        <motion.div
           animate={{ x: [0, "-50%"] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="flex whitespace-nowrap w-fit shrink-0"
        >
          {/* Duplicate set to allow seamless -50% loop */}
          {[1, 2].map((id) => (
             <div key={id} className="flex shrink-0">
               {Array(4).fill(null).map((_, i) => (
                 <React.Fragment key={`${id}-${i}`}>
                    <span className="text-sm font-mono font-bold uppercase text-white tracking-[0.2em] mx-6">
                      OPEN FOR OPPORTUNITIES
                    </span>
                    <span className="text-[#0A0A0A] mx-2">✦</span>
                    <span className="text-sm font-mono font-bold uppercase text-white tracking-[0.2em] mx-6">
                      DESIGNING ART
                    </span>
                    <span className="text-[#0A0A0A] mx-2">✦</span>
                    <span className="text-sm font-mono font-bold uppercase text-white tracking-[0.2em] mx-6">
                      BUILDING LOGIC
                    </span>
                    <span className="text-[#0A0A0A] mx-2">✦</span>
                 </React.Fragment>
               ))}
             </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-col items-center"
        >
          {/* Animated Status Indicator */}
          <div className="inline-flex items-center gap-3 mb-12 px-6 py-2 border border-gray-200 rounded-full bg-white shadow-sm overflow-hidden h-[42px] min-w-[280px]">
             <span className="relative flex h-2 w-2 shrink-0">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             <div className="relative flex-grow h-full flex items-center justify-start pointer-events-none">
               <AnimatePresence mode="popLayout">
                 <motion.span
                   key={traitIndex}
                   initial={{ y: 20, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   exit={{ y: -20, opacity: 0 }}
                   transition={{ duration: 0.4, ease: "easeInOut" }}
                   className="absolute text-xs font-mono font-medium text-gray-500 uppercase tracking-widest whitespace-nowrap"
                 >
                   {traits[traitIndex]}
                 </motion.span>
               </AnimatePresence>
             </div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[1.1] text-[#0A0A0A] mb-16">
            Let's build something <br className="hidden md:block"/>
            <span style={{ fontFamily: 'var(--font-dotted)' }} className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] to-[#FF9E5E] tracking-[0.05em] drop-shadow-sm">meaningful.</span>
          </h2>

          <motion.a
            href="mailto:pratulkumar21@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center bg-[#FF6B00] text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl font-medium overflow-hidden transition-all shadow-[0_0_40px_-10px_rgba(255,107,0,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,107,0,0.7)]"
          >
            <span className="relative z-10 flex items-center gap-3 text-lg font-bold">
              <Mail size={20} />
              Contact Me
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </motion.a>

          {/* Social Links Minimal */}
          <div className="flex items-center gap-8 mt-20 mb-32">
             <a href="https://github.com/Pratul-Kumar" target="_blank" rel="noreferrer" className="text-sm font-bold font-mono uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] transition-colors relative group">
               Github
               <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full" />
             </a>
             <a href="https://linkedin.com/in/pratul21/" target="_blank" rel="noreferrer" className="text-sm font-bold font-mono uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] transition-colors relative group">
               LinkedIn
               <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full" />
             </a>
             <a href="https://instagram.com/pratul._.pandey/" target="_blank" rel="noreferrer" className="text-sm font-bold font-mono uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] transition-colors relative group">
               Instagram
               <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full" />
             </a>
          </div>
        </motion.div>

        {/* FOOTER BOTTOM BAR */}
        <div className="w-full border-t border-dashed border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest">
              © {currentYear} Pratul Kumar • Engineered & Designed
            </p>

            <button 
              onClick={() => window.lenis?.scrollTo(0)}
              className="group flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:border-[#FF6B00] group-hover:text-[#FF6B00] transition-all duration-300 group-hover:-translate-y-1 bg-white shadow-sm">
                 <ArrowUpRight size={16} />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#FF6B00] transition-colors">
                Top
              </span>
            </button>
        </div>

      </div>
    </footer>
  );
};

export default Contact;