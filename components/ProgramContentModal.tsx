import React from 'react';
import { X, CheckCircle2, MessageSquare, Phone, Mail, Globe, Users, Brain } from 'lucide-react';

interface ProgramContentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProgramContentModal({ isOpen, onClose }: ProgramContentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          {/* Kit Contents Grid */}
          <div className="mb-12">
            <div className="text-center mb-10">
              <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Included in Every Kit
              </span>
              <h2 className="text-3xl font-bold mb-4">What's Inside Your AI Agency Kit</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A complete toolkit to launch, sell, and deliver AI automation services—no tech skills required.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
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

          {/* Key Features Section */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Complete Business Solution</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageSquare className="w-8 h-8" />,
                  title: "Website & Chat Automation",
                  description: "Ready-to-implement website chat solutions and automation templates",
                  features: ["Customizable chat widgets", "Lead capture forms", "Automated responses"]
                },
                {
                  icon: <Phone className="w-8 h-8" />,
                  title: "Voice & WhatsApp Solutions",
                  description: "Complete voice and messaging automation systems",
                  features: ["WhatsApp automation", "Voice response systems", "24/7 availability"]
                },
                {
                  icon: <Mail className="w-8 h-8" />,
                  title: "Cold Email Marketing",
                  description: "Proven email marketing templates and automation guides",
                  features: ["Email sequences", "Templates", "Best practices guide"]
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Professional Website",
                  description: "SEO-optimized landing pages and content",
                  features: ["Custom landing pages", "Blog content", "SEO optimization"]
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Lead Generation",
                  description: "Initial leads and ongoing lead generation options",
                  features: ["500-1000 initial leads", "Monthly lead packages", "Targeted lists"]
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Master Kit & Support",
                  description: "Complete business guide and ongoing support",
                  features: ["Full written master kit", "Strategy calls", "Ongoing support"]
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
          </div>
        </div>
      </div>
    </div>
  );
}