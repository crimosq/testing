import React from 'react';
import './Account.css';
import { motion as m } from 'framer-motion';

export default function Account() {
  return (
    <m.div 
    transition={{duration: 0.75, ease: "easeOut"}}
    >
    <div className='account-page'>
        <div className="account-container">
        <m.div 
              initial= {{y: "100%", opacity: 0}} 
              animate= {{y: "0%", opacity: 1}} 
        className="level-box">
                <i class="fa-solid fa-circle-notch fa-8x"></i>
                <m.h2>lrnr Level:</m.h2>
                <span>2</span>
                <p>150/200 xp</p>
                <p className='note'>Supercharge your progress by diving into more quizzes to boost XP!</p>
            </m.div>
            <div className="stacked-account-container">
            <m.h1 
                initial= {{y: "100%", opacity: 0}} 
                animate= {{y: "0%", opacity: 1}} 
            >Welcome Back!</m.h1>
            <m.p 
                initial= {{x: "100%", opacity: 0}} 
                animate= {{x: "0%", opacity: 1}} 
            className='account-title'>Take a look at your success</m.p>
            <m.div 
              initial= {{x: "100%", opacity: 0}} 
              animate= {{x: "0%", opacity: 1}} 
            className="streak-box">
            <i class="fa-solid fa-fire fa-4x"></i>
                <h2>Streak</h2>
                <p>You have a streak of <span>5</span> days!</p>
            </m.div>
            <m.div 
              initial= {{x: "100%", opacity: 0}} 
              animate= {{x: "0%", opacity: 1}} 
              className="platinum-box">
            <i class="fa-solid fa-certificate fa-4x"></i>
                <h2>Platinum Quizzes</h2>
                <ul>
                  <li>Golang - Intermediate</li>
                  <li>Javascript - Beginner</li>
                  <li>AWS - Beginner</li>
                </ul>
            </m.div>
            </div>
      </div>
    </div>
    </m.div>
  )
}
