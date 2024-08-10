import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-gray-800">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-[-1]">
        <div className="w-full h-full bg-gradient-to-b from-white to-transparent opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <motion.h2 
          className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              I'm open to opportunities and collaborations. If you want to reach out to me for any inquiries, feel free to use any of the contact methods below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <MdLocationOn className="text-2xl text-gray-800 mr-2" />
                Saharanpur, Uttar Pradesh, 247451
              </div>
              <div className="flex items-center text-gray-700">
                <MdEmail className="text-2xl text-gray-800 mr-2" />
                ankushsehgal999@gmail.com
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Connect with Me</h3>
            <p className="text-gray-600 mb-6">
              I'm active on these platforms. Feel free to connect with me, and let's grow our networks together.
            </p>
            <div className="flex flex-col space-y-4">
              <a href="https://www.linkedin.com/in/ankush90/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900">
                <FaLinkedin className="text-2xl text-gray-800 mr-2" />
                LinkedIn
              </a>
              <a href="https://github.com/Ankushsehgal909" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-gray-900">
                <FaGithub className="text-2xl text-gray-800 mr-2" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
