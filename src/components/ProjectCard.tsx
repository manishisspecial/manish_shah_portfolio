import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project, ProjectMetric } from '../types/Project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <div className="flex space-x-2">
            {project.links?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.type === 'github' ? <FaGithub size={20} /> : <FaExternalLinkAlt size={20} />}
              </a>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
          {project.longDescription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mt-2 text-sm font-medium focus:outline-none"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
          {isExpanded && project.longDescription && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 text-gray-600 dark:text-gray-400"
            >
              {project.longDescription}
            </motion.p>
          )}
        </div>
        {project.metrics && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {project.metrics.map((metric: ProjectMetric, index: number) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-primary-600 dark:text-primary-400">{metric.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-between items-center">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            project.status === 'completed' 
              ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/20 dark:text-secondary-300' 
              : project.status === 'in-progress' 
              ? 'bg-accent-100 text-accent-800 dark:bg-accent-900/20 dark:text-accent-300'
              : 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-300'
          }`}>
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
          {project.completionDate && (
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Completed: {project.completionDate}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}; 