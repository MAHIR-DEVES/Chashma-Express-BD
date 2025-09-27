import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
  FaCreditCard,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#831010] to-[#B91C1C] text-white">
      {/* Trust Badges Section */}
      <div className="bg-red-800 bg-opacity-50 py-6">
        <div className="sm:max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <FaShippingFast className="w-8 h-8 text-white mb-2" />
              <span className="font-semibold text-sm">Free Shipping</span>
              <span className="text-red-200 text-xs">On orders over $50</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaShieldAlt className="w-8 h-8 text-white mb-2" />
              <span className="font-semibold text-sm">2-Year Warranty</span>
              <span className="text-red-200 text-xs">Quality Guaranteed</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHeadset className="w-8 h-8 text-white mb-2" />
              <span className="font-semibold text-sm">24/7 Support</span>
              <span className="text-red-200 text-xs">Expert Assistance</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaCreditCard className="w-8 h-8 text-white mb-2" />
              <span className="font-semibold text-sm">Secure Payment</span>
              <span className="text-red-200 text-xs">Safe & Encrypted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-12 pb-8">
        <div className="sm:max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 text-white mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center relative shadow-lg">
                  <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center">
                    <span className="text-[#831010] font-bold text-sm">CE</span>
                  </div>
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white bg-opacity-40 rounded-full"></div>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-xl">Chashma Express BD</span>
                  <span className="text-xs text-red-200">BEATS PREMIUM</span>
                </div>
              </div>
              <p className="text-red-200 mb-6 leading-relaxed">
                Your trusted partner for premium eyewear and accessories.
                Quality products at competitive prices with exceptional customer
                service.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-white hover:bg-opacity-30 transition duration-200"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-white hover:bg-opacity-30 transition duration-200"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-white hover:bg-opacity-30 transition duration-200"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white bg-opacity-20 p-3 rounded-full hover:bg-white hover:bg-opacity-30 transition duration-200"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-red-600">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  'All Products',
                  'Special Offers',
                  'About Us',
                  'Contact Us',
                  'FAQ',
                  'Size Guide',
                ].map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-red-200 hover:text-white transition duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-red-300 rounded-full mr-3 group-hover:bg-white transition duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-red-600">
                Categories
              </h3>
              <ul className="space-y-3">
                {[
                  'Sunglasses',
                  'Prescription Glasses',
                  'Reading Glasses',
                  'Contact Lenses',
                  'Frames',
                  'Accessories',
                ].map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-red-200 hover:text-white transition duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-red-300 rounded-full mr-3 group-hover:bg-white transition duration-200"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-red-600">
                Contact Info
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" />
                  <span className="text-red-200">
                    123 Vision Street, Optical District, BD 1212
                  </span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-red-200">+880 1234-567890</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-red-200">
                    support@chashmaexpress.com
                  </span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-red-800 bg-opacity-30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Newsletter</h4>
                <p className="text-red-200 text-sm mb-3">
                  Subscribe for exclusive offers and updates
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-3 py-2 bg-white text-red-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-white w-full text-sm"
                  />
                  <button className="bg-white text-red-700 px-4 py-2 rounded-r-md hover:bg-red-50 transition duration-200 font-medium text-sm whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-red-600 pt-6 mb-6">
            <div className="flex flex-col items-center">
              <span className="text-red-200 text-sm mb-3">We Accept</span>
              <div className="flex space-x-4">
                {['Visa', 'MasterCard', 'PayPal', 'bKash', 'Nagad'].map(
                  method => (
                    <div
                      key={method}
                      className="bg-white bg-opacity-20 px-3 py-1 rounded-md"
                    >
                      <span className="text-white text-sm font-medium">
                        {method}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-red-600 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-red-200 text-sm mb-4 md:mb-0 text-center">
                © {new Date().getFullYear()} Chashma Express BD. All rights
                reserved.
              </p>
              <div className="flex flex-wrap justify-center space-x-6">
                {[
                  'Privacy Policy',
                  'Terms of Service',
                  'Return Policy',
                  'Shipping Policy',
                ].map(item => (
                  <a
                    key={item}
                    href="#"
                    className="text-red-200 hover:text-white text-sm transition duration-200 mb-2 md:mb-0"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
