import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaHandshake, FaCogs } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';

interface ProjectCategoryIconProps {
  category: string;
  className?: string;
}

const ProjectCategoryIcon = ({ category, className = '' }: ProjectCategoryIconProps) => {
  const getIcon = () => {
    switch (category) {
      case 'Healthcare':
        return <MdHealthAndSafety className={className} />;
      case 'Web Development':
        return <FaLaptopCode className={className} />;
      case 'Consulting':
        return <FaHandshake className={className} />;
      case 'Operations':
        return <FaCogs className={className} />;
      default:
        return <FaCode className={className} />;
    }
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      {getIcon()}
    </motion.div>
  );
};

export default ProjectCategoryIcon; 