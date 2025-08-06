'use client';

import React from 'react';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Card-style Header Section */}
      <section className="py-10 flex justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-md px-8 py-10 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Cookie Policy
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
              <h2>1. What Are Cookies</h2>
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide a better user experience.</p>

              <h2>2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              <ul>
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                <li>Functionality cookies: Remember your preferences and settings</li>
                <li>Marketing cookies: Used to track visitors across websites</li>
              </ul>

              <h2>3. Types of Cookies We Use</h2>
              <h3>Essential Cookies</h3>
              <p>These cookies are necessary for the website to function and cannot be switched off in our systems. They include:</p>
              <ul>
                <li>Session management</li>
                <li>Security features</li>
                <li>Basic website functionality</li>
              </ul>

              <h3>Analytics Cookies</h3>
              <p>We use analytics cookies to understand how visitors interact with our website. This helps us improve our services. These cookies:</p>
              <ul>
                <li>Track page views and navigation</li>
                <li>Measure website performance</li>
                <li>Identify areas for improvement</li>
              </ul>

              <h3>Functionality Cookies</h3>
              <p>These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers. They:</p>
              <ul>
                <li>Remember your preferences</li>
                <li>Enable social media features</li>
                <li>Provide enhanced functionality</li>
              </ul>

              <h2>4. Managing Cookies</h2>
              <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our website.</p>

              <h2>5. Third-Party Cookies</h2>
              <p>Some cookies are placed by third-party services that appear on our pages. We use the following third-party services:</p>
              <ul>
                <li>Google Analytics</li>
                <li>Social media platforms</li>
                <li>Payment processors</li>
              </ul>

              <h2>6. Updates to This Policy</h2>
              <p>We may update this cookie policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

              <h2>7. Contact Us</h2>
              <p>If you have any questions about our use of cookies, please contact us at:</p>
              <ul>
                <li>Email: privacy@aiagencystartup.com</li>
                <li>Phone: [Your Phone Number]</li>
                <li>Address: [Your Business Address]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 