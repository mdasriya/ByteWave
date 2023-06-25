const express = require("express");
const { MernModel } = require("../models/mern.model");

// Create a router for MERN-related routes
const MernRouter = express.Router();

// Route to add a new question
MernRouter.post("/add", async (req, res) => {
  const payload = req.body;

  try {
    // Create a new instance of the MernModel with the payload data
    const question = new MernModel(payload);
    
    // Save the question to the database
    await question.save();

    res.status(200).send({ msg: "New question has been added to the database" });
  } catch (err) {
    res.status(404).send({ msg: "Not able to add the question" });
  }
});

// Route to retrieve a set of questions
MernRouter.get("/questions", async (req, res) => {
  try {
    // Retrieve all questions from the database
    const allQuestions = await MernModel.find();

    // Shuffle the array of questions randomly
    const shuffledQuestions = shuffleArray(allQuestions);

    // Select the first 5 questions (here, it is currently selecting only 1 question)
    const selectedQuestions = shuffledQuestions.slice(0, 1);

    res.json({ questions: selectedQuestions });
  } catch (error) {
    console.error("Error retrieving questions:", error);
    res.status(500).json({ error: "Failed to retrieve questions" });
  }
});

// Helper function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Export the MernRouter to be used in other files
module.exports = { MernRouter };
