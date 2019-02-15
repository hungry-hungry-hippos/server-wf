import React from 'react';

import { ThemeProvider } from 'styled-components';
import { SideBar } from './Styles';

import BusinessHours from './BusinessHours.jsx';
import ResAddress from './ResAddress.jsx';
import Phone from './Phone.jsx';
import Website from './Website.jsx';
import GetDirections from './GetDirections.jsx';
import GoogleMapComponent from './GoogleMaps.jsx';

const App = () => (
  <ThemeProvider theme={{ background: '#f1f1f2' }}>
    <React.Fragment>
      <SideBar>
        <BusinessHours />
        <ResAddress />
        <Phone />
        <Website />
        <GetDirections />
        <GoogleMapComponent />
      </SideBar>
    </React.Fragment>
  </ThemeProvider>
);

export default App;
