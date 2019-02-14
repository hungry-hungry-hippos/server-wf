import React from 'react';
import { createPortal } from 'react-dom';
import { MAP } from 'react-google-maps/lib/constants';
import PropTypes from 'prop-types';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker, google,
} from 'react-google-maps';

// class MapControl extends React.Component {
//   static contextTypes = { [MAP]: PropTypes.object }

//   componentDidMount() {
//     this.map = this.context[MAP];
//     this.controlDiv = document.createElement('div');
//     this.divIndex = this.map.controls[this.props.position].length;
//     this.map.controls[this.props.position].push(this.controlDiv);
//   }

//   componentWillUnmount() {
//     this.map.controls[this.props.position].removeAt(this.divIndex);
//   }

//   render() {
//     return createPortal(this.props.children, this.controlDiv);
//   }
// }

const mapRoot = document.getElementById('map');
let map;

const ButtonControl = (controlDiv, map) => {
  // Set CSS for the control border.
  let controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Expand Map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  let controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Expand Map';
  controlUI.appendChild(controlText);

  controlUI.addEventListener('click', () => {
    console.log('button works!');
    map.setCenter({ lat: 37.763826, lng: -122.47408 });
  });
};

class MapControl extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');

    this.buttonControl = this.buttonControl.bind(this);
  }

  buttonControl() {
    let centerControlDiv = this.el;
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: { lat: 37.763826, lng: -122.47408 },
    });
    let expandButton = new ButtonControl(centerControlDiv, map);

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(centerControlDiv);
  }

  componentDidMount() {
    this.buttonControl();
    // mapRoot.appendChild(this.el);
  }

  // componentWillUnmount() {
  //   mapRoot.removeChild(this.el);
  // }

  render() {
    return createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default MapControl;
