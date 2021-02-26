import React from 'react' 
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends React.Component {
//   constructor( props ){
//   super( props );
//   this.state = {
//    address: '',
//    city: '',
//    area: '',
//    state: '',
//    mapPosition: {
//     lat: this.props.center.lat,
//     lng: this.props.center.lng
//    },
//    markerPosition: {
//     lat: this.props.center.lat,
//     lng: this.props.center.lng
//   }
//   }
//  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter= {{ lat: 38.8980647, lng: -77.0333818}}
        defaultZoom = {13}
      >
        {props.isMarkerShown && <Marker position={{lat: 38.8980647, lng: -77.0333818}} /> }
      </GoogleMap>
    ))
    return (
      <div>
        <GoogleMapExample
          isMarkerShown
          containerElement={ <div style={{height: `500px`, width: `500px`}} />}
          mapElement = {<div style={{ height: `100%`}}/>}
         />
      </div>
    )
  }
}

export default Map