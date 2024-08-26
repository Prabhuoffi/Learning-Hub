import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Framer Motion for animations
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // React Icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the backend or display a success message)
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 mt-7 lg:px-8">
          <motion.h2 
            className="text-4xl font-extrabold mb-12 text-center text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>
          <motion.form 
            className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-blue-900 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 text-blue-900 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-blue-900 font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-blue-900 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-blue-900 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 text-blue-900 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Information
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-blue-600 text-3xl mr-3" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-black">Email</h3>
                  <p className="text-black">contact@prabhulearninghub.com</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <FaPhone className="text-blue-600 text-3xl mr-3" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-black">Phone</h3>
                  <p className="text-black">+123 456 7890</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-blue-600 text-3xl mr-3" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-black">Address</h3>
                  <p className="text-black">123 Learning Hub Street, Education City, Country</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-700 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Prabhu's Learning Hub. All rights reserved.</p>
          <div className="mt-4">
            <Link to="/about" className="text-blue-400 hover:text-white mx-2 transition-colors duration-200 text-sm">About Us</Link>
            <Link to="/catalog" className="text-blue-400 hover:text-white mx-2 transition-colors duration-200 text-sm">Catalog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
