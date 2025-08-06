'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Target, Users, Award, Lightbulb, Globe, Zap, Shield, MessageSquare, Phone, FileText, PlayCircle } from 'lucide-react';
import SignupPopup from '../../components/SignupPopup';

export default function AboutPage() {
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
              Empowering Entrepreneurs Through Smarter Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              AI Agency Startup equips you with a done-for-you automation business – including chatbot tools, prebuilt systems, and full support. Built to scale, ready to launch.
            </p>
            
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
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-5 h-5" />
                <span>Leads</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FileText className="w-5 h-5" />
                <span>Sales Scripts</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Globe className="w-5 h-5" />
                <span>Website</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button 
                onClick={() => openPopup(
                  "Discover the System",
                  "Learn more about our AI automation system and how it can transform your business.",
                  true
                )}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                Discover the System
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  We believe that AI automation should be accessible to every business, regardless of size or technical expertise. Our mission is to empower entrepreneurs with the tools, knowledge, and support they need to leverage AI technology effectively.
                </p>
                <p className="text-gray-600 mb-6">
                  By providing ready-to-implement solutions and comprehensive support, we're helping businesses transform their operations and scale their success in the digital age.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Our Vision</h3>
                    <p className="text-gray-600">To be the leading provider of AI automation solutions for businesses worldwide</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "1000+", label: "Businesses Empowered" },
                  { number: "95%", label: "Client Satisfaction" },
                  { number: "50+", label: "Industries Served" },
                  { number: "24/7", label: "Support Available" }
                ].map((stat, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                    <p className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="space-y-12">
              {[
                {
                  year: "2021",
                  title: "The Beginning",
                  description: "We began selling automation to our initial market of travel and uncovered a need for more automation opportunities amongst entreprenuers. The democratisation of AI through the OpenAI API opened up new channels and opportunity."
                },
                {
                  year: "2022",
                  title: "First Success",
                  description: "We delivered our first successful automation to a client in the travel industry. This was a major milestone for us and a testament to the power of automation."
                },
                {
                  year: "2023",
                  title: "Expansion",
                  description: "Launched comprehensive automation kits and expanded our support team"
                },
                {
                  year: "2024",
                  title: "Innovation",
                  description: "Continued to innovate and expand our offerings to meet the evolving needs of our clients."
                }
              ].map((milestone, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-indigo-200">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full" />
                  <div className="mb-2">
                    <span className="text-indigo-600 font-semibold">{milestone.year}</span>
                    <h3 className="text-xl font-bold mt-1">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation",
                description: "Constantly evolving and improving our solutions to stay ahead of the curve"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Client Success",
                description: "Dedicated to ensuring our clients achieve their business goals"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Integrity",
                description: "Building trust through transparent and ethical business practices"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Accessibility",
                description: "Making advanced technology available to businesses of all sizes"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Efficiency",
                description: "Delivering solutions that streamline and optimize business operations"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                description: "Committed to providing the highest quality service and support"
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                  {React.cloneElement(value.icon, { className: "w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" })}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Travel Agency Transformation",
                description: "Helped a travel agency automate their customer service, reducing response time by 80% and increasing customer satisfaction.",
                metric: "80% Faster Response"
              },
              {
                title: "E-commerce Growth",
                description: "Implemented AI-powered product recommendations for an e-commerce store, resulting in a 45% increase in average order value.",
                metric: "45% Higher AOV"
              },
              {
                title: "Real Estate Lead Generation",
                description: "Automated lead qualification for a real estate agency, helping them process 3x more leads with the same team size.",
                metric: "3x More Leads"
              }
            ].map((story, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
                <p className="text-gray-600 mb-4">{story.description}</p>
                <div className="text-indigo-600 font-semibold">{story.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of the AI automation revolution. Start your journey with us today.
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
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
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