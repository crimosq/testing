import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-section">
        <p className='footer-quote'>Embrace the power of our app and unlock the secrets of the universe, one quiz at a time. As I always say, 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.'</p>
        <div className="footer-links">
        <h2>Links</h2>
      <ul>
        <li><Link style={{textDecoration: 'none', color: '#fff'}} to="/">Home</Link></li>
        <li><Link style={{textDecoration: 'none', color: '#fff'}} to="/QuizPage">Quiz Generator</Link></li>
        <li><Link style={{textDecoration: 'none', color: '#fff'}} to="/Account">Account</Link></li>    
      </ul>
      </div>
      </div>
    <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
    </div>
    </div>
  )
}
