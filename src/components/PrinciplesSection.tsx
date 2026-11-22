import React, { useState } from 'react';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  const [hasOverridden, setHasOverridden] = useState<boolean>(false);

  return (
    <section id="principles" className="py-24 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-wider flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>HOW WE BUILD | SYSTEM PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-slate-900 tracking-tight">
            Four rules shape every decision we make.
          </h2>
        </div>

        {/* 2x2 Coordinate Quadrant */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">
            
            {/* Quadrant 1: People & Agency */}
            <div className="space-y-3 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center space-x-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-['Space_Grotesk'] font-bold text-emerald-800 tracking-wider uppercase">
                  PEOPLE &amp; AGENCY
                </span>
              </div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-slate-900">
                Assist, Don&apos;t Replace
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Explicitly rejects automation that eliminates jobs; designed strictly to augment human operators and keep users in command of their tools and decisions.
              </p>
            </div>

            {/* Quadrant 2: Physics & Proof */}
            <div className="space-y-3 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center space-x-2.5">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-xs font-['Space_Grotesk'] font-bold text-amber-800 tracking-wider uppercase">
                  PHYSICS &amp; PROOF
                </span>
              </div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-slate-900">
                Verifiable Convergence
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Solves AI hallucination by anchoring predictions to checkable physical and solver bounds (e.g. Aspen thermodynamic residual &lt; 10^-11).
              </p>
            </div>

            {/* Quadrant 3: Privacy Boundary */}
            <div className="space-y-3 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center space-x-2.5">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs font-['Space_Grotesk'] font-bold text-emerald-800 tracking-wider uppercase">
                  PRIVACY BOUNDARY
                </span>
              </div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-slate-900">
                Automatic Self-Blur
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hardware exclusion of banking, credentials, and personal docs. Flags open questions around enterprise pattern data governance.
              </p>
            </div>

            {/* Quadrant 4: Environmental Runtime */}
            <div className="space-y-3 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center space-x-2.5">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-xs font-['Space_Grotesk'] font-bold text-amber-800 tracking-wider uppercase">
                  ENVIRONMENTAL RUNTIME
                </span>
              </div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-slate-900">
                Low-Power Footprint
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Accounts for device battery draw, runtime compute, and carbon credit impact as first-class architectural constraints from day one.
              </p>
            </div>

          </div>

          {/* Interactive Calibration & Retraining Sandbox */}
          <div className="mt-6 bg-white border border-amber-300 rounded-2xl p-5 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <span className="text-xs font-['Space_Grotesk'] font-bold text-amber-800 uppercase tracking-wider flex items-center space-x-1.5">
                  <RefreshCw className="w-4 h-4 text-amber-600" />
                  <span>CALIBRATION &amp; RETRAINING SANDBOX</span>
                </span>
                <p className="text-xs text-slate-600">
                  Early predictions will be wrong (e.g. switching 2D to 3D prematurely). User overrides instantly recalibrate local model weights.
                </p>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <button
                  onClick={() => setHasOverridden(!hasOverridden)}
                  className={`px-4 py-2 rounded-xl text-xs font-['Space_Grotesk'] font-bold transition-all duration-200 cursor-pointer ${
                    hasOverridden
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-amber-500 text-white hover:bg-amber-600 shadow-sm'
                  }`}
                >
                  {hasOverridden ? "Undo Calibration" : "Simulate User Override (Keep 2D)"}
                </button>
              </div>
            </div>

            {hasOverridden && (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center space-x-2 animate-pulse">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
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
