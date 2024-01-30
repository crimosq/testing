const express = require('express');
const OpenAI = require('openai');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;


const openai = new OpenAI({apiKey:'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'});

app.use(cors());
app.use(bodyParser.json());

app.post('/QuizPage', async (req, res) => {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  console.log(req.body);

  const completion = await openai.chat.completions.create({
    messages: [{"role": "system", "content": "You are a quiz assistant."},
        {"role": "user", "content": `create a quiz based on ${req.body}`},
      ],
    model: "gpt-3.5-turbo",
    response_format: {type:'text'},
  });

  res.write(JSON.stringify(completion.choices[0].message.content));

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});







