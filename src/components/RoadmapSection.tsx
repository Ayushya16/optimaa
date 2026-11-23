import React, { useState } from 'react';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const [selectedGate, setSelectedGate] = useState<'beachhead' | 'depth' | 'privacy'>('beachhead');

  const gatesData = {
    beachhead: {
      number: "1",
      title: "Gate 1: Beachhead Market Choice",
      subtitle: "B2B DWSIM Engineers vs D2C Elderly Smartphone Care",
      color: "#16A34A",
      bgPill: "bg-emerald-100 text-emerald-800",
      question: "Which market do we build and validate first?",
      plainExplanation: "With seed-stage grant funding, we cannot build both an engineering simulation tool and an elderly accessibility app simultaneously. We must pick one sharp beachhead. DWSIM offers clear mathematical solver verification (< 10^-11 residual), while elderly care offers immediate emotional daily relief.",
      currentHypothesis: "Target BITS Pilani chemical engineering students and lab modelers using open DWSIM as our initial technical proving ground, while continuing family discovery interviews for the elderly care roadmap."
    },
    depth: {
      number: "2",
      title: "Gate 2: Integration Depth",
      subtitle: "Native DWSIM Python Plugin vs System-Wide OS Daemon",
      color: "#EA580C",
      bgPill: "bg-amber-100 text-amber-800",
      question: "How deep into the operating system should our assistant go?",
      plainExplanation: "A native Python plugin built directly inside open-source DWSIM is fast to prototype, zero-risk, and easily approved by university and corporate IT. In contrast, an OS-level accessibility daemon can observe any application on your desktop, but requires deeper operating system permissions and security review.",
      currentHypothesis: "Build a lightweight native Python extension inside DWSIM first. Once parameter pre-staging is proven, expand outward into OS-level accessibility hooks."
    },
    privacy: {
      number: "3",
      title: "Gate 3: Data Architecture",
      subtitle: "Strict Local-Only Weights vs Shared Workflow Shortcuts",
      color: "#0F172A",
      bgPill: "bg-slate-200 text-slate-800",
      question: "Does the model learn 100% on your laptop, or can teams share shortcuts?",
      plainExplanation: "If model weights stay strictly on your local machine, user privacy is 100% airtight and zero data leaves your device. However, if anonymized routine shortcuts can be shared, new engineers joining a team could instantly benefit from colleagues' past workflows.",
      currentHypothesis: "Guarantee 100% strictly local on-chip learning for all individual users. Only explore anonymized pattern sharing if enterprise teams explicitly request it with opt-in governance."
    }
  };

  const active = gatesData[selectedGate];

  return (
    <section id="roadmap" className="py-24 border-b border-slate-200 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-['Space_Grotesk'] font-bold text-amber-700 uppercase tracking-wider flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>WHAT HAPPENS NEXT | STRATEGIC DECISIONS &amp; ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-slate-900 tracking-tight">
            Three critical decisions to validate before writing heavy code.
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl">
            Because this is an idea-stage venture, our initial capital should not be spent guessing. Here are the three practical strategic forks we must test with early users, followed by our 6-month milestones.
          </p>
        </div>

        {/* 3 Strategic Decision Cards (Interactive Selector) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(Object.keys(gatesData) as Array<keyof typeof gatesData>).map((key) => {
            const g = gatesData[key];
            const isSelected = selectedGate === key;
            return (
              <div
                key={key}
                onClick={() => setSelectedGate(key)}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer space-y-3 ${
                  isSelected
                    ? 'bg-white border-amber-500 shadow-md -translate-y-1 ring-2 ring-amber-500/20'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-2xl font-['Space_Grotesk'] font-bold ${isSelected ? 'text-amber-600' : 'text-slate-400'}`}>
                    {g.number}
                  </span>
                  <span className={`text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${g.bgPill}`}>
                    DECISION {g.number}
                  </span>
                </div>
                <h4 className="font-['Space_Grotesk'] font-bold text-base text-slate-900">
                  {g.title.split(': ')[1]}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {g.question}
                </p>
              </div>
            );
          })}
        </div>

        {/* Active Strategic Gate Deep-Dive Inspector */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="text-xs font-['Space_Grotesk'] font-bold text-amber-700 uppercase tracking-wider">
                STRATEGIC FORK INSPECTION
              </div>
              <h3 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-slate-900 mt-1">
                {active.title}
              </h3>
              <span className="text-xs text-slate-500">{active.subtitle}</span>
            </div>
            <span className={`self-start sm:self-auto text-xs font-bold px-3 py-1 rounded-full ${active.bgPill}`}>
              Core Question: {active.question}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
              <div className="font-['Space_Grotesk'] font-bold text-slate-900 text-sm flex items-center space-x-1.5">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <span>Why This Decision Matters (In Plain Terms):</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-xs">
                {active.plainExplanation}
              </p>
            </div>

            <div className="space-y-2 bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200">
              <div className="font-['Space_Grotesk'] font-bold text-emerald-900 text-sm flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Our Proposed Testing Hypothesis:</span>
              </div>
              <p className="text-emerald-800 leading-relaxed text-xs">
                {active.currentHypothesis}
              </p>
            </div>
          </div>
        </div>

        {/* 4-Phase Practical Roadmap Grid */}
        <div className="space-y-4">
          <div className="text-xs font-['Space_Grotesk'] font-bold text-slate-500 uppercase tracking-wider">
            6-MONTH PRACTICAL EXECUTION TIMELINE:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-wider">
                  PHASE 01 (MONTH 1-2)
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">Discovery</span>
              </div>
              <h4 className="text-base font-['Space_Grotesk'] font-bold text-slate-900">Problem Interviews</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                25 interviews with DWSIM engineering students and elderly caregivers to confirm acute friction and pick the beachhead.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-wider">
                  PHASE 02 (MONTH 3)
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">Prototype</span>
              </div>
              <h4 className="text-base font-['Space_Grotesk'] font-bold text-slate-900">DWSIM Python Plugin</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Build a lightweight 1-click parameter pre-staging extension directly in open-source DWSIM.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-wider">
                  PHASE 03 (MONTH 4)
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">Privacy</span>
              </div>
              <h4 className="text-base font-['Space_Grotesk'] font-bold text-slate-900">Privacy Self-Blur Kernel</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Implement deterministic window-level pause for banking apps with zero background logging.
              </p>
            </div>

            <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-wider">
                  PHASE 04 (MONTH 5-6)
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">Validation</span>
              </div>
              <h4 className="text-base font-['Space_Grotesk'] font-bold text-slate-900">Student Lab Pilot</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Deploy with 15 chemical engineering lab students at BITS Pilani to measure actual workflow time saved.
              </p>
            </div>
          </div>
        </div>

        {/* Status Note Banner */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900">
          <span className="font-bold text-amber-800">Status note:</span> Exploratory concept ideation for BITS Pilani First Principles Fund. The early grant will test and validate these exact three strategic gates.
        </div>

      </div>
    </section>
  );
};
