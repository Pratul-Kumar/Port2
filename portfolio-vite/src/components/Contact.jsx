import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, ArrowUpRight, Palette } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

  return (
    <footer id="contact" className="relative pt-32 pb-10 overflow-hidden border-t border-white/5 bg-[#0a0a0a]">
      
      {/* 1. TECH GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. INFINITE MARQUEE */}
      <div className="absolute top-0 w-full overflow-hidden whitespace-nowrap border-b border-white/5 bg-black/20 py-4 backdrop-blur-sm z-10">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8 text-[11px] font-mono uppercase tracking-[0.4em] text-zinc-600/60">
              System_Ready • Open_for_Collab • Design_Engineer • Pixel_Perfect • 
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          
          {/* LEFT COLUMN: HERO TEXT */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-[#fcca46]/20 bg-[#fcca46]/5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fcca46] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#fcca46]">Transmission_Open</span>
              </div>
              
              {/* --- CYCLING TYPEWRITER HEADLINE --- */}
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.85]">
                Let's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcca46] via-[#ffd700] to-[#fcca46] italic font-light lowercase">
                  <Typewriter
                    words={['connect', 'build', 'deploy']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h2>
            </div>
            
            <p className="max-w-md text-zinc-500 text-lg font-light leading-relaxed border-l-2 border-[#fcca46]/50 pl-6">
              Merging technical logic with aesthetic intuition. Currently based in Bhopal, reaching out to the global tech ecosystem.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: BENTO GRID */}
          <div className="flex flex-col justify-end gap-6">
            
            {/* Contact Card */}
            <motion.div variants={itemVariants} className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Mail size={120} className="text-white rotate-12" />
                </div>
                <div className="relative z-10 space-y-2">
                    <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Drop a Line</h3>
                    <a href="mailto:pratulkumar21@gmail.com" className="block text-2xl md:text-4xl font-bold text-zinc-100 hover:text-[#fcca46] transition-colors break-all">
                        pratulkumar21@gmail.com
                    </a>
                </div>
            </motion.div>

            {/* Info Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-[#fcca46]/30 transition-colors flex flex-col justify-between h-40">
                    <Phone className="text-zinc-600 mb-auto" size={24} />
                    <div>
                        <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1">Mobile</div>
                        <div className="text-xl text-zinc-200">+91 9534177010</div>
                    </div>
                </div>

                <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-[#fcca46]/30 transition-colors flex flex-col justify-between h-40">
                    <MapPin className="text-zinc-600 mb-auto" size={24} />
                    <div>
                        <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1">Base_Station</div>
                        <div className="text-xl text-zinc-200">Madhya Pradesh, IN</div>
                    </div>
                </div>
            </motion.div>

            {/* Social Row */}
            <motion.div variants={itemVariants} className="flex gap-4">
                {[
                  { icon: <Github size={20}/>, url: 'https://github.com/Pratul-Kumar' },
                  { icon: <Linkedin size={20}/>, url: 'https://www.linkedin.com/in/pratul21/' },
                  { icon: <Instagram size={20}/>, url: 'https://www.instagram.com/pratul._.pandey/' },
                  { icon: <Palette size={20}/>, url: '#' },
                ].map((item, i) => (
                    <a key={i} href={item.url} target="_blank" rel="noreferrer" 
                       className="flex-1 h-16 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-[#fcca46] hover:bg-[#fcca46]/10 hover:border-[#fcca46]/30 transition-all">
                        {item.icon}
                    </a>
                ))}
            </motion.div>

          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
            <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                © {currentYear} Pratul Kumar. All Systems Nominal.
            </div>

            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-[#fcca46] transition-colors"
            >
              Back_To_Top <ArrowUpRight size={14} />
            </button>
        </motion.div>
      </div>
      
      {/* BACKGROUND TEXT */}
      <div className="absolute left-[-2%] bottom-[-1%] opacity-[0.02] text-[20vw] font-black text-white pointer-events-none select-none tracking-tighter uppercase italic">
        Systems_Active
      </div>
    </footer>
  );
};

export default Contact;