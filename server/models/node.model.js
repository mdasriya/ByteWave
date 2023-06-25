const mongoose = require("mongoose");

// Define the NodeSchema for the Node.js questions
const NodeSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  }
});

// Create the NodeModel using the NodeSchema
const NodeModel = mongoose.model("NodeQuestion", NodeSchema);

// Export the NodeModel to be used in other files
module.exports = { NodeModel };
