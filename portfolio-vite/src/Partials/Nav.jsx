import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToId } from "../utils/scrollTo";
import { Linkedin, Github, Instagram, ArrowUpRight, Mail, Terminal, Layout } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Achievements", to: "achievements" },
  { name: "Contact", to: "contact" },
];

const socialLinks = [
  { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/pratul21/", label: "LinkedIn" },
  { icon: <Github size={20} />, url: "https://github.com/Pratul-Kumar", label: "Github" },
  { icon: <Instagram size={20} />, url: "https://instagram.com/pratul._.pandey/", label: "Instagram" },
  { icon: <Mail size={20} />, url: "mailto:pratulkumar21@gmail.com", label: "Email" },
];

const touchStyle = { touchAction: "manipulation", WebkitTapHighlightColor: "transparent" };

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTerminalMode, setIsTerminalMode] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.to));
  const pendingScrollRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Check initial body class on mount (for page reloads)
    if (document.body.classList.contains('terminal-mode')) {
      setIsTerminalMode(true);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleToggle = () => toggleTerminalMode();
    window.addEventListener('toggle-terminal-mode', handleToggle);
    return () => window.removeEventListener('toggle-terminal-mode', handleToggle);
  }, []);

  const toggleTerminalMode = () => {
    setIsTerminalMode(prev => {
      const next = !prev;
      if (next) {
        document.body.classList.add('terminal-mode');
      } else {
        document.body.classList.remove('terminal-mode');
      }
      return next;
    });
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const prevent = (e) => e.preventDefault();
      document.addEventListener("touchmove", prevent, { passive: false });
      return () => {
        document.removeEventListener("touchmove", prevent);
        document.body.style.overflow = "";
      };
    } else {
      document.body.style.overflow = "";
      if (pendingScrollRef.current) {
        const targetId = pendingScrollRef.current;
        pendingScrollRef.current = null;
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (!el) return;
          const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - 80);
          window.scrollTo({ top, behavior: "smooth" });
        }, 50);
      }
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleLinkClick = useCallback((e, to) => {
    e.preventDefault();
    if (isOpen) {
      pendingScrollRef.current = to;
      setIsOpen(false);
    } else {
      scrollToId(to, { offset: -80, duration: 1.0 });
    }
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[99999] px-4 py-4 md:px-8 transition-all duration-500"
      style={{ isolation: "isolate" }}
    >
      <div className={`
        mx-auto max-w-7xl flex items-center justify-between
        px-6 md:px-8 py-3 rounded-2xl transition-all duration-300 border
        ${isScrolled
          ? "bg-white/70 backdrop-blur-md border-gray-200 shadow-sm"
          : "bg-transparent border-transparent"}
      `}>

        <button
          type="button"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="cursor-pointer group flex items-center gap-2"
          style={touchStyle}
        >
          <div className="w-8 h-8 rounded-lg bg-[#0A0A0A] flex items-center justify-center text-white font-heading font-black">
            P
          </div>
          <span className="text-xl font-heading font-bold tracking-tight text-[#0A0A0A]">
            Pratul<span className="text-[#FF6B00]">.</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8 bg-white/50 px-6 py-2 rounded-full border border-gray-200/50">
          {navLinks.map((link) => {
            const isActive = activeSection === link.to;
            return (
              <button
                type="button"
                key={link.to}
                onClick={(e) => handleLinkClick(e, link.to)}
                className="relative cursor-pointer group py-1"
                style={touchStyle}
              >
                <span className={`
                  text-xs font-mono uppercase tracking-widest font-medium transition-colors duration-300
                  ${isActive ? "text-[#FF6B00]" : "text-gray-500 hover:text-[#0A0A0A]"}
                `}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navLine"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FF6B00]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4">

          {/* Training vs Inference Mode Toggle */}
          {/* <button
             onClick={toggleTerminalMode}
             className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-widest font-bold transition-all border ${isTerminalMode ? 'bg-[#10B981] text-black border-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-gray-100/80 text-gray-500 border-gray-200 hover:text-black hover:border-gray-300'}`}
             title={isTerminalMode ? "Switch to Inference Mode (Design UI)" : "Switch to Training Mode (IDE Terminal)"}
          >
             {isTerminalMode ? <Terminal size={14} /> : <Layout size={14} />}
             <span>{isTerminalMode ? 'Training' : 'Inference'}</span>
          </button> */}

          <motion.a
            href="mailto:pratulkumar21@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] text-white rounded-lg text-xs font-mono uppercase tracking-widest font-bold hover:bg-[#FF6B00] transition-colors shadow-sm"
          >
            Hire Me <ArrowUpRight size={14} />
          </motion.a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(prev => !prev)}
            className={`flex md:hidden flex-col gap-1.5 p-3 min-w-[48px] min-h-[48px] items-center justify-center cursor-pointer rounded-lg border transition-colors ${isScrolled ? 'bg-white/50 border-gray-200' : 'bg-transparent border-transparent'}`}
            aria-label="Toggle menu"
            style={touchStyle}
          >
            <motion.span animate={isOpen ? { rotate: 45, y: 8, backgroundColor: "#FF6B00" } : { rotate: 0, y: 0, backgroundColor: "#0A0A0A" }} className="block w-6 h-[2px] rounded-full" />
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-4 h-[2px] bg-[#0A0A0A] self-end rounded-full" />
            <motion.span animate={isOpen ? { rotate: -45, y: -8, backgroundColor: "#FF6B00" } : { rotate: 0, y: 0, backgroundColor: "#0A0A0A" }} className="block w-6 h-[2px] rounded-full" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-24 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl z-[99998] flex flex-col p-6 shadow-2xl md:hidden"
            style={{ touchAction: "none" }}
          >
            <div className="flex flex-col gap-2 relative z-10 w-full mb-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  className="w-full"
                >
                  <button
                    type="button"
                    onClick={(e) => handleLinkClick(e, link.to)}
                    className="flex justify-between items-center text-xl font-heading font-bold text-[#0A0A0A] hover:text-[#FF6B00] transition-colors w-full py-3 border-b border-gray-100"
                    style={touchStyle}
                  >
                    {link.name}
                    <ArrowUpRight size={16} className="text-gray-300" />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4 mt-auto">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (i * 0.05) }}
                  className="flex items-center justify-center p-3 bg-gray-50 border border-gray-200 rounded-xl hover:bg-[#FF6B00] hover:text-white transition-all text-gray-500"
                  style={touchStyle}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;