import React, { useState } from 'react';
import { IconArrowRight } from './icons/Icons';
import { opportunitiesData } from '../data/landingData';

export default function DiscoverySection({ onOpenModal }) {
  const [activeStepTab, setActiveStepTab] = useState(0);
  const [activeFeedTab, setActiveFeedTab] = useState("All");

  const filteredOpportunities = opportunitiesData.filter((card) => {
    if (activeFeedTab === "All") return true;
    if (activeFeedTab === "Colleges") return card.type === "Colleges";
    if (activeFeedTab === "Jobs") return card.type === "Jobs" || card.type === "Freelance";
    if (activeFeedTab === "Internships") return card.type === "Internships";
    if (activeFeedTab === "Freelance") return card.type === "Freelance";
    if (activeFeedTab === "Part-time") return card.type === "Freelance";
    return true;
  });

  return (
    <section id="jobs" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Interactive Steps */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF3FF] text-[#0066FF] text-xs font-bold mb-4 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
            01 • OPPORTUNITY DISCOVERY
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Stop searching.<br />
            <span className="text-[#0066FF]">Start getting matched.</span>
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.
          </p>

          <div className="space-y-3.5 mb-8">
            {[
              {
                step: "01",
                title: "Set your preferences",
                desc: "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.",
                badge: "Smart Profile"
              },
              {
                step: "02",
                title: "Discover relevant opportunities",
                desc: "Explore colleges and career opportunities matched to your profile, interests and goals.",
                badge: "AI Ranked"
              },
              {
                step: "03",
                title: "Get notified when something fits",
                desc: "Get notified when a relevant college or new opportunity is found, so you can act early.",
                badge: "Instant Alerts"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStepTab(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeStepTab === idx
                    ? "bg-white border-blue-400 shadow-md shadow-blue-500/5 ring-1 ring-blue-300"
                    : "bg-white border-gray-100 hover:border-gray-200"
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
                    {item.step}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                      <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#feed"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            Explore opportunities <IconArrowRight size={16} />
          </a>
        </div>

        {/* Right Column: Opportunity Feed Card */}
        <div id="feed" className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-blue-500/5 p-6 sm:p-7 relative">
          
          {/* Header with Live Counter */}
          <div className="flex flex-wrap items-center justify-between pb-4 border-b border-gray-100 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0066FF] text-white flex items-center justify-center text-lg shadow-sm">
                ⚡
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">CampusPe Opportunity Feed</h3>
                <p className="text-xs text-gray-400">Colleges &amp; opportunities matched to you</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF8EE] text-[#1E7E34] border border-[#B7E4C7]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 12 new matches today
            </span>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
            {["All", "Colleges", "Jobs", "Internships", "Freelance", "Part-time"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFeedTab(tab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeFeedTab === tab
                    ? "bg-[#0066FF] text-white shadow-xs font-semibold"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Opportunities List */}
          <div className="space-y-3.5 mt-2">
            {filteredOpportunities.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    
                    {/* Badge Icon depending on item */}
                    {item.badgeType === "iim" && (
                      <div className="w-10 h-10 rounded-xl border border-red-200 bg-red-50/50 flex items-center justify-center text-red-600 font-serif text-sm font-bold shadow-xs">
                        🏛️
                      </div>
                    )}
                    {item.badgeType === "google" && (
                      <div className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center shadow-xs">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z" />
                          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                        </svg>
                      </div>
                    )}
                    {item.badgeType === "notion" && (
                      <div className="w-10 h-10 rounded-xl border border-gray-200 bg-white flex items-center justify-center font-bold text-gray-800 shadow-xs">
                        N
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#0066FF] transition-colors">
                          {item.title}
                        </h4>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${item.tagColor}`}>
                          {item.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                        <span>{item.meta1}</span>
                        <span>{item.meta2}</span>
                        <strong className="text-gray-900 font-semibold">{item.meta3}</strong>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenModal(`Apply for ${item.title}`, `Compensation / Fee: ${item.meta3}`)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#0066FF] hover:bg-blue-700 text-white font-semibold text-xs whitespace-nowrap active:scale-95 transition-all shadow-xs"
                  >
                    {item.ctaText}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2.5 leading-relaxed pl-13">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Row */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
            <a
              href="#resume"
              className="text-[#0066FF] font-semibold flex items-center gap-1 hover:underline"
            >
              View all matched opportunities <IconArrowRight size={14} />
            </a>
            <span className="text-gray-400">Curated for you • Updated daily</span>
          </div>

          {/* Handwritten Note underneath */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[#7C3AED]">
            <span className="text-lg">↺</span>
            <span className="text-xs font-serif italic text-purple-700 font-handwritten text-sm">
              A mix of colleges, jobs, internships and gigs — all in one place.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}