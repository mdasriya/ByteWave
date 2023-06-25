const express = require("express");
const { JavaModel } = require("../models/java.model");

// Create a router for Java-related routes
const JavaRouter = express.Router();

// Route to add a new question
JavaRouter.post("/add", async (req, res) => {
  const payload = req.body;

  try {
    // Create a new instance of the JavaModel with the payload data
    const question = new JavaModel(payload);
    
    // Save the question to the database
    await question.save();

    res.status(200).send({ msg: "New question has been added to the database" });
  } catch (err) {
    res.status(404).send({ msg: "Not able to add the question" });
  }
});

// Route to retrieve a set of questions
JavaRouter.get("/questions", async (req, res) => {
  try {
    // Retrieve all questions from the database
    const allQuestions = await JavaModel.find();

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

// Export the JavaRouter to be used in other files
module.exports = { JavaRouter };
