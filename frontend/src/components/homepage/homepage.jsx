import React from 'react'
import Navbar from '../navbar/navbar'
import './homepage.css'

const Homepage = () => {
  return(
    <div className='homepage-wrapper'>
      <Navbar />
      <div className='homepage-job-index-wrapper'>
        <h2>Jobs</h2>
      </div>
      <div className='homepage-job-button-wrapper'>
        <div className='homepage-job-buttons'>
          <button className='homepage-rj-button'>Request a Job</button>
          <button className='homepage-oj-button'>Offer a Job</button>
        </div>
      </div>
      <div className='homepage-job-offer-wrapper'>
        <h2>Offers</h2>
      </div>
    </div>
  )
}

export default Homepage