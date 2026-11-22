import React from 'react';
import { Presentation } from 'lucide-react';

interface NavbarProps {
  onOpenDeck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeck }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/85 border-b border-slate-200/90 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-['Space_Grotesk'] font-bold text-lg tracking-wider text-slate-900">
            OPTIMAA <span className="text-emerald-600">/</span> AMBIENT AI
          </span>
          <span className="hidden sm:inline-block text-[11px] font-['Space_Grotesk'] font-semibold uppercase tracking-widest px-2.5 py-0.5 border border-slate-200 text-slate-600 bg-slate-50 rounded-full">
            CONCEPT SPEC
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
          <a href="#overview" className="hover:text-emerald-600 transition-colors">Concept</a>
          <a href="#industrial" className="hover:text-emerald-600 transition-colors">Industrial</a>
          <a href="#corporate" className="hover:text-amber-600 transition-colors">Corporate</a>
          <a href="#mobile" className="hover:text-amber-600 transition-colors">Mobile</a>
          <a href="#accessibility" className="hover:text-emerald-600 transition-colors">Accessibility</a>
          <a href="#principles" className="hover:text-emerald-600 transition-colors">Principles</a>
          <a href="#roadmap" className="hover:text-slate-900 transition-colors">Roadmap</a>
        </nav>

        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenDeck}
            className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-['Space_Grotesk'] font-bold text-xs uppercase px-4 py-2 rounded-lg transition-all shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
          >
            <Presentation className="w-4 h-4 text-white" />
            <span className="hidden sm:inline">Deck Slideshow</span>
            <span className="sm:hidden">Slides</span>
          </button>
        </div>
      </div>
    </header>
  );
};
