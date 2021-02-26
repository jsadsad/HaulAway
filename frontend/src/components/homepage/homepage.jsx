import React from 'react'
import Navbar from '../navbar/navbar_container'
import './homepage.css'
import { withRouter } from 'react-router'


class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    if(this.props.jobs.length === 0) {return null}

    let fourJobs = [];
    for(let i = 0; i < 4; i++) {
      fourJobs = fourJobs.concat(this.props.jobs[i])
    }

    console.log(fourJobs)
    
    return (
      <div className="homepage-wrapper">
        <Navbar />
        <div className="homepage-job-button-wrapper">
          <div className='homepage-img-wrapper'>
              <img className='homepage-img' src='/box3.jpeg'/>
          </div>
          <div className="homepage-job-buttons">
            <div className='homepage-job-buttons-header'>Need help with your boxes?</div>
            <button
              onClick={() => this.props.history.push('/jobs/new')}
              className="homepage-rj-button"
            >
              Request a Job
            </button>
            {/* <button className="homepage-oj-button">Offer a Job</button> */}
          </div>
        </div>
        <div className="homepage-job-index-wrapper">
          <div className="homepage-job-index-header">
            <h2>Looking for Jobs?</h2>
            <h2 onClick={() => this.props.history.push('/jobs')}className='homepage-view-all'>View All</h2>
          </div>
          <div className="homepage-job-index"> 
            {fourJobs.map(job => {
              if(job === undefined) return null;
              return (
                <div key={job._id} className="homepage-job-index-items"
                  onClick={() => this.props.history.push(`/jobs/${job._id}`)}>
                  <div>Pickup: {job.pickup}</div>
                  <div>Destination: {job.destination}</div>
                  <div>Start Date: {job.jobStartDate}</div>
                  <div>End Date: {job.jobEndDate}</div>
                </div>
                )
              })}
          </div>
        </div>
        {/* <div className="homepage-job-offer-wrapper"> */}
          {/* <h2>Offers</h2> */}
        {/* </div> */}
      </div>
    )
  }
}

export default withRouter(Homepage)
