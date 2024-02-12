import React, { useEffect, useState } from "react";
import "./TestPage.css";
import { useLocation, Link } from "react-router-dom";
import axios from 'axios';
import { motion as m } from 'framer-motion';
import ClipLoader from "react-spinners/ClipLoader";

  const TestPage = () => {//
  const location = useLocation();
  const { state: { generatedQuiz } = {} } = location || {};
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState('');
  const [gradingResult, setGradingResult] = useState(null);
  const [submittedLastQuestion, setSubmittedLastQuestion] = useState(false);

  const questions = generatedQuiz ? generatedQuiz.trim().split(/\d+\.\s+/).filter(Boolean) : [];
  const totalQuestions = questions.length;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleInputChange = (e) => {
    setUserAnswers(e.target.value);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswers('');
      setGradingResult(null);

    }
  };

  const handleSubmitAnswers = async (e) => {
    e.preventDefault();
    console.log("User Answers:", userAnswers);
    try {
      const response = await axios.post('http://localhost:5000/gradeAnswers', {
        answers: userAnswers,
        questions: questions[currentQuestionIndex]
      });
        
      setGradingResult(response.data.gradingResult);
      if (currentQuestionIndex === totalQuestions - 1) {
        setSubmittedLastQuestion(true);
      }
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
  };

  const handleFinishTest = () => {
    // You might want to perform any final actions here before navigating, such as submitting the last answer
    // For simplicity, let's assume we just navigate directly
    // Perhaps you want to do something with the gradingResult or other state before navigating
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
    <div className="test-page">
      <m.h1
          initial= {{x: "-100%"}} 
          animate= {{x: "0%"}} 
          transition={{duration: 0.75, ease: "easeOut"}}
      >Ready, set, GO!</m.h1>
      {generatedQuiz ? (
        <div>
        {
        loading ?
        <ClipLoader 
        size={150}
        color={"#063661"}
        loading={loading}
         />
        :
          <form onSubmit={handleSubmitAnswers}>
            <p className="question-number">Question {currentQuestionIndex + 1}</p>
            <p className="question">{questions[currentQuestionIndex]}</p>
            <input
              type="text"
              name="answer"
              value={userAnswers}
              onChange={handleInputChange}
            />
            <div>
            <button type="submit">Submit</button>
              {currentQuestionIndex < totalQuestions - 1 && (
                <button type="button" onClick={handleNextQuestion}>
                  Next
                </button>
              )}
                {submittedLastQuestion && (
                  <Link to="/results">
                    <button type="button" onClick={handleFinishTest}>Finish Test</button>
                  </Link>
                )}
            </div>
          </form>
  }
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
