const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize OpenAI with your API key
const openai = new OpenAI({ apiKey: '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' });

app.use(cors());
app.use(bodyParser.json());

app.post('/QuizPage', async (req, res) => {
  try {
    const { language, difficulty, number, type } = req.body;
    console.log('Received form data:', { language, difficulty, number, type });

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: `Create a series of ${number} open-ended ${difficulty} difficulty questions on ${language} programming, focusing on ${type} aspects. The questions should engage critical thinking and understanding.` }
      ],
      model: 'gpt-3.5-turbo',
      response_format: { type: 'text' },
    });

    const generatedQuiz = completion.choices[0].message.content;
    console.log(`Generated quiz: ${generatedQuiz}`);

    res.send(generatedQuiz);
  } catch (error) {
    console.error('Error in /QuizPage:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/gradeAnswers', async (req, res) => {
  try {
    const { answers, questions } = req.body;
    let gradingScript = questions.map((question, index) => {
      return {
        role: "system",
        content: `Evaluate the following answer given the question: "${question}" and the student's answer: "${answers[index]}". Provide feedback that is constructive and supportive, aimed at fostering learning and improvement. Highlight what was done well and areas for growth, rather than focusing solely on correctness.`
      };
    });

    gradingScript.unshift({role: "system", content: "As an AI designed for educational purposes, your role is to grade student answers in a way that encourages learning and development. Your feedback should be positive, highlighting strengths and gently suggesting improvements for any inaccuracies or areas lacking depth."});

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: gradingScript,
    });

    const generatedMessageContent = completion.choices[0].message.content;

    res.json({ gradingResult: generatedMessageContent });
  } catch (error) {
    console.error('Error in /gradeAnswers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
