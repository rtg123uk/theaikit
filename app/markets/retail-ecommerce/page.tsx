'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Mail, Users, FileText, Clock, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStore, faBoxOpen, faTruck } from '@fortawesome/free-solid-svg-icons';

export default function RetailEcommercePage() {
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
              Launch an AI-Powered Automation Agency for Retail & E-commerce
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our ready-to-sell business kit gives you everything you need — from customer service to inventory management — tailored for the retail and e-commerce sector.
            </p>

            {/* Industry Icons */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                <span>E-commerce</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faStore} className="w-5 h-5" />
                <span>Retail</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faBoxOpen} className="w-5 h-5" />
                <span>Inventory</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faTruck} className="w-5 h-5" />
                <span>Logistics</span>
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
                title: "Customer Service Bot",
                description: "24/7 chatbots for order tracking and support"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Order Management",
                description: "Automated order processing and tracking"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Customer Portal",
                description: "Streamlined shopping and account management"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Product Content",
                description: "AI-generated product descriptions and reviews"
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
                title: "Customer Support",
                description: "Automated order tracking and customer service"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Order Updates",
                description: "Automated shipping notifications and updates"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Customer Engagement",
                description: "AI-powered product recommendations and loyalty"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Product Content",
                description: "Automated product descriptions and marketing"
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
                description: "Reduce customer service tasks by 70% with automated support"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Customer Satisfaction",
                description: "24/7 support and instant order updates"
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
              "Transform your retail business with our AI automation solution. We'll help you enhance customer experience, streamline operations, and focus on what you do best — growing your business."
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
                question: "Can this integrate with existing e-commerce platforms?",
                answer: "Yes, our automation solutions can integrate with most popular e-commerce platforms and shopping carts."
              },
              {
                question: "How customizable are the product descriptions?",
                answer: "All product descriptions and automation scripts are fully customizable to match your brand voice and product catalog."
              },
              {
                question: "How fast can I implement this?",
                answer: "Most retail businesses can launch their automation system within 1-2 weeks of receiving the kit."
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Retail?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey to becoming an AI automation expert in the retail and e-commerce sector.
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