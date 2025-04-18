import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';

interface ProjectLinksProps {
  links?: {
    live?: string;
    github?: string;
  };
}

const ProjectLinks = ({ links }: ProjectLinksProps) => {
  if (!links) return null;

  return (
    <div className="flex gap-4 mt-4">
      {links.live && (
        <motion.a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaLink className="mr-2" />
          <span>Live Demo</span>
        </motion.a>
      )}
      {links.github && (
        <motion.a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <FaGithub className="mr-2" />
          <span>Source Code</span>
        </motion.a>
      )}
    </div>
  );
};

export default ProjectLinks; 