'use client';

import React from 'react';
import { ShoppingBag, ArrowRight, MessageSquare, Mail, Users, Brain } from 'lucide-react';

export default function RetailEcommercePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
              <ShoppingBag className="w-7 h-7 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-sky-700">AI Automation for Retail & E-commerce</h1>
          </div>
          <p className="text-lg text-gray-700 mb-8">
            Help retailers and online shops boost sales, improve customer service, and save time with your AI Automation Business Kit. Everything you need to deliver real, practical value—no technical skills required.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What You Can Offer</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <MessageSquare className="w-5 h-5 text-indigo-600 mr-2 mt-1" />
              <span><strong>Website & Chat Automation:</strong> Set up chatbots to answer product questions, handle order enquiries, and guide customers to the right products 24/7.</span>
            </li>
            <li className="flex items-start">
              <Mail className="w-5 h-5 text-indigo-600 mr-2 mt-1" />
              <span><strong>Email Marketing Automation:</strong> Automate abandoned cart reminders, promotional campaigns, and customer follow-ups to increase repeat sales.</span>
            </li>
            <li className="flex items-start">
              <Users className="w-5 h-5 text-indigo-600 mr-2 mt-1" />
              <span><strong>Lead Generation:</strong> Provide targeted leads for local retailers or online shops, helping them grow their customer base.</span>
            </li>
            <li className="flex items-start">
              <Brain className="w-5 h-5 text-indigo-600 mr-2 mt-1" />
              <span><strong>AI Content Creation:</strong> Generate product descriptions, blog posts, and marketing content quickly and professionally.</span>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">How to Sell This Kit</h2>
          <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
            <li>Emphasise increased sales and customer satisfaction from automated follow-ups and 24/7 support.</li>
            <li>Show how chatbots reduce staff workload and improve the online shopping experience.</li>
            <li>Highlight the ability to launch professional marketing campaigns with minimal effort.</li>
            <li>Offer to set up and personalise all automations for the retailer—no tech skills needed for your client.</li>
          </ul>

          <div className="mt-10 text-center">
            <a href="/program" className="inline-block bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Get the Business Kit for Retail & E-commerce
              <ArrowRight className="inline ml-2" />
            </a>
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
                question: "What exactly do I get in the Retail & E-commerce Automation Kit?",
                answer: "You get ready-to-use chatbots, order management automations, customer service tools, marketing templates, and step-by-step guides. Everything is designed so you can quickly set up and offer automation services to retail and e-commerce businesses, even if you have no tech background."
              },
              {
                question: "Do I need any technical skills to use this kit?",
                answer: "No technical skills are required. The kit includes simple instructions, video walkthroughs, and templates. If you can follow basic steps and use a computer, you can launch your automation business."
              },
              {
                question: "How do I get my first clients?",
                answer: "The kit comes with proven sales scripts, outreach templates, and marketing materials tailored for retail and e-commerce. You'll also get strategies for finding and closing your first clients, plus access to a support community."
              },
              {
                question: "What support is available if I get stuck?",
                answer: "You'll have access to detailed documentation, video tutorials, and a private community of other automation kit owners. Plus, you can reach out for help if you need extra guidance."
              },
              {
                question: "How fast can I start making money?",
                answer: "Most buyers land their first paying client within 2-4 weeks of using the kit, thanks to the included sales materials and step-by-step launch plan."
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
    </main>
  );
} 