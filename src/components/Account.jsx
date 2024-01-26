import React from 'react';
import './Account.css';

export default function Account() {
  return (
    <div className='account-page'>
        <h1>Welcome Back!</h1>
        <p>Take a look at your success</p>

        <div className="account-container">
        <i class="fa fa-camera-retro fa-3x"></i>
            <div className="account-box">
                <h2>Streak</h2>
                <p>You have a streak of 5 days!</p>
            </div>
            <div className="account-box">
            <i class="fa fa-camera-retro fa-3x"></i>
                <h2>Platinum Quizzes</h2>
                <p>Golang - intermediate</p>
                <p>Javascript - beginner</p>
                <p>AWS - beginner</p>
            </div>
            <div className="account-box">
            <i class="fa fa-camera-retro fa-3x"></i>
                <h2>lrnr Level: 2</h2>
                <p>150/200 xp</p>
            </div>
      </div>
    </div>
  )
}
