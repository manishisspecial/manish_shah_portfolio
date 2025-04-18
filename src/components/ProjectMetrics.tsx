import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

interface ProjectMetricsProps {
  metrics: string[];
}

const ProjectMetrics = ({ metrics }: ProjectMetricsProps) => {
  return (
    <div className="space-y-3 mb-4">
      {metrics.map((metric, i) => (
        <motion.div 
          key={i} 
          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 + 0.2 }}
          >
            <FaStar className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 + 0.3 }}
          >
            {metric}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectMetrics; 