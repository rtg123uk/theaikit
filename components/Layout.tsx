'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ReactNode, useState } from 'react'
import SignupPopup from './SignupPopup'
import CookieConsent from './CookieConsent'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'
import React from 'react'
import { CheckCircle2 } from 'lucide-react'

interface LayoutProps {
  children: ReactNode
}

const packageOptions = [
  { value: 'essential', label: 'Essential' },
  { value: 'professional', label: 'Professional' },
  { value: 'agency', label: 'Agency' },
]

export default function Layout({ children }: LayoutProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('essential')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: 'essential',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname();

  const handleOpen = (pkg = 'essential') => {
    setSelectedPackage(pkg);
    setIsPopupOpen(true);
  }
  const handleClose = () => setIsPopupOpen(false)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    setIsLoading(true);
    setIsError(false);
  }

  // Check if we're on the landing-new page
  const isLandingNew = pathname === '/landing-new';

  return (
    <div className="min-h-screen flex flex-col">
      {!isLandingNew && <Header onApplyClick={() => handleOpen('essential')} />}
      <SignupPopup
        isOpen={isPopupOpen}
        onClose={handleClose}
        title="Apply for The AI Agency Kit"
        subtitle="Select your preferred package and enter your details. We'll be in touch soon."
        selectedPackage={selectedPackage}
      />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      {!isLandingNew && <Footer />}
      <CookieConsent />
    </div>
  )
}

function CustomWeb3Form({ selectedPackage = 'essential' }: { selectedPackage?: string }) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    package: selectedPackage,
    message: '',
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('package', formData.package);
      data.append('message', formData.message);
      data.append('access_key', '9cfa6d27-d2d1-4336-a4e4-4274eaff799d');
      data.append('source', 'Popup Modal');
      data.append('subject', 'New Application from Popup Modal');
      data.append('botcheck', '');
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', package: selectedPackage, message: '' });
      } else {
        setIsError(true);
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setFormData((prev) => ({ ...prev, package: selectedPackage }));
  }, [selectedPackage]);

  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
          Thank You for Your Interest!
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-lg mx-auto">
          We've received your application and will contact you within 24 hours to discuss your AI agency journey.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      {/* Spam protection honeypot */}
      <input type="text" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="access_key" value="9cfa6d27-d2d1-4336-a4e4-4274eaff799d" />
      <input type="hidden" name="source" value="Popup Modal" />
      <input type="hidden" name="subject" value="New Application from Popup Modal" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-1">
          Select Package *
        </label>
        <select
          id="package"
          name="package"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          value={formData.package}
          onChange={handleChange}
        >
          <option value="essential">Essential</option>
          <option value="professional">Professional</option>
          <option value="agency">Agency</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          placeholder="Tell us more about your inquiry..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      {isError && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
          There was an error submitting your application. Please try again.
        </div>
      )}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <span>Submitting...</span>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </>
          ) : (
            'Submit Application'
          )}
        </button>
      </div>
    </form>
  );
} 