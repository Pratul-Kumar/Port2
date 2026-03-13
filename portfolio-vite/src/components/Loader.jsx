import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onFinish }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scroll lock
    document.body.style.overflow = loading ? 'hidden' : '';

    // Precision Timer
    const duration = 1500; 
    const intervalTime = 15;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            if (onFinish) onFinish();
          }, 300);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [loading, onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white font-mono overflow-hidden"
        >
          {/* Subtle dotted background grid */}
          <div className="absolute inset-0 bg-dotted pointer-events-none opacity-40" />

          <div className="relative w-full max-w-sm px-8 flex flex-col items-center z-10">
            
            {/* Minimalist Identity Tag */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center mb-12"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] flex items-center justify-center text-white mb-6">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-dashed border-[#FF6B00] rounded-full"
                />
              </div>

              <h1 className="text-xl font-heading font-black tracking-tight text-[#0A0A0A] mb-2">
                System Initialization
              </h1>
              
              <div className="flex items-center gap-3">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
                 </span>
                 <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400">
                   {progress < 40 ? "Loading Core..." : progress < 80 ? "Booting ML Models..." : "Ready."}
                 </span>
              </div>
            </motion.div>

            {/* Percentage Display */}
            <div className="mb-4 text-5xl font-heading font-black text-[#0A0A0A] tracking-tighter">
              {Math.min(Math.round(progress), 100)}%
            </div>

            {/* Precision Progress Line */}
            <div className="w-full h-[1px] bg-gray-200 relative overflow-hidden rounded-full">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-[#FF6B00]"
                style={{ width: `${progress}%` }}
              />
            </div>

          </div>

          {/* Abstract background elements */}
          <motion.div 
             animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#FF6B00]/5 rounded-full blur-[100px] pointer-events-none -z-10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}