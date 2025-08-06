'use client';

import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Card-style Header Section */}
      <section className="py-10 flex justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-md px-8 py-10 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-md p-8">
            <div className="prose prose-lg max-w-none">
              <h2>1. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul>
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Website URL</li>
                <li>Business information</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Improve our services</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
              <ul>
                <li>Service providers who assist in our operations</li>
                <li>Professional advisers</li>
                <li>Law enforcement when required by law</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
              </ul>

              <h2>6. Cookies and Tracking</h2>
              <p>We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

              <h2>7. Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.</p>

              <h2>8. Contact Us</h2>
              <p>If you have any questions about this privacy policy, please contact us at:</p>
              <ul>
                <li>Email: privacy@aiagencystartup.com</li>
                <li>Phone: 020 875 6983</li>
                <li>Address: 180 - 186 Kings Cross Road, London, WC1X 9DE</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 