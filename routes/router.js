const express = require("express"); // Import the Express framework
const { home } = require("../controller/home_controller"); // Import the home controller
const router = express.Router(); // Create an instance of the Express router
const multer = require("multer"); // Import Multer for handling file uploads
const fileController = require("../controller/file_controller"); // Import the file controller

// Create a Multer middleware instance with a destination for uploaded files
const upload = multer({ dest: "uploads/files" });

// Define routes and associated controller functions
router.get("/", home); // Route for the home page, using the home controller's function

// Route for handling file uploads via POST request
router.post("/upload", upload.single("file"), fileController.upload);

// Route for deleting files by ID, with a dynamic parameter ":id"
router.get("/delete/:id", fileController.delete);

// Route for viewing files by ID, with a dynamic parameter ":id"
router.get("/view/:id", fileController.view);

module.exports = router; // Export the router for use in other parts of the application
