import React from 'react';
import { motion } from 'framer-motion';
import ProjectStatus from './ProjectStatus';

interface ProjectHeaderProps {
  title: string;
  status: string;
}

const ProjectHeader = ({ title, status }: ProjectHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <motion.h3
        className="text-xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        {title}
      </motion.h3>
      <ProjectStatus status={status} />
    </div>
  );
};

export default ProjectHeader; 