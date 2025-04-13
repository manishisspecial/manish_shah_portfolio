import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="min-h-screen pt-20 lg:pt-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background gradient circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary-200/30 dark:bg-primary-900/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary-200/30 dark:bg-secondary-900/20 blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="block"
              >
                Hi, I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="block bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
              >
                Manish Kumar Shah
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 prose prose-lg dark:prose-invert mx-auto text-left space-y-4"
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-gray-600 dark:text-gray-300"
              >
                I'm very glad to introduce myself—this is a question I've been excited to answer for years because my journey has shaped who I am today.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-gray-600 dark:text-gray-300"
              >
                I come from a grounded, humble family. I live with my mother, Madhu Shah, a theology graduate working with NGOs, and two elder sisters who have pursued successful careers in engineering and finance.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-gray-600 dark:text-gray-300"
              >
                Professionally, I bring over 10 years of experience in service management, client relations, and team leadership. I currently serve as Service Head at Kreditwala (Optimal BPO Pvt. Ltd.), where I lead cross-functional teams and manage end-to-end client relationships. I'm passionate about building strong service cultures, implementing efficient processes, and delivering solutions that genuinely add value.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-gray-600 dark:text-gray-300"
              >
                I believe this journey has prepared me to take on the strategic challenges of a Senior Service Head role, where I can lead with impact, empathy, and a drive for continuous improvement.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link
                to="/about"
                className="group relative w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:bg-gradient-to-l" />
                <span className="relative">View Experience</span>
              </Link>
              <Link
                to="/contact"
                className="group relative w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 group-hover:bg-gradient-to-l" />
                <span className="relative bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Get in Touch</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home; 