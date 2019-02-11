import React from 'react';

import { IconSize, SpanStyles } from './Styles';

class Website extends React.Component {

  render() {
    return (
      <div className="business-website">
        <IconSize src="https://s3-us-west-1.amazonaws.com/zagat-screenshots/website_icon.jpg"></IconSize>
        <SpanStyles>www.izakayasozai.com</SpanStyles>
      </div>
    );
  }
}

export default Website;
