import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Manish Kumar Shah
          </h1>
          <h2 className="text-2xl text-blue-600 dark:text-blue-400 mb-6">
            Service Head & Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Dynamic professional with over 10 years of experience in client servicing, operational management, 
            and business development. Combining expertise in team leadership with full-stack development skills 
            to deliver innovative solutions and drive business growth.
          </p>
          <div className="flex gap-6 mb-8">
            <a href="mailto:manishspecial009@outlook.com" className="text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <FaEnvelope />
            </a>
            <a href="tel:+919717414195" className="text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <FaPhone />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <FaLinkedin />
            </a>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">Web Development</span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">Team Leadership</span>
            </div>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">Client Relations</span>
              <span className="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">Process Optimization</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Professional Highlights</h3>
          <div className="space-y-4 text-white">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-white"></div>
              <p>Currently Service Head at Kreditwala, leading cross-functional teams</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-white"></div>
              <p>Full-stack developer with expertise in React.js, Node.js, and PHP</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-white"></div>
              <p>10+ years of experience in customer service and team management</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-white"></div>
              <p>Successful track record in process optimization and business growth</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home; 