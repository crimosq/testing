import React from 'react';
import './HomePage.css';
// import ResultsPage from './ResultsPage';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';

export default function HomePage() {
  return (
    <m.div 
    initial= {{y: "100%", opacity: 0}} 
    animate= {{y: "0%", opacity: 1}} 
    transition={{duration: 0.75, ease: "easeOut"}}
    >
      <div className="homepage-top">
        <h1>Your guided path to <span>programming enlightenment</span></h1>
        <Link to="/quizPage"><button>Begin Learning</button></Link>
      </div>

      <div className="container">
        <m.div 
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        className="box box-color1">
          <h2>Personalized Quizzes</h2>
          <i class="fa fa-bolt fa-3x"></i>
          <p>Greetings, young padawan. Are you ready to embark on a journey of personalized enlightenment through the art of coding? Our app, can create custom quizzes that align with your coding skills and interests. Whether you are a novice or a master, our system can generate questions that will test your proficiency in programming languages, tools, and concepts!</p>
        </m.div>
        <m.div 
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        className="box box-color2">
          <h2>Rewarding</h2>
          <i class="fa fa-star fa-3x"></i>
          <p>Our app is designed to be both challenging and rewarding, so you can learn new concepts while enjoying the process. With our personalized quiz app, you can track your progress, compete with your peers, and discover new areas of expertise. The journey of a thousand lines of code begins with a single keystroke!</p>
        </m.div>
        <m.div 
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        className="box box-color3">
          <h2>Personal SME</h2>
          <i class="fa fa-user-circle fa-3x"></i>
          <p>Welcome to the path of knowledge. Our app is like having a personal subject matter expert at your side, guiding you on your journey towards wisdom!</p>
        </m.div>
      </div>

    </m.div>
  )
}
