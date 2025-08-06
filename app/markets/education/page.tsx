'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Mail, Users, FileText, Clock, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faSchool, faChalkboardTeacher, faBook } from '@fortawesome/free-solid-svg-icons';

export default function EducationPage() {
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
              Launch an AI-Powered Automation Agency for Educational Institutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Our ready-to-sell business kit gives you everything you need — from student engagement to administrative automation — tailored for the education sector.
            </p>

            {/* Industry Icons */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />
                <span>Universities</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faSchool} className="w-5 h-5" />
                <span>Schools</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="w-5 h-5" />
                <span>Training Centers</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faBook} className="w-5 h-5" />
                <span>Online Learning</span>
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
                title: "Student Support Bot",
                description: "24/7 chatbots for student inquiries and course information"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Communication System",
                description: "Automated student and parent communication tools"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Enrollment System",
                description: "Streamlined student registration and onboarding"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Educational Content",
                description: "AI-generated learning materials and resources"
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
                title: "Student Engagement",
                description: "Automated student support and course assistance"
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Parent Communication",
                description: "Automated updates and progress reports"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Student Recruitment",
                description: "Targeted enrollment and lead generation"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Learning Resources",
                description: "AI-powered educational content creation"
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
                description: "Reduce administrative tasks by 70% with automated student services"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Data Security",
                description: "FERPA-compliant systems for student data protection"
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
              "Transform your educational institution with our AI automation solution. We'll help you enhance student engagement, streamline administrative tasks, and focus on what you do best — providing quality education."
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
                question: "What's included in the education automation kit?",
                answer: "The kit includes everything you need to start your education automation agency: pre-built chatbots, enrollment systems, student management tools, marketing templates, and step-by-step guides for implementation and client acquisition."
              },
              {
                question: "Do I need technical experience to use this kit?",
                answer: "No technical experience required. The kit comes with detailed documentation, video tutorials, and support resources to help you implement and customize the solutions for educational institutions."
              },
              {
                question: "How do I find and win education clients?",
                answer: "The kit includes proven sales scripts, marketing materials, and client acquisition strategies specifically designed for the education sector. You'll also get access to our community of successful automation agency owners for guidance."
              },
              {
                question: "What kind of support do I get?",
                answer: "You'll receive comprehensive support including technical documentation, marketing resources, sales training, and access to our community of automation agency owners. We're here to help you succeed in the education automation space."
              },
              {
                question: "How quickly can I start generating revenue?",
                answer: "Many of our agency owners start landing their first education clients within 2-4 weeks of receiving the kit. The included sales materials and proven strategies help you hit the ground running."
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Education?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey to becoming an AI automation expert in the education sector.
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