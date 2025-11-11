'use client';

import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  if (!isOpen) return null;

  const salesPoints = [
    "Which niche is best for your background",
    "How to land your first client fast",
    "Whether this is the right fit for your goals",
    "What's inside the kit + how to use it",
    "How to get started this week",
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start sm:items-center justify-center p-4 animate-in fade-in duration-300 overflow-y-auto overscroll-contain touch-pan-y">
      <div className="bg-white rounded-2xl w-full max-w-6xl lg:h-[95vh] max-h-[95vh] h-auto shadow-2xl relative flex flex-col overflow-y-auto lg:overflow-hidden my-6">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b bg-white">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">🎯 Book Your Free 1:1 Consultation</h2>
            <p className="text-gray-600 mt-1">We'll walk you through everything you need to know</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row overflow-visible lg:overflow-hidden">
          {/* Sales Points Section - More Compact */}
          <div className="lg:w-1/3 bg-gradient-to-br from-purple-700 to-indigo-700 text-white p-6 flex flex-col justify-center flex-shrink-0">
            <h3 className="text-xl font-bold mb-4">During your free call, we'll cover:</h3>
            <ul className="space-y-3 text-lg">
              {salesPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-200 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm mt-6 opacity-80">
              No sales pitch, just pure strategy to help you succeed.
            </p>
          </div>

          {/* Contact Section */}
            <div className="flex-1 p-6 flex flex-col items-center justify-center">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
              <p className="text-gray-600 text-sm mb-6">Get in touch with us to schedule your consultation</p>
              <a
                href="/contact"
                onClick={onClose}
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Go to Contact Page
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t text-center text-gray-500 text-sm">
          ✅ No sales pitch • Free strategy session • Book instantly
        </div>
      </div>
    </div>
  );
}
