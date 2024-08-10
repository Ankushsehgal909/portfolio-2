import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-gray-800 px-4 sm:px-6 lg:px-8">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-[-1]">
        <div className="w-full h-full bg-gradient-to-b from-white to-transparent opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center p-8">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 pb-2 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ankush Sahagal
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg lg:text-2xl font-medium text-gray-700 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Full-Stack Developer | Passionate about building responsive and scalable web applications
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="mailto:ankushsehgal999@gmail.com" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <MdEmail className="text-2xl" />
            <span className="text-lg">ankushsehgal999@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/ankush90/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <FaLinkedin className="text-2xl" />
            <span className="text-lg">LinkedIn</span>
          </a>
          <a href="https://github.com/Ankushsehgal909" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <FaGithub className="text-2xl" />
            <span className="text-lg">GitHub</span>
          </a>
        </motion.div>
        
        <motion.div 
          className="text-sm sm:text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p>Saharanpur, Uttar Pradesh, 247451</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
