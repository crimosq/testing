import React, { useState } from 'react';
import './QuizPage.css';

const QuizPage = () => {
  const [formData, setFormData] = useState({
    language: 'python',
    difficulty: 'easy',
    number: 1,
    type: 'multiple',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('http://localhost:5000/QuizPage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch quiz data');
      }

      const responseData = await response.json();
      console.log(responseData); // Log or use the data as needed
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      // Handle errors as needed
    }
  };
  return (
    <div className='quiz-page'>
        <h1>Personalize Your Quiz</h1>
        <p>Please choose your preferences below to generate your personalized quiz</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label for="language">Choose a programming topic:</label>
                <select id="language" name="language" onChange={handleInputChange}>
  <option value="python">Python</option>
  <option value="javascript">JavaScript</option>
  <option value="java">Java</option>
  <option value="c">C</option>
</select>
            </div>
            <div>
                <label for="difficulty">Choose a difficulty level:</label>
                <select id="difficulty" name="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div>
                <label for="number">Choose number of questions:</label>
                <input type="number" id="number" name="number" min="1" max="10" />
            </div>
            <div>
                <label for="type">Choose question style:</label>
                <select id="type" name="type">
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True/False</option>
                </select>
            </div>
            <button type="submit">Generate Quiz</button>
          </form>
    </div>
  );
};

export default QuizPage;






















// import React, { useState } from 'react';
// import axios from 'axios'; // Import axios library
// import './QuizPage.css';

// export default function QuizPage() {
//   const [quizData, setQuizData] = useState({
//     language: 'python',
//     difficulty: 'easy',
//     number: 5,
//     type: 'multiple',
//   });
//   const [generatedQuiz, setGeneratedQuiz] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setQuizData({ ...quizData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         'https://api.openai.com/v1/chat/completions',
//         {
//           model: 'gpt-3.5-turbo',
//           messages: [{ role: 'user', content: 'Say this is a test!' }],
//           temperature: 0.7,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer sk-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',
//           },
//         }
//       );

//       setGeneratedQuiz(response.data.choices[0].text);
//     } catch (error) {
//       console.error('Error making API request:', error);
//     }
//   };

//   return (
//     <div className='quiz-page'>
//       {generatedQuiz ? (
//         <div>
//           <h2>Generated Quiz</h2>
//           <pre>{generatedQuiz}</pre>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="language">Choose a programming topic:</label>
//             <select id="language" name="language" onChange={handleChange}>
//               <option value="python">Python</option>
//               <option value="javascript">JavaScript</option>
//               <option value="java">Java</option>
//               <option value="c">C</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="difficulty">Choose a difficulty level:</label>
//             <select id="difficulty" name="difficulty" onChange={handleChange}>
//               <option value="easy">Easy</option>
//               <option value="medium">Medium</option>
//               <option value="hard">Hard</option>
//             </select>
//           </div>
//           <div>
//             <label htmlFor="number">Choose number of questions:</label>
//             <input type="number" id="number" name="number" min="1" max="10" onChange={handleChange} />
//           </div>
//           <div>
//             <label htmlFor="type">Choose question style:</label>
//             <select id="type" name="type" onChange={handleChange}>
//               <option value="multiple">Multiple Choice</option>
//               <option value="boolean">True/False</option>
//             </select>
//           </div>
//           <button type="submit">Generate Quiz</button>
//         </form>
//       )}
//     </div>
//   );
// }




































// import React, { useState } from 'react';
// import axios from 'axios';
// import './QuizPage.css';

// export default function QuizPage() {
//   const [quizData, setQuizData] = useState({
//     language: 'python',
//     difficulty: 'easy',
//     number: 5,
//     type: 'multiple',
//   });
//   const [generatedQuiz, setGeneratedQuiz] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setQuizData({ ...quizData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//         const response = await axios.post(
//             'https://api.openai.com/v1/engines/davinci-codex/completions',
//             {
//               prompt: `Generate a quiz on ${quizData.language} with difficulty level ${quizData.difficulty} containing ${quizData.number} ${quizData.type} questions.`,
//               max_tokens: 150,
//             },
//             {
//               headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer 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',
//               },
//             }
//           );
          
//       // Handle the response from ChatGPT (e.g., set generated quiz in state)
//       setGeneratedQuiz(response.data.quiz);
//     } catch (error) {
//       console.error('Error making API request:', error);
//     }
//   };

//   return (
//     <div className='quiz-page'>
//       {generatedQuiz ? (
//         <div>
//           <h2>Generated Quiz</h2>
//           {/* Display the generated quiz here */}
//           <pre>{JSON.stringify(generatedQuiz, null, 2)}</pre>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//          <div>
//                 <label for="language">Choose a programming topic:</label>
//                 <select id="language" name="language">
//                     <option value="python">Python</option>
//                     <option value="javascript">JavaScript</option>
//                     <option value="java">Java</option>
//                     <option value="c">C</option>
//                 </select>
//             </div>
//             <div>
//                 <label for="difficulty">Choose a difficulty level:</label>
//                 <select id="difficulty" name="difficulty">
//                     <option value="easy">Easy</option>
//                     <option value="medium">Medium</option>
//                     <option value="hard">Hard</option>
//                 </select>
//             </div>
//             <div>
//                 <label for="number">Choose number of questions:</label>
//                 <input type="number" id="number" name="number" min="1" max="10" />
//             </div>
//             <div>
//                 <label for="type">Choose question style:</label>
//                 <select id="type" name="type">
//                     <option value="multiple">Multiple Choice</option>
//                     <option value="boolean">True/False</option>
//                 </select>
//             </div>
//           <button type="submit">Generate Quiz</button>
//         </form>
//       )}
//     </div>
//   );
// }































// import React from 'react';
// import './QuizPage.css';

// export default function QuizPage() {
//   return (
//     <div className='quiz-page'>
//         <h1>Personalize Your Quiz</h1>
//         <p>Please choose your preferences below to generate your personalized quiz</p>
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label for="language">Choose a programming topic:</label>
//                 <select id="language" name="language">
//                     <option value="python">Python</option>
//                     <option value="javascript">JavaScript</option>
//                     <option value="java">Java</option>
//                     <option value="c">C</option>
//                 </select>
//             </div>
//             <div>
//                 <label for="difficulty">Choose a difficulty level:</label>
//                 <select id="difficulty" name="difficulty">
//                     <option value="easy">Easy</option>
//                     <option value="medium">Medium</option>
//                     <option value="hard">Hard</option>
//                 </select>
//             </div>
//             <div>
//                 <label for="number">Choose number of questions:</label>
//                 <input type="number" id="number" name="number" min="1" max="10" />
//             </div>
//             <div>
//                 <label for="type">Choose question style:</label>
//                 <select id="type" name="type">
//                     <option value="multiple">Multiple Choice</option>
//                     <option value="boolean">True/False</option>
//                 </select>
//             </div>
//             <button type="submit">Generate Quiz</button>
//             </form>
//     </div>
//   )
// }



// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());

// app.post('/QuizPage', async (req, res) => {
//   const apiUrl = 'https://api.openai.com/v1/chat/completions';

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer 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',
//       },
//       body: JSON.stringify(req.body),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch quiz data');
//     }

//     const responseData = await response.json();
    
//     // Extract relevant information from the API response
//     const generatedQuiz = responseData.choices[0].text;

//     // Send the extracted information back to the React app
//     res.json({ generatedQuiz });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
