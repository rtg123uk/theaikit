'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log metrics to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }

    // Send metrics to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // You can send metrics to your analytics service here
      // Example: sendToAnalytics(metric);
    }
  });

  return null;
} 