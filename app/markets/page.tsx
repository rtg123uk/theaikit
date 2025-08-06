'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
// Font Awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faShoppingBag, faBriefcase, faStethoscope, faGraduationCap, faUtensils, faTruck, faIndustry, faHome, faClinicMedical, faPaw } from '@fortawesome/free-solid-svg-icons';

export default function MarketsPage() {
  const industries = [
    {
      icon: <FontAwesomeIcon icon={faBuilding} className="w-8 h-8" />,
      title: "Professional Services",
      description: "Transform client engagement and streamline operations for law firms, accounting practices, and consulting businesses.",
      benefits: [
        "Website & chat automation for client enquiries",
        "Automated email follow-ups",
        "Lead generation for new clients",
        "AI-powered content for blogs and newsletters"
      ],
      link: "/markets/professional-services"
    },
    {
      icon: <FontAwesomeIcon icon={faShoppingBag} className="w-8 h-8" />,
      title: "Retail & E-commerce",
      description: "Enhance customer experience and boost sales through intelligent automation solutions.",
      benefits: [
        "Chatbots for product questions and order support",
        "Automated email marketing & cart reminders",
        "Lead generation for new customers",
        "AI content for product descriptions & blogs"
      ],
      link: "/markets/retail-e-commerce"
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8" />,
      title: "Financial Services",
      description: "Streamline financial operations and improve customer service in banking and insurance.",
      benefits: [
        "Secure chatbots for FAQs & appointments",
        "Automated onboarding & compliance emails",
        "Lead generation for financial clients",
        "AI content for newsletters & guides"
      ],
      link: "/markets/financial-services"
    },
    {
      icon: <FontAwesomeIcon icon={faClinicMedical} className="w-8 h-8" />,
      title: "Healthcare",
      description: "Patient intake, appointment scheduling, and medical content automation",
      benefits: [
        "Chatbots for patient questions & bookings",
        "Automated appointment reminders",
        "Lead generation for clinics",
        "AI content for health blogs & updates"
      ],
      link: "/markets/healthcare"
    },
    {
      icon: <FontAwesomeIcon icon={faGraduationCap} className="w-8 h-8" />,
      title: "Education",
      description: "Enhance learning experiences and administrative efficiency in educational institutions.",
      benefits: [
        "Chatbots for course info & enrolment",
        "Automated class & event reminders",
        "Lead generation for training providers",
        "AI content for newsletters & blogs"
      ],
      link: "/markets/education"
    },
    {
      icon: <FontAwesomeIcon icon={faUtensils} className="w-8 h-8" />,
      title: "Hospitality",
      description: "Elevate guest experiences and streamline operations in hotels and restaurants.",
      benefits: [
        "Chatbots for bookings & guest requests",
        "Automated email campaigns & offers",
        "Lead generation for local businesses",
        "AI content for promotions & blogs"
      ],
      link: "/markets/hospitality"
    },
    {
      icon: <FontAwesomeIcon icon={faTruck} className="w-8 h-8" />,
      title: "Logistics & Transport",
      description: "Optimise operations and improve customer service in transportation and delivery.",
      benefits: [
        "Chatbots for delivery queries & tracking",
        "Automated delivery updates & feedback",
        "Lead generation for logistics",
        "AI content for service updates & blogs"
      ],
      link: "/markets/logistics-transport"
    },
    {
      icon: <FontAwesomeIcon icon={faIndustry} className="w-8 h-8" />,
      title: "Manufacturing",
      description: "Enhance production efficiency and customer service in manufacturing operations.",
      benefits: [
        "Chatbots for order queries & support",
        "Automated order & production updates",
        "Lead generation for manufacturers",
        "AI content for product updates & blogs"
      ],
      link: "/markets/manufacturing"
    },
    {
      icon: <FontAwesomeIcon icon={faHome} className="w-8 h-8" />,
      title: "Real Estate",
      description: "Streamline property management and enhance client relationships.",
      benefits: [
        "Chatbots for property queries & viewings",
        "Automated property alerts & reminders",
        "Lead generation for estate agents",
        "AI content for property descriptions & blogs"
      ],
      link: "/markets/real-estate"
    },
    {
      icon: <FontAwesomeIcon icon={faPaw} className="w-8 h-8" />,
      title: "Veterinary",
      description: "Pet care automation, appointment scheduling, and veterinary content",
      benefits: [
        "Chatbots for pet care queries",
        "Automated appointment reminders",
        "Lead generation for veterinary clinics",
        "AI content for pet health & care blogs"
      ],
      link: "/markets/veterinary"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Card-style Header Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/10" />
        
        {/* Main Content */}
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Tailored AI Automation for Every Niche
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Launch industry-ready solutions to your targeted audience.
            </p>

            {/* Industry Icons Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faClinicMedical} className="w-5 h-5" />
                <span>Healthcare</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />
                <span>Education</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5" />
                <span>Finance</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faShoppingBag} className="w-5 h-5" />
                <span>Retail</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FontAwesomeIcon icon={faIndustry} className="w-5 h-5" />
                <span>Manufacturing</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <a 
                href="#industry-solutions"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                Explore Your Sector
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Industry Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Industry</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <a 
                key={index}
                href={`#${industry.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                  {React.cloneElement(industry.icon, { className: "w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" })}
                </div>
                <span className="text-center font-medium text-gray-700 group-hover:text-indigo-600">{industry.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Power of AI Automation</h2>
            <p className="text-lg text-gray-600 mb-8">
              In today's competitive business landscape, the key to success isn't just about having the latest technology—it's about how you use it to create meaningful business outcomes. Our AI automation solutions focus on delivering tangible benefits that matter to your business and your customers.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Enhanced Efficiency</h3>
                <p className="text-gray-600">Automate routine tasks and free up your clients team to focus on high-value activities that drive growth.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Improved Customer Experience</h3>
                <p className="text-gray-600">Deliver personalised, 24/7 support that keeps your customers engaged and satisfied. Trained, very specifically on your clients business and needs.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Scalable Operations</h3>
                <p className="text-gray-600">Grow your business without proportionally increasing your operational costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industry-solutions" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {industries.map((industry, index) => (
              <div 
                key={index}
                id={industry.title.toLowerCase().replace(/\s+/g, '-')}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-indigo-600 transition-colors">
                      {React.cloneElement(industry.icon, { className: "w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" })}
                    </div>
                    <h3 className="text-xl font-semibold">{industry.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <ul className="space-y-2 mb-6">
                    {industry.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-700">
                        <ArrowRight className="w-4 h-4 text-indigo-600 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={industry.link} className="mt-auto inline-block bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-md font-semibold transition-colors text-center">
                  Discover More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how our AI automation solutions can help you achieve your clients business goals, regardless of your industry.
          </p>
          <Link 
            href="/program"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg group"
          >
            <span className="flex items-center">
              Get Started Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
} 