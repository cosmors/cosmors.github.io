import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <reader className="header">
        <h1 className="title">Full Stack <span>Developer</span></h1>
        <nav className="nav">
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </reader>
    );
  };
}

export default Header;