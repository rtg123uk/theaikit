'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ConsultationButton() {
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
        <Link
          href="/contact"
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-4 rounded-full font-semibold shadow-2xl transition-all duration-300 flex items-center gap-3 group"
        >
          <span className="hidden sm:inline">Get In Touch</span>
          <span className="sm:hidden">Contact</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </Link>
       </div>
     </>
   );
}
