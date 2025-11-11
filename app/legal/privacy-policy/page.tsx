'use client';

import React from 'react';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Unique Hero - Simple Header */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              <span>Privacy & Data Protection</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold">1. Information We Collect</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We collect information that you provide directly to us when you use our services, including:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">Name and contact information (email address, phone number)</li>
                <li className="list-disc">Business information (company name, website URL, industry)</li>
                <li className="list-disc">Payment information (processed securely through third-party providers)</li>
                <li className="list-disc">Communication preferences and correspondence</li>
                <li className="list-disc">Usage data and website interaction information</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold">2. How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">Provide, maintain, and improve our services</li>
                <li className="list-disc">Process transactions and manage your account</li>
                <li className="list-disc">Send you technical notices, updates, and support messages</li>
                <li className="list-disc">Respond to your comments, questions, and requests</li>
                <li className="list-disc">Communicate with you about products, services, and events</li>
                <li className="list-disc">Monitor and analyze trends, usage, and activities</li>
                <li className="list-disc">Detect, prevent, and address technical issues</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">3. Information Sharing and Disclosure</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">Service providers who assist in our operations (payment processors, email services, analytics providers)</li>
                <li className="list-disc">Professional advisers (lawyers, accountants, consultants)</li>
                <li className="list-disc">Business partners with your consent</li>
                <li className="list-disc">Law enforcement or government authorities when required by law or to protect our rights</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">4. Data Security</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-3xl font-bold">5. Your Rights</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Under applicable data protection laws, you have the right to:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">Access your personal information</li>
                <li className="list-disc">Correct inaccurate or incomplete information</li>
                <li className="list-disc">Request deletion of your personal information</li>
                <li className="list-disc">Object to processing of your personal information</li>
                <li className="list-disc">Request restriction of processing</li>
                <li className="list-disc">Data portability (receive your data in a structured format)</li>
                <li className="list-disc">Withdraw consent at any time</li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold">6. Cookies and Tracking Technologies</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website. For more information, please see our Cookie Policy.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold">7. Data Retention</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold">8. Changes to This Privacy Policy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold">9. Contact Us</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">privacy@theaiagencykit.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">Available on request</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <span className="text-gray-700">Manchester, United Kingdom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
