const mongoose = require("mongoose");

// Define the JavaSchema for the Java questions
const JavaSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  }
});

// Create the JavaModel using the JavaSchema
const JavaModel = mongoose.model("JavaQuestion", JavaSchema);

// Export the JavaModel to be used in other files
module.exports = { JavaModel };
