import React from 'react';

import { SideBar } from './Styles';

import BusinessHours from './BusinessHours.jsx';
import ResAddress from './ResAddress.jsx';
import Phone from './Phone.jsx';

const App = () => (
  <SideBar>
    <BusinessHours />
    <ResAddress />
    <Phone />
  </SideBar>
);

export default App;
