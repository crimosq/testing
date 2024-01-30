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
                    <option value="" disabled></option>
                    <option value="golang">Golang</option>
                    <option value="aws">AWS</option>
                    <option value="javascript">JavaScript</option>
                    <option value="ci/cd">CI/CD</option>
                    <option value="home gardens">Home gardens</option>
                    <option value="coffee">Coffee</option>
                    <option value="finger foods">Finger Foods</option>
                </select>
            </div>
            <div>
                <label for="difficulty">Choose a difficulty level:</label>
                <select id="difficulty" name="difficulty">
                    <option value="" disabled></option>
                    <option value="novice">Novice</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="expert">Expert</option>
                </select>
            </div>
            <div>
                <label for="number">Choose number of questions:</label>
                <select type="number" id="number" name="number">
                    <option value="" disabled></option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
            <div>
                <label for="type">Choose question style:</label>
                <select id="type" name="type">
                    <option value="" disabled></option>
                    <option value="master oogway">Master Oogway</option>
                    <option value="1940s Gangster">1940s Gangster</option>
                    <option value="Like I'm an 8 year old">Like I'm an 8 year old</option>
                    <option value="Normal">Normal</option>
                    <option value="Jedi">Jedi</option>
                    <option value="Captain Jack Sparrow">Captain Jack Sparrow</option>
                    <option value="Matthew McConaughey">Matthew McConaughey</option>
                </select>
            </div>
            <button type="submit">Generate Quiz</button>
          </form>
    </div>
  );
};

export default QuizPage;
