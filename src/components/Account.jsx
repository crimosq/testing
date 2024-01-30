import React from 'react';
import './Account.css';

export default function Account() {
  return (
    <div className='account-page'>
        <div className="account-container">
        <div className="level-box">
                <i class="fa-solid fa-circle-notch fa-8x"></i>
                <h2>lrnr Level:</h2>
                <span>2</span>
                <p>150/200 xp</p>
                <p className='note'>Supercharge your progress by diving into more quizzes to boost XP!</p>
            </div>
            <div className="stacked-account-container">
            <h1>Welcome Back!</h1>
            <p className='account-title'>Take a look at your success</p>
            <div className="streak-box">
            <i class="fa-solid fa-fire fa-4x"></i>
                <h2>Streak</h2>
                <p>You have a streak of <span>5</span> days!</p>
            </div>
            <div className="platinum-box">
            <i class="fa-solid fa-certificate fa-4x"></i>
                <h2>Platinum Quizzes</h2>
                <ul>
                  <li>Golang - Intermediate</li>
                  <li>Javascript - Beginner</li>
                  <li>AWS - Beginner</li>
                </ul>
            </div>
            </div>
      </div>
    </div>
  )
}
