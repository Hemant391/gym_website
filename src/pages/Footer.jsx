import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black pt-12 pb-4 text-white">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4">
          <img src="./Logo.png" alt="Logo" />
        </div>

        {/* Tagline */}
        <p className="mb-12">Where Fitness Meets Social Connection!</p>

        {/* Email */}
        <a
          href="mailto:hello@gymfluencer.com"
          className="text-white hover:underline bg-slate-700 rounded-lg px-6 py-2 flex items-center justify-center w-fit mx-auto gap-2"
        >
          <MdEmail size={20} /> {/* Added size for proper alignment */}
          hello@gymfluencer.com
        </a>

        {/* Navigation Links */}
        <nav className="mt-12">
          <ul className="flex justify-center gap-6">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/diet-plan" className="hover:underline">
                Diet Plan
              </a>
            </li>
            <li>
              <a href="/features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-sm text-gray-300 px-16 flex justify-between items-center">
        <div> &copy; 2024 GymFluencer. All rights reserved.</div>
        {/* Social Icons */}
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:text-red-500">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-red-500">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-red-500">
            <FaXTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
