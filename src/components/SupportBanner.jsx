import React from 'react';
import { IconArrowRight } from './icons/Icons';

export default function SupportBanner({ onOpenModal }) {
  return (
    <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-gradient-to-b from-blue-50/70 to-sky-50/40 rounded-3xl p-8 sm:p-12 border border-blue-100/80 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
          Still have questions?
        </h2>
        <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
          Our support team is here to help you succeed. Get in touch anytime.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onOpenModal("Contact CampusPe Support", "Our advisors are available 24/7")}
            className="px-6 py-3 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-2"
          >
            Contact Support <IconArrowRight size={16} />
          </button>
          <button
            onClick={() => onOpenModal("Schedule a Strategy Call", "Talk with institutional or recruiter onboarding")}
            className="px-6 py-3 rounded-full bg-white hover:bg-gray-50 border border-blue-300 text-[#0066FF] font-semibold text-sm active:scale-95 transition-all flex items-center gap-2 shadow-xs"
          >
            <span>📞</span> Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}