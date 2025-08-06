'use client';

import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, Star, Clock, Users, CheckCircle, AlertCircle } from 'lucide-react';

interface SignupPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  showMonthlyOptions?: boolean;
  customForm?: React.ReactNode;
  selectedPackage?: string;
}

export default function SignupPopup({ isOpen, onClose, title, subtitle, showMonthlyOptions = false, customForm, selectedPackage = 'essential' }: SignupPopupProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    monthlySupport: 'none'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Reset form state when popup is closed
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setIsError(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        website: '',
        monthlySupport: 'none'
      });
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    
    try {
      // Send to Brevo API
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          website: formData.website,
          monthlySupport: formData.monthlySupport,
          package: selectedPackage,
          source: 'Popup Modal'
        }),
      });
      
      const result = await response.json();
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-popup flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 sm:bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal Container */}
      <div
        className="relative w-full sm:w-auto max-w-2xl mx-auto
          rounded-t-2xl sm:rounded-xl
          bg-white shadow-2xl
          p-0
          mb-0 sm:my-8
          z-10
          overflow-hidden
          animate-slide-up"
        style={{
          marginTop: 'auto',
          maxHeight: '90vh',
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-indigo-100/50 rounded-t-2xl sm:rounded-xl" />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors z-20 p-2"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="relative z-10 overflow-y-auto max-h-[80vh] sm:max-h-[80vh]">
          <div className="p-4 sm:p-6">
            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Thank You for Your Interest!
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-lg mx-auto">
                  We've received your application and will contact you within 24 hours to discuss your AI agency journey.
                </p>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-sm sm:text-base"
                >
                  Close
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            ) : (
              <>
                {/* Header Section */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Limited Time Offer</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-2 sm:mb-3 px-2">
                    {title || 'Launch Your AI Agency in 72 Hours'}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto px-2">
                    {subtitle || 'Get everything you need to start your profitable AI automation business — from templates to leads.'}
                  </p>
                </div>

                {/* Social Proof */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 sm:mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                    <span className="text-gray-600">500+ Entrepreneurs</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                    <span className="text-gray-600">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                    <span className="text-gray-600">72h Launch</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6 px-2">
                  {[
                    "Ready-to-use templates & scripts",
                    "Done-for-you lead generation",
                    "No coding required",
                    "24/7 expert support",
                    "Custom branding included",
                    "Profit from day one"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Form Section */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  {customForm || (
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                      {/* Spam protection honeypot */}
                      <input type="text" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                      <input type="hidden" name="access_key" value="9cfa6d27-d2d1-4336-a4e4-4274eaff799d" />
                      <input type="hidden" name="source" value="Popup Modal" />
                      <input type="hidden" name="subject" value="New Application from Popup Modal" />
                      <input type="hidden" name="package" value={selectedPackage} />
                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label htmlFor="website" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                          Website (Optional)
                        </label>
                        <input
                          type="url"
                          id="website"
                          className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="Enter your website URL"
                        />
                      </div>

                      {showMonthlyOptions && (
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                            Monthly Support Package (Optional)
                          </label>
                          <div className="space-y-2">
                            <label className="flex items-start gap-2 p-2 sm:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input
                                type="radio"
                                name="monthlySupport"
                                value="standard"
                                checked={formData.monthlySupport === 'standard'}
                                onChange={(e) => setFormData({ ...formData, monthlySupport: e.target.value })}
                                className="mt-1 text-indigo-600 focus:ring-indigo-500"
                              />
                              <div>
                                <div className="text-sm sm:text-base font-medium">Standard Support (£49/month)</div>
                                <div className="text-xs sm:text-sm text-gray-500">500 leads/month + email support</div>
                              </div>
                            </label>
                            <label className="flex items-start gap-2 p-2 sm:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input
                                type="radio"
                                name="monthlySupport"
                                value="premium"
                                checked={formData.monthlySupport === 'premium'}
                                onChange={(e) => setFormData({ ...formData, monthlySupport: e.target.value })}
                                className="mt-1 text-indigo-600 focus:ring-indigo-500"
                              />
                              <div>
                                <div className="text-sm sm:text-base font-medium">Premium Support (£79/month)</div>
                                <div className="text-xs sm:text-sm text-gray-500">1,000 leads/month + priority support</div>
                              </div>
                            </label>
                            <label className="flex items-start gap-2 p-2 sm:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                              <input
                                type="radio"
                                name="monthlySupport"
                                value="none"
                                checked={formData.monthlySupport === 'none'}
                                onChange={(e) => setFormData({ ...formData, monthlySupport: e.target.value })}
                                className="mt-1 text-indigo-600 focus:ring-indigo-500"
                              />
                              <div>
                                <div className="text-sm sm:text-base font-medium">No Monthly Support</div>
                                <div className="text-xs sm:text-sm text-gray-500">I'll decide later</div>
                              </div>
                            </label>
                          </div>
                        </div>
                      )}

                      {isError && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 sm:px-4 sm:py-3 rounded-lg flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">There was an error submitting your application. Please try again.</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      >
                        {isLoading ? (
                          <>
                            <span>Submitting...</span>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          </>
                        ) : (
                          <>
                            <span>Submit Application</span>
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-center text-gray-500 mt-4">
                        By submitting this form, you agree to our terms and privacy policy.
                      </p>
                    </form>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 