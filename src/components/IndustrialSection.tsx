import React, { useState } from 'react';
import { Activity } from 'lucide-react';

export const IndustrialSection: React.FC = () => {
  const [isPreStaged, setIsPreStaged] = useState<boolean>(true);
  const [selectedComponent, setSelectedComponent] = useState<string>('trays');

  const componentDetails: Record<string, { title: string; desc: string; tag: string }> = {
    trays: {
      title: "Fractionation Trays (Stages 1-28)",
      desc: "Vapor-liquid phase equilibrium calculated using NRTL-RK model. Stage convergence verified with residual 8.42e-12.",
      tag: "THERMODYNAMIC SOLVER PROOF"
    },
    condenser: {
      title: "Overhead Total Condenser & Reflux Drum",
      desc: "Top distillate draw rate: 42.5 kmol/h. Reflux ratio staged at 2.45 based on previous successful separation campaigns.",
      tag: "REFLUX SPECIFICATION"
    },
    feed: {
      title: "Inlet Feed Stage (Stage 14)",
      desc: "Feed temperature 423.15 K, pressure 3.25 bar. Pre-populated from previous upstream reactor effluent log.",
      tag: "STREAM MATCHING"
    },
    reboiler: {
      title: "Kettle Reboiler & Bottoms Draw",
      desc: "Duty requirement: 1.82 MW. Bottom product specifications pre-set to prevent reboiler fouling limits.",
      tag: "HEAT BALANCE"
    }
  };

  return (
    <section id="industrial" className="py-24 border-b border-[#222222] bg-[#0A0D0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-[11px] font-['Space_Grotesk'] font-bold text-[#A1FF5F] uppercase tracking-widest flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#A1FF5F]" />
            <span>USE CASE 01 | INDUSTRIAL SIMULATION & CAD (B2B)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            Simulation setup is repetitive, so the tool can learn it and stage it for you.
          </h2>
        </div>

        {/* 2-Column Exhibit Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Lime Card with Aspen Setup Split */}
          <div className="lg:col-span-7 bg-[#A1FF5F] text-black rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase opacity-75">
                  ASPEN & CAD PARAMETER SETUP
                </span>
                <h3 className="text-2xl sm:text-3xl font-['Space_Grotesk'] font-bold tracking-tight text-black mt-1">
                  Manual vs Pre-Staged Setup
                </h3>
              </div>

              {/* Interactive Toggle */}
              <div className="flex items-center bg-black/10 p-1 rounded-xl">
                <button
                  onClick={() => setIsPreStaged(false)}
                  className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] font-bold rounded-lg transition-all cursor-pointer ${
                    !isPreStaged ? 'bg-black text-white shadow' : 'text-black/70 hover:text-black'
                  }`}
                >
                  Manual (Empty)
                </button>
                <button
                  onClick={() => setIsPreStaged(true)}
                  className={`px-3 py-1.5 text-xs font-['Space_Grotesk'] font-bold rounded-lg transition-all cursor-pointer ${
                    isPreStaged ? 'bg-black text-white shadow' : 'text-black/70 hover:text-black'
                  }`}
                >
                  In-Context Staged
                </button>
              </div>
            </div>

            {/* Split Comparison Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black/8 p-4 rounded-2xl border border-black/10 font-mono text-xs">
              <div className="space-y-2">
                <div className="font-['Space_Grotesk'] font-bold text-[11px] uppercase tracking-wider text-black/60">
                  {isPreStaged ? "BEFORE: MANUAL REPETITION" : "ACTIVE: MANUAL SETUP"}
                </div>
                <div className="space-y-1 text-black/80">
                  <div>Inlet Temp: <span className="text-black/50">[ empty ]</span></div>
                  <div>Pressure: <span className="text-black/50">[ empty ]</span></div>
                  <div>Feed Flow: <span className="text-black/50">[ empty ]</span></div>
                  <div>Thermodynamics: <span className="text-black/50">[ not set ]</span></div>
                  <div>Workspace: <span className="text-black/50">[ default 2D ]</span></div>
                </div>
              </div>

              <div className="space-y-2 border-t sm:border-t-0 sm:border-l border-black/15 pt-2 sm:pt-0 sm:pl-4">
                <div className="font-['Space_Grotesk'] font-bold text-[11px] uppercase tracking-wider text-black flex items-center justify-between">
                  <span>AFTER: ADAPTIVE PREFILL</span>
                  {isPreStaged && <span className="w-2 h-2 rounded-full bg-black animate-ping" />}
                </div>
                <div className="space-y-1 font-semibold text-black">
                  <div>Inlet Temp: <span className={isPreStaged ? "bg-black/15 px-1 rounded" : "opacity-40"}>423.15 K</span></div>
                  <div>Pressure: <span className={isPreStaged ? "bg-black/15 px-1 rounded" : "opacity-40"}>3.25 bar</span></div>
                  <div>Feed Flow: <span className={isPreStaged ? "bg-black/15 px-1 rounded" : "opacity-40"}>125.0 kmol/h</span></div>
                  <div>Thermodynamics: <span className={isPreStaged ? "bg-black/15 px-1 rounded" : "opacity-40"}>NRTL-RK</span></div>
                  <div>Workspace: <span className={isPreStaged ? "bg-black text-[#A1FF5F] px-1 rounded" : "opacity-40"}>Auto-staged 3D</span></div>
                </div>
              </div>
            </div>

            {/* Solver Residual Metric Banner */}
            <div className="bg-black text-[#A1FF5F] p-3.5 rounded-xl flex items-center justify-between text-xs font-['Space_Grotesk'] font-bold tracking-wide">
              <span>CHECKABLE SOLVER RESIDUAL: &lt; 10^-11</span>
              <span className="bg-[#A1FF5F] text-black px-2 py-0.5 rounded text-[11px]">
                CONVERGED
              </span>
            </div>

            {/* Bullets with Bold Lead-ins */}
            <div className="space-y-3 text-sm text-black/90">
              <div className="flex items-start space-x-2">
                <span className="font-bold shrink-0">• Setup friction:</span>
                <span>Chemical &amp; plastics engineers enter identical thermodynamic models, dimensions, and feed parameters before every single run.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-bold shrink-0">• In-context staging:</span>
                <span>Recognizes workflow progress (e.g. finishing 2D sketches) and automatically prepares the Y-axis 3D workspace.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-bold shrink-0">• Action-first design:</span>
                <span>Stages validated defaults directly; early mistakes (2D vs 3D) are overridden by the user to retrain local weights.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Flow, Harvey Balls, and Technical Flowsheet */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 3-Step Flow */}
            <div className="bg-[#111411] border border-[#202E20] rounded-2xl p-5 space-y-4">
              <div className="text-xs font-['Space_Grotesk'] font-bold text-[#A1FF5F] uppercase tracking-wider">
                In-Context Adaptation Sequence:
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-[#A1FF5F] text-black font-bold flex items-center justify-center shrink-0">1</div>
                  <div>
                    <span className="text-white font-bold block">Observe normal setup routines</span>
                    <span className="text-[#888888]">Watches parameter habits and view sequences over first 2 days.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-[#A1FF5F] text-black font-bold flex items-center justify-center shrink-0">2</div>
                  <div>
                    <span className="text-white font-bold block">Auto-stage the next mode</span>
                    <span className="text-[#888888]">Pre-fills validated parameters and prepares the next workflow view.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-[#FFA048] text-black font-bold flex items-center justify-center shrink-0">3</div>
                  <div>
                    <span className="text-white font-bold block">User corrects and calibrates</span>
                    <span className="text-[#888888]">Operator overrides instantly retrain the local model weights.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sector Fit Matrix with Harvey Balls */}
            <div className="bg-[#111411] border border-[#202E20] rounded-2xl p-5 space-y-3">
              <div className="text-xs font-['Space_Grotesk'] font-bold text-[#888888] uppercase tracking-wider">
                Sector Fit Assessment &amp; Proving Ground:
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-[#1E2B1E]">
                  <span className="text-white font-medium">Chemical Simulation</span>
                  <div className="flex items-center space-x-1.5 text-[#A1FF5F]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A1FF5F]" />
                    <span>Full (Solver residual &lt; 10^-11 check)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#1E2B1E]">
                  <span className="text-white font-medium">Plastics Manufacturing</span>
                  <div className="flex items-center space-x-1.5 text-[#A1FF5F]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A1FF5F]" />
                    <span>Full (Standardized mold cycles)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#1E2B1E]">
                  <span className="text-white font-medium">CAD &amp; 3D Modeling</span>
                  <div className="flex items-center space-x-1.5 text-[#FFA048]">
                    <span className="w-2.5 h-2.5 rounded-full border border-[#FFA048] bg-[#FFA048]/50" />
                    <span>Half (Repetitive axis toggling)</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-white font-medium">Automotive Testing</span>
                  <div className="flex items-center space-x-1.5 text-[#666666]">
                    <span className="w-2.5 h-2.5 rounded-full border border-[#666666]" />
                    <span>Empty (Testing suites already heavily optimized)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Aspen Fractionation Column Technical Drawing */}
            <div className="bg-[#080B08] border border-[#1A261A] rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-['Space_Grotesk'] font-bold text-[#A1FF5F] tracking-widest uppercase">
                    PHYSICAL GROUND TRUTH BENCHMARK
                  </div>
                  <h4 className="text-sm font-['Space_Grotesk'] font-bold text-white">
                    Aspen Plus Fractionation Column
                  </h4>
                </div>
                <Activity className="w-4 h-4 text-[#A1FF5F]" />
              </div>

              {/* Interactive SVG Flowsheet */}
              <div className="flex items-center justify-center p-3 bg-black/40 rounded-xl border border-[#1C261C]">
                <svg width="280" height="150" viewBox="0 0 280 150" fill="none" className="overflow-visible">
                  {/* Column Body */}
                  <rect x="70" y="20" width="46" height="110" rx="12" stroke="#A1FF5F" strokeWidth="2" fill="#0A100A" />
                  
                  {/* Internal Trays (Clickable) */}
                  <line x1="72" y1="42" x2="114" y2="42" stroke="#A1FF5F" strokeWidth="1.5" strokeDasharray="3 2" className="cursor-pointer hover:stroke-white" onClick={() => setSelectedComponent('trays')} />
                  <line x1="72" y1="62" x2="114" y2="62" stroke="#A1FF5F" strokeWidth="1.5" strokeDasharray="3 2" className="cursor-pointer hover:stroke-white" onClick={() => setSelectedComponent('trays')} />
                  <line x1="72" y1="82" x2="114" y2="82" stroke="#A1FF5F" strokeWidth="1.5" strokeDasharray="3 2" className="cursor-pointer hover:stroke-white" onClick={() => setSelectedComponent('trays')} />
                  <line x1="72" y1="102" x2="114" y2="102" stroke="#A1FF5F" strokeWidth="1.5" strokeDasharray="3 2" className="cursor-pointer hover:stroke-white" onClick={() => setSelectedComponent('trays')} />

                  {/* Feed Line */}
                  <path d="M 20 75 L 70 75" stroke="#FFA048" strokeWidth="2" className="cursor-pointer hover:stroke-white" onClick={() => setSelectedComponent('feed')} />
                  <polygon points="68,75 60,71 60,79" fill="#FFA048" />
                  <text x="22" y="70" fill="#FFA048" fontSize="9" fontFamily="monospace">FEED</text>

                  {/* Overhead Vapor to Condenser */}
                  <path d="M 93 20 L 93 10 L 150 10 L 150 35" stroke="#A1FF5F" strokeWidth="1.5" fill="none" />
                  {/* Condenser Box */}
                  <rect x="135" y="35" width="30" height="40" rx="6" stroke="#A1FF5F" strokeWidth="1.5" fill="#0D140D" className="cursor-pointer hover:stroke-white" onClick={() => setSelectedComponent('condenser')} />
                  {/* Condenser Coil */}
                  <path d="M 142 42 L 158 48 L 142 54 L 158 60 L 142 66" stroke="#A1FF5F" strokeWidth="1.2" fill="none" />
                  {/* Reflux Return */}
                  <path d="M 150 75 L 150 90 L 116 90" stroke="#A1FF5F" strokeWidth="1.2" fill="none" />
                  <polygon points="118,90 124,87 124,93" fill="#A1FF5F" />

                  {/* Bottoms to Reboiler */}
                  <path d="M 93 130 L 93 140 L 150 140 L 150 115" stroke="#A1FF5F" strokeWidth="1.5" fill="none" />
                  {/* Reboiler Box */}
                  <rect x="135" y="95" width="30" height="25" rx="4" stroke="#A1FF5F" strokeWidth="1.5" fill="#0D140D" className="cursor-pointer hover:stroke-white" onClick={() => setSelectedComponent('reboiler')} />
                  <text x="170" y="112" fill="#888888" fontSize="8" fontFamily="monospace">REBOILER</text>
                  <text x="170" y="55" fill="#888888" fontSize="8" fontFamily="monospace">CONDENSER</text>
                </svg>
              </div>

              {/* Dynamic Component Inspector */}
              <div className="bg-[#0D120D] border border-[#1C261C] p-3 rounded-xl space-y-1 text-xs">
                <div className="flex justify-between items-center text-[10px] font-bold text-[#A1FF5F]">
                  <span>{componentDetails[selectedComponent].tag}</span>
                  <span className="text-[#666666]">Click schematic to inspect</span>
                </div>
                <div className="font-['Space_Grotesk'] font-bold text-white text-xs">
                  {componentDetails[selectedComponent].title}
                </div>
                <p className="text-[#888888] text-[11px] leading-relaxed">
                  {componentDetails[selectedComponent].desc}
                </p>
              </div>
            </div>

            {/* Bottom Callout Banner */}
            <div className="bg-[#FFA048] text-black font-['Space_Grotesk'] font-bold text-xs p-3.5 rounded-xl text-center shadow">
              Chemical engineering goes first: solver residual (&lt; 10^-11) is mathematically checkable.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
