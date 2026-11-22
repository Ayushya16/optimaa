import React from 'react';
import { ArrowUp, ExternalLink, Presentation } from 'lucide-react';

interface FooterProps {
  onOpenDeck: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeck }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-[#1F1F1F] text-xs text-[#888888] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-[#1A1A1A]">
          <div className="space-y-2">
            <div className="font-['Space_Grotesk'] font-bold text-lg text-white tracking-wider">
              AMBIENT <span className="text-[#A1FF5F]">/</span> OPTIMIZATION ENGINE
            </div>
            <p className="text-xs text-[#777777] max-w-md">
              An assistive AI architecture designed to observe unscripted software routines, stage contextual settings, and preserve human employment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenDeck}
              className="flex items-center space-x-2 bg-[#A1FF5F] hover:bg-[#8ee84e] text-black font-['Space_Grotesk'] font-bold text-xs uppercase px-4 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              <Presentation className="w-4 h-4 text-black" />
              <span>Launch 7-Slide Presentation</span>
            </button>

            <a
              href="https://www.figma.com/design/fjaJYRgj6kCZJ7NZCsLbsh"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-[#2A2A2A] hover:border-[#A1FF5F] text-white transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View in Figma</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl border border-[#2A2A2A] hover:border-white text-white transition-all cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Authors & Design System Notes */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#666666] text-[11px]">
          <div>
            Authors: <span className="text-white font-medium">Ayushya Ramesh Ojha</span> &amp; <span className="text-white font-medium">Aryan Jain</span>
          </div>
          <div>
            Built with <span className="text-[#A1FF5F]">Black Tech + Poppy Brutalism</span> Design System
          </div>
          <div>
            Vercel Production Deployment
          </div>
        </div>

      </div>
    </footer>
  );
};
