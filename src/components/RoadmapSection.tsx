import React, { useState } from 'react';

export const RoadmapSection: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<string>('segment');

  const pointsData: Record<string, { label: string; x: number; y: number; color: string; desc: string; blocking: string; uncertainty: string }> = {
    segment: {
      label: "Segment Choice (B2B vs B2C)",
      x: 82,
      y: 22,
      color: "#16A34A",
      desc: "Selecting the initial launch domain: industrial Aspen/CAD, corporate PM workflows, or consumer accessibility. Highest uncertainty and blocking impact.",
      blocking: "CRITICAL (GATE 1)",
      uncertainty: "HIGH (UNVALIDATED PMF)"
    },
    pattern: {
      label: "Pattern Data Governance",
      x: 68,
      y: 28,
      color: "#EA580C",
      desc: "Can learned workflow shortcuts be aggregated across organizational peers with similar habits without violating individual privacy or enterprise policies?",
      blocking: "HIGH",
      uncertainty: "MEDIUM"
    },
    control: {
      label: "OS Control Depth",
      x: 52,
      y: 35,
      color: "#0F172A",
      desc: "Balancing direct OS and desktop accessibility permissions against corporate IT compliance and enterprise sandbox restrictions.",
      blocking: "MEDIUM",
      uncertainty: "MEDIUM"
    },
    autonomy: {
      label: "Prompt-First vs Action-First",
      x: 38,
      y: 45,
      color: "#EA580C",
      desc: "Design question: Should the assistant proactively stage actions in-context, or prompt the user before touching software settings?",
      blocking: "MEDIUM",
      uncertainty: "LOW-MEDIUM"
    },
    blur: {
      label: "Self-Blur Engineering",
      x: 24,
      y: 55,
      color: "#16A34A",
      desc: "Implementing hardware and window-level detection to reliably cease screen recording on banking, fintech, and sensitive document windows.",
      blocking: "SOLVED PRINCIPLE",
      uncertainty: "LOW (CLEAR PATTERN)"
    }
  };

  const activePoint = pointsData[selectedPoint];

  return (
    <section id="roadmap" className="py-24 border-b border-slate-200 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-['Space_Grotesk'] font-bold text-amber-700 uppercase tracking-wider flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>WHAT HAPPENS NEXT | STRATEGIC GATES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-slate-900 tracking-tight">
            Three gates are still open before we build anything heavy.
          </h2>
        </div>

        {/* 2D Interactive Scatter Plot */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="text-xs font-['Space_Grotesk'] font-bold text-slate-500 uppercase tracking-wider">
                OPEN QUESTIONS: BLOCKING SEVERITY (Y) VS UNCERTAINTY (X)
              </div>
              <h3 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-slate-900 mt-1">
                Risk &amp; Strategic Unknowns Matrix
              </h3>
            </div>
            <span className="text-xs text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
              Click any node to inspect risk analysis
            </span>
          </div>

          {/* Scatter Plot Visual Canvas */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 relative min-h-[220px] flex items-center justify-center overflow-hidden">
            
            {/* Axis Labels */}
            <div className="absolute top-3 left-4 text-[10px] font-['Space_Grotesk'] font-bold text-slate-500 tracking-wider uppercase">
              ^ HIGH BLOCKING SEVERITY
            </div>
            <div className="absolute bottom-3 right-4 text-[10px] font-['Space_Grotesk'] font-bold text-amber-700 tracking-wider uppercase">
              HIGH UNCERTAINTY -&gt;
            </div>

            {/* Baseline Crosshairs */}
            <div className="absolute bottom-8 left-8 right-8 border-b border-slate-200" />
            <div className="absolute top-8 bottom-8 left-8 border-l border-slate-200" />

            {/* Scatter Dots */}
            <div className="relative w-full max-w-3xl h-36">
              {(Object.keys(pointsData) as Array<keyof typeof pointsData>).map((key) => {
                const p = pointsData[key];
                const isSelected = selectedPoint === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedPoint(key)}
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center space-x-2 px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-110 z-20'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-100 z-10'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: p.color }}
                    />
                    <span className="text-xs font-['Space_Grotesk'] font-bold whitespace-nowrap">
                      {p.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Risk Inspector */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-['Space_Grotesk'] font-bold text-slate-900 text-sm">{activePoint.label}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold border border-amber-200">
                  {activePoint.blocking}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 text-slate-800 font-bold border border-slate-300">
                  {activePoint.uncertainty}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {activePoint.desc}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Numbered Milestone Markers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 p-6 rounded-3xl space-y-2 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-['Space_Grotesk'] font-bold text-amber-600">1</span>
              <span className="text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-widest bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                GATE 01
              </span>
            </div>
            <h4 className="font-['Space_Grotesk'] font-bold text-base text-slate-900">Validate Segment</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Prove customer willingness to adopt and purchase before committing to heavy algorithmic engineering.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-3xl space-y-2 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-['Space_Grotesk'] font-bold text-amber-600">2</span>
              <span className="text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-widest bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                GATE 02
              </span>
            </div>
            <h4 className="font-['Space_Grotesk'] font-bold text-base text-slate-900">Build Privacy Kernel</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Establish a tamper-proof hardware-level self-blur boundary on banking and sensitive windows.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-3xl space-y-2 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-['Space_Grotesk'] font-bold text-amber-600">3</span>
              <span className="text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-widest bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                GATE 03
              </span>
            </div>
            <h4 className="font-['Space_Grotesk'] font-bold text-base text-slate-900">Prove with Chemistry</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Calibrate predictions against Aspen / DWSIM solver convergence (residual &lt; 10^-11) as deterministic proof.
            </p>
          </div>
        </div>

        {/* 4-Phase Roadmap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm hover:-translate-y-0.5 transition-all duration-200">
            <div className="text-[10px] font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-wider">
              PHASE 01
            </div>
            <h4 className="text-base font-['Space_Grotesk'] font-bold text-slate-900">Discovery Interviews</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Interviews across target roles to confirm acute operational pain and budget ownership.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm hover:-translate-y-0.5 transition-all duration-200">
            <div className="text-[10px] font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-wider">
              PHASE 02
            </div>
            <h4 className="text-base font-['Space_Grotesk'] font-bold text-slate-900">Architecture &amp; Privacy</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Privacy rules, OS control limits, local weight retrainer, and initial keyboard hitbox prototype.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm hover:-translate-y-0.5 transition-all duration-200">
            <div className="text-[10px] font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-wider">
              PHASE 03
            </div>
            <h4 className="text-base font-['Space_Grotesk'] font-bold text-slate-900">Aspen Prototype</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Chemical simulation staging validation with verifiable physical thermodynamic solver residuals.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-5 rounded-2xl space-y-2 shadow-sm hover:-translate-y-0.5 transition-all duration-200">
            <div className="text-[10px] font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-wider">
              PHASE 04
            </div>
            <h4 className="text-base font-['Space_Grotesk'] font-bold text-slate-900">Pilot Validation</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Corporate PM workflow cross-tool launch testing under real enterprise IT security governance.
            </p>
          </div>
        </div>

        {/* Status Note Banner */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900">
          <span className="font-bold text-amber-800">Status note:</span> Exploratory concept ideation. No owners, deadlines, or capital commitments locked yet; discovery must prove PMF first.
        </div>

      </div>
    </section>
  );
};
