import React, { useState } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenDeck: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDeck }) => {
  const [activeTab, setActiveTab] = useState<'industrial' | 'corporate' | 'mobile' | 'accessibility'>('industrial');

  const tabData = {
    industrial: {
      title: "Industrial Software (B2B)",
      subtitle: "AutoCAD, Aspen Simulation, 3D Workspaces",
      badge: "LIME PRE-STAGING",
      color: "#A1FF5F",
      textColor: "text-[#A1FF5F]",
      borderColor: "border-[#A1FF5F]",
      metrics: "Solver Residual < 10^-11",
      desc: "Observes setup routines, eliminates manual thermodynamic/dimension input, and pre-stages the next workspace mode based on established patterns.",
      actionText: "See Aspen Solver Ground Truth",
      targetId: "#industrial"
    },
    corporate: {
      title: "Non-Technical Corporate (B2B)",
      subtitle: "Product Managers, Analysts, GTM Leads",
      badge: "TANGERINE SYNC",
      color: "#FFA048",
      textColor: "text-[#FFA048]",
      borderColor: "border-[#FFA048]",
      metrics: "Cross-Tool Pipeline Collapse",
      desc: "Tracks product launch stages, bridges disconnected docs, sheets, and analytics into a unified action queue without manual copy-paste.",
      actionText: "Explore Multi-App Orchestration",
      targetId: "#corporate"
    },
    mobile: {
      title: "Personal Phone OS (B2C)",
      subtitle: "Dynamic Hitboxes & Hardware Self-Blur",
      badge: "PREDICTIVE TOUCH",
      color: "#FFA048",
      textColor: "text-[#FFA048]",
      borderColor: "border-[#FFA048]",
      metrics: "72h Adaptive Telemetry Ramp",
      desc: "Invisibly expands hitboxes for probable next keys based on finger trajectory. Halts recording automatically on banking and personal apps.",
      actionText: "Try Interactive Keyboard Hitbox",
      targetId: "#mobile"
    },
    accessibility: {
      title: "Older & Disabled Users",
      subtitle: "24-Hour Circadian Surfacing",
      badge: "ZERO-MENU ACCESS",
      color: "#A1FF5F",
      textColor: "text-[#A1FF5F]",
      borderColor: "border-[#A1FF5F]",
      metrics: "3 Daily Anchor Moments",
      desc: "Dynamically surfaces devotionals, family video calls, and evening updates at routine hours. Eliminating menu friction beats battery micro-tuning.",
      actionText: "View 24h Circadian Arc",
      targetId: "#accessibility"
    }
  };

  const current = tabData[activeTab];

  return (
    <section id="overview" className="relative pt-12 pb-24 overflow-hidden border-b border-[#222222]">
      {/* Background Ambient Splatter Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#A1FF5F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#FFA048]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] font-['Space_Grotesk'] font-bold uppercase tracking-widest text-[#A1FF5F]">
              <span className="w-2 h-2 rounded-full bg-[#A1FF5F]" />
              <span>PRODUCT STRATEGY & CONCEPT IDEATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Space_Grotesk'] font-bold tracking-tight text-white leading-[1.08]">
              Assistive AI Tech Idea: <br />
              <span className="text-[#A1FF5F]">Ambient Workflow</span> <br />
              Optimization Engine
            </h1>

            <p className="text-lg text-[#CCCCCC] leading-relaxed max-w-2xl font-normal">
              An in-context platform that observes unscripted device routines for 2 to 3 days, learns recurring workflows and settings, and proactively executes next steps via direct software control rather than prompt engineering.
            </p>

            {/* Analogy Callout Box: Cursor / Copilot Comparison */}
            <div className="bg-[#141414] border border-[#2A2A2A] rounded-2xl p-5 space-y-3">
              <div className="text-xs font-['Space_Grotesk'] font-bold text-[#FFA048] tracking-wider uppercase flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#FFA048]" />
                <span>ARCHITECTURAL PARALLEL: BEYOND CODING COPILOTS</span>
              </div>
              <p className="text-xs text-[#AAAAAA] leading-relaxed">
                Coding assistants (Cursor, GitHub Copilot) succeed because programming syntax is rule-bound. This platform extends adaptive in-context assistance into messy, unscripted desktop and industrial environments.
              </p>
              <div className="pt-2 border-t border-[#222222] text-xs text-[#E5E5E5] flex items-start space-x-2">
                <span className="font-['Space_Grotesk'] font-bold text-[#A1FF5F] shrink-0">Assistive philosophy:</span>
                <span>Built strictly to augment human operators and eliminate manual grunt work, explicitly rejecting automation that eliminates employment.</span>
              </div>
            </div>

            {/* Authors & Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-[#888888]">
              <div>
                <span className="text-white font-['Space_Grotesk'] font-bold">Ayushya Ramesh Ojha & Aryan Jain</span>
                <span className="block text-[#666666]">Exploratory Concept & PMF Validation Framework</span>
              </div>
              <button
                onClick={onOpenDeck}
                className="inline-flex items-center space-x-2 text-[#A1FF5F] hover:text-white font-['Space_Grotesk'] font-bold transition-colors cursor-pointer"
              >
                <span>View Full 7-Slide Deck</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Live Interactive Observer Visualizer */}
          <div className="lg:col-span-5">
            <div className="bg-[#111111] border border-[#282828] rounded-3xl p-6 shadow-2xl space-y-6">
              
              {/* Laptop Screen Simulator */}
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#222222] pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#333333]" />
                    <div className="w-3 h-3 rounded-full bg-[#333333]" />
                    <div className="w-3 h-3 rounded-full bg-[#333333]" />
                    <span className="text-[11px] font-['Space_Grotesk'] text-[#888888] ml-2">SYSTEM TELEMETRY OBSERVER</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#A1FF5F]/10 text-[#A1FF5F] border border-[#A1FF5F]/30">
                    SCANNING IN CONTEXT
                  </span>
                </div>

                <div className="bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl p-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#777777]">Active Window</span>
                    <span className="text-white font-mono">{current.subtitle.split(',')[0]}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#777777]">Baseline Observation</span>
                    <span className="text-[#A1FF5F] font-bold">48h to 72h Calibrated</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#777777]">Ground Truth Gate</span>
                    <span className="text-[#FFA048] font-bold">{current.metrics}</span>
                  </div>
                </div>
              </div>

              {/* 4 Interactive Domain Trigger Nodes */}
              <div className="space-y-2">
                <div className="text-[11px] font-['Space_Grotesk'] font-bold text-[#888888] uppercase tracking-wider">
                  Target Domain Exploration:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveTab('industrial')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      activeTab === 'industrial'
                        ? 'bg-[#A1FF5F]/10 border-[#A1FF5F] text-white'
                        : 'bg-[#141414] border-[#222222] text-[#888888] hover:border-[#444444]'
                    }`}
                  >
                    <div className="text-xs font-['Space_Grotesk'] font-bold text-[#A1FF5F]">01. Industrial</div>
                    <div className="text-[11px] text-[#AAAAAA] truncate">Aspen & CAD</div>
                  </button>

                  <button
                    onClick={() => setActiveTab('corporate')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      activeTab === 'corporate'
                        ? 'bg-[#FFA048]/10 border-[#FFA048] text-white'
                        : 'bg-[#141414] border-[#222222] text-[#888888] hover:border-[#444444]'
                    }`}
                  >
                    <div className="text-xs font-['Space_Grotesk'] font-bold text-[#FFA048]">02. Corporate</div>
                    <div className="text-[11px] text-[#AAAAAA] truncate">GTM Launch</div>
                  </button>

                  <button
                    onClick={() => setActiveTab('mobile')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      activeTab === 'mobile'
                        ? 'bg-[#FFA048]/10 border-[#FFA048] text-white'
                        : 'bg-[#141414] border-[#222222] text-[#888888] hover:border-[#444444]'
                    }`}
                  >
                    <div className="text-xs font-['Space_Grotesk'] font-bold text-[#FFA048]">03. Mobile OS</div>
                    <div className="text-[11px] text-[#AAAAAA] truncate">Adaptive Touch</div>
                  </button>

                  <button
                    onClick={() => setActiveTab('accessibility')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      activeTab === 'accessibility'
                        ? 'bg-[#A1FF5F]/10 border-[#A1FF5F] text-white'
                        : 'bg-[#141414] border-[#222222] text-[#888888] hover:border-[#444444]'
                    }`}
                  >
                    <div className="text-xs font-['Space_Grotesk'] font-bold text-[#A1FF5F]">04. Accessibility</div>
                    <div className="text-[11px] text-[#AAAAAA] truncate">Circadian Arc</div>
                  </button>
                </div>
              </div>

              {/* Dynamic Domain Brief */}
              <div className="bg-[#161616] border border-[#282828] rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-['Space_Grotesk'] font-bold text-sm text-white">{current.title}</span>
                  <span className={`text-[10px] font-['Space_Grotesk'] font-bold ${current.textColor}`}>
                    {current.badge}
                  </span>
                </div>
                <p className="text-xs text-[#999999] leading-relaxed">
                  {current.desc}
                </p>
                <a
                  href={current.targetId}
                  className={`inline-flex items-center space-x-1 text-xs font-bold ${current.textColor} hover:underline`}
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
