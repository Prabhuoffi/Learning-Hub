import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Catalog = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Failed to load courses. Please try again later.');
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="text-center text-lg font-semibold mt-10">Loading courses...</div>;
  }

  if (error) {
    return <div className="text-center text-lg font-semibold text-red-500 mt-10">{error}</div>;
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-14 mt-7 text-gray-800 text-center">Course Catalog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map(course => (
            <motion.div
              key={course._id}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div className="relative overflow-hidden h-56 mb-4">
                <motion.img
                  src={course.image}
                  alt={course.title}
                  className="h-48 inset-0"
                />
              </motion.div>
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-4 text-sm h-16 overflow-hidden line-clamp-3">{course.description}</p>
              <Link
                to={`/course/${course._id}`}
                className="inline-flex items-center px-4 py-2 text-white bg-blue-500 hover:bg-blue-400 rounded-lg transition-colors duration-300"
              >
                <span>View Details</span>
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
