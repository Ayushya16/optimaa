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

        {/* Signatures & Team Governance Block (Matching Application) */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <span className="font-['Space_Grotesk'] font-bold text-xs uppercase tracking-wider text-slate-900">
              3. Signatures &amp; Team Governance
            </span>
            <span className="text-[11px] font-medium text-slate-500">
              50% / 50% Equity Split &bull; Purely Idea Stage
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Founder 1 Signature Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 hover:border-slate-300 hover:bg-white transition-all">
              <div className="h-10 border-b-2 border-slate-900 flex items-end pb-1">
                <span className="font-['Space_Grotesk'] text-slate-400 text-xs italic tracking-widest font-mono">
                  [Verified Application Signoff]
                </span>
              </div>
              <div>
                <h4 className="font-['Space_Grotesk'] font-bold text-sm text-slate-900">
                  Ayushya Ramesh Ojha
                </h4>
                <div className="text-[11px] text-slate-500 mt-0.5 space-y-0.5">
                  <div className="font-medium text-slate-700">Co-Founder</div>
                  <div>Current Student, BITS Pilani &bull; Indian Citizen</div>
                </div>
              </div>
            </div>

            {/* Founder 2 Signature Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 hover:border-slate-300 hover:bg-white transition-all">
              <div className="h-10 border-b-2 border-slate-900 flex items-end pb-1">
                <span className="font-['Space_Grotesk'] text-slate-400 text-xs italic tracking-widest font-mono">
                  [Verified Application Signoff]
                </span>
              </div>
              <div>
                <h4 className="font-['Space_Grotesk'] font-bold text-sm text-slate-900">
                  Aryan Jain
                </h4>
                <div className="text-[11px] text-slate-500 mt-0.5 space-y-0.5">
                  <div className="font-medium text-slate-700">Co-Founder</div>
                  <div>Current Student, BITS Pilani &bull; Indian Citizen</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Authors & Design System Notes */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-slate-500 text-[11px] pt-4 border-t border-slate-100">
          <div>
            Optimaa &bull; Submitted for PIEDS First Principles Fund Application
          </div>
          <div className="flex items-center space-x-4">
            <span>Website: <a href="https://ayushya16.github.io/optimaa/" className="text-emerald-700 hover:underline font-semibold">https://ayushya16.github.io/optimaa/</a></span>
            <span>&bull;</span>
            <span>Zero External Funding</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
