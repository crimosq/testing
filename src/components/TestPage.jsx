import './TestPage.css';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const TestPage = () => {
  const location = useLocation();
  console.log('Location:', location);

  // Destructure the state property, providing a default value
  const { state: { generatedQuiz } = {} } = location || {};

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const totalQuestions = generatedQuiz ? generatedQuiz.split('\n').length : 0;

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

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitAnswers = (e) => {
    e.preventDefault();
    // Process and submit user answers here
    console.log('User Answers:', userAnswers);
  };

  if (!location) {
    return <p>No location found.</p>;
  }

  return (
    <div>
      <h2>Test Page</h2>
      {generatedQuiz ? (
        <div>
          <form onSubmit={handleSubmitAnswers}>
            <p>Question {currentQuestionIndex + 1}</p>
            <p>{generatedQuiz.split('\n')[currentQuestionIndex]}</p>
            <input
              type="text"
              name="answer"
              value={userAnswers[currentQuestionIndex] || ''}
              onChange={handleInputChange}
            />
            <div>
              <button type="button" onClick={handlePreviousQuestion}>
                Previous
              </button>
              {currentQuestionIndex < totalQuestions - 1 ? (
                <button type="button" onClick={handleNextQuestion}>
                  Next
                </button>
              ) : (
                <button type="submit">Submit Answers</button>
              )}
            </div>
          </form>
        </div>
      ) : (
        <p>No quiz generated.</p>
      )}
    </div>
  );
};

export default TestPage;
 

// import './TestPage.css';
// import React from 'react';

// const TestPage = ({ location }) => {
//   console.log('Location:', location);
//   // Destructure the state property, providing a default value
//   const { state: { generatedQuiz } = {} } = location || {};

//   return (
//     <div>
//       <h2>Test Page</h2>
//       {generatedQuiz && (
//         <div>
//           <p>Generated quiz:</p>
//           <pre>{generatedQuiz}</pre>
//           {/* Render form elements for user answers */}
//           {/* ... your form elements for answers ... */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TestPage;