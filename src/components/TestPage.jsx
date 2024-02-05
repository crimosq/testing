import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { motion as m } from 'framer-motion';
import './TestPage.css';

const TestPage = () => {
  const location = useLocation();
  const { state: { generatedQuiz } = {} } = location || {};
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [gradingResults, setGradingResults] = useState(null); // Update state to hold gradingResults

  const totalQuestions = generatedQuiz ? generatedQuiz.split("\n").length : 0;

  const handleInputChange = (e) => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestionIndex]: e.target.value,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmitAnswers = async (e) => {
    e.preventDefault();
    console.log("User Answers:", userAnswers);

    const questions = generatedQuiz.split(";");

    try {
      const response = await axios.post('http://localhost:5000/gradeAnswers', {
        answers: Object.values(userAnswers),
        questions: questions
      });

      // Update state with gradingResults
      setGradingResults(response.data.gradingResults);

      // Log the answer to the first question
      console.log("Answer to the first question:", response.data.gradingResults[0][1]);
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
  };

  return (
    <m.div 
    initial= {{opacity: 0}} 
    animate= {{opacity: 1}} 
    transition={{duration: 0.75, ease: "easeOut"}}
    >
    <div>
      <h2>Test Page</h2>
      {generatedQuiz ? (
        <div>
          <form onSubmit={handleSubmitAnswers}>
            <p>Question {currentQuestionIndex + 1}</p>
            <p>{generatedQuiz.split("\n")[currentQuestionIndex]}</p>
            <input
              type="text"
              name="answer"
              value={userAnswers[currentQuestionIndex] || ""}
              onChange={handleInputChange}
            />
            <div>
              {currentQuestionIndex < totalQuestions - 1 && (
                <button type="button" onClick={handleNextQuestion}>
                  Next
                </button>
              )}
              <button type="submit">Submit Answers</button>
            </div>
          </form>
        </div>
      ) : (
        <p>No quiz generated.</p>
      )}
      {gradingResults && (
  <div>
    <h3>Grading Result</h3>
    <p>{gradingResults[0]}</p> {/* Display the answer to the first question */}
  </div>
)}
    </div>
    </m.div>
  );
};

export default TestPage;
