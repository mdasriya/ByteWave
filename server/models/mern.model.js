const mongoose = require("mongoose");

// Define the MernSchema for the MERN questions
const MernSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  }
});

// Create the MernModel using the MernSchema
const MernModel = mongoose.model("MernQuestion", MernSchema);

// Export the MernModel to be used in other files
module.exports = { MernModel };
