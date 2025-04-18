import React, { useState } from 'react';
import { Project } from '../types/Project';
import ProjectGrid from './ProjectGrid';

interface ProjectSectionProps {
  title: string;
  description: string;
  projects: Project[];
  categories: string[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  description,
  projects,
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ProjectGrid projects={filteredProjects} />
      </div>
    </section>
  );
};

export default ProjectSection; 