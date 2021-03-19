import React, { Suspense } from 'react'
import Autocomplete from 'react-google-autocomplete'
import Navbar from '../navbar/navbar_container'
import { GoogleApiWrapper, Map, Marker, Circle } from 'google-maps-react'
import { getDistance, convertDistance } from 'geolib'
import { uploadPhotos } from '../../util/photo_api_util'
import Loader from '../Loader/loader'
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
      pickupCoords: {
        lat: '',
        lng: '',
      },
      destinationCoords: {
        lat: '',
        lng: '',
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
    this.distanceRender = this.distanceRender.bind(this)
  }

  componentWillUnmount() {
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
          distance: this.distanceRender().toFixed(2),
          price: this.priceRender().toFixed(2),
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
        distance: this.distanceRender().toFixed(2),
        price: this.priceRender().toFixed(2),
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
    const address = place.formatted_address,
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng()
    this.setState({
      pickupCoords: {
        lat: latValue,
        lng: lngValue,
      },
      pickup: address ? address : '',
    })
  }

  onDestinationSelected(place) {
    const address = place.formatted_address,
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng()
    this.setState({
      destinationCoords: {
        lat: latValue,
        lng: lngValue,
      },
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
  }

  priceRender() {
    let distancePrice = this.distanceRender()
    return distancePrice * 2.55
  }

  render() {
    const coords = this.state.mapPosition

    return (
      <Suspense fallback={<Loader />}>
      <div className="job-form-outer">
        <Navbar />
        <div className="job-form-body-wrapper">
          <div className="job-form-title">Job Request</div>
          <div className="job-form-body-inner-wrapper">
          <div className="job-form-info-left-side">

            <form onSubmit={this.handleSubmit} className="job-form-form">
              <div className="job-form-fields">
                {/* <div className="job-form-input-box input-field"> */}
                  <textarea
                    required
                    className="job-form-input-desc input-field"
                    placeholder="Please add informations about pick-up location details"
                    value={this.state.description}
                    onChange={this.handleField('description')}
                    />
                {/* </div> */}
                    {this.props.errors.description}
                <div>
                  <select
                    className="job-form-select"
                    onChange={this.handleField('jobDifficulty')}
                    value={this.state.jobDifficulty}
                  >
                    <option className="job-form-select-dropdown" value="" disabled defaultValue>
                      --Please Select Difficulty--
                    </option>
                    <option className="job-form-select-dropdown" value="easy">&#60;-----Easy-----&#62;</option>
                    <option className="job-form-select-dropdown" value="medium">&#60;-----Medium-----</option>
                    <option className="job-form-select-dropdown" value="hard">&#60;-----Hard-----&#62;</option>
                  </select>
                </div>
              
                {/* <div className="job-form-input-box input-field"> */}
                  <Autocomplete
                    required
                    onPlaceSelected={this.onPickupSelected}
                    className="job-form-input-pickup input-field"
                    style={{ width: '40%' }}
                    types={['address']}
                    componentRestrictions={{ country: 'us' }}
                    onChange={this.handleField('pickup')}
                    placeholder="Pickup"
                  />
                {/* </div> */}
              
                {/* <div className="job-form-input-box"> */}
                  <Autocomplete
                    required
                    onPlaceSelected={this.onDestinationSelected}
                    className="job-form-input-dest input-field"
                    style={{ width: '40%' }}
                    types={['address']}
                    componentRestrictions={{ country: 'us' }}
                    onChange={this.handleField('destination')}
                    placeholder="Destination"
                    />
                {/* </div> */}
                <div className="form-distance-container">
                  <label className="job-form-little-title color-one">
                    Distance:
                    <span className="form-distance-num">
                      {this.distanceRender().toFixed(2)} miles
                    </span>
                  </label>
                </div>
                <div className="form-distance-container">
                  <label className="job-form-little-title color-one">
                    Price:
                    <span className="form-distance-num">
                      $ {this.priceRender().toFixed(2)}
                    </span>
                  </label>
                </div>
                <div className="job-form-input-box">
                  <label className="job-form-little-title color-one">Start</label>
                  <input
                    required
                    onChange={this.handleField('jobStartDate')}
                    type="date"
                    className="job-form-input-date input-field"
                    value={this.state.jobStartDate}
                    />
                  {this.props.errors.jobStartDate}
                </div>
              
                <div className="job-form-input-box">
                  <label className="job-form-little-title color-one">End</label>
                  <input
                    required
                    onChange={this.handleField('jobEndDate')}
                    type="date"
                    min={this.state.jobStartDate}
                    className="job-form-input-date input-field"
                    value={this.state.jobEndDate}
                  />
                  {this.props.errors.jobEndDate}
                </div>
              
                <div className="job-form-input-box">
                  {/* <label className="job-form-little-title color-one">Upload Photos!</label> */}
                
                  <input
                    required
                    type="file"
                    id="job-form-input-pics"
                    onChange={this.handlePhotoFile}
                    multiple
                  hidden/>
                  <div className="job-form-upload-wrap">
                    <label htmlFor="job-form-input-pics" className="job-form-upload">Upload Pictures!</label>
                  </div>
                </div>
                <button className="job-form-btn">Submit</button>
              </div>
              </form>
                    </div>

              <div className="job-form-info-right-side">
                <div className="job-form-map-title color-one">Destination</div>
                <div className="job-form-map-container">
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
                <div className="job-form-pictures-wrap">
                  <img
                    className="job-form-picture"
                    src="https://haul-seeds.s3-us-west-1.amazonaws.com/happy_help.jpeg"
                    alt="Happy To Help"
                    />
                </div>

            </div>
          </div>
        </div>
      </div>
      </Suspense>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQf1ahKg7gbuVHd9daHMMvm0zfPEpnBd8',
})(JobPostForm)
