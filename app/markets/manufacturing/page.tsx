'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Mail, Users, FileText, Clock, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faCogs, faBoxes, faTools } from '@fortawesome/free-solid-svg-icons';

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/10" />
        
        {/* Main Content */}
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Launch an AI-Powered Automation Agency for Manufacturing
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our ready-to-sell business kit gives you everything you need — from production monitoring to inventory management — tailored for the manufacturing sector.
            </p>

            {/* Industry Icons */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faIndustry} className="w-5 h-5" />
                <span>Industrial</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faCogs} className="w-5 h-5" />
                <span>Assembly</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faBoxes} className="w-5 h-5" />
                <span>Production</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faTools} className="w-5 h-5" />
                <span>Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What's Inside the Kit for This Industry</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Production Bot",
                description: "24/7 chatbots for production status and inventory queries"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Alert System",
                description: "Automated production alerts and maintenance notifications"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Inventory Management",
                description: "Streamlined stock tracking and reorder automation"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Quality Control",
                description: "Automated quality assurance and compliance reporting"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(item.icon, { className: "w-8 h-8 text-indigo-600" })}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Offer Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What You Can Offer</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Production Monitoring",
                description: "Real-time production tracking and status updates"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Maintenance Alerts",
                description: "Automated equipment maintenance notifications"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Inventory Control",
                description: "AI-powered inventory optimization and forecasting"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Quality Reports",
                description: "Automated quality control and compliance documentation"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    {React.cloneElement(item.icon, { className: "w-6 h-6 text-indigo-600" })}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Sell Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Position This Kit to Win Clients</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Time Savings",
                description: "Reduce operational tasks by 70% with automated production monitoring"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Assurance",
                description: "Built-in quality control and compliance features"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Quick Implementation",
                description: "Launch your automation system in days, not months"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.cloneElement(item.icon, { className: "w-8 h-8 text-indigo-600" })}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
            </div>
            ))}
          </div>

          {/* Pitch Template */}
          <div className="mt-12 max-w-3xl mx-auto bg-indigo-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Client Pitch Template</h3>
            <p className="text-gray-700 italic">
              "Transform your manufacturing operations with our AI automation solution. We'll help you enhance production efficiency, streamline inventory management, and focus on what you do best — creating quality products."
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What's included in the manufacturing automation kit?",
                answer: "The kit includes everything you need to start your manufacturing automation agency: pre-built chatbots, production monitoring systems, inventory management tools, marketing templates, and step-by-step guides for implementation and client acquisition."
              },
              {
                question: "Do I need technical experience to use this kit?",
                answer: "No technical experience required. The kit comes with detailed documentation, video tutorials, and support resources to help you implement and customize the solutions for manufacturing companies."
              },
              {
                question: "How do I find and win manufacturing clients?",
                answer: "The kit includes proven sales scripts, marketing materials, and client acquisition strategies specifically designed for the manufacturing sector. You'll also get access to our community of successful automation agency owners for guidance."
              },
              {
                question: "What kind of support do I get?",
                answer: "You'll receive comprehensive support including technical documentation, marketing resources, sales training, and access to our community of automation agency owners. We're here to help you succeed in the manufacturing automation space."
              },
              {
                question: "How quickly can I start generating revenue?",
                answer: "Many of our agency owners start landing their first manufacturing clients within 2-4 weeks of receiving the kit. The included sales materials and proven strategies help you hit the ground running."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Manufacturing?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey to becoming an AI automation expert in the manufacturing sector.
          </p>
          <Link 
            href="/program"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg group"
          >
            <span className="flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
} 