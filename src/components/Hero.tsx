import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

interface HeroProps {
  onOpenDeck: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDeck }) => {
  const [activeTab, setActiveTab] = useState<'dwsim' | 'touch' | 'elderly'>('dwsim');

  const examples = {
    dwsim: {
      tag: "Chemical Engineering",
      software: "DWSIM Process Simulator",
      routine: "Setting up a distillation column",
      without: "Re-entering the same thermodynamic models (NRTL/Peng-Robinson), inlet temperatures (423.15 K), pressure (3.25 bar), and 28 tray stages manually every morning.",
      withOptimaa: "Optimaa recognizes your habitual column flowsheet, pre-stages all 28 stage parameters, and verifies mathematical convergence (residual < 10^-11) before you click Run.",
      badge: "Validated by math, not hallucination"
    },
    touch: {
      tag: "Smartphone & Desktop Touch",
      software: "Predictive Hitbox Expansion",
      routine: "Typing and navigating workflows",
      without: "Hunting through menus or mis-tapping small buttons on touchscreen and trackpad interfaces.",
      withOptimaa: "Like iPhone's keyboard secretly expanding hitboxes for likely next letters, Optimaa predicts your next action and enlarges click targets before your finger lands.",
      badge: "Proven iOS QuickType precedent"
    },
    elderly: {
      tag: "Senior Accessibility",
      software: "Simplified Smartphone UI",
      routine: "Daily phone navigation for grandparents",
      without: "Forcing older users to navigate confusing home screens, app drawers, and nested menus just to call family.",
      withOptimaa: "Surfaces the right 1 or 2 apps based on daily routine: morning devotional at 8 AM, 1-tap family video call at 2 PM, evening updates at 7 PM.",
      badge: "Zero-menu daily routine"
    }
  };

  const current = examples[activeTab];

  return (
    <section id="overview" className="relative pt-12 pb-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Header Block */}
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center space-x-2 text-xs font-['Space_Grotesk'] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            <span>Optimaa &bull; Idea-Stage Startup &bull; BITS Pilani Incubation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Space_Grotesk'] font-bold tracking-tight text-slate-900 leading-[1.12]">
            An assistant that learns how you work, then prepares your next step.
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Most AI tools force you to type prompts into a chat box. Optimaa runs quietly in the background on your device, observes repetitive routines for 2 to 3 days, and pre-stages the parameters and tools you need before you even ask.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenDeck}
              className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-['Space_Grotesk'] font-bold text-xs uppercase px-5 py-3 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span>View 7-Slide Pitch Deck</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#industrial"
              className="inline-flex items-center space-x-2 text-slate-700 hover:text-slate-900 font-['Space_Grotesk'] font-semibold text-xs border border-slate-200 hover:border-slate-300 bg-slate-50 px-4 py-3 rounded-xl transition-all"
            >
              <span>See How It Works in DWSIM</span>
            </a>
          </div>

          {/* Founders attribution */}
          <div className="text-xs text-slate-500 pt-1">
            Co-Founded by <strong className="text-slate-800 font-semibold">Ayushya Ramesh Ojha</strong> &amp; <strong className="text-slate-800 font-semibold">Aryan Jain</strong> &bull; Students at BITS Pilani
          </div>
        </div>

        {/* Concrete Side-by-Side Reality: What Optimaa Actually Does */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-[11px] font-['Space_Grotesk'] font-bold uppercase tracking-wider text-slate-500">
                CONCRETE DEMONSTRATION
              </span>
              <h2 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-slate-900 mt-0.5">
                What this looks like in practice
              </h2>
            </div>

            {/* 3 Interactive Example Selectors */}
            <div className="flex items-center space-x-1 bg-white p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setActiveTab('dwsim')}
                className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'dwsim'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Chemical Simulation
              </button>
              <button
                onClick={() => setActiveTab('touch')}
                className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'touch'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Invisible Touch Hitbox
              </button>
              <button
                onClick={() => setActiveTab('elderly')}
                className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTab === 'elderly'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Senior Smartphone Care
              </button>
            </div>
          </div>

          {/* Side by Side Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Without Optimaa */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
                <span className="font-['Space_Grotesk'] font-bold text-rose-600 uppercase tracking-wider">
                  Without Optimaa (Manual Grunt Work)
                </span>
                <span className="text-slate-400 font-mono text-[11px]">{current.software}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {current.without}
              </p>
              <div className="text-xs text-slate-400 pt-2 flex items-center space-x-1.5">
                <span>Result: Repetitive manual input, cognitive fatigue, lost time.</span>
              </div>
            </div>

            {/* With Optimaa */}
            <div className="bg-white border border-emerald-300 rounded-xl p-5 space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between text-xs border-b border-emerald-100 pb-2">
                <span className="font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>With Optimaa (In-Context Pre-Staging)</span>
                </span>
                <span className="text-emerald-700 font-mono text-[11px] font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  {current.badge}
                </span>
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {current.withOptimaa}
              </p>
              <div className="text-xs text-emerald-700 pt-2 flex items-center space-x-1.5">
                <span>Result: Instant review &bull; 1 click to confirm &bull; Zero prompt engineering.</span>
              </div>
            </div>
          </div>

          {/* 3 Ground Rules (Clean Banner) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-600">
            <div className="flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
              <span><strong>Runs 100% locally on-device.</strong> Sensitive apps auto-blur. Zero screen recordings or keystrokes sent to the cloud.</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>You stay in command.</strong> Optimaa only pre-fills parameters; you always confirm before any action executes.</span>
            </div>
            <div className="flex items-start space-x-2">
              <Cpu className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
              <span><strong>Silent background runtime.</strong> Uses &lt; 1.5% CPU and &lt; 20MB RAM, preserving battery and machine performance.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
