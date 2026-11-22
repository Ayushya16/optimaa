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
    <section id="mobile" className="py-24 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-['Space_Grotesk'] font-bold text-amber-700 uppercase tracking-wider flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>USE CASE 03 | PERSONAL MOBILE OPTIMIZATION (B2C &amp; D2C)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-slate-900 tracking-tight">
            The phone learns your habits over 2 to 3 days, and banking apps stay off the record.
          </h2>
        </div>

        {/* 3-Part Architecture: Left Card, Center Phone Simulator, Right Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Telemetry Ramp-up Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase text-amber-700">
                TELEMETRY RAMP-UP
              </div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-slate-900">
                72-Hour Adaptive Learning
              </h3>

              {/* Interactive Telemetry Ramp Graph */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-700">
                  <span>MODEL FAMILIARITY CURVE</span>
                  <span className="text-amber-800">{activeTelemetryHour}h ({activeTelemetryHour <= 24 ? 'Baseline' : activeTelemetryHour <= 48 ? 'Tuning' : 'Active'})</span>
                </div>

                <div className="h-16 relative flex items-end">
                  {/* Background grid */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-30">
                    <div className="border-b border-slate-200 w-full" />
                    <div className="border-b border-slate-200 w-full" />
                    <div className="border-b border-slate-200 w-full" />
                  </div>

                  {/* SVG Ramp Curve */}
                  <svg className="w-full h-full overflow-visible">
                    <path
                      d="M 5 55 C 60 52, 120 35, 180 18 C 210 10, 240 8, 270 6"
                      fill="none"
                      stroke="#EA580C"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx={activeTelemetryHour === 0 ? 5 : activeTelemetryHour === 24 ? 90 : activeTelemetryHour === 48 ? 180 : 270}
                      cy={activeTelemetryHour === 0 ? 55 : activeTelemetryHour === 24 ? 45 : activeTelemetryHour === 48 ? 18 : 6}
                      r="5"
                      fill="#EA580C"
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
                        activeTelemetryHour === hr ? 'bg-amber-500 text-white shadow-2xs' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {hr}h
                    </button>
                  ))}
                </div>
              </div>

              {/* Bullets with Bold Lead-ins */}
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-slate-900 shrink-0">• Initial observation:</span>
                  <span>System runs silently for first 48 to 72 hours, recording typing trajectory, routine apps, and input speed.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-slate-900 shrink-0">• Battery threshold:</span>
                  <span>Adjusts CPU background draw dynamically, throttling background inference when battery falls below 20%.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-slate-900 shrink-0">• On-device safety:</span>
                  <span>Key logging is excluded; hitboxes adapt on-chip via an isolated input module with zero cloud transmission.</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-900 font-semibold">
              Learning state: {activeTelemetryHour < 48 ? "Passive observation only" : "Active predictive touch staging enabled"}
            </div>
          </div>

          {/* Center Column: Interactive Smartphone Simulator */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-[300px] sm:w-[320px] bg-slate-900 rounded-[44px] p-4 shadow-2xl border-4 border-slate-300 relative flex flex-col justify-between min-h-[580px]">
              
              {/* Dynamic Island / Speaker Notch */}
              <div className="flex justify-between items-center px-4 pt-1 pb-3 text-slate-400 text-[11px]">
                <span>09:41</span>
                <div className="w-20 h-4 bg-slate-950 rounded-full" />
                <div className="flex space-x-1 items-center text-[10px]">
                  <span>5G</span>
                  <div className="w-4 h-2 border border-slate-400 rounded-xs bg-slate-400" />
                </div>
              </div>

              {/* Screen Content Window */}
              <div className="space-y-3 flex-1 flex flex-col justify-between py-2">
                
                {/* Active App Mode Banner */}
                <div className="flex items-center justify-between bg-slate-800/80 p-2.5 rounded-2xl border border-slate-700 text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white font-medium text-[11px]">
                      {isSensitiveApp ? "Chase Mobile Banking" : "Notes & Messaging"}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsSensitiveApp(!isSensitiveApp)}
                    className="text-[10px] bg-slate-700 hover:bg-slate-600 text-slate-200 px-2 py-0.5 rounded cursor-pointer transition-colors"
                  >
                    Toggle App
                  </button>
                </div>

                {/* Self-Blur Overlay Window */}
                {isSensitiveApp ? (
                  <div className="flex-1 rounded-2xl bg-slate-950/90 border border-rose-500/30 p-6 flex flex-col items-center justify-center text-center space-y-3 backdrop-blur-md">
                    <div className="w-12 h-12 rounded-full bg-rose-500/20 border border-rose-500 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-rose-400" />
                    </div>
                    <div>
                      <div className="text-xs font-['Space_Grotesk'] font-bold text-rose-400 uppercase tracking-wider">
                        SELF-BLUR ACTIVATED
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Sensitive financial context detected. Screen observation paused; keystrokes are not processed.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 rounded-2xl bg-slate-950 p-4 border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                        MESSAGE DRAFT
                      </div>
                      <div className="mt-2 text-white font-mono text-lg tracking-wider min-h-[32px] flex items-center">
                        <span>{typedText || "Tap keys below..."}</span>
                        <span className="w-2 h-5 bg-emerald-400 ml-1 animate-pulse" />
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                      {isHExpanded ? (
                        <span className="text-emerald-400 font-bold">Key &apos;H&apos; hitbox expanded by +140% after typing &apos;T&apos;</span>
                      ) : isEExpanded ? (
                        <span className="text-amber-400 font-bold">Key &apos;E&apos; hitbox expanded by +120% after typing &apos;TH&apos;</span>
                      ) : (
                        <span>Type &apos;T&apos; to trigger adaptive hitbox expansion</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Interactive Dynamic Keyboard Hitbox Simulator */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-center space-x-1">
                    {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(k => (
                      <button
                        key={k}
                        onClick={() => handleKeyClick(k)}
                        className={`h-9 rounded font-bold font-mono transition-all duration-200 text-xs cursor-pointer flex items-center justify-center ${
                          k === 'E' && isEExpanded
                            ? 'w-10 bg-amber-400 text-slate-950 shadow-md font-extrabold scale-110 z-10'
                            : k === 'T' && lastChar === 'T'
                            ? 'w-7 bg-emerald-400 text-slate-950'
                            : 'w-6 bg-slate-800 text-slate-200 hover:bg-slate-700'
                        }`}
                      >
                        {k}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-1">
                    {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(k => (
                      <button
                        key={k}
                        onClick={() => handleKeyClick(k)}
                        className={`h-9 rounded font-bold font-mono transition-all duration-200 text-xs cursor-pointer flex items-center justify-center ${
                          k === 'H' && isHExpanded
                            ? 'w-11 bg-emerald-400 text-slate-950 shadow-md font-extrabold scale-110 z-10 animate-pulse'
                            : 'w-6 bg-slate-800 text-slate-200 hover:bg-slate-700'
                        }`}
                      >
                        {k}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-1">
                    {['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK'].map(k => (
                      <button
                        key={k}
                        onClick={() => handleKeyClick(k)}
                        className={`h-9 rounded font-bold font-mono transition-all duration-200 text-xs cursor-pointer flex items-center justify-center ${
                          k === 'BACK'
                            ? 'w-12 bg-slate-700 text-rose-300 text-[10px]'
                            : 'w-6 bg-slate-800 text-slate-200 hover:bg-slate-700'
                        }`}
                      >
                        {k === 'BACK' ? 'DEL' : k}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Home Indicator Bar */}
              <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
            </div>
          </div>

          {/* Right Column: Predictive Interaction Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase text-emerald-700">
                PREDICTIVE TOUCH
              </div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-slate-900">
                Dynamic Hitbox &amp; Motor Staging
              </h3>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-slate-800">Physical Touch Geometry</div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Touch coordinates drift during one-handed use or transit. Optimaa learns individual tap centroids and expands hitboxes dynamically before the finger lands.
                </p>
              </div>

              {/* Bullets with Bold Lead-ins */}
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-slate-900 shrink-0">• Centroid recalibration:</span>
                  <span>Tracks touch distributions over 72 hours, expanding target zones for frequent digraphs like &apos;TH&apos;, &apos;ER&apos;, and &apos;IN&apos;.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-slate-900 shrink-0">• Privacy self-blur:</span>
                  <span>Operating system window watcher immediately halts tracking whenever a banking or password field is displayed.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-bold text-slate-900 shrink-0">• Motor ease:</span>
                  <span>Reduces backspacing frequency by up to 35% for fast typists and trembling hands without changing visual key sizes.</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-700 flex items-center justify-between">
              <span className="font-bold">Banking Self-Blur:</span>
              <span className="text-emerald-700 font-bold flex items-center space-x-1">
                <EyeOff className="w-3.5 h-3.5" />
                <span>Zero Cloud Recording</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
