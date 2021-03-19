import React from 'react'
import Navbar from '../navbar/navbar_container'
import Loader from '../Loader/loader'
import { withRouter } from 'react-router'
import './job_index.css'

class JobIndex extends React.Component {
  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    const { jobs } = this.props

    if (!jobs) return <Loader />

    return (
      <div className="job-index-wrapper">
        <Navbar />
        <div className="job-index-header">
          <h1>Available Jobs</h1>
        </div>
        <div className="job-index-item-wrapper">
          {jobs.map((job) => {
            if (job.jobType === 'request') {
              return (
                <div
                  key={job._id}
                  className="job-index-item"
                  onClick={() => {
                    this.props.history.push(`/jobs/${job._id}`)
                  }}
                >
                  <div className="job-it-image-wrapper">
                    <img
                      className="user-image"
                      src={job.pictures[0]}
                      alt={job.title}
                    />
                  </div>
                  <div className="job-it-text-wrapper">
                    <div>
                      <label className="job-index-label">Difficulty: </label>
                      <span className="job-index-value">
                        {job.jobDifficulty.toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <label className="job-index-label">Price: </label>
                      <span className="job-index-value">{job.price}</span>
                    </div>
                    <div>
                      <label className="job-index-label">Distance: </label>
                      <span className="job-index-value">
                        {job.distance} miles
                      </span>
                    </div>
                    <div>
                      <label className="job-index-label">Pickup: </label>
                      <span className="job-index-value">{job.pickup}</span>
                    </div>
                    <div>
                      <label className="job-index-label">Destination: </label>
                      <span className="job-index-value">{job.destination}</span>
                    </div>
                    <div>
                      <label className="job-index-label">Start Date: </label>
                      <span className="job-index-value">
                        {job.jobStartDate}
                      </span>
                    </div>
                    <div>
                      <label className="job-index-label">End Date: </label>
                      <span className="job-index-value">{job.jobEndDate}</span>
                    </div>

                    {/* <div>{job.jobDifficulty.toUpperCase()}</div>
                    <div>Destination: {job.destination}</div>
                    <div>Pick-up location: {job.pickup}</div>
                    <div>Start date: {job.jobStartDate}</div>
                    <div>End date: {job.jobEndDate}</div> */}
                  </div>
                </div>
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export default withRouter(JobIndex)
