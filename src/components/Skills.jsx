import React from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaTools } from 'react-icons/fa';
import profilePhoto from '../assets/profile.jpg'; // Import your profile photo
import data from "../assets/data.json"
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
    <div className="relative min-h-screen text-gray-800 py-16 px-4 overflow-hidden bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-gray-800">


      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
      


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
            {
            data.skills.map((skill, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center p-4 rounded-xl bg-white shadow-md border border-gray-200 transform hover:scale-105 transition duration-300"
                variants={itemVariants}
              >
                <img src={skill.image} alt="" className='w-12'/>
                <span className="text-md font-medium text-gray-600">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

