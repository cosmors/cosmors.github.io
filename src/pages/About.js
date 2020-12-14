import React, { Component } from 'react'
import Header from '../components/Header';

export class About extends Component {
  render() {
    return (
      <div className="about">
        <Header />
        <div className="container">
          <h1>About Page</h1>
        </div>
      </div>
    )
  }
}

export default About;

