// components/Header.js

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Website Name */}
        <div className="text-3xl font-bold text-white hover:text-gray-200 transition duration-300 ease-in-out">
          <Link href="/">
            Camp Finder
          </Link>
        </div>

        {/* Navigation Bar */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link
                href="/"
                className="hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-200 transition duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-200 transition duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Search Button or CTA */}
        <div>
          <Link
            href="/search"
            className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-400 transition duration-300 ease-in-out"
          >
            Find Camps
          </Link>
        </div>
      </div>
    </header>
  );
}
