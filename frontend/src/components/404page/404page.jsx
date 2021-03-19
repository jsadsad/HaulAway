import React from 'react'
import { Link } from 'react-router-dom'
import './404page.css'

class FourOFour extends React.Component {
  render() {
    return (
      <div className="page404">
        {/* <h3 className="page404-not-found">404 Page Not Found</h3> */}
        <h2>Oops! Page not found.</h2>
        <h1>404</h1>
        <p>We can't find the page you're looking for.</p>
        {/* <div className="page404-link-container"><Link className="page404-link-back" to="/">Back</Link></div> */}
        <Link className="page404-link-back" to="/homepage">Go back home</Link>
      </div>
    )
  }
}

export default FourOFour