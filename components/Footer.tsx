import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#151C2B] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} The AI Agency Kit. All rights reserved.
          </div>
          <nav className="flex flex-row flex-wrap gap-4 md:gap-6 text-sm items-center justify-center">
            <Link href="/legal/privacy-policy" className="hover:text-indigo-400 transition whitespace-nowrap">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-indigo-400 transition whitespace-nowrap">Terms & Conditions</Link>
            <Link href="/legal/cookies" className="hover:text-indigo-400 transition whitespace-nowrap">Cookie Policy</Link>
            <span className="hidden md:inline w-px h-4 bg-gray-600"></span>
            <Link href="/about" className="hover:text-indigo-400 transition whitespace-nowrap">About Us</Link>
            <Link href="/program" className="hover:text-indigo-400 transition whitespace-nowrap">Packages</Link>
            <Link href="/testimonials" className="hover:text-indigo-400 transition whitespace-nowrap">Success Stories</Link>
            <Link href="/contact" className="hover:text-indigo-400 transition whitespace-nowrap">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
} 