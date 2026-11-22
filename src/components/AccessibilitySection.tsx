import React, { useState } from 'react';
import { Sun, Moon, PhoneCall, HeartHandshake } from 'lucide-react';

export const AccessibilitySection: React.FC = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<'morning' | 'afternoon' | 'evening'>('morning');

  const slotData = {
    morning: {
      time: "08:00 MORNING",
      app: "YouTube Devotional",
      color: "#FFA048",
      textColor: "text-[#FFA048]",
      desc: "Auto-surfaces preferred prayer and devotional channels directly on the home screen without navigating nested folders or app drawers.",
      icon: Sun
    },
    afternoon: {
      time: "14:00 AFTERNOON",
      app: "WhatsApp Family Call",
      color: "#A1FF5F",
      textColor: "text-[#A1FF5F]",
      desc: "Pre-stages a 1-tap video call prompt to children and close relatives at routine daily check-in hours, avoiding contact list search.",
      icon: PhoneCall
    },
    evening: {
      time: "19:00 EVENING",
      app: "Games & Updates",
      color: "#FFFFFF",
      textColor: "text-white",
      desc: "Brings up casual puzzle games and family Facebook updates before bedtime, aligning with established evening unwinding habits.",
      icon: Moon
    }
  };

  return (
    <section id="accessibility" className="py-24 border-b border-[#222222] bg-[#0E0B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-[11px] font-['Space_Grotesk'] font-bold text-[#A1FF5F] uppercase tracking-widest flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#A1FF5F]" />
            <span>USE CASE 04 | OLDER &amp; DISABLED USERS (ACCESSIBILITY)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-white tracking-tight">
            Older users open the same few apps at the same times, so the phone should put them first.
          </h2>
        </div>

        {/* Top Feature: 24-Hour Circadian Arc Panel */}
        <div className="bg-[#151119] border border-[#2A1E30] rounded-3xl p-6 sm:p-8 space-y-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-['Space_Grotesk'] font-bold text-[#888888] uppercase tracking-wider">
                24-HOUR CIRCADIAN APP SURFACING ARC
              </div>
              <h3 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-white mt-1">
                Routine-Based Predictive App Surfacing
              </h3>
            </div>
            <span className="text-xs font-['Space_Grotesk'] font-bold text-[#A1FF5F] bg-[#A1FF5F]/10 border border-[#A1FF5F]/30 px-3 py-1 rounded-full">
              ELIMINATES COGNITIVE SEARCH FRICTION
            </span>
          </div>

          {/* Circadian Sun & Moon Arc SVG */}
          <div className="relative py-4 flex flex-col items-center justify-center">
            <svg width="600" height="130" viewBox="0 0 600 130" fill="none" className="max-w-full overflow-visible">
              {/* Arc Path */}
              <path
                d="M 50 110 C 150 15, 450 15, 550 110"
                stroke="#33243C"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M 50 110 C 150 15, 450 15, 550 110"
                stroke="#FFA048"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />

              {/* Baseline horizon */}
              <line x1="30" y1="110" x2="570" y2="110" stroke="#33243C" strokeWidth="1.5" />

              {/* Sunrise / Morning Node (08:00) */}
              <circle
                cx="140"
                cy="58"
                r={selectedTimeSlot === 'morning' ? "12" : "8"}
                fill="#FFA048"
                className="cursor-pointer transition-all"
                onClick={() => setSelectedTimeSlot('morning')}
              />
              <text x="140" y="38" textAnchor="middle" fill="#FFA048" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                08:00 SUNRISE
              </text>

              {/* Midday Zenith Node (14:00) */}
              <circle
                cx="300"
                cy="28"
                r={selectedTimeSlot === 'afternoon' ? "14" : "9"}
                fill="#A1FF5F"
                className="cursor-pointer transition-all"
                onClick={() => setSelectedTimeSlot('afternoon')}
              />
              <text x="300" y="12" textAnchor="middle" fill="#A1FF5F" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                14:00 MIDDAY CALL
              </text>

              {/* Evening / Crescent Moon Node (19:00) */}
              <circle
                cx="460"
                cy="58"
                r={selectedTimeSlot === 'evening' ? "12" : "8"}
                fill="#FFFFFF"
                className="cursor-pointer transition-all"
                onClick={() => setSelectedTimeSlot('evening')}
              />
              <text x="460" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                19:00 EVENING
              </text>
            </svg>
          </div>

          {/* 3 Interactive Cards matching the Arc Peaks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(Object.keys(slotData) as Array<keyof typeof slotData>).map((key) => {
              const item = slotData[key];
              const isSelected = selectedTimeSlot === key;
              const IconComp = item.icon;
              return (
                <div
                  key={key}
                  onClick={() => setSelectedTimeSlot(key)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                    isSelected
                      ? 'bg-[#201828] border-[#A1FF5F] shadow-lg'
                      : 'bg-[#18131E] border-[#291F30] hover:border-[#40314C]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-['Space_Grotesk'] font-bold ${item.textColor}`}>
                      {item.time}
                    </span>
                    <IconComp className={`w-4 h-4 ${item.textColor}`} />
                  </div>
                  <h4 className="font-['Space_Grotesk'] font-bold text-lg text-white">
                    {item.app}
                  </h4>
                  <p className="text-xs text-[#AAAAAA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Split: Dual Onboarding Pathways & Accessibility Priority Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Fork Diagram (Dual Pathways) */}
          <div className="lg:col-span-7 bg-[#141018] border border-[#2B1F32] rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="text-[11px] font-['Space_Grotesk'] font-bold text-[#888888] uppercase tracking-wider">
                DUAL ONBOARDING PATHWAYS MERGING TO UNIFIED HOME SCREEN
              </div>
              <h3 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-white mt-1">
                Zero Cold-Start Friction
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              
              {/* Lane A & Lane B Stack */}
              <div className="sm:col-span-6 space-y-4">
                
                {/* Lane A */}
                <div className="bg-[#1A1420] border-2 border-[#A1FF5F] p-4 rounded-2xl space-y-1.5">
                  <div className="text-[10px] font-['Space_Grotesk'] font-bold text-[#A1FF5F] uppercase tracking-wider">
                    LANE A: PASSIVE OBSERVATION
                  </div>
                  <div className="text-xs text-[#E0E0E0] leading-relaxed">
                    Phone monitors routines quietly for 2 to 3 days to map natural daily app triggers.
                  </div>
                </div>

                {/* Lane B */}
                <div className="bg-[#1A1420] border-2 border-[#FFA048] p-4 rounded-2xl space-y-1.5">
                  <div className="text-[10px] font-['Space_Grotesk'] font-bold text-[#FFA048] uppercase tracking-wider">
                    LANE B: GUIDED CAREGIVER SETUP
                  </div>
                  <div className="text-xs text-[#E0E0E0] leading-relaxed">
                    Caregiver answers a 5-question intake on essential apps, contacts, and video call habits.
                  </div>
                </div>

              </div>

              {/* Merge Arrow & Result */}
              <div className="sm:col-span-6">
                <div className="bg-[#1C1624] border border-white/20 p-5 rounded-2xl space-y-2">
                  <div className="text-[10px] font-['Space_Grotesk'] font-bold text-[#A1FF5F] uppercase tracking-wider">
                    UNIFIED INTERFACE RESULT
                  </div>
                  <h4 className="text-base font-['Space_Grotesk'] font-bold text-white">
                    Routine Apps Surface Automatically
                  </h4>
                  <p className="text-xs text-[#AAAAAA] leading-relaxed">
                    Both streams combine into a unified, clean launcher that surfaces exactly what is needed at each time of day without digging into nested menus or app drawers.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Solid Lime Priority Card */}
          <div className="lg:col-span-5 bg-[#A1FF5F] text-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-4">
              <div className="text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase opacity-75">
                CORE ACCESSIBILITY PRIORITY
              </div>
              <h3 className="text-2xl sm:text-3xl font-['Space_Grotesk'] font-bold text-black tracking-tight leading-snug">
                Reaching daily apps easily matters more than battery tuning.
              </h3>
              <p className="text-sm text-black/90 leading-relaxed font-medium">
                User reality: Older adults use a bounded loop of 4 to 5 apps and charge irregularly. Eliminating nested menus, launcher search, and call friction solves real frustration; battery micro-tuning is secondary to predictable, low-friction access to family and daily content.
              </p>
            </div>

            <div className="pt-4 border-t border-black/15 text-xs text-black/80 font-bold flex items-center space-x-2">
              <HeartHandshake className="w-4 h-4 text-black" />
              <span>Dignified, independent technology interaction</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
