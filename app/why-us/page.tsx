'use client';

import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Rocket, 
  Brain, 
  Globe, 
  Mail, 
  Code2, 
  MessageSquare,
  Target,
  Shield,
  Zap,
  Users
} from 'lucide-react';
import Link from 'next/link';

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Unique Hero - Centered with Badges */}
      <section className="relative py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Rocket className="w-4 h-4" />
              <span>Why Choose Us</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Everything You Need to Succeed
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              A complete enterprise solution that provides all essential components to establish and expand your automation business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-indigo-50 border-2 border-indigo-200 rounded-xl px-6 py-3">
                <span className="text-indigo-700 font-semibold">No Code Required</span>
              </div>
              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl px-6 py-3">
                <span className="text-purple-700 font-semibold">Start Earning in Weeks</span>
              </div>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl px-6 py-3">
                <span className="text-blue-700 font-semibold">Launch Ready Kit</span>
              </div>
            </div>
            <Link 
              href="#benefits"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Discover What's Included
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits - Large Cards with Icons */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Your Complete Automation Framework</h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Everything you need to launch, market, and deliver AI automation services
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Rocket,
                  title: "Immediate Business Launch",
                  description: "Begin offering automation services instantly with our full enterprise configuration, featuring website, promotional resources, and customer templates.",
                  color: "indigo"
                },
                {
                  icon: Brain,
                  title: "Expert Guidance",
                  description: "Utilize our extensive educational and assistance framework to help you provide outstanding automation solutions to your customers.",
                  color: "purple"
                },
                {
                  icon: Globe,
                  title: "Market Identification",
                  description: "We assist you in pinpointing and focusing on the most lucrative markets for automation services.",
                  color: "blue"
                },
                {
                  icon: Mail,
                  title: "Lead Acquisition",
                  description: "Gain access to our validated prospect generation system and email marketing formats to engage potential customers.",
                  color: "pink"
                },
                {
                  icon: Code2,
                  title: "Complete Templates",
                  description: "Immediately usable formats for websites, proposals, agreements, and customer correspondence.",
                  color: "green"
                },
                {
                  icon: MessageSquare,
                  title: "Ongoing Support",
                  description: "Round-the-clock access to our assistance team and network of automation business operators.",
                  color: "orange"
                }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                const colorClasses = {
                  indigo: "bg-indigo-100 text-indigo-600",
                  purple: "bg-purple-100 text-purple-600",
                  blue: "bg-blue-100 text-blue-600",
                  pink: "bg-pink-100 text-pink-600",
                  green: "bg-green-100 text-green-600",
                  orange: "bg-orange-100 text-orange-600"
                };
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className={`w-16 h-16 ${colorClasses[benefit.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - List Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">What's Included in Your Framework</h2>
            <div className="grid md:grid-cols-2 gap-12">
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
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-indigo-600 shrink-0 mr-3 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results - Stats Cards */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Real Results from Our Customers</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                metric: "£5,000+",
                label: "Average Monthly Revenue",
                description: "Our customers typically generate over £5,000 in monthly revenue within their first 3 months."
              },
              {
                metric: "85%",
                label: "Client Retention Rate",
                description: "Our customers maintain an average client retention rate of 85% thanks to our proven frameworks."
              },
              {
                metric: "2-3 Weeks",
                label: "Time to First Client",
                description: "Most of our customers secure their first paying client within 2-3 weeks of starting."
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"
              >
                <div className="text-5xl font-bold mb-4">{stat.metric}</div>
                <div className="text-xl font-semibold mb-4">{stat.label}</div>
                <p className="text-white/90">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Launch Your Automation Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful business owners who have created profitable automation businesses using our complete framework.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Complete Framework
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
