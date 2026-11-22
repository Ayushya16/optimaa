import React, { useState } from 'react';
import { CheckSquare, Square, ArrowRight } from 'lucide-react';

export const CorporateSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'ideation' | 'gtm' | 'metrics' | 'demo'>('gtm');
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    discovery: false,
    pmf: false,
    procurement: false
  });

  const toggleChecklist = (key: string) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const stagesData = {
    ideation: {
      name: "1. Ideation",
      tools: ["Docs Specs", "User Notes", "PRD Drafts"],
      color: "#FFA048",
      ambientAction: "Aggregates interview notes into PRD feature specs; flags conflicting user stories across Google Docs & Notion."
    },
    gtm: {
      name: "2. GTM Setup",
      tools: ["Launch Calendar", "Task Handoffs", "Partner Notes"],
      color: "#FFA048",
      ambientAction: "Syncs sprint velocity with launch milestones; auto-stages task handoff checklists across Linear, Jira, and Slack."
    },
    metrics: {
      name: "3. Metrics Review",
      tools: ["Analytics CTR", "Revenue Tallies", "SEO Audit"],
      color: "#FFA048",
      ambientAction: "Continuously streams weekly cohort retention and CTR deltas from Mixpanel and Sheets directly into executive review decks."
    },
    demo: {
      name: "4. Demo",
      tools: ["Leadership Deck", "Exec Summary", "Asset Pack"],
      color: "#FFA048",
      ambientAction: "Extracts latest verified product KPIs and auto-populates slide layouts, eliminating manual copy-pasting before board reviews."
    }
  };

  return (
    <section id="corporate" className="py-24 border-b border-[#222222] bg-[#0E0C0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-[11px] font-['Space_Grotesk'] font-bold text-[#FFA048] uppercase tracking-widest flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA048]" />
            <span>USE CASE 02 | NON-TECHNICAL CORPORATE OPERATORS (B2B)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            A product launch hops across too many tools, and demand still has to be proven.
          </h2>
        </div>

        {/* Top Feature: Interactive Product Launch Lifecycle */}
        <div className="bg-[#141210] border border-[#2B221B] rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-['Space_Grotesk'] font-bold text-[#888888] uppercase tracking-wider">
                PRODUCT LAUNCH LIFECYCLE &amp; TOOL COLLAPSE
              </div>
              <h3 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-white mt-1">
                Context-Aware Multi-Tool Orchestration
              </h3>
            </div>
            <span className="text-xs font-['Space_Grotesk'] font-bold text-[#FFA048] bg-[#FFA048]/10 border border-[#FFA048]/30 px-3 py-1 rounded-full">
              TARGET: PRODUCT MANAGERS &amp; ANALYSTS
            </span>
          </div>

          {/* 4 Interactive Stage Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(Object.keys(stagesData) as Array<keyof typeof stagesData>).map((key) => {
              const s = stagesData[key];
              const isSelected = activeStage === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveStage(key)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#FFA048] text-black border-[#FFA048] shadow-lg'
                      : 'bg-[#181512] text-white border-[#2A231C] hover:border-[#44372C]'
                  }`}
                >
                  <div className={`text-xs font-['Space_Grotesk'] font-bold ${isSelected ? 'text-black' : 'text-[#FFA048]'}`}>
                    {s.name}
                  </div>
                  <div className="mt-2 space-y-1">
                    {s.tools.map((t, idx) => (
                      <div
                        key={idx}
                        className={`text-[11px] px-2 py-0.5 rounded truncate ${
                          isSelected ? 'bg-black/15 text-black' : 'bg-[#221D17] text-[#AAAAAA]'
                        }`}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Ambient Assist Action Bar */}
          <div className="bg-[#1C1814] border border-[#33281E] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-['Space_Grotesk'] font-bold text-[#FFA048] uppercase tracking-widest">
                AUTOMATED ASSIST ACTION ({stagesData[activeStage].name.toUpperCase()})
              </span>
              <p className="text-xs sm:text-sm text-[#DDDDDD] leading-relaxed">
                {stagesData[activeStage].ambientAction}
              </p>
            </div>
            <div className="shrink-0 flex items-center space-x-2 bg-[#A1FF5F] text-black font-['Space_Grotesk'] font-bold text-xs px-3.5 py-2 rounded-xl">
              <span>UNIFIED ASSIST</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Bottom Split: Checklist (Left) & Pipeline Diagram (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Customer Discovery Checklist (Coral Card) */}
          <div className="lg:col-span-7 bg-[#FF7A59] text-black rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <div className="text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase opacity-75">
                UNRESOLVED BUSINESS VALIDATION GATES
              </div>
              <h3 className="text-2xl sm:text-3xl font-['Space_Grotesk'] font-bold tracking-tight text-black mt-1">
                Customer Discovery Checklist (All Open)
              </h3>
              <p className="text-xs text-black/80 mt-1">
                Feasibility is not product-market fit. Discovery interviews must validate acute manual pain before deep code investment.
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
              <div
                onClick={() => toggleChecklist('discovery')}
                className="bg-black/8 hover:bg-black/12 p-3.5 rounded-xl border border-black/10 flex items-start space-x-3 cursor-pointer transition-all"
              >
                {checklist.discovery ? (
                  <CheckSquare className="w-5 h-5 text-black shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-5 h-5 text-black/60 shrink-0 mt-0.5" />
                )}
                <div className="text-xs sm:text-sm text-black">
                  <span className="font-bold">Customer discovery:</span> 20 operator interviews across target product roles to prove acute launch friction.
                </div>
              </div>

              <div
                onClick={() => toggleChecklist('pmf')}
                className="bg-black/8 hover:bg-black/12 p-3.5 rounded-xl border border-black/10 flex items-start space-x-3 cursor-pointer transition-all"
              >
                {checklist.pmf ? (
                  <CheckSquare className="w-5 h-5 text-black shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-5 h-5 text-black/60 shrink-0 mt-0.5" />
                )}
                <div className="text-xs sm:text-sm text-black">
                  <span className="font-bold">PMF evidence:</span> Validate if operators find manual context-switching painful enough to purchase dedicated tooling.
                </div>
              </div>

              <div
                onClick={() => toggleChecklist('procurement')}
                className="bg-black/8 hover:bg-black/12 p-3.5 rounded-xl border border-black/10 flex items-start space-x-3 cursor-pointer transition-all"
              >
                {checklist.procurement ? (
                  <CheckSquare className="w-5 h-5 text-black shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-5 h-5 text-black/60 shrink-0 mt-0.5" />
                )}
                <div className="text-xs sm:text-sm text-black">
                  <span className="font-bold">Buying process:</span> Map software procurement approval steps, IT security reviews, and department budgets.
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-black/70 font-semibold border-t border-black/15">
              Click items to test PMF validation readiness. Currently all gates are exploratory and unvalidated.
            </div>
          </div>

          {/* Right: Multi-App Orchestration Pipeline */}
          <div className="lg:col-span-5 bg-[#141214] border border-[#2B2022] rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="text-[11px] font-['Space_Grotesk'] font-bold text-[#FFA048] uppercase tracking-wider">
                WORKFLOW SYNCHRONIZATION
              </div>
              <h3 className="text-lg sm:text-xl font-['Space_Grotesk'] font-bold text-white mt-1">
                Multi-App Orchestration Pipeline
              </h3>
            </div>

            {/* SVG Pipeline Diagram */}
            <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-4 flex items-center justify-center">
              <svg width="300" height="150" viewBox="0 0 300 150" fill="none">
                {/* 3 Source App Nodes */}
                <rect x="20" y="15" width="45" height="32" rx="6" fill="#1C1814" stroke="#FFA048" strokeWidth="1.5" />
                <path d="M 32 25 L 53 25 M 32 32 L 47 32 M 32 39 L 42 39" stroke="#FFA048" strokeWidth="1.2" />
                <text x="70" y="35" fill="#888888" fontSize="10" fontFamily="sans-serif">Docs</text>

                <rect x="20" y="58" width="45" height="32" rx="6" fill="#1C1814" stroke="#FFA048" strokeWidth="1.5" />
                <line x1="20" y1="74" x2="65" y2="74" stroke="#FFA048" strokeWidth="1" />
                <line x1="42" y1="58" x2="42" y2="90" stroke="#FFA048" strokeWidth="1" />
                <text x="70" y="78" fill="#888888" fontSize="10" fontFamily="sans-serif">Sheets</text>

                <rect x="20" y="102" width="45" height="32" rx="6" fill="#1C1814" stroke="#FFA048" strokeWidth="1.5" />
                <path d="M 28 124 L 36 118 L 44 122 L 54 112" stroke="#FFA048" strokeWidth="1.2" fill="none" />
                <text x="70" y="122" fill="#888888" fontSize="10" fontFamily="sans-serif">Metrics</text>

                {/* Connecting Lines into Central Sync Hub */}
                <path d="M 65 31 C 110 31, 110 74, 140 74" stroke="#FFA048" strokeWidth="1.5" fill="none" />
                <path d="M 65 74 L 140 74" stroke="#FFA048" strokeWidth="1.5" fill="none" />
                <path d="M 65 118 C 110 118, 110 74, 140 74" stroke="#FFA048" strokeWidth="1.5" fill="none" />

                {/* Central Sync Hub */}
                <rect x="140" y="50" width="48" height="48" rx="12" fill="#FFA048" stroke="#FFA048" strokeWidth="1.5" />
                <path d="M 158 64 A 8 8 0 1 1 170 76 M 170 76 L 166 76 M 170 76 L 170 72" stroke="#000000" strokeWidth="2" fill="none" />

                {/* Output Arrow into Unified Action Queue */}
                <line x1="188" y1="74" x2="225" y2="74" stroke="#A1FF5F" strokeWidth="2" />
                <polygon points="225,74 218,70 218,78" fill="#A1FF5F" />

                {/* Unified Output Stub */}
                <rect x="228" y="56" width="56" height="36" rx="8" fill="#A1FF5F" />
                <text x="238" y="78" fill="#000000" fontSize="10" fontWeight="bold" fontFamily="sans-serif">ACTION</text>
              </svg>
            </div>

            <p className="text-xs text-[#999999] leading-relaxed">
              Document edits, spreadsheet metrics, and presentation decks continually synchronize through ambient event listeners into one unified action queue.
            </p>

            <div className="pt-2 text-xs text-[#FFA048] font-['Space_Grotesk'] font-bold border-t border-[#2A2022]">
              Domain priority: Closest to team experience, but discovery must precede development.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
