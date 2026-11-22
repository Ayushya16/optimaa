import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

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
      title: "Slide 2: Industrial Simulation & Aspen Setup",
      src: `${baseUrl}slides/slide2.png`,
      takeaway: "Proving ground: Solvers deterministically converge (residual < 10^-11), eliminating repetitive setup before simulation runs."
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
      takeaway: "Predictive Touch: Dynamic keyboard hitboxes expand based on typing trajectory; banking apps auto-blur."
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
      takeaway: "2x2 Matrix: People & Agency, Physics & Proof, Privacy Boundary, Low-Power Footprint."
    },
    {
      num: 7,
      title: "Slide 7: Roadmap & Open Strategic Questions",
      src: `${baseUrl}slides/slide7.png`,
      takeaway: "Strategic Gates: 2D risk scatter plot and 4-phase validation plan before committing heavy capital."
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 lg:p-8">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl max-h-[95vh] flex flex-col bg-[#111111] border border-[#2B2B2B] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#222222] bg-[#0E0E0E]">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-['Space_Grotesk'] font-bold text-[#A1FF5F] uppercase tracking-wider bg-[#A1FF5F]/10 border border-[#A1FF5F]/30 px-2.5 py-0.5 rounded">
              SLIDE {currentSlide} OF 7
            </span>
            <span className="text-sm font-['Space_Grotesk'] font-bold text-white hidden sm:inline">
              {active.title}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="https://www.figma.com/design/fjaJYRgj6kCZJ7NZCsLbsh"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#888888] hover:text-[#A1FF5F] flex items-center space-x-1 px-2.5 py-1 rounded border border-[#282828] hover:border-[#A1FF5F]/50 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in Figma</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#888888] hover:text-white hover:bg-[#222222] transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Canvas View (16:9 Aspect) */}
        <div className="flex-1 bg-[#0A0A0A] flex items-center justify-center p-4 relative group">
          <div className="relative w-full aspect-[16/9] max-h-[65vh] rounded-2xl overflow-hidden border border-[#262626] shadow-2xl bg-black">
            <img
              src={active.src}
              alt={active.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Previous Arrow */}
          <button
            onClick={() => setCurrentSlide(prev => (prev > 1 ? prev - 1 : 7))}
            className="absolute left-6 p-3 rounded-full bg-black/70 hover:bg-[#A1FF5F] text-white hover:text-black border border-white/10 hover:border-[#A1FF5F] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={() => setCurrentSlide(prev => (prev < 7 ? prev + 1 : 1))}
            className="absolute right-6 p-3 rounded-full bg-black/70 hover:bg-[#A1FF5F] text-white hover:text-black border border-white/10 hover:border-[#A1FF5F] transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Footer: Takeaway & Thumbnail Strip */}
        <div className="px-6 py-4 border-t border-[#222222] bg-[#0E0E0E] space-y-3">
          <div className="text-xs sm:text-sm text-[#CCCCCC]">
            <span className="font-bold text-[#A1FF5F]">Presenter Takeaway:</span> {active.takeaway}
          </div>

          {/* Thumbnails Row */}
          <div className="grid grid-cols-7 gap-2 pt-1">
            {slides.map((s) => (
              <button
                key={s.num}
                onClick={() => setCurrentSlide(s.num)}
                className={`relative aspect-[16/9] rounded-lg overflow-hidden border transition-all cursor-pointer ${
                  currentSlide === s.num
                    ? 'border-[#A1FF5F] ring-2 ring-[#A1FF5F]/50 scale-105'
                    : 'border-[#282828] opacity-50 hover:opacity-100'
                }`}
              >
                <img src={s.src} alt={s.title} className="w-full h-full object-cover" />
                <span className="absolute bottom-1 right-1 text-[9px] font-bold px-1 rounded bg-black/80 text-white">
                  {s.num}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
