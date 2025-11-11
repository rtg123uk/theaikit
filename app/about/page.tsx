'use client';

import React, { useState } from 'react';
import { ArrowRight, Target, Users, Award, Lightbulb, Globe, Zap, Shield, TrendingUp, Heart, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Unique Hero - Light with Split Layout */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  About The AI Agency Kit
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Empowering Entrepreneurs Through Intelligent Automation
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We provide turnkey automation solutions that enable business owners to launch, scale, and succeed with AI-powered services—no technical expertise required.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                    <span className="font-medium">Ready-to-Deploy Solutions</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                    <span className="font-medium">Comprehensive Support</span>
                  </div>
                </div>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
                      <div className="text-4xl font-bold mb-2">1000+</div>
                      <div className="text-indigo-100">Companies Enabled</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                      <div className="text-4xl font-bold mb-2">95%</div>
                      <div className="text-purple-100">Satisfaction Rate</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                      <div className="text-4xl font-bold mb-2">50+</div>
                      <div className="text-blue-100">Industries Served</div>
                    </div>
                    <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white">
                      <div className="text-4xl font-bold mb-2">24/7</div>
                      <div className="text-pink-100">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Card Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-indigo-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe intelligent automation should be accessible to every business, regardless of size or technical capability. Our mission is to empower entrepreneurs with the tools, knowledge, and support needed to successfully leverage automation technology.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By delivering ready-to-deploy frameworks and comprehensive support, we're helping businesses transform their operations and achieve greater success in today's digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Horizontal Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 transform -translate-y-1/2"></div>
              <div className="grid grid-cols-4 gap-8 relative">
                {[
                  { year: "2021", title: "Foundation", desc: "Started with travel sector automation" },
                  { year: "2022", title: "Breakthrough", desc: "First successful implementation" },
                  { year: "2023", title: "Growth", desc: "Expanded automation packages" },
                  { year: "2024", title: "Innovation", desc: "Broadened solutions portfolio" }
                ].map((milestone, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white border-4 border-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-indigo-600 font-bold">{milestone.year.slice(-2)}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Grid with Icons */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "Continuously advancing our frameworks" },
              { icon: Users, title: "Customer Success", desc: "Focused on your achievements" },
              { icon: Shield, title: "Integrity", desc: "Building trust through transparency" },
              { icon: Globe, title: "Accessibility", desc: "Technology for everyone" },
              { icon: Zap, title: "Efficiency", desc: "Streamlining workflows" },
              { icon: Award, title: "Excellence", desc: "Superior service standards" }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA - Simple and Clean */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Join thousands of entrepreneurs who have successfully launched their automation businesses.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
