import React from 'react';
import './ResultsPage.css';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import logo from './lrnrlogo.png';

export default function ResultsPage() {
  return (
    <m.div 
    initial= {{y: "100%", opacity: 0}} 
    animate= {{y: "0%", opacity: 1}} 
    transition={{duration: 0.75, ease: "easeOut"}}
    >
      <h1 className="results-title">Your <span>lrnr</span> Quiz Results!</h1>
            <div className="results">
                <h2>Score: 5/5</h2>
                <p>Great job! You got all the questions right!</p>
                <Link to="/QuizPage"><button>TRY ANOTHER QUIZ</button></Link>
                <img src={logo} alt="logo" />
            </div>
    </m.div>
  )
}
