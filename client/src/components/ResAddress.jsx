import React from 'react';

import { IconSize, SpanStyles } from './Styles';

class ResAddress extends React.Component {

  render() {
    return (
      <div className="business-address">
        <IconSize src="https://s3-us-west-1.amazonaws.com/zagat-screenshots/address_icon.jpg"></IconSize>
        <SpanStyles>1500 Irving St, San Francisco, CA 94122, USA</SpanStyles>
      </div>
    );
  }
}

export default ResAddress;
