import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchCourses, updateCourse as updateCourseApi, deleteCourse as deleteCourseApi } from './api';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import Header from './Header';
import Sidebar from './Sidebar';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingCourse, setEditingCourse] = useState(null);
  const [editData, setEditData] = useState({
    title: '',
    description: '',
    image: '',
    videos: [],
  });

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const fetchedCourses = await fetchCourses();
        setCourses(fetchedCourses);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch courses');
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  const handleEditClick = (course) => {
    setEditingCourse(course._id);
    setEditData({
      title: course.title,
      description: course.description,
      image: course.image,
      videos: course.videos,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedCourse = await updateCourseApi(editingCourse, editData);
      setCourses(courses.map((course) => (course._id === editingCourse ? updatedCourse : course)));
      setEditingCourse(null);
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleVideoChange = (index, field, value) => {
    const updatedVideos = editData.videos.map((video, i) =>
      i === index ? { ...video, [field]: value } : video
    );
    setEditData({ ...editData, videos: updatedVideos });
  };

  const handleDeleteClick = async (id) => {
    try {
      await deleteCourseApi(id);
      setCourses(courses.filter((course) => course._id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleAddVideo = () => {
    setEditData({
      ...editData,
      videos: [...editData.videos, { title: '', url: '', difficulty: 'Basic' }],
    });
  };

  if (loading) return <p className="text-center mt-10 text-lg font-medium">Loading courses...</p>;
  if (error) return <p className="text-center mt-10 text-lg text-red-500">{error}</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="mx-auto mt-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Courses</h2>
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead className="bg-blue-500 text-white uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-2 sm:px-6 text-left">Title</th>
                  <th className="py-3 px-2 sm:px-6 text-left">Description</th>
                  <th className="py-3 px-2 sm:px-6 text-left">Image</th>
                  <th className="py-3 px-2 sm:px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm font-light">
                {Array.isArray(courses) && courses.length > 0 ? (
                  courses.map((course) => (
                    <tr key={course._id} className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-2 sm:px-6 text-left whitespace-nowrap">{course.title}</td>
                      <td className="py-3 px-2 sm:px-6 text-left truncate max-w-xs">{course.description}</td>
                      <td className="py-3 px-2 sm:px-6 text-left">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg shadow-md"
                        />
                      </td>
                      <td className="py-3 px-2 sm:px-6 text-center">
                        <div className="flex justify-center space-x-2 sm:space-x-4">
                          <button
                            onClick={() => handleEditClick(course)}
                            className="bg-green-400 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-green-500 transition-all duration-200 flex items-center"
                          >
                            <FiEdit className="mr-1 sm:mr-2" /> Edit
                          </button>
                          <button
                            onClick={() => handleDeleteClick(course._id)}
                            className="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-red-600 transition-all duration-200 flex items-center"
                          >
                            <FiTrash2 className="mr-1 sm:mr-2" /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-3 px-6 text-center text-gray-600">
                      No courses available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingCourse && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Edit Course</h3>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={editData.title}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Description:</label>
                <textarea
                  name="description"
                  value={editData.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Image URL:</label>
                <input
                  type="text"
                  name="image"
                  value={editData.image}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Videos Section */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">Videos:</label>
                {editData.videos.map((video, index) => (
                  <div key={index} className="mb-4">
                    <label className="block text-gray-600 font-semibold">Video {index + 1}</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Video Title"
                      value={video.title}
                      onChange={(e) => handleVideoChange(index, 'title', e.target.value)}
                      className="w-full border border-gray-300 p-2 rounded-lg mb-2"
                      required
                    />
                    <input
                      type="text"
                      name="url"
                      placeholder="Video URL"
                      value={video.url}
                      onChange={(e) => handleVideoChange(index, 'url', e.target.value)}
                      className="w-full border border-gray-300 p-2 rounded-lg mb-2"
                      required
                    />
                    <select
                      name="difficulty"
                      value={video.difficulty}
                      onChange={(e) => handleVideoChange(index, 'difficulty', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="Basic">Basic</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                ))}

                {/* Add Another Video Button */}
                <button
                  type="button"
                  onClick={handleAddVideo}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700 mt-4"
                >
                  <FaPlus className="mr-2" /> Add Another Video
                </button>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setEditingCourse(null)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

CourseList.propTypes = {
  fetchCourses: PropTypes.func,
  updateCourse: PropTypes.func,
  deleteCourse: PropTypes.func,
};

export default CourseList;
