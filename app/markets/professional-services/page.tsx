'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Mail, Users, FileText, Briefcase, Scale, Clock, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFileContract, faComments, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';

export default function ProfessionalServicesPage() {
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
              Launch an AI-Powered Automation Agency for Law Firms, Accountants & Consultants
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our ready-to-sell business kit gives you everything you need — from chat automation to email outreach — tailored for the professional services sector.
            </p>

            {/* Industry Icons */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5" />
                <span>Professional Services</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faFileContract} className="w-5 h-5" />
                <span>Legal</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faComments} className="w-5 h-5" />
                <span>Consulting</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faScaleBalanced} className="w-5 h-5" />
                <span>Accounting</span>
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
                title: "Chatbot Setup",
                description: "Ready-to-deploy chatbots for client intake and FAQ handling"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Automation",
                description: "Automated email sequences for client onboarding and follow-ups"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Lead List",
                description: "Targeted list of potential clients in the professional services sector"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Content Templates",
                description: "AI-generated content templates for blogs and newsletters"
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
                title: "Website Chatbot Automation",
                description: "24/7 client support and intake automation"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Outreach & Nurturing",
                description: "Automated client communication and follow-ups"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Lead Generation System",
                description: "Targeted lead generation for professional services"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "AI-Powered Content",
                description: "Automated blog and newsletter content generation"
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
                description: "Reduce administrative tasks by 70% with automated client intake and communication"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "24/7 Coverage",
                description: "Never miss a potential client inquiry with round-the-clock chatbot support"
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
              "Transform your client intake process with our AI automation solution. We'll help you handle more clients, reduce response times, and focus on what you do best — serving your clients."
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
                question: "What's included in the professional services automation kit?",
                answer: "The kit includes everything you need to start your professional services automation agency: pre-built chatbots, client management systems, document automation tools, marketing templates, and step-by-step guides for implementation and client acquisition."
              },
              {
                question: "Do I need technical experience to use this kit?",
                answer: "No technical experience required. The kit comes with detailed documentation, video tutorials, and support resources to help you implement and customize the solutions for professional service firms."
              },
              {
                question: "How do I find and win professional services clients?",
                answer: "The kit includes proven sales scripts, marketing materials, and client acquisition strategies specifically designed for the professional services sector. You'll also get access to our community of successful automation agency owners for guidance."
              },
              {
                question: "What kind of support do I get?",
                answer: "You'll receive comprehensive support including technical documentation, marketing resources, sales training, and access to our community of automation agency owners. We're here to help you succeed in the professional services automation space."
              },
              {
                question: "How quickly can I start generating revenue?",
                answer: "Many of our agency owners start landing their first professional services clients within 2-4 weeks of receiving the kit. The included sales materials and proven strategies help you hit the ground running."
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Client's Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey to becoming an AI automation expert in the professional services sector.
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