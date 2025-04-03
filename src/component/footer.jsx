import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-5 flex flex-wrap justify-center md:justify-between items-center">
      {/* Copyright Section */}
      <div className="text-center md:text-left text-sm mb-3 md:mb-0">
        <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Aapka Care.</p>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-3">
        <a
          href="https://www.facebook.com/aapkacare"
          className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-all"
          aria-label="Facebook"
        >
          <FaFacebookF className="text-white text-lg" />
        </a>
        <a
          href="https://www.instagram.com/aapkacare"
          className="p-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full hover:opacity-80 transition-all"
          aria-label="Instagram"
        >
          <FaInstagram className="text-white text-lg" />
        </a>
        <a
          href="https://www.youtube.com/@Aapkacare"
          className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition-all"
          aria-label="YouTube"
        >
          <FaYoutube className="text-white text-lg" />
        </a>
        <a
          href="https://www.linkedin.com/company/aapkacare/"
          className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-all"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="text-white text-lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
