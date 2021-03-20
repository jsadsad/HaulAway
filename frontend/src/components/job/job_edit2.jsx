return (
    // <Suspense fallback={<Loader />}>
    <div className="job-form-outer">
      <Navbar />
      <div className="job-form-body-wrapper">
        <div className="job-form-title">Edit Job</div>
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
              <div className="job-form-errors">
                {errors.description}
              </div>
              <div>
                <select
                  className="job-form-select"
                  onChange={this.handleField('jobDifficulty')}
                  defaultValue={job.jobDifficulty}
                >
                  <option className="job-form-select-dropdown" value="easy">&#60;-----Easy-----&#62;</option>
                  <option className="job-form-select-dropdown" value="medium">&#60;-----Medium-----&#62;</option>
                  <option className="job-form-select-dropdown" value="hard">&#60;-----Hard-----&#62;</option>
                </select>
              </div>
            
              {/* <div className="job-form-input-box input-field"> */}
              <div className="job-form-please-confirm color-one">RECONFIRM Pickup</div>

                <Autocomplete
                  required
                  onPlaceSelected={this.onPickupSelected}
                  className="job-form-input-pickup input-field"
                  style={{ width: '40%' }}
                  types={['address']}
                  componentRestrictions={{ country: 'us' }}
                  onChange={this.handleField('pickup')}
                  placeholder={job.pickup}
                />
              {/* </div> */}
            
              {/* <div className="job-form-input-box"> */}
              <div className="job-form-please-confirm color-one">RECONFIRM Destination</div>

                <Autocomplete
                  required
                  onPlaceSelected={this.onDestinationSelected}
                  className="job-form-input-dest input-field"
                  style={{ width: '40%' }}
                  types={['address']}
                  componentRestrictions={{ country: 'us' }}
                  onChange={this.handleField('destination')}
                  placeholder={job.destination}
                  />
              {/* </div> */}
              <div className="form-distance-container">
                <label className="job-form-little-title color-one">
                  Previous Distance:
                  <span className="form-distance-num">
                    {job.distance} miles
                  </span>
                </label>
                <label className="job-form-little-title color-one">
                  New Distance:
                  <span className="form-distance-num">
                    {this.distanceRender().toFixed(2)} miles
                  </span>
                </label>
              </div>
              <div className="form-distance-container">
                <label className="job-form-little-title color-one">
                  Previous Price:
                  <span className="form-distance-num">
                    $ {job.price}
                  </span>
                </label>
                <label className="job-form-little-title color-one">
                  New Price:
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
                  defaultValue={job.jobStartDate}
                  />
                {errors.jobStartDate}
              </div>
            
              <div className="job-form-input-box">
                <label className="job-form-little-title color-one">End</label>
                <input
                  required
                  onChange={this.handleField('jobEndDate')}
                  type="date"
                  min={job.jobStartDate}
                  className="job-form-input-date input-field"
                  defaultValue={job.jobEndDate}
                />
                {errors.jobEndDate}
              </div>
            
              <div className="job-form-input-box">
                {/* <label className="job-form-little-title color-one">Upload Photos!</label> */}
              
                <input
                  // required
                  type="file"
                  id="job-form-input-pics"
                  onChange={this.handlePhotoFile}
                  multiple
                hidden/>
                <div className="job-form-upload-wrap">
                  <label htmlFor="job-form-input-pics" className="job-form-upload">Upload More Pictures?</label>
                </div>
              </div>
              <button className="job-form-btn">Submit</button>
              <button className="job-form-btn" onClick={this.handleDelete}>Delete</button>
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
              <div className="job-form-pictures-title color-one">
                Items to Haul:
              </div>
              <div className="job-form-pictures-wrap">
                {job.pictures.map((picture, idx) => {
                  return (
                    <div className="job-form-single-picture-wrap" key={idx}>
                      <img
                        className="job-form-picture"
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