
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12 mb-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Ashu Saini. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Ashu8140"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
