const express = require("express");
const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

// POST route to register the user
userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const userPresent = await UserModel.findOne({ email });

    if (userPresent) {
      return res.status(200).json({ message: "User already exists, please login" });
    }

    // Hash the password before saving
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new UserModel({
      name,
      email,
      password: hashPassword,
    });

    // Save the new user
    await newUser.save();

    res.status(200).json({ message: "Register user successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST route to login the user
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user based on the email
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User is not registered yet" });
    }

    // Validate the password
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate the token
    const token = jwt.sign({ userID: user._id }, process.env.NormalToken, { expiresIn: '3h' });

    res.status(200).json({ message: "Login Successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = { userRouter };
