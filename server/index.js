const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const { MernRouter } = require("./routes/mern.route");
const { NodeRouter } = require("./routes/node.route");
const { JavaRouter } = require("./routes/java.route");
const { userRouter } = require("./routes/user.route");
const { connection } = require("./configs/db");
const cors = require('cors');

// Create an instance of OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(express.json());
require("dotenv").config();
app.use(cors());

// Register the routers for different routes
app.use("/mern", MernRouter);
app.use("/node", NodeRouter);
app.use("/java", JavaRouter);
app.use("/user", userRouter);

// Endpoint to retrieve data using ChatGPT
app.post("/chatgpt/retrieve-data", (req, res) => {
  const { prompt } = req.body;

  // Create a completion using the OpenAI API
  openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1000,
    temperature: 0
  })
    .then((response) => {
      const data = response.data.choices[0].text.trim();
      res.json({ data });
    })
    .catch((error) => {
      console.log("Error:", error.message);
      res.status(500).json({ error: "An error occurred" });
    });
});

// Start the server
app.listen(process.env.PORT, async () => {

  try {
    // Connect to MongoDB
    await connection;
    console.log("Connected to MongoDB");

  } catch (err) {
    console.log("Not able to connect to MongoDB");
    console.log(err);
  }

  console.log(`Server is running on port ${process.env.PORT}`);
});
