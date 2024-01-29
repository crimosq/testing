import React from 'react';
import './QuizPage.css';

export default function QuizPage() {
  return (
    <div className='quiz-page'>
        <h1>Personalize Your Quiz</h1>
        <p>Please choose your preferences below to generate your personalized quiz</p>
        <form>
            <div>
                <label for="language">Choose a programming topic:</label>
                <select id="language" name="language">
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
            <button>Generate Quiz</button>
            </form>
    </div>
  )
}


