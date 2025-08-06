'use client'

import { ReactNode } from 'react'
import CookieConsent from '@/components/CookieConsent'

interface LandingLayoutProps {
  children: ReactNode
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <CookieConsent />
    </div>
  )
} 