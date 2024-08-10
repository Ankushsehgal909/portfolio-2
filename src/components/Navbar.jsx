import React from 'react';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
      <ul className="flex space-x-8 bg-white bg-opacity-70 px-6 py-3 rounded-full shadow-lg">
        <li>
          <a href="#home" className="flex flex-col items-center text-gray-700 hover:text-gray-900">
            <FaHome className="text-xl mb-1" />
            <span className="text-sm">Home</span>
          </a>
        </li>
        <li>
          <a href="#about" className="flex flex-col items-center text-gray-700 hover:text-gray-900">
            <FaUser className="text-xl mb-1" />
            <span className="text-sm">About</span>
          </a>
        </li>
        <li>
          <a href="#projects" className="flex flex-col items-center text-gray-700 hover:text-gray-900">
            <FaProjectDiagram className="text-xl mb-1" />
            <span className="text-sm">Projects</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="flex flex-col items-center text-gray-700 hover:text-gray-900">
            <FaEnvelope className="text-xl mb-1" />
            <span className="text-sm">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
