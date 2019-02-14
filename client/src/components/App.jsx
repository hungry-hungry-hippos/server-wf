import React from 'react';

import { SideBar } from './Styles';

import BusinessHours from './BusinessHours.jsx';
import ResAddress from './ResAddress.jsx';
import Phone from './Phone.jsx';
import Website from './Website.jsx';
import GetDirections from './GetDirections.jsx';
import MapContainer from './Map.jsx';

const App = () => (
  <SideBar>
    <BusinessHours />
    <ResAddress />
    <Phone />
    <Website />
    <GetDirections />
    <MapContainer />
  </SideBar>
);

export default App;
