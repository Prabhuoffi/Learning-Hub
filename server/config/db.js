const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
           
        });

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = dbconnect;
