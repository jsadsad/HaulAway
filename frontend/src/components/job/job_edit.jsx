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
      description: '',
      pickup: '',
      destination: '',
      jobDifficulty: '',
      jobType: 'request',
      jobStartDate: '',
      jobEndDate: '',
      mapPosition: {
        lat: '',
        lng: '',
      },
      markerPosition: {
        lat: '',
        lng: '',
      },
      pictures: [],
      selectedFile: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePhotoFile = this.handlePhotoFile.bind(this)
    this.onPickupSelected = this.onPickupSelected.bind(this)
    this.onDestinationSelected = this.onDestinationSelected.bind(this)
  }

  componentDidMount() {
    this.props.fetchJob(this.props.match.params.jobId)
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
        this.props.updateJob(job).then((payload) => {
          this.props.history.push(`/job/${payload.job.data._id}`)
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
      this.props.updateJob(job).then((payload) => {
        this.props.history.push(`/job/${payload.job.data._id}`)
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
    if (!this.props.job) return null
    const coords = this.state.mapPosition

    return (
      <div className="job-edit-outer">
        {/* <h2>Outer</h2> */}
        <Navbar />
        <div className="job-edit-container">
          {/* <h1>Container</h1> */}
          <div className="job-edit-form">
            {/* <h1>Form</h1> */}
            <form onSubmit={this.handleSubmit} className="job-edit-form-box">
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
                  <label>Choose difficulty</label>
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
                  placeholder="Pickup"
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
                  placeholder="Destination"
                />
                {this.props.errors.destination}
              </div>
              <br />
              <div className="job-edit-input-box">
                <input
                  onChange={this.handleField('jobStartDate')}
                  type="date"
                  className="job-edit-input-date"
                  placeholder="Start date"
                  value={this.state.jobStartDate}
                />
                {this.props.errors.jobStartDate}
              </div>
              <br />
              <div className="job-edit-input-box">
                <input
                  onChange={this.handleField('jobEndDate')}
                  type="date"
                  className="job-edit-input-date2"
                  placeholder="End date"
                  value={this.state.jobEndDate}
                />
                {this.props.errors.jobEndDate}
              </div>
              <br />
              <button className="job-edit-btn">Submit</button>
              <br />
              <br />
            </form>
          </div>
        </div>
        <br />
        <div className="splash-footer">
          <div className="splash-footer-wrapper">
            <div className="thank-you">Thank you for your visit</div>
            <div className="splash-footer-info">
              <div className="engineerd-by">Engineerd with love by:</div>
              <div className="info-us">
                <a
                  className="contact"
                  href="https://github.com/shinara03"
                  target="_blank"
                >
                  Lena
                </a>
                <a
                  className="contact"
                  href="https://github.com/andmitriy93"
                  target="_blank"
                >
                  Dmitrii
                </a>
                <a
                  className="contact"
                  href="https://github.com/jsadsad"
                  target="_blank"
                >
                  Josh
                </a>
                <a
                  className="contact"
                  href="https://github.com/kinda-dev"
                  target="_blank"
                >
                  Fabio
                </a>
              </div>
            </div>
            <Map
              style={{
                width: '45vw',
                height: '150px',
                position: 'relative',
                top: '30px',
                border: '1px solid black',
                borderRadius: '5px',
              }}
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
                radius={1200}
                center={coords}
                strokeColor="transparent"
                strokeOpacity={0}
                strokeWeight={5}
                fillColor="#FF0000"
                fillOpacity={0.2}
              />
            </Map>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQf1ahKg7gbuVHd9daHMMvm0zfPEpnBd8',
})(JobEdit)
