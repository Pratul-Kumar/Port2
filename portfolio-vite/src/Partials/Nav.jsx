import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Achievements', to: 'achievements' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Nav = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Detect scroll to adjust glass transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-4xl">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          relative flex items-center justify-between w-full px-4 py-3 md:px-2 md:py-2 rounded-full 
          transition-all duration-500 ease-in-out
          border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]
          ${isScrolled || isOpen ? 'bg-black/60 backdrop-blur-2xl' : 'bg-white/5 backdrop-blur-md'}
        `}
      >
        {/* Branding Logo */}
        <div className="pl-2 md:pl-6 pr-4 md:pr-8 md:border-r border-white/10 group cursor-pointer">
          <Link to="home" smooth={true}>
            <span className="text-lg font-black tracking-tighter uppercase text-white group-hover:text-[#fcca46] transition-colors">
              P<span className="text-[#fcca46] group-hover:text-white">.</span>
            </span>
          </Link>
        </div>

        {/* --- DESKTOP NAVIGATION (Hidden on Mobile) --- */}
        <div
          className="hidden md:flex flex-1 justify-center items-center gap-2"
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
              <span className={`
                relative z-10 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-300
                ${hoveredLink === link.name ? 'text-black' : 'text-zinc-400'}
              `}>
                {link.name}
              </span>
              <AnimatePresence>
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="nav-pill"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-0 rounded-full bg-[#fcca46]"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </AnimatePresence>
            </Link>
          ))}
        </div>

        {/* --- DESKTOP SOCIALS (Hidden on Mobile) --- */}
        <div className="hidden md:flex pr-4 pl-4 items-center gap-4 text-zinc-500">
          <a href="#" className="hover:text-[#fcca46] transition-colors"><i className="ri-github-line text-lg"></i></a>
          <a href="#" className="hover:text-[#fcca46] transition-colors"><i className="ri-linkedin-line text-lg"></i></a>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none p-2"
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }} 
                className="w-full h-0.5 bg-white rounded-full origin-center transition-all"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }} 
                className="w-full h-0.5 bg-[#fcca46] rounded-full transition-all"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }} 
                className="w-full h-0.5 bg-white rounded-full origin-center transition-all"
              />
            </div>
          </button>
        </div>
      </motion.div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-0 w-full mt-2 p-4 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl flex flex-col items-center gap-4 md:hidden overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)} // Close menu on click
                className="w-full text-center py-2"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-300 hover:text-[#fcca46] transition-colors"
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}

            {/* Mobile Socials */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="flex gap-6 mt-2 pt-4 border-t border-white/10 w-full justify-center text-zinc-400"
            >
               <a href="#" className="hover:text-[#fcca46] transition-colors"><i className="ri-github-line text-xl"></i></a>
               <a href="#" className="hover:text-[#fcca46] transition-colors"><i className="ri-linkedin-line text-xl"></i></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;