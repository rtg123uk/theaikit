'use client';

import React, { useState } from 'react';
import { ArrowRight, ClipboardList, MessageCircle, Cog, Rocket, CheckCircle2, HelpCircle, UserCheck, ShieldCheck, Timer } from 'lucide-react';
import Link from 'next/link';
import SignupPopup from '@/components/SignupPopup';

export default function LandingPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* SECTION 1: Hero (Above the Fold) */}
      <section className="relative flex flex-col items-center justify-center py-20 md:py-32 bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-800">
        <div className="absolute inset-0 opacity-10" style={{background: 'url(/ai-pattern.svg) center/cover'}} />
        <div className="relative z-10 flex flex-col items-center text-center space-y-4 md:space-y-6 px-4">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-2">Perfect for Non-Technical Founders</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg max-w-4xl">
            Start Your Own AI Automation Agency – Without the Guesswork
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 drop-shadow-lg max-w-2xl leading-relaxed">
            Get everything you need to launch, sell, and scale your own AI service business — including a website, templates, and leads.<br />
            <b>No coding, no AI knowledge — setup is done for you.</b><br />
            <b>We personally set up your kit for you so you're ready to go from day one.</b>
          </p>
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full font-bold shadow-2xl transition-all mt-4"
          >
            Reserve Your Startup Kit
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 inline-block" />
          </button>
          <p className="text-sm md:text-base text-gray-300 drop-shadow mt-2">Limited kits available. We'll reach out to set up your personalised agency platform after purchase.</p>
        </div>
      </section>

      {/* SECTION 2: How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">🛠️ How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <ClipboardList className="mx-auto text-indigo-600 w-12 h-12 mb-4" />
              <h3 className="font-bold mb-2">Order your kit</h3>
              <p className="text-gray-600">Reserve your license today</p>
            </div>
            <div>
              <MessageCircle className="mx-auto text-indigo-600 w-12 h-12 mb-4" />
              <h3 className="font-bold mb-2">We contact you</h3>
              <p className="text-gray-600">We'll gather your preferences</p>
            </div>
            <div>
              <Cog className="mx-auto text-green-600 w-12 h-12 mb-4" />
              <h3 className="font-bold mb-2">Full setup included</h3>
              <p className="text-gray-600">We build your site, preload templates, and upload your lead list</p>
            </div>
            <div>
              <Rocket className="mx-auto text-purple-600 w-12 h-12 mb-4" />
              <h3 className="font-bold mb-2">Go live</h3>
              <p className="text-gray-600">You'll be up and running in days, with support on hand</p>
            </div>
          </div>
          <p className="text-center text-indigo-700 font-semibold mt-8">
            💡 You don't need any technical skills — <span className="text-green-600 font-bold">we do all the setup for you</span>.
          </p>
        </div>
      </section>

      {/* SECTION 2.5: What You'll Do vs What We Do Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Built for Busy Founders – Here's Who Does What.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 shadow flex flex-col items-center border">
              <h3 className="text-xl font-bold mb-4 flex items-center"><UserCheck className="w-6 h-6 text-green-500 mr-2" /> What You Do</h3>
              <ul className="space-y-4 w-full">
                <li className="flex items-center text-lg"><CheckCircle2 className="text-green-500 mr-2" /> Choose a niche</li>
                <li className="flex items-center text-lg"><CheckCircle2 className="text-green-500 mr-2" /> Personalise outreach</li>
                <li className="flex items-center text-lg"><CheckCircle2 className="text-green-500 mr-2" /> Start booking demos</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 shadow flex flex-col items-center border">
              <h3 className="text-xl font-bold mb-4 flex items-center"><Cog className="w-6 h-6 text-indigo-500 mr-2" /> What We Handle</h3>
              <ul className="space-y-4 w-full">
                <li className="flex items-center text-lg"><CheckCircle2 className="text-green-500 mr-2" /> Preload leads & templates</li>
                <li className="flex items-center text-lg"><CheckCircle2 className="text-green-500 mr-2" /> Build the website & setup tools</li>
                <li className="flex items-center text-lg"><CheckCircle2 className="text-green-500 mr-2" /> Provide full setup & support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: What's Inside the Kit */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">⚙️ Everything You Need. Done For You.</h2>
          <div className="flex justify-center mb-4">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-semibold">No software installation. All web-based & ready-to-go.</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition group">
              <CheckCircle2 className="text-green-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-2 text-center flex items-center justify-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" />Business Website</h3>
            </div>
            <div className="bg-white border rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition group">
              <CheckCircle2 className="text-green-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-2 text-center flex items-center justify-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" />2,000 Niche Leads</h3>
            </div>
            <div className="bg-white border rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition group">
              <CheckCircle2 className="text-green-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-2 text-center flex items-center justify-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" />AI Chatbots & Voice Bot Templates</h3>
            </div>
            <div className="bg-white border rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition group">
              <CheckCircle2 className="text-green-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-2 text-center flex items-center justify-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" />Cold Email Sequences</h3>
            </div>
            <div className="bg-white border rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition group">
              <CheckCircle2 className="text-green-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-2 text-center flex items-center justify-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" />Sales Scripts</h3>
            </div>
            <div className="bg-white border rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition group">
              <CheckCircle2 className="text-green-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-2 text-center flex items-center justify-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" />Automation Blueprints</h3>
            </div>
            <div className="bg-white border rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition group">
              <CheckCircle2 className="text-green-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-2 text-center flex items-center justify-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" />Onboarding & Setup Support</h3>
            </div>
            <div className="bg-white border rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition group">
              <CheckCircle2 className="text-green-500 w-8 h-8 mb-2" />
              <h3 className="font-semibold mb-2 text-center flex items-center justify-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" />White-Label Ready</h3>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600 max-w-2xl mx-auto">
            You're not just buying tools — you're getting a complete business system.
            Each component is built to help you get your first clients fast, without needing tech skills.
          </p>
        </div>
      </section>

      {/* SECTION 4: Who It's For */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:flex items-center">
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img src="/ai-illustration.svg" alt="AI Audience" className="w-64 h-64" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">🚀 Designed for First-Time Founders, Freelancers & Side Hustlers</h2>
            <ul className="space-y-6">
              <li className="flex items-center text-xl"><CheckCircle2 className="text-green-500 mr-3" /> <span className="text-green-700">No coding or AI knowledge needed</span></li>
              <li className="flex items-center text-xl"><CheckCircle2 className="text-green-500 mr-3" /> <span className="text-green-700">Start signing clients within days</span></li>
              <li className="flex items-center text-xl"><CheckCircle2 className="text-green-500 mr-3" /> <span className="text-green-700">Resell automation services to almost any local business</span></li>
              <li className="flex items-center text-xl"><CheckCircle2 className="text-green-500 mr-3" /> <span className="text-green-700">Ideal for solo operators or small teams</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5: Real Use Cases */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">🔧 What You Can Build With This Kit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center bg-gray-50 border rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition">
              <span className="text-4xl mr-4">🏥</span>
              <div>
                <h3 className="font-semibold text-lg">Dentist Lead System</h3>
              </div>
            </div>
            <div className="flex items-center bg-gray-50 border rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition">
              <span className="text-4xl mr-4">🍕</span>
              <div>
                <h3 className="font-semibold text-lg">Restaurant Booking Bot</h3>
              </div>
            </div>
            <div className="flex items-center bg-gray-50 border rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition">
              <span className="text-4xl mr-4">🧘</span>
              <div>
                <h3 className="font-semibold text-lg">Gym Follow-Up Automation</h3>
              </div>
            </div>
            <div className="flex items-center bg-gray-50 border rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition">
              <span className="text-4xl mr-4">📚</span>
              <div>
                <h3 className="font-semibold text-lg">Coach Appointment Scheduler</h3>
              </div>
            </div>
            <div className="flex items-center bg-gray-50 border rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition">
              <span className="text-4xl mr-4">📞</span>
              <div>
                <h3 className="font-semibold text-lg">Voice Bot for Estate Agents</h3>
              </div>
            </div>
            <div className="flex items-center bg-gray-50 border rounded-xl p-4 shadow hover:scale-105 hover:shadow-lg transition">
              <span className="text-4xl mr-4">🛠️</span>
              <div>
                <h3 className="font-semibold text-lg">Handyman Quote Automation</h3>
              </div>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-600 max-w-2xl mx-auto">
            Use the ready-made templates or customise for the niche you want to serve. We'll show you how.
          </p>
        </div>
      </section>

      {/* SECTION 6: Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 font-semibold text-indigo-700">Trusted by solo founders across the UK</div>
          <h2 className="text-3xl font-bold text-center mb-6">💬 What Other Buyers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="relative bg-white border rounded-2xl p-6 shadow">
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold">AM</div>
              <p className="text-gray-700 mt-8">"I bought the AI Agency Startup kit to launch my own agency and went after the Motor Deals market. The resources made it easy to set up a professional site, automate lead capture, and pitch to dealerships. Within a month, I signed my first two clients and now have a steady pipeline."</p>
              <div className="mt-4 text-sm text-gray-500">Alex Murphy, Founder, Ignite Automations</div>
            </div>
            <div className="relative bg-white border rounded-2xl p-6 shadow">
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold">SL</div>
              <p className="text-gray-700 mt-8">"As a new agency owner, I used the kit to break into the Specialist Finance Broker market. The done-for-you templates and automations let me offer a full solution from day one. My first outreach campaign landed a broker who now refers me to others."</p>
              <div className="mt-4 text-sm text-gray-500">Sophie Lee, Director, FinEdge Automation</div>
            </div>
            <div className="relative bg-white border rounded-2xl p-6 shadow">
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold">BC</div>
              <p className="text-gray-700 mt-8">"I wanted to start an automation business but had no idea where to begin. The kit's Industrial Cleaning playbook gave me a step-by-step plan. I landed my first contract with a cleaning company after just two weeks using the cold email templates and demo scripts."</p>
              <div className="mt-4 text-sm text-gray-500">Ben Carter, Owner, CleanFlow Solutions</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6.7: Interactive Quiz/Product Matcher */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">🧠 Not sure if this is right for you?</h2>
          <p className="mb-6 text-lg text-gray-700 max-w-xl mx-auto">Take our quick 30-second quiz to see if the AI Agency Startup Kit is a fit for your goals and experience. Get a personalized recommendation instantly!</p>
          <MiniQuiz />
        </div>
      </section>

      {/* SECTION 7: Offer Summary + Bonuses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="md:flex gap-8 bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 border shadow-lg max-w-5xl mx-auto">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">💼 What You Get for £795</h2>
              <p className="mb-4 text-gray-700 max-w-2xl">
                You're not buying a download.<br />
                You're getting a <b>fully set-up, ready-to-trade business platform tailored to you</b> — with all the tools, templates, and lead data included.<br /><br />
                <b>We handle the setup. You focus on launching and selling.</b>
              </p>
              <ul className="space-y-4">
                <li className="flex items-center"><CheckCircle2 className="text-green-500 mr-2" /> AI Agency Website (£300 value)</li>
                <li className="flex items-center"><CheckCircle2 className="text-green-500 mr-2" /> 2,000 Leads by Niche (£150 value)</li>
                <li className="flex items-center"><CheckCircle2 className="text-green-500 mr-2" /> Ready-to-use Chat & Voice Templates (£250 value)</li>
                <li className="flex items-center"><CheckCircle2 className="text-green-500 mr-2" /> Cold Outreach Sequences & Sales Tools (£200 value)</li>
                <li className="flex items-center"><CheckCircle2 className="text-green-500 mr-2" /> White-Label Rights + Ongoing Support (Priceless)</li>
              </ul>
              <p className="mt-8 text-gray-600 max-w-2xl">
                Bonus: 📚 Free Mini-Course: How to Close Your First AI Client in 14 Days
              </p>
            </div>
            <div className="md:w-80 md:sticky md:top-24 bg-white border rounded-xl p-6 shadow-lg flex flex-col items-center mt-8 md:mt-0">
              <div className="text-3xl font-bold mb-2">£795</div>
              <p className="text-gray-600 mb-4">One-time cost, lifetime access</p>
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all w-full"
              >
                Reserve Your Startup Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7.5: Mini Bonus Section */}
      <section className="py-8 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white border rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-xl font-bold mb-4 text-green-700 flex items-center justify-center gap-2">🎁 Bonus for May Sign-Ups Only</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center justify-center gap-2"><CheckCircle2 className="text-green-500" /> 30-Min Kickstart Zoom Call</li>
              <li className="flex items-center justify-center gap-2"><CheckCircle2 className="text-green-500" /> Email Template Pack for Cold Outreach</li>
              <li className="flex items-center justify-center gap-2"><CheckCircle2 className="text-green-500" /> Free AI Persona Generator Access</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Still Got Questions?</h2>
          <div className="max-w-3xl mx-auto">
            {/* FAQ Accordion */}
            {[{
              icon: <HelpCircle className="w-6 h-6 text-indigo-500 mr-3" />, q: 'Do I need any tech experience?', a: 'No, the kit is built for non-technical founders. Full guides included. Setup is done-for-you.'
            }, {
              icon: <UserCheck className="w-6 h-6 text-green-500 mr-3" />, q: 'What if I don\'t know who to sell to?', a: 'You get 2,000 leads + a step-by-step outreach plan for 10 industries.'
            }, {
              icon: <ShieldCheck className="w-6 h-6 text-purple-500 mr-3" />, q: 'Can I brand this as my own business?', a: 'Yes — you can white-label everything and operate under your own name.'
            }, {
              icon: <ClipboardList className="w-6 h-6 text-indigo-500 mr-3" />, q: 'What support do I get?', a: 'You get onboarding help, guides, and ongoing support via email.'
            }, {
              icon: <Timer className="w-6 h-6 text-green-500 mr-3" />, q: 'How long does setup take?', a: 'Most agencies are live within 3–5 business days after we receive your preferences.'
            }].map((faq, idx) => (
              <FAQItem key={idx} idx={idx} icon={faq.icon} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: Final CTA */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        {/* Diagonal/curved top border using SVG */}
        <div className="absolute top-0 left-0 w-full" style={{lineHeight: 0}}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M0,60 C480,0 960,120 1440,60 L1440,0 L0,0 Z" fillOpacity="0.15" /></svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-4 text-lg font-semibold text-green-200">Over 300 kits sold — yours could be next.</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to Launch Your Own AI Business?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-green-600 text-white hover:bg-green-700 text-xl px-12 py-6 rounded-full font-bold shadow-2xl transition-all mb-2 md:mb-0"
            >
              Reserve My AI Agency Kit
            </button>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-base font-medium text-white shadow">
              <span className="inline-block w-8 h-8 rounded-full bg-indigo-200 text-indigo-700 font-bold flex items-center justify-center">NW</span>
              <span className="italic">"I launched my agency in a week!"</span>
            </div>
          </div>
          <p className="text-sm text-white/90 mt-6">
            Limited Starter Kits available. This offer may close when quota is reached.
          </p>
        </div>
      </section>

      {/* Add SignupPopup at the end of the main component */}
      <SignupPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title="Launch Your AI Agency"
        subtitle="Complete the form below to begin your AI automation business journey. We'll contact you within 24 hours to discuss your package and next steps."
      />
    </main>
  );
}

// FAQItem component
function FAQItem({ idx, icon, question, answer }: { idx: number; icon: React.ReactNode; question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      className={`mb-4 rounded-xl border transition-all ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${open ? 'shadow-lg' : ''}`}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-lg focus:outline-none"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span className="flex items-center">{icon}{question}</span>
        <ArrowRight className={`w-5 h-5 ml-2 transition-transform ${open ? 'rotate-90 text-green-600' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-700 animate-fade-in text-base">
          {answer}
        </div>
      )}
    </div>
  );
}

// MiniQuiz component
function MiniQuiz() {
  const questions = [
    {
      q: 'Are you technical?',
      options: ['Not at all', 'A little', 'Very']
    },
    {
      q: 'What niche do you want to work in?',
      options: ['Real estate', 'Restaurants', 'Coaches', 'Other']
    },
    {
      q: 'Do you want voice, chat, or both?',
      options: ['Voice', 'Chat', 'Both']
    },
    {
      q: "What's your goal in the next 30 days?",
      options: ['Get my first client', 'Build a side income', 'Replace my job']
    }
  ];
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<string[]>([]);
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState('');

  function handleOption(option: string) {
    setAnswers(prev => [...prev.slice(0, step), option]);
    setStep((prevStep) => prevStep + 1);
  }

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError(data.error || 'There was a problem subscribing. Please try again.');
      }
    } catch {
      setError('There was a problem subscribing. Please try again.');
    }
  }

  if (step >= questions.length) {
    return (
      <div className="bg-white rounded-xl p-8 shadow max-w-md mx-auto">
        <div className="text-2xl font-bold text-green-600 mb-2">Yes, this is a fit for you!</div>
        <p className="mb-4 text-gray-700">Enter your email to get your personalized kit guide and next steps.</p>
        {submitted ? (
          <div className="text-green-700 font-semibold">Thank you! We'll send your guide soon.</div>
        ) : (
          <form onSubmit={handleEmailSubmit} className="flex flex-col items-center gap-4">
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-4 py-2 rounded border w-full max-w-xs"
            />
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded font-semibold">Get My Guide</button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow max-w-md mx-auto">
      <div className="text-lg font-semibold mb-4">{questions[step].q}</div>
      <div className="flex flex-col gap-3">
        {questions[step].options.map(option => (
          <button
            key={option}
            onClick={() => handleOption(option)}
            className="bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 px-6 py-3 rounded-lg font-medium transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
} 