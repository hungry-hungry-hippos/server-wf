import React from 'react';

import { IconSize, SpanStyles, SpanHover } from './Styles';

class Website extends React.Component {

  render() {
    return (
      <div className="business-website">
        <IconSize src="https://s3-us-west-1.amazonaws.com/zagat-screenshots/website_icon.jpg"></IconSize>
        <SpanStyles>
          <SpanHover>www.izakayasozai.com</SpanHover>
        </SpanStyles>
      </div>
    );
  }
}

export default Website;
