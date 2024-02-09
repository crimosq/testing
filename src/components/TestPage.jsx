import React, { useState } from "react";
import "./TestPage.css";
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
    const questions = generatedQuiz.split(/\d+\.\s+/).filter(Boolean);
    try {
      const response = await axios.post('http://localhost:5000/gradeAnswers', {
        answers: Object.values(userAnswers),
        questions: questions
      });

      // Update to handle the new response structure
      setGradingResult(response.data.correctness);
      // Assuming you want to log the explanation in the console
      console.log("Explanation:", response.data.explanation);
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
    <div className="test-page">
      <m.h1
          initial= {{x: "-100%"}}
          animate= {{x: "0%"}}
          transition={{duration: 0.75, ease: "easeOut"}}
      >Ready, set, GO!</m.h1>
      {generatedQuiz ? (
        <div>
          <form onSubmit={handleSubmitAnswers}>
            <p className="question-number">Question {currentQuestionIndex + 1}</p>
            <p className="question">{generatedQuiz.split("\n")[currentQuestionIndex]}</p>
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
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      ) : (
        <p>No quiz generated.</p>
      )}
      {gradingResult &&
      <div>
        <h3>Grading Evaluation</h3>
        <p className="graded-result">{gradingResult}</p>
      </div>}
    </div>
    </m.div>
  );
};
export default TestPage;
