import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/projects/project-1.jpg'

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One. This project demonstrates skills in React, Node.js, and MongoDB.',
    imageUrl: img, // Replace with actual image path
    projectLink: 'https://github.com/Ankushsehgal909/project-one',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. This project showcases expertise in full-stack development using the MERN stack.',
    imageUrl: img , // Replace with actual image path
    projectLink: 'https://github.com/Ankushsehgal909/project-two',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three. This is a mobile app developed with React Native and Node.js.',
    imageUrl: img , // Replace with actual image path
    projectLink: 'https://github.com/Ankushsehgal909/project-three',
    technologies: ['React Native', 'Node.js', 'Express.js'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-gray-800">
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-gray-200"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center p-6">
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1 rounded-full bg-gray-800 bg-opacity-50 text-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-600 rounded hover:bg-opacity-90"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
