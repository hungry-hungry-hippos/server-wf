import React from 'react';

import { SideBar } from './Styles';

import BusinessHours from './BusinessHours.jsx';
import ResAddress from './ResAddress.jsx';

const App = () => (
  <SideBar>
    <BusinessHours />
    <ResAddress />
  </SideBar>
);

export default App;
