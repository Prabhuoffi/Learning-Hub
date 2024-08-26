const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  videos: [
    {
      title: { type: String, required: true },
      url: { type: String, required: true },
      difficulty: { type: String, enum: ['Basic', 'Advanced'], required: true },
    },
  ],
});

module.exports = mongoose.model('Course', courseSchema);
