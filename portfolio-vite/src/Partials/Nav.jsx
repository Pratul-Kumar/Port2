import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Using Lenis-powered programmatic scroll instead of react-scroll
import { scrollToId } from "../utils/scrollTo";
import { Linkedin, Github, Instagram, ArrowUpRight, Mail } from "lucide-react";
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

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.to));

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] px-4 py-6 md:px-12 transition-all duration-500">
      <div className={`
        mx-auto max-w-7xl flex items-center justify-between
        px-6 md:px-10 py-4 rounded-2xl transition-all duration-500 border-2
        ${isScrolled 
          ? "bg-[#1A1A1A] border-[#1A1A1A] shadow-[20px_20px_60px_rgba(0,0,0,0.15)]" 
          : "bg-[#E8E6D9] border-[#1A1A1A] shadow-[8px_8px_0px_0px_#1A1A1A]"}
      `}>
        
        <button onClick={() => scrollToId('home', { offset: -100, duration: 1.0 })} className="cursor-pointer group">
          <div className="flex items-center gap-2">
            <span className={`text-xl md:text-2xl font-serif italic font-medium tracking-tighter transition-colors duration-500
              ${isScrolled ? "text-[#E8E6D9]" : "text-[#1A1A1A]"}`}>
              Portfolio<span className="text-[#EF9144] font-sans not-italic">.</span>
            </span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.to;
            return (
              <button
                key={link.to}
                onClick={() => scrollToId(link.to, { offset: -80, duration: 1.0 })}
                className="relative cursor-pointer group py-1"
              >
                <span className={`
                  text-[11px] uppercase tracking-[0.3em] font-black transition-colors duration-300
                  ${isActive ? "text-[#EF9144]" : (isScrolled ? "text-zinc-400 hover:text-white" : "text-zinc-500 hover:text-[#1A1A1A]")}
                `}>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="navLine"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#EF9144]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <motion.a
            href="https://www.linkedin.com/in/pratul21/"
            target="_blank"
            whileHover={{ y: -2 }}
            className={`hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black transition-colors duration-500
              ${isScrolled ? "text-[#E8E6D9]" : "text-[#1A1A1A]"}`}
          >
            Connect <ArrowUpRight size={14} className="text-[#EF9144]" />
          </motion.a>

          {/* Mobile hamburger: shows on small screens, hides on md+ */}
          <button onClick={() => setIsOpen(!isOpen)} className="flex md:hidden flex-col gap-1.5 p-2 z-[10000] min-h-[44px]">
            <motion.span animate={isOpen ? { rotate: 45, y: 8, backgroundColor: "#E8E6D9" } : { rotate: 0, y: 0, backgroundColor: isScrolled ? "#FFF" : "#000" }} className="w-7 h-[2px]" />
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-[2px] bg-[#EF9144] self-end" />
            <motion.span animate={isOpen ? { rotate: -45, y: -8, backgroundColor: "#E8E6D9" } : { rotate: 0, y: 0, backgroundColor: isScrolled ? "#FFF" : "#000" }} className="w-7 h-[2px]" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 bg-[#1A1A1A] z-[9998] flex flex-col p-8 pt-32 justify-between"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[40vw] font-black text-white pointer-events-none select-none">
              MENU
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              <p className="text-[#EF9144] font-mono text-[10px] uppercase tracking-[0.5em] mb-2">Navigation_Index</p>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <button
                    onClick={() => { scrollToId(link.to, { offset: -70, duration: 1.0 }); setIsOpen(false); }}
                    className="text-5xl font-serif italic text-[#E8E6D9] hover:text-[#EF9144] transition-all block group text-left"
                  >
                    <span className="text-lg font-sans not-italic mr-4 opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                    {link.name}
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 border-t border-white/10 pt-8 pb-4">
              <p className="text-white/30 font-black text-[9px] uppercase tracking-[0.4em] mb-6">Connect_Systems</p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="group flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#EF9144] hover:border-[#EF9144] transition-all duration-300"
                  >
                    <div className="text-[#E8E6D9] group-hover:text-[#1A1A1A] transition-colors">
                      {social.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#E8E6D9] group-hover:text-[#1A1A1A]">
                        {social.label}
                      </span>
                      <span className="text-[8px] font-mono text-white/20 group-hover:text-[#1A1A1A]/40 uppercase">
                        External_Link
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;