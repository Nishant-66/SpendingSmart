const express = require('express'); // Import the Express library
const cors = require('cors');       // Import the CORS middleware to handle cross-origin requests
const { db } = require('./db/db');  // Import the database connection function from your db module
const app = express();              // Create an instance of an Express application
const transaction=require('./routes/transaction'); 
require('dotenv').config();         // Load environment variables from a .env file

const PORT = process.env.PORT;      // Get the port number from environment variables

// Middleware configuration
app.use(express.json());            // Parse incoming requests with JSON payloads
app.use(cors());                    // Enable Cross-Origin Resource Sharing (CORS) for the application
app.use("/api/v1",transaction)
// Function to start the server
const server = () => {
    db(); // Connect to the database
    app.listen(PORT, () => { // Start the server and listen on the specified port
        console.log('listening to port:', PORT); // Log a message indicating the server is running
    });
}

// Call the server function to start the application
server();
