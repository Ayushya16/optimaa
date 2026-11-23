import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface DeckViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeckViewerModal: React.FC<DeckViewerModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const baseUrl = import.meta.env.BASE_URL;

  const slides = [
    {
      num: 1,
      title: "Slide 1: Cover & Observer Layer",
      src: `${baseUrl}slides/slide1.png`,
      takeaway: "Thesis: An assistant that watches how you work for 2-3 days, learns the pattern, and stages the next step for you."
    },
    {
      num: 2,
      title: "Slide 2: Industrial Simulation & DWSIM Setup",
      src: `${baseUrl}slides/slide2.png`,
      takeaway: "Proving ground: Open-source CAPE-OPEN DWSIM solvers converge (residual < 10^-11), eliminating repetitive setup before runs."
    },
    {
      num: 3,
      title: "Slide 3: Corporate Workflows & Launch Lifecycle",
      src: `${baseUrl}slides/slide3.png`,
      takeaway: "Orchestration: Multi-tool hopping collapses into a unified assist, with 3 open discovery gates before engineering."
    },
    {
      num: 4,
      title: "Slide 4: Personal Phone OS & Self-Blur",
      src: `${baseUrl}slides/slide4.png`,
      takeaway: "Predictive Assist: Proven iOS hitbox expansion principle extended across desktop workflows; banking apps auto-blur."
    },
    {
      num: 5,
      title: "Slide 5: Older & Disabled Users",
      src: `${baseUrl}slides/slide5.png`,
      takeaway: "Accessibility: Circadian 24h arc puts routine apps first; zero-menu ease beats battery micro-tuning."
    },
    {
      num: 6,
      title: "Slide 6: Core System Principles",
      src: `${baseUrl}slides/slide6.png`,
      takeaway: "4 Engineering KPIs: > 80% acceptance, residual < 10^-11, 0 telemetry/frames stored, < 1.5% CPU & 20MB RAM."
    },
    {
      num: 7,
      title: "Slide 7: Roadmap & Open Strategic Questions",
      src: `${baseUrl}slides/slide7.png`,
      takeaway: "Strategic Gates: Clear 3-question evaluation matrix and 4-phase lean validation plan before heavy capital."
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlide(prev => (prev < 7 ? prev + 1 : 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => (prev > 1 ? prev - 1 : 7));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const active = slides[currentSlide - 1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
      
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden max-h-[92vh]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-['Space_Grotesk'] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
              SLIDE {currentSlide} OF 7
            </span>
            <span className="text-sm font-['Space_Grotesk'] font-bold text-white hidden sm:inline">
              {active.title}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Canvas View (16:9 Aspect) */}
        <div className="relative flex-1 bg-slate-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden min-h-[300px]">
          <img
            src={active.src}
            alt={active.title}
            className="w-full h-auto max-h-[64vh] object-contain rounded-xl shadow-2xl border border-slate-800/60"
          />

          {/* Nav Arrows */}
          <button
            onClick={() => setCurrentSlide(prev => (prev > 1 ? prev - 1 : 7))}
            className="absolute left-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all cursor-pointer hover:scale-105 shadow-lg"
            title="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => setCurrentSlide(prev => (prev < 7 ? prev + 1 : 1))}
            className="absolute right-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all cursor-pointer hover:scale-105 shadow-lg"
            title="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Bar: Slide Takeaway & Thumbnail Strip */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/80 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center space-x-2">
              <span className="font-['Space_Grotesk'] font-bold text-emerald-400">Presenter Takeaway:</span>
              <span className="text-slate-300 font-medium">{active.takeaway}</span>
            </div>
            <span className="text-slate-500 hidden sm:inline">Use &larr; &rarr; arrow keys to navigate</span>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-1">
            {slides.map(s => (
              <button
                key={s.num}
                onClick={() => setCurrentSlide(s.num)}
                className={`relative shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  currentSlide === s.num
                    ? 'border-emerald-400 scale-105 shadow-md'
                    : 'border-slate-800 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={s.src}
                  alt={s.title}
                  className="w-16 h-10 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
