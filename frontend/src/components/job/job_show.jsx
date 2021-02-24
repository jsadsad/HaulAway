import React from 'react'

class JobShow extends React.Component {
  render() {
    return (
      <div className="job-show-outer">
        <div className="job-show-wrapper">
          <div className="job-show-header">
            <div className="job-show-poster">
              <h2>Job Poster</h2>
            </div>

            <div className="job-show-box">
              <input
                type="text"
                className="job-show-input-desc"
                placeholder="Description"
              />
            </div>

            <div className="job-show-box">
              <input
                type="text"
                className="job-show-input-diff"
                placeholder="Difficulty"
              />
            </div>
          </div>
          <div className="job-show-body">
            <div className="job-show-box">
              <input
                type="date"
                className="job-show-input-start"
                placeholder="Start Date"
              />
            </div>
            <div className="job-show-box">
              <input
                type="date"
                className="job-show-input-end"
                placeholder="End Date"
              />
            </div>
            <div className="job-show-box">
              <input
                type="text"
                className="job-show-input-pickup"
                placeholder="Pickup"
              />
            </div>
            <div className="job-show-box">
              <input
                type="text"
                className="job-show-input-dest"
                placeholder="Destination"
              />
            </div>
          </div>
          <div className="job-show-footer">
            <div className="job-show-map">
              <h2>Ill be a map</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JobShow;