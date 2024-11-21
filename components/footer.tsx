// components/Footer.js
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#E8F3D6] border-t border-[#87A922]/20 bottom-0">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-wrap justify-between items-start py-12 border-b border-[#87A922]/20">
          {/* Website Info Section */}
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-[#114232]">Camp Finder</h3>
            <p className="text-[#114232]/80">
              Your one-stop destination for finding the best camping spots! Discover top-rated camping providers, 
              plan your next adventure, and explore nature.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-[#114232]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-[#114232]/80 hover:text-[#87A922] transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-[#114232]/80 hover:text-[#87A922] transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[#114232]/80 hover:text-[#87A922] transition duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-[#114232]/80 hover:text-[#87A922] transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-[#114232]">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#114232]/70 hover:text-[#87A922] transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-[#114232]/70 hover:text-[#87A922] transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-[#114232]/70 hover:text-[#87A922] transition duration-300">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#114232]/70">
              © 2024 Camp Finder. All rights reserved.
            </p>

            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white/50 text-[#114232] border border-[#87A922]/20 
                         placeholder:text-[#114232]/50 focus:outline-none focus:border-[#87A922] 
                         focus:ring-1 focus:ring-[#87A922]/20 hover:bg-white/80 transition-all duration-300"
              />
              <button 
                className="px-6 py-2 bg-gradient-to-r from-[#87A922] to-[#FCDC2A] text-white 
                         rounded-lg font-medium hover:shadow-lg hover:shadow-[#87A922]/20 
                         transition-all duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-[#87A922]/30 via-[#FCDC2A]/30 to-[#87A922]/30" />
    </footer>
  );
}
