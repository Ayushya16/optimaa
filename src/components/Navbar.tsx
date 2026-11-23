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
    { name: 'Overview & Thesis', href: '#overview', desc: 'Concept, founders & problem statement', icon: Layers },
    { name: 'Chemical Simulation', href: '#industrial', desc: 'Why DWSIM is our initial testbed', icon: Cpu },
    { name: 'Product Management', href: '#corporate', desc: 'Cross-tool workflow handoffs', icon: Building2 },
    { name: 'Invisible Touch Hitboxes', href: '#mobile', desc: 'Apple iOS QuickType precedent & privacy', icon: Smartphone },
    { name: 'Senior Accessibility', href: '#accessibility', desc: 'Routine-based app surfacing for seniors', icon: HeartHandshake },
    { name: 'Engineering Constraints', href: '#principles', desc: '4 strict rules: human control, privacy, math', icon: ShieldCheck },
    { name: 'Decisions & Milestones', href: '#roadmap', desc: '3 honest dilemmas and 12-month pilot plan', icon: Compass },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand: Clean Optimaa logo */}
        <div className="flex items-center space-x-3">
          <a href="#overview" className="font-['Space_Grotesk'] font-bold text-xl tracking-tight text-slate-900 hover:text-slate-700 transition-colors">
            Optimaa
          </a>
          <span className="text-[11px] font-medium px-2.5 py-0.5 border border-slate-200 text-slate-600 bg-slate-50 rounded-md">
            BITS Pilani &bull; Idea Stage
          </span>
        </div>

        {/* Right Actions: Clean Sections Dropdown + View Deck Button */}
        <div className="flex items-center space-x-3">
          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-['Space_Grotesk'] font-semibold transition-all cursor-pointer border ${
                dropdownOpen
                  ? 'bg-slate-100 border-slate-300 text-slate-900'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              aria-expanded={dropdownOpen}
            >
              <span>Sections</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 text-slate-500 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Popover */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white border border-slate-200 rounded-xl shadow-lg py-2 z-50">
                <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-wider text-slate-400">
                    Jump to Section
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">ESC</span>
                </div>

                <div className="p-1 space-y-0.5 max-h-[70vh] overflow-y-auto">
                  {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group cursor-pointer"
                      >
                        <div className="p-1.5 rounded-md bg-slate-100 text-slate-600 group-hover:bg-slate-200 transition-colors shrink-0 mt-0.5">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-['Space_Grotesk'] font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
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
            className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-['Space_Grotesk'] font-bold text-xs px-4 py-2 rounded-lg transition-all shadow-xs cursor-pointer"
          >
            <Presentation className="w-3.5 h-3.5 text-slate-300" />
            <span className="hidden sm:inline">Pitch Deck (7 Slides)</span>
            <span className="sm:hidden">Deck</span>
          </button>
        </div>
      </div>
    </header>
  );
};
