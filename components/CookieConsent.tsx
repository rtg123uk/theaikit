'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-cookie-consent animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-600">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
              <Link href="/legal/cookies" className="text-indigo-600 hover:text-indigo-500 font-medium inline-block mt-1 sm:mt-0">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={acceptCookies}
              className="flex-1 sm:flex-none bg-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1.5 sm:p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close cookie notice"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 