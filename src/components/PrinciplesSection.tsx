import React, { useState } from 'react';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  const [hasOverridden, setHasOverridden] = useState<boolean>(false);

  return (
    <section id="principles" className="py-24 border-b border-[#222222] bg-[#0A0C0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-[11px] font-['Space_Grotesk'] font-bold text-[#A1FF5F] uppercase tracking-widest flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#A1FF5F]" />
            <span>HOW WE BUILD | SYSTEM PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            Four rules shape every decision we make.
          </h2>
        </div>

        {/* 2x2 Coordinate Quadrant */}
        <div className="bg-[#111311] border border-[#222822] rounded-3xl p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
            
            {/* Quadrant 1: People & Agency */}
            <div className="space-y-3 p-6 rounded-2xl bg-[#161A16] border border-[#2A342A]">
              <div className="flex items-center space-x-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#A1FF5F]" />
                <span className="text-xs font-['Space_Grotesk'] font-bold text-[#A1FF5F] tracking-wider uppercase">
                  PEOPLE &amp; AGENCY
                </span>
              </div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-white">
                Assist, Don&apos;t Replace
              </h3>
              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                Explicitly rejects automation that eliminates jobs; designed strictly to augment human operators and keep users in command of their tools and decisions.
              </p>
            </div>

            {/* Quadrant 2: Physics & Proof */}
            <div className="space-y-3 p-6 rounded-2xl bg-[#161A16] border border-[#2A342A]">
              <div className="flex items-center space-x-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FFA048]" />
                <span className="text-xs font-['Space_Grotesk'] font-bold text-[#FFA048] tracking-wider uppercase">
                  PHYSICS &amp; PROOF
                </span>
              </div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-white">
                Verifiable Convergence
              </h3>
              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                Solves AI hallucination by anchoring predictions to checkable physical and solver bounds (e.g. Aspen thermodynamic residual &lt; 10^-11).
              </p>
            </div>

            {/* Quadrant 3: Privacy Boundary */}
            <div className="space-y-3 p-6 rounded-2xl bg-[#161A16] border border-[#2A342A]">
              <div className="flex items-center space-x-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#A1FF5F]" />
                <span className="text-xs font-['Space_Grotesk'] font-bold text-[#A1FF5F] tracking-wider uppercase">
                  PRIVACY BOUNDARY
                </span>
              </div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-white">
                Automatic Self-Blur
              </h3>
              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                Hardware exclusion of banking, credentials, and personal docs. Flags open questions around enterprise pattern data governance.
              </p>
            </div>

            {/* Quadrant 4: Environmental Runtime */}
            <div className="space-y-3 p-6 rounded-2xl bg-[#161A16] border border-[#2A342A]">
              <div className="flex items-center space-x-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#FFA048]" />
                <span className="text-xs font-['Space_Grotesk'] font-bold text-[#FFA048] tracking-wider uppercase">
                  ENVIRONMENTAL RUNTIME
                </span>
              </div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-white">
                Low-Power Footprint
              </h3>
              <p className="text-sm text-[#CCCCCC] leading-relaxed">
                Accounts for device battery draw, runtime compute, and carbon credit impact as first-class architectural constraints from day one.
              </p>
            </div>

          </div>

          {/* Interactive Calibration & Retraining Sandbox */}
          <div className="mt-6 bg-[#161616] border border-[#FFA048]/40 rounded-2xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-xs font-['Space_Grotesk'] font-bold text-[#FFA048] uppercase tracking-wider flex items-center space-x-1.5">
                  <RefreshCw className="w-4 h-4 text-[#FFA048]" />
                  <span>CALIBRATION &amp; RETRAINING SANDBOX</span>
                </span>
                <p className="text-xs text-[#AAAAAA]">
                  Early predictions will be wrong (e.g. switching 2D to 3D prematurely). User overrides instantly recalibrate local model weights.
                </p>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={() => setHasOverridden(!hasOverridden)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-['Space_Grotesk'] font-bold transition-all cursor-pointer ${
                    hasOverridden
                      ? 'bg-[#A1FF5F] text-black shadow'
                      : 'bg-[#FFA048] text-black hover:bg-[#ffb066]'
                  }`}
                >
                  {hasOverridden ? "Undo Calibration" : "Simulate User Override (Keep 2D)"}
                </button>
              </div>
            </div>

            {hasOverridden && (
              <div className="p-3 bg-[#A1FF5F]/10 border border-[#A1FF5F]/30 rounded-xl text-xs text-[#A1FF5F] flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>
                  <strong>Model weights updated:</strong> Engine learned that user prefers 2D drafting for this stage. 3D auto-switch withheld until explicit extrusion geometry is detected.
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
