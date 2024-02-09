require('dotenv').config();
const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
<<<<<<< HEAD
require('dotenv').config(); // Load environment variables from .env file
const apiKey = process.env.API_KEY; // Access the API key from environment variables
const openai = new OpenAI({ apiKey }); // Pass the API key to OpenAI constructor
=======
const apiKey = process.env.OPENAI_API_KEY; // Access the API key from environment variables
const openai = new OpenAI({ apiKey }); // Pass the API key to OpenAI constructor

>>>>>>> refs/remotes/origin/main
app.use(cors());
app.use(bodyParser.json());
app.post('/QuizPage', async (req, res) => {
  try {
    const { language, difficulty, number, type } = req.body;
    console.log('Received form data:', { language, difficulty, number, type });
    const completion = await openai.chat.completions.create({
      messages: [
<<<<<<< HEAD
        { role: 'system', content: `You are quiz generator with the personality of ${type}.
        Include refrence to your of your personality in your everyday life. Expect the quiz
        taker to have ${difficulty} level of understanding. Generate a ${number} quiz on ${language}. Do not
        include the answer in your response nor any multiple choice.
        Format your reposonse like this:
        DO NOT INCLUDE ANY INTRUCTIONS IN YOUR RESPONSE.
        1. sentence based on your personality. question...
        2. sentence based on your personality. question...
        etc.
        DO NOT PUT TEXT DOWN HERE OR BELOW. ONLY PUT THE QUESTIONS` }
=======

        { role: 'system', 
        content: `You are quiz generator with the personality of ${type}. 
        Include refrence to your of your personality in your everyday life. Expect the quiz 
        taker to have ${difficulty} level of understanding. Generate a ${number} quiz on ${language}. Do not 
        include the answer in your response nor any multiple choice. 
        
        Format your reposonse like this: 
        DO NOT INCLUDE ANY INTRUCTIONS IN YOUR RESPONSE.
        1. sentence based on your personality. question...
        2. sentence based on your personality. question...
        etc. 
        DO NOT INCLUDE ANY SPACES BETWEEN QUESTIONS` }

>>>>>>> refs/remotes/origin/main
      ],
      model: 'gpt-3.5-turbo',
      response_format: { type: 'text' },
    });
<<<<<<< HEAD
    const generatedQuiz = completion.choices[0].message.content;
=======


    const generatedQuiz = completion.choices[0].message.content.trim("");
>>>>>>> refs/remotes/origin/main
    console.log(`Generated quiz: ${generatedQuiz}`);
    res.send(generatedQuiz);
  } catch (error) {
    console.error('Error in /QuizPage:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
<<<<<<< HEAD
app.post('/gradeAnswers', async (req, res) => {
  try {
    const { answers, questions } = req.body;
    let gradingScript = questions.map((question, index) => {
      return {
        role: "system",
        content: `Evaluate the following answer given from the question: "${question}" and the student's answer:
        "${answers[index]}".`
      };
    });

    gradingScript.unshift({role: "system", content: "As an AI designed for educational purposes, your role is to grade student answers in a way that encourages learning and development. Your feedback should be positive and constructive."});

=======

app.post("/gradeAnswers", async (req, res) => {
  try {
    const {answers, questions} = req.body;
    console.log(questions, answers['0'])
    const conversation = [
      {
        role: "system",
        content:
          "As an AI designed for educational purposes, your role is to grade student answers in a way that encourages learning and development. Your feedback should be positive and constructive.",
      },
      {
        role: "system",
        content: `Evaluate the following answer given from the question: "${questions}" and the student's answer: "${answers}". Provide feedback that is no longer than 6 sentences. Answers should be graded on accuracy. Do not take spelling or grammar into account. Also provide a score from 0% - 100%, where 0% represents the lowest and 100% represents the highest score.`,
      },
      {
        role: "user",
        content: answers,
      },
    ];
>>>>>>> refs/remotes/origin/main
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: conversation,
      max_tokens: 3510,
      });
      console.log(completion.choices[0].message.content)
	const gradingResults = completion.choices[0].message.content;
	console.log(gradingResults);
	res.json({gradingResult: gradingResults});

<<<<<<< HEAD
    // Extract the information from the completion
    const generatedMessageContent = completion.choices[0].message.content;

    // Assuming the response contains a comma to separate correctness and explanation
    const [correctness, explanation] = generatedMessageContent.split(',');

    res.json({ correctness, explanation });
=======
>>>>>>> refs/remotes/origin/main
  } catch (error) {
    console.error("Error in /gradeAnswers:", error);
    res.status(500).json({error: "Internal Server Error"});
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});