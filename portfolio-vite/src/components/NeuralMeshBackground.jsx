import React from 'react';

export default function EnhancedEditorialBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-[#E8E6D9]">
      {/* 1. Authentic Reference Gradient Base */}
      {/* This uses the specific warm orange and beige tones from the image */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(circle at 100% 100%, #EF9144 0%, transparent 40%),
            radial-gradient(circle at 0% 50%, #D4CDB3 0%, transparent 50%),
            radial-gradient(circle at 50% 100%, #F1A058 0%, transparent 50%)
          `
        }}
      />

      {/* 2. Paper Texture Overlay (Grain) */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. Retro "Blob" Illustrations (Left and Right) */}
      {/* Left Bottom Arch */}
      <div className="absolute -bottom-20 -left-20 w-[50vw] h-[50vw] rounded-full bg-[#D9D3BD] mix-blend-multiply blur-3xl opacity-40" />
      
      {/* Right Top Arch */}
      <div className="absolute -top-10 -right-10 w-[30vw] h-[40vw] rounded-[100px] bg-[#EF9144] opacity-20 rotate-[30deg] blur-3xl" />

      {/* 4. Retro Star/Sparkle Illustrations (Same as Image) */}
      
      {/* Bottom Left Star */}
      <div className="absolute bottom-[15%] left-[8%] w-16 h-16 opacity-40">
        <div 
          className="w-full h-full bg-white" 
          style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
        />
      </div>

      {/* Top Right Small Star */}
      <div className="absolute top-[10%] right-[15%] w-12 h-12 opacity-30 animate-pulse">
        <div 
          className="w-full h-full bg-[#EF9144]" 
          style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
        />
      </div>

      {/* Center Background "4-Point" Sparkle */}
      <div className="absolute top-[40%] right-[30%] w-24 h-24 opacity-10">
        <div 
          className="w-full h-full bg-white" 
          style={{ clipPath: 'polygon(50% 0%, 55% 45%, 100% 50%, 55% 55%, 50% 100%, 45% 55%, 0% 50%, 45% 45%)' }}
        />
      </div>

      {/* 5. Typography Watermarks (Styled like the 'A' and 'Portfolio' text) */}
      <div className="absolute top-10 left-10 select-none pointer-events-none">
        <h2 className="text-[12vw] font-serif italic text-[#1A1A1A] opacity-[0.03] leading-none">
          Creative
        </h2>
      </div>

      <div className="absolute bottom-5 right-10 select-none pointer-events-none">
        <h2 className="text-[10vw] font-black uppercase text-[#1A1A1A] opacity-[0.03] tracking-tighter">
          Architect
        </h2>
      </div>

      {/* 6. Subtle Horizontal Lines (From the Image Textures) */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #1A1A1A 40px, #1A1A1A 41px)`
        }}
      />
    </div>
  );
}