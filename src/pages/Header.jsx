import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white flex justify-between items-center px-6 py-3 rounded-full z-50 backdrop-blur-md shadow-lg w-full max-w-4xl">
      {/* Logo */}
      <div className="flex items-center">
        <img src="./Logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="hidden md:flex space-x-6 text-sm font-semibold">
          <li>
            <Link to="/" className="hover:text-red-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-500 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-red-500 transition duration-300">
              Our Services
            </Link>
          </li>
          <li>
            <Link to="/benefits" className="hover:text-red-500 transition duration-300">
              Benefits
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-red-500 transition duration-300">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-500 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Join Us Button */}
      <div>
        <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition duration-300">
        <Link to="/contact" >
          Join Us Now
        </Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
