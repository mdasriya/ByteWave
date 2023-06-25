const mongoose = require("mongoose");
require("dotenv").config();

// Establish connection to the MongoDB database
const connection = mongoose.connect(process.env.mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Export the database connection for use in other files
module.exports = { connection };
