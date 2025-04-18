import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const ProjectCategories = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: ProjectCategoriesProps) => {
  return (
    <motion.div
      className="mt-8 flex flex-wrap gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category, index) => (
        <motion.button
          key={category}
          onClick={() => onSelectCategory(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedCategory === category
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900'
            }`}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default ProjectCategories; 