import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Award, ShieldCheck, FileBadge } from "lucide-react";

/* =========================
   DATA
========================= */

const certificationsData = [
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    date: "Jun 12, 2025",
    icon: <ShieldCheck size={20} strokeWidth={2} />,
    link: "https://drive.google.com/file/d/1RE5fKwlzkcCzrX2yuXcGhpbJBonfvwIX/view?usp=drive_link"
  },
  {
    title: "Certified System Administrator",
    issuer: "ServiceNow",
    date: "May 13, 2025",
    icon: <FileBadge size={20} strokeWidth={2} />,
    link: "https://drive.google.com/file/d/1vktUP49-cyb-OHtJNN1RVGHPWnUfi13u/view?usp=drive_link"
  },
  {
    title: "Python with Data Science & MySQL",
    issuer: "Sheryians Coding School",
    date: "Jul 2025",
    icon: <Award size={20} strokeWidth={2} />,
    link: "https://drive.google.com/file/d/1t6RPvlJYfTUlGX2SK4mzaoLQIBlECNlg/view?usp=sharing"
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    date: "Aug 15, 2024",
    icon: <ShieldCheck size={20} strokeWidth={2} />,
    link: "https://drive.google.com/file/d/1s09dkRHOd1xgtxdYbL8O4TVbDKdIaTKZ/view?usp=drive_link"
  },
  {
    title: "Python for Data Science, AI & Dev",
    issuer: "IBM",
    date: "Jul 18, 2024",
    icon: <FileBadge size={20} strokeWidth={2} />,
    link: "https://drive.google.com/file/d/1jzclKS2nmk8i5_MwY1JOq1wHBxLT7RUd/view?usp=sharing"
  }
];

/* =========================
   CARD
========================= */

const CertificationCard = ({ item, index }) => {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group block relative bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-2xl p-8 hover:border-[#FF6B00]/40 hover:shadow-2xl hover:shadow-[#FF6B00]/5 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dotted opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header line */}
        <div className="flex justify-between items-start mb-12">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-400 group-hover:text-[#FF6B00] transition-colors duration-300"
          >
            {item.icon}
          </motion.div>
          <span className="text-[10px] font-mono font-bold text-gray-400 bg-gray-50/50 px-3 py-1 rounded-full border border-gray-100 group-hover:border-[#FF6B00]/20 group-hover:text-[#FF6B00] transition-colors uppercase tracking-widest">
            {item.date}
          </span>
        </div>

        {/* Content */}
        <div className="mb-8">
          <h3 className="text-xl font-bold font-heading text-[#0A0A0A] mb-2 group-hover:text-[#FF6B00] transition-colors duration-300">
            {item.title}
          </h3>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold font-body text-gray-500">
              {item.issuer}
            </p>
            {item.credentialId && (
              <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-[#FF6B00]">
                ID_{item.credentialId}
              </p>
            )}
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-auto pt-6 border-t border-dashed border-gray-200 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
          <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#FF6B00]">
            Verify_Credential
          </span>
          <ExternalLink size={14} className="text-[#FF6B00]" />
        </div>
      </div>
    </motion.a>
  );
};

/* =========================
   SECTION
========================= */

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative py-16 md:py-24 border-t border-dashed border-gray-200 overflow-hidden"
    >
      {/* Shared global background applied */}

      <div className="relative max-w-7xl mx-auto px-6 z-10 w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#FF6B00] font-mono text-sm font-medium">03</span>
              <div className="h-[1px] w-12 bg-gray-300" />
              <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">
                Verified Credentials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight text-[#0A0A0A] leading-[1.1]">
              Licenses & <br className="hidden md:block" /> <span className="text-[#666666]">Certifications.</span>
            </h2>
          </div>

          <div className="text-xs font-mono font-medium text-gray-400 uppercase tracking-widest text-right hidden md:block">
            Validation_Keys: <span className="text-[#FF6B00]">Active</span>
          </div>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((item, idx) => (
            <CertificationCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
