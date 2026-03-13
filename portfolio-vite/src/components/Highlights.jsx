import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

function Highlights() {
    const highlights = [
        "Built scalable ML pipelines for production systems",
        "Optimized inference latency for real-time applications",
        "Developed FastAPI microservices for model serving",
        "Implemented vector search pipelines with FAISS",
        "Engineered custom CV solutions for edge devices",
        "Architected LLM agents for automated workflows"
    ];

    return (
        <section id="highlights" className="py-24 bg-[#E8E6D9] relative overflow-hidden">
            <div className="max-w-8xl mx-auto lg:px-24 px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-4 mb-12"
                >
                    <span className="h-[2px] w-12 bg-[#EF9144]" />
                    <span className="text-[#1A1A1A] font-black uppercase tracking-[0.4em] text-[10px]">Engineering Impact</span>
                </motion.div>

                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-[#1A1A1A] mb-16">
                    Key <span className="text-[#EF9144] italic font-serif font-light lowercase">Highlights.</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10, rotate: 1 }}
                            className="group flex flex-col items-center text-center gap-6 p-10 bg-white/40 backdrop-blur-md border-2 border-[#1A1A1A] rounded-[2.5rem] shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-[10px_10px_0px_0px_#EF9144] transition-all"
                        >
                            <div className="p-4 bg-[#EF9144] rounded-2xl border-2 border-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="text-white" size={28} />
                            </div>
                            <span className="text-base font-black uppercase tracking-tight text-[#1A1A1A] leading-tight">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Highlights;
