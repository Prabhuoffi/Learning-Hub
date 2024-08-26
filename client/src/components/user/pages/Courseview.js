import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { FaPlayCircle, FaVideo } from 'react-icons/fa';

const CourseView = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/${id}`);
        setCourse(response.data);
      } catch (err) {
        setError('Error fetching course details.');
        console.error('Error fetching course:', err);
      }
    };

    fetchCourse();
  }, [id]);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-lg text-gray-600">Loading course details...</div>
      </div>
    );
  }

  const { title, description, videos } = course;
  const basicVideos = videos.filter((video) => video.difficulty === 'Basic');
  const advancedVideos = videos.filter((video) => video.difficulty === 'Advanced');

  return (
    <div className="container mx-auto py-10 px-4 md:px-8 lg:px-12">
      <div className="text-center mt-20 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">{title}</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">{description}</p>
        <div className="flex justify-center items-center space-x-4 text-blue-500">
          <FaVideo className="text-3xl md:text-4xl" />
          <h2 className="text-2xl md:text-3xl font-semibold">Explore the Course</h2>
        </div>
      </div>

      <div className="space-y-12">
        {/* Basic Videos Section */}
        {basicVideos.length > 0 && (
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 flex justify-center items-center space-x-2">
                <FaPlayCircle className="text-blue-600" />
                <span>Basic Videos</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {basicVideos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 relative group border border-gray-200"
                >
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-all bg-gradient-to-r from-blue-500 via-transparent to-blue-500"></div>
                  <div className="relative z-10 p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{video.title}</h3>
                    <div className="relative rounded-lg overflow-hidden border border-gray-300">
                      <ReactPlayer
                        width="100%"
                        height="250px"
                        url={video.url}
                        controls={true}
                        config={{
                          youtube: {
                            playerVars: { origin: window.location.origin }
                          }
                        }}
                        className="transition-transform transform hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Advanced Videos Section */}
        {advancedVideos.length > 0 && (
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 flex justify-center items-center space-x-2">
                <FaPlayCircle className="text-blue-600" />
                <span>Advanced Videos</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedVideos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 relative group border border-gray-200"
                >
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-all bg-gradient-to-r from-blue-500 via-transparent to-blue-500"></div>
                  <div className="relative z-10 p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{video.title}</h3>
                    <div className="relative rounded-lg overflow-hidden border border-gray-300">
                      <ReactPlayer
                        width="100%"
                        height="250px"
                        url={video.url}
                        controls={true}
                        config={{
                          youtube: {
                            playerVars: { origin: window.location.origin }
                          }
                        }}
                        className="transition-transform transform hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CourseView;
