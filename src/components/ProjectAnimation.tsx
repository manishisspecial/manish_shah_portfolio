import React from 'react';
import { motion } from 'framer-motion';

interface ProjectAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

const ProjectAnimation = ({ children, delay = 0 }: ProjectAnimationProps) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      layout
    >
      {children}
    </motion.div>
  );
};

export default ProjectAnimation; 