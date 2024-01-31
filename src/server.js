const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const openai = new OpenAI({ apiKey: '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' });

app.use(cors());
app.use(bodyParser.json());

app.post('/QuizPage', async (req, res) => {
  try {
    const { language, difficulty, number, type } = req.body;

    console.log('Received form data:', { language, difficulty, number, type });

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a quiz assistant.' },
        { "role": "user", "content": `Generate open ended questions based on ${language} programming with difficulty level ${difficulty}, 
        ${number} questions, and the style of questions depending on ${type}. Please provide ${number} questions for the quiz. 
        The question should not be multiple choice.` }
      ],
      model: 'gpt-3.5-turbo',
      response_format: { type: 'text' },
    });

    const generatedQuiz = completion.choices.message.content;
    console.log(`Generated quiz: ${generatedQuiz}`);

    res.send(generatedQuiz);
  } catch (error) {
    console.error('Error in /QuizPage:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});











