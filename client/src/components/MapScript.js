import React from 'react';
import {
  Map, GoogleApiWrapper, Marker,
} from 'google-maps-react';

import GoogleMapsAPI from '../config/googlemaps';

let map;
let chicago = { lat: 41.85, lng: -87.65 };

const buttonControl = (controlDiv, map) => {
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
    map.setCenter(chicago);
  });
};

const initMap = () => {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: chicago,
  });

  // Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.
  let centerControlDiv = document.createElement('div');
  let buttonControl = new buttonControl(centerControlDiv, map);

  centerControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
};
