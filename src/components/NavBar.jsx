import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import Logo from './lrnrlogo.png';


class NavBar extends Component {

  state = { clicked: false };
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
  return (
    <div className="navbar">
      <nav>
        <div className="nav-logo">
        <img src={Logo} alt="LRNR logo" />
        </div>

          <ul className="nav-menu">
              <li><Link style={{textDecoration: 'none', color: '#fff'}} to="/">Home</Link></li>
              <li><Link style={{textDecoration: 'none', color: '#fff'}} to="/QuizPage">Quiz</Link></li>
              <li><Link style={{textDecoration: 'none', color: '#fff'}} to="/Account">Account</Link></li>    
          </ul>
      </nav>
      <div className="mobile-navbar" onClick={this.handleClick}>
      <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
    </div>
    </div>

  );
}
}

export default NavBar;
