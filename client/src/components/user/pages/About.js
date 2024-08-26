import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // React Icons
import AboutUsImage from '../../../assets/aboutus.png'; // Replace with your actual image
import { motion } from 'framer-motion'; // Import framer-motion

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div>
      {/* About Section */}
      <section className="py-20 bg-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl text-center font-extrabold mt-7 text-gray-800 mb-14"
        >
          About Us
        </motion.div>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
                Our Mission
              </h2>
              <p className="text-base lg:text-lg text-gray-700 mb-6 text-center lg:text-left max-w-3xl mx-auto leading-relaxed">
                At Prabhu's Learning Hub, our mission is to provide accessible and
                high-quality education to learners of all backgrounds. We aim to
                empower individuals by offering a diverse range of courses designed
                to enhance skills and knowledge.
              </p>
              <p className="text-base lg:text-lg text-gray-700 mb-6 text-center lg:text-left max-w-3xl mx-auto leading-relaxed">
                We believe that education should be flexible, affordable, and
                available to everyone. Our platform is built to support learners in
                achieving their personal and professional goals.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleUp}
              className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center"
            >
              <img
                src={AboutUsImage}
                alt="About Us"
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl font-semibold mb-12 text-gray-800"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleUp}
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4 flex justify-center">
                <FaFacebook className="text-blue-600 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Prabhu</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleUp}
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4 flex justify-center">
                <FaTwitter className="text-blue-400 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">John Doe</h3>
              <p className="text-gray-600">Lead Instructor</p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleUp}
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="mb-4 flex justify-center">
                <FaLinkedin className="text-blue-700 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Marketing Director</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-3xl font-semibold mb-8"
          >
            Join Us Today
          </motion.h2>
          <p className="text-base lg:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Become part of our learning community and start your journey towards
            success.
          </p>
          <Link
            to="/signup"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-700 transition duration-300 inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm">&copy; 2024 Prabhu's Learning Hub. All rights reserved.</p>
          <div className="mt-4">
            <Link
              to="/about"
              className="text-gray-400 hover:text-white mx-2 transition-colors duration-200 text-sm"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white mx-2 transition-colors duration-200 text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
