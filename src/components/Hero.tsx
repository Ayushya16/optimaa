import React, { useState } from 'react';
import { Terminal, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenDeck: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDeck }) => {
  const [activeTab, setActiveTab] = useState<'industrial' | 'corporate' | 'mobile' | 'accessibility'>('industrial');

  const tabData = {
    industrial: {
      title: "Industrial Software (B2B)",
      subtitle: "AutoCAD, DWSIM Simulation, 3D Workspaces",
      badge: "PARAMETER PRE-STAGING",
      color: "#16A34A",
      textColor: "text-emerald-700",
      activeBg: "bg-emerald-50 border-emerald-500",
      pillBg: "bg-emerald-100 text-emerald-800",
      metrics: "Deterministic Solver Alignment",
      desc: "Observes setup routines, eliminates repetitive thermodynamic/dimension entry, and pre-stages the next workspace mode based on established patterns.",
      actionText: "See DWSIM Solver Ground Truth",
      targetId: "#industrial"
    },
    corporate: {
      title: "Non-Technical Corporate (B2B)",
      subtitle: "Product Managers, Analysts, GTM Leads",
      badge: "MULTI-APP ORCHESTRATION",
      color: "#EA580C",
      textColor: "text-amber-700",
      activeBg: "bg-amber-50 border-amber-500",
      pillBg: "bg-amber-100 text-amber-800",
      metrics: "Cross-Tool Pipeline Collapse",
      desc: "Tracks product launch stages, bridging disconnected docs, spreadsheets, and analytics into a unified action queue without manual copy-paste.",
      actionText: "Explore Multi-App Orchestration",
      targetId: "#corporate"
    },
    mobile: {
      title: "Personal Phone OS (B2C)",
      subtitle: "Dynamic Hitboxes & Hardware Self-Blur",
      badge: "PREDICTIVE TOUCH",
      color: "#EA580C",
      textColor: "text-amber-700",
      activeBg: "bg-amber-50 border-amber-500",
      pillBg: "bg-amber-100 text-amber-800",
      metrics: "72h Adaptive Telemetry Ramp",
      desc: "Invisibly expands hitboxes for probable next keys based on finger trajectory. Halts recording automatically on banking and personal apps.",
      actionText: "Try Interactive Keyboard Hitbox",
      targetId: "#mobile"
    },
    accessibility: {
      title: "Older & Disabled Users (D2C)",
      subtitle: "24-Hour Circadian Surfacing",
      badge: "ZERO-MENU ACCESS",
      color: "#16A34A",
      textColor: "text-emerald-700",
      activeBg: "bg-emerald-50 border-emerald-500",
      pillBg: "bg-emerald-100 text-emerald-800",
      metrics: "3 Daily Routine Anchors",
      desc: "Dynamically surfaces devotionals, family video calls, and evening updates at routine hours. Eliminating menu friction beats battery micro-tuning.",
      actionText: "View 24h Circadian Arc",
      targetId: "#accessibility"
    }
  };

  const current = tabData[activeTab];

  return (
    <section id="overview" className="relative pt-12 pb-24 overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/80 to-slate-100/50 tech-grid">
      {/* Background Ambient Splatter Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50/90 border border-emerald-200 px-3.5 py-1 rounded-full shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>OPTIMAA &bull; PRODUCT STRATEGY &amp; CONCEPT SPEC</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Space_Grotesk'] font-bold tracking-tight text-slate-900 leading-[1.08]">
              Assistive AI Architecture: <br />
              <span className="text-emerald-600">In-Context Workflow</span> <br />
              Optimization Engine
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              An in-context platform that observes unscripted device routines for 2 to 3 days, learns recurring workflows and settings, and proactively executes next steps via direct software control rather than prompt engineering.
            </p>

            {/* Analogy Callout Box: Cursor / Copilot Comparison */}
            <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-6 space-y-3 elevation-card">
              <div className="text-xs font-['Space_Grotesk'] font-bold text-amber-700 tracking-wider uppercase flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-amber-600" />
                <span>ARCHITECTURAL PARALLEL: BEYOND CODING COPILOTS</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Coding assistants (Cursor, GitHub Copilot) succeed because programming syntax is rule-bound. Optimaa extends adaptive in-context assistance into messy, unscripted desktop and industrial environments.
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 flex items-start space-x-2">
                <span className="font-['Space_Grotesk'] font-bold text-emerald-700 shrink-0">Assistive philosophy:</span>
                <span>Built strictly to augment human operators and eliminate manual grunt work, explicitly rejecting automation that eliminates employment.</span>
              </div>
            </div>

            {/* Authors & Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-slate-500">
              <div>
                <span className="text-slate-900 font-['Space_Grotesk'] font-bold text-sm">Ayushya Ramesh Ojha &amp; Aryan Jain</span>
                <span className="block text-slate-500 font-mono text-[11px] mt-0.5">Co-Founders &bull; BITS Pilani &bull; Idea-Stage Concept</span>
              </div>
              <button
                onClick={onOpenDeck}
                className="inline-flex items-center space-x-2 text-emerald-700 hover:text-emerald-900 font-['Space_Grotesk'] font-bold transition-all hover:translate-x-1 cursor-pointer bg-white border border-emerald-200 hover:border-emerald-300 px-4 py-2 rounded-xl shadow-xs"
              >
                <span>View 7-Slide Deck</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Live Interactive Observer Visualizer */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 elevation-card elevation-hover space-y-6">
              
              {/* Laptop Screen Simulator */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-mono font-semibold text-slate-500 ml-2">SYSTEM_OBSERVER_DAEMON</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>ACTIVE &bull; 10 HZ LOOP</span>
                  </span>
                </div>

                {/* Live Diagnostic Telemetry Grid */}
                <div className="grid grid-cols-3 gap-2 bg-slate-50/80 p-3 rounded-2xl border border-slate-200 font-mono text-center">
                  <div className="p-1.5 bg-white rounded-xl border border-slate-200/80">
                    <div className="text-[10px] text-slate-600 font-medium uppercase">DAEMON RAM</div>
                    <div className="text-xs font-bold text-slate-900 mt-0.5">16.4 MB</div>
                  </div>
                  <div className="p-1.5 bg-white rounded-xl border border-slate-200/80">
                    <div className="text-[10px] text-slate-600 font-medium uppercase">CPU USAGE</div>
                    <div className="text-xs font-bold text-emerald-700 mt-0.5">&lt; 0.8%</div>
                  </div>
                  <div className="p-1.5 bg-white rounded-xl border border-slate-200/80">
                    <div className="text-[10px] text-slate-600 font-medium uppercase">LEAK RISK</div>
                    <div className="text-xs font-bold text-emerald-700 mt-0.5">0.0% (Local)</div>
                  </div>
                </div>

                <div className="bg-slate-50/90 border border-slate-200 rounded-2xl p-4 space-y-2.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Active Workflow Context</span>
                    <span className="text-slate-900 font-mono font-semibold text-[11px]">{current.subtitle.split(',')[0]}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Telemetry Calibration</span>
                    <span className="text-emerald-700 font-mono font-bold text-[11px]">48h to 72h Calibrated</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Assistive Core Mechanism</span>
                    <span className="text-amber-700 font-bold text-xs">{current.metrics}</span>
                  </div>
                </div>
              </div>

              {/* 4 Interactive Domain Trigger Nodes */}
              <div className="space-y-2">
                <div className="text-[11px] font-['Space_Grotesk'] font-bold text-slate-500 uppercase tracking-wider">
                  Select Application Domain:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveTab('industrial')}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      activeTab === 'industrial'
                        ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-['Space_Grotesk'] font-bold text-emerald-700">01. Industrial</div>
                    <div className="text-[11px] text-slate-500 truncate">DWSIM &amp; CAD</div>
                  </button>

                  <button
                    onClick={() => setActiveTab('corporate')}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      activeTab === 'corporate'
                        ? 'bg-amber-50 border-amber-500 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-['Space_Grotesk'] font-bold text-amber-700">02. Corporate</div>
                    <div className="text-[11px] text-slate-500 truncate">GTM Launch</div>
                  </button>

                  <button
                    onClick={() => setActiveTab('mobile')}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      activeTab === 'mobile'
                        ? 'bg-amber-50 border-amber-500 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-['Space_Grotesk'] font-bold text-amber-700">03. Mobile OS</div>
                    <div className="text-[11px] text-slate-500 truncate">Adaptive Touch</div>
                  </button>

                  <button
                    onClick={() => setActiveTab('accessibility')}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      activeTab === 'accessibility'
                        ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-['Space_Grotesk'] font-bold text-emerald-700">04. Accessibility</div>
                    <div className="text-[11px] text-slate-500 truncate">D2C Elderly Care</div>
                  </button>
                </div>
              </div>

              {/* Dynamic Domain Brief */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="font-['Space_Grotesk'] font-bold text-sm text-slate-900">{current.title}</span>
                  <span className={`text-[10px] font-['Space_Grotesk'] font-bold px-2 py-0.5 rounded-full ${current.pillBg}`}>
                    {current.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {current.desc}
                </p>
                <a
                  href={current.targetId}
                  className={`inline-flex items-center space-x-1 text-xs font-bold ${current.textColor} hover:underline pt-1`}
                >
                  <span>{current.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
