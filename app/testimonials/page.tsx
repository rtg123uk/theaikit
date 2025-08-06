'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Star, Quote, Car, Building2, Sparkles, Clock, Briefcase, TrendingUp, Rocket } from 'lucide-react';
import SignupPopup from '@/components/SignupPopup';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const testimonials = [
  {
    quote: `"I bought the AI Agency Startup kit to launch my own agency and went after the Motor Deals market. The resources made it easy to set up a professional site, automate lead capture, and pitch to dealerships. Within a month, I signed my first two clients and now have a steady pipeline. The kit gave me everything I needed to look credible and deliver real value to car dealers."`,
    name: "Alex Murphy",
    agency: "Founder, Ignite Automations",
    avatar: "/avatar-motor.png",
    initials: "AM",
    niche: "Targeted: Motor Deals",
    details: `Why this niche: Car dealers are hungry for leads and automation.\nHow the kit helped: Ready-made website, AI chat, and sales scripts.\nResult: 2 clients in the first month, ongoing pipeline, and confidence to scale.`
  },
  {
    quote: `"As a new agency owner, I used the kit to break into the Specialist Finance Broker market. The done-for-you templates and automations let me offer a full solution from day one. My first outreach campaign landed a broker who now refers me to others. The support and credibility from the kit made all the difference."`,
    name: "Sophie Lee",
    agency: "Director, FinEdge Automation",
    avatar: "/avatar-finance.png",
    initials: "SL",
    niche: "Targeted: Specialist Finance Broker",
    details: `Why this niche: Finance brokers need fast, compliant client onboarding.\nHow the kit helped: Automated email, chat, and onboarding flows.\nResult: First client from initial outreach, now growing via referrals.`
  },
  {
    quote: `"I wanted to start an automation business but had no idea where to begin. The kit's Industrial Cleaning playbook gave me a step-by-step plan. I landed my first contract with a cleaning company after just two weeks using the cold email templates and demo scripts. The kit made me look like an expert from day one."`,
    name: "Ben Carter",
    agency: "Owner, CleanFlow Solutions",
    avatar: "/avatar-cleaning.png",
    initials: "BC",
    niche: "Targeted: Industrial Cleaning",
    details: `Why this niche: Cleaning companies are eager for new business and efficiency.\nHow the kit helped: Niche-specific outreach, demo scripts, and automation templates.\nResult: First contract in 2 weeks, strong case study for future sales.`
  }
];

export default function TestimonialsPage() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [popupConfig, setPopupConfig] = React.useState({
    title: '',
    subtitle: '',
    showMonthlyOptions: false
  });
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const openPopup = (title: string, subtitle: string, showMonthlyOptions: boolean) => {
    setPopupConfig({ title, subtitle, showMonthlyOptions });
    setIsPopupOpen(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#151C2B] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 text-yellow-400 fill-current" />
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Real Stories from Real Entrepreneurs Using the AI Agency Kit
          </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover how others launched their automation businesses in days — and started signing clients fast using our done-for-you kits.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => openPopup(
                  "Start Your AI Automation Journey",
                  "Complete the form below to begin your AI automation business journey. We'll contact you within 24 hours to discuss your needs and next steps.",
                  true
                )}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                <span className="flex items-center">
                  Get Started Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Results Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Success Stories at a Glance
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how our entrepreneurs are transforming their businesses with AI automation
              </p>
            </div>

            {/* Results Summary Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-indigo-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Car className="w-6 h-6 text-indigo-600" />
                  <h3 className="font-semibold text-lg">Motor Deals</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-indigo-600" />
                    <span>2 clients + pipeline</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <span>1 month to first client</span>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-6 h-6 text-purple-600" />
                  <h3 className="font-semibold text-lg">Specialist Finance</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    <span>Referral + outbound success</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span>2 weeks to first client</span>
                  </div>
                </div>
              </div>
              <div className="bg-sky-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-6 h-6 text-sky-600" />
                  <h3 className="font-semibold text-lg">Industrial Cleaning</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-sky-600" />
                    <span>Signed client + case study</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-600" />
                    <span>2 weeks to first client</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Story Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-indigo-200">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-indigo-100 group-hover:border-indigo-200 transition-colors">
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback>{t.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-lg text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-600">{t.niche.replace('Targeted: ', '')}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-2">
                    {t.details.split('Result:')[1].trim()}
                  </p>
                  <button 
                    onClick={() => {
                      const element = document.getElementById(`testimonial-${idx}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    View Full Story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stacked Vertical Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 flex flex-col gap-12 max-w-4xl">
          {testimonials.map((t, idx) => (
            <Card key={idx} id={`testimonial-${idx}`} className="shadow-xl border-0 bg-white/90 backdrop-blur-lg rounded-2xl flex flex-col w-full hover:scale-[1.01] transition-transform">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-14 w-14 border-2 border-indigo-200">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold leading-snug text-lg">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.agency}</p>
                    <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold bg-indigo-50 text-indigo-700 rounded-full">{t.niche}</span>
                  </div>
                </div>
                <blockquote className="text-base italic text-gray-700 flex-grow mb-4">
                  {t.quote}
                </blockquote>
                <div className="bg-indigo-50 rounded-lg p-5 text-sm text-indigo-900 font-medium space-y-2 mt-2">
                  <div>
                    <span className="font-bold text-indigo-700 flex items-center gap-2 mb-1">Why this niche:</span>
                    <span className="block ml-4">{t.details.split('How the kit helped:')[0].replace('Why this niche:', '').trim()}</span>
                  </div>
                  <div>
                    <span className="font-bold text-indigo-700 flex items-center gap-2 mb-1">How the kit helped:</span>
                    <span className="block ml-4">{t.details.split('How the kit helped:')[1].split('Result:')[0].trim()}</span>
                  </div>
                  <div>
                    <span className="font-bold text-indigo-700 flex items-center gap-2 mb-1">Result:</span>
                    <span className="block ml-4">{t.details.split('Result:')[1].trim()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Share Your Story Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Share Your Success Story</h2>
              <p className="text-lg text-gray-600">
                We'll feature selected stories with your logo and link — great exposure!
              </p>
            </div>
            {formSubmitted ? (
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <h3 className="text-2xl font-bold mb-2 text-green-600">Thank you for your story!</h3>
                <p className="text-lg text-gray-700">We appreciate your submission and will be in touch if your story is selected.</p>
              </div>
            ) : (
            <form 
              className="space-y-6 bg-white rounded-2xl p-8 shadow-lg"
              action="https://formsubmit.co/richard@looknorth.digital"
              method="POST"
              onSubmit={() => setFormSubmitted(true)}
            >
              <input type="hidden" name="_captcha" value="false" />
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <Label htmlFor="business">Business or Brand Name</Label>
                  <Input id="business" name="business" placeholder="Your business name" required />
                </div>
                <div>
                  <Label htmlFor="niche">What Niche Did You Target?</Label>
                  <Input id="niche" name="niche" placeholder="e.g., Real Estate, Healthcare, etc." required />
                </div>
                <div>
                  <Label htmlFor="story">Your Success Story</Label>
                  <Textarea 
                    id="story" 
                    name="story"
                    placeholder="Share 2-3 lines about your results..."
                    className="h-24"
                    required
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="video" name="video" />
                  <Label htmlFor="video" className="text-sm text-gray-600">
                    I'd be open to a 1-minute video testimonial
                  </Label>
                </div>
              </div>
              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Submit My Story
              </button>
            </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI Agency?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful entrepreneurs who have built profitable AI automation agencies with our complete solution.
          </p>
          <button 
            onClick={() => openPopup(
              "Start Your AI Automation Journey",
              "Complete the form below to begin your AI automation business journey. We'll contact you within 24 hours to discuss your needs and next steps.",
              true
            )}
            className="group bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg"
          >
            <span className="flex items-center">
              Get Your Complete Package
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <p className="mt-4 text-sm text-white/80">
            Limited spots available. Apply now to secure your place.
          </p>
        </div>
      </section>

      {/* Signup Popup */}
      <SignupPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={popupConfig.title}
        subtitle={popupConfig.subtitle}
        showMonthlyOptions={popupConfig.showMonthlyOptions}
      />
    </main>
  );
} 