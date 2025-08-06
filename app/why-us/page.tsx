'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Users, 
  Award, 
  Lightbulb, 
  Globe, 
  Zap, 
  Shield,
  BookOpen,
  Mail,
  MessageSquare,
  Code2,
  BarChart3,
  Rocket,
  Clock,
  Brain,
  Phone
} from 'lucide-react';
import SignupPopup from '../../components/SignupPopup';
import Image from 'next/image';

export default function WhyUsPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupConfig, setPopupConfig] = useState({
    title: '',
    subtitle: '',
    showMonthlyOptions: false
  });

  const openPopup = (title: string, subtitle: string, showMonthlyOptions: boolean = false) => {
    setPopupConfig({ title, subtitle, showMonthlyOptions });
    setIsPopupOpen(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Card-style Header Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/10" />
        
        {/* Main Content */}
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Why Entrepreneurs Chose AI Agency Startup
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our business-in-a-box solution delivers everything you need to launch and scale your AI automation agency — from branding and templates to leads and real results.
            </p>
            
            {/* Overlay Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white font-medium">No Code Required</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white font-medium">Start Earning in Weeks</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white font-medium">Launch Ready Kit</span>
              </div>
            </div>

            {/* Icon Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <MessageSquare className="w-5 h-5" />
                <span>Chatbot</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>Voice Bot</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a 
                href="#whats-included"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                See What's Included
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Your Complete AI Agency Solution</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Ready-to-Go Business",
                description: "Start selling AI services immediately with our complete business setup, including website, marketing materials, and client templates."
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Expert Guidance",
                description: "Access our comprehensive training and support system to help you deliver exceptional AI solutions to your clients."
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Niche Selection",
                description: "We help you identify and target the most profitable niches for AI automation services."
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Lead Generation",
                description: "Get access to our proven lead generation system and email marketing templates to attract potential clients."
              },
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Complete Templates",
                description: "Ready-to-use templates for websites, proposals, contracts, and client communication."
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Ongoing Support",
                description: "24/7 access to our support team and community of AI agency owners."
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                  {React.cloneElement(benefit.icon, { className: "w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" })}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section id="whats-included" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included in Your Package</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Business Setup",
                  items: [
                    "Professional Website",
                    "Marketing Materials",
                    "Client Templates",
                    "Proposal Templates",
                    "Contract Templates"
                  ]
                },
                {
                  title: "Training & Support",
                  items: [
                    "Step-by-Step Guides",
                    "Video Tutorials",
                    "Implementation Support",
                    "Client Onboarding Guide",
                    "Technical Support"
                  ]
                },
                {
                  title: "Marketing Tools",
                  items: [
                    "Email Marketing Templates",
                    "Lead Generation System",
                    "Social Media Templates",
                    "Case Study Templates",
                    "Client Testimonial Guide"
                  ]
                },
                {
                  title: "Client Delivery",
                  items: [
                    "AI Implementation Guide",
                    "Client Communication Templates",
                    "Project Management Tools",
                    "Reporting Templates",
                    "Client Success Metrics"
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Real Results from Our Clients</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                metric: "£5,000+",
                label: "Average Monthly Revenue",
                description: "Our clients typically generate over £5,000 in monthly revenue within their first 3 months."
              },
              {
                metric: "85%",
                label: "Client Retention Rate",
                description: "Our clients maintain an average client retention rate of 85% due to our proven systems."
              },
              {
                metric: "2-3 Weeks",
                label: "Time to First Client",
                description: "Most of our clients secure their first paying client within 2-3 weeks of starting."
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.metric}</div>
                <div className="text-lg font-semibold mb-3">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Business Model Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">More Than Just Templates</h2>
              <p className="text-xl text-gray-600">
                We provide a complete, turnkey business solution that goes far beyond basic templates
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Complete Business Model</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                    <span>Proven business model with real-world success metrics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                    <span>Step-by-step implementation guides</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                    <span>Client acquisition and retention strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                    <span>Pricing and packaging strategies</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Full Branding Support</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                    <span>Complete brand identity development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                    <span>Professional logo and visual assets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                    <span>Brand voice and messaging guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                    <span>Marketing materials and templates</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Implementation Support</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                  <span>One-on-one strategy sessions with our experts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                  <span>Technical implementation guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                  <span>Ongoing support and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 shrink-0 mr-2 mt-0.5" />
                  <span>Access to our community of successful agency owners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI Agency?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful entrepreneurs who have built profitable AI automation agencies with our complete solution.
          </p>
          <button 
            onClick={() => openPopup(
              "Start Your AI Agency Journey",
              "Complete the form below to begin your AI automation business journey. We'll contact you within 24 hours to discuss your package and next steps.",
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