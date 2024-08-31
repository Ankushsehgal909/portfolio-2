import React from 'react';
import { motion, useInView } from 'framer-motion';
import profilePhoto from '../assets/profile.jpg'; // Import your profile photo

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, triggerOnce: false });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        duration: 1,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 50 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#FF0000",
      transition: {
        yoyo: Infinity,
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div 
      className="relative min-h-screen text-gray-800 pt-16 px-4 overflow-hidden bg-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-[-2] bg-gradient-to-br from-gray-300 to-gray-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600"
          variants={headingVariants}
        >
          About Me
        </motion.h2>

        <motion.div 
          className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 mb-16"
          variants={containerVariants}
        >
          {/* Profile Photo */}
          <motion.div 
            className="w-full mb-8 lg:mb-0 p-6 rounded-2xl bg-white shadow-lg border border-gray-200"
            variants={containerVariants}
          >
            <img 
              src={profilePhoto} 
              alt="Ankush Sehgal" 
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-gray-200" 
            />
            <motion.h3 
              className="text-2xl font-semibold text-gray-800 mb-4 text-center"
              variants={headingVariants}
            >
              Ankush Sahagal
            </motion.h3>
            <motion.p 
              className="text-base leading-relaxed text-gray-600 text-center"
              variants={paragraphVariants}
            >
              Passionate computer science graduate with a strong foundation in full-stack development. Proficient in various programming languages and frameworks, focused on delivering clean, maintainable code.
            </motion.p>
            <motion.h3 
              className="text-2xl font-semibold text-gray-800 my-8 text-center"
              variants={headingVariants}
            >
              Education
              <motion.h4 
                className="text-base mt-4 font-semibold text-gray-800"
                variants={paragraphVariants}
              >
                Feroze Gandhi Institute of Engineering and Technology
              </motion.h4>
              <motion.p 
                className="text-base text-gray-800"
                variants={paragraphVariants}
              >
                B.Tech in Computer Science and Engineering
              </motion.p>
              <motion.p 
                className="text-base text-gray-800"
                variants={paragraphVariants}
              >
                CGPA: 7.3
              </motion.p>
              <motion.p 
                className="text-base text-gray-800"
                variants={paragraphVariants}
              >
                2020 - 2024, Raebareli, Uttar Pradesh
              </motion.p>
            </motion.h3>
            <motion.span 
              className='flex justify-center'
              variants={buttonVariants}
            >
              <motion.button 
                type="button" 
                className="text-white bg-red-700 hover:bg-blue-700 rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                variants={buttonVariants}
                whileHover="hover"
              >
                <a
              href="https://drive.google.com/file/d/1HvPw4XgSmedU8bpL3TfDL-44iDeORoz-/view?usp=drive_link"
              target="_blank" 
              rel="noopener noreferrer"
            >
                Download CV
              </a>
              </motion.button>
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
