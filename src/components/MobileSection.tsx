import React, { useState } from 'react';
import { Lock, EyeOff } from 'lucide-react';

export const MobileSection: React.FC = () => {
  const [typedText, setTypedText] = useState<string>("T");
  const [isSensitiveApp, setIsSensitiveApp] = useState<boolean>(false);
  const [activeTelemetryHour, setActiveTelemetryHour] = useState<number>(48);

  const handleKeyClick = (char: string) => {
    if (char === 'BACK') {
      setTypedText(prev => prev.slice(0, -1));
    } else {
      setTypedText(prev => prev + char);
    }
  };

  const lastChar = typedText.slice(-1).toUpperCase();
  const isHExpanded = lastChar === 'T';
  const isEExpanded = lastChar === 'H';

  return (
    <section id="mobile" className="py-24 border-b border-[#222222] bg-[#0A0D10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-[11px] font-['Space_Grotesk'] font-bold text-[#FFA048] uppercase tracking-widest flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#FFA048]" />
            <span>USE CASE 03 | PERSONAL MOBILE OPTIMIZATION (B2C)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            The phone learns your habits over 2 to 3 days, and banking apps stay off the record.
          </h2>
        </div>

        {/* 3-Part Architecture: Tangerine Card (Left), Phone Simulator (Center), Lime Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Solid Tangerine Card */}
          <div className="lg:col-span-4 bg-[#FFA048] text-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase opacity-75">
                TELEMETRY RAMP-UP
              </div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-black">
                72-Hour Adaptive Learning
              </h3>

              {/* Interactive Telemetry Ramp Graph */}
              <div className="bg-black/8 p-4 rounded-2xl border border-black/10 space-y-3">
                <div className="flex justify-between items-center text-[11px] font-bold text-black/70">
                  <span>MODEL FAMILIARITY CURVE</span>
                  <span>{activeTelemetryHour}h ({activeTelemetryHour <= 24 ? 'Baseline' : activeTelemetryHour <= 48 ? 'Tuning' : 'Active'})</span>
                </div>

                <div className="h-16 relative flex items-end">
                  {/* Background grid */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-15">
                    <div className="border-b border-black w-full" />
                    <div className="border-b border-black w-full" />
                    <div className="border-b border-black w-full" />
                  </div>

                  {/* SVG Ramp Curve */}
                  <svg className="w-full h-full overflow-visible">
                    <path
                      d="M 5 55 C 60 52, 120 35, 180 18 C 210 10, 240 8, 270 6"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx={activeTelemetryHour === 0 ? 5 : activeTelemetryHour === 24 ? 90 : activeTelemetryHour === 48 ? 180 : 270}
                      cy={activeTelemetryHour === 0 ? 55 : activeTelemetryHour === 24 ? 45 : activeTelemetryHour === 48 ? 18 : 6}
                      r="5"
                      fill="#000000"
                    />
                  </svg>
                </div>

                {/* Timeline Hour Selectors */}
                <div className="grid grid-cols-4 gap-1 pt-1 text-[10px] font-bold text-center">
                  {[0, 24, 48, 72].map(hr => (
                    <button
                      key={hr}
                      onClick={() => setActiveTelemetryHour(hr)}
                      className={`py-1 rounded cursor-pointer transition-all ${
                        activeTelemetryHour === hr ? 'bg-black text-[#FFA048]' : 'bg-black/10 text-black/80 hover:bg-black/15'
                      }`}
                    >
                      {hr}h
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bullets with Bold Lead-ins */}
            <div className="space-y-4 text-xs sm:text-sm text-black/90">
              <div className="flex items-start space-x-2">
                <span className="font-bold shrink-0">• Habit observation:</span>
                <span>Passively monitors device routines over 48 to 72 hours before making any background system adjustments.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-bold shrink-0">• Resource balancing:</span>
                <span>Dynamically optimizes background memory footprints without triggering disruptive app reloads during peak usage.</span>
              </div>
            </div>
          </div>

          {/* Center Column: Phone Simulator (Interactive Keyboard & Self-Blur) */}
          <div className="lg:col-span-4 bg-[#111418] border border-[#222B36] rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-2xl">
            
            {/* Phone Top Header & App Mode Switcher */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-['Space_Grotesk'] font-bold text-[#888888] uppercase">MOBILE TEST ENVIRONMENT</span>
                <button
                  onClick={() => setIsSensitiveApp(!isSensitiveApp)}
                  className={`text-[11px] font-['Space_Grotesk'] font-bold px-3 py-1 rounded-full border transition-all cursor-pointer flex items-center space-x-1.5 ${
                    isSensitiveApp
                      ? 'bg-[#FFA048] text-black border-[#FFA048]'
                      : 'bg-[#1C2430] text-[#FFA048] border-[#344458] hover:border-[#FFA048]'
                  }`}
                >
                  <Lock className="w-3 h-3" />
                  <span>{isSensitiveApp ? "Exit Banking App" : "Open Banking App"}</span>
                </button>
              </div>

              {/* Simulated Phone Screen */}
              <div className="bg-[#080A0D] border border-[#1E2633] rounded-2xl p-4 min-h-[300px] flex flex-col justify-between relative overflow-hidden">
                
                {/* Speaker Notch */}
                <div className="w-16 h-1.5 bg-[#253040] rounded-full mx-auto mb-3" />

                {isSensitiveApp ? (
                  /* SELF-BLUR SCREEN */
                  <div className="bg-[#0A0D10]/95 border border-[#FFA048] rounded-xl p-5 my-auto text-center space-y-3 shadow-2xl">
                    <div className="w-10 h-10 rounded-full bg-[#FFA048]/15 border border-[#FFA048] flex items-center justify-center mx-auto text-[#FFA048]">
                      <EyeOff className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-['Space_Grotesk'] font-bold text-[#FFA048] tracking-wider uppercase">
                        SENSITIVE APP DETECTED
                      </div>
                      <div className="text-sm font-['Space_Grotesk'] font-bold text-white mt-0.5">
                        Hardware-Level Self-Blur
                      </div>
                    </div>
                    <p className="text-[11px] text-[#AAAAAA] leading-relaxed">
                      Recording and telemetry halt automatically on banking and personal apps. Zero screen frames, tokens, or credential inputs are saved.
                    </p>
                  </div>
                ) : (
                  /* MESSAGING APP WITH PREDICTIVE KEYBOARD */
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] text-[#777777] uppercase tracking-wider font-bold">ACTIVE APP: MESSAGING</span>
                      <div className="bg-[#12161C] border border-[#253040] rounded-lg p-2.5 flex items-center justify-between text-xs">
                        <span className="font-mono text-white">
                          {typedText}<span className="animate-pulse text-[#FFA048]">|</span>
                        </span>
                        <button
                          onClick={() => handleKeyClick('BACK')}
                          className="text-[10px] text-[#888888] hover:text-white cursor-pointer px-1.5 py-0.5 rounded bg-black/40"
                        >
                          DEL
                        </button>
                      </div>
                    </div>

                    {/* Interactive Virtual Keyboard */}
                    <div className="space-y-2 pt-2">
                      <div className="text-[10px] text-[#888888] flex justify-between font-bold">
                        <span>DYNAMIC HITBOX EXPANSION</span>
                        <span className="text-[#A1FF5F]">
                          {isHExpanded ? "[H] EXPANDED +140%" : isEExpanded ? "[E] EXPANDED +140%" : "READY"}
                        </span>
                      </div>

                      {/* Keys Row */}
                      <div className="flex items-center justify-center space-x-1.5 py-2">
                        {['T', 'H', 'E', 'A', 'N'].map((char) => {
                          const isSpecialTarget = (char === 'H' && isHExpanded) || (char === 'E' && isEExpanded);
                          return (
                            <button
                              key={char}
                              onClick={() => handleKeyClick(char)}
                              className={`rounded-lg font-['Space_Grotesk'] font-bold text-sm transition-all cursor-pointer flex items-center justify-center ${
                                isSpecialTarget
                                  ? 'bg-[#A1FF5F] text-black w-14 h-12 shadow-[0_0_15px_rgba(161,255,95,0.4)] scale-105'
                                  : 'bg-[#1C2430] text-white hover:bg-[#253040] w-9 h-11'
                              }`}
                            >
                              {char}
                            </button>
                          );
                        })}
                      </div>

                      <div className="text-[10px] text-center text-[#777777]">
                        Click &apos;T&apos; to trigger trajectory prediction on &apos;H&apos;
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

            <div className="text-[11px] text-[#888888] leading-relaxed">
              Assistance operates in the background and adjusts to probable intent without requiring manual commands for every correction.
            </div>

          </div>

          {/* Right Column: Solid Lime Card */}
          <div className="lg:col-span-4 bg-[#A1FF5F] text-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase opacity-75">
                PREDICTIVE INTERACTION
              </div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-black">
                Adaptive Keyboard Hitbox
              </h3>

              {/* Hitbox Preview Graphic */}
              <div className="bg-black/10 p-4 rounded-2xl border border-black/15 space-y-2">
                <div className="text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-wider text-black/70">
                  REAL-TIME HIT TARGET CALIBRATION
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <div className="w-10 h-12 bg-black text-white font-['Space_Grotesk'] font-bold flex items-center justify-center rounded-lg text-sm">
                    T
                  </div>
                  <div className="flex-1 h-14 bg-black text-[#A1FF5F] border-2 border-black font-['Space_Grotesk'] font-bold flex items-center justify-center rounded-xl text-sm shadow-md">
                    H (EXPANDED +140%)
                  </div>
                  <div className="w-10 h-12 bg-black text-white font-['Space_Grotesk'] font-bold flex items-center justify-center rounded-lg text-sm">
                    E
                  </div>
                </div>
              </div>
            </div>

            {/* Bullets with Bold Lead-ins */}
            <div className="space-y-4 text-xs sm:text-sm text-black/90">
              <div className="flex items-start space-x-2">
                <span className="font-bold shrink-0">• Velocity prediction:</span>
                <span>Calculates finger movement speed and trajectory to anticipate intended characters before contact.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-bold shrink-0">• Dynamic target enlargement:</span>
                <span>Expands probable next hitboxes invisibly under the hood, demonstrating assistance without manual prompts.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Takeaway */}
        <div className="p-4 rounded-2xl bg-[#111418] border border-[#222B36] text-xs sm:text-sm text-[#CCCCCC]">
          <span className="font-bold text-[#FFA048]">Assistive mobile baseline:</span> The assistant observes phone usage for two to three days before making changes. Key hitboxes expand dynamically based on typing patterns, while sensitive apps are automatically bypassed.
        </div>

      </div>
    </section>
  );
};
