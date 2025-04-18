import React from 'react';
import SectionTransition from './SectionTransition';

interface ProjectSectionHeaderProps {
  title: string;
  description: string;
}

const ProjectSectionHeader = ({ title, description }: ProjectSectionHeaderProps) => {
  return (
    <SectionTransition>
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl">
        {description}
      </p>
    </SectionTransition>
  );
};

export default ProjectSectionHeader; 