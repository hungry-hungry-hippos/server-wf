import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';

import GoogleMapsAPI from '../config/googlemaps';
import MapControl from './MapControl.jsx';

import styles from './GoogleMapStyles.json';

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
  {/* <MapControl position={google.maps.ControlPosition.BOTTOM_LEFT} /> */}
</GoogleMap>);

class GoogleMapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    // this.delayedShowMarker = this.delayedShowMarker.bind(this);
    // this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
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

// below code needs to be in render section before return
// const modal = this.state.showModal ? (
//   <Modal>
//     <div className="modal">
//       <div>
//         With a portal, we can render content into a different
//         part of the DOM, as if it were any other React child.
//       </div>
//       This is being rendered inside the #modal-container div.
//       <button onClick={this.handleHide}>Hide modal</button>
//     </div>
//   </Modal>
// ) : null;
// return (
//   <div className="google-maps">
//     <MapComponent>
//       <MapControl>
//         <button onClick={this.handleShow} > Show modal</button>
//         {modal}
//       </MapControl>
//     </MapComponent>
//   </div>
// );

// <MapComponent
//   isMarkerShown={this.state.isMarkerShown}
//   onMarkerClick={this.handleMarkerClick}
// />

export default GoogleMapComponent;
