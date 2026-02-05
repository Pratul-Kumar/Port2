import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scroll lock
    document.body.style.overflow = loading ? 'hidden' : 'unset';

    // Precision Timer: 5 Seconds total
    const duration = 1000; 
    const intervalTime = 10;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#E8E6D9] font-mono overflow-hidden"
        >
          {/* Subtle Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

          <div className="relative w-full max-w-xs px-6 flex flex-col items-center">
            
            {/* Minimalist Identity Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center"
            >
              <h1 className="text-xl font-black uppercase tracking-[0.3em] text-[#1A1A1A]">
                Pratul Kumar
              </h1>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="h-[1px] w-4 bg-[#EF9144]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#EF9144]">
                  Portfolio 2026
                </span>
                <span className="h-[1px] w-4 bg-[#EF9144]" />
              </div>
            </motion.div>

            {/* Percentage Display */}
            <div className="mb-2 text-[4rem] font-serif italic text-[#1A1A1A] leading-none">
              {Math.round(progress)}%
            </div>

            {/* Precision Progress Line */}
            <div className="w-full h-[2px] bg-[#1A1A1A]/10 relative overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-[#EF9144]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Technical Subtext */}
            <div className="mt-6 flex flex-col items-center space-y-1">
               <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]/30">
                 UI/UX DESIGNER
               </p>
               <motion.div 
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="w-1 h-1 bg-[#EF9144] rounded-full"
               />
            </div>

          </div>

          {/* Minimal Corner Decoration */}
          <div className="absolute top-10 left-10 p-2 border-l border-t border-[#1A1A1A]/20 h-10 w-10" />
          <div className="absolute bottom-10 right-10 p-2 border-r border-b border-[#1A1A1A]/20 h-10 w-10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}