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
    console.log(formData)
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














