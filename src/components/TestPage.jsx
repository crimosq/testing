import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { motion as m } from 'framer-motion';

const TestPage = () => {
  const location = useLocation();
  const { state: { generatedQuiz } = {} } = location || {};
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [gradingResult, setGradingResult] = useState(null);
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

    const questions = generatedQuiz.split("\n");

    try {
      const response = await axios.post('http://localhost:5000/gradeAnswers', {
        answers: Object.values(userAnswers),
        questions: questions
      });
      setGradingResult(response.data.gradingResult);
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
      {gradingResult && <div><h3>Grading Result</h3><p>{gradingResult}</p></div>}
    </div>
    </m.div>
  );
};

export default TestPage;

