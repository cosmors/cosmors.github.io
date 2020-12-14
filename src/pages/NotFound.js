import React from 'react'
import Header from '../components/Header'

class NotFound extends React.Component {
  render() {
    return (
      <div className="page-not-found">
        <Header />
        <div className="container">
          <h1>Page Not Found</h1>
        </div>
      </div>
    )
  }
}

export default NotFound;
