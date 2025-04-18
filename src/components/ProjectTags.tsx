import React from 'react';
import { motion } from 'framer-motion';

interface ProjectTagsProps {
  tags: string[];
}

const ProjectTags = ({ tags }: ProjectTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <motion.span
          key={tag}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.1,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/50 dark:text-blue-200 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
};

export default ProjectTags; 