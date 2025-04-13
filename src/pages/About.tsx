import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine, FaCogs, FaHandshake, FaLightbulb, FaUserTie } from 'react-icons/fa';

const skills = [
  { name: 'Team Leadership', icon: FaUsers, color: 'text-blue-500' },
  { name: 'Client Relations', icon: FaHandshake, color: 'text-green-500' },
  { name: 'Process Innovation', icon: FaCogs, color: 'text-yellow-500' },
  { name: 'Strategic Planning', icon: FaChartLine, color: 'text-purple-500' },
  { name: 'Problem Solving', icon: FaLightbulb, color: 'text-orange-500' },
  { name: 'Service Management', icon: FaUserTie, color: 'text-red-500' },
];

const strengths = [
  "Strong work ethic and discipline",
  "Excellent team player and motivator",
  "Adaptable to any work environment",
  "Natural leader and mentor",
  "Strategic thinker",
  "Process optimization expert"
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-8">
            Professional Summary
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-gray-600 dark:text-gray-300">
              Dynamic, results-driven professional with 10+ years of experience in client servicing, operations, 
              and business development. Skilled in leading teams, streamlining processes, and adopting innovative 
              solutions to boost client satisfaction and organizational growth.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Current Role</h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Service Head – Kreditwala (Optimal BPO Pvt. Ltd.)
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Led cross-functional teams (HR, Admin, IT, MIS, Customer Support, Accounts)
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Managed client relationships, improved service delivery, and identified growth opportunities
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Introduced process automation and innovation to improve efficiency and satisfaction
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Oversaw hiring, training, performance management, and budget planning
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Managed high-stakes client escalations and strategic initiatives
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Leveraged data analytics and MIS to drive decision-making
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Strengths</h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  One of my greatest strengths is my discipline and strong work ethic. I ensure that today's 
                  tasks are completed by EOD and never leave work pending unnecessarily. I adapt easily to any 
                  work environment and thrive on being reliable and dependable.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm also a great team player—I naturally support and motivate my colleagues, and I'm always 
                  ready to help others overcome challenges. I believe that when the team wins, we all win.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Areas of Growth</h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I perform best in calm and focused environments. High-pressure or chaotic situations can 
                  sometimes affect my performance, but I've been developing strategies like prioritization 
                  and mindfulness to manage those moments better.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Another area I've been working on is maintaining emotional boundaries. I'm naturally empathetic 
                  and generous, but I've learned to balance that with professional boundaries to avoid burnout 
                  or being taken advantage of.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Vision</h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300">
                  In five years, I see myself growing into a Director or VP-level role, leading large teams 
                  and driving service transformation on a larger scale. I want to be known as someone who 
                  builds winning teams, delivers measurable value, and mentors the next generation of leaders.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 