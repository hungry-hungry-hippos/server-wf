import React from 'react';
import {
  Map, GoogleApiWrapper, Marker,
} from 'google-maps-react';

import GoogleMapsAPI from '../config/googlemaps';

const styles = require('./GoogleMapStyles.json');

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
          // style={{ styles }}
          initialCenter={{
            lat: 37.763826,
            lng: -122.47408,
          }}
          disableDefaultUI={true}
          // mapTypeControl={true}
          // mapTypeControlOptions={{
          //   style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          //   position: google.maps.ControlPosition.BOTTOM_LEFT,
          // }}
        >
          <Marker
            name={'Izakaya Sozai'}
            position={{ lat: 37.763826, lng: -122.47408 }}
          />
        </Map>
      </div >
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GoogleMapsAPI,
})(MapContainer);
