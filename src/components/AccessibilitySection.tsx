import React, { useState } from 'react';
import { Sun, Moon, PhoneCall, HeartHandshake } from 'lucide-react';

export const AccessibilitySection: React.FC = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<'morning' | 'afternoon' | 'evening'>('morning');

  const slotData = {
    morning: {
      time: "08:00 MORNING",
      app: "YouTube Devotional",
      color: "#EA580C",
      textColor: "text-amber-700",
      pillColor: "bg-amber-100 text-amber-800",
      desc: "Auto-surfaces preferred prayer and devotional channels directly on the home screen without navigating nested folders or app drawers.",
      icon: Sun
    },
    afternoon: {
      time: "14:00 AFTERNOON",
      app: "WhatsApp Family Call",
      color: "#16A34A",
      textColor: "text-emerald-700",
      pillColor: "bg-emerald-100 text-emerald-800",
      desc: "Pre-stages a 1-tap video call prompt to children and close relatives at routine daily check-in hours, avoiding contact list search.",
      icon: PhoneCall
    },
    evening: {
      time: "19:00 EVENING",
      app: "Games & Family Updates",
      color: "#0F172A",
      textColor: "text-slate-800",
      pillColor: "bg-slate-200 text-slate-800",
      desc: "Brings up casual puzzle games and family photo updates before bedtime, aligning with established evening unwinding habits.",
      icon: Moon
    }
  };

  const activeSlot = slotData[selectedTimeSlot];
  const IconComponent = activeSlot.icon;

  return (
    <section id="accessibility" className="py-24 border-b border-slate-200 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-xs font-['Space_Grotesk'] font-bold text-emerald-700 uppercase tracking-wider flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>USE CASE 04 | OLDER &amp; DISABLED USERS (D2C ACCESSIBILITY)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] font-bold text-slate-900 tracking-tight">
            Older users open the same few apps at the same times, so the phone should put them first.
          </h2>
        </div>

        {/* Top Feature: 24-Hour Circadian Arc Panel */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-8 shadow-md hover:shadow-lg transition-all duration-300">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="text-xs font-['Space_Grotesk'] font-bold text-slate-500 uppercase tracking-wider">
                24-HOUR CIRCADIAN APP SURFACING ARC
              </div>
              <h3 className="text-xl sm:text-2xl font-['Space_Grotesk'] font-bold text-slate-900 mt-1">
                Routine-Based Predictive App Surfacing
              </h3>
            </div>
            <span className="text-xs font-['Space_Grotesk'] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              ELIMINATES COGNITIVE SEARCH FRICTION
            </span>
          </div>

          {/* Circadian Sun & Moon Arc SVG */}
          <div className="relative py-4 flex flex-col items-center justify-center">
            <svg width="600" height="130" viewBox="0 0 600 130" fill="none" className="max-w-full overflow-visible">
              {/* Arc Path */}
              <path
                d="M 50 110 C 150 15, 450 15, 550 110"
                stroke="#E2E8F0"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                fill="none"
              />
              <path
                d="M 50 110 C 150 15, 450 15, 550 110"
                stroke="#F59E0B"
                strokeWidth="2"
                fill="none"
                opacity="0.8"
              />

              {/* Baseline horizon */}
              <line x1="30" y1="110" x2="570" y2="110" stroke="#CBD5E1" strokeWidth="1.5" />

              {/* Sunrise / Morning Node (08:00) */}
              <circle
                cx="140"
                cy="58"
                r={selectedTimeSlot === 'morning' ? "12" : "8"}
                fill="#EA580C"
                className="cursor-pointer transition-all duration-200"
                onClick={() => setSelectedTimeSlot('morning')}
              />
              <text x="140" y="38" textAnchor="middle" fill="#EA580C" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                08:00 SUNRISE
              </text>

              {/* Midday Node (14:00) */}
              <circle
                cx="300"
                cy="38"
                r={selectedTimeSlot === 'afternoon' ? "12" : "8"}
                fill="#16A34A"
                className="cursor-pointer transition-all duration-200"
                onClick={() => setSelectedTimeSlot('afternoon')}
              />
              <text x="300" y="18" textAnchor="middle" fill="#16A34A" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                14:00 MIDDAY
              </text>

              {/* Evening Node (19:00) */}
              <circle
                cx="460"
                cy="58"
                r={selectedTimeSlot === 'evening' ? "12" : "8"}
                fill="#0F172A"
                className="cursor-pointer transition-all duration-200"
                onClick={() => setSelectedTimeSlot('evening')}
              />
              <text x="460" y="38" textAnchor="middle" fill="#0F172A" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                19:00 EVENING
              </text>
            </svg>
          </div>

          {/* Time Slot Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setSelectedTimeSlot('morning')}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                selectedTimeSlot === 'morning'
                  ? 'bg-amber-50 border-amber-500 shadow-sm -translate-y-0.5'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center space-x-2 text-xs font-bold text-amber-700">
                <Sun className="w-4 h-4" />
                <span>08:00 MORNING</span>
              </div>
              <div className="font-['Space_Grotesk'] font-bold text-base text-slate-900 mt-1">
                YouTube Devotional
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Auto-surfaces prayer channels directly.
              </div>
            </button>

            <button
              onClick={() => setSelectedTimeSlot('afternoon')}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                selectedTimeSlot === 'afternoon'
                  ? 'bg-emerald-50 border-emerald-500 shadow-sm -translate-y-0.5'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center space-x-2 text-xs font-bold text-emerald-700">
                <PhoneCall className="w-4 h-4" />
                <span>14:00 AFTERNOON</span>
              </div>
              <div className="font-['Space_Grotesk'] font-bold text-base text-slate-900 mt-1">
                WhatsApp Family Call
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Pre-stages 1-tap call to children.
              </div>
            </button>

            <button
              onClick={() => setSelectedTimeSlot('evening')}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                selectedTimeSlot === 'evening'
                  ? 'bg-slate-100 border-slate-500 shadow-sm -translate-y-0.5'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                <Moon className="w-4 h-4" />
                <span>19:00 EVENING</span>
              </div>
              <div className="font-['Space_Grotesk'] font-bold text-base text-slate-900 mt-1">
                Games &amp; Updates
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Presents puzzle games &amp; family feed.
              </div>
            </button>
          </div>

          {/* Dynamic Active Slot Inspection Card */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${activeSlot.pillColor}`}>
                  {activeSlot.time}
                </span>
                <span className="font-['Space_Grotesk'] font-bold text-slate-900 text-sm">
                  {activeSlot.app}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {activeSlot.desc}
              </p>
            </div>
            <div className="shrink-0 flex items-center space-x-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs">
              <IconComponent className="w-4 h-4 text-slate-700" />
              <span className="font-bold text-slate-800">1-Tap Auto-Surfaced</span>
            </div>
          </div>
        </div>

        {/* Dual Onboarding Architecture: Passive Observation vs Caregiver Intake */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Pathway A: Passive Observation */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-['Space_Grotesk'] font-bold text-emerald-800 uppercase tracking-wider">
                PATHWAY A &bull; INDEPENDENT USERS
              </span>
            </div>
            <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-slate-900">
              Passive 72h Habit Learning
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              If the senior already operates their device independently, Optimaa runs in the background for 2 to 3 days to establish their baseline circadian rhythm and typical touch coordinates.
            </p>
            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div>&bull; Zero configuration required from the user.</div>
              <div>&bull; Adapts quietly without interrupting daily phone use.</div>
              <div>&bull; Builds behavioral touch profiles on-chip.</div>
            </div>
          </div>

          {/* Pathway B: Caregiver Guided Intake */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="text-xs font-['Space_Grotesk'] font-bold text-amber-800 uppercase tracking-wider">
                PATHWAY B &bull; ASSISTED FAMILIES
              </span>
            </div>
            <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-slate-900">
              Caregiver 5-Question Intake
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              If the senior struggles with modern smartphone interfaces, a child or caregiver completes a 5-question intake form to seed the initial app routine directly.
            </p>
            <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
              <div className="flex items-center space-x-1.5 text-amber-800 font-semibold">
                <HeartHandshake className="w-4 h-4 text-amber-600" />
                <span>Family Caregiver Setup Flow</span>
              </div>
              <div>&bull; Pre-configures family contacts and emergency numbers.</div>
              <div>&bull; Seeds prayer, radio, or news channels instantly.</div>
            </div>
          </div>

        </div>

        {/* Bottom Feature Card: Ease Beats Micro-Optimization */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-emerald-900 font-['Space_Grotesk'] font-bold text-sm text-center shadow-xs">
          For older and disabled users: zero-menu ease beats battery micro-tuning every single time.
        </div>

      </div>
    </section>
  );
};
