'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Mail, Users, FileText, Heart, CheckCircle2, Clock, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

export default function VeterinaryPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative py-24 bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Heart className="w-4 h-4" />
                  <span>Veterinary Industry</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  AI Automation Solutions for Veterinary Clinics
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Pet care automation, scheduling coordination, and veterinary information systems designed to help veterinary practices serve more pets efficiently.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-pink-600" />
                    <span className="font-medium">Pet-Focused</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-pink-600" />
                    <span className="font-medium">Efficient Scheduling</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="text-pink-100">Pet Care Support</div>
                    </div>
                    <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl p-6 text-white">
                      <div className="text-3xl font-bold mb-2">Easy</div>
                      <div className="text-rose-100">Scheduling</div>
                    </div>
                    <div className="bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 rounded-xl p-6 text-white">
                      <div className="text-3xl font-bold mb-2">Fast</div>
                      <div className="text-fuchsia-100">Appointments</div>
                    </div>
                    <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
                      <div className="text-3xl font-bold mb-2">Happy</div>
                      <div className="text-red-100">Pet Owners</div>
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
            <h2 className="text-4xl font-bold mb-4">What's Included for Veterinary</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-specific automation solutions designed for veterinary practices
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: MessageSquare, title: "Pet Care Bot", desc: "24/7 chatbots for pet care inquiries" },
              { icon: Mail, title: "Appointment Automation", desc: "Automated scheduling notifications" },
              { icon: Users, title: "Pet Owner Management", desc: "Streamlined pet owner communication" },
              { icon: FileText, title: "Veterinary Content", desc: "Pet health-specific content templates" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100">
                  <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-pink-600" />
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
          <h2 className="text-4xl font-bold text-center mb-16">How Veterinary Practices Benefit</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Clock, title: "Time Savings", desc: "Reduce scheduling time by 65% with automated systems" },
              { icon: Shield, title: "Pet Owner Satisfaction", desc: "24/7 support improves pet owner experience" },
              { icon: Zap, title: "Quick Implementation", desc: "Launch your automation system quickly" },
              { icon: Users, title: "Better Care", desc: "More time to focus on pet care" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-pink-600" />
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

      <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
              <h2 className="text-3xl font-bold mb-6">Client Pitch Template</h2>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "Transform your veterinary practice with our AI automation solution. We'll help you handle more pets, reduce wait times, and focus on what you do best — providing quality pet care."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Veterinary Care?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your journey to becoming an AI automation expert in the veterinary sector.
          </p>
          <Link
            href="/program"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
