import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden py-16">
      {/* Main container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-thin text-white tracking-wider">
            ZAMORANA
          </h2>
          <p className="mt-1 text-white/60 text-xs">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>

      {/* Nurture-inspired lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-white/10" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-white/10" />

        {/* Vertical lines */}
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/10" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/10" />
        <div className="absolute top-0 bottom-0 right-1/4 w-px bg-white/10" />

        {/* Diagonal lines */}
        <div className="absolute top-0 left-1/3 w-px h-32 bg-white/10 transform -rotate-45 origin-top" />
        <div className="absolute bottom-0 right-1/3 w-px h-32 bg-white/10 transform rotate-45 origin-bottom" />

        {/* Decorative dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/20" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-white/20" />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>
    </footer>
  );
};
