import React from 'react';
import { motion } from 'framer-motion';
import data from '../assets/data.json'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';




const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-8">
        <motion.h2
          className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-lg overflow-hidden h-60 transform hover:scale-105 transition duration-300 border border-gray-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.1 }}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center p-6">
                <h3 className="text-2xl flex justify-center font-semibold text-gray-100 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1 rounded-full bg-gray-800 bg-opacity-50 text-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-lg text-blue-400 hover:underline"
                >
                  <FaGithub className="mr-2" /> Source
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-lg text-red-400 hover:underline"
                >
                  <FaExternalLinkAlt className="mr-2" />Preview
                </a>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
