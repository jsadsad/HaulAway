import React from 'react'
import Navbar from '../navbar/navbar_container'
import Autocomplete from 'react-google-autocomplete'
import { uploadPhotos } from '../../util/photo_api_util'
import './job_edit.css'

import { GoogleApiWrapper, Map, Marker, Circle } from 'google-maps-react'

class JobEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // description: this.props.job,
      // pickup: this.props.job,
      // destination: this.props.job,
      // jobDifficulty: this.props.job,
      // jobType: 'request',
      // jobStartDate: this.props.job,
      // jobEndDate: this.props.job,
      mapPosition: {
        lat: 36.778259,
        lng: -119.417931,
      },
      markerPosition: {
        lat: undefined,
        lng: undefined,
      },
      pictures: this.props.job,
      selectedFile: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePhotoFile = this.handlePhotoFile.bind(this)
    this.onPickupSelected = this.onPickupSelected.bind(this)
    this.onDestinationSelected = this.onDestinationSelected.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.fetchJob(this.props.match.params.jobId).then(() => {
      this.setState({
        // description: this.props.job ? this.props.job.description : '',
        // pickup: this.props.job ? this.props.job.pickup : '',
        // destination: this.props.job ? this.props.job.destination : '',
        // jobDifficulty: this.props.job ? this.props.job.jobDifficulty : '',
        // jobStartDate: this.props.job ? this.props.job.jobStartDate : '',
        // // jobEndDate: this.props.job ? this.props.job.jobEndDate : '',
        // // jobType: this.props.job ? this.props.job.jobType : '',
        // // pictures: this.props.job ? this.props.job.pictures : [],
      })
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.selectedFile) {
      const newData = new FormData()
      for (let i = 0; i < this.state.selectedFile.length; i++) {
        newData.append('file', this.state.selectedFile[i])
      }
      uploadPhotos(newData).then((res) => {
        let data = Object.values(res.data.Data)
        let location = []
        for (let i = 0; i < data.length; i++) {
          location = location.concat(data[i].Location)
        }
        let job = {
          _id: this.props.jobId,
          description: this.state.description,
          pickup: this.state.pickup,
          destination: this.state.destination,
          jobDifficulty: this.state.jobDifficulty,
          jobType: this.state.jobType,
          jobStartDate: this.state.jobStartDate,
          jobEndDate: this.state.jobEndDate,
          pictures: location,
        }
        this.props.updateJob(job).then((payload) => {
          this.props.history.push(`/jobs/${payload.job.data._id}`)
        })
      })
    } else {
      let job = {
        _id: this.props.jobId,
        description: this.state.description,
        pickup: this.state.pickup,
        destination: this.state.destination,
        jobDifficulty: this.state.jobDifficulty,
        jobType: this.state.jobType,
        jobStartDate: this.state.jobStartDate,
        jobEndDate: this.state.jobEndDate,
        pictures: this.state.pictures,
      }
      this.props.updateJob(job).then((payload) => {
        this.props.history.push(`/jobs/${payload.job.data._id}`)
      })
    }
  }

  handleDelete(e) {
    e.preventDefault()
    this.props
      .deleteJob(this.props.jobId)
      .then(this.props.history.push(`/jobs`))
  }

  handlePhotoFile(e) {
    e.preventDefault()
    this.setState({
      selectedFile: e.target.files,
    })
  }

  handleField(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  onPickupSelected(place) {
    const address = place.formatted_address

    this.setState({
      pickup: address ? address : '',
    })
  }

  onDestinationSelected(place) {
    const address = place.formatted_address,
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng()
    this.setState({
      destination: address ? address : '',
      markerPosition: {
        lat: latValue,
        lng: lngValue,
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue,
      },
    })
  }

  render() {
    if (!this.props.job) return null

    const { job } = this.props
    const coords = this.state.mapPosition

    return (
      <div className="job-edit-outer">
        <Navbar />
        <div className="job-edit-container">
          <div className="job-edit-form">
            <form onSubmit={this.handleSubmit} className="job-edit-form-box">
              <div className="job-edit-fields">
                <h2 className="job-edit-text">Job Edit</h2>
                <div className="job-edit-input-box">
                  <textarea
                    className="job-edit-input-desc"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleField('description')}
                  />
                  {this.props.errors.description}
                </div>
                <br />
                <div className="job-edit-input-box">
                  <input
                    type="file"
                    className="job-edit-upload-btn"
                    multiple
                    onChange={this.handlePhotoFile}
                  />
                </div>
                <br />
                <div className="job-edit-input-box">
                  <div className="job-edit-lvl-btn">
                    <label className="job-edit-text">Choose difficulty</label>
                    <select
                      onChange={this.handleField('jobDifficulty')}
                      value={this.state.jobDifficulty}
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="job-edit-input-box">
                  <Autocomplete
                    onPlaceSelected={this.onPickupSelected}
                    className="job-edit-input-pickup"
                    style={{ width: '25%' }}
                    types={['address']}
                    componentRestrictions={{ country: 'us' }}
                    placeholder={job.pickup}
                  />
                  {this.props.errors.pickup}
                </div>
                <br />
                <div className="job-edit-input-box">
                  <Autocomplete
                    onPlaceSelected={this.onDestinationSelected}
                    className="job-edit-input-dest"
                    style={{ width: '25%' }}
                    types={['address']}
                    componentRestrictions={{ country: 'us' }}
                    onChange={this.handleField('destination')}
                    placeholder={job.destination}
                  />
                  {this.props.errors.destination}
                </div>
                <br />
                <div className="job-edit-input-box">
                  <input
                    required
                    onChange={this.handleField('jobStartDate')}
                    type="date"
                    className="job-edit-input-date"
                    value={job.jobStartDate}
                  />
                  {this.props.errors.jobStartDate}
                </div>
                <br />
                <div className="job-edit-input-box">
                  <input
                    required
                    onChange={this.handleField('jobEndDate')}
                    type="date"
                    className="job-edit-input-date2"
                    value={job.jobEndDate}
                  />
                  {this.props.errors.jobEndDate}
                </div>
                <br />
                <div className="job-edit-btn-container">
                  <button>Submit</button>
                  <button onClick={this.handleDelete}>Delete</button>
                </div>
                <br />
              </div>
              <br />
              <div className="job-edit-google-map-container">
                <Map
                  className="job-edit-map"
                  zoom={12}
                  google={this.props.google}
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
                    fillOpacity={0.2}
                  />
                </Map>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQf1ahKg7gbuVHd9daHMMvm0zfPEpnBd8',
})(JobEdit)
