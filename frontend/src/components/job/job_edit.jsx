import React from 'react'
import Navbar from '../navbar/navbar_container'
import Autocomplete from 'react-google-autocomplete'
import { uploadPhotos } from '../../util/photo_api_util'
import { getDistance, convertDistance } from 'geolib'
import './job_edit.css'

import { GoogleApiWrapper, Map, Marker, Circle } from 'google-maps-react'

class JobEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mapPosition: {
        lat: 36.778259,
        lng: -119.417931,
      },
      markerPosition: {
        lat: undefined,
        lng: undefined,
      },
      pickupCoords: {
        lat: '',
        lng: '',
      },
      destinationCoords: {
        lat: '',
        lng: '',
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

  componentWillUnmount() {
    this.props.clearErrors()
  }

  componentDidMount() {
    this.props.fetchJob(this.props.match.params.jobId).then(() => {
      this.setState({
        description: this.props.job ? this.props.job.description : '',
        pickup: this.props.job ? this.props.job.pickup : '',
        destination: this.props.job ? this.props.job.destination : '',
        distance: this.props.job ? this.props.job.distance : '',
        price: this.props.job ? this.props.job.price : '',
        jobDifficulty: this.props.job ? this.props.job.jobDifficulty : '',
        jobStartDate: this.props.job ? this.props.job.jobStartDate : '',
        jobEndDate: this.props.job ? this.props.job.jobEndDate : '',
        jobType: this.props.job ? this.props.job.jobType : '',
        pictures: this.props.job ? this.props.job.pictures : [],
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
      .then(this.props.history.push(`/homepage`))
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

  distanceRender() {
    if (this.state.destination) {
      if (
        this.state.destination === '' ||
        this.state.pickup === '' ||
        !this.state.destination.includes('USA')
      ) {
        return 0
      } else {
        return convertDistance(
          getDistance(
            {
              latitude: this.state.pickupCoords.lat,
              longitude: this.state.pickupCoords.lng,
            },
            {
              latitude: this.state.destinationCoords.lat,
              longitude: this.state.destinationCoords.lng,
            },
            0.01
          ),
          'mi'
        )
      }
    } else {
      return 0
    }
  }

  priceRender() {
    let distancePrice = this.distanceRender()
    return distancePrice * 2.55
  }

  render() {
    if (!this.props.job) return null

    const { job } = this.props
    const coords = this.state.mapPosition

    let previewPictures
    if (job.pictures) {
      previewPictures = job.pictures.map((pic, idx) => {
        return (
          <div key={idx}>
            <img className="preview-img" src={pic} alt="box-pictures" />
          </div>
        )
      })
    } else {
      previewPictures = ''
    }

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
                    required
                    className="job-edit-input-desc"
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
                    defaultValue={job.jobDifficulty}
                  >
                    <option value="easy">&#60;-----Easy-----&#62;</option>
                    <option value="medium">&#60;-----Medium-----&#62;</option>
                    <option value="hard">&#60;-----Hard-----&#62;</option>
                  </select>
                </div>
                <br />
                <div className="job-edit-input-box">
                  <Autocomplete
                    required
                    onPlaceSelected={this.onPickupSelected}
                    style={{ width: '25%' }}
                    types={['address']}
                    onChange={this.handleField('pickup')}
                    componentRestrictions={{ country: 'us' }}
                    defaultValue={job.pickup}
                    placeholder={job.pickup}
                  />
                  {this.props.errors.pickup}
                </div>
                <div className="job-edit-input-box">
                  <Autocomplete
                    required
                    onPlaceSelected={this.onDestinationSelected}
                    style={{ width: '25%' }}
                    types={['address']}
                    componentRestrictions={{ country: 'us' }}
                    onChange={this.handleField('destination')}
                    defaultValue={job.destination}
                    placeholder={job.destination}
                  />
                  {this.props.errors.destination}
                </div>
                <div className="form-distance-container">
                  <label className="form-distance-text">
                    Previous Distance: {this.state.distance}
                    <br />
                    New Distance: {this.distanceRender().toFixed(2)} miles
                  </label>
                </div>
                <div className="form-distance-container">
                  <label className="form-distance-text">
                    Previous Price: {this.state.price}
                    <br />
                    New Price: $ {this.priceRender().toFixed(2)}
                  </label>
                </div>
                <br />
                <div className="job-edit-input-box">
                  <label className="edit-start-end-date">Start</label>
                  <input
                    required
                    type="date"
                    className="job-edit-input-date"
                    defaultValue={job.jobStartDate}
                    onChange={this.handleField('jobStartDate')}
                  />
                  {this.props.errors.jobStartDate}
                </div>
                <br />
                <div className="job-edit-input-box">
                  <label className="edit-start-end-date">End</label>
                  <input
                    required
                    type="date"
                    className="job-edit-input-date2"
                    defaultValue={job.jobEndDate}
                    onChange={this.handleField('jobEndDate')}
                    min={job.jobStartDate}
                  />
                  {this.props.errors.jobEndDate}
                </div>
                <br />
                <div className="job-edit-input-box">
                  <label className="edit-upload-photos-text">
                    Upload More Photos?
                  </label>
                  <br />
                  <input
                    type="file"
                    className="job-edit-upload-btn"
                    onChange={this.handlePhotoFile}
                    multiple
                  />
                </div>
                <div className="preview-photos">{previewPictures}</div>
                <br />
                <div className="job-edit-btn-container">
                  <button className="edit-form-btn">Submit</button>
                  <button className="edit-form-btn" onClick={this.handleDelete}>
                    Delete
                  </button>
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
            </form>
            <div className="jobs-new-img-container">
              <img
                className="jobs-edit-img"
                src="https://haul-seeds.s3-us-west-1.amazonaws.com/happy_boxes_2.jpeg"
                alt="Happy to help!"
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
})(JobEdit)
