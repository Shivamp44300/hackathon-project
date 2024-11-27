import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Columns (Responsive Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Information */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-fuchsia-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-fuchsia-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-fuchsia-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-fuchsia-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-fuchsia-400">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fuchsia-400">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fuchsia-400">
                <FaLinkedinIn className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-fuchsia-400">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GateWay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
