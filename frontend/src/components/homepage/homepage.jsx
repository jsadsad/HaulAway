import React from 'react'
import Navbar from '../navbar/navbar_container'
import './homepage.css'
import { Link } from 'react-router-dom';


const Homepage = () => {
  return(
    <div className='homepage-wrapper'>
      <Navbar />
      <div className='homepage-job-index-wrapper'>
        <h2 className="homepage-jobs-title">Jobs</h2>
        <Link className="homepage-explore-jobs-link" to="/jobs"><h4 className="homepage-explore-jobs-sent">Explore all available</h4></Link>
      </div>
      <div className='homepage-job-button-wrapper'>
        <div className='homepage-job-buttons'>
          <Link className="homepage-request-link" to="/job/new"><button className='homepage-rj-button'>Request a Job</button></Link>
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