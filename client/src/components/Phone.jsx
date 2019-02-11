import React from 'react';

import { IconSize, SpanStyles, SpanHover } from './Styles';

class Phone extends React.Component {

  render() {
    return (
      <div className="business-phone">
        <IconSize src="https://s3-us-west-1.amazonaws.com/zagat-screenshots/phone_icon.jpg"></IconSize>
        <SpanStyles>
          <SpanHover>(415) 742-5122</SpanHover>
        </SpanStyles>
      </div>
    );
  }
}

export default Phone;
