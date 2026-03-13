import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Layout, Globe, ArrowUpRight } from 'lucide-react';

const About = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen flex items-center py-16 md:py-24 overflow-hidden text-[#0A0A0A] border-t border-dashed border-gray-200">
      
      {/* Background Graphic removed - now global */}

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-[#FF6B00] font-mono text-sm font-medium">01</span>
          <div className="h-[1px] w-12 bg-gray-300" />
          <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">
            About Me
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT COLUMN: MINIMAL IMAGE --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            {/* Minimal Photo Frame */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200 bg-[#F7F7F7]">
              <img 
                src="./Profile.jpeg" 
                alt="Pratul Kumar" 
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
              />
              
              {/* Subtle Tech Label Overlay */}
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md border border-gray-200 text-[#0A0A0A] px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest pointer-events-none flex items-center">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse" />
                System_Active
              </div>
            </div>

            {/* Dotted Accent Block behind image */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-dotted-dark opacity-10 rounded-2xl -z-10" />
          </motion.div>

          {/* --- RIGHT COLUMN: CONTENT --- */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight leading-[1.1] mb-8"
            >
              Data Science meets <br />
              <span style={{ fontFamily: 'var(--font-dotted)' }} className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] to-[#FF9E5E] tracking-[0.05em] drop-shadow-sm">Engineered Design.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="space-y-8"
            >
              <div className="pl-6 border-l-2 border-[#FF6B00]">
                <p className="text-xl md:text-2xl leading-relaxed text-[#0A0A0A] font-body">
                  I specialize in converting raw data into <span className="text-[#FF6B00] font-medium">visual intelligence</span>. 
                  My work lives at the intersection of Python engineering and human-centered Figma prototyping.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                <TechCard 
                  icon={Layout} 
                  title="Interface Design" 
                  desc="Figma / Framer / Motion" 
                />
                <TechCard 
                  icon={Globe} 
                  title="Leadership" 
                  desc="Student VP / Mentor" 
                />
              </div>

              <div className="pt-8">
                 <p className="text-[11px] font-mono font-medium text-gray-400 uppercase tracking-widest flex items-center gap-3">
                   <ArrowUpRight size={16} className="text-[#FF6B00]" />
                   Crafting the future of intelligent interfaces
                 </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Minimal Tech Cards ---
const TechCard = ({ icon: Icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="p-6 bg-white/40 backdrop-blur-sm border border-gray-100 rounded-xl group hover:border-[#FF6B00]/30 hover:bg-white/60 hover:shadow-lg hover:shadow-[#FF6B00]/5 overflow-hidden relative cursor-default"
  >
    {/* Subtle hover dot reveal */}
    <div className="absolute inset-0 bg-dotted-dark opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />
    
    <div className="relative z-10 flex items-start gap-4">
      <div className="mt-1 text-gray-400 group-hover:text-[#FF6B00] transition-colors duration-300">
        <Icon size={20} strokeWidth={2} />
      </div>
      <div>
        <h4 className="text-base font-bold font-heading text-[#0A0A0A] mb-1">{title}</h4>
        <p className="text-xs font-medium font-body text-gray-500">{desc}</p>
      </div>
    </div>
  </motion.div>
);

export default About;