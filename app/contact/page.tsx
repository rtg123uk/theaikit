'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append('access_key', '9cfa6d27-d2d1-4336-a4e4-4274eaff799d');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 relative">
      {/* Thank You Modal Popup */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center relative">
            <button
              onClick={() => setIsSubmitted(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-2 rounded-full"
              aria-label="Close thank you popup"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Send another message
            </button>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 flex flex-col items-center justify-center text-center bg-gradient-to-b from-indigo-900 to-purple-900">
        {/* Subtle Icon in Background */}
        <MessageSquare className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[320px] h-[200px] sm:h-[320px] text-indigo-800 opacity-10 pointer-events-none z-0" />
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">Let's Talk About Building Your AI Agency</h1>
          <p className="text-lg sm:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Whether you have a question, want to partner, or need help getting started — we're here to help.
          </p>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-12 sm:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* TEAM in a box / Get in Touch Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Complete Automations Business in a Box</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
                Everything you need to launch and scale your AI agency—done for you, with expert support at every step. Reach out to our team for partnership, support, or to get started.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Visit Us</h3>
                    <p className="text-gray-600 text-sm">Manchester, United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <input type="hidden" name="access_key" value="9cfa6d27-d2d1-4336-a4e4-4274eaff799d" />
                {/* Honeypot field for spam protection */}
                <input type="text" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                {/* Source and Subject fields for tracking */}
                <input type="hidden" name="source" value="Contact Page" />
                <input type="hidden" name="subject" value="New Contact Form Submission from Contact Page" />
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                {isError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 sm:px-4 sm:py-3 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">There was an error sending your message. Please try again.</span>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isLoading ? (
                    <>
                      <span>Sending...</span>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 