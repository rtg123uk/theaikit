'use client';

import React from 'react';
import { Cookie, Settings, BarChart3, Target, Eye, Mail, Phone, MapPin, ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Unique Hero */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Cookie className="w-4 h-4" />
              <span>Cookie & Tracking Policy</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold"
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
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold">1. What Are Cookies</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies allow a website to recognize your device and store some information about your preferences or past actions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold">2. How We Use Cookies</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We use cookies for the following purposes:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc"><strong>Essential cookies:</strong> Required for the website to function properly and cannot be switched off</li>
                <li className="list-disc"><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                <li className="list-disc"><strong>Functionality cookies:</strong> Remember your preferences and settings to enhance your experience</li>
                <li className="list-disc"><strong>Marketing cookies:</strong> Used to track visitors across websites for marketing purposes</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold">3. Types of Cookies We Use</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Essential Cookies</h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    These cookies are necessary for the website to function and cannot be switched off in our systems. They include:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="list-disc">Session management and authentication</li>
                    <li className="list-disc">Security features and fraud prevention</li>
                    <li className="list-disc">Basic website functionality and navigation</li>
                    <li className="list-disc">Cookie consent preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Analytics Cookies</h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    We use analytics cookies to understand how visitors interact with our website. This helps us improve our services. These cookies:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="list-disc">Track page views and user navigation patterns</li>
                    <li className="list-disc">Measure website performance and loading times</li>
                    <li className="list-disc">Identify popular content and areas for improvement</li>
                    <li className="list-disc">Collect anonymous usage statistics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Functionality Cookies</h3>
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers. They:
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="list-disc">Remember your preferences and settings</li>
                    <li className="list-disc">Enable social media features and sharing</li>
                    <li className="list-disc">Provide enhanced functionality and customization</li>
                    <li className="list-disc">Remember your language and region preferences</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold">4. Managing Cookies</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our website, and some services and functionalities may not work.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies. Generally, you should be able to find these settings in the "Options" or "Preferences" menu of your browser.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold">5. Third-Party Cookies</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages. We use the following third-party services:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="list-disc"><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li className="list-disc"><strong>Social media platforms:</strong> For social sharing and integration features</li>
                <li className="list-disc"><strong>Payment processors:</strong> For secure payment processing</li>
                <li className="list-disc"><strong>Email service providers:</strong> For email marketing and communication</li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                These third parties may use cookies to collect information about your online activities across different websites. We do not control these third-party cookies, and you should check the respective privacy policies of these third parties for more information.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold">6. Cookie Duration</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Cookies can be either "session" cookies or "persistent" cookies. Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device until they expire or are deleted. The duration of persistent cookies varies depending on their purpose. Some cookies may remain on your device for up to 2 years, while others may expire after a single session.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-pink-600" />
                </div>
                <h2 className="text-3xl font-bold">7. Updates to This Cookie Policy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated revision date. We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold">8. Contact Us</h2>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">privacy@theaiagencykit.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Available on request</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
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
