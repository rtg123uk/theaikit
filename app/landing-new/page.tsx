'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Users, CheckCircle2, Star, Download, Play, Shield, Zap, Target, TrendingUp } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import IncludedSection from '@/components/IncludedSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import InstructorSection from '@/components/InstructorSection';
import FormulaSection from '@/components/FormulaSection';
import ProgramDetailsSection from '@/components/ProgramDetailsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BonusesSection from '@/components/BonusesSection';
import AudienceSection from '@/components/AudienceSection';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import WhyDifferentSection from '@/components/WhyDifferentSection';
import SignupPopup from '@/components/SignupPopup';
import ProgramContentModal from '@/components/ProgramContentModal';
import ConsultationButton from '@/components/ConsultationButton';
import ConsultationModal from '@/components/ConsultationModal';

export default function LandingNew() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isExitPopupOpen, setIsExitPopupOpen] = useState(false);
  const [exitEmail, setExitEmail] = useState('');
  const [isProgramModalOpen, setIsProgramModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [playbookEmail, setPlaybookEmail] = useState('');
  const [playbookSuccess, setPlaybookSuccess] = useState(false);
  const [playbookError, setPlaybookError] = useState('');
  const [showStickyCTA, setShowStickyCTA] = useState(false);



  // Exit intent detection - separate useEffect
  useEffect(() => {
    // Check if user has seen popup recently
    const lastPopupTime = localStorage.getItem('lastExitPopupTime');
    const popupCooldown = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    
    if (lastPopupTime && Date.now() - parseInt(lastPopupTime) < popupCooldown) {
      // Skip popup if shown recently
      return;
    }

    let hasShownExitPopup = false;
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves viewport in any direction and hasn't shown popup yet
      if ((e.clientY <= 0 || e.clientY >= window.innerHeight || e.clientX <= 0 || e.clientX >= window.innerWidth) 
          && !hasShownExitPopup && !isExitPopupOpen) {
        hasShownExitPopup = true;
        localStorage.setItem('lastExitPopupTime', Date.now().toString());
        setIsExitPopupOpen(true);
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      // Only show popup if they haven't seen it yet and are actually leaving
      if (!hasShownExitPopup && !isExitPopupOpen) {
        hasShownExitPopup = true;
        // Don't prevent default - let them leave if they want
        // Just show our popup as a last attempt
      }
    };

    // Enable exit intent after 6 seconds
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('beforeunload', handleBeforeUnload);
    }, 6000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isExitPopupOpen]);

  // Sticky CTA scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowStickyCTA(scrollPercentage > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExitEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/subscribe-playbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: exitEmail }),
      });
      
      if (res.ok) {
        console.log('Exit email captured and sent to Brevo:', exitEmail);
        setIsExitPopupOpen(false);
        setExitEmail('');
        // You could show a success message here
      } else {
        console.error('Failed to send exit email to Brevo');
      }
    } catch (error) {
      console.error('Error sending exit email:', error);
    }
  };

  const handlePlaybookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPlaybookError('');
    setPlaybookSuccess(false);
    
    try {
      const res = await fetch('/api/subscribe-playbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: playbookEmail }),
      });
      const data = await res.json();
      
      if (res.ok) {
        setPlaybookSuccess(true);
        setPlaybookEmail('');
      } else {
        setPlaybookError(data.error || 'There was a problem subscribing. Please try again.');
      }
    } catch {
      setPlaybookError('There was a problem subscribing. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky CTA Bar */}
      <div className="fixed top-0 left-0 right-0 bg-green-600 text-white py-3 px-4 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-semibold">Only 12 kits left this month</span>
          </div>
                                           <button 
              onClick={() => setIsConsultationModalOpen(true)}
              className="bg-white text-green-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              Book 1:1 Call
            </button>
        </div>
      </div>

      {/* Hero Section with Pricing Preview */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-800">
        <div className="absolute inset-0 opacity-10" style={{background: 'url(/ai-pattern.svg) center/cover'}} />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Perfect for Non-Technical Founders
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg max-w-4xl mx-auto mb-6">
            Start Your AI Automation Business in 7 Days — No Code Needed
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 drop-shadow-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Get everything you need to launch, sell, and scale your own AI service business — including a website, templates, and leads.
            <br /><b>No coding, no AI knowledge — setup is done for you.</b>
          </p>

                     {/* Pricing Preview with Urgency */}
           <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto border border-white/20">
             <div className="flex items-center justify-center space-x-2 mb-2">
               <span className="text-2xl font-bold text-white">£995</span>
               <span className="text-gray-300 line-through">£1,497</span>
               <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">33% OFF</span>
             </div>
             <p className="text-gray-300 text-sm mb-3">One-time payment • No monthly fees</p>
             
             {/* Urgency Elements */}
             <div className="space-y-2 text-center">
               <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-2">
                 <p className="text-red-200 text-xs font-semibold">🚨 Only 12 kits left this month</p>
               </div>
               <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-2">
                 <p className="text-green-200 text-xs font-semibold">🎁 Includes Bonus AI Templates Until Sunday</p>
               </div>
             </div>
           </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setIsConsultationModalOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full font-bold shadow-2xl transition-all flex items-center"
            >
              Book 1:1 Consultation
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
            </button>
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-white/10 hover:bg-white/20 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all flex items-center"
            >
              Get Access Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          
          <p className="text-sm md:text-base text-gray-300 drop-shadow mt-4">
            ⚡ Limited kits available. We'll reach out to set up your personalised agency platform after purchase.
          </p>
        </div>
             </section>

       {/* CTA Section Directly Beneath Hero */}
       <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto text-center">
             <div className="bg-white rounded-2xl p-8 shadow-lg border">
               <div className="flex items-center justify-center mb-4">
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                   <span className="text-2xl">👋</span>
                 </div>
                 <div className="text-left">
                   <h3 className="text-xl font-bold text-gray-900">Not sure if it's right for you?</h3>
                   <p className="text-gray-600 text-sm">Book a free 1:1 strategy call and we'll help you map out your plan.</p>
                 </div>
               </div>
               
               <div className="flex items-center justify-center mb-6">
                 <div className="flex items-center text-sm text-green-600 font-semibold">
                   <CheckCircle2 className="w-4 h-4 mr-1" />
                   No pressure. Just real advice.
                 </div>
               </div>
               
               <button 
                 onClick={() => setIsConsultationModalOpen(true)}
                 className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all flex items-center mx-auto"
               >
                 👉 Book My Free Call
                 <ArrowRight className="w-5 h-5 ml-2" />
               </button>
             </div>
           </div>
         </div>
       </section>

       {/* Early Testimonial Section */}
       <section className="bg-white py-12 border-b">
         <div className="container mx-auto px-4">
           <h2 className="text-2xl font-bold text-center mb-8">What Our Founders Are Saying</h2>
           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <div className="bg-gray-50 rounded-xl p-6 border">
               <div className="flex items-center mb-4">
                 <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                   S
                 </div>
                 <div>
                   <h4 className="font-semibold">Sarah Chen</h4>
                   <p className="text-sm text-gray-600">E-commerce Founder</p>
                 </div>
               </div>
               <p className="text-gray-700 italic">
                 "I was skeptical at first, but this kit literally gave me everything I needed. 
                 Within 2 weeks, I had my first client paying £2,500/month. The templates and 
                 lead database saved me months of work."
               </p>
               <div className="flex items-center mt-3">
                 <div className="flex text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                       <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                     </svg>
                   ))}
                 </div>
                 <span className="text-sm text-gray-600 ml-2">5.0</span>
               </div>
             </div>
             
             <div className="bg-gray-50 rounded-xl p-6 border">
               <div className="flex items-center mb-4">
                 <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                   M
                 </div>
                 <div>
                   <h4 className="font-semibold">Mike Rodriguez</h4>
                   <p className="text-sm text-gray-600">Agency Owner</p>
                 </div>
               </div>
               <p className="text-gray-700 italic">
                 "The setup was incredible. They literally built my website and loaded it with 
                 everything I needed. I was making sales calls within 3 days. This is the real deal."
               </p>
               <div className="flex items-center mt-3">
                 <div className="flex text-yellow-400">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                       <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                     </svg>
                   ))}
                 </div>
                 <span className="text-sm text-gray-600 ml-2">5.0</span>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Social Proof Bar */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className="font-semibold">247+ Founders Started</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </section>

             {/* What's Inside Visual Section */}
       <section className="py-16 bg-gray-50">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-4">See What's Inside Your Kit</h2>
           <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
             Everything you need to start your AI automation agency — pre-built and ready to go
           </p>
           
           <div className="grid md:grid-cols-3 gap-8 mb-12">
             <div className="bg-white rounded-xl p-6 shadow-lg border">
               <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                 <Target className="w-8 h-8 text-blue-600" />
               </div>
               <h3 className="text-xl font-bold mb-3">Lead Database</h3>
               <p className="text-gray-600 mb-4">500+ pre-qualified leads in your chosen niche with contact details</p>
               <ul className="space-y-2 mb-4">
                 <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Email addresses</li>
                 <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Phone numbers</li>
                 <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Company info</li>
               </ul>
               {/* Visual Preview */}
               <div className="bg-gray-100 rounded-lg p-3 border-2 border-dashed border-gray-300">
                 <div className="text-xs text-gray-500 mb-2">📊 Sample Lead File Preview</div>
                 <div className="space-y-1">
                   <div className="bg-white rounded px-2 py-1 text-xs">john@company.com | +44 123 456 7890</div>
                   <div className="bg-white rounded px-2 py-1 text-xs">sarah@business.co.uk | +44 987 654 3210</div>
                   <div className="bg-white rounded px-2 py-1 text-xs">mike@startup.io | +44 555 123 4567</div>
                 </div>
               </div>
             </div>
             
             <div className="bg-white rounded-xl p-6 shadow-lg border">
               <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                 <Zap className="w-8 h-8 text-green-600" />
               </div>
               <h3 className="text-xl font-bold mb-3">Sales Templates</h3>
               <p className="text-gray-600 mb-4">Complete email sequences, scripts, and proposals that convert</p>
               <ul className="space-y-2 mb-4">
                 <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Cold email templates</li>
                 <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Proposal templates</li>
                 <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Follow-up sequences</li>
               </ul>
               {/* Visual Preview */}
               <div className="bg-gray-100 rounded-lg p-3 border-2 border-dashed border-gray-300">
                 <div className="text-xs text-gray-500 mb-2">📧 Sample Email Template</div>
                 <div className="bg-white rounded px-2 py-2 text-xs">
                   <div className="font-semibold">Subject: AI Automation for [Company]</div>
                   <div className="text-gray-600 mt-1">Hi [Name], I noticed [Company] could benefit from...</div>
                 </div>
               </div>
             </div>
             
             <div className="bg-white rounded-xl p-6 shadow-lg border">
               <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                 <TrendingUp className="w-8 h-8 text-purple-600" />
               </div>
               <h3 className="text-xl font-bold mb-3">Website & Tools</h3>
               <p className="text-gray-600 mb-4">Professional website and automation tools to scale your business</p>
               <ul className="space-y-2 mb-4">
                 <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Landing pages</li>
                 <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />CRM integration</li>
                 <li className="flex items-center text-sm"><CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />Analytics setup</li>
               </ul>
               {/* Visual Preview */}
               <div className="bg-gray-100 rounded-lg p-3 border-2 border-dashed border-gray-300">
                 <div className="text-xs text-gray-500 mb-2">🌐 Website Structure</div>
                 <div className="space-y-1">
                   <div className="bg-white rounded px-2 py-1 text-xs">📁 Homepage</div>
                   <div className="bg-white rounded px-2 py-1 text-xs">📁 Services</div>
                   <div className="bg-white rounded px-2 py-1 text-xs">📁 Contact</div>
                 </div>
               </div>
             </div>
           </div>

           
         </div>
       </section>



      

      {/* Original Sections */}
      <StatsSection />
      <IncludedSection />
      <HowItWorksSection />
      <InstructorSection />
      <FormulaSection />
      <WhyDifferentSection />
      
      
      
      {/* Consultation Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                👋 Not Sure Which Option is Right for You?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Book a Free 1:1 Consultation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's walk you through everything you need to know to make the right decision for your AI business journey.
              </p>
            </div>
            
                         <div className="max-w-2xl mx-auto mb-12">
               <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold">30-Minute Deep Dive</h3>
                    <p className="text-gray-600 text-sm">Comprehensive strategy session</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    Detailed niche analysis & market research
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    How to land your first client fast
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    What's inside the kit + how to use it
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                    How to get started this week
                  </div>
                </div>
                
                                                                                                                                       <button 
                     onClick={() => setIsConsultationModalOpen(true)}
                     className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                   >
                     Book Your Free Call
                   </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Book a Consultation?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Personalized Strategy</h4>
                  <p className="text-purple-100 text-sm">Get advice tailored to your specific background and goals</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Save Time</h4>
                  <p className="text-purple-100 text-sm">Skip the trial and error with expert guidance</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">Fast Track Success</h4>
                  <p className="text-purple-100 text-sm">Learn proven strategies to get your first client quickly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ProgramDetailsSection />
      <BonusesSection />
      <TestimonialsSection />
      <AudienceSection />
             <FAQSection />
       <FinalCTASection />

       {/* Lead Magnet for Fence-Sitters */}
       <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
         <div className="container mx-auto px-4 text-center">
           <div className="max-w-2xl mx-auto">
             <h2 className="text-3xl font-bold mb-4">Not Ready to Start Yet?</h2>
             <p className="text-gray-600 mb-8">
               Download our free AI Business Playbook and get started with the fundamentals. 
               We'll also send you case studies and tips to help you decide.
             </p>
             
             <div className="bg-white rounded-2xl p-8 shadow-lg border">
               <div className="flex items-center justify-center mb-6">
                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                   <Download className="w-8 h-8 text-blue-600" />
                 </div>
                 <div className="text-left">
                   <h3 className="text-xl font-bold">Free AI Business Playbook</h3>
                   <p className="text-gray-600 text-sm">27-page guide with templates & strategies</p>
                 </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-4 mb-6 text-left">
                 <div className="flex items-center text-sm">
                   <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                   AI business models that work
                 </div>
                 <div className="flex items-center text-sm">
                   <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                   Client acquisition strategies
                 </div>
                 <div className="flex items-center text-sm">
                   <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                   Pricing templates
                 </div>
                 <div className="flex items-center text-sm">
                   <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                   Case studies & examples
                 </div>
               </div>
               
                               <form onSubmit={handlePlaybookSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    value={playbookEmail}
                    onChange={(e) => setPlaybookEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Free Playbook
                  </button>
                </form>
                {playbookError && <div className="text-red-600 text-sm mt-2">{playbookError}</div>}
                {playbookSuccess && (
                  <div className="text-green-600 text-sm mt-2 font-semibold">
                    ✅ Thank you! Your Free AI Business Playbook is on its way to your email.
                  </div>
                )}
               
               <p className="text-xs text-gray-500 mt-3">
                 No spam. Unsubscribe anytime. We'll also send you case studies and tips.
               </p>
             </div>
           </div>
         </div>
       </section>

       {/* Footer with Navigation */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
                <span className="text-xl font-bold">AI Agency Startup</span>
              </div>
              <p className="text-gray-300 mb-4">
                Empowering entrepreneurs to build successful AI automation businesses. 
                Get everything you need to start your own AI agency.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/why-us" className="text-gray-300 hover:text-white transition-colors">Why Us</a></li>
                <li><a href="/markets" className="text-gray-300 hover:text-white transition-colors">Markets</a></li>
                <li><a href="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="/program" className="text-gray-300 hover:text-white transition-colors">Our Program</a></li>
                <li><a href="/legal/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/legal/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/legal/refund" className="text-gray-300 hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 AI Agency Startup. All rights reserved. | 
              <a href="/legal/privacy" className="text-gray-300 hover:text-white ml-1">Privacy</a> | 
              <a href="/legal/terms" className="text-gray-300 hover:text-white ml-1">Terms</a>
            </p>
          </div>
        </div>
      </footer>

             {/* Signup Popup */}
       <SignupPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

       {/* Exit Intent Popup */}
       {isExitPopupOpen && (
         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
           <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
             {/* Close button */}
             <button 
               onClick={() => setIsExitPopupOpen(false)}
               className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
             >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>

             <div className="text-center">
               {/* Icon */}
               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Download className="w-8 h-8 text-red-600" />
               </div>

               <h3 className="text-2xl font-bold mb-2">Wait! Not Convinced Yet?</h3>
               <p className="text-gray-600 mb-4">
                 Get our <span className="font-bold text-red-600">Free AI Business Playbook</span> and discover how 
                 to launch your AI services business in the next 30 days.
               </p>
               <p className="text-gray-600 mb-6">
                 This isn't just another PDF - it's your complete roadmap to success.
               </p>

               <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                 <h4 className="font-semibold mb-2">Inside Your Free Playbook:</h4>
                 <ul className="space-y-2 text-sm text-gray-600">
                   <li className="flex items-center">
                     <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                     <span><b>Profit Blueprint:</b> The 7 most profitable AI services to offer right now</span>
                   </li>
                   <li className="flex items-center">
                     <Target className="w-4 h-4 text-green-500 mr-2" />
                     <span><b>Client Acquisition:</b> Our proven outreach templates that convert</span>
                   </li>
                   <li className="flex items-center">
                     <Zap className="w-4 h-4 text-green-500 mr-2" />
                     <span><b>Quick Start Guide:</b> Launch your business in 30 days or less</span>
                   </li>
                   <li className="flex items-center">
                     <Shield className="w-4 h-4 text-green-500 mr-2" />
                     <span><b>Risk-Free Method:</b> Start with zero upfront investment</span>
                   </li>
                 </ul>
               </div>

               <form onSubmit={handleExitEmailSubmit} className="space-y-4">
                 <input
                   type="email"
                   value={exitEmail}
                   onChange={(e) => setExitEmail(e.target.value)}
                   placeholder="Enter your email address"
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                   required
                 />
                 <button
                   type="submit"
                   className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
                 >
                                     Get Your Free Playbook Now
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-3">
                Join 1,000+ entrepreneurs who've already downloaded the playbook. 
                No credit card required. Instant access.
              </p>
             </div>
           </div>
         </div>
       )}

       {/* Program Content Modal */}
       <ProgramContentModal
         isOpen={isProgramModalOpen}
         onClose={() => setIsProgramModalOpen(false)}
       />
       
               {/* Sticky Consultation Button */}
        <ConsultationButton onOpenModal={() => setIsConsultationModalOpen(true)} />
        
        {/* Consultation Modal */}
        <ConsultationModal 
          isOpen={isConsultationModalOpen} 
          onClose={() => setIsConsultationModalOpen(false)} 
        />
        
        {/* Sticky Footer CTA */}
        {showStickyCTA && (
          <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-4 z-50 shadow-lg transform transition-transform duration-300">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold">Need help deciding?</span>
              </div>
              <button 
                onClick={() => setIsConsultationModalOpen(true)}
                className="bg-white text-purple-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center"
              >
                Book Your Free Strategy Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        )}
      </div>
    )
} 