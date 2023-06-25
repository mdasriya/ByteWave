const mongoose = require("mongoose");

// Define the UserSchema for user data
const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role:{
    type:String,
    default:"User",
    enum:["User","Admin"]
  }
});

// Create the UserModel using the UserSchema
const UserModel = mongoose.model("user", UserSchema);

// Export the UserModel to be used in other files
module.exports = { UserModel };
