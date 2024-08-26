import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/home.png';
import AboutImage from '../../../assets/home1.png';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaLaptop, FaCertificate } from 'react-icons/fa';
import { FaLaptopCode, FaChartLine, FaBullhorn, FaPenFancy, FaRobot, FaShieldAlt, FaTasks, FaUserAlt, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen text-gray-800 flex items-center justify-center bg-white relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Left side content with animation */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              Welcome to Prabhu's Learning Hub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">
              Your one-stop solution for online learning
            </p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/catalog"
                className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-400 transition-transform transform duration-300 inline-flex items-center"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3H11V10H3V12H11V21H13V12H21V10H13V3Z" />
                </svg>
                Explore Courses
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side image with animation */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={heroImage} alt="Hero" className="max-w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Introductory Section */}
      <section className="py-20 bg-white">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Image Animation */}
          <motion.img
            src={AboutImage}
            alt="Hero"
            className="max-w-full h-auto mb-10 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />

          {/* Heading Animation */}
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Why Choose Us?
          </motion.h2>

          {/* Paragraph Animations */}
          <motion.p
            className="text-lg text-gray-700 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          >
            At Prabhu's Learning Hub, we offer top-notch education and training for a variety of subjects. Our platform is designed to cater to the needs of learners of all ages and backgrounds.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            With our flexible learning options, expert instructors, and certification programs, you can advance your skills and career at your own pace.
          </motion.p>
        </motion.div>
      </section>


      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="text-indigo-500 mb-6">
                <FaChalkboardTeacher className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Expert Instructors</h3>
              <p className="text-gray-700">
                Learn from industry leaders with hands-on experience and deep knowledge. Our instructors are committed to providing you with the skills and insights you need to excel.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="text-indigo-500 mb-6">
                <FaLaptop className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Flexible Learning</h3>
              <p className="text-gray-700">
                Our courses are available on demand, allowing you to learn at your own pace, anytime and anywhere. Enjoy seamless learning across devices with a user-friendly interface.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <div className="text-indigo-500 mb-6">
                <FaCertificate className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Certification</h3>
              <p className="text-gray-700">
                Earn certificates that validate your learning and skillset. These credentials can be a valuable addition to your resume and help you stand out in your career.
              </p>
            </motion.div>

            {/* Feature 4 - Quiz */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              <div className="text-indigo-500 mb-6">
                <FaTasks className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Interactive Quizzes</h3>
              <p className="text-gray-700">
                Test your knowledge with interactive quizzes at the end of each course module. Reinforce your learning and track your progress with immediate feedback.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/*coursesection*/}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Popular Courses</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Web Development */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-50"
              whileHover={{ scale: 1.1 }}
            >
              <FaLaptopCode className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Web Development</h3>
              <p className="text-gray-700">
                Build and deploy modern web applications using the latest technologies like React, Node.js, and more.
              </p>
            </motion.div>
            {/* Data Science */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-green-50"
              whileHover={{ scale: 1.1 }}
            >
              <FaChartLine className="text-green-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Data Science</h3>
              <p className="text-gray-700">
                Analyze and interpret complex data to make informed decisions using tools like Python, R, and SQL.
              </p>
            </motion.div>
            {/* Digital Marketing */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-50"
              whileHover={{ scale: 1.1 }}
            >
              <FaBullhorn className="text-yellow-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Digital Marketing</h3>
              <p className="text-gray-700">
                Master the art of online marketing strategies, SEO, content marketing, and social media management.
              </p>
            </motion.div>
            {/* Graphic Design */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-pink-50"
              whileHover={{ scale: 1.1 }}
            >
              <FaPenFancy className="text-pink-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Graphic Design</h3>
              <p className="text-gray-700">
                Learn to create visually stunning designs and branding materials using tools like Photoshop and Illustrator.
              </p>
            </motion.div>
            {/* Artificial Intelligence */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-purple-50"
              whileHover={{ scale: 1.1 }}
            >
              <FaRobot className="text-purple-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Artificial Intelligence</h3>
              <p className="text-gray-700">
                Explore AI concepts, machine learning algorithms, and deep learning to build intelligent systems.
              </p>
            </motion.div>
            {/* Cybersecurity */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-red-50"
              whileHover={{ scale: 1.1 }}
            >
              <FaShieldAlt className="text-red-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Cybersecurity</h3>
              <p className="text-gray-700">
                Learn to protect systems, networks, and data from cyber threats and attacks using industry practices.
              </p>
            </motion.div>
            {/* Project Management */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-indigo-50"
              whileHover={{ scale: 1.1 }}
            >
              <FaTasks className="text-indigo-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Project Management</h3>
              <p className="text-gray-700">
                Gain expertise in planning, executing, and managing projects effectively using Agile and other methodologies.
              </p>
            </motion.div>
            {/* UI/UX Design */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-teal-50"
              whileHover={{ scale: 1.1 }}
            >
              <FaUserAlt className="text-teal-500 text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">UI/UX Design</h3>
              <p className="text-gray-700">
                Design intuitive and user-friendly interfaces while focusing on enhancing user experiences.
              </p>
            </motion.div>
          </motion.div>
          <Link
            to="/catalog"
            className="inline-block mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-400 transition duration-300"
          >
            View All Courses
          </Link>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">What Our Students Say</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Testimonial 1 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-50"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-blue-500 text-4xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The courses are well-structured and the instructors are very knowledgeable. I've learned so much!"
              </p>
              <div className="text-blue-500 text-4xl mt-4">
                <FaQuoteRight />
              </div>
              <p className="text-blue-500 font-bold mt-4">- Student A</p>
            </motion.div>
            {/* Testimonial 2 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-green-50"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-green-500 text-4xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Flexible learning at its best! I could study at my own pace and get certified."
              </p>
              <div className="text-green-500 text-4xl mt-4">
                <FaQuoteRight />
              </div>
              <p className="text-blue-500 font-bold mt-4">- Student B</p>
            </motion.div>
            {/* Testimonial 3 */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-yellow-50"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-yellow-500 text-4xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Great platform with a variety of courses to choose from. Highly recommend!"
              </p>
              <div className="text-yellow-500 text-4xl mt-4">
                <FaQuoteRight />
              </div>
              <p className="text-blue-500 font-bold mt-4">- Student C</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-blue-500 text-white">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Learning?
          </motion.h2>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join Prabhu's Learning Hub today and unlock a world of knowledge.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/signup"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-500 transition duration-300"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-700 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <p className="text-lg font-semibold">&copy; 2024 Prabhu's Learning Hub. All rights reserved.</p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">
              Contact Us
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition duration-300">
              Terms of Service
            </Link>
          </div>
          <div className="flex justify-center space-x-6 text-2xl mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaLinkedinIn />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
