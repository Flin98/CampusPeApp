import React from 'react';
import { IconArrowRight } from './icons/Icons';

const employersData = [
  {
    step: "01",
    title: "Post a role in minutes",
    desc: "Define your skills, location and hiring requirements. Reach relevant candidates across the CampusPe network.",
    topBadge: (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-semibold bg-[#EAF8EE] text-[#1E7E34] border border-[#B7E4C7]">
        ✦ 5 Min Deployment
      </span>
    ),
    bottomBadge: (
      <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-medium text-gray-500 border border-gray-200 bg-gray-50/60">
        500+ Campus Network
      </span>
    ),
  },
  {
    step: "02",
    title: "Receive a matched shortlist",
    desc: "Get candidates matched to your role by skills, experience, location and hiring requirements.",
    topBadge: (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-semibold bg-[#F5EDFD] text-[#7C3AED] border border-[#E9D5FF]">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="9" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
        Zero CV Clutter
      </span>
    ),
    bottomBadge: (
      <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-medium text-gray-500 border border-gray-200 bg-gray-50/60">
        Tier 1-Tier 3 Parity
      </span>
    ),
  },
  {
    step: "03",
    title: "Connect with candidates directly",
    desc: "Message, schedule interviews, and move candidates through your pipeline — all in one place.",
    topBadge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold bg-[#EBF3FF] text-[#0066FF] border border-[#BFDBFE]">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        In-App Scheduling
      </span>
    ),
    bottomBadge: (
      <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-medium text-gray-500 border border-gray-200 bg-gray-50/60">
        1-Click Video / Chat
      </span>
    ),
  },
  {
    step: "04",
    title: "Reduce your time-to-hire",
    desc: "Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.",
    topBadge: (
      <span className="inline-block px-3 py-0.5 rounded-full text-[11px] font-extrabold bg-[#0066FF] text-white">
        &lt;2 DAYS
      </span>
    ),
    bottomBadge: (
      <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-semibold text-[#1E7E34] bg-[#EAF8EE] border border-[#B7E4C7]">
        57% Faster Hiring
      </span>
    ),
  },
];

export default function EmployersSection({ onOpenModal }) {
  return (
    <section id="employers" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading and Description */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3FF] text-[#0066FF] text-xs font-bold mb-5 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            03 • FOR EMPLOYERS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-5">
            Stop running<br />
            campus drives.<br />
            <span className="text-[#0066FF]">Start hiring the right<br />people.</span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.
          </p>

          <button
            type="button"
            onClick={() => onOpenModal("Post a Job on CampusPe", "Instantly match with 800+ students and recent graduates")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066FF] hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all"
          >
            Post a Job <IconArrowRight size={16} />
          </button>
        </div>

        {/* Right Column: 4 Employer Feature Cards */}
        <div className="lg:col-span-7 space-y-4">
          {employersData.map((feat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="flex items-start justify-between gap-4">
                
                {/* Left Content */}
                <div className="flex-1 pr-2">
                  <div className="flex items-center gap-2.5 flex-wrap mb-2">
                    <span className="text-xs font-mono font-bold text-[#0066FF] bg-[#EBF3FF] px-2 py-0.5 rounded-md">
                      {feat.step}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      {feat.title}
                    </h3>

                    <span className="text-[10px] font-bold text-[#0066FF] bg-[#EBF3FF] px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                      INSTANT SETUP
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md mt-1">
                    {feat.desc}
                  </p>
                </div>

                {/* Right Badges */}
                <div className="flex flex-col items-end gap-1.5 flex-shrink-0 pt-0.5">
                  {feat.topBadge}
                  {feat.bottomBadge}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}