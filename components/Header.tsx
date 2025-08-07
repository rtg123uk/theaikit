import Link from 'next/link';
import { Rocket, Zap, Menu, X, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  onApplyClick?: (pkg?: string) => void;
  onConsultationClick?: () => void;
}

export default function Header({ onApplyClick, onConsultationClick }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/why-us', label: 'Why Us' },
    { href: '/markets', label: 'Markets' },
    { href: '/program', label: 'Our Kits', badge: 'Popular' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#151C2B] text-white shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-display font-bold tracking-tight">
          <Zap className="w-7 h-7 text-indigo-400" />
          AI Agency Startup
        </Link>
        <nav className="hidden md:flex gap-8 text-base font-medium items-center">
          {navLinks.map((link) => link.badge ? (
            <div key={link.href} className="relative flex flex-col items-center">
              <Link href={link.href} className="relative transition group">
                <span className="group-hover:text-indigo-300 transition-colors">{link.label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-purple-600 text-xs text-white px-2 py-0.5 rounded-full shadow-md">{link.badge}</span>
            </div>
          ) : (
            <Link key={link.href} href={link.href} className="relative transition group">
              <span className="group-hover:text-indigo-300 transition-colors">{link.label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://calendly.com/onboarding-aiagencystartup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-4 py-2 rounded-full font-semibold transition shadow-lg items-center gap-2 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 hover:shadow-purple-400/40 flex"
          >
            <Calendar className="w-4 h-4 text-white" />
            Free Consultation
          </a>
          <button
            onClick={() => { if (onConsultationClick) onConsultationClick(); }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold transition shadow-lg items-center gap-2 focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 hover:shadow-indigo-400/40 flex"
          >
            <Calendar className="w-5 h-5 text-white" />
            Book 1:1 Consultation
            <span className="ml-1">➔</span>
          </button>
        </div>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7 text-white" />
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu overlay"
        />
      )}
      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed top-[64px] left-0 right-0 w-full bg-[#151C2B] z-50 md:hidden"
          style={{ height: 'calc(100vh - 64px)' }}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-8 h-8 text-white" />
          </button>
          <nav className="flex flex-col gap-8 text-xl font-semibold items-center w-full mt-16">
            {navLinks.map((link) => link.badge ? (
              <div key={link.href} className="relative flex flex-col items-center w-full">
                <Link href={link.href} onClick={() => setMobileOpen(false)} className="relative transition group w-full text-center">
                  <span className="group-hover:text-indigo-300 transition-colors">{link.label}</span>
                </Link>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-600 text-xs text-white px-2 py-0.5 rounded-full shadow-md">{link.badge}</span>
              </div>
            ) : (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="relative transition group w-full text-center">
                <span className="group-hover:text-indigo-300 transition-colors">{link.label}</span>
              </Link>
            ))}
            <a
              href="https://calendly.com/onboarding-aiagencystartup"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg flex items-center gap-2 text-xl focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 hover:shadow-purple-400/40 w-full justify-center"
            >
              <Calendar className="w-6 h-6 text-white" />
              Free Consultation
            </a>
            <button
              onClick={() => { setMobileOpen(false); if (onConsultationClick) onConsultationClick(); }}
              className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg flex items-center gap-2 text-xl focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 hover:shadow-indigo-400/40 w-full justify-center"
            >
              <Calendar className="w-6 h-6 text-white" />
              Book 1:1 Consultation
              <span className="ml-1">➔</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
} 