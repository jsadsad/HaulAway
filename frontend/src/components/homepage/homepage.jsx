import React from 'react'
import Navbar from '../navbar/navbar_container'
import './homepage.css'
import { withRouter } from 'react-router'


class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchJobs()
  }
  render() {
    if(!this.props.jobs) {return null}

    let fourJobs = [];
    for(let i = 0; i < 4; i++) {
      fourJobs = fourJobs.concat(this.props.jobs[i])
    }
    
    return (
      <div className="homepage-wrapper">
        <Navbar />
        <div className="homepage-job-button-wrapper">
          <div className='homepage-img-wrapper'>
              <img className='homepage-img' src='/box3.jpeg'/>
          </div>
          <div className="homepage-job-buttons">
            {/* <div className='homepage-job-buttons-header'>Need help with your boxes?</div> */}
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
          <h2>Jobs</h2>
          <div> 
            {/* {fourJobs.map(job => {
              return (
                <div>
                <div>Pickup: {job.pickup}</div>
                <div>Destination: {job.destination}</div>
                <div>Start Date: {job.jobStartDate}</div>
                <div>End Date: {job.jobEndDate}</div>
                </div>
                )
              })} */}
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
