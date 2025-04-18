import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

interface ProjectCompletionProps {
  date: string;
}

const ProjectCompletion = ({ date }: ProjectCompletionProps) => {
  return (
    <motion.div
      className="flex items-center text-sm text-gray-500 dark:text-gray-400"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <FaCalendarAlt className="w-4 h-4 mr-2" />
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {date}
      </motion.span>
    </motion.div>
  );
};

export default ProjectCompletion; 