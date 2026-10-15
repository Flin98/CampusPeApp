import React, { useState } from 'react';

export default function AppShowcaseSection({ onNotify, onOpenModal }) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(2);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFD] border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0066FF] tracking-tight">
            Checkout Our App Interface Look
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
            Experience the power of a unified campus ecosystem right in your pocket. <strong>CampusPe</strong> offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.
          </p>
        </div>

        {/* 5-Phone Perspective Gallery Matching Figma Screenshot */}
        <div className="relative py-8 flex justify-center items-center gap-3 sm:gap-6 lg:gap-8 select-none">
          
          {/* Phone 1: Far Left (Discover & Student Profile) */}
          <div className="hidden lg:block w-52 h-[420px] bg-white rounded-[38px] p-2.5 shadow-xl border-2 border-amber-200/60 opacity-80 scale-90 transform -rotate-6 transition-all hover:opacity-100">
            <div className="h-full w-full bg-[#FAFCFF] rounded-[30px] p-3.5 flex flex-col justify-between border border-gray-100">
              <div className="flex items-center justify-between text-[10px] text-gray-400">
                <span>9:41</span>
                <span>📶 🔋</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400">Hi, Amit Kumar</span>
                <div className="text-xs font-bold text-gray-900 mt-0.5">Discover</div>
                <div className="mt-2 p-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl text-[9px]">
                  See how you can find a job quickly!
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="p-2 rounded-lg bg-white border border-gray-100 shadow-2xs text-[9px]">
                  <div className="font-bold text-gray-800">Software Engineer</div>
                  <div className="text-gray-400">Google Inc • ₹ 24-42 LPA</div>
                </div>
              </div>
              <div className="text-center text-[9px] text-gray-300">CampusPe Student v2.4</div>
            </div>
          </div>

          {/* Phone 2: Mid Left (Post a Job Form) */}
          <div className="hidden md:block w-60 h-[460px] bg-white rounded-[40px] p-3 shadow-2xl border-2 border-amber-300/80 opacity-90 scale-95 transform -rotate-3 transition-all">
            <div className="h-full w-full bg-[#0066FF] text-white rounded-[32px] p-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between text-[10px] text-blue-200 mb-2">
                  <span>9:41</span>
                  <span>Post a Job</span>
                </div>
                <div className="bg-white/10 rounded-xl p-2.5 backdrop-blur-xs mb-3">
                  <span className="text-[9px] uppercase font-bold text-blue-200">Hot Vacancy</span>
                  <p className="text-xs font-bold">Fast-track Hiring</p>
                </div>
              </div>
              <div className="bg-white text-gray-800 rounded-2xl p-3 space-y-2 text-[10px] shadow-sm">
                <div>
                  <span className="text-gray-400 text-[8px] block">Job Title</span>
                  <div className="h-4 bg-gray-100 rounded mt-0.5" />
                </div>
                <div>
                  <span className="text-gray-400 text-[8px] block">Job Type</span>
                  <div className="h-4 bg-gray-100 rounded mt-0.5" />
                </div>
                <div>
                  <span className="text-gray-400 text-[8px] block">Work Mode</span>
                  <div className="h-4 bg-gray-100 rounded mt-0.5" />
                </div>
              </div>
              <div className="text-[10px] text-blue-100 text-center">Recruiter Console</div>
            </div>
          </div>

          {/* Phone 3: Center Gold/Orange Bezel Phone */}
          <div className="w-72 sm:w-80 h-[530px] bg-white rounded-[50px] p-3.5 shadow-2xl ring-4 ring-[#E68A00] border-4 border-[#FFAE33] relative z-20 flex flex-col">
            
            {/* Dynamic Island Notch */}
            <div className="w-28 h-5 bg-black rounded-full mx-auto mb-2 flex items-center justify-end px-3">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </div>

            {/* Screen Inner */}
            <div className="flex-1 bg-white rounded-[36px] overflow-hidden flex flex-col p-3.5 relative border border-gray-100">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-2 border-b border-gray-100 mb-2">
                <div>
                  <span className="text-[9px] text-gray-400">Hi, Amit Kumar</span>
                  <h5 className="text-xs font-extrabold text-gray-900">Discover</h5>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs">🔔</span>
                  <span className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center text-[10px]">👤</span>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex gap-1.5 mb-2.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[#0066FF] text-white text-[9px] font-bold">Colleges</span>
                <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-[9px]">Jobs/Internships</span>
              </div>

              {/* Featured Card */}
              <div className="p-2.5 rounded-2xl bg-gradient-to-r from-gray-900 to-slate-800 text-white mb-2.5 shadow-sm">
                <div className="flex justify-between items-start">
                  <span className="text-[8px] text-gray-300 font-mono">XYZ University</span>
                  <button className="text-[8px] bg-blue-600 px-2 py-0.5 rounded">Explore</button>
                </div>
                <p className="text-[9px] text-gray-300 mt-1 leading-tight">
                  The best education you can get is investing in yourself.
                </p>
              </div>

              {/* Top Courses Row */}
              <div className="mb-2">
                <div className="flex justify-between text-[9px] font-bold text-gray-800 mb-1">
                  <span>Top Courses</span>
                  <span className="text-[#0066FF]">View all</span>
                </div>
                <div className="flex justify-between text-center text-[8px] text-gray-600">
                  <div>
                    <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-0.5">🎓</div>
                    B.Tech
                  </div>
                  <div>
                    <div className="w-7 h-7 rounded-full bg-rose-50 flex items-center justify-center mx-auto mb-0.5">🎨</div>
                    Arts
                  </div>
                  <div>
                    <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-0.5">⚕️</div>
                    MBBS
                  </div>
                  <div>
                    <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-0.5">📊</div>
                    B.Com
                  </div>
                  <div>
                    <div className="w-7 h-7 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-0.5">📚</div>
                    M.Com
                  </div>
                </div>
              </div>

              {/* Trending Colleges List */}
              <div className="space-y-1.5 flex-1 overflow-y-auto">
                <div className="p-2 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-gray-900 block">Victory College</span>
                    <span className="text-[8px] text-gray-400">B.Tech Mecha.. • 4 years</span>
                  </div>
                  <button
                    onClick={() => onOpenModal("Victory College Admit", "Direct seat counseling on CampusPe")}
                    className="px-2 py-0.5 bg-[#0066FF] text-white text-[9px] rounded-lg font-bold"
                  >
                    Apply Now
                  </button>
                </div>
              </div>

              <button
                onClick={() => onNotify("Opening CampusPe Mobile Experience...")}
                className="w-full mt-2 py-2 bg-[#0066FF] hover:bg-blue-700 text-white text-[11px] font-bold rounded-xl shadow-xs transition-colors"
              >
                Download App
              </button>
            </div>
          </div>

          {/* Phone 4: Mid Right (My Applications Tracker) */}
          <div className="hidden md:block w-60 h-[460px] bg-white rounded-[40px] p-3 shadow-2xl border-2 border-amber-300/80 opacity-90 scale-95 transform rotate-3 transition-all">
            <div className="h-full w-full bg-[#0066FF] text-white rounded-[32px] p-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between text-[10px] text-blue-200 mb-2">
                  <span>9:41</span>
                  <span>My Applications</span>
                </div>
                <div className="flex gap-1 mb-3">
                  <span className="px-2 py-0.5 bg-white text-[#0066FF] font-bold text-[8px] rounded-full">Applied (5)</span>
                  <span className="px-2 py-0.5 bg-blue-700 text-white text-[8px] rounded-full">Shortlisted (2)</span>
                </div>
              </div>

              <div className="space-y-2 text-[10px]">
                <div className="bg-white text-gray-900 p-2.5 rounded-xl shadow-xs">
                  <span className="font-bold block">Software Engineer</span>
                  <span className="text-[8px] text-emerald-600 font-semibold">Google Inc • Shortlisted (Round 2)</span>
                </div>
                <div className="bg-white text-gray-900 p-2.5 rounded-xl shadow-xs">
                  <span className="font-bold block">Full Stack Developer</span>
                  <span className="text-[8px] text-amber-600 font-semibold">Tokopedia • Under Review</span>
                </div>
              </div>

              <span className="text-[10px] text-blue-200 text-center">HUD Application Status</span>
            </div>
          </div>

          {/* Phone 5: Far Right (XYZ College & Courses) */}
          <div className="hidden lg:block w-52 h-[420px] bg-white rounded-[38px] p-2.5 shadow-xl border-2 border-amber-200/60 opacity-80 scale-90 transform rotate-6 transition-all hover:opacity-100">
            <div className="h-full w-full bg-white rounded-[30px] p-3.5 flex flex-col justify-between border border-gray-100">
              <div className="flex items-center justify-between text-[10px] text-gray-400">
                <span>9:41</span>
                <span>📶 🔋</span>
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">XYZ College</div>
                <div className="text-[9px] text-gray-400">Bangalore Campus</div>
                <div className="w-full h-16 bg-blue-50 rounded-xl mt-2 p-2 text-[9px] text-blue-800">
                  B.Tech Computer Science Engineering
                </div>
              </div>
              <div className="space-y-1">
                <div className="h-2 bg-gray-100 rounded w-full" />
                <div className="h-2 bg-blue-100 rounded w-3/4" />
              </div>
              <div className="text-center text-[9px] text-[#0066FF] font-semibold">Institutional Dashboard</div>
            </div>
          </div>

        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => setActiveGalleryIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                activeGalleryIndex === i ? "w-8 bg-[#0066FF]" : "w-2.5 bg-blue-200 hover:bg-blue-300"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Download App Banner */}
        <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl shadow-blue-500/5 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0066FF] mb-3">
              Download App Now
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6">
              Elevate your academic journey with CampusPe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you’re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, CampusPe streamlines the connection. Your career doesn't start at graduation—it starts here.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNotify("Opening Google Play Store...")}
                className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-5 py-2.5 rounded-2xl transition-all shadow-md active:scale-95"
              >
                <span className="text-xl">▶</span>
                <div className="text-left">
                  <span className="text-[9px] uppercase font-medium text-gray-300 block leading-none">GET IT ON</span>
                  <span className="text-sm font-bold tracking-tight">Google Play</span>
                </div>
              </button>

              <button
                onClick={() => onNotify("Opening Apple App Store...")}
                className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-5 py-2.5 rounded-2xl transition-all shadow-md active:scale-95"
              >
                <span className="text-xl">🍎</span>
                <div className="text-left">
                  <span className="text-[9px] uppercase font-medium text-gray-300 block leading-none">Download on the</span>
                  <span className="text-sm font-bold tracking-tight">App Store</span>
                </div>
              </button>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="w-56 h-64 rounded-3xl bg-gradient-to-tr from-[#0066FF] to-indigo-600 p-5 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="w-32 h-32 rounded-full bg-white/10 absolute -bottom-10 -right-10 blur-xl" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-200">CampusPe OS</span>
                <span className="text-xl">📱</span>
              </div>
              <div>
                <h4 className="text-2xl font-black">All-in-One</h4>
                <p className="text-xs text-blue-100 mt-1">Colleges • Jobs • Admissions • Instant Matching</p>
              </div>
              <div className="text-[10px] text-blue-200">Free download for iOS &amp; Android</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}