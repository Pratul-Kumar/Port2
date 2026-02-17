import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { Star, Crown, Megaphone, Sparkles } from "lucide-react";

/* =========================
   DATA
========================= */

const achievementsData = [
  {
    role: "Vice President",
    organization: "Student Council",
    period: "2025 - 2026",
    icon: <Crown size={24} strokeWidth={3} />,
    description:
      "Leading student initiatives and managing large-scale campus operations while bridging administration and students.",
    tags: ["Leadership", "Management"]
  },
  {
    role: "Co-Founder & CMO",
    organization: "Zintrix Technologies",
    period: "Present",
    icon: <Megaphone size={24} strokeWidth={3} />,
    description:
      "Building scalable digital systems and growth-focused marketing infrastructures.",
    tags: ["Growth", "Strategy", "Tech"]
  },
  {
    role: "Open Source Mentor",
    organization: "GSSOC 2025",
    period: "2025",
    icon: <Star size={24} strokeWidth={3} />,
    description:
      "Mentoring global contributors and conducting high-level engineering reviews.",
    tags: ["Open Source", "Mentorship"]
  },
  {
    role: "Co-Founder",
    organization: "Raina News",
    period: "2020-2026",
    icon: <Megaphone size={24} strokeWidth={3} />,
    description:
      "Scaled a digital news platform to 120K+ followers across social platforms.",
    tags: ["Media", "Community"]
  }
];

/* =========================
   CARD
========================= */

const AchievementCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col h-full cursor-pointer"
    >
      {/* Offset Shadow */}
      {/* <div className="absolute  translate-x-2 translate-y-2 rounded-2xl bg-[#000000] hover:bg-[#ff7f2d] transition-transform group-hover:translate-x-3 group-hover:translate-y-3" /> */}

      {/* Main Card */}
      <div className="relative p-10  rounded-2xl border-2 border-[#1A1A1A] bg-white/50 shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-[4px_4px_0px_0px_#ff7f2d]/80 backdrop-blur-sm flex flex-col h-full">

        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div className="p-4 bg-[#EF9144] border-2 border-[#1A1A1A] rounded-xl shadow-[4px_4px_0px_0px_#1A1A1A] text-[#1A1A1A]">
            {item.icon}
          </div>

          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]/50">
            {item.period}
          </span>
        </div>

        {/* Title */}
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none text-[#1A1A1A] group-hover:text-[#EF9144] transition-colors">
            {item.role}
          </h3>

          <p className="text-[10px] font-black text-[#EF9144] uppercase tracking-[0.3em] mt-3 font-mono">
            {item.organization}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-600 leading-relaxed mb-10 flex-grow">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-6 border-t-2 border-[#E8E6D9]">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[9px] px-3 py-1 border border-[#1A1A1A]
                         font-black uppercase tracking-widest
                         bg-[#E8E6D9]/70 text-[#1A1A1A]"
            >
              {tag}
            </span>
          ))}
        </div>

        <Sparkles
          className="absolute bottom-6 right-6 text-[#EF9144] opacity-5 group-hover:opacity-20 transition-opacity"
          size={36}
        />
      </div>
    </motion.div>
  );
};

/* =========================
   SECTION
========================= */

const Achievements = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  return (
    <section
      id="achievements"
      className="relative py-32 bg-[#E8E6D9] overflow-hidden"
    >
      {/* ===== ORANGE ATMOSPHERIC BACKDROP ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] 
                     opacity-40 blur-[140px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(239,145,68,0.6) 0%, rgba(239,145,68,0.25) 40%, transparent 70%)"
          }}
        />
        <div
          className="absolute bottom-[-15%] right-[-10%] w-[70vw] h-[70vw] 
                     opacity-30 blur-[120px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(239,145,68,0.5) 0%, rgba(239,145,68,0.15) 50%, transparent 75%)"
          }}
        />
      </div>

      {/* ===== PARALLAX WATERMARK ===== */}
      <motion.div
        style={{ y: smoothY }}
        className="absolute inset-0 pointer-events-none select-none"
      >
        <div className="absolute top-[15%] left-[3%] opacity-[0.05] text-[22vw] font-black uppercase tracking-tighter -rotate-6 text-[#1A1A1A]">
          Honors
        </div>

        <div className="absolute bottom-[10%] right-[5%] opacity-[0.05] text-[14vw] font-black uppercase tracking-tighter rotate-12 text-[#1A1A1A]">
          Recognition
        </div>
      </motion.div>

      <div className="relative max-w-8xl mx-auto lg:px-35 px-6 z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-[#EF9144]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]/60">
              My Achievements
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-[#1A1A1A]">
            Honors & <br />
            <span className="text-[#EF9144] font-serif italic font-light lowercase">
              Recognitions.
            </span>
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {achievementsData.map((item, idx) => (
            <AchievementCard key={idx} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
