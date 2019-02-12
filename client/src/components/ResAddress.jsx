import React from 'react';
import $ from 'jquery';

import { IconSize, SpanStyles, SpanHover } from './Styles';

class ResAddress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
    };

    this.getAddress = this.getAddress.bind(this);
  }

  componentDidMount() {
    this.getAddress();
  }

  getAddress() {
    const getData = (callback) => {
      $.get({
        url: 'http://localhost:3030/izakayaInfo',
        success: data => callback(null, data.address),
        error: err => callback(err),
      });
    };

    getData((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        address: data,
      });
    });
  }

  render() {
    return (
      <div className="business-address">
        <IconSize src="https://s3-us-west-1.amazonaws.com/zagat-screenshots/address_icon.jpg"></IconSize>
        <SpanStyles>
          <SpanHover>{this.state.address}</SpanHover>
        </SpanStyles>
      </div>
    );
  }
}

export default ResAddress;
