import React, { useState } from 'react';
import { Activity } from 'lucide-react';

export const IndustrialSection: React.FC = () => {
  const [isPreStaged, setIsPreStaged] = useState<boolean>(true);
  const [selectedComponent, setSelectedComponent] = useState<string>('trays');

  const componentDetails: Record<string, { title: string; desc: string; tag: string }> = {
    trays: {
      title: "DWSIM Fractionation Trays (Stages 1-28)",
      desc: "Vapor-liquid phase equilibrium calculated via DWSIM's CAPE-OPEN thermodynamic packages (NRTL/Peng-Robinson). Stage convergence residual: 8.42e-12.",
      tag: "DWSIM THERMODYNAMIC SOLVER PROOF"
    },
    condenser: {
      title: "Overhead Total Condenser & Reflux Drum",
      desc: "Distillate draw rate: 42.5 kmol/h. Reflux ratio pre-staged at 2.45 via DWSIM Python automation bridge based on historical column runs.",
      tag: "REFLUX SPECIFICATION"
    },
    feed: {
      title: "Inlet Feed Stage (Stage 14)",
      desc: "Feed temperature 423.15 K, pressure 3.25 bar. Auto-populated directly from upstream reactor effluent stream definition.",
      tag: "STREAM MATCHING"
    },
    reboiler: {
      title: "Kettle Reboiler & Bottoms Draw",
      desc: "Duty requirement: 1.82 MW. Bottom product specifications pre-set to prevent reboiler fouling limits.",
      tag: "HEAT BALANCE"
    }
  };

  return (
    <section id="industrial" className="py-24 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-wider flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>USE CASE 01 | DWSIM PROCESS SIMULATION (B2B)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-slate-900 tracking-tight">
            Simulation setup is repetitive, so DWSIM can learn it and stage it for you.
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl">
            Why DWSIM as our initial testing ground: It is fully open-source, scriptable via Python APIs, and free of closed proprietary licensing hurdles—making it the ideal environment to prove that solver convergence (residual &lt; 10^-11) guarantees zero hallucination.
          </p>
        </div>

        {/* 2-Column Exhibit Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: DWSIM Setup Split */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-6 elevation-card elevation-hover">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase text-emerald-700">
                  DWSIM OPEN SIMULATOR SETUP
                </span>
                <h3 className="text-2xl sm:text-3xl font-['Space_Grotesk'] font-bold tracking-tight text-slate-900 mt-1">
                  Manual vs Pre-Staged Setup
                </h3>
              </div>

              {/* Interactive Toggle */}
              <div className="flex items-center bg-slate-100/80 p-1 rounded-xl border border-slate-200">
                <button
                  onClick={() => setIsPreStaged(false)}
                  className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                    !isPreStaged ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Manual (Empty)
                </button>
                <button
                  onClick={() => setIsPreStaged(true)}
                  className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                    isPreStaged ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  In-Context Staged
                </button>
              </div>
            </div>

            {/* Split Comparison Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/90 font-mono text-xs">
              <div className="space-y-2">
                <div className="font-['Space_Grotesk'] font-bold text-[11px] uppercase tracking-wider text-slate-500">
                  {isPreStaged ? "BEFORE: MANUAL REPETITION" : "ACTIVE: MANUAL SETUP"}
                </div>
                <div className="space-y-1.5 text-slate-700">
                  <div>Inlet Temp: <span className="text-slate-400 font-normal">[ empty ]</span></div>
                  <div>Pressure: <span className="text-slate-400 font-normal">[ empty ]</span></div>
                  <div>Feed Flow: <span className="text-slate-400 font-normal">[ empty ]</span></div>
                  <div>Property Package: <span className="text-slate-400 font-normal">[ not set ]</span></div>
                  <div>Flash Algorithm: <span className="text-slate-400 font-normal">[ default nested ]</span></div>
                </div>
              </div>

              <div className="space-y-2 border-t sm:border-t-0 sm:border-l border-slate-200 pt-2 sm:pt-0 sm:pl-4">
                <div className="font-['Space_Grotesk'] font-bold text-[11px] uppercase tracking-wider text-slate-900 flex items-center justify-between">
                  <span>AFTER: ADAPTIVE PREFILL</span>
                  {isPreStaged && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />}
                </div>
                <div className="space-y-1.5 font-semibold text-slate-800">
                  <div>Inlet Temp: <span className={isPreStaged ? "bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded transition-all" : "opacity-40"}>423.15 K</span></div>
                  <div>Pressure: <span className={isPreStaged ? "bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded transition-all" : "opacity-40"}>3.25 bar</span></div>
                  <div>Feed Flow: <span className={isPreStaged ? "bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded transition-all" : "opacity-40"}>125.0 kmol/h</span></div>
                  <div>Property Package: <span className={isPreStaged ? "bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded transition-all" : "opacity-40"}>NRTL / PR</span></div>
                  <div>Flash Algorithm: <span className={isPreStaged ? "bg-emerald-600 text-white px-1.5 py-0.5 rounded transition-all" : "opacity-40"}>Auto-Staged Inside-Out</span></div>
                </div>
              </div>
            </div>

            {/* Solver Residual Metric Banner */}
            <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center justify-between text-xs font-['Space_Grotesk'] font-bold tracking-wide shadow-xs">
              <span className="text-emerald-400">CHECKABLE DWSIM SOLVER RESIDUAL: &lt; 10^-11</span>
              <span className="bg-emerald-500 text-slate-950 px-2.5 py-0.5 rounded text-[11px]">
                CONVERGED
              </span>
            </div>

            {/* Bullets with Bold Lead-ins */}
            <div className="space-y-2.5 text-sm text-slate-700">
              <div className="flex items-start space-x-2">
                <span className="font-bold text-slate-900 shrink-0">• Setup friction:</span>
                <span>Chemical engineering students and process modelers enter identical thermodynamic property packages, binary parameters, and feed streams before every single simulation run.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-bold text-slate-900 shrink-0">• Open Python APIs:</span>
                <span>DWSIM exposes scriptable Python automation interfaces, allowing Optimaa to pre-populate flowsheet properties directly without fragile UI macro workarounds.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-bold text-slate-900 shrink-0">• Deterministic proof:</span>
                <span>Unlike probabilistic LLMs that hallucinate, every staged parameter set is validated against DWSIM thermodynamic flash solver convergence before execution.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Flow, Harvey Balls, and Technical Flowsheet */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 3-Step Flow */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 shadow-xs">
              <div className="text-xs font-['Space_Grotesk'] font-bold text-emerald-800 uppercase tracking-wider">
                In-Context Adaptation Sequence:
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0">1</div>
                  <div>
                    <span className="text-slate-900 font-bold block">Observe normal setup routines</span>
                    <span className="text-slate-500">Watches property package selections and stream definitions over initial uses.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0">2</div>
                  <div>
                    <span className="text-slate-900 font-bold block">Auto-stage the next mode</span>
                    <span className="text-slate-500">Pre-fills validated parameters and prepares the distillation flowsheet view.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center shrink-0">3</div>
                  <div>
                    <span className="text-slate-900 font-bold block">User corrects and calibrates</span>
                    <span className="text-slate-500">Operator overrides instantly retrain local parameter weights.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sector Fit Matrix with Harvey Balls */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs">
              <div className="text-xs font-['Space_Grotesk'] font-bold text-slate-500 uppercase tracking-wider">
                Sector Fit Assessment &amp; Initial Proving Ground:
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                  <span className="text-slate-800 font-medium">DWSIM Process Simulation</span>
                  <div className="flex items-center space-x-1.5 text-emerald-700 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>Prime Proving Ground (Open-source, Python API)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                  <span className="text-slate-800 font-medium">Plastics &amp; Mold Manufacturing</span>
                  <div className="flex items-center space-x-1.5 text-emerald-700 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>Full (Standardized mold cycles)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                  <span className="text-slate-800 font-medium">CAD &amp; 3D Modeling</span>
                  <div className="flex items-center space-x-1.5 text-amber-700 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full border border-amber-500 bg-amber-400" />
                    <span>Half (Repetitive axis &amp; sketch toggling)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-800 font-medium">Automotive Testing Suites</span>
                  <div className="flex items-center space-x-1.5 text-slate-400 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full border border-slate-400" />
                    <span>Empty (Toolchains already heavily automated)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive DWSIM Distillation Column Flowsheet */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-['Space_Grotesk'] font-bold text-emerald-700 tracking-wider uppercase">
                    PHYSICAL GROUND TRUTH BENCHMARK
                  </div>
                  <h4 className="text-sm font-['Space_Grotesk'] font-bold text-slate-900">
                    DWSIM Distillation Column Flowsheet
                  </h4>
                </div>
                <Activity className="w-4 h-4 text-emerald-600" />
              </div>

              {/* Interactive SVG Flowsheet */}
              <div className="flex items-center justify-center p-3 bg-slate-50 rounded-xl border border-slate-200">
                <svg width="280" height="150" viewBox="0 0 280 150" fill="none" className="overflow-visible">
                  {/* Column Body */}
                  <rect x="70" y="20" width="46" height="110" rx="12" stroke="#16A34A" strokeWidth="2" fill="#F0FDF4" />
                  
                  {/* Internal Trays (Clickable) */}
                  <line x1="72" y1="42" x2="114" y2="42" stroke="#16A34A" strokeWidth="1.5" strokeDasharray="3 2" className="cursor-pointer hover:stroke-emerald-800 transition-colors" onClick={() => setSelectedComponent('trays')} />
                  <line x1="72" y1="62" x2="114" y2="62" stroke="#16A34A" strokeWidth="1.5" strokeDasharray="3 2" className="cursor-pointer hover:stroke-emerald-800 transition-colors" onClick={() => setSelectedComponent('trays')} />
                  <line x1="72" y1="82" x2="114" y2="82" stroke="#16A34A" strokeWidth="1.5" strokeDasharray="3 2" className="cursor-pointer hover:stroke-emerald-800 transition-colors" onClick={() => setSelectedComponent('trays')} />
                  <line x1="72" y1="102" x2="114" y2="102" stroke="#16A34A" strokeWidth="1.5" strokeDasharray="3 2" className="cursor-pointer hover:stroke-emerald-800 transition-colors" onClick={() => setSelectedComponent('trays')} />

                  {/* Feed Line */}
                  <path d="M 20 75 L 70 75" stroke="#EA580C" strokeWidth="2" className="cursor-pointer hover:stroke-amber-700 transition-colors" onClick={() => setSelectedComponent('feed')} />
                  <polygon points="68,75 60,71 60,79" fill="#EA580C" />
                  <text x="22" y="70" fill="#EA580C" fontSize="9" fontFamily="monospace" fontWeight="bold">FEED</text>

                  {/* Overhead Vapor to Condenser */}
                  <path d="M 93 20 L 93 10 L 150 10 L 150 35" stroke="#16A34A" strokeWidth="1.5" fill="none" />
                  {/* Condenser Box */}
                  <rect x="135" y="35" width="30" height="40" rx="6" stroke="#16A34A" strokeWidth="1.5" fill="#DCFCE7" className="cursor-pointer hover:stroke-emerald-800 transition-colors" onClick={() => setSelectedComponent('condenser')} />
                  {/* Condenser Coil */}
                  <path d="M 142 42 L 158 48 L 142 54 L 158 60 L 142 66" stroke="#16A34A" strokeWidth="1.2" fill="none" />
                  {/* Reflux Return */}
                  <path d="M 150 75 L 150 90 L 116 90" stroke="#16A34A" strokeWidth="1.2" fill="none" />
                  <polygon points="118,90 124,87 124,93" fill="#16A34A" />

                  {/* Bottoms to Reboiler */}
                  <path d="M 93 130 L 93 140 L 150 140 L 150 115" stroke="#16A34A" strokeWidth="1.5" fill="none" />
                  {/* Reboiler Box */}
                  <rect x="135" y="95" width="30" height="25" rx="4" stroke="#16A34A" strokeWidth="1.5" fill="#DCFCE7" className="cursor-pointer hover:stroke-emerald-800 transition-colors" onClick={() => setSelectedComponent('reboiler')} />
                  <text x="170" y="112" fill="#64748B" fontSize="8" fontFamily="monospace">REBOILER</text>
                  <text x="170" y="55" fill="#64748B" fontSize="8" fontFamily="monospace">CONDENSER</text>
                </svg>
              </div>

              {/* Dynamic Component Inspector */}
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl space-y-1 text-xs">
                <div className="flex justify-between items-center text-[10px] font-bold text-emerald-700">
                  <span>{componentDetails[selectedComponent].tag}</span>
                  <span className="text-slate-400">Click schematic to inspect</span>
                </div>
                <div className="font-['Space_Grotesk'] font-bold text-slate-900 text-xs">
                  {componentDetails[selectedComponent].title}
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  {componentDetails[selectedComponent].desc}
                </p>
              </div>
            </div>

            {/* Bottom Callout Banner */}
            <div className="bg-amber-100 border border-amber-300 text-amber-900 font-['Space_Grotesk'] font-bold text-xs p-3.5 rounded-xl text-center shadow-xs">
              DWSIM goes first: open-source Python API and checkable solver residuals (&lt; 10^-11).
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
