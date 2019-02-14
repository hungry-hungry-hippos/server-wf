import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';

import GoogleMapsAPI from '../config/googlemaps';

const styles = require('./GoogleMapStyles.json');

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GoogleMapsAPI}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '271px', marginTop: '10px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(props => <GoogleMap
  defaultZoom={16}
  defaultCenter={{ lat: 37.763826, lng: -122.47408 }}
  defaultOptions={{
    disableDefaultUI: true,
    styles: { styles },
  }}
>
  <Marker position={{ lat: 37.763826, lng: -122.47408 }} />
</GoogleMap>);

class GoogleMapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMarkerShown: false,
    };

    // this.delayedShowMarker = this.delayedShowMarker.bind(this);
    // this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  // componentDidMount() {
  //   this.delayedShowMarker();
  // }

  // delayedShowMarker = () => {
  //   setTimeout(() => {
  //     this.setState({ isMarkerShown: true });
  //   }, 3000);
  // }

  // handleMarkerClick = () => {
  //   this.setState({ isMarkerShown: false });
  //   this.delayedShowMarker();
  // }

  render() {
    return (
      <MapComponent />
    );
  }
}

// <MapComponent
//   isMarkerShown={this.state.isMarkerShown}
//   onMarkerClick={this.handleMarkerClick}
// />

export default GoogleMapComponent;
