import React, { useState, useRef, useEffect } from 'react';
import { Presentation, ChevronDown, Layers, Cpu, Building2, Smartphone, HeartHandshake, ShieldCheck, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenDeck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeck }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navItems = [
    { name: 'Concept & Observer', href: '#overview', desc: 'Thesis & 48-72h learning layer', icon: Layers, color: 'text-emerald-600' },
    { name: 'Industrial Simulation', href: '#industrial', desc: 'DWSIM & CAD pre-staging', icon: Cpu, color: 'text-emerald-600' },
    { name: 'Corporate Workflows', href: '#corporate', desc: 'GTM product launch orchestration', icon: Building2, color: 'text-amber-600' },
    { name: 'Personal Mobile OS', href: '#mobile', desc: 'Predictive hitbox & auto-blur', icon: Smartphone, color: 'text-amber-600' },
    { name: 'Elderly Accessibility', href: '#accessibility', desc: 'Circadian 24h routine surfacing', icon: HeartHandshake, color: 'text-emerald-600' },
    { name: 'Core Principles & KPIs', href: '#principles', desc: '4 quantitative engineering bounds', icon: ShieldCheck, color: 'text-emerald-600' },
    { name: 'Roadmap & Decisions', href: '#roadmap', desc: '3 strategic gates & 4-phase rollout', icon: Compass, color: 'text-slate-800' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-200 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand: Clean Optimaa branding */}
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-['Space_Grotesk'] font-bold text-xl tracking-wider text-slate-900">
            OPTIMAA
          </span>
          <span className="text-[11px] font-['Space_Grotesk'] font-semibold uppercase tracking-widest px-2.5 py-0.5 border border-slate-200 text-slate-600 bg-slate-50 rounded-full">
            CONCEPT SPEC
          </span>
        </div>

        {/* Right Actions: Clean Dropdown Menu + Deck Button */}
        <div className="flex items-center space-x-3">
          {/* Dropdown Menu for Navigation Links */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-['Space_Grotesk'] font-semibold transition-all cursor-pointer border ${
                dropdownOpen
                  ? 'bg-emerald-50 border-emerald-400 text-emerald-900 shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-expanded={dropdownOpen}
              aria-label="Navigation Sections Dropdown"
            >
              <span>Sections</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-emerald-600' : 'text-slate-500'}`} />
            </button>

            {/* Dropdown Popover */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3.5 py-2 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-['Space_Grotesk'] font-bold uppercase tracking-wider text-slate-500">
                    Jump to Section
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono font-medium">ESC TO CLOSE</span>
                </div>

                <div className="p-1.5 space-y-0.5 max-h-[75vh] overflow-y-auto">
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-slate-50/90 transition-all group cursor-pointer border border-transparent hover:border-slate-200/60"
                      >
                        <div className="p-1.5 rounded-lg bg-slate-100 group-hover:bg-emerald-100/60 transition-colors shrink-0 mt-0.5">
                          <IconComponent className={`w-4 h-4 ${item.color}`} />
                        </div>
                        <div>
                          <div className="text-sm font-['Space_Grotesk'] font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Presentation Deck Button */}
          <button
            onClick={onOpenDeck}
            className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-['Space_Grotesk'] font-bold text-xs uppercase px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow hover:-translate-y-0.5 cursor-pointer"
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
