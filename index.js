// Import required modules and libraries
const express = require("express"); // Import the Express framework
const PORT = 8000; // Define the port number for the server
const router = require("./routes/router"); // Import the router module
const db = require("./config/mongodb"); // Import the MongoDB configuration
const path = require("path"); // Import the path module
const expressLayouts = require("express-ejs-layouts"); // Import Express EJS layouts
const bodyParser = require("body-parser"); // Import the body-parser middleware

const app = express(); // Create an Express application

// Serve static files from the "assets" directory
app.use(express.static("./assets"));

// Use the router for handling routes
app.use(router);

// Serve static JavaScript files from the "js" directory
app.use(express.static("js"));

// Set the view engine to EJS (Embedded JavaScript)
app.set("view engine", "ejs");

// Set the views directory to the "views" folder in the current directory
app.set("views", path.join(__dirname, "views"));

// Start the server and listen on the specified port
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  // Log a message indicating that the server is running
  console.log(`server is running on port ${PORT}`);
});
