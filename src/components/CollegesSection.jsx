import React from 'react';
import { IconArrowRight } from './icons/Icons';

const collegesData = [
  {
    step: "01",
    label: "VERIFIED PROFILE",
    title: "Build your college profile",
    desc: "Showcase your college, courses, fees, campus, placements and achievements in one structured profile that students and recruiters can discover.",
    topBadge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-semibold bg-[#F0FAF0] text-[#1E7E34] border border-[#72C87E]">
        <svg className="w-3.5 h-3.5 text-[#1E7E34]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
        NAAC A++ Ready
      </span>
    ),
    bottomBadge: (
      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold text-[#0066FF] border border-[#4094FF] bg-white">
        98% Match
      </span>
    ),
  },
  {
    step: "02",
    label: "DIRECT ENROLL",
    title: "Students discover and connect",
    desc: "Students searching for colleges can discover your profile, explore your courses and fees, and connect directly with your admission team.",
    topBadge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold bg-[#EBF3FF] text-[#0066FF] border border-transparent">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Direct Enquiries
      </span>
    ),
    bottomBadge: (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#F4FAF6] text-[#374151] border border-gray-100">
        <span className="w-2 h-2 rounded-full bg-[#10B981]" />
        WHATSAPP / CHAT
      </span>
    ),
    extraNote: "Avg. response: <15 min",
  },
  {
    step: "03",
    label: "CAMPUS RECRUITING",
    title: "Recruiters discover your College",
    desc: "Companies hiring fresh talent can discover your college, explore your talent and connect with your placement team.",
    topBadge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold bg-[#F5EDFD] text-[#7C3AED] border border-transparent">
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
        500+ Hiring Partners
      </span>
    ),
    bottomBadge: (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-[#EBF3FF] text-[#0066FF]">
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        Connect Directly
      </span>
    ),
  },
  {
    step: "04",
    label: "LIVE HUD",
    title: "Track placements in real time",
    desc: "Track students, interviews, offers and placements from one centralized dashboard.",
    topBadge: (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#FDF2F2] text-[#E02424]">
        <span className="w-2 h-2 rounded-full bg-[#E02424]" />
        LIVE PLACEMENTS
      </span>
    ),
    bottomBadge: (
      <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] font-bold bg-[#0066FF] text-white shadow-xs">
        Students · Interviews · Offers
      </span>
    ),
  },
];

export default function CollegesSection({ onOpenModal }) {
  return (
    <section id="colleges" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading with exact line wrap */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3FF] text-[#0066FF] text-xs font-bold mb-5 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            02 • FOR COLLEGES
          </div>

          {/* Heading matches Figma:
              Get Discovered
              by Students and
              Recruiters. */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-5">
            Get Discovered<br />
            by <span className="text-[#0066FF]">Students and<br />Recruiters.</span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
            Put your college in front of students searching for the right course and recruiters looking for the right talent. CampusPe helps you build your presence, attract enquiries and connect with opportunities.
          </p>

          <button
            type="button"
            onClick={() => onOpenModal("List Your College", "Get featured for verified admissions and recruiter discovery")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066FF] hover:bg-blue-700 active:scale-95 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all"
          >
            List Your College <IconArrowRight size={16} />
          </button>
        </div>

        {/* Right Column: 4 Benefit Cards with exact layout */}
        <div className="lg:col-span-7 space-y-4">
          {collegesData.map((feat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="flex items-start justify-between gap-4">
                
                {/* Left Content */}
                <div className="flex-1 pr-2">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="text-xs font-mono font-bold text-[#0066FF] bg-[#EBF3FF] px-2 py-0.5 rounded-md">
                      {feat.step}
                    </span>
                    <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">
                      {feat.label}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5">
                    {feat.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-md">
                    {feat.desc}
                  </p>
                </div>

                {/* Right Badges */}
                <div className="flex flex-col items-end gap-2 flex-shrink-0 pt-0.5">
                  {feat.topBadge}
                  {feat.bottomBadge}
                  {feat.extraNote && (
                    <span className="text-[10px] text-gray-400 font-medium">
                      {feat.extraNote}
                    </span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}