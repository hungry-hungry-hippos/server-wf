import React from 'react';
import $ from 'jquery';

import { IconSize, SpanStyles, SpanHover } from './Styles';

class Phone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
    };

    this.getPhone = this.getPhone.bind(this);
  }

  componentDidMount() {
    this.getPhone();
  }

  getPhone() {
    const getData = (callback) => {
      $.get({
        url: 'http://localhost:3030/izakayaInfo',
        success: data => callback(null, data.phone),
        error: err => callback(err),
      });
    };

    getData((err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({
        phone: data,
      });
    });
  }

  render() {
    return (
      <div className="business-phone">
        <IconSize src="https://s3-us-west-1.amazonaws.com/zagat-screenshots/phone_icon.jpg"></IconSize>
        <SpanStyles>
          <SpanHover>{this.state.phone}</SpanHover>
        </SpanStyles>
      </div>
    );
  }
}

export default Phone;
