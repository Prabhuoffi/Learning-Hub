import React from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="bg-blue-600 text-white shadow-md p-4 flex justify-between items-center">
      <button onClick={toggleSidebar} className="lg:hidden p-2 rounded-md hover:bg-blue-700 transition-colors" aria-label="Open sidebar">
        <FaBars size={24} />
      </button>
      <h1 className="text-2xl font-bold flex-grow text-center">
        Welcome to the Admin Dashboard
      </h1>
      <div className="flex items-center">
        <Link 
          to="/profile" 
          className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          aria-label="Profile"
        >
          <FaUser size={24} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
