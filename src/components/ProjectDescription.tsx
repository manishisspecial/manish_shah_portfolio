import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectDescriptionProps {
  description: string;
  longDescription: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const ProjectDescription = ({
  description,
  longDescription,
  isExpanded,
  onToggle,
}: ProjectDescriptionProps) => {
  return (
    <div className="mb-4">
      <AnimatePresence mode="wait">
        <motion.p
          key={isExpanded ? 'long' : 'short'}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-600 dark:text-gray-300"
        >
          {isExpanded ? longDescription : description}
        </motion.p>
      </AnimatePresence>

      <motion.button
        onClick={onToggle}
        className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline mt-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isExpanded ? 'Show less' : 'Read more'}
      </motion.button>
    </div>
  );
};

export default ProjectDescription; 