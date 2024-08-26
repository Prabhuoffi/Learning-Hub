import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-4 shadow-lg fixed w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Desktop Links */}
        <div className="flex items-center">
          <div className="text-white text-3xl font-extrabold tracking-wide">
            <Link to="/">Learning Hub</Link>
          </div>
          <div className="hidden md:flex ml-16 font-semibold text-lg space-x-8">
            <Link
              to="/"
              className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
            >
              Home
            </Link>
            <Link
              to="/catalog"
              className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
            >
              Catalog
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Login, Signup, and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-4">
            <Link
              to="/signin"
              className="px-4 py-2 text-blue-600 bg-white border border-transparent rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="ml-4 px-4 py-2 text-blue-600 bg-white border border-transparent rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Signup
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden p-6 mt-2 space-y-4 bg-blue-600 text-center rounded-lg shadow-xl transition-all duration-300 ease-in-out">
          <Link
            to="/"
            className="block text-white font-semibold hover:text-blue-300 transition-colors duration-300 py-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/catalog"
            className="block text-white font-semibold hover:text-blue-300 transition-colors duration-300 py-2"
            onClick={toggleMenu}
          >
            Catalog
          </Link>
          <Link
            to="/about"
            className="block text-white font-semibold hover:text-blue-300 transition-colors duration-300 py-2"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block text-white font-semibold hover:text-blue-300 transition-colors duration-300 py-2"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          {/* Login and Signup in Mobile Menu */}
          <Link
            to="/signin"
            className="block text-blue-600 bg-white p-3 text-center font-semibold border border-transparent rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-4"
            onClick={toggleMenu}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="block text-blue-600 bg-white p-3 text-center font-semibold border border-transparent rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-4"
            onClick={toggleMenu}
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
