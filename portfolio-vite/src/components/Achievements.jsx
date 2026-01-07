import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Star, Crown, Megaphone } from 'lucide-react';

const achievementsData = [
  {
    role: "Vice President",
    organization: "Student Council",
    period: "2025 - 2026",
    icon: <Crown size={22} />,
    description: "Leading student initiatives, managing campus events, and bridging the gap between administration and the student body.",
    tags: ["Leadership", "Management"],
    color: "#fcca46" 
  },
  {
    role: "Open Source Mentor",
    organization: "GSSOC 2025",
    period: "2025",
    icon: <Star size={22} />,
    description: "Selected as a Mentor to guide contributors in open-source development, conduct code reviews, and foster community growth.",
    tags: ["Mentorship", "Open Source"],
    color: "white"
  },
  {
    role: "Co-Founder",
    organization: "Raina News",
    period: "Present",
    icon: <Megaphone size={22} />,
    description: "Founded and scaled a digital media news channel on social media, amassing a community of over 120K+ followers.",
    tags: ["Media", "Growth"],
    color: "#fcca46"
  }
];

const AchievementCard = ({ item }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement of the glow
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  // Create the background gradient string
  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(300px circle at ${x}px ${y}px, rgba(252, 202, 70, 0.15), transparent 80%)`
  );

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative p-8 rounded-3xl border border-white/5 bg-[#0f0f0f]/50 overflow-hidden flex flex-col min-h-[320px] transition-colors duration-500 hover:border-[#fcca46]/20"
    >
      {/* THE LIQUID GLOW LAYER */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div className={`p-4 rounded-2xl bg-black border border-white/5 transition-all duration-500 group-hover:border-[#fcca46]/30 group-hover:shadow-[0_0_20px_rgba(252,202,70,0.1)] ${item.color === "#fcca46" ? "text-[#fcca46]" : "text-white"}`}>
            {item.icon}
          </div>
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest bg-zinc-900/50 px-3 py-1 rounded-full border border-white/5">
            {item.period}
          </span>
        </div>

        {/* Content */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#fcca46] transition-colors duration-300">
            {item.role}
          </h3>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">
            {item.organization}
          </p>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, i) => (
            <span key={i} className="text-[9px] px-3 py-1 rounded-md border border-white/5 bg-black/40 font-bold tracking-tighter uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-20 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Minimalist Title */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-10 bg-[#fcca46]" />
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#fcca46]">History</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Honors & <br /> <span className="text-zinc-800 italic font-light">Recognitions.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <AchievementCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;