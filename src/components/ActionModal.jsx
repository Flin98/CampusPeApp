import React from 'react';
import { IconX } from './icons/Icons';

export default function ActionModal({ isOpen, onClose, title, subtitle, onSubmitSuccess }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <IconX size={20} />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-4 text-2xl">
          ⚡
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {title}
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          {subtitle}
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
            onSubmitSuccess(`Request submitted for ${title}!`);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name</label>
            <input
              required
              type="text"
              placeholder="e.g. Amit Kumar"
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Email or Phone Number</label>
            <input
              required
              type="text"
              placeholder="amit@example.com or +91 9876543210"
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0066FF] transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#0066FF] hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-500/20 active:scale-95 transition-all"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}