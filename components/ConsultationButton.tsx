'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';

interface ConsultationButtonProps {
  onOpenModal?: () => void;
}

export default function ConsultationButton({ onOpenModal }: ConsultationButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after 3 seconds of scrolling
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Sticky Consultation Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={onOpenModal}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-4 rounded-full font-semibold shadow-2xl transition-all duration-300 flex items-center gap-3 group"
        >
          <Calendar className="w-5 h-5" />
          <span className="hidden sm:inline">Book 1:1 Strategy Call</span>
          <span className="sm:hidden">Book Call</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                 </button>
       </div>
     </>
   );
}
