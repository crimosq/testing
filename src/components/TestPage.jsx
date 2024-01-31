import './TestPage.css';
import React from 'react';
import { useLocation } from 'react-router-dom';

const TestPage = () => {
  const location = useLocation();
  console.log('Location:', location);

  // Destructure the state property, providing a default value
  const { state: { generatedQuiz } = {} } = location || {};

  return (
    <div>
      <h2>Test Page</h2>
      {generatedQuiz ? (
        <div>
          <p>Generated quiz:</p>
          <pre>{generatedQuiz}</pre>
          {/* Render form elements for user answers */}
          {/* ... your form elements for answers ... */}
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