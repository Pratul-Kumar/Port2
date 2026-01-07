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
    <section id="about" className="relative min-h-screen flex items-center py-20 mt-10 overflow-hidden bg-transparent">
      {/* Minimalist Watermark */}
      <div className="absolute top-10 left-10 opacity-[0.03] text-[12vw] font-black text-white pointer-events-none select-none">
        ABOUT
      </div>

      <div className="mx-auto w-[90%] px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* LEFT: CONTENT */}
          <div className="relative order-2 lg:order-1">
            {/* Simple Floating Icons (Strictly Yellow/White) */}
            <motion.div animate={float} className="absolute -top-12 -left-8 text-[#fcca46]/20 hidden md:block">
              <Code2 size={40} />
            </motion.div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-10 right-10 text-white/10 hidden md:block">
              <Terminal size={40} />
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter mb-8 leading-tight text-white">
                Data Science <br /> 
                meets {" "}
                <span className="text-[#fcca46] italic font-light inline-flex">
                    <Typewriter
                    words={['Design.', 'Logic.', 'Systems.', 'UI/UX.']}
                    loop={0} // 0 means infinite loop
                    cursor
                    cursorStyle=''
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    />
                </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-zinc-400 text-lg leading-relaxed mb-8">
              Bridging the gap between data science and design, I am an AI/ML enthusiast skilled in 
              <span className="text-white"> Python, Azure, and Figma</span>. I build intelligent systems with intuitive UI/UX, 
              from forest fire prediction models to the <span className="text-[#fcca46]"> 'Beat-Diary' </span> platform.
            </motion.p>

            <motion.div variants={itemVariants} className="border-l-2 border-[#fcca46] pl-6 mb-10">
              <p className="text-zinc-500 text-sm italic">
                As Student Council Vice President and GSSOC Mentor, I combine technical logic with creative vision to solve real-world problems.
              </p>
            </motion.div>

            {/* Simple Bento Grid (Strictly Yellow/White/Zinc) */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div variants={itemVariants} className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                <Layout size={20} className="text-[#fcca46] mb-3" />
                <h4 className="text-white text-xs font-bold uppercase tracking-widest">UI/UX Design</h4>
              </motion.div>
              <motion.div variants={itemVariants} className="p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                <Globe size={20} className="text-[#fcca46] mb-3" />
                <h4 className="text-white text-xs font-bold uppercase tracking-widest">Open Source</h4>
              </motion.div>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Simple Image Frame */}
              <div className="relative w-64 h-80 lg:w-80 lg:h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                <img 
                  src="./Profile.jpeg" 
                  alt="Pratul Kumar" 
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-bold text-white tracking-tighter">PRATUL KUMAR</h3>
                  <p className="text-[10px] font-mono text-[#fcca46] uppercase tracking-widest">Available for Hire</p>
                </div>
              </div>
              
              {/* Geometric Accent (Yellow) */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#fcca46] rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[#fcca46] rounded-bl-3xl" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;