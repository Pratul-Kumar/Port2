import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download } from 'lucide-react';

const Hero = () => {
  // Animation variants
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

  // Dynamic Terminal State
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Ref for Auto-scroll
  const terminalBodyRef = useRef(null);

  const terminalData = [
    { 
      cmd: 'import torch; from transformers import pipeline', 
      output: '✓ CUDA available: True\n> Pipeline "sentiment-analysis" loaded\n> Device: NVIDIA Tesla T4' 
    },
    { 
      cmd: 'const { data, error } = useSWR("/api/user", fetcher);', 
      output: '> Hook registered\n> Data: { name: "Pratul", role: "Admin" }\n> Revalidating on focus...' 
    },
    { 
      cmd: 'docker-compose up -d --build', 
      output: 'Building web-service...\n[+] redis-cache   Running\n[+] postgres-db   Healthy\n> Stack deployed successfully' 
    },
    { 
      cmd: 'git push origin feature/computer-vision', 
      output: 'Enumerating objects: 14, done.\nWriting objects: 100% (14/14), 2.14 KiB\nremote: Resolving deltas: 100%\n> Merged to main' 
    }
  ];

  // Auto-scroll Effect
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalLines, currentText]); 

  // Terminal Typing Effect
  useEffect(() => {
    let timeoutId;
    
    const typeLine = async () => {
      if (isTyping) return;
      
      setIsTyping(true);
      const data = terminalData[currentIndex];
      
      // Type command
      for (let i = 0; i <= data.cmd.length; i++) {
        setCurrentText(data.cmd.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 40));
      }
      
      // Show output
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setTerminalLines(prev => {
        const newLines = [...prev, { cmd: data.cmd, output: data.output }];
        return newLines.slice(-50); 
      });
      
      setCurrentText('');
      setIsTyping(false);
      
      timeoutId = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % terminalData.length);
      }, 1500);
    };

    if (!isTyping && currentText === '') {
      typeLine();
    }

    return () => clearTimeout(timeoutId);
  }, [currentIndex, isTyping, currentText, terminalData]);

  return (
    <motion.section 
      id='home' 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='min-h-screen relative text-white w-full px-6 lg:px-24 flex flex-col justify-center overflow-hidden py-12 lg:py-0'
    >
      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#fcca46]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      {/* TOP IDENTIFIER */}
      <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8 lg:mt-5 mt-0">
        <div className="h-2 w-2 rounded-full bg-[#fcca46] animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-500">
          Pratul_Kumar_v1.0
        </span>
      </motion.div>

      {/* MAIN LAYOUT */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
        
        {/* 1. TEXT CONTENT (Appears First on Mobile and Left on Desktop) */}
        <div className="space-y-6 lg:space-y-8">
          {/* Title Block */}
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
              className='text-lg md:text-3xl font-mono flex items-center gap-3 italic group'
            >
              <span className="text-[#fcca46] group-hover:drop-shadow-[0_0_8px_rgba(252,202,70,0.6)] transition-all duration-300">&gt;&gt;</span>
              <span className="relative">
                <span className="absolute -inset-1 bg-gradient-to-r from-[#fcca46]/20 via-transparent to-[#fcca46]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
                <span className="relative text-zinc-300 group-hover:text-[#fcca46]/90 transition-colors duration-300">
                  <Typewriter
                    words={['UI/UX Designer', 'Python Developer', 'Data Strategist']}
                    loop={true}
                    cursor
                    cursorStyle='_'
                    typeSpeed={40}
                    deleteSpeed={40}
                    delaySpeed={800}
                  />
                </span>
              </span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div variants={itemVariants} className="max-w-lg">
            <p className='text-sm md:text-base lg:text-lg font-light leading-relaxed text-zinc-400'>
              Bridging the gap between <span className="text-white">Clean Engineering</span> and <span className="text-white">Human-Centric Design</span>. 
              I build intelligent systems in Python and wrap them in world-class experiences.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div 
  variants={itemVariants}
  className='flex flex-wrap gap-8 items-center'
>
  <a 
    href="https://drive.google.com/file/d/1DV_QzkLzFtG8hw7n7IsqvReEEmEIFZHn/view?usp=sharing" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block"
  >
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      // Base Button Styles (Dark Background initially)
      className="group relative overflow-hidden rounded-full bg-zinc-800 px-8 py-3 lg:px-10 lg:py-4 transition-all duration-300 hover:shadow-[0_0_40px_rgba(252,202,70,0.5)] border border-white/5 hover:border-[#fcca46]/50"
    >
      {/* SWIPE LAYER (The Yellow Gradient) */}
      <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#fcca46] to-[#d9a82e] transition-transform duration-500 ease-out group-hover:scale-x-100" />
      
      {/* CONTENT LAYER (Text colors flip on hover) */}
      <span className="relative z-10 flex items-center gap-3 text-[10px] lg:text-[11px] font-black uppercase tracking-widest text-white transition-colors duration-300 group-hover:text-black">
        View Resume
        <Download size={14} strokeWidth={3} />
      </span>
    </motion.button>
  </a>
</motion.div>
        </div>

        {/* 2. TERMINAL (Appears Below Text on Mobile and Right on Desktop) */}
        <motion.div variants={itemVariants} className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
          <motion.div
            className="bg-white/[0.05] border border-white/10 backdrop-blur-xl rounded-2xl p-0 overflow-hidden shadow-2xl hover:shadow-[#fcca46]/20 transition-all duration-500 h-[300px] lg:h-[50vh] flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Terminal Header */}
            <div className="flex-shrink-0 flex items-center justify-between p-3 lg:p-4 bg-white/10 backdrop-blur-sm border-b border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-red-500/70 rounded-full animate-pulse" />
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-yellow-500/70 rounded-full" />
                <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 bg-emerald-500/70 rounded-full" />
              </div>
              <div className="text-[10px] lg:text-xs font-mono text-zinc-400 flex items-center gap-1">
                <span>~/neural-bento</span>
                <span className="ml-2 px-2 py-0.5 bg-[#fcca46]/20 rounded-full text-[#fcca46] text-[10px] font-mono">main</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              ref={terminalBodyRef}
              className="flex-1 overflow-y-auto p-4 lg:p-6 font-mono text-xs lg:text-sm space-y-3 lg:space-y-4 bg-gradient-to-b from-transparent/30 to-white/5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
              <AnimatePresence>
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={`${line.cmd}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-1 leading-relaxed"
                  >
                    <div className="text-[#fcca46] break-all">$ {line.cmd}</div>
                    <div className="pl-4 text-emerald-400/90 whitespace-pre-wrap">
                      {line.output}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Typing Line */}
              <div className="flex items-start pt-2 lg:pt-4 border-t border-white/10 min-h-[1.5rem]">
                <span className="text-[#fcca46] mt-1 mr-2 flex-shrink-0">$</span>
                <span className="text-zinc-200 flex-1 min-w-0 font-mono break-all">{currentText}</span>
                <motion.span
                  className="w-1.5 h-3 lg:w-2 lg:h-4 bg-zinc-200 ml-1 flex-shrink-0 mt-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Background Watermarks */}
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