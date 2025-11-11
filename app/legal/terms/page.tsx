'use client';

import React from 'react';
import { Scale, FileText, CreditCard, Shield, AlertTriangle, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Unique Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Scale className="w-4 h-4" />
              <span>Legal Terms</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
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
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">1. Agreement to Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using The AI Agency Kit website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access or use our services. These terms apply to all visitors, users, and others who access or use our services.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold">2. Service Description</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The AI Agency Kit provides AI automation solutions and business setup services. Our services include:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">Complete business setup packages with websites, templates, and resources</li>
                <li className="list-disc">AI automation implementation guides and templates</li>
                <li className="list-disc">Lead generation lists and marketing materials</li>
                <li className="list-disc">Training materials, video tutorials, and documentation</li>
                <li className="list-disc">Ongoing support and access to resources</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">3. Payment Terms</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Payment terms and conditions:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">All fees are stated in British Pounds (GBP) and are non-refundable unless otherwise specified</li>
                <li className="list-disc">Payment is required in full before access to services is granted</li>
                <li className="list-disc">We reserve the right to modify our pricing with 30 days' notice</li>
                <li className="list-disc">Late payments may result in suspension of services</li>
                <li className="list-disc">All payments are processed securely through third-party payment processors</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold">4. User Obligations</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                As a user of our services, you agree to:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc">Provide accurate, current, and complete information</li>
                <li className="list-disc">Maintain the security of your account credentials</li>
                <li className="list-disc">Use the services in compliance with all applicable laws and regulations</li>
                <li className="list-disc">Not use the services for any illegal or unauthorized purpose</li>
                <li className="list-disc">Not attempt to gain unauthorized access to our systems</li>
                <li className="list-disc">Not interfere with or disrupt the services or servers</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-3xl font-bold">5. Intellectual Property Rights</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The AI Agency Kit and its original content, features, functionality, templates, and materials are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You are granted a non-exclusive, non-transferable license to use the materials for your business purposes. You may not copy, modify, distribute, sell, or lease any part of our services or included software, nor may you reverse engineer or attempt to extract the source code of that software.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold">6. White-Label Rights</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                All packages include white-label rights, meaning you may rebrand and resell the services and assets as your own. However, you may not resell the kit itself or claim ownership of the original materials. You may customize, modify, and brand all templates and resources for use in your own business.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold">7. Limitation of Liability</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, The AI Agency Kit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services. Our total liability for any claims arising from or related to the services shall not exceed the amount you paid to us in the 12 months preceding the claim.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold">8. Refund Policy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Due to the digital nature of our products and immediate access provided, all sales are final. We do not offer refunds unless required by law. If you are not satisfied with your purchase, please contact us and we will work with you to resolve any issues. We review all prospective clients to ensure you are the right fit for the project, and we never sell to anyone we feel may not be able to manage the business.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-cyan-600" />
                </div>
                <h2 className="text-3xl font-bold">9. Changes to Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">10. Contact Information</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">legal@theaiagencykit.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Available on request</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
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
