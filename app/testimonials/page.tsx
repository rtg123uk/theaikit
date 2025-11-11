'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Star, Quote, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
  {
    quote: `"I bought The AI Agency Kit to launch my own agency and went after the Motor Deals market. The resources made it easy to set up a professional site, automate lead capture, and pitch to dealerships. Within a month, I signed my first two clients and now have a steady pipeline. The kit gave me everything I needed to look credible and deliver real value to car dealers."`,
    name: "Alex Murphy",
    agency: "Ignite Automations",
    role: "Founder",
    avatar: "/avatar-motor.png",
    initials: "AM",
    niche: "Motor Deals",
    details: `Why this niche: Car dealers are hungry for leads and automation.\nHow the kit helped: Ready-made website, AI chat, and sales scripts.\nResult: 2 clients in the first month, ongoing pipeline, and confidence to scale.`
  },
  {
    quote: `"As a new agency owner, I used the kit to break into the Specialist Finance Broker market. The done-for-you templates and automations let me offer a full solution from day one. My first outreach campaign landed a broker who now refers me to others. The support and credibility from the kit made all the difference."`,
    name: "Sophie Lee",
    agency: "FinEdge Automation",
    role: "Director",
    avatar: "/avatar-finance.png",
    initials: "SL",
    niche: "Specialist Finance Broker",
    details: `Why this niche: Finance brokers need fast, compliant client onboarding.\nHow the kit helped: Automated email, chat, and onboarding flows.\nResult: First client from initial outreach, now growing via referrals.`
  },
  {
    quote: `"I wanted to start an automation business but had no idea where to begin. The kit's Industrial Cleaning playbook gave me a step-by-step plan. I landed my first contract with a cleaning company after just two weeks using the cold email templates and demo scripts. The kit made me look like an expert from day one."`,
    name: "Ben Carter",
    agency: "CleanFlow Solutions",
    role: "Owner",
    avatar: "/avatar-cleaning.png",
    initials: "BC",
    niche: "Industrial Cleaning",
    details: `Why this niche: Cleaning companies are eager for new business and efficiency.\nHow the kit helped: Niche-specific outreach, demo scripts, and automation templates.\nResult: First contract in 2 weeks, strong case study for future sales.`
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Unique Hero - Quote Style */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Quote className="w-4 h-4" />
              <span>Success Stories</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Real Results from Real Entrepreneurs
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover how others launched their automation businesses in days and started signing clients fast.
            </p>
            <div className="flex justify-center gap-2 mb-12">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid - Large Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((t, idx) => (
              <Card key={idx} className="border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-indigo-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-16 w-16 border-2 border-indigo-200">
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback className="bg-indigo-100 text-indigo-600">{t.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-lg">{t.name}</p>
                      <p className="text-sm text-gray-600">{t.role}, {t.agency}</p>
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-700 rounded-full">
                        {t.niche}
                      </span>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  <div className="bg-indigo-50 rounded-lg p-5 space-y-3">
                    {t.details.split('\n').map((detail, detailIdx) => {
                      const [label, ...rest] = detail.split(':');
                      return (
                        <div key={detailIdx}>
                          <span className="font-bold text-indigo-700">{label}:</span>
                          <span className="text-indigo-900 ml-2">{rest.join(':')}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-4">2-4</div>
              <div className="text-xl text-indigo-100">Weeks to First Client</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">£5K+</div>
              <div className="text-xl text-indigo-100">Average Monthly Revenue</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-4">85%</div>
              <div className="text-xl text-indigo-100">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join these entrepreneurs and start building your AI automation business today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
