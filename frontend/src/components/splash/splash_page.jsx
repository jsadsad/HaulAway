import React from 'react'
import './splash.css'
import { Link } from 'react-router-dom'


const SplashPage = () => {
  return (
    <div className="splash-page">
      <div className="splash-body">
        <img
          className="splash-background"
          src="https://haul-seeds.s3-us-west-1.amazonaws.com/ha-1.jpg"
          alt="background"
        />
        <div className="splash-text-wrap">
          <h1 className="splash-haulaway-text-logo">HaulAway</h1>
          <h2 className="splash-slogan">Hauling Reinvented</h2>
          <h4 className="splash-little-motivation">
            [ Technology for Humans, by Humans ]
          </h4>
          <div className="splash-session-buttons">
            <div className="splash-signup-wrap">
              <button className="splash-signup-button">
                <Link className="splash-signup-link" to={'/signup'}>
                  SIGNUP
                </Link>
              </button>
            </div>
            <div className="splash-login-wrap">
              <button className="splash-login-button">
                <Link className="splash-login-link" to={'/login'}>
                  LOGIN
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="center-pixel"></div>
      </div>
      <div className="splash-about-us-container">
        <Link className="splash-about-us-link" to="/about">About Us</Link>
      </div>
    </div>
  )
}

export default SplashPage
