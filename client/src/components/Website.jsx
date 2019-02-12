import React from 'react';
import $ from 'jquery';

import {
  IconSize, SpanStyles, SpanHover,
} from './Styles';

class Website extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      website: '',
    };

    this.getWebsite = this.getWebsite.bind(this);
  }

  componentDidMount() {
    this.getWebsite();
  }

  getWebsite() {
    const getData = (callback) => {
      $.get({
        url: 'http://localhost:3030/izakayaInfo',
        success: (data) => callback(null, data.website),
        error: (err) => callback(err),
      });
    };

    getData((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        website: data,
      });
    });
  }

  render() {
    return (
      <div className="business-website">
        <IconSize src="https://s3-us-west-1.amazonaws.com/zagat-screenshots/website_icon.jpg"></IconSize>
        <SpanStyles>
          <SpanHover>{this.state.website}</SpanHover>
        </SpanStyles>
      </div>
    );
  }
}

export default Website;
