import React, { useState } from 'react';
import axios from 'axios';
import { FaPlus, FaTrash } from 'react-icons/fa';

const AddCourseForm = ({ refreshCourses }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [videos, setVideos] = useState([{ title: '', url: '', difficulty: 'Basic' }]);

  const handleAddVideo = () => {
    setVideos([...videos, { title: '', url: '', difficulty: 'Basic' }]);
  };

  const handleVideoChange = (index, field, value) => {
    const updatedVideos = [...videos];
    updatedVideos[index][field] = value;
    setVideos(updatedVideos);
  };

  const handleRemoveVideo = (index) => {
    const updatedVideos = videos.filter((_, i) => i !== index);
    setVideos(updatedVideos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseData = { title, description, image, videos };
    
    try {
      await axios.post('http://localhost:5000/api/courses', courseData);
      if (typeof refreshCourses === 'function') {
        refreshCourses();  // Call the function passed as a prop
      }
      setTitle('');
      setDescription('');
      setImage('');
      setVideos([{ title: '', url: '', difficulty: 'Basic' }]);
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Course Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Videos</label>
        {videos.map((video, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <input
                  type="text"
                  placeholder="Video Title"
                  value={video.title}
                  onChange={(e) => handleVideoChange(index, 'title', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Video URL"
                  value={video.url}
                  onChange={(e) => handleVideoChange(index, 'url', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mb-4">
              <select
                value={video.difficulty}
                onChange={(e) => handleVideoChange(index, 'difficulty', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Basic">Basic</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => handleRemoveVideo(index)}
              className="flex items-center text-red-500 hover:text-red-700"
            >
              <FaTrash className="mr-2" /> Remove Video
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddVideo}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700"
        >
          <FaPlus className="mr-2" /> Add Another Video
        </button>
      </div>

      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700"
      >
        Add Course
      </button>
    </form>
  );
};

export default AddCourseForm;
