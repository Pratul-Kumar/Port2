import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, ArrowUpRight, Palette } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden bg-[#E8E6D9] text-[#1A1A1A]">
      
      {/* 1. LAYERED BACKGROUND GRADIENTS (Matching site theme) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft orange warmth from the bottom-left */}
        <div 
          className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] opacity-40 blur-[120px] rounded-full"
          style={{ background: 'radial-gradient(circle, #EF9144 0%, transparent 70%)' }}
        />
        {/* Ambient tan glow from the top-right */}
        <div 
          className="absolute top-[-5%] right-[-5%] w-[60vw] h-[60vw] opacity-30 blur-[100px] rounded-full"
          style={{ background: 'radial-gradient(circle, #D4CDB3 0%, transparent 70%)' }}
        />
      </div>

      {/* 2. TEXTURE & WATERMARK OVERLAYS */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Paper Grain Texture */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        {/* Background Accent Watermark */}
        <div className="absolute right-[-2%] bottom-[5%] opacity-[0.06] text-[20vw] font-black pointer-events-none select-none tracking-tighter uppercase leading-none italic">
          Connect
        </div>

        {/* --- FOUR-POINT LINE STARS WATERMARKS --- */}
        <div className="absolute top-[20%] left-[5%] opacity-[0.05] text-[#EF9144]">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
             <path d="M50 0L52 48L100 50L52 52L50 100L48 52L0 50L48 48L50 0Z" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute bottom-[10%] right-[15%] opacity-[0.03] text-[#EF9144] rotate-[45deg]">
          <svg width="300" height="300" viewBox="0 0 100 100" fill="none">
             <path d="M50 0L52 48L100 50L52 52L50 100L48 52L0 50L48 48L50 0Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* EDITORIAL MARQUEE BANNER */}
      <div className="absolute top-0 w-full overflow-hidden whitespace-nowrap border-b-2 border-[#1A1A1A] bg-[#1A1A1A] py-3 z-20">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="inline-block"
        >
          {[...Array(12)].map((_, i) => (
            <span key={i} className="mx-12 text-[10px] font-black uppercase tracking-[0.4em] text-[#E8E6D9] whitespace-nowrap">
              ◆ Open For Opportunities ◆ Design Architect ◆ Building Logic ◆ 
            </span>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-8xl lg:px-35 px-6 lg:px-12 relative z-10 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* LEFT COLUMN: EDITORIAL HEADLINE */}
          <div className="lg:col-span-7 space-y-10 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <span className="h-[2px] w-12 bg-[#EF9144]" />
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50 text-[#1A1A1A]">Section_04</span>
              </div>
              
              <div>
                <h2 className="text-7xl md:text-9xl lg:text-[14vh] font-black uppercase tracking-tighter leading-[0.8] mb-4 text-[#1A1A1A]">
                  Let's
                </h2>
                <p className="text-5xl md:text-9xl lg:text-[12vh] font-black uppercase tracking-tighter leading-[0.8]">
                  <span className="text-[#EF9144] italic font-serif font-light lowercase">
                    <Typewriter
                      words={['connect.', 'build.', 'collaborate.', 'create.']}
                      loop={0} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={40} delaySpeed={2000}
                    />
                  </span>
                </p>
              </div>
            </div>
            
            <div className="max-w-xl border-l-4 border-[#EF9144] pl-8">
              <p className="text-xl md:text-2xl font-medium leading-relaxed opacity-80 text-[#1A1A1A]">
                Merging <span className="font-black underline decoration-2 underline-offset-4 decoration-[#EF9144]">technical precision</span> with creative innovation. Based in India • Designing for the global interface.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: BRUTALIST CONTACT CARDS */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            
            {/* MAIN EMAIL CARD */}
            <motion.div 
              whileHover={{ x: -4, y: -4 }}
              className="p-10 bg-white/40 backdrop-blur-md border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] hover:shadow-[12px_12px_0px_0px_#EF9144] transition-all group relative overflow-hidden"
            >
                <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <Mail size={160} strokeWidth={3} />
                </div>
                <div className="relative z-10 space-y-4">
                    <h3 className="text-[#EF9144] font-black text-xs uppercase tracking-widest">Inquiries</h3>
                    <a href="mailto:pratulkumar21@gmail.com" className="block text-xl md:text-3xl hover:underline decoration-4 underline-offset-8 break-all leading-none text-[#1A1A1A]">
                        pratulkumar21@gmail.com
                    </a>
                </div>
            </motion.div>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-white/40 backdrop-blur-md border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] flex flex-col justify-between h-40">
                    <div className="bg-[#EF9144] w-fit p-2 border-2 border-[#1A1A1A] rounded-lg shadow-[3px_3px_0px_0px_#1A1A1A]">
                      <Phone size={18} strokeWidth={3} />
                    </div>
                    <div>
                        <div className="text-[9px] mt-1 font-black uppercase text-[#1A1A1A]/40 mb-1 tracking-widest">Phone</div>
                        <a href="tel:+919534177010" className="lg:text-base text-sm font-black hover:text-[#EF9144] text-[#1A1A1A]">
                          9534177010
                        </a>
                    </div>
                </div>

                <div className="p-8 bg-white/40 backdrop-blur-md border-2 border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A] flex flex-col justify-between h-40">
                    <div className="bg-[#1A1A1A] text-white w-fit p-2 border-2 border-[#1A1A1A] rounded-lg shadow-[3px_3px_0px_0px_#EF9144]">
                      <MapPin size={18} strokeWidth={3} />
                    </div>
                    <div>
                        <div className="text-[9px] font-black uppercase text-[#1A1A1A]/40 mb-1 tracking-widest">Location</div>
                        <div className="text-base font-black text-[#1A1A1A]">Bhopal, India</div>
                    </div>
                </div>
            </div>

            {/* SOCIAL BAR */}
            <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: <Github size={20} strokeWidth={3}/>, url: 'https://github.com/Pratul-Kumar' },
                  { icon: <Linkedin size={20} strokeWidth={3}/>, url: 'https://linkedin.com/in/pratul21/' },
                  { icon: <Instagram size={20} strokeWidth={3}/>, url: 'https://instagram.com/pratul._.pandey/' },
                ].map((item, i) => (
                  <motion.a 
                    key={i} 
                    href={item.url} 
                    target="_blank" 
                    whileHover={{ scale: 1.1, backgroundColor: '#EF9144' }}
                    className="h-14 bg-white/40 backdrop-blur-md border-2 border-[#1A1A1A] flex items-center justify-center transition-all shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-none text-[#1A1A1A]"
                  >
                    {item.icon}
                  </motion.a>
                ))}
            </div>

          </div>
        </div>

        {/* FOOTER BOTTOM BAR */}
        <div className="mt-24 pt-10 border-t-2 border-[#1A1A1A]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 text-[#1A1A1A]">
                © {currentYear} Pratul Kumar • Designed & Built as a Visual Architect
              </p>

              <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest hover:text-[#EF9144] transition-colors group text-[#1A1A1A]"
              >
                Back To Top <div className="bg-[#1A1A1A] text-white p-2 rounded-full group-hover:bg-[#EF9144] transition-colors"><ArrowUpRight size={12} /></div>
              </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;