import React from 'react';

export default function ReadyBanner({ onOpenModal }) {
  return (
    <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Ready for what’s next?</h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href="#colleges"
            className="px-4 py-2.5 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition-all"
          >
            Explore Colleges →
          </a>
          <a
            href="#jobs"
            className="px-4 py-2.5 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition-all"
          >
            Find Opportunities →
          </a>
          <button
            onClick={() => onOpenModal("List Your College", "Onboard your cohort onto CampusPe")}
            className="px-4 py-2.5 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-xs border border-gray-200 transition-all"
          >
            List Your College →
          </button>
          <button
            onClick={() => onOpenModal("Post a Job", "Reach thousands of candidate matches")}
            className="px-4 py-2.5 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-xs border border-gray-200 transition-all"
          >
            Post a Job →
          </button>
        </div>
      </div>
    </section>
  );
}