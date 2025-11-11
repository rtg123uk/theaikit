import Link from 'next/link';
import { Rocket, Menu, X } from 'lucide-react';
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
    { href: '/about', label: 'About Us' },
    { href: '/why-us', label: 'Why Choose Us' },
    { href: '/markets', label: 'Industries' },
    { href: '/program', label: 'Packages' },
    { href: '/testimonials', label: 'Success Stories' },
    { href: '/contact', label: 'Get In Touch' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#151C2B] text-white shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-sans font-bold tracking-tight">
          <Rocket className="w-7 h-7 text-indigo-400" />
          The AI Agency Kit
        </Link>
        <nav className="hidden md:flex gap-8 text-base font-medium items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="relative transition group">
              <span className="group-hover:text-indigo-300 transition-colors">{link.label}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
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
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="relative transition group w-full text-center">
                <span className="group-hover:text-indigo-300 transition-colors">{link.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
} 