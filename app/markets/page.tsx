'use client';

import React from 'react';
import { ArrowRight, Building2, ShoppingBag, Briefcase, Stethoscope, GraduationCap, Utensils, Truck, Factory, Home, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function MarketsPage() {
  const industries = [
    {
      icon: Building2,
      title: "Professional Services",
      description: "Revolutionize customer interaction and optimize workflows for legal practices, accounting firms, and advisory organizations.",
      benefits: [
        "Website and conversational automation for customer inquiries",
        "Automated email sequences",
        "Prospect generation for new customers",
        "Intelligent content creation for blogs and communications"
      ],
      link: "/markets/professional-services",
      color: "blue"
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      description: "Improve customer engagement and increase revenue through smart automation frameworks.",
      benefits: [
        "Conversational interfaces for product inquiries and order assistance",
        "Automated email campaigns and shopping cart notifications",
        "Prospect generation for new clients",
        "Intelligent content for product details and blogs"
      ],
      link: "/markets/retail-e-commerce",
      color: "purple"
    },
    {
      icon: Briefcase,
      title: "Financial Services",
      description: "Optimize financial processes and enhance customer support in banking and insurance sectors.",
      benefits: [
        "Secure conversational systems for FAQs and scheduling",
        "Automated setup and regulatory email sequences",
        "Prospect generation for financial customers",
        "Intelligent content for communications and guides"
      ],
      link: "/markets/financial-services",
      color: "green"
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Patient registration, scheduling coordination, and medical information automation",
      benefits: [
        "Conversational systems for patient inquiries and reservations",
        "Automated scheduling notifications",
        "Prospect generation for medical facilities",
        "Intelligent content for health blogs and updates"
      ],
      link: "/markets/healthcare",
      color: "red"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Improve learning outcomes and administrative productivity in educational organizations.",
      benefits: [
        "Conversational interfaces for course information and registration",
        "Automated class and event notifications",
        "Prospect generation for educational providers",
        "Intelligent content for communications and blogs"
      ],
      link: "/markets/education",
      color: "indigo"
    },
    {
      icon: Utensils,
      title: "Hospitality",
      description: "Enhance guest satisfaction and optimize operations in hotels and dining establishments.",
      benefits: [
        "Conversational systems for reservations and guest services",
        "Automated email marketing and promotional offers",
        "Prospect generation for local enterprises",
        "Intelligent content for promotions and blogs"
      ],
      link: "/markets/hospitality",
      color: "orange"
    },
    {
      icon: Truck,
      title: "Logistics & Transport",
      description: "Streamline processes and enhance customer support in transportation and delivery services.",
      benefits: [
        "Conversational interfaces for delivery inquiries and tracking",
        "Automated delivery notifications and feedback collection",
        "Prospect generation for logistics companies",
        "Intelligent content for service communications and blogs"
      ],
      link: "/markets/logistics-transport",
      color: "teal"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Improve production effectiveness and customer assistance in manufacturing operations.",
      benefits: [
        "Conversational systems for order inquiries and support",
        "Automated order and production notifications",
        "Prospect generation for manufacturing firms",
        "Intelligent content for product communications and blogs"
      ],
      link: "/markets/manufacturing",
      color: "gray"
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Optimize property administration and strengthen customer connections.",
      benefits: [
        "Conversational interfaces for property inquiries and viewing arrangements",
        "Automated property notifications and reminders",
        "Prospect generation for real estate professionals",
        "Intelligent content for property details and blogs"
      ],
      link: "/markets/real-estate",
      color: "amber"
    },
    {
      icon: Heart,
      title: "Veterinary",
      description: "Pet care automation, scheduling coordination, and veterinary information systems",
      benefits: [
        "Conversational systems for pet care inquiries",
        "Automated scheduling notifications",
        "Prospect generation for veterinary facilities",
        "Intelligent content for pet health and care blogs"
      ],
      link: "/markets/veterinary",
      color: "pink"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    green: "bg-green-100 text-green-700 border-green-200",
    red: "bg-red-100 text-red-700 border-red-200",
    indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    teal: "bg-teal-100 text-teal-700 border-teal-200",
    gray: "bg-gray-100 text-gray-700 border-gray-200",
    amber: "bg-amber-100 text-amber-700 border-amber-200",
    pink: "bg-pink-100 text-pink-700 border-pink-200"
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Unique Hero - Minimal with Large Title */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-200 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Industry-Specific Solutions</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Automation Solutions for Every Industry
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Deploy sector-specific frameworks tailored to your target market. Each industry solution is designed for maximum impact.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="bg-white border-2 border-indigo-200 rounded-lg px-4 py-2 text-gray-700 font-medium">Healthcare</span>
              <span className="bg-white border-2 border-purple-200 rounded-lg px-4 py-2 text-gray-700 font-medium">Finance</span>
              <span className="bg-white border-2 border-blue-200 rounded-lg px-4 py-2 text-gray-700 font-medium">Retail</span>
              <span className="bg-white border-2 border-green-200 rounded-lg px-4 py-2 text-gray-700 font-medium">Education</span>
              <span className="bg-white border-2 border-orange-200 rounded-lg px-4 py-2 text-gray-700 font-medium">Real Estate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-indigo-100">Industries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-indigo-100">Templates</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-indigo-100">Leads Per Industry</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-indigo-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid - Card Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Industry</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each industry solution includes specialized templates, lead lists, and automation frameworks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const colorClass = colorClasses[industry.color as keyof typeof colorClasses];
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border-2 border-gray-100 p-8 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 ${colorClass} rounded-xl flex items-center justify-center mb-6 border-2`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">{industry.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                  <ul className="space-y-3 mb-6">
                    {industry.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm text-gray-700">
                        <ArrowRight className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={industry.link}
                    className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Why Industry-Specific Solutions Matter</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Tailored Solutions</h3>
                <p className="text-gray-600">Each industry has unique needs. Our solutions are specifically designed for your sector.</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Templates</h3>
                <p className="text-gray-600">Ready-to-use templates that have been tested and optimized for your industry.</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Faster Results</h3>
                <p className="text-gray-600">Industry-specific solutions mean faster implementation and quicker ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Learn how our industry-specific automation frameworks can help you reach your business objectives.
          </p>
          <Link 
            href="/program"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
