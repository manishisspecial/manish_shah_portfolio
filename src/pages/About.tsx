import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaTools, FaCode, FaLaptopCode, FaUserTie } from 'react-icons/fa';

const workExperience = [
  {
    title: "Service Head",
    company: "Kreditwala (A Unit of Optimal BPO Pvt. Ltd.)",
    period: "Apr 2022 – Present",
    responsibilities: [
      "Led cross-functional service delivery teams across HR, Admin, IT, MIS, Customer Support, and Accounts",
      "Managed end-to-end client relationships, translating business needs into actionable service improvements",
      "Directed talent acquisition, training, and performance management",
      "Championed process innovation and system improvements",
      "Oversaw budget planning, cost optimization, and P&L responsibilities",
      "Developed and executed strategic initiatives",
      "Managed escalations and high-stakes client issues",
      "Leveraged data analytics and MIS reporting"
    ]
  },
  {
    title: "Customer Care Head",
    company: "Cognate Health Services (P) Ltd.",
    period: "Dec 2020 – Mar 2022",
    responsibilities: [
      "Delivered exceptional service by effectively addressing customer inquiries and complaints",
      "Led team performance monitoring and implemented service improvement strategies",
      "Conducted regular training sessions to ensure high service standards"
    ]
  },
  {
    title: "Team Leader (Customer Support)",
    company: "Cognate Health Services (P) Ltd.",
    period: "Oct 2017 – Nov 2020",
    responsibilities: [
      "Managed and mentored a team of customer support professionals",
      "Trained team members and ensured alignment with company policies and objectives",
      "Addressed customer concerns, achieving high satisfaction ratings"
    ]
  },
  {
    title: "Team Leader (Sales)",
    company: "Cognate Health Services (P) Ltd.",
    period: "Apr 2017 – Sep 2017",
    responsibilities: [
      "Led a high-performing sales team, consistently exceeding monthly and annual sales targets",
      "Developed and implemented sales strategies",
      "Provided mentorship and coaching to sales representatives"
    ]
  },
  {
    title: "Team Leader",
    company: "Flicker Deals Pvt. Ltd.",
    period: "Jun 2015 – Mar 2017",
    responsibilities: [
      "Led a team to consistently exceed sales targets through effective negotiation",
      "Generated leads through direct sales efforts and persuasive communication"
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Commerce (BCom)",
    institution: "Delhi University, New Delhi",
    period: "Jun 2016 - Jun 2019"
  },
  {
    degree: "Graphic & Web Designing",
    institution: "Mongia Computer Institute, Janakpuri",
    period: "Jul 2016 - Jun 2017"
  },
  {
    degree: "Web Development",
    institution: "Maya Academy of Advanced Cinematics (MAAC), Dwarka",
    period: "Jan 2020 - Jun 2021"
  },
  {
    degree: "Advance Web Development",
    institution: "Screen Shiksha, Hyderabad",
    period: "Oct 2023 - Present"
  }
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-8 max-w-6xl mx-auto"
    >
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">About Me</h1>
      
      {/* Professional Summary */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-12 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
      >
        <div className="flex items-center mb-4">
          <FaUserTie className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Professional Summary</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Dynamic and results-driven professional with over 10 years of experience in client servicing, 
          operational management, and business development. Proven expertise in leading cross-functional teams, 
          streamlining processes, and driving customer satisfaction. Highly skilled in problem-solving, 
          team leadership, and adopting innovative technologies to improve efficiency and client relationships.
          Adept at managing day-to-day operations and delivering consistent business growth.
        </p>
      </motion.section>

      {/* Work Experience */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex items-center mb-6">
          <FaBriefcase className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Work Experience</h2>
        </div>
        
        <div className="space-y-6">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{job.title}</h3>
              <p className="text-blue-600 dark:text-blue-400">{job.company}</p>
              <p className="text-gray-600 dark:text-gray-400">{job.period}</p>
              <ul className="mt-4 space-y-2">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0"></span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
      >
        <div className="flex items-center mb-6">
          <FaGraduationCap className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Education</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
              <p className="text-blue-600 dark:text-blue-400">{edu.institution}</p>
              <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div>
          <div className="flex items-center mb-6">
            <FaTools className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Professional Skills</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <ul className="space-y-4">
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Management & Leadership:</span>
                <p>Decision Making, Strategic Planning, Team Leadership, Process Optimization</p>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Customer Relations:</span>
                <p>Client Onboarding, Relationship Management, Customer Satisfaction, Escalation Handling</p>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Communication:</span>
                <p>Clear and Effective Communication, Negotiation, Cross-functional Collaboration</p>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Problem Solving:</span>
                <p>Data-Driven Decision Making, Process Improvement, Innovation & Change Management</p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-6">
            <FaLaptopCode className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Technical Skills</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <ul className="space-y-4">
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Web Development:</span>
                <p>HTML, CSS, JavaScript, Node.js, React.js, Bootstrap, Tailwind CSS</p>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Backend Development:</span>
                <p>PHP, MySQL, MongoDB</p>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Design & Graphics:</span>
                <p>Adobe Photoshop, Corel DRAW, Dreamweaver</p>
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Tools & Platforms:</span>
                <p>WordPress, Linux, MS Office Suite, Google Suite, Git</p>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About; 