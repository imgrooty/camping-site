'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#E8F3D6] shadow-lg border-b border-[#00FF9C]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Website Name */}
        <div className="text-3xl font-bold relative group">
          <Link href="/"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-orange-500 
                     tracking-wider drop-shadow-lg">
            SummerCamper
            {/* Animated underline effect */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#00FF9C] to-[#FFE700] 
                          group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
        </div>

        {/* Navigation Bar - Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Explore', path: '/explore' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="text-[#114232] hover:text-[#008550] relative group transition-colors duration-300"
                >
                  {item.name}
                  {/* Hover underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00FF9C] to-[#FFE700] 
                                group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          {/* Find Camps CTA Button */}
          <Link
            href="/camps"
            className="px-5 py-2.5 bg-gradient-to-r from-[#00FF9C] to-[#FFE700] text-[#114232] 
                     rounded-full font-semibold hover:shadow-lg hover:shadow-[#00FF9C]/20 
                     transition-all duration-300 hover:scale-105"
          >
            Add Camps
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-[#114232] hover:text-[#008550] transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#E8F3D6] border-t border-[#00FF9C]/20">
          <ul className="px-6 py-4 space-y-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Explore', path: '/explore' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="block text-[#114232] hover:text-[#008550] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
