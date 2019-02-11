import React from 'react';

import { IconSize, SpanStyles, SpanHover } from './Styles';

class GetDirections extends React.Component {

  render() {
    return (
      <div className="business-getDirections">
        <IconSize src="https://s3-us-west-1.amazonaws.com/zagat-screenshots/getDirections_icon.jpg"></IconSize>
        <SpanStyles>
          <SpanHover>Get Directions</SpanHover>
        </SpanStyles>
      </div>
    );
  }
}

export default GetDirections;
