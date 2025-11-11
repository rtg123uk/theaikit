'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Mail, Users, FileText, Factory, Cog, CheckCircle2, Clock, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Factory className="w-4 h-4" />
                  <span>Manufacturing Industry</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  AI Automation Solutions for Manufacturing
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Improve production effectiveness and customer assistance in manufacturing operations with intelligent automation.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Production Efficiency</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Customer Support</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl p-6 text-white">
                      <div className="text-3xl font-bold mb-2">Efficient</div>
                      <div className="text-gray-100">Production</div>
                    </div>
                    <div className="bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl p-6 text-white">
                      <div className="text-3xl font-bold mb-2">Quality</div>
                      <div className="text-slate-100">Control</div>
                    </div>
                    <div className="bg-gradient-to-br from-zinc-500 to-zinc-600 rounded-xl p-6 text-white">
                      <div className="text-3xl font-bold mb-2">Fast</div>
                      <div className="text-zinc-100">Response</div>
                    </div>
                    <div className="bg-gradient-to-br from-neutral-500 to-neutral-600 rounded-xl p-6 text-white">
                      <div className="text-3xl font-bold mb-2">Reliable</div>
                      <div className="text-neutral-100">Systems</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What's Included for Manufacturing</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-specific automation solutions designed for manufacturing operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: MessageSquare, title: "Order Inquiry Bot", desc: "24/7 chatbots for order inquiries" },
              { icon: Mail, title: "Order Notifications", desc: "Automated order and production updates" },
              { icon: Users, title: "Customer Management", desc: "Streamlined customer communication" },
              { icon: FileText, title: "Manufacturing Content", desc: "Industry-specific content templates" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
                  <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How Manufacturing Companies Benefit</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: "Time Savings", desc: "Reduce customer service time by 60% with automated systems" },
              { icon: Shield, title: "Quality Control", desc: "Improved tracking and quality management" },
              { icon: Zap, title: "Quick Implementation", desc: "Launch your automation system quickly" },
              { icon: Users, title: "Better Operations", desc: "Streamlined processes improve efficiency" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
              <h2 className="text-3xl font-bold mb-6">Client Pitch Template</h2>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "Transform your manufacturing operations with our AI automation solution. We'll help you improve production effectiveness, enhance customer assistance, and focus on what you do best — manufacturing excellence."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Manufacturing?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your journey to becoming an AI automation expert in the manufacturing sector.
          </p>
          <Link
            href="/program"
            className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
