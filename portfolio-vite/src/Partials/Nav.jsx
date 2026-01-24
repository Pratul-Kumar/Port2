import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-scroll";
import { useActiveSection } from "../hooks/useActiveSection";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Achievements", to: "achievements" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const sectionIds = navLinks.map(l => l.to);

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const reduceMotion = useReducedMotion();

  const isDesktop = useMemo(() => window.innerWidth >= 768, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-4xl">
      {/* ================= NAV BAR ================= */}
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        className={`
          flex items-center justify-between rounded-full px-4 py-3
          border border-white/10 backdrop-blur-xl
          shadow-[0_8px_32px_rgba(0,0,0,0.8)]
          transition-colors duration-200
          ${isScrolled || isOpen ? "bg-black/70" : "bg-white/5"}
        `}
      >
        {/* Logo */}
        <Link
          to="home"
          smooth={!isDesktop}
          duration={isDesktop ? 0 : 300}
          offset={-80}
          className="pl-2 cursor-pointer"
        >
          <span className="text-lg font-black uppercase tracking-tight text-white">
            P<span className="text-[#fcca46]">.</span>
          </span>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden md:flex flex-1 justify-center gap-2">
          {navLinks.map(link => {
            const isActive = activeSection === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                smooth={!isDesktop}
                duration={isDesktop ? 0 : 300}
                offset={-80}
                className="relative px-6 py-2.5 cursor-pointer"
              >
                <span
                  className={`
                    relative z-10 text-[10px] font-black uppercase tracking-[0.2em]
                    transition-colors
                    ${isActive ? "text-black" : "text-zinc-400 hover:text-white"}
                  `}
                >
                  {link.name}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    initial={false}
                    className="absolute inset-0 rounded-full bg-[#fcca46]"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 300, damping: 30 }
                    }
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen(v => !v)}
          className="md:hidden p-3 text-white"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              className="h-0.5 bg-white rounded"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5 bg-[#fcca46] rounded"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className="h-0.5 bg-white rounded"
            />
          </div>
        </button>
      </motion.div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 8 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="
              md:hidden mt-2 rounded-2xl bg-black/85 backdrop-blur-xl
              border border-white/10 shadow-2xl
              flex flex-col items-center py-4 gap-3
            "
          >
            {navLinks.map(link => {
              const isActive = activeSection === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={300}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className={`
                    w-full text-center py-3 text-sm font-bold uppercase tracking-[0.2em]
                    transition-colors
                    ${isActive ? "text-[#fcca46]" : "text-zinc-300"}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
