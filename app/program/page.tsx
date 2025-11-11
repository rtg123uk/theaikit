'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Rocket, Sparkles, Gift, Zap, Users, Globe, Mail, MessageSquare, Phone, Brain, Award } from 'lucide-react';
import SignupPopup from '../../components/SignupPopup';
import Link from 'next/link';

export default function ProgramPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupConfig, setPopupConfig] = useState({
    title: '',
    subtitle: '',
    showMonthlyOptions: false,
    selectedPackage: 'essential'
  });
  const [showDiscount, setShowDiscount] = useState(true);

  useEffect(() => {
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
      value: 'essential',
      features: [
        '500 Initial Leads',
        '1-Page Website',
        'Complete Sales Kit',
        'Basic Support',
        'Email Marketing Guide',
        'Chat & Voice Templates',
        'Lifetime Access'
      ],
      popular: false
    },
    {
      title: 'Professional',
      price: '£1,195',
      discountedPrice: '£995',
      oldPrice: '£1,495',
      value: 'professional',
      features: [
        '1,000 Initial Leads',
        '5-Page Website (SEO Optimized)',
        '4 Blog Posts',
        'Complete Sales Kit',
        'Email Marketing Guide',
        'Chat & Voice Templates',
        'Priority Support',
        'Lifetime Access & Updates'
      ],
      popular: true
    },
    {
      title: 'Agency',
      price: '£1,395',
      discountedPrice: '£1,195',
      oldPrice: '£1,395',
      value: 'agency',
      features: [
        'Everything in Professional',
        '1-to-1 Strategy Call',
        'Dedicated Support',
        'Custom Implementation Guide',
        'Advanced Templates',
        'Priority Lead Generation',
        'Lifetime Access & Updates'
      ],
      popular: false
    }
  ];

  const kitItems = [
    { icon: MessageSquare, title: 'AI Chatbot Templates', desc: 'Ready-to-use chatbot flows' },
    { icon: Mail, title: 'Cold Email Campaigns', desc: 'Proven email sequences' },
    { icon: Globe, title: 'SEO-Optimized Website', desc: 'Professional, editable website' },
    { icon: Users, title: '1,000 Leads', desc: 'Leads for your chosen niche' },
    { icon: Brain, title: 'Full Setup Guide', desc: 'Step-by-step instructions' },
    { icon: Phone, title: 'Voice & WhatsApp', desc: 'Complete automation systems' }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Unique Hero - Large Centered with Badge */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Complete Business Solution</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Choose Your AI Agency Kit
            </h1>
            <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Everything you need to start selling AI-powered automation solutions. Select the package that fits your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
                <div className="text-2xl font-bold">500-1000</div>
                <div className="text-sm text-white/80">Initial Leads</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
                <div className="text-2xl font-bold">1-5</div>
                <div className="text-sm text-white/80">Website Pages</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/30">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Icon Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What's Inside Every Kit</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A complete toolkit to launch, sell, and deliver AI automation services
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {kitItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100">
                  <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages - Side by Side Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Select Your Package</h2>
            <p className="text-xl text-gray-600">All packages include lifetime access and white-label rights</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                  pkg.popular
                    ? 'border-indigo-600 bg-gradient-to-br from-indigo-50 to-purple-50 scale-105 shadow-2xl'
                    : 'border-gray-200 bg-white hover:border-indigo-300 shadow-lg hover:shadow-xl'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
                  <div className="mb-4">
                    {showDiscount ? (
                      <>
                        <div className="text-4xl font-bold text-indigo-600">{pkg.discountedPrice}</div>
                        <div className="text-lg text-gray-500 line-through">{pkg.oldPrice}</div>
                      </>
                    ) : (
                      <div className="text-4xl font-bold text-indigo-600">{pkg.price}</div>
                    )}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openPopup(
                    `Get Started with ${pkg.title}`,
                    'Complete the form below to get started with your chosen package.',
                    true,
                    pkg.value
                  )}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg'
                      : 'bg-gray-100 hover:bg-indigo-600 hover:text-white text-gray-900'
                  }`}
                >
                  Choose {pkg.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Package Comparison</h2>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Essential</th>
                    <th className="py-4 px-6 text-center bg-indigo-700">Professional</th>
                    <th className="py-4 px-6 text-center">Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Initial Leads', values: ['500', '1,000', '1,000+'] },
                    { label: 'Website Pages', values: ['1', '5', '5+'] },
                    { label: 'Blog Posts', values: ['-', '4', '4+'] },
                    { label: 'Sales Kit', values: ['✓', '✓', '✓'] },
                    { label: 'Email Marketing Guide', values: ['✓', '✓', '✓'] },
                    { label: 'Chat & Voice Templates', values: ['✓', '✓', '✓'] },
                    { label: 'Support', values: ['Basic', 'Priority', 'Dedicated'] },
                    { label: 'Strategy Call', values: ['-', '-', '1-to-1'] },
                    { label: 'Lifetime Access', values: ['✓', '✓', '✓'] }
                  ].map((row, rowIdx) => (
                    <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 font-semibold">{row.label}</td>
                      {row.values.map((val, colIdx) => (
                        <td key={colIdx} className={`py-4 px-6 text-center ${colIdx === 1 ? 'bg-indigo-50' : ''}`}>
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
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
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your AI Agency?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of entrepreneurs who have successfully launched their automation businesses.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

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
