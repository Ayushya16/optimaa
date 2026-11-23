import React from 'react';
import { ArrowUp, Presentation } from 'lucide-react';

interface FooterProps {
  onOpenDeck: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeck }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-xs text-slate-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-slate-100">
          <div className="space-y-2">
            <div className="font-['Space_Grotesk'] font-bold text-lg text-slate-900 tracking-wider">
              OPTIMAA
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              An assistive AI architecture designed to observe unscripted software routines, stage contextual settings, and preserve human employment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenDeck}
              className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-['Space_Grotesk'] font-bold text-xs uppercase px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow cursor-pointer"
            >
              <Presentation className="w-4 h-4 text-white" />
              <span>Launch 7-Slide Presentation</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-700 transition-all cursor-pointer shadow-2xs"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Authors & Design System Notes */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            Co-Founders: <span className="text-slate-900 font-semibold">Ayushya Ramesh Ojha</span> &amp; <span className="text-slate-900 font-semibold">Aryan Jain</span> &bull; BITS Pilani
          </div>
          <div className="flex items-center space-x-4">
            <span>Idea-Stage Concept</span>
            <span>&bull;</span>
            <span>First Principles Fund</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
