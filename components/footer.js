// components/Footer.js
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-wrap justify-between items-start">
          {/* Website Info Section */}
          <div className="w-full sm:w-1/3 mb-6">
            <h3 className="text-2xl font-bold mb-2">Camp Finder</h3>
            <p className="text-sm text-gray-300">
              Your one-stop destination for finding the best camping spots! Discover top-rated camping providers, plan your next adventure, and explore nature.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/3 mb-6">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-white transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/3 mb-6">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-500 mt-8 pt-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-300">© 2024 Camp Finder. All rights reserved.</p>

            {/* Newsletter Signup */}
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-400"
              />
              <button className="ml-2 bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
