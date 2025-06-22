import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden py-16">
      {/* Main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Zamorana</h2>
            <p className="mt-2 text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
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
