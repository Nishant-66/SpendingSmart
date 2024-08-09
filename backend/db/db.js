const mongoose = require('mongoose'); // Import the Mongoose library for MongoDB interaction

// Define an asynchronous function to connect to the database
const db = async () => {
    try {
        // Attempt to connect to the MongoDB database using the connection URL from environment variables
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Db Connected'); // Log a message indicating successful connection
    } catch (error) {
        // Catch and log any errors that occur during the connection attempt
        console.log('DB Connection Error:', error); // Include the error message in the log
    }
}

// Export the db function to be used in other modules
module.exports = { db };
