import React from 'react'
import Navbar from '../navbar/navbar_container'
import './homepage.css'
import { withRouter } from 'react-router'

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    const { jobs } = this.props
    if (!jobs) return null
    let maxJobs = []

    if (jobs.length > 0 && jobs.length !== 4) {
      for (let i = 0; i < jobs.length; i++) {
        maxJobs = maxJobs.concat(jobs[i])
      }
    }

    const isAvailable = (
      <div>
        {maxJobs.map((job) => {
          return (
            <div
              key={job._id}
              className="homepage-job-index-items"
              onClick={() => this.props.history.push(`/jobs/${job._id}`)}
            >
              <div>Pickup: {job.pickup}</div>
              <div>Destination: {job.destination}</div>
              <div>Start Date: {job.jobStartDate}</div>
              <div>End Date: {job.jobEndDate}</div>
            </div>
          )
        })}
      </div>
    )

    return (
      <div className="homepage-wrapper">
        <Navbar />
        <div className="homepage-job-button-wrapper">
          <div className="homepage-img-wrapper">
            <img className="homepage-img" src="/box3.jpeg" />
          </div>
          <div className="homepage-job-buttons">
            <div className="homepage-job-buttons-header">
              Need help with your boxes?
            </div>
            <button
              onClick={() => this.props.history.push('/jobs/new')}
              className="homepage-rj-button"
            >
              Request a Job
            </button>
            <div className="homepage-job-index-header">
              Take a look what do we have
            </div>
            <button 
              onClick={() => this.props.history.push('/jobs')}
              className="homepage-lj-button">
              View All
            </button>
          </div>
        </div>
        {/* <div className="homepage-job-index-wrapper">
          <div className="homepage-job-index-header">
            <h2 className="homepage-looking-for-jobs">Looking for Jobs?</h2>
            <h2
              onClick={() => this.props.history.push('/jobs')}
              className="homepage-view-all"
            >
              View All
            </h2>
          </div>

          <div className="homepage-job-index">
            {jobs.length > 0 ? (
              <div>{isAvailable}</div>
            ) : (
              <h2 style={{ color: 'red' }}>No Jobs Currently Available...</h2>
            )}
          </div>
        </div> */}
      </div>
    )
  }
}

export default withRouter(Homepage)
