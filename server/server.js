const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoute');
const courseRoutes = require('./routes/courses');
const cors = require('cors');
require('dotenv').config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
