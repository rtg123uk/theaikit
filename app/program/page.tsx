'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Zap, Users, Brain, Clock, Award, ChevronDown, Sparkles, ArrowUpRight, Rocket, Target, BarChart3, Lightbulb, Code2, Bot, MessageSquare, Mail, Globe, Phone } from 'lucide-react';
import SignupPopup from '../../components/SignupPopup';
import Image from 'next/image';

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

export default function ProgramPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupConfig, setPopupConfig] = useState({
    title: '',
    subtitle: '',
    showMonthlyOptions: false,
    selectedPackage: 'essential'
  });
  const [showDiscount, setShowDiscount] = useState(true);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // Set end date to 7 days from now (same as CountdownHeader)
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    const now = new Date().getTime();
    const distance = endDate.getTime() - now;
    setShowDiscount(distance > 0);
  }, []);

  const openPopup = (title: string, subtitle: string, showMonthlyOptions: boolean = false, selectedPackage: string = 'essential') => {
    setPopupConfig({ title, subtitle, showMonthlyOptions, selectedPackage });
    setIsPopupOpen(true);
  };

  const packages = [
    {
      title: 'Essential',
      price: '£795',
      discountedPrice: '£595',
      oldPrice: '£795',
      features: [
        '500 Initial Leads',
        '1-Page Website',
        'Complete Sales Kit',
        'Basic Support',
        'Email Marketing Guide',
        'Chat & Voice Templates',
      ],
      popular: false
    },
    {
      title: 'Professional',
      price: '£1,195',
      discountedPrice: '£995',
      oldPrice: '£1,495',
      features: [
        '1,000 Initial Leads',
        '5-Page Website (SEO Optimized)',
        '4 Blog Posts',
        'Complete Sales Kit',
        'Email Marketing Guide',
        'Chat & Voice Templates',
        'Priority Support'
      ],
      popular: true
    },
    {
      title: 'Agency',
      price: '£1,395',
      discountedPrice: '£1,195',
      oldPrice: '£1,395',
      features: [
        'Everything in Professional',
        '1-to-1 Strategy Call',
        'Dedicated Support',
        'Custom Implementation Guide',
        'Advanced Templates',
        'Priority Lead Generation'
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I resell this kit?',
      answer: 'Yes! Every kit comes with white-label rights, so you can resell the services and assets as your own.'
    },
    {
      question: 'Is the website editable?',
      answer: 'Absolutely. You get full access to edit, brand, and customize your website to fit your business and niche.'
    },
    {
      question: 'Can I upgrade later?',
      answer: "Yes, you can upgrade your package or support plan at any time. Just contact us and we'll help you make the switch."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section - Dark Gradient */}
      <section className="relative min-h-[70vh] bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="relative container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="text-white max-w-xl mx-auto lg:mx-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Start Your Own AI Automation Business — Kits That Deliver Clients & Cash Flow
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Everything you need to start selling AI-powered automation solutions — including templates, website, lead packs, and expert support.
            </p>
            <button 
              onClick={() => {
                const el = document.getElementById('kit-contents');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-indigo-500 hover:bg-indigo-600 text-lg px-8 py-6 rounded-full font-semibold flex items-center gap-2 shadow-lg transition-all mb-8"
            >
              See What's Inside the Kit
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          {/* Right: Kit Heading Image */}
          <div className="relative flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-md h-auto flex justify-center items-center p-6">
              <Image src="/ourkit-heading.png" alt="Our Kit Heading" width={420} height={260} className="object-contain rounded-xl shadow-2xl border-2 border-white/10 w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Kit Contents Grid */}
      <section id="kit-contents" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Included in Every Kit</span>
            <h2 className="text-3xl font-bold mb-4">What's Inside Your AI Agency Kit</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A complete toolkit to launch, sell, and deliver AI automation services—no tech skills required.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-3xl mb-3">🤖</span>
              <h3 className="font-semibold mb-2">AI Chatbot Templates</h3>
              <p className="text-gray-600 text-center text-sm">Ready-to-use chatbot flows for lead capture, support, and sales.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-3xl mb-3">📧</span>
              <h3 className="font-semibold mb-2">Cold Email Campaign Flows</h3>
              <p className="text-gray-600 text-center text-sm">Proven email sequences to book meetings and close deals.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-3xl mb-3">📄</span>
              <h3 className="font-semibold mb-2">Sales Scripts & Proposals</h3>
              <p className="text-gray-600 text-center text-sm">High-converting scripts and proposal templates for every stage.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-3xl mb-3">🌐</span>
              <h3 className="font-semibold mb-2">SEO-Optimised Website</h3>
              <p className="text-gray-600 text-center text-sm">A professional, editable website built to convert leads.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-3xl mb-3">📥</span>
              <h3 className="font-semibold mb-2">1,000 Leads</h3>
              <p className="text-gray-600 text-center text-sm">Leads for your chosen niche, ready to contact.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-lg transition">
              <span className="text-3xl mb-3">🧰</span>
              <h3 className="font-semibold mb-2">Full Setup Guide & Training</h3>
              <p className="text-gray-600 text-center text-sm">Step-by-step instructions and video training for fast launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Comparison Table - moved and styled for contrast */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Compare Packages</h2>
          <div className="overflow-x-auto">
            <table className="min-w-[700px] w-full border-collapse text-center">
              <thead>
                <tr>
                  <th className="py-4 px-2 bg-gray-50 border-b-2 border-indigo-100"></th>
                  <th className="py-4 px-2 bg-indigo-50 border-b-2 border-indigo-100 text-indigo-700 text-xl font-bold">Essential</th>
                  <th className="py-4 px-2 bg-indigo-50 border-b-2 border-indigo-100 text-indigo-700 text-xl font-bold">Professional</th>
                  <th className="py-4 px-2 bg-indigo-50 border-b-2 border-indigo-100 text-indigo-700 text-xl font-bold">Agency</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Initial Leads', values: ['500', '1,000', '1,000+'] },
                  { label: 'Website Pages', values: ['1', '5', '5+'] },
                  { label: 'Blog Posts', values: ['-', '4', '4+'] },
                  { label: 'Sales Kit', values: ['✔', '✔', '✔'] },
                  { label: 'Email Marketing Guide', values: ['✔', '✔', '✔'] },
                  { label: 'Chat, Voice and Automation Templates', values: ['✔', '✔', '✔'] },
                  { label: 'Support', values: ['Basic', 'Priority', 'Dedicated'] },
                  { label: 'Strategy Call', values: ['-', '-', '1-to-1'] },
                  { label: 'Custom Implementation', values: ['-', '-', '✔'] },
                  { label: 'Advanced Templates', values: ['-', '-', '✔'] },
                  { label: 'Priority Lead Generation', values: ['-', '-', '✔'] },
                  { label: 'Lifetime Access', values: ['✔', '✔', '✔'] },
                ].map((row, rowIdx) => (
                  <tr key={rowIdx} className="hover:bg-indigo-50 transition group">
                    <td className="py-3 px-2 font-semibold text-gray-700 text-left bg-white border-b border-gray-100">{row.label}</td>
                    {row.values.map((val, colIdx) => (
                      <td
                        key={colIdx}
                        className="py-3 px-2 border-b border-gray-100 group-hover:bg-indigo-100 transition"
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Complete Business Solution</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Website & Chat Automation",
                description: "Ready-to-implement website chat solutions and automation templates",
                features: ["Customizable chat widgets", "Lead capture forms", "Automated responses"],
                more: "Preview our chatbot flows and see how easy it is to capture and qualify leads automatically."
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Voice & WhatsApp Solutions",
                description: "Complete voice and messaging automation systems",
                features: ["WhatsApp automation", "Voice response systems", "24/7 availability"],
                more: "See a demo of our WhatsApp and voice automations in action, including real-world use cases."
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Cold Email Marketing",
                description: "Proven email marketing templates and automation guides",
                features: ["Email sequences", "Templates", "Best practices guide"],
                more: "Get a preview of our highest-converting cold email templates and campaign flows."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Professional Website",
                description: "SEO-optimized landing pages and content",
                features: ["Custom landing pages", "Blog content", "SEO optimization"],
                more: "See sample landing pages and blog content included in your kit."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Lead Generation",
                description: "Initial leads and ongoing lead generation options",
                features: ["500-1000 initial leads", "Monthly lead packages", "Targeted lists"],
                more: "Preview a sample leads file and see how we source and qualify your leads."
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Master Kit & Support",
                description: "Complete business guide and ongoing support",
                features: ["Full written master kit", "Strategy calls", "Ongoing support"],
                more: "See a walkthrough of our master kit and support resources."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-indigo-600 transition-colors">
                    {React.cloneElement(feature.icon, { className: "w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" })}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => openPopup(
                'Begin Now',
                'See everything included in the Professional Kit and get started today.',
                true
              )}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all"
            >
              Begin Now
            </button>
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Package</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative group border ${
                  plan.popular ? 'border-indigo-600' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="flex flex-col items-center mb-6">
                  <span className="text-4xl font-bold mb-1">
                    {showDiscount ? plan.discountedPrice : plan.price}
                  </span>
                  {showDiscount && plan.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">{plan.oldPrice}</span>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center group-hover:translate-x-2 transition-transform">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => {
                    const packageTitle = plan.title.toLowerCase();
                    console.log('Selected Package Title:', packageTitle);
                    openPopup(
                      `Get Started with ${plan.title} Package`,
                      "Complete the form below to begin your AI automation business journey. We'll contact you within 24 hours to discuss your package and next steps.",
                      true,
                      packageTitle
                    );
                  }}
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors group-hover:shadow-lg"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-indigo-50 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center relative">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Monthly Support Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Monthly Support & Lead Generation</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Standard Support",
                price: "£49",
                leads: "500",
                features: [
                  "Monthly Lead Generation",
                  "Email Support",
                  "Template Updates",
                  "Basic Strategy Support"
                ],
                note: "Perfect for early-stage founders starting their first automation business."
              },
              {
                title: "Premium Support",
                price: "£79",
                leads: "1,000",
                features: [
                  "Monthly Lead Generation",
                  "Priority Support",
                  "Template Updates",
                  "Strategy Calls",
                  "Implementation Support"
                ],
                note: "Ideal if you're serious about scaling fast with expert help."
              }
            ].map((option, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                <p className="text-4xl font-bold text-indigo-600 mb-2">{option.price}<span className="text-lg text-gray-600">/month</span></p>
                <p className="text-gray-600 mb-6">{option.leads} leads per month</p>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-4 text-indigo-700 text-sm font-medium">{option.note}</div>
                <button 
                  onClick={() => openPopup(
                    `Add ${option.title} to Your Package`,
                    "Complete the form below to add monthly support to your package. We'll help you get started with your lead generation and support services.",
                    true
                  )}
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Add to Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg bg-white">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg text-gray-900 focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  {faq.question}
                  <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div id={`faq-answer-${idx}`} className="px-6 pb-4 text-gray-700 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6">Start Your AI Automation Business Today</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get everything you need to start selling AI automation solutions to businesses. Complete kit, leads, and support included.
          </p>
        </div>
      </section>

      {/* Floating CTA Button */}
      <button
        onClick={() => openPopup(
          'Get Started',
          "Complete the form below to begin your AI automation business journey. We'll contact you within 24 hours to discuss your needs and next steps.",
          true
        )}
        className="hidden md:flex fixed z-50 bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-full text-lg font-semibold shadow-xl transition-all items-center gap-2"
        style={{ boxShadow: '0 8px 32px rgba(80, 72, 229, 0.25)' }}
      >
        Get Started
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>

      {/* Signup Popup */}
      <SignupPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={popupConfig.title}
        subtitle={popupConfig.subtitle}
        showMonthlyOptions={popupConfig.showMonthlyOptions}
        selectedPackage={popupConfig.selectedPackage}
      />
    </main>
  );
}

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  const t = testimonials[current];
  return (
    <>
      <span className="text-4xl mb-4 text-indigo-600">"</span>
      <blockquote className="text-xl font-semibold text-indigo-900 mb-4 min-h-[80px]">{t.quote}</blockquote>
      <div className="text-indigo-700 font-bold mb-1">{t.name}</div>
      <div className="text-indigo-500 text-sm mb-2">{t.agency}</div>
      <span className="inline-block mt-1 px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-700 rounded-full mb-4">{t.niche}</span>
      <div className="flex items-center justify-center gap-2 mb-4">
        <button onClick={prev} aria-label="Previous" className="p-2 rounded-full bg-white border border-indigo-200 hover:bg-indigo-100 transition"><ArrowRight className="rotate-180 w-5 h-5 text-indigo-600" /></button>
        <button onClick={next} aria-label="Next" className="p-2 rounded-full bg-white border border-indigo-200 hover:bg-indigo-100 transition"><ArrowRight className="w-5 h-5 text-indigo-600" /></button>
      </div>
      <div className="flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <span key={idx} className={`w-2 h-2 rounded-full ${idx === current ? 'bg-indigo-600' : 'bg-indigo-200'}`}></span>
        ))}
      </div>
    </>
  );
} 