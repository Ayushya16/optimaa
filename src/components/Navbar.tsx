import React from 'react';
import { Presentation } from 'lucide-react';

interface NavbarProps {
  onOpenDeck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeck }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0A]/90 border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-[#A1FF5F] animate-pulse" />
          <span className="font-['Space_Grotesk'] font-bold text-lg tracking-wider text-white">
            AMBIENT <span className="text-[#A1FF5F]">/</span> OPTIMIZATION
          </span>
          <span className="hidden sm:inline-block text-[11px] font-['Space_Grotesk'] uppercase tracking-widest px-2 py-0.5 border border-[#333333] text-[#888888] rounded">
            CONCEPT SPEC
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-[#AAAAAA]">
          <a href="#overview" className="hover:text-white transition-colors">Concept</a>
          <a href="#industrial" className="hover:text-[#A1FF5F] transition-colors">Industrial</a>
          <a href="#corporate" className="hover:text-[#FFA048] transition-colors">Corporate</a>
          <a href="#mobile" className="hover:text-[#FFA048] transition-colors">Mobile</a>
          <a href="#accessibility" className="hover:text-[#A1FF5F] transition-colors">Accessibility</a>
          <a href="#principles" className="hover:text-white transition-colors">Principles</a>
          <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
        </nav>

        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenDeck}
            className="flex items-center space-x-2 bg-[#A1FF5F] hover:bg-[#8ee84e] text-black font-['Space_Grotesk'] font-bold text-xs uppercase px-3.5 py-2 rounded-lg transition-all shadow-[0_0_20px_rgba(161,255,95,0.25)] cursor-pointer"
          >
            <Presentation className="w-4 h-4 text-black" />
            <span className="hidden sm:inline">Deck Slideshow</span>
            <span className="sm:hidden">Slides</span>
          </button>
        </div>
      </div>
    </header>
  );
};
