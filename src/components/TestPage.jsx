import React, { useEffect, useState } from "react";
import "./TestPage.css";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { motion as m } from 'framer-motion';
import ClipLoader from "react-spinners/ClipLoader";

  const TestPage = () => {
  const location = useLocation();
  const { state: { generatedQuiz } = {} } = location || {};
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState('');
  const [gradingResult, setGradingResult] = useState(null);
  const totalQuestions = generatedQuiz ? generatedQuiz.split("\n").length : 0;
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

    const questions = generatedQuiz.split(/\d+\.\s+/).filter(Boolean);

    try {
      const response = await axios.post('http://localhost:5000/gradeAnswers', {
        answers: userAnswers,
        questions: questions[currentQuestionIndex]
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
            {/* <p className="question-number">Question {currentQuestionIndex + 1}</p> */}
            <p className="question">{generatedQuiz.split("\n")[currentQuestionIndex]}</p>
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

