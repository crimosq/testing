import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-section">
        <p className='footer-quote'>Embrace the power of our app and unlock the secrets of the universe, one quiz at a time. As I always say, 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.'</p>
        <div className="footer-links">
        <h2>Links</h2>
      <ul>
        <li>Home</li>
        <li>Quiz Generator</li>
        <li>Account</li>
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
