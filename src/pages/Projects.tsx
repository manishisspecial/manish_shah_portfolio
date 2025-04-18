import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types/Project';
import { ProjectCard } from '../components/ProjectCard';

const categories = ['All', 'Web Development', 'Healthcare', 'Consulting', 'Operations'];

const projects: Project[] = [
  {
    title: 'Cognate Health Web Platform',
    description: 'Developed a comprehensive healthcare management platform for Cognate Health, focusing on patient care and medical practice efficiency.',
    longDescription: 'Led the development of a state-of-the-art healthcare management platform that revolutionizes how medical practices handle patient care, appointments, and medical records. Implemented secure data handling practices compliant with healthcare regulations, integrated telemedicine capabilities, and created an intuitive interface for both healthcare providers and patients.',
    category: 'Healthcare',
    tags: ['React.js', 'Node.js', 'HIPAA Compliance', 'Telemedicine', 'Healthcare Tech'],
    status: 'completed',
    completionDate: 'March 2024',
    metrics: [
      { label: 'Patient Wait Time Reduction', value: '45%' },
      { label: 'Scheduling Efficiency', value: '60%' },
      { label: 'Patient Records', value: '10K+' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3',
    links: [
      { type: 'live', url: 'https://cognatehealth.com' },
      { type: 'github', url: 'https://github.com/yourusername/cognate-health' }
    ]
  },
  {
    title: 'Cardsarthi Website Development',
    description: 'Designed and developed a responsive website for Cardsarthi, enhancing user experience and ensuring functionality across all devices.',
    longDescription: 'Implemented modern web development practices to create a user-centric website. Focused on performance optimization, responsive design, and intuitive navigation to improve user engagement and conversion rates.',
    category: 'Web Development',
    tags: ['React.js', 'Node.js', 'Responsive Design', 'UI/UX'],
    status: 'completed',
    completionDate: 'December 2023',
    metrics: [
      { label: 'User Engagement', value: '+40%' },
      { label: 'Load Time', value: '-50%' },
      { label: 'Mobile Traffic', value: '60%' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
    links: [
      { type: 'github', url: 'https://github.com/yourusername/cardsarthi' }
    ]
  },
  {
    title: 'Subandhan Nidhi Limited - Financial Workflows',
    description: 'Collaborated with Subandhan Nidhi Limited to improve financial workflows, including loan document verification and video KYC processes.',
    longDescription: 'Developed and implemented streamlined financial processes, including an efficient loan document verification system and video KYC (vKYC) integration. Enhanced the loan disbursal process for better efficiency and compliance.',
    category: 'Web Development',
    tags: ['Financial Tech', 'KYC Integration', 'Process Automation', 'Document Management'],
    status: 'completed',
    completionDate: 'March 2024',
    metrics: [
      { label: 'Process Time', value: '-60%' },
      { label: 'Document Verification', value: 'Auto' },
      { label: 'KYC Success Rate', value: '95%' }
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3',
    links: [
      { type: 'github', url: 'https://github.com/yourusername/subandhan-nidhi' }
    ]
  },
  {
    title: 'Finbiz Solutions - Technical Solutions',
    description: 'Partnered with Finbiz Solutions to deliver impactful web-based solutions for operational and technical needs.',
    longDescription: 'Developed custom web applications and technical solutions to address specific operational challenges. Implemented automation tools and improved workflow efficiency through technology integration.',
    category: 'Web Development',
    tags: ['Custom Solutions', 'Process Automation', 'Web Applications', 'Technical Consulting'],
    status: 'completed',
    completionDate: 'January 2024',
    metrics: [
      { label: 'Operational Efficiency', value: '+45%' },
      { label: 'Manual Process Reduction', value: '70%' },
      { label: 'Data Accuracy', value: '90%' }
    ],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3',
    links: [
      { type: 'github', url: 'https://github.com/yourusername/finbiz-solutions' }
    ]
  },
  {
    title: 'NGO Financial Management',
    description: 'Managed financial records and prepared detailed reports for NGO projects, ensuring transparency and compliance with donor requirements.',
    longDescription: 'Oversaw comprehensive financial management including budgeting, fund allocation, and compliance reporting. Implemented efficient payment processing systems and maintained statutory compliance.',
    category: 'Operations',
    tags: ['Financial Management', 'Compliance', 'Reporting', 'Process Optimization'],
    status: 'in-progress',
    metrics: [
      { label: 'Projects Managed', value: '15+' },
      { label: 'Compliance Rate', value: '100%' },
      { label: 'Process Efficiency', value: '+65%' }
    ],
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3',
    links: [
      { type: 'github', url: 'https://github.com/yourusername/ngo-finance' }
    ]
  },
  {
    title: 'Anginat Learning Platform',
    description: 'Developed and implemented educational technology solutions for Anginat Learning, enhancing the digital learning experience.',
    longDescription: 'Created an interactive learning platform with features for content delivery, student engagement, and progress tracking. Integrated multimedia resources and assessment tools.',
    category: 'Web Development',
    tags: ['EdTech', 'Interactive Learning', 'Content Management', 'User Experience'],
    status: 'completed',
    completionDate: 'November 2023',
    metrics: [
      { label: 'Student Engagement', value: '+55%' },
      { label: 'Content Access', value: '24/7' },
      { label: 'User Satisfaction', value: '4.8/5' }
    ],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3',
    links: [
      { type: 'github', url: 'https://github.com/yourusername/anginat-learning' }
    ]
  },
  {
    title: 'Yellowind Services Operations',
    description: 'Provided operational consulting and technical solutions for Yellowind Services Private Limited.',
    longDescription: 'Analyzed existing processes and implemented improvements through technology integration and workflow optimization. Developed custom solutions for specific operational challenges.',
    category: 'Consulting',
    tags: ['Process Optimization', 'Technical Solutions', 'Operational Efficiency', 'Consulting'],
    status: 'completed',
    completionDate: 'February 2024',
    metrics: [
      { label: 'Process Optimization', value: '85%' },
      { label: 'Cost Reduction', value: '30%' },
      { label: 'Service Quality', value: '+40%' }
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3',
    links: [
      { type: 'github', url: 'https://github.com/yourusername/yellowind-services' }
    ]
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        My Projects
      </h1>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 