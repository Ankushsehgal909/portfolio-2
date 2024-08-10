import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaTools } from 'react-icons/fa';
import profilePhoto from '../assets/profile.jpg'; // Import your profile photo

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: i * 0.2,
      },
    }),
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <div className="relative min-h-screen text-gray-800 py-16 px-4 overflow-hidden bg-gray-100">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-gray-300 to-gray-50"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={itemVariants}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Profile Photo */}
          <motion.div 
            className="w-full lg:w-1/2 mb-8 lg:mb-0 p-6 rounded-2xl bg-white shadow-lg border border-gray-200"
            variants={itemVariants}
          >
            <img 
              src={profilePhoto} 
              alt="Ankush Sehgal" 
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-gray-200" 
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Ankush Sehgal</h3>
            <p className="text-base leading-relaxed text-gray-600 text-center">
              Passionate computer science graduate with a strong foundation in full-stack development. Proficient in various programming languages and frameworks, focused on delivering clean, maintainable code.
            </p>
          </motion.div>

          {/* Services Section */}
          <motion.div 
            className="w-full lg:w-1/2 p-6 rounded-2xl bg-white shadow-lg border border-gray-200"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <FaCode className="text-gray-800 text-lg mr-2" />
                Full-Stack Web Development
              </li>
              <li className="flex items-center">
                <FaTools className="text-gray-800 text-lg mr-2" />
                Responsive Web Design
              </li>
              <li className="flex items-center">
                <FaCode className="text-gray-800 text-lg mr-2" />
                RESTful API Development
              </li>
              <li className="flex items-center">
                <FaTools className="text-gray-800 text-lg mr-2" />
                Mobile App Development
              </li>
              <li className="flex items-center">
                <FaCode className="text-gray-800 text-lg mr-2" />
                Database Management
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'C++', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'SQL',
              'Postman', 'Git', 'GitHub', 'Docker', 'React.js', 'Node.js',
              'Express.js', 'MongoDB', 'React Native', 'Pega', 'Bootstrap'
            ].map((skill, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center p-4 rounded-xl bg-white shadow-md border border-gray-200 transform hover:scale-105 transition duration-300"
                variants={itemVariants}
              >
                {index % 2 === 0 ? (
                  <FaCode className="text-gray-800 text-3xl mb-2" />
                ) : (
                  <FaTools className="text-gray-800 text-3xl mb-2" />
                )}
                <span className="text-md font-medium text-gray-600">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
