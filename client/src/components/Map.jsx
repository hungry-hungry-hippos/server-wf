import React from 'react';
import {
  Map, GoogleApiWrapper, Marker,
} from 'google-maps-react';

// import { MapSize } from './Styles';

import GoogleMapsAPI from '../config/googlemaps';

const mapStyles = {
  width: '404px',
  height: '271px',
  marginTop: '10px',
};

export class MapContainer extends React.Component {
  render() {
    return (
      <div className="business-map">
        <Map
          google={this.props.google}
          zoom={16}
          style={mapStyles}
          initialCenter={{
            lat: 37.763826,
            lng: -122.47408,
          }}
        >
          <Marker
            name={'Izakaya Sozai'}
            position={{ lat: 37.763826, lng: -122.47408 }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GoogleMapsAPI,
})(MapContainer);

// class Map extends React.Component {
//   render() {
//     return (
//       <div className="business-map">
//       <MapSize src="https://s3-us-west-1.amazonaws.com/zagat-screenshots/izakaya_googlemaps_screenshot.jpg" />
//       </div>
//     );
//   }
// }

// export default Map;
