const express = require('express');
const router = express.Router();
const {
  getAllCourses,
  addNewCourse,
  updateCourse,
  deleteCourse,
  getCourseById
} = require('../controllers/courseController');

// Get all courses
router.get('/', getAllCourses);

// Add a new course
router.post('/', addNewCourse);

// Update a course
router.put('/:id', updateCourse);

// Delete a course
router.delete('/:id', deleteCourse);

router.get('/:id', getCourseById);

module.exports = router;
