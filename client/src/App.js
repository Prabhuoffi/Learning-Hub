import React, { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/user/pages/Navbar';
import Home from './components/user/pages/Home';
import Catalog from './components/user/pages/Catalog';
import About from './components/user/pages/About';
import Contact from './components/user/pages/Contact';
import Signin from './components/user/pages/Signin';
import Signup from './components/user/pages/Signup';
import CourseView from './components/user/pages/Courseview';
import ForgotPassword from './components/user/Forgetpassword';
import AdminDashboard from './components/admin/AdminDashboard';
import CourseList from './components/admin/CourseList';

function App() {
  const location = useLocation();

  // List of paths where Navbar should not be displayed
  const adminRoutes = ["/admindashboard", "/profile", "/courses", "/videos"];

  // Check if the current path is in the list of admin routes
  const hideNavbar = adminRoutes.includes(location.pathname);

  // State for managing courses
  const [courses, setCourses] = useState([]);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />         
        <Route path="/course/:id" element={<CourseView />} />

        {/* Admin routes */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route 
          path="/courses" 
          element={<CourseList courses={courses} setCourses={setCourses} />} 
        />
      </Routes>
    </>
  );
}

export default App;
