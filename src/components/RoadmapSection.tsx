import React, { useState } from 'react';

export const RoadmapSection: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<string>('segment');

  const pointsData: Record<string, { label: string; x: number; y: number; color: string; desc: string; blocking: string; uncertainty: string }> = {
    segment: {
      label: "Segment Choice (B2B vs B2C)",
      x: 82,
      y: 22,
      color: "#A1FF5F",
      desc: "Selecting the initial launch domain: industrial Aspen/CAD, corporate PM workflows, or consumer accessibility. Highest uncertainty and blocking impact.",
      blocking: "CRITICAL (GATE 1)",
      uncertainty: "HIGH (UNVALIDATED PMF)"
    },
    pattern: {
      label: "Pattern Data Governance",
      x: 68,
      y: 28,
      color: "#FFA048",
      desc: "Can learned workflow shortcuts be aggregated across organizational peers with similar habits without violating individual privacy or enterprise policies?",
      blocking: "HIGH",
      uncertainty: "MEDIUM"
    },
    control: {
      label: "OS Control Depth",
      x: 52,
      y: 35,
      color: "#FFFFFF",
      desc: "Balancing direct OS and desktop accessibility permissions against corporate IT compliance and enterprise sandbox restrictions.",
      blocking: "MEDIUM",
      uncertainty: "MEDIUM"
    },
    autonomy: {
      label: "Prompt-First vs Action-First",
      x: 38,
      y: 45,
      color: "#FFA048",
      desc: "Design question: Should the assistant proactively stage actions in-context, or prompt the user before touching software settings?",
      blocking: "MEDIUM",
      uncertainty: "LOW-MEDIUM"
    },
    blur: {
      label: "Self-Blur Engineering",
      x: 24,
      y: 55,
      color: "#A1FF5F",
      desc: "Implementing hardware and window-level detection to reliably cease screen recording on banking, fintech, and sensitive document windows.",
      blocking: "SOLVED PRINCIPLE",
      uncertainty: "LOW (CLEAR PATTERN)"
    }
  };

  const activePoint = pointsData[selectedPoint];

  return (
    <section id="roadmap" className="py-24 border-b border-[#222222] bg-[#0E0C0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-[11px] font-['Space_Grotesk'] font-bold text-[#FFA048] uppercase tracking-widest flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA048]" />
            <span>WHAT HAPPENS NEXT | STRATEGIC GATES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            Three gates are still open before we build anything heavy.
          </h2>
        </div>

        {/* 2D Interactive Scatter Plot */}
        <div className="bg-[#141210] border border-[#2A231C] rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-['Space_Grotesk'] font-bold text-[#888888] uppercase tracking-wider">
                OPEN QUESTIONS: BLOCKING SEVERITY (Y) VS UNCERTAINTY (X)
              </div>
              <h3 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-white mt-1">
                Risk &amp; Strategic Unknowns Matrix
              </h3>
            </div>
            <span className="text-xs text-[#AAAAAA]">
              Click any node to inspect risk analysis
            </span>
          </div>

          {/* Scatter Plot Visual Canvas */}
          <div className="bg-[#0A0A0A] border border-[#222222] rounded-2xl p-6 relative min-h-[220px] flex items-center justify-center overflow-hidden">
            
            {/* Axis Labels */}
            <div className="absolute top-3 left-4 text-[10px] font-['Space_Grotesk'] font-bold text-[#666666] tracking-wider uppercase">
              ^ HIGH BLOCKING SEVERITY
            </div>
            <div className="absolute bottom-3 right-4 text-[10px] font-['Space_Grotesk'] font-bold text-[#FFA048] tracking-wider uppercase">
              HIGH UNCERTAINTY -&gt;
            </div>

            {/* Baseline Crosshairs */}
            <div className="absolute bottom-8 left-8 right-8 border-b border-[#222222]" />
            <div className="absolute top-8 bottom-8 left-8 border-l border-[#222222]" />

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
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center space-x-2 px-2.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-110 z-20'
                        : 'bg-[#181818] border-[#333333] text-[#CCCCCC] hover:border-[#666666] z-10'
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
          <div className="bg-[#1C1814] border border-[#33281E] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-['Space_Grotesk'] font-bold text-white text-sm">{activePoint.label}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#FFA048]/10 text-[#FFA048] font-bold border border-[#FFA048]/30">
                  {activePoint.blocking}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white font-bold border border-white/20">
                  {activePoint.uncertainty}
                </span>
              </div>
              <p className="text-[#AAAAAA] leading-relaxed">
                {activePoint.desc}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Numbered Milestone Markers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#FFA048] text-black p-5 rounded-2xl space-y-2 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-['Space_Grotesk'] font-bold">1</span>
              <span className="text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-widest bg-black/15 px-2 py-0.5 rounded">
                GATE 01
              </span>
            </div>
            <h4 className="font-['Space_Grotesk'] font-bold text-base">Validate Segment</h4>
            <p className="text-xs text-black/80 leading-relaxed font-medium">
              Prove customer willingness to adopt and purchase before committing to heavy algorithmic engineering.
            </p>
          </div>

          <div className="bg-[#FFA048] text-black p-5 rounded-2xl space-y-2 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-['Space_Grotesk'] font-bold">2</span>
              <span className="text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-widest bg-black/15 px-2 py-0.5 rounded">
                GATE 02
              </span>
            </div>
            <h4 className="font-['Space_Grotesk'] font-bold text-base">Build Privacy Kernel</h4>
            <p className="text-xs text-black/80 leading-relaxed font-medium">
              Establish a tamper-proof hardware-level self-blur boundary on banking and sensitive windows.
            </p>
          </div>

          <div className="bg-[#FFA048] text-black p-5 rounded-2xl space-y-2 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-['Space_Grotesk'] font-bold">3</span>
              <span className="text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-widest bg-black/15 px-2 py-0.5 rounded">
                GATE 03
              </span>
            </div>
            <h4 className="font-['Space_Grotesk'] font-bold text-base">Prove with Chemistry</h4>
            <p className="text-xs text-black/80 leading-relaxed font-medium">
              Calibrate predictions against Aspen / DWSIM solver convergence (residual &lt; 10^-11) as deterministic proof.
            </p>
          </div>
        </div>

        {/* 4-Phase Roadmap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#121412] border border-[#222E22] p-5 rounded-2xl space-y-2">
            <div className="text-[10px] font-['Space_Grotesk'] font-bold text-[#A1FF5F] uppercase tracking-wider">
              PHASE 01
            </div>
            <h4 className="text-base font-['Space_Grotesk'] font-bold text-white">Discovery Interviews</h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              20 user interviews across target roles to confirm acute operational pain and budget ownership.
            </p>
          </div>

          <div className="bg-[#121412] border border-[#222E22] p-5 rounded-2xl space-y-2">
            <div className="text-[10px] font-['Space_Grotesk'] font-bold text-[#A1FF5F] uppercase tracking-wider">
              PHASE 02
            </div>
            <h4 className="text-base font-['Space_Grotesk'] font-bold text-white">Architecture &amp; Privacy</h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Privacy rules, OS control limits, local weight retrainer, and initial keyboard hitbox prototype.
            </p>
          </div>

          <div className="bg-[#121412] border border-[#222E22] p-5 rounded-2xl space-y-2">
            <div className="text-[10px] font-['Space_Grotesk'] font-bold text-[#A1FF5F] uppercase tracking-wider">
              PHASE 03
            </div>
            <h4 className="text-base font-['Space_Grotesk'] font-bold text-white">Aspen / DWSIM Prototype</h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Chemical simulation staging validation with verifiable physical thermodynamic solver residuals.
            </p>
          </div>

          <div className="bg-[#121412] border border-[#222E22] p-5 rounded-2xl space-y-2">
            <div className="text-[10px] font-['Space_Grotesk'] font-bold text-[#A1FF5F] uppercase tracking-wider">
              PHASE 04
            </div>
            <h4 className="text-base font-['Space_Grotesk'] font-bold text-white">Enterprise Pilot</h4>
            <p className="text-xs text-[#888888] leading-relaxed">
              Corporate PM workflow cross-tool launch testing under real enterprise IT security governance.
            </p>
          </div>
        </div>

        {/* Honest Status Note Banner */}
        <div className="p-4 rounded-2xl bg-[#161210] border border-[#332218] text-xs sm:text-sm text-[#CCCCCC]">
          <span className="font-bold text-[#FFA048]">Status note:</span> Exploratory concept ideation. No owners, deadlines, or capital commitments locked yet; discovery must prove PMF first.
        </div>

      </div>
    </section>
  );
};
