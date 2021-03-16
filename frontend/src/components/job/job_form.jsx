import React from 'react'
import Autocomplete from 'react-google-autocomplete'
import Navbar from '../navbar/navbar_container'
import { GoogleApiWrapper, Map, Marker, Circle } from 'google-maps-react'
import { uploadPhotos } from '../../util/photo_api_util'
import './job_form.css'

class JobPostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      pickup: '',
      destination: '',
      jobDifficulty: '',
      jobType: 'request',
      jobStartDate: '',
      jobEndDate: '',
      mapPosition: {
        lat: 36.778259,
        lng: -119.417931,
      },
      markerPosition: {
        lat: undefined,
        lng: undefined,
      },
      pictures: [],
      selectedFile: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePhotoFile = this.handlePhotoFile.bind(this)
    this.onPickupSelected = this.onPickupSelected.bind(this)
    this.onDestinationSelected = this.onDestinationSelected.bind(this)
  }

  componentWilUnmount() {
    this.props.clearErrors()
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
          description: this.state.description,
          pickup: this.state.pickup,
          destination: this.state.destination,
          jobDifficulty: this.state.jobDifficulty,
          jobType: this.state.jobType,
          jobStartDate: this.state.jobStartDate,
          jobEndDate: this.state.jobEndDate,
          pictures: location,
        }
        this.props.processJobForm(job).then((payload) => {
          this.props.history.push(`/jobs/${payload.job.data._id}`)
        })
      })
    } else {
      let job = {
        description: this.state.description,
        pickup: this.state.pickup,
        destination: this.state.destination,
        jobDifficulty: this.state.jobDifficulty,
        jobType: this.state.jobType,
        jobStartDate: this.state.jobStartDate,
        jobEndDate: this.state.jobEndDate,
        pictures: this.state.pictures,
      }
      this.props.processJobForm(job).then((payload) => {
        this.props.history.push(`/jobs/${payload.job.data._id}`)
      })
    }
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
    const coords = this.state.mapPosition

    return (
      <div className="job-post-outer">
        <Navbar />
        <div className="job-post-container">
          <div className="job-post-form">
            <form onSubmit={this.handleSubmit} className="job-post-form-box">
              <div className="job-post-fields">
                <h2 className="job-post-text">Job Request</h2>
                <div className="job-post-input-box">
                  <textarea
                    className="job-post-input-desc"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleField('description')}
                  />
                  {this.props.errors.description}
                </div>
                <div>
                  <select
                    className="job-post-lvl-btn"
                    onChange={this.handleField('jobDifficulty')}
                    value={this.state.jobDifficulty}
                  >
                    <option value="" disabled defaultValue>
                      --Please Select Difficulty--
                    </option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <br />
                <div className="job-post-input-box">
                  <Autocomplete
                    onPlaceSelected={this.onPickupSelected}
                    className="job-post-input-pickup"
                    style={{ width: '40%' }}
                    types={['address']}
                    componentRestrictions={{ country: 'us' }}
                    placeholder="Pickup"
                  />
                </div>
                <br />
                <div className="job-post-input-box">
                  <Autocomplete
                    onPlaceSelected={this.onDestinationSelected}
                    className="job-post-input-dest"
                    style={{ width: '40%' }}
                    types={['address']}
                    componentRestrictions={{ country: 'us' }}
                    onChange={this.handleField('destination')}
                    placeholder="Destination"
                  />
                </div>
                <br />
                <div className="job-post-input-box">
                  <input
                    onChange={this.handleField('jobStartDate')}
                    type="date"
                    required
                    className="job-post-input-date"
                    value={this.state.jobStartDate}
                  />
                  {this.props.errors.jobStartDate}
                </div>
                <br />
                <div className="job-post-input-box">
                  <input
                    onChange={this.handleField('jobEndDate')}
                    type="date"
                    required
                    className="job-post-input-date2"
                    value={this.state.jobEndDate}
                  />
                  {this.props.errors.jobEndDate}
                </div>
                <br />
                <div className="job-post-input-box">
                  <label className="upload-photos-text">Upload Photos</label>
                  <br />
                  <input type="file" onChange={this.handlePhotoFile} multiple />
                </div>
                <button className="job-form-btn">Submit</button>
              </div>
              <br />
              <div className="job-form-google-map-container">
                <Map
                  className="job-form-map"
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
            </form>
            <div className="jobs-new-img-container">
              <img
                className="jobs-new-img"
                src="https://haul-seeds.s3-us-west-1.amazonaws.com/happy_help.jpeg"
                alt="Happy To Help"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQf1ahKg7gbuVHd9daHMMvm0zfPEpnBd8',
})(JobPostForm)
