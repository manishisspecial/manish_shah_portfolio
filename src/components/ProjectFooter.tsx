import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectLink {
  url: string;
  type: 'github' | 'live';
}

interface ProjectFooterProps {
  links?: ProjectLink[];
}

const ProjectFooter: React.FC<ProjectFooterProps> = ({ links = [] }) => {
  return (
    <div className="flex gap-4 mt-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
        >
          {link.type === 'github' ? (
            <FaGithub className="w-6 h-6" />
          ) : (
            <FaExternalLinkAlt className="w-5 h-5" />
          )}
        </a>
      ))}
    </div>
  );
};

export default ProjectFooter; 