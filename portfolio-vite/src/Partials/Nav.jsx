import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Nav = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to adjust glass transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-4xl px-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          relative flex items-center justify-between w-full px-2 py-2 rounded-full 
          transition-all duration-500 ease-in-out
          border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]
          ${isScrolled ? 'bg-black/40 backdrop-blur-2xl' : 'bg-white/5 backdrop-blur-md'}
        `}
      >
        {/* Branding Logo */}
        <div className="pl-6 pr-8 border-r border-white/10 group cursor-pointer">
          <Link to="home" smooth={true}>
            <span className="text-lg font-black tracking-tighter uppercase text-white group-hover:text-[#fcca46] transition-colors">
              P<span className="text-[#fcca46] group-hover:text-white">.</span>
            </span>
          </Link>
        </div>

        {/* Navigation Items - Centered */}
        <div 
          className="flex flex-1 justify-center items-center gap-2" 
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              onMouseEnter={() => setHoveredLink(link.name)}
              className="relative px-6 py-2.5 cursor-pointer transition-all"
            >
              {/* Text Link */}
              <span className={`
                relative z-10 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300
                ${hoveredLink === link.name ? 'text-black' : 'text-zinc-400'}
              `}>
                {link.name}
              </span>

              {/* Animated Background Pill (Liquid Motion) */}
              <AnimatePresence>
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="nav-pill"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-0 rounded-full bg-[#fcca46] "
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </AnimatePresence>
            </Link>
          ))}
        </div>

        {/* Social / Extra Icon (End Cap) */}
        <div className="hidden md:flex pr-4 pl-4 items-center gap-4 text-zinc-500">
           <a href="#" className="hover:text-[#fcca46] transition-colors"><i className="ri-github-line text-lg"></i></a>
           <a href="#" className="hover:text-[#fcca46] transition-colors"><i className="ri-linkedin-line text-lg"></i></a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;