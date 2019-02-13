import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import { MapSize } from './Styles';

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
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233,
          }}
        />
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
