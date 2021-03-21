import React from 'react'
import Navbar from '../navbar/navbar_container'
import './job_show.css'
import { Link, withRouter } from 'react-router-dom'
import { GoogleApiWrapper, Map, Marker, Circle } from 'google-maps-react'
import Geocode from 'react-geocode'
import Loader from '../Loader/loader'
Geocode.setApiKey('AIzaSyBQf1ahKg7gbuVHd9daHMMvm0zfPEpnBd8')

class JobShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isChanged: false,
      mapPosition: {
        lat: 36.778259,
        lng: -119.417931,
      },
      markerPosition: {
        lat: undefined,
        lng: undefined,
      },
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchJob(this.props.jobId).then(() => {
      this.getCoords()
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isChanged !== prevState.isChanged) {
      this.props.fetchJob(this.props.jobId).then(this.setState({}))
    }
  }

  getCoords() {
    Geocode.fromAddress(this.props.job.destination).then((res) => {
      const { lat, lng } = res.results[0].geometry.location
      this.setState({
        markerPosition: {
          lat: lat,
          lng: lng,
        },
        mapPosition: {
          lat: lat,
          lng: lng,
        },
      })
    })
  }

  handleClick(action, e) {
    e.preventDefault()

    let updatedJob = this.props.job
    if (action === 'takeJob') {
      updatedJob.jobTaker = this.props.currentUserId
      updatedJob.isAvailable = false
    } else if (action === 'leaveJob') {
      updatedJob.jobTaker = ''
      updatedJob.isAvailable = true
    } else if (action === 'closeJob') {
      updatedJob.isClosed = true
    } else if (action === 'openJob') {
      updatedJob.isClosed = false
    } else if (action === 'noReviewJob') {
      updatedJob.reviews.push(this.props.currentUserId)
    }

    this.props.updateJob(updatedJob).then(
      this.setState({
        isChanged: !this.state.isChanged,
      })
    )
  }

  editJobButton() {
    const job = this.props.job

    if (
      job.jobPoster._id === this.props.currentUserId &&
      !job.isClosed &&
      job.isAvailable
    ) {
      return (
        <button
          onClick={() => this.props.history.push(`/jobs/edit/${job._id}`)}
          className="edit-job-button"
        >
          Edit Job
        </button>
      )
    }
  }

  takeJobButton() {
    const job = this.props.job

    if (job.jobPoster._id !== this.props.currentUserId && job.isAvailable) {
      return (
        <button
          className="take-job-button"
          onClick={(e) => this.handleClick('takeJob', e)}
        >
          Take Job
        </button>
      )
    }
  }

  leaveJobButton() {
    const job = this.props.job

    if (job.jobTaker === this.props.currentUserId && !job.isClosed) {
      return (
        <button
          className="leave-job-button"
          onClick={(e) => this.handleClick('leaveJob', e)}
        >
          Leave Job
        </button>
      )
    }
  }

  closeJobButton() {
    const job = this.props.job
    if (!job.jobPoster) return null

    if (
      job.jobPoster._id === this.props.currentUserId &&
      !job.isAvailable &&
      !job.isClosed
    ) {
      return (
        <button
          className="close-job-button"
          onClick={(e) => this.handleClick('closeJob', e)}
        >
          Close Job
        </button>
      )
    }
  }

  reviewJobButtons() {
    const job = this.props.job
    if (!job.reviews.includes(this.props.currentUserId)) {
      if (
        (job.jobPoster._id === this.props.currentUserId ||
          job.jobTaker === this.props.currentUserId) &&
        job.isClosed
      ) {
        return (
          <div className="review-job-buttons">
            <div className="review-buttons-title">
              Would you like to review this transaction?
            </div>
            <div className="review-job-buttons-inner-wrap">
              <Link to={`/jobs/${job._id}/review`} job={job}>
                <button className="yes-review-button">YES</button>
              </Link>
              <button
                className="no-review-button"
                onClick={(e) => this.handleClick('noReviewJob', e)}
              >
                NO
              </button>
            </div>
          </div>
        )
      }
    }
  }

  openJobButtontestPurposes() {
    const job = this.props.job

    if (
      job.jobPoster._id === this.props.currentUserId &&
      job.isClosed &&
      !job.reviews === []
    ) {
      return (
        <button
          className="test-reopen-job"
          onClick={(e) => this.handleClick('openJob', e)}
        >
          Re-Open Job
        </button>
      )
    }
  }

  jobPictures() {
    const job = this.props.job
    if (job.pictures.length === 0) {
      return <div className="color-one">No pictures for this job</div>
    } else {
      job.pictures.map((picture, idx) => {
        return (
          <div className="job-show-single-picture-wrap" key={idx}>
            <img className="job-show-picture" src={picture} alt="job-picture" />
          </div>
        )
      })
    }
  }

  render() {
    const job = this.props.job
    const coords = this.state.mapPosition
    if (!job) return <Loader />

    return (
      <div className="job-show-outer">
        <Navbar />
        <div className="job-show-body-wrapper">
          <div className="job-show-body-inner-wrapper">
            <div className="job-show-info-left-side">
              <div className="job-show-info-wrapper">
                <div className="job-show-poster color-one">
                  Haul requested by:{' '}
                  <Link
                    to={`/users/${job.jobPoster._id}`}
                    className="job-poster-link color-two"
                  >
                    {job.jobPoster.firstName}
                  </Link>
                </div>
                <div className="job-show-description-title color-one">
                  Job Description:
                </div>
                <div className="job-show-description color-two">
                  {job.description}
                </div>
                <div className="job-show-difficulty-title color-one">
                  Difficulty:&nbsp;&nbsp;
                  <div className="job-show-difficulty color-two">
                    {job.jobDifficulty.toUpperCase()}
                  </div>
                </div>
                <div className="job-show-start-end-title color-one">
                  This job will be available:
                </div>
                <div className="job-show-two-objects-wrap">
                  <div className="job-show-start-title color-one">
                    from&nbsp;
                  </div>
                  <div className="job-show-start-date color-two">
                    &nbsp;{job.jobStartDate}&nbsp;
                  </div>
                  <div className="job-show-end-title color-one">
                    &nbsp;to&nbsp;
                  </div>
                  <div className="job-show-end-date color-two">
                    &nbsp;{job.jobEndDate}
                  </div>
                </div>
                <div className="job-show-pickup-title color-one">
                  Pickup at:
                  <div className="job-show-pickup color-two">{job.pickup}</div>
                </div>
                <div className="job-show-delivery-title color-one">
                  Delivery at:
                  <div className="job-show-destination color-two">
                    {job.destination}
                  </div>
                </div>
                <div className="job-show-two-objects-wrap">
                  <div className="job-show-distance-title color-one">
                    Distance:&nbsp;&nbsp;
                  </div>
                  <div className="job-show-distance color-two">
                    {job.distance} miles
                  </div>
                </div>
                <div className="job-show-two-objects-wrap">
                  <div className="job-show-price-title color-one">
                    This job pays:&nbsp;&nbsp;
                  </div>
                  <div className="job-show-price color-two">$ {job.price}</div>
                </div>
              </div>

              <div className="job-show-buttons-wrapper">
                <div className="take-job-button-wrap">
                  {this.takeJobButton()}
                </div>
                <div className="leave-job-button-wrap">
                  {this.leaveJobButton()}
                </div>
                <div className="edit-job-button-wrap">
                  {this.editJobButton()}
                </div>
                <div className="close-job-button-wrap">
                  {this.closeJobButton()}
                </div>
                <div className="review-job-buttons-wrap">
                  {this.reviewJobButtons()}
                </div>
                <div className="re-open-job-button-wrap">
                  {this.openJobButtontestPurposes()}
                </div>
              </div>
            </div>

            <div className="job-show-info-right-side">
              <div className="job-show-map-container color-one">
                Destination:
                <Map
                  className="job-show-map"
                  zoom={12}
                  google={this.props.google}
                  initialCenter={{
                    lat: 36.778259,
                    lng: -119.417931,
                  }}
                  center={{
                    lat: this.state.mapPosition.lat,
                    lng: this.state.mapPosition.lng,
                  }}
                >
                  <Marker
                    draggable={true}
                    position={{
                      lat: this.state.markerPosition.lat,
                      lng: this.state.markerPosition.lng,
                    }}
                  />
                  <Circle
                    radius={2400}
                    center={coords}
                    strokeColor="transparent"
                    strokeOpacity={0}
                    strokeWeight={5}
                    fillColor="#FF0000"
                    fillOpacity={0.3}
                  />
                </Map>
              </div>

              <div className="job-show-pictures-title color-one">
                Items to Haul:
              </div>
              <div className="job-show-pictures-wrap">
                {job.pictures.map((picture, idx) => {
                  return (
                    <div className="job-show-single-picture-wrap" key={idx}>
                      <img
                        className="job-show-picture"
                        src={picture}
                        alt="job-picture"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="job-show-footer"></div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQf1ahKg7gbuVHd9daHMMvm0zfPEpnBd8',
})(JobShow)
