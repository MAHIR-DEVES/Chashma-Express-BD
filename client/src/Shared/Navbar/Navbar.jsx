import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaSearch,
  FaRegUser,
  FaShoppingCart,
  FaTimes,
  FaBars,
} from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = e => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-gradient-to-r from-[#831010] to-[#B91C1C] shadow-lg sticky top-0 z-50 py-2">
      <div className="w-full px-2 sm:max-w-7xl mx-auto">
        {/* Main navbar content */}
        <div className="flex justify-between items-center py-3">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center space-x-2 text-white">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center relative shadow-lg">
              {/* Inner circle for depth */}
              <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                <span className="text-[#831010] font-bold text-sm">CE</span>
              </div>
              {/* Shine effect */}
              <div className="absolute top-1 left-1 w-2 h-2 bg-white bg-opacity-40 rounded-full"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold sm:text-xl">Chashma Express BD</span>
              <span className="text-xs text-red-200">BEATS PREMIUM</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearch} className="flex w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-900 bg-opacity-50 text-white placeholder-red-200"
              />
              <button
                type="submit"
                className="bg-white text-red-700 px-4 py-2 rounded-r-md hover:bg-red-50 transition duration-200 font-medium"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right side icons */}
          <div className="flex items-center gap-2">
            {/* Search icon - Mobile */}
            <button
              onClick={() => document.getElementById('mobile-search').focus()}
              className="text-white p-2 rounded-full hover:bg-red-700 transition duration-200 md:hidden"
              aria-label="Search"
            >
              <FaSearch className="w-5 h-5" />
            </button>

            {/* User account icon */}
            <Link
              to="/account"
              className="text-white p-2 rounded-full hover:bg-red-700 transition duration-200"
              aria-label="User account"
            >
              <FaRegUser className="w-5 h-5" />
            </Link>

            {/* Shopping cart icon */}
            <Link
              to="/cart"
              className="text-white p-2 rounded-full hover:bg-red-700 transition duration-200 relative"
              aria-label="Shopping cart"
            >
              <FaShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-white text-red-700 text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                3
              </span>
            </Link>

            {/* Offers button */}
            <Link
              to="/offers"
              className="bg-white hover:bg-red-50 text-red-700 px-4 py-2 rounded-md font-medium transition duration-200 hidden md:block"
            >
              Offers
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-red-700 transition duration-200 md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search bar - Mobile */}
        <div className="py-3 border-t border-red-700 md:hidden">
          <form onSubmit={handleSearch} className="flex">
            <input
              id="mobile-search"
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-900 bg-opacity-50 text-white placeholder-red-200"
            />
            <button
              type="submit"
              className="bg-white text-red-700 px-4 py-2 rounded-r-md hover:bg-red-50 transition duration-200 font-medium"
            >
              <FaSearch className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Mobile Offers Button */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-red-700">
            <div className="pt-2 pb-3">
              <Link
                to="/offers"
                className="block w-full text-center bg-white text-red-700 px-4 py-2 rounded-md font-medium transition duration-200 hover:bg-red-50"
                onClick={() => setIsMenuOpen(false)}
              >
                View Offers
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
