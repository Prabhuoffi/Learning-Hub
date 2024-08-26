import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion'; // Import framer-motion
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa'; // Import icons

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/signin', formData);
      console.log('Login successful:', response.data);
      navigate('/admindashboard'); // Redirect to a protected route on successful login
    } catch (error) {
      setError(error.response.data.message || 'An error occurred');
      console.error('Login error:', error);
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
            <FaEnvelope className="text-gray-500 mx-3" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
            <FaLock className="text-gray-500 mx-3" />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-700 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center hover:bg-blue-400 transition duration-300"
          >
            <FaSignInAlt className="mr-2" />
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
          <p className="text-gray-700 mt-2">Forgot your password? <Link to="/forgot-password" className="text-blue-500 hover:underline">Reset it here</Link></p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
