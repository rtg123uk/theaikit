'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the WhatsInsideSection
const WhatsInsideSection = dynamic(() => import('./WhatsInsideSection'), {
  loading: () => (
    <div className="mt-20 animate-pulse">
      <div className="h-8 w-48 bg-white/20 rounded mx-auto mb-8"></div>
      <div className="grid md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white/10 rounded-lg p-6">
            <div className="w-12 h-12 bg-white/20 rounded-lg mb-4"></div>
            <div className="h-6 w-32 bg-white/20 rounded mb-2"></div>
            <div className="h-4 w-full bg-white/20 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  ),
  ssr: false
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse">
            <div className="h-12 w-3/4 bg-white/20 rounded mb-4"></div>
            <div className="h-6 w-1/2 bg-white/20 rounded mb-8"></div>
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-6 w-1/3 bg-white/20 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    }>
      {children}
    </Suspense>
  );
} 