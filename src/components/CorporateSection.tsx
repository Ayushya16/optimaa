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
      color: "#EA580C",
      ambientAction: "Aggregates interview notes into PRD feature specs; flags conflicting user stories across Google Docs and Notion."
    },
    gtm: {
      name: "2. GTM Setup",
      tools: ["Launch Calendar", "Task Handoffs", "Partner Notes"],
      color: "#EA580C",
      ambientAction: "Syncs sprint velocity with launch milestones; auto-stages task handoff checklists across Linear, Jira, and Slack."
    },
    metrics: {
      name: "3. Metrics Review",
      tools: ["Analytics CTR", "Revenue Tallies", "SEO Audit"],
      color: "#EA580C",
      ambientAction: "Continuously streams weekly cohort retention and CTR deltas from Mixpanel and Sheets directly into executive review decks."
    },
    demo: {
      name: "4. Demo",
      tools: ["Leadership Deck", "Exec Summary", "Asset Pack"],
      color: "#EA580C",
      ambientAction: "Extracts latest verified product KPIs and auto-populates slide layouts, eliminating manual copy-pasting before board reviews."
    }
  };

  return (
    <section id="corporate" className="py-24 border-b border-slate-200 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-['Space_Grotesk'] font-bold text-amber-700 uppercase tracking-wider flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>USE CASE 02 | NON-TECHNICAL CORPORATE OPERATORS (B2B)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-slate-900 tracking-tight">
            A product launch hops across too many tools, and demand still has to be proven.
          </h2>
        </div>

        {/* Top Feature: Interactive Product Launch Lifecycle */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="text-xs font-['Space_Grotesk'] font-bold text-slate-500 uppercase tracking-wider">
                PRODUCT LAUNCH LIFECYCLE &amp; TOOL COLLAPSE
              </div>
              <h3 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-slate-900 mt-1">
                Context-Aware Multi-Tool Orchestration
              </h3>
            </div>
            <span className="text-xs font-['Space_Grotesk'] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
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
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-amber-500 text-white border-amber-500 shadow-md -translate-y-0.5'
                      : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'
                  }`}
                >
                  <div className={`text-xs font-['Space_Grotesk'] font-bold ${isSelected ? 'text-white' : 'text-amber-700'}`}>
                    {s.name}
                  </div>
                  <div className="mt-2 space-y-1">
                    {s.tools.map((t, idx) => (
                      <div
                        key={idx}
                        className={`text-[11px] px-2 py-0.5 rounded truncate ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-white text-slate-600 border border-slate-200/60'
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

          {/* Active Stage Detail Banner */}
          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs transition-all duration-300">
            <div className="space-y-1">
              <span className="font-['Space_Grotesk'] font-bold text-amber-900 text-sm">
                Ambient Assist in {stagesData[activeStage].name}:
              </span>
              <p className="text-slate-700 leading-relaxed">
                {stagesData[activeStage].ambientAction}
              </p>
            </div>
            <div className="shrink-0 flex items-center space-x-1 text-amber-800 font-bold bg-white px-3 py-1.5 rounded-xl border border-amber-200 shadow-2xs">
              <span>Next step auto-staged</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* 2-Column Split: Pipeline Diagram (Left) and Open Questions Checklist (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Multi-App Orchestration Pipeline */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
            <div>
              <span className="text-xs font-['Space_Grotesk'] font-bold text-slate-500 uppercase tracking-wider">
                ORCHESTRATION PIPELINE
              </span>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-slate-900 mt-1">
                Multi-Tool Hopping Collapses Into One Assistant
              </h3>
            </div>

            {/* Visual Process Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-['Space_Grotesk'] font-bold text-slate-500 uppercase tracking-widest">
                  STEP 01: EXTRACT
                </span>
                <div className="font-bold text-slate-900">Scrape Unstructured Inputs</div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Passively tracks feature specs and meeting notes as you write them in Google Docs and Notion.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <span className="text-[10px] font-['Space_Grotesk'] font-bold text-amber-700 uppercase tracking-widest">
                  STEP 02: CORRELATE
                </span>
                <div className="font-bold text-slate-900">Bridge Disconnected Workspaces</div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Identifies dependencies across Sheets sprint tracking and product roadmap timelines.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <span className="text-[10px] font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-widest">
                  STEP 03: SYNTHESIZE
                </span>
                <div className="font-bold text-slate-900">Pre-Stage Review Assets</div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Generates ready-to-share summaries and slide layouts before weekly operational syncs.
                </p>
              </div>
            </div>

            {/* Bullets with Bold Lead-ins */}
            <div className="space-y-2.5 text-sm text-slate-700 pt-2">
              <div className="flex items-start space-x-2">
                <span className="font-bold text-slate-900 shrink-0">• Cross-app fragmentation:</span>
                <span>Teams waste hours manually syncing tasks, notes, and analytics metrics across 4 to 6 separate applications.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-bold text-slate-900 shrink-0">• Role-based initialization:</span>
                <span>Department and job role information provides the system with a sensible baseline for typical routines.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-bold text-slate-900 shrink-0">• Collective pattern sharing:</span>
                <span>Learned shortcuts can be pooled across teams with similar roles, raising privacy and data-ownership considerations.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Customer Discovery Checklist & GTM Validation */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md">
            <div>
              <span className="text-xs font-['Space_Grotesk'] font-bold text-amber-700 uppercase tracking-wider">
                PMF VALIDATION GATES
              </span>
              <h3 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-slate-900 mt-1">
                Customer Discovery Gates
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Before building extensive integrations, these three validation gates must be verified through user interviews:
            </p>

            {/* Interactive Checklist */}
            <div className="space-y-3">
              <div
                onClick={() => toggleChecklist('discovery')}
                className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start space-x-3 text-xs ${
                  checklist.discovery
                    ? 'bg-emerald-50 border-emerald-300 text-slate-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                {checklist.discovery ? (
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <div className="space-y-0.5">
                  <span className="font-bold block">1. Prove Acute Operational Pain</span>
                  <span className="text-slate-500">Conduct 20+ qualitative interviews across product managers and GTM leads to confirm workflow pain points.</span>
                </div>
              </div>

              <div
                onClick={() => toggleChecklist('pmf')}
                className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start space-x-3 text-xs ${
                  checklist.pmf
                    ? 'bg-emerald-50 border-emerald-300 text-slate-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                {checklist.pmf ? (
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <div className="space-y-0.5">
                  <span className="font-bold block">2. Confirm Budget Ownership</span>
                  <span className="text-slate-500">Determine whether team leads possess discretionary software budget for in-situ workflow optimization.</span>
                </div>
              </div>

              <div
                onClick={() => toggleChecklist('procurement')}
                className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start space-x-3 text-xs ${
                  checklist.procurement
                    ? 'bg-emerald-50 border-emerald-300 text-slate-900'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                {checklist.procurement ? (
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                )}
                <div className="space-y-0.5">
                  <span className="font-bold block">3. Corporate IT Compliance</span>
                  <span className="text-slate-500">Confirm feasibility of running a passive observation daemon under standard enterprise IT security policies.</span>
                </div>
              </div>
            </div>

            {/* Checklist Status Pill */}
            <div className="pt-2">
              {Object.values(checklist).every(Boolean) ? (
                <div className="p-3 bg-emerald-100 border border-emerald-300 rounded-xl text-xs font-bold text-emerald-900 text-center animate-pulse">
                  All 3 discovery gates cleared for pilot onboarding!
                </div>
              ) : (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-center font-medium">
                  Click the gates above as discovery validation milestones are achieved.
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
