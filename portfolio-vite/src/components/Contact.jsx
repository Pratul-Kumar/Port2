import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Figma, Instagram, ArrowUpRight, Globe, Palette } from 'lucide-react';

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
    <footer id="contact" className="relative pt-32 pb-12 overflow-hidden border-t border-white/5 bg-[#050505]">
      
      {/* 1. TOP MARQUEE (The "Live" Separator) */}
      <div className="absolute top-0 w-full overflow-hidden whitespace-nowrap border-b border-white/5 bg-white/[0.01] py-3">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-4 text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-700">
              Available_for_Projects • Open_Source_Contributor • UI_UX_Architect • AI_ML_Explorer • 
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-8xl px-6 lg:px-20 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          
          {/* 2. MAIN HEADER (Left Column) */}
          <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-12 bg-[#fcca46]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#fcca46] font-bold">Uplink_Established</span>
              </div>
              <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85]">
                Let's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcca46] to-[#b38a2e] italic font-light lowercase">
                  Connect.
                </span>
              </h2>
            </div>
            
            <p className="max-w-md text-zinc-500 text-lg font-light leading-relaxed">
              Merging technical logic with aesthetic intuition. Currently based in Bhopal, reaching out to the global tech ecosystem.
            </p>
          </motion.div>

          {/* 3. CONTACT GRID (Right Column) */}
          <div className="md:col-span-12 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Direct Link Modules */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h4 className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 font-bold">Communications</h4>
                <div className="space-y-4">
                  <a href="mailto:pratulkumar21@gmail.com" className="group flex flex-col gap-1 transition-colors">
                    <span className="text-[10px] font-mono uppercase text-zinc-600 group-hover:text-[#fcca46]">Email_Client</span>
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white">pratulkumar21@gmail.com</span>
                  </a>
                  <div className="group flex flex-col gap-1 transition-colors">
                    <span className="text-[10px] font-mono uppercase text-zinc-600 group-hover:text-[#fcca46]">Voice_Line</span>
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white">+91 9534177010</span>
                  </div>
                  <div className="group flex flex-col gap-1 transition-colors">
                    <span className="text-[10px] font-mono uppercase text-zinc-600 group-hover:text-[#fcca46]">Location_Ping</span>
                    <span className="text-sm font-medium text-zinc-300 group-hover:text-white">Bhopal, MP, India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Grid Modules */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h4 className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-500 font-bold">Cyber_Space</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Github', icon: <Github size={14}/>, url: 'https://github.com/Pratul-Kumar' },
                  { name: 'LinkedIn', icon: <Linkedin size={14}/>, url: 'https://www.linkedin.com/in/pratul21/' },
                  { name: 'Instagram', icon: <Instagram size={14}/>, url: 'https://www.instagram.com/pratul._.pandey/' },
                  { name: 'Figma', icon: <Palette size={14}/>, url: '#' },
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] hover:border-[#fcca46]/30 transition-all group overflow-hidden relative"
                  >
                    <span className="text-[9px] font-bold uppercase text-zinc-500 group-hover:text-white relative z-10">{social.name}</span>
                    <div className="text-zinc-600 group-hover:text-[#fcca46] group-hover:scale-110 transition-all relative z-10">{social.icon}</div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#fcca46]/0 via-[#fcca46]/5 to-[#fcca46]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 4. FOOTER BOTTOM (System Specs) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div className="space-y-4 w-full md:w-auto">
            <div className="flex items-center gap-6">
               <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest leading-relaxed">
                © {currentYear} Pratul Kumar <br /> 
                Built_with: React • Framer_Motion • Tailwind
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-end gap-6">
            <div className="flex gap-4">
               <div className="h-1 w-1 rounded-full bg-zinc-800" />
               <div className="h-1 w-1 rounded-full bg-zinc-800" />
               <div className="h-1 w-1 rounded-full bg-[#fcca46] shadow-[0_0_8px_#fcca46]" />
            </div>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 bg-white/5 text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] hover:text-[#fcca46] hover:border-[#fcca46]/30 transition-all"
            >
              Return_to_Top <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Text */}
      <div className="absolute left-[-2%] bottom-[-5%] opacity-[0.02] text-[20vw] font-black text-white pointer-events-none select-none tracking-tighter uppercase italic">
        Systems_Active
      </div>
    </footer>
  );
};

export default Contact;