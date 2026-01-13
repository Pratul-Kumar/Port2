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
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#0a0a0a] to-black">
      
      {/* ANIMATED GRADIENT BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#fcca46]/5 rounded-full blur-3xl -z-10" />
      </div>

      {/* MARQUEE BANNER */}
      <div className="absolute top-0 w-full overflow-hidden whitespace-nowrap border-b border-white/5 bg-gradient-to-r from-black/40 via-black/20 to-black/40 backdrop-blur-md z-10 py-3">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="mx-10 text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500/70 whitespace-nowrap">
              ◆ Open_For_Opportunities ◆ Design_Engineer ◆ Building_Systems ◆ 
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 pt-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          
          {/* LEFT COLUMN: HERO TEXT */}
          <motion.div variants={itemVariants} className="space-y-8 flex flex-col justify-center">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-[#fcca46]/30 bg-[#fcca46]/10 backdrop-blur-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[#fcca46] animate-pulse" />
                <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-[#fcca46] font-semibold">Ready To Connect</span>
              </motion.div>
              
              {/* HERO HEADLINE */}
              <div>
                <h2 className="text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-3">
                  Let's
                </h2>
                <p className="text-5xl md:text-9xl lg:text-10xl font-black uppercase tracking-tighter leading-[0.9]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcca46] via-yellow-400 to-[#fcca46] italic font-light lowercase">
                    <Typewriter
                      words={['connect', 'build', 'collaborate', 'create']}
                      loop={0}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={40}
                      delaySpeed={2000}
                    />
                  </span>
                </p>
              </div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-xl text-zinc-400 text-sm md:text-base font-light leading-relaxed border-l-2 border-[#fcca46]/50 pl-6 py-2"
            >
              Merging technical precision with creative innovation. Based in Bhopal, India • Building solutions for a global audience.
            </motion.p>
          </motion.div>

          {/* RIGHT COLUMN: CONTACT BENTO GRID */}
          <div className="flex flex-col justify-center gap-5">
            
            {/* MAIN EMAIL CARD */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ y: -4, borderColor: "rgba(252, 202, 70, 0.5)" }}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:bg-white/[0.08] transition-all duration-300 group relative overflow-hidden backdrop-blur-sm"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-15 transition-opacity duration-500">
                    <Mail size={140} className="text-white rotate-12" />
                </div>
                <div className="relative z-10 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-[#fcca46] to-transparent rounded-full" />
                      <h3 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em] font-semibold">Get In Touch</h3>
                    </div>
                    <a href="mailto:pratulkumar21@gmail.com" className="block text-xl md:text-2xl lg:text-3xl font-black text-zinc-100 hover:text-[#fcca46] transition-colors duration-300 break-all leading-tight">
                        pratulkumar21@gmail.com
                    </a>
                </div>
            </motion.div>

            {/* INFO GRID */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                <motion.div 
                  whileHover={{ y: -2, borderColor: "rgba(252, 202, 70, 0.3)" }}
                  className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between h-36 backdrop-blur-sm"
                >
                    <div className="w-6 h-6 rounded-lg bg-[#fcca46]/10 flex items-center justify-center">
                      <Phone className="text-[#fcca46]" size={16} />
                    </div>
                    <div>
                        <div className="text-[8px] font-mono uppercase text-zinc-500 mb-1.5 tracking-wider">Phone</div>
                        <a href="tel:+919534177010" className="text-base md:text-lg font-bold text-zinc-100 hover:text-[#fcca46] transition-colors">
                          +91 9534177010
                        </a>
                    </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -2, borderColor: "rgba(252, 202, 70, 0.3)" }}
                  className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between h-36 backdrop-blur-sm"
                >
                    <div className="w-6 h-6 rounded-lg bg-[#fcca46]/10 flex items-center justify-center">
                      <MapPin className="text-[#fcca46]" size={16} />
                    </div>
                    <div>
                        <div className="text-[8px] font-mono uppercase text-zinc-500 mb-1.5 tracking-wider">Location</div>
                        <div className="text-base md:text-lg font-bold text-zinc-100">Bhopal, India</div>
                    </div>
                </motion.div>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div variants={itemVariants} className="grid grid-cols-4 gap-3">
                {[
                  { icon: <Github size={18}/>, url: 'https://github.com/Pratul-Kumar', label: 'GitHub' },
                  { icon: <Linkedin size={18}/>, url: 'https://www.linkedin.com/in/pratul21/', label: 'LinkedIn' },
                  { icon: <Instagram size={18}/>, url: 'https://www.instagram.com/pratul._.pandey/', label: 'Instagram' },
                  { icon: <Palette size={18}/>, url: '#', label: 'Portfolio' },
                ].map((item, i) => (
                    <motion.a 
                      key={i} 
                      href={item.url} 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="h-14 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-400 hover:text-[#fcca46] hover:bg-[#fcca46]/10 hover:border-[#fcca46]/40 transition-all duration-300 backdrop-blur-sm group"
                      title={item.label}
                    >
                        <motion.div
                          whileHover={{ rotate: 12 }}
                          className="group-hover:drop-shadow-[0_0_8px_rgba(252,202,70,0.6)]"
                        >
                          {item.icon}
                        </motion.div>
                    </motion.a>
                ))}
            </motion.div>

          </div>
        </motion.div>

        {/* FOOTER DIVIDER & BOTTOM BAR */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 pt-8 border-t border-white/5 origin-left"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em] font-semibold">
                © {currentYear} Pratul Kumar • Designed & Built with Code
              </p>

              <motion.button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.15em] text-zinc-500 hover:text-[#fcca46] transition-colors duration-300 font-semibold"
              >
                Back_To_Top <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute left-[-5%] bottom-[-5%] opacity-[0.015] text-[15vw] font-black text-white pointer-events-none select-none tracking-tighter uppercase italic leading-none">
        Connect
      </div>
      <div className="absolute right-[-5%] top-1/2 opacity-[0.02] text-[12vw] font-black text-[#fcca46] pointer-events-none select-none tracking-tighter uppercase italic">
        Ready
      </div>
    </footer>
  );
};

export default Contact;