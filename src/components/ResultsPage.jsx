import React from 'react';
import './ResultsPage.css';
import { Link } from 'react-router-dom';
import logo from './lrnrlogo.png';

export default function ResultsPage() {
  return (
    <div>
      <h1 className="results-title">Your <span>lrnr</span> Quiz Results!</h1>
            <div className="results">
                <h2>Score: 5/5</h2>
                <p>Great job! You got all the questions right!</p>
                <button>TRY ANOTHER QUIZ</button>
                <img src={logo} alt="logo" />
            </div>
    </div>
  )
}
