'use client';

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, ArrowRight, CheckCircle2, Zap, Mail, Globe, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ClientLayout from './ClientLayout'
import WhatsInsideSection from './WhatsInsideSection'

export default function HeroSection() {
  return (
    <ClientLayout>
      <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/10" />
        
        {/* Main Content */}
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Build Your AI Business Empire in Under a Week
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Complete AI Agency Solution. Fully Prepared. Start Immediately.
              </p>
              
              {/* Key Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-gray-200">Pre-built templates and qualified prospects</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-gray-200">Operational within 7 days</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-gray-200">Zero technical knowledge needed</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-lg px-8 py-6 rounded-full" asChild>
                <Link href="/program" className="flex items-center gap-2">
                  Explore Complete Package
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              {/* Trust Badges */}
              <div className="mt-8 flex items-center gap-6">
                <div className="text-sm text-gray-400">Works with:</div>
                <div className="flex gap-10">
                  <Image 
                    src="/logos/botpress.svg" 
                    alt="Botpress" 
                    width={70} 
                    height={70}
                    priority
                    loading="eager"
                  />
                  <Image 
                    src="/logos/openai.svg" 
                    alt="OpenAI" 
                    width={70} 
                    height={70}
                    priority
                    loading="eager"
                  />
                  <Image 
                    src="/logos/make.svg" 
                    alt="Make.com" 
                    width={70} 
                    height={70}
                    priority
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Dashboard Mockup */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 bg-white max-w-md mx-auto">
                <Image
                  src="/dashboard-mockup.png"
                  alt="AI Agency Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                  loading="eager"
                  quality={90}
                />
              </div>
            </div>
          </div>
          {/* WhatsInsideSection full width below hero grid */}
          <div className="mt-20">
            <WhatsInsideSection />
          </div>
        </div>
      </section>
    </ClientLayout>
  );
} 