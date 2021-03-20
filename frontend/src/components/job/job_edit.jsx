import React from 'react'
import Navbar from '../navbar/navbar_container'
import Autocomplete from 'react-google-autocomplete'
import Geocode from 'react-geocode'
import { uploadPhotos } from '../../util/photo_api_util'
import { GoogleApiWrapper, Map, Marker, Circle } from 'google-maps-react'
import { getDistance, convertDistance } from 'geolib'
import './job_edit.css'

class JobEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pickup: '',
      destination: '',
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
    this.distanceRender = this.distanceRender.bind(this)
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
      this.getCoords()
    })
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
          distance: this.distanceRender().toFixed(2),
          price: this.priceRender().toFixed(2),
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
        distance: this.distanceRender().toFixed(2),
        price: this.priceRender().toFixed(2),
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
    const address = place.formatted_address,
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng()

    this.setState({
      pickup: address ? address : '',
      pickupCoords: {
        lat: latValue,
        lng: lngValue,
      },
    })
  }

  onDestinationSelected(place) {
    const address = place.formatted_address,
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng()
    this.setState({
      destination: address ? address : '',
      destinationCoords: {
        lat: latValue,
        lng: lngValue,
      },
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
      this.state.destination === this.props.job.destination ||
      this.state.pickup === this.props.job.pickup ||
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
    const { job, errors } = this.props
    if (!job) return null

    // let previewPictures
    // if (job.pictures) {
    //   previewPictures = job.pictures.map((pic, idx) => {
    //     return (
    //       <div key={idx}>
    //         <img className="preview-img" src={pic} alt="box-pictures" />
    //       </div>
    //     )
    //   })
    // } else {
    //   previewPictures = ''
    // }

    return (
      // <Suspense fallback={<Loader />}>
      <div className="job-edit-outer">
        <Navbar />
        <div className="job-edit-body-wrapper">
          <div className="job-edit-title">Edit Job</div>
          <div className="job-edit-body-inner-wrapper">
          <div className="job-edit-info-left-side">
  
            <form onSubmit={this.handleSubmit} className="job-edit-edit">
              <div className="job-edit-fields">
                {/* <div className="job-edit-input-box input-field"> */}
                  <textarea
                    required
                    className="job-edit-input-desc input-field"
                    placeholder="Please add informations about pick-up location details"
                    value={this.state.description}
                    onChange={this.handleField('description')}
                    />
                {/* </div> */}
                <div className="job-edit-errors">
                  {errors.description}
                </div>
                <div>
                  <select
                    className="job-edit-select"
                    onChange={this.handleField('jobDifficulty')}
                    defaultValue={job.jobDifficulty}
                  >
                    <option className="job-edit-select-dropdown" value="easy">&#60;-----Easy-----&#62;</option>
                    <option className="job-edit-select-dropdown" value="medium">&#60;-----Medium-----&#62;</option>
                    <option className="job-edit-select-dropdown" value="hard">&#60;-----Hard-----&#62;</option>
                  </select>
                </div>
              
                {/* <div className="job-edit-input-box input-field"> */}
                <div className="job-edit-please-confirm color-one">RECONFIRM Pickup</div>
  
                  <Autocomplete
                    required
                    onPlaceSelected={this.onPickupSelected}
                    className="job-edit-input-pickup input-field"
                    style={{ width: '40%' }}
                    types={['address']}
                    componentRestrictions={{ country: 'us' }}
                    onChange={this.handleField('pickup')}
                    placeholder={job.pickup}
                  />
                {/* </div> */}
              
                {/* <div className="job-edit-input-box"> */}
                <div className="job-edit-please-confirm color-one">RECONFIRM Destination</div>
  
                  <Autocomplete
                    required
                    onPlaceSelected={this.onDestinationSelected}
                    className="job-edit-input-dest input-field"
                    style={{ width: '40%' }}
                    types={['address']}
                    componentRestrictions={{ country: 'us' }}
                    onChange={this.handleField('destination')}
                    placeholder={job.destination}
                    />
                {/* </div> */}
                <div className="edit-distance-container">
                  <label className="job-edit-little-title color-one">
                    Previous Distance:
                    <span className="edit-distance-num">
                      {job.distance} miles
                    </span>
                  </label>
                  <label className="job-edit-little-title color-one">
                    New Distance:
                    <span className="edit-distance-num">
                      {this.distanceRender().toFixed(2)} miles
                    </span>
                  </label>
                </div>
                <div className="edit-distance-container">
                  <label className="job-edit-little-title color-one">
                    Previous Price:
                    <span className="edit-distance-num">
                      $ {job.price}
                    </span>
                  </label>
                  <label className="job-edit-little-title color-one">
                    New Price:
                    <span className="edit-distance-num">
                      $ {this.priceRender().toFixed(2)}
                    </span>
                  </label>
                </div>
                <div className="job-edit-input-box">
                  <label className="job-edit-little-title color-one">Start</label>
                  <input
                    required
                    onChange={this.handleField('jobStartDate')}
                    type="date"
                    className="job-edit-input-date input-field"
                    defaultValue={job.jobStartDate}
                    />
                  {errors.jobStartDate}
                </div>
              
                <div className="job-edit-input-box">
                  <label className="job-edit-little-title color-one">End</label>
                  <input
                    required
                    onChange={this.handleField('jobEndDate')}
                    type="date"
                    min={job.jobStartDate}
                    className="job-edit-input-date input-field"
                    defaultValue={job.jobEndDate}
                  />
                  {errors.jobEndDate}
                </div>
              
                <div className="job-edit-input-box">
                  {/* <label className="job-edit-little-title color-one">Upload Photos!</label> */}
                
                  <input
                    // required
                    type="file"
                    id="job-edit-input-pics"
                    onChange={this.handlePhotoFile}
                    multiple
                  hidden/>
                  <div className="job-edit-upload-wrap">
                    <label htmlFor="job-edit-input-pics" className="job-edit-upload">Upload More Pictures?</label>
                  </div>
                </div>
                <button className="job-edit-btn">Submit</button>
                <button className="job-edit-btn" onClick={this.handleDelete}>Delete</button>
              </div>
              </form>
                    </div>
  
              <div className="job-edit-info-right-side">
                <div className="job-edit-map-title color-one">Destination</div>
                <div className="job-edit-map-container">
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
                      fillOpacity={0.3}
                    />
                  </Map>
                </div>
                <div className="job-edit-pictures-title color-one">
                  Items to Haul:
                </div>
                <div className="job-edit-pictures-wrap">
                  {job.pictures.map((picture, idx) => {
                    return (
                      <div className="job-edit-single-picture-wrap" key={idx}>
                        <img
                          className="job-edit-picture"
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
      </div>
      // </Suspense>
    )
  }
}

Geocode.setApiKey('AIzaSyBQf1ahKg7gbuVHd9daHMMvm0zfPEpnBd8')
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQf1ahKg7gbuVHd9daHMMvm0zfPEpnBd8',
})(JobEdit)
