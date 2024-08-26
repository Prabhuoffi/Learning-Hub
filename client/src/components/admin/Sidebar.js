import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook,FaTimes, FaUserCircle } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 w-64 bg-blue-600 text-white shadow-lg`}
    >
      <div className="flex flex-col h-full">
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 mt-4 border-b border-blue-700">
          <div className="flex items-center space-x-2">
            <FaUserCircle size={32} />
            <h2 className="text-xl font-bold">Admin Dashboard</h2>
          </div>
          <button className="lg:hidden" onClick={toggleSidebar} aria-label="Close sidebar">
            <FaTimes size={24} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 mt-8 p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                to="/admindashboard" 
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <FaHome size={20} />
                <span className="font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/courses" 
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <FaBook size={20} />
                <span className="font-medium">Courses</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
