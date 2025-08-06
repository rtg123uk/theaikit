import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#151C2B] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        <div className="text-sm text-gray-400 text-center md:text-left mb-4 md:mb-0">&copy; {new Date().getFullYear()} AI Agency Startup. All rights reserved.</div>
        <nav className="w-full md:w-auto flex flex-col md:flex-row gap-4 md:gap-8 text-sm items-center">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 w-full md:w-auto items-center">
            <Link href="/legal/privacy-policy" className="hover:text-indigo-400 transition">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-indigo-400 transition">Terms & Conditions</Link>
            <Link href="/legal/cookies" className="hover:text-indigo-400 transition">Cookie Policy</Link>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-600 mx-4" />
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 w-full md:w-auto items-center">
            <Link href="/about" className="hover:text-indigo-400 transition">About Us</Link>
            <Link href="/program" className="hover:text-indigo-400 transition">Our Kits</Link>
            <Link href="/testimonials" className="hover:text-indigo-400 transition">Success Stories</Link>
            <Link href="/blog" className="hover:text-indigo-400 transition">Blog</Link>
          </div>
        </nav>
      </div>
    </footer>
  );
} 