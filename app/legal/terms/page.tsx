'use client';

import React from 'react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Card-style Header Section */}
      <section className="py-10 flex justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-md px-8 py-10 text-center">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Terms and Conditions
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
              <h2>1. Agreement to Terms</h2>
              <p>By accessing and using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>

              <h2>2. Use License</h2>
              <p>Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained in our services</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

              <h2>3. Service Description</h2>
              <p>We provide AI automation solutions and business setup services. Our services include:</p>
              <ul>
                <li>AI automation implementation</li>
                <li>Business setup and configuration</li>
                <li>Training and support</li>
                <li>Access to templates and resources</li>
              </ul>

              <h2>4. User Obligations</h2>
              <p>As a user of our services, you agree to:</p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account</li>
                <li>Use the services in compliance with all applicable laws</li>
                <li>Not use the services for any illegal or unauthorized purpose</li>
              </ul>

              <h2>5. Payment Terms</h2>
              <p>Payment terms and conditions:</p>
              <ul>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>Payment is due upon receipt of invoice</li>
                <li>We reserve the right to modify our pricing with notice</li>
                <li>Late payments may result in service suspension</li>
              </ul>

              <h2>6. Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>

              <h2>7. Limitation of Liability</h2>
              <p>In no event shall we be liable for any damages arising out of the use or inability to use our services, even if we have been notified of the possibility of such damages.</p>

              <h2>8. Changes to Terms</h2>
              <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>

              <h2>9. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <ul>
                <li>Email: legal@aiagencystartup.com</li>
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