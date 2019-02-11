import React from 'react';

import { MapSize } from './Styles';

class Map extends React.Component {

  render() {
    return (
      <div className="business-map">
      <MapSize src="https://s3-us-west-1.amazonaws.com/zagat-screenshots/izakaya_googlemaps_screenshot.jpg" />
      </div>
    );
  }
}

export default Map;
