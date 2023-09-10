const mongoose = require("mongoose"); // Import the Mongoose library for MongoDB connectivity

// Connect to the MongoDB database using the provided connection string
mongoose.connect(
  "mongodb+srv://surajkumar72501:Suraj3211@cluster0.lcp8rjr.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection; // Get the default Mongoose connection object

// When the MongoDB connection is opened, log a success message
db.once("open", () => {
  console.log("Successfully connected to MongoDB");
});

// When there is an error in connecting to MongoDB, log an error message
db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));

module.exports = db; // Export the Mongoose connection object for use in other parts of the application
