import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';

interface ProjectStatusProps {
  status: string;
}

const ProjectStatus = ({ status }: ProjectStatusProps) => {
  const isCompleted = status === 'Completed';

  return (
    <motion.span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        isCompleted
          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
      }`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="flex items-center space-x-1"
        initial={{ x: -10 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {isCompleted ? (
          <FaCheckCircle className="w-4 h-4" />
        ) : (
          <BiTime className="w-4 h-4" />
        )}
        <span>{status}</span>
      </motion.div>
    </motion.span>
  );
};

export default ProjectStatus; 